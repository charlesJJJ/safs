
import * as bcrypt from 'bcryptjs';
import { IResolvers } from 'graphql-tools';
import { createTokens } from './auth';
import { Contacts } from './entity/Contact';
import { Users } from "./entity/User";



export const resolvers: IResolvers ={
    
    Query:{
        user:(_,__,{req})=>{  
            if(!req.userId){
                return null;
            }
            return Users.findOne(req.userId);
        }
    },
    Mutation:{
        register:async(_,{first_name,last_name,phone,username,password})=>{
            const hashedPassword =await bcrypt.hash(password,10);
            await Users.create({
                first_name,
                last_name,
                phone,
                username,
                password:hashedPassword


            }).save();

         return true;
        },
        login:async(_,{username,password},{res})=>{
            const user = await Users.findOne({where: { username }});
            if(!user){
                throw new Error ('user  does not exist');
            }
            

            const valid=await bcrypt.compare(password,user.password);
            if(!valid){
                throw new Error('password incorrect');
            }

           const {accessToken, refreshToken}=createTokens(user);

            res.cookie("refresh-token",refreshToken,expire:30);
            res.cookie("access_token", accessToken, { expire: 60 * 15 });


         return user;
            
  
        },
        invalidateTokens:async(_,__,{req})=>{
            if(!req.userId){
                return false;
            }

            const user=await Users.findOne(req.userId);
            if(!user){
                return false;
            }
            user.remember_token += 1;
            await user.save();

            return true;

        },
         
         addContact:async (_, { name, village, district, crop, contact_no, rca_id},{req}) => {
              if (!req.userId) {
            //     // return null;
            //     //console.log("token not  exist");
            //      //throw new Error('Unauthorized');
            //     
                 return false;
             }
             else{
             console.log('cookie: ', req.cookies.access_token);
                 const contact=Contacts.create({
                     name,
                     village,
                     district,
                     crop,
                     contact_no,
                     rca_id


                 }).save();

               return contact;
            
             } 
                 
                
                
             

           
             

             
            
            
        }
        
    }
}; 
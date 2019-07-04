
import * as bcrypt from 'bcryptjs';
import { IResolvers } from 'graphql-tools';
import { createTokens } from './auth';
import { Contact } from './entity/Contact';
import { User } from "./entity/User";



export const resolvers: IResolvers ={
    
    Query:{
        user: async(_, args) => {
           // (_, args, context)
           const user = await User.findOne({where: { id:args.id }});
           const contact = await Contact.find({where: { rca_id:args.id }});
           //console.log(user);
           return {user,contact}
          },
    },
    Mutation:{
        register:async(_,{first_name,last_name,phone,username,password})=>{
            const hashedPassword =await bcrypt.hash(password,10);
            await User.create({
                first_name,
                last_name,
                phone,
                username,
                password:hashedPassword


            }).save();

         return true;
        },
        login:async(_,{username,password})=>{
            const user = await User.findOne({where: { username }});
            if(!user){
                throw new Error ('user  does not exist');
            }
            

            const valid=await bcrypt.compare(password,user.password);
            if(!valid){
                throw new Error('password incorrect');
            }
            const accessToken=createTokens(user);
            return accessToken;
            // {
            //     "Authorization": "Bearer <JWT>"
            //   }  //add  this commented line for JWT token authorization header
  
        },
        invalidateTokens:async(_,__,{req})=>{
            if(!req.userId){
                return false;
            }

            const user=await User.findOne(req.userId);
            if(!user){
                return false;
            }
            user.remember_token += 1;
            await user.save();

            return true;

        },
         
         addContact:async (_, { name, village, district, crop, contact_no, rca_id},{req}) => {
            const token = req.headers.authorization;
            
              if (!token) {
           
                 return "Access Denied";
             }
             else{
            
                 Contact.create({
                     name,
                     village,
                     district,
                     crop,
                     contact_no,
                     rca_id


                 }).save();

               //return contact;
               return "Contact Added Successfully";
            
             } 
                 
                
                
             

           
             

             
            
            
        }
        
    }
}; 
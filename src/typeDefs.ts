import {gql} from "apollo-server-express";
export const typeDefs=gql`
type Query{
   user:User
},
type User{
    id:ID!,
    username:String!,
    phone:String!,
    rca_id:Int!
    contacts:String

}, 
type Contact{
    id:ID!,
    name:String,
    village:String,
    district:String,
    crop:String,
    contact_no:String,
    rca_id:Int
  

},
type Mutation{
    register(first_name:String!,last_name:String!,Phone:String!,username:String!,password:String!):Boolean!
    login(username:String!,password:String!):User!
    invalidateTokens:Boolean!                                                                           
    addContact(name:String!,village:String!,district:String!,crop:String!,contact_no:String!,rca_id:Int!):Contact
}


`;
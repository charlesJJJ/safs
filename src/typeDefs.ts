import {gql} from "apollo-server-express";
export const typeDefs=gql`

type User{
    id:ID!,
    username:String!,
    phone:String!,
    contact:[Contact]
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
type Query{
    user(id: ID!): User
    
 },
type Mutation{
    register(first_name:String!,last_name:String!,Phone:String!,username:String!,password:String!):Boolean!
    login(username:String!,password:String!):String!
    invalidateTokens:Boolean!                                                                           
    addContact(name:String!,village:String!,district:String!,crop:String!,contact_no:String!,rca_id:Int!):String!
}


`;
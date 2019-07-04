// import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany} from "typeorm";
// import { Contacts } from './Contact';

// @Entity()
// export class Users extends BaseEntity{

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column("text")
//     first_name: string;

//     @Column("text")
//     last_name: string;

//     @Column("text")
//     phone: number;
 
//     @Column("text")
//     remember_token: string;

//     @Column("text")
//     username: string;

//     @Column("text")
//     password: string;

//     @OneToMany(()=>Contacts,contact=>contact.user)
//     contacts:Contacts[];

// }
import { Column, Entity, PrimaryGeneratedColumn ,BaseEntity, OneToMany} from 'typeorm';
import Contact from '../entity/Contact';
//import Post from '../post/post.entity';
 
@Entity()
export class User extends BaseEntity{
      @PrimaryGeneratedColumn()
      id: number;

    @Column("text")
    first_name: string;

    @Column("text")
    last_name: string;

    @Column("text")
    phone: number;
 
    @Column("text")
    remember_token: string;

    @Column("text")
    username: string;

    @Column("text")
    password: string;
 
    @OneToMany(() => Contact, contact=> contact.user)
   contact: Contact[];
  
}
 
export default User;
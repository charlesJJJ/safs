// import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,ManyToOne,JoinColumn} from "typeorm";
// import { Users } from './User';

// @Entity("contacts")
// export class Contacts extends BaseEntity{

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column("text")
//     name: string;

//     @Column("text")
//     village: string;

//     @Column("text")
//     district: string;

//     @Column("text")
//     crop: string;

//     @Column("text")
//     contact_no: number;

//     @Column("text")
//     rca_id: number;



//     // @ManyToOne(()=>Users,user=>user.contacts)
//     // @JoinColumn({name:"rca_id"})
//     // user:Users

//     @ManyToOne(() => Users)
//     @JoinColumn({name: 'rca_id', referencedColumnName: 'id'})
//     user: Users;
    

// }
import { Column, Entity,PrimaryGeneratedColumn,BaseEntity, ManyToOne,JoinColumn} from 'typeorm';
import User from '../entity/User';
 
@Entity()
export class Contact extends BaseEntity {
     @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    village: string;

    @Column("text")
    district: string;

    @Column("text")
    crop: string;

    @Column("text")
    contact_no: number;

    @Column("text")
    rca_id: number;
 
  @ManyToOne(() => User, user=> user.contact)
  @JoinColumn({ name: "rca_id" })
   user: User;
  
}
 
export default Contact;

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany} from "typeorm";
import { Contacts } from './Contact';

@Entity()
export class Users extends BaseEntity{

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

    @OneToMany(()=>Contacts,contact=>contact.owner)
    contacts:Contacts[];

}

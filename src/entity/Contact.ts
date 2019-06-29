import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,ManyToOne,JoinColumn} from "typeorm";
import { Users } from './User';

@Entity("contacts")
export class Contacts extends BaseEntity{

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



    @ManyToOne(()=>Users,user=>user.contacts)
    @JoinColumn({name:"rca_id"})
    owner:Users

    

}
 
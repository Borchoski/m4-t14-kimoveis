import { Real_Estate } from "./realState.entities";
import { User } from "./users.entities";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity("shedules_users_properties")
export class ShedulesUsersProperties {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "date" })
    date: string;

    @Column({ type: "timestamp" })
    hour: string;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Real_Estate)
    realEstate: Real_Estate;
}

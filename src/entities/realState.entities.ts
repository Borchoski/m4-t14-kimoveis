import { Category } from "./categories.entities";
import { Address } from "./adresses.entities";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
} from "typeorm";

@Entity("real_estate")
export class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal" })
    value: boolean;

    @Column({ type: "integer" })
    size: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;
}

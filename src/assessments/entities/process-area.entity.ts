import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import { Criteria } from './criteria.entity';
import { Level } from './level.entity';

@Entity()
export class ProcessArea {
    //key
    @PrimaryGeneratedColumn()
    id: number;

    //Attributes
    @Column({ type: 'varchar', length: 255, unique: true })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'int' })
    weight: number;

    //Audit Attributes
    @CreateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    //Foreign keys
    @ManyToOne(() => Level, (level) => level.processAreas)
    level: Level;

    //Keys into external Tables
    @OneToMany(() => Criteria, (criteria) => criteria.processArea)
    criteria: Criteria[];
}

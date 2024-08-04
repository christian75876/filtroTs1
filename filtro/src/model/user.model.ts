import { Table, Model, Column, AutoIncrement, PrimaryKey, DataType, AllowNull } from "sequelize-typescript";

@Table({
    tableName: "users",
    timestamps: true,
})

export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(
        DataType.INTEGER
    )
    id!: number;

    @Column(
        DataType.STRING(255),
    )
    email!: string;

    @Column(
        DataType.STRING(255),
    )
    password!: string;
};

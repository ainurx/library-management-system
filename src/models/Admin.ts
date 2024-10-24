import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
const { INTEGER, STRING } = DataTypes

import sequelize from '../common/database';

class Admin extends Model<InferAttributes<Admin>, InferCreationAttributes<Admin>>{
    declare id: number | null;
    declare name: string;
    declare username: string;
    declare password: string;
}

Admin.init(
    {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: STRING(30),
            allowNull: false
        },
        username: {
            type: STRING(20),
            allowNull: false
        },
        password: {
            type: STRING(255),
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'admin',
        timestamps: true
    }
)

export default Admin

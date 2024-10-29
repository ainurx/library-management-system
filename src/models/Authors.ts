import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
const { INTEGER, STRING } = DataTypes

import sequelize from '../common/database';

import Books from './Books';

class Authors extends Model<InferAttributes<Authors>, InferCreationAttributes<Authors>>{
    declare id: number | null;
    declare name: string;
}

Authors.init(
    {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'authors',
        timestamps: false
    }
)

Authors.hasMany(Books, {as: 'books'})

export default Authors

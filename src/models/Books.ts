import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
const { INTEGER, STRING, ENUM } = DataTypes

import sequelize from '../common/database';
import { Category } from '../types/enums';

import Authors from './Authors';

class Books extends Model<InferAttributes<Books>, InferCreationAttributes<Books>>{
    declare id: number | null;
    declare authorId: number;
    declare title: string;
    declare description: string | null;
    declare category: Category;
    declare publishedYear: number | null; 
}

Books.init(
    {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authorId: {
            type: INTEGER,
            allowNull: false
        },
        title: {
            type: STRING(70),
            allowNull: false
        },
        description: {
            type: STRING(70),
            allowNull: true
        },
        category: {
            type: ENUM(...Object.values(Category)),
            allowNull: false
        },
        publishedYear: {
            type: INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: 'books',
        timestamps: false
    }
)

// Books.belongsTo(Authors, {
//     foreignKey: 'authorId',
//     onDelete: 'CASCADE',
//     as: 'author'
// })

export default Books

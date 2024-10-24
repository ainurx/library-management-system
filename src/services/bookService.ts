import { Transaction } from "sequelize";

import Books from "../models/Books"; 
import { TBookPayload } from "../types/types";

const create = (payload: TBookPayload, transaction: Transaction):Promise<Books> => Books.create(payload, { transaction })
const findById = (id: number, transaction: Transaction):Promise<Books|null> => Books.findByPk(id, { transaction })
const findAndPaginate = (params: TBookPayload, offset: number = 0, transaction: Transaction)
    :Promise<{rows: Books[], count: number}> => 
        Books.findAndCountAll({ where: { ...params }, offset, limit: 5, transaction }) 
const update = (id: number, payload: TBookPayload, transaction: Transaction):Promise<[affectedCount: number]> => Books.update(payload, { where: {id}, transaction})
const remove = (id: number, transaction: Transaction):Promise<number> => Books.destroy({where: {id}, transaction})

export default {
    create,
    findById,
    findAndPaginate,
    update,
    remove
}
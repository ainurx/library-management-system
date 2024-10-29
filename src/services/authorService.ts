import { Transaction } from "sequelize";

import Authors from "../models/Authors";
// import { Authors } from "../models/index";
import { TAuthorPayload } from "../types/types";

const create = (payload: TAuthorPayload, transaction: Transaction):Promise<Authors> => Authors.create(payload, { transaction })
const findById = (id: number, transaction: Transaction):Promise<Authors|null> => Authors.findByPk(id, { transaction })
const findOne = (params: TAuthorPayload, transaction: Transaction):Promise<Authors|null> => Authors.findOne({ where: { ...params }, transaction})
const findAndPaginate = (params: { name?: string}, offset: number = 0, transaction: Transaction)
    :Promise<{rows: Authors[]; count: number;}> => 
        Authors.findAndCountAll({
            where: {...params}, 
            order: [['id', 'DESC']],
            offset,
            limit: 5,
            transaction
        })
const update = (id: number, payload: TAuthorPayload, transaction: Transaction):Promise<[affectedCount: number]> => 
    Authors.update(payload, { where: { id }, transaction})
const remove = (id: number, transaction: Transaction):Promise<number> => Authors.destroy({ where: {id}, transaction})

export default {
    create,
    findById,
    findOne,
    findAndPaginate,
    update,
    remove
}
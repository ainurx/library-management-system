import { Transaction } from "sequelize";

import Admin from "../models/Admin";

import { TAdminPayload } from "../types/types";

const create = (payload: TAdminPayload, transaction: Transaction):Promise<Admin>  => Admin.create(payload, { transaction })
const findById = (id: number, transaction: Transaction):Promise<Admin|null> => Admin.findByPk(id, { transaction })

export default {
    create,
    findById
}
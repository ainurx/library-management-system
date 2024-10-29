import { Request, Response, NextFunction } from "express";
import { Transaction } from "sequelize";
import _ from 'lodash'

import sequelize from "../common/database";
import { isEmpty, pageToOffset } from "../common/util";
import { TAuthorPayload } from "../types/types";
import authorService from "../services/authorService";
import { ParsedQs } from "../types/interfaces";

export const createAuthor = async(req: Request, res: Response, next: NextFunction):Promise<void> =>{
    try{
        const payload:TAuthorPayload = req.body;

        const result = await sequelize.transaction(async(transaction: Transaction)=>{
            if(isEmpty(payload.name)){
                throw new Error('Nama author diperlukan')
            }

            const author = await authorService.findOne({name: payload.name}, transaction)
            if(!isEmpty(author)){
                throw new Error('Author telah ada')
            }

            return await authorService.create(payload, transaction)
        })

        res.status(201).json(result)
    } catch(err: any){
        res.status(400).send({message: err.message})
    } 
}

export const findAuhor = async(req: Request<{}, {}, {}, ParsedQs>, res:Response, next:NextFunction):Promise<void> =>{
    try{
        
        const result = await sequelize.transaction(async(transaction: Transaction) =>{
            const params = req.query
            if(isEmpty(params.page)){
                throw new Error('Halaman diperlukan.')
            }

            const page = pageToOffset(Number(req.query.page))

            delete params['page']

            return await authorService.findAndPaginate(params, page, transaction)
        })

        res.json(result)
    } catch(err: any){
        res.status(400).send({message: err.message})
    }
}

export const deleteAuthor = async(req: Request, res: Response, next: NextFunction):Promise<void>=>{
    try{
        const {id} = req.params

        await sequelize.transaction(async(transaction: Transaction)=>{
            console.log(id)
            const author = await authorService.findById(Number(id), transaction)
            if(isEmpty(author)){
                throw new Error('Author tidak ditemukan')
            }

            await authorService.remove(Number(id), transaction)
        })
        res.json({message: 'Author berhasil dihapus'})
    } catch(err: any){
        res.status(400).send({message: err.message})
    }
}

export const updateAuthor = async(req: Request, res: Response):Promise<void> =>{
    try{
        const id = Number(req.params.id)
        const payload: TAuthorPayload = req.body

        await sequelize.transaction(async(transaction: Transaction)=>{
            const author = await authorService.findById(id, transaction)
            if(isEmpty(author)){
                throw new Error('Author tidak ditemukan')
            }

            if(_.isEmpty(payload.name)){
                throw new Error('Nama tidak boleh kosong')
            }

            const authorWithName = await authorService.findOne({name: payload.name}, transaction)
            if(!isEmpty(authorWithName)){
                throw new Error('Author telah ada')
            }

            await authorService.update(id, {name: payload.name}, transaction)
        })

        res.json({message: 'Author updated'})
    } catch(err: any){
        res.status(400).send({message: err.message})
    }
}
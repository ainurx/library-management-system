import _ from 'lodash'
import bcrypt from 'bcrypt'

export const isEmpty = (params: any):boolean => {
    if(typeof params === 'string' || typeof params === 'number'){
        return _.isNull(params)
    } else {
        return _.isEmpty(params)
    }
}


export const hashPassword = (password: string):string =>{
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    return hashedPassword
}

export const pageToOffset = (page: number):number =>{
    const offset = (page * 5 ) - 5
    return offset
}
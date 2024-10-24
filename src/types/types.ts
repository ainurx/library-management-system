import { Category } from "./enums";

export type TAdmin = {
    id: number;
    name: string;
    username: string;
    password: string;
}

export type TAdminPayload = Pick<TAdmin, 'name' | 'username' | 'password'>

export type TAuthor = {
    id: number;
    name: string;
}

export type TAuthorPayload = Pick<TAuthor, 'name'>

export type TBook = {
    id: number;
    authorId: number;
    title: string;
    description: string;
    category: Category;
    publishedYear: number;
}

export type TBookPayload = Omit<TBook, 'id'>




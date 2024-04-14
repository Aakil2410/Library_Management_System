import {createContext} from 'react';

export interface IBook {
    title: string;
    author: string;
    publisher: string;
    category: string;
    description: string;
    isbn: string;
    thumbnail: string;
    numAvailableCopies: number;
    parentId: string;
    status: string;
    
}


export const INITIAL_STATE: IBookStateContext={}

export interface IBookStateContext {
    readonly CreateBook?: IBook;
    readonly GetBook?: IBook[];
    readonly DeleteBook?: string;
    readonly UpdateBook?: IBook;
}

export interface IBookActionContext {
    createBook:(payload:IBook) => void;
    getBooks?:() => void;
    deleteBook?:(payload:string) => void;
    updateBook?:(payload:IBook) => void;// why capital
}

const BookContext = createContext<IBookStateContext>(INITIAL_STATE);

const BookActionContext = createContext<IBookActionContext>(undefined);

export {BookContext,BookActionContext};
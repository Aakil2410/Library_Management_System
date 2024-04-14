import { createAction} from 'redux-actions';
import { IBookStateContext, IBook } from "./context";

export enum BookActionEnum{
    CREATE_BOOK = "CREATE_BOOK",
    GET_BOOK = "GET_BOOK",
    DELETE_BOOK = "DELETE_BOOK",
    UPDATE_BOOK = "UPDATE_BOOK"
}

export const createBookRequestAction = createAction<IBookStateContext>(BookActionEnum.CREATE_BOOK,(createBook) => ({createBook}));
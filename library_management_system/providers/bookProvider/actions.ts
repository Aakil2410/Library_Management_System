import { createAction} from 'redux-actions';
import { IBook, IBookStateContext } from "./context";

export enum BookActionEnum{
    CREATE_BOOK = "CREATE_BOOK",
    GET_BOOK = "GET_BOOK",
    DELETE_BOOK = "DELETE_BOOK",
    UPDATE_BOOK = "UPDATE_BOOK"
}
//                                                            ./context              ./action               ./context>IBook
export const createBookRequestAction = createAction<IBookStateContext, IBook>(BookActionEnum.CREATE_BOOK, p => p);
export const deleteBookRequestAction = deleteAction<IBookStateContext, IBook>()

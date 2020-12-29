import {combineReducers, createStore} from "redux";
import firstGraphReduser from "./firstGraphReduser";

export type RootStoreType = {
    firstGraph: {
        update: boolean,
        moneyEarly: number
    }
}


export const reducers = combineReducers({
    firstGraph: firstGraphReduser
})

const store: RootStoreType = createStore(reducers);

export default store
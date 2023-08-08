import {createReducer,on} from "@ngrx/store"
import {increment,decrement,reset} from "./counter.actions"
import { AppState } from "./app.state"

export const initialState:AppState = {
    counter:0
}
export const counterReducer = createReducer(
    initialState,
    on(increment,(state)=>({...state,counter:state.counter + 1})),
    on(decrement,(state)=>({...state,counter:state.counter - 1})),
    on(reset,(state)=>({...state,counter:0}))
)
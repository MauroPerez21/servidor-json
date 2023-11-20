import {createSlice} from '@reduxjs/toolkit'
import reducer from './reducer'

const bookSlice = 
createSlice({
    name:'books',
    initialState:[],
    reducers:{
        add:{reducer},
        remove:{reducer},
        up:{reducer},
        down:{reducer},
    }
})

const bookReducer = bookSlice.reducer
export const {add, remove, up, down,} = bookSlice.actions
export default bookReducer
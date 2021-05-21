import {createSlice} from '@reduxjs/toolkit'
import {retrieveBugs} from '../bugController'

const slice  = createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        getBugs:state => retrieveBugs(),
        addBugs:(state,action)=>{
        },
        editBug:(state,action)=>{
        },
        markDone:(state,action)=>{
        }
    }
})

export default slice.reducer;

export const {getBugs,addBugs,editBug,markDone} = slice.actions;
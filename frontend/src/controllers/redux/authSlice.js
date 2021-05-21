import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"auth",
    initialState:{
        admin:false,
        LoggedIn:false,
    },
    reducers:{
        signIn:(state,action)=>{
            const {name,password} = action.payload;
            state.LoggedIn = true;
            state.admin = true;
        },
        signOut:(state)=>{
            state.signOut = false;
            state.admin = false;
        },
        addUser:(state,action)=>{

        }
    }
})

export default slice.reducer;

export const {signIn,signOut,addUser} = slice.actions;
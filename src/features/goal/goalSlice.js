//the Redux logic for the goal feature

import { createSlice } from '@reduxjs/toolkit'

export const goalSlice = createSlice({
    name: 'goals',
    initialState : {
        value: []
    },
    reducers: {
        createEntry: (state, action) =>{
            console.log('state', state, 'action', action)
            state.value.push(action.payload)
        }
    }
})

// export const createEntryAsync = entry => dispatch =>{
//     setTimeout(()=>{
//         dispatch(createEntry(entry))
//     })
// }

export const selectGoals = state => state.goals.value

export const {createEntry} = goalSlice.actions
export default goalSlice.reducer
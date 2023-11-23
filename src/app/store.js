import { configureStore } from '@reduxjs/toolkit'
import goalReducer from '../features/goal/goalSlice'

export default configureStore({
    reducer: {
        goals: goalReducer
    }
})
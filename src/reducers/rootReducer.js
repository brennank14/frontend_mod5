import { combineReducers } from 'redux'
import authReducer from './authReducer'
import studentReducer from './studentReducer'
import teacherReducer from './teacherReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    teacher: teacherReducer,
    student: studentReducer
})

export default rootReducer
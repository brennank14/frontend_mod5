import { combineReducers } from 'redux'
import authReducer from './authReducer'
import studentReducer from './studentReducer'
import teacherReducer from './teacherReducer'
import questionReducer from './questionReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    teacher: teacherReducer,
    student: studentReducer,
    question: questionReducer
})

export default rootReducer
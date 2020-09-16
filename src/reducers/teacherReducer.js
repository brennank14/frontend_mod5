export default function teacherReducer(state = [], action) 
{
    switch(action.type) {

        case "TEACHER_LOGIN_SUCCESS":
            return action.teacher
        default:
            return state;    
    }
}

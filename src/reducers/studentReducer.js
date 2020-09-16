export default function studentReducer(state = [], action) 
{
    switch(action.type) {

        case "STUDENT_LOGIN_SUCCESS":
            return action.student
        default:
            return state;    
    }
}
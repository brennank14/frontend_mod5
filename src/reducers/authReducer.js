export default function authReducer(state = null, action) 
{
    switch(action.type) {
        case "STUDENT_LOGIN_SUCCESS":
            return action.student
        case "TEACHER_LOGIN_SUCCESS":
            return action.teacher
       
        case "ADD_QUESTION":
            return {...state, questions: [...state.questions, action.question]};

        default:
            return state;    
    }
}
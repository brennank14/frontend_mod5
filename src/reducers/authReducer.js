export default function authReducer(state = null, action) 
{
    switch(action.type) {
        case "STUDENT_LOGIN_SUCCESS":
            return action.student
        case "TEACHER_LOGIN_SUCCESS":
            return action.teacher
       
        case "ADD_QUESTION":
            return {...state, questions: [...state.questions, action.question]};

        case "LOAD_STUDENT_QUESTIONS":
            console.log(action.questions)
            console.log('auth', state.auth)
            console.log('student', state.student)
            return [action.questions.filter(q => q.teacher_id === state.auth.teacher_id )]


        default:
            return state;    
    }
}
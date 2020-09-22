export default function authReducer(state = null, action) 
{
    switch(action.type) {
        case "STUDENT_LOGIN_SUCCESS":
            return action.student
        case "TEACHER_LOGIN_SUCCESS":
            return action.teacher

        case "ADD_QUESTION":
            return {...state, questions: [...state.questions, action.question]};
        case "LOAD_QUESTIONS":
            return [...action.questions]

        case "LOAD_STUDENT_QUESTIONS":
            return [...action.student_questions]

        case "ANSWER_QUESTION":
            return {...state, answer: action.answer}
        case "GRADE_QUESTION":
            return {...state, grade: action.grade, feedback: action.feedback}

        default:
            return state;    
    }
}
export default function authReducer(state = null, action) 
{
    switch(action.type) {
        case "STUDENT_LOGIN_SUCCESS":
            return action.student
        
        case "TEACHER_LOGIN_SUCCESS":
            return action.teacher
            
        case 'LOGOUT_SUCCESS':
            return null

        case "ADD_QUESTION":
            return {...state, questions: [...state.questions, action.question]};
    
        case "ADD_STUDENT_QUESTION":
            return {...state, studentQuestions: [...state.students.studentQuestions, action.studentQuestion]};
    
        case "LOAD_QUESTIONS":
            return [...action.questions]

        case "LOAD_STUDENT_QUESTIONS":
            return [...action.student_questions]

        case "ANSWER_QUESTION":
            return {...state, answer: action.answer}

        case "GRADE_QUESTION":
            return {...state, grade: action.grade, feedback: action.feedback}

        // case "DELETE_STUDENT_QUESTION":
        //     return state.filter(studentQuestion => studentQuestion.id !== action.id);

        case "DELETE_QUESTION":
            return {...state, questions: [...state.questions.filter(question => question.id !== action.id)]}

        default:
            return state;    
    }
}
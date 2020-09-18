export default function teacherReducer(state = [], action) 
{
    switch(action.type) {

        case "TEACHER_LOGIN_SUCCESS":
            return action.teacher
        
        case "ADD_QUESTION":
            return {...state, questions: [...state.questions, action.question]};

        case 'DELETE_QUESTION':  
            return [state.questions.filter(q => q.id !== action.id )]
            //return {...state, questions: [...state.questions.filter(t => t.id !== action.id )]} 

        default:
            return state;    
    }
}

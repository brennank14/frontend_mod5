export default function questionReducer(state = [], action) 
{
    switch(action.type) {

        case "LOAD_QUESTIONS":
            return [...action.questions]







        // case "EDIT_QUESTION":
        //     return state.map(question => {
        //         if (question.id === action.question.id) {
        //             return action.question
        //         } else {
        //             return question
        //         }
        //         })


        // case 'DELETE_QUESTION':
        //     return state.filter(question => question.id !== action.id);

        default:
            return state;    
    }
}
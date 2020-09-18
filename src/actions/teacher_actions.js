export const loadQuestions = questions => {
    return {
        type: "LOAD_QUESTIONS",
        questions
    }
  }


export const addQuestion = question => {
    return {
        type: "ADD_QUESTION",
        question
    }
}

export const deleteQuestion = question => {
    return {
        type: "DELETE_QUESTION",
        question
    }
}
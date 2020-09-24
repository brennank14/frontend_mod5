export const teacherLoginSuccess = (teacher) => {
    return {
        type: 'TEACHER_LOGIN_SUCCESS',
        teacher
    }
}

export const addQuestion = question => {
    return {
        type: "ADD_QUESTION",
        question
    }
}

export const addStudentQuestion = question => {
    return {
        type: "ADD_STUDENT_QUESTION",
        question
    }
}

export const studentLoginSuccess = (student) => {
    return {
        type: 'STUDENT_LOGIN_SUCCESS',
        student: student
    }
}

export const loadStudentQuestions = student_questions => {
    return {
        type: "LOAD_STUDENT_QUESTIONS",
        student_questions
    }
}

export const loadQuestions = questions => {
    return {
        type: "LOAD_QUESTIONS",
        questions
    }
  }

  export const answerQuestion = student_question => {
    return {
        type: "ANSWER_QUESTION",
        student_question
    }
  }

  export const gradeQuestion = student_question => {
    return {
        type: "GRADE_QUESTION",
        student_question
    }
  }

  export const deleteQuestion = id => {
    return {
        type: "DELETE_QUESTION",
        id
    }
  }

//   export const deleteStudentQuestion = studentQuestion => {
//     return {
//         type: "DELETE_STUDENT_QUESTION",
//         studentQuestion
//     }
//   }

// export const logoutSuccess = () => {
//     return {
//       type: 'LOGOUT_SUCCESS'
//     }
//   }
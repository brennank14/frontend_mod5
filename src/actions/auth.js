export const teacherLoginSuccess = (teacher) => {
    return {
        type: 'TEACHER_LOGIN_SUCCESS',
        teacher
    }
}

export const studentLoginSuccess = (student) => {
    return {
        type: 'STUDENT_LOGIN_SUCCESS',
        student: student
    }
}

export const loadStudentQuestions = questions => {
    return {
        type: "LOAD_STUDENT_QUESTIONS",
        questions
    }
}

export const loadQuestions = questions => {
    return {
        type: "LOAD_QUESTIONS",
        questions
    }
  }



// export const logoutSuccess = () => {
//     return {
//       type: 'LOGOUT_SUCCESS'
//     }
//   }
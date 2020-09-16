export const teacherLoginSuccess = (teacher) => {
    return {
        type: 'TEACHER_LOGIN_SUCCESS',
        teacher
    }
}

export const studentLoginSuccess = (student) => {
    return {
        type: 'STUDENT_LOGIN_SUCCESS',
        student
    }
}

// export const logoutSuccess = () => {
//     return {
//       type: 'LOGOUT_SUCCESS'
//     }
//   }
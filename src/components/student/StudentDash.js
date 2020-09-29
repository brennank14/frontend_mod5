
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadStudentQuestions } from '../../actions/auth'
import { studentLoginSuccess } from '../../actions/auth'
import StudentQuestionContainer from './StudentQuestionContainer'
import { Container } from 'semantic-ui-react'


class StudentDash extends Component {
    state = {
        studentQuestions: [],
    }

    componentDidMount(){
        const token = localStorage.getItem('myAppToken')
    
        if(!token) {
          this.props.history.push('/login')
        } else {
          const reqObj = {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
            
          fetch('http://localhost:3001/student_auth', reqObj)
          .then(resp => resp.json())
          .then(data => {
            if (data.error){
              this.props.history.push('/login')
            } else {
              this.props.studentLoginSuccess(data.student.student)
            }
          })
        }
    }

        
    renderQuestions = () => {
        return this.props.auth.student_questions.map(q => (
            <StudentQuestionContainer
                key={q.id}
                teacher_id={q.question.teacher_id}
                name={q.question.name}
                content={q.question.content}
                points={q.question.points}
                id={q.question.id}
          />
        ))
    }
    
    render() {
      if (!this.props.auth){
        return <h4>loading...</h4>
    }
    console.log(this.props)
        return (
            <div>
              <Container>
                <h1>Welcome, {this.props.auth.name}</h1>
                <h2>Assignments:</h2>
                <div className="ui items" >{this.renderQuestions()}</div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    }
  }

const mapDispatchToProps = {
    loadStudentQuestions,
    studentLoginSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDash);
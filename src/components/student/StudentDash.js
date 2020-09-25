import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadStudentQuestions } from '../../actions/auth'
import StudentQuestionContainer from './StudentQuestionContainer'


class StudentDash extends Component {
    state = {
        studentQuestions: [],
    }

        
    renderQuestions = () => {
        console.log('props', this.props)
        return this.props.auth.student.student_questions.map(q => (
            console.log('question', q),
            <StudentQuestionContainer
                key={q.question.id}
                teacher_id={q.question.teacher_id}
                name={q.question.name}
                content={q.question.content}
                points={q.question.points}
                id={q.question.id}
          />
        ))
    }
    
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.auth.student.name}</h1>
                <h2>Assignments:</h2>
                <div className="ui items" >{this.renderQuestions()}</div>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDash);
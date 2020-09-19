import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadQuestions } from '../../actions/auth'
import StudentQuestionContainer from './StudentQuestionContainer'


class StudentDash extends Component {
    state = {
        studentQuestions: []
    }

    componentDidMount() {
        
        if (!this.props.auth){
            this.props.history.push('/login')
          }

          fetch('http://localhost:3001/questions')
          .then(res => res.json())
          .then(data => {
              this.props.loadQuestions(data.questions)
              this.setState({studentQuestions: data.questions.filter(q => q.teacher_id === this.props.auth.teacher_id)})
          }
          )}



        
    renderQuestions = () => {
        
        return this.state.studentQuestions.map(q => (
            <StudentQuestionContainer
                key={q.id}
                teacher_id={q.teacher_id}
                name={q.name}
                content={q.content}
                points={q.points}
                id={q.id}
          />
        ))
        }

    render() {
        console.log(this.state.studentQuestions)
        return (
            <div>
                <h1>Welcome, {this.props.auth.name}</h1>
                <h2>Assignments:</h2>
                <div className="ui items" >{this.renderQuestions()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      question: state.question
    }
  }

const mapDispatchToProps = {
    loadQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDash);
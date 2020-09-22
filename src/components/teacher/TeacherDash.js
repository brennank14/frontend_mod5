import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadQuestions } from '../../actions/auth'
import TeacherQuestionContainer from './TeacherQuestionContainer'
import { Button, Card, Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TeacherDash extends Component {
    state = {
        questions: []
    }
    
    componentDidMount() {
        if (!this.props.auth){
            this.props.history.push('/login')
          }

    }
        
    renderQuestions = () => {
        return this.props.auth.questions.map(q => (
            <TeacherQuestionContainer
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
        return (
            <div>
                <h1>Welcome, {this.props.teacher.name}</h1>
                <div id='listHeading'>
                     
                     <button class="ui button"><Link to="/add_question">Add New Question</Link></button>
                </div>
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
    loadQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherDash);


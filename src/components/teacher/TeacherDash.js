import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadQuestions } from '../../actions/auth'
import TeacherQuestionContainer from './TeacherQuestionContainer'
import { Button, Card, Container, Image, List, Grid } from 'semantic-ui-react'
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


    renderStudents = () => {
        console.log(this.props)
        return this.props.auth.students.map(s => (            
            <div>
                <List divided relaxed>
                <div>
                <Link  to={{
                        pathname:`/view_student/${s.id}`, 
                        studentProps:{currentStudent: s.id}}} >
                    <List.Item>
                    <List.Content>
                    <List.Icon name='user circle' size='large' verticalAlign='right' />
                        <List.Header as='a'>{s.name}</List.Header>
                        <br/>
                        <br/>
                    </List.Content>
                    </List.Item>
                </Link>
                </div>
                </List>
            </div>
        ))
    }

    
    render() {
        return (
            <div>
                <Container>
                <h1>Welcome, {this.props.auth.name}</h1>
                <div id='listHeading'>
                     <button class="ui button"><Link to="/add_question">Add New Question</Link></button>
                </div>
                <h2>Assignments:</h2>
                </Container>
                <br/>
                    <Container>
                    <Grid>
                        <Grid.Column width={12}>
                            <div className="ui items" >{this.renderQuestions()}</div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div className="ui items" >{this.renderStudents()}</div>
                        </Grid.Column>
                    </Grid>
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
    loadQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherDash);


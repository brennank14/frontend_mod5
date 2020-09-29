import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Segment, Container, Header, Form, TextArea, Input, Button, } from 'semantic-ui-react'
import { gradeQuestion } from '../../actions/auth'

class ViewStudentAnswer extends Component {
    state = {
        question: null,
        studentQuestion: null,
        feedback: '',
        grade: null,
        graded: false
    }
    
    componentDidMount() {
        console.log('state', this.state)
        console.log('props', this.props)
        fetch(`http://localhost:3001/questions/${this.props.match.params.question_id}`, {
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json"
            }})
    
        .then(resp => resp.json())
        .then(data => {
           this.setState({question: data.question})
        })
        
        this.setStudentQuestion()

    }

    setStudentQuestion = () => {
        this.setState({
            studentQuestion: this.props.location.studentProps.studentQuestion
        })
    }
    


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChecked = () =>{
        this.setState({
            graded: true
        })
    }


    handleSubmit = event => {
        event.preventDefault()
        const reqObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                feedback: this.state.feedback,
                grade: this.state.grade,
                graded: this.state.graded
            }
            )}
        
        fetch(`http://localhost:3001/student_questions/${this.state.studentQuestion.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.gradeQuestion(data)
            this.props.history.push(`/view_student/${this.props.location.studentProps.studentId}`)
        })
    }



    render() {
        if (!this.state.question){
            return <h4>loading...</h4>
        }
        return (
            <div> 
                   <Container>
                   <Header as='h1' textAlign='left'>Question Name</Header>
                   <Grid columns={2} divided>
                     <Grid.Row stretched>
                     <Grid.Column width={7}>
                         <Segment>
                                <h3>{this.state.question.name}</h3>
                                <h4>{this.state.question.content}</h4>
 
                         </Segment>
                     </Grid.Column>
                     <Grid.Column width={9}>
                         <Segment>Answer:
                             <br/>  
                                <p>{this.state.studentQuestion.answer}</p>
                             </Segment>
                     </Grid.Column>
                     </Grid.Row>
                     <Grid.Row stretched>
                     <Grid.Column width={3}>
                         <Segment>Grade
                         <Form>
                             <Input type='text' value={this.state.grade} name='grade' onChange={this.handleChange} />
                         </Form>
                         </Segment>
                     </Grid.Column>
                     <Grid.Column width={13}>
                         <Segment>Feedback
                         <Form onSubmit={this.handleSubmit}>
                             <TextArea type='text' value={this.state.feedback} name='feedback' onChange={this.handleChange} />
                             <br/>
                             <Button type='submit'>Submit</Button>
                         </Form>
                         </Segment>
                     </Grid.Column>
                     </Grid.Row>
                 </Grid>
                 <br/>
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
    gradeQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewStudentAnswer)
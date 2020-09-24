import React, { Component } from 'react';
import { Grid, Segment, Container, Header, Form, TextArea, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { answerQuestion } from '../../actions/auth'


class QuestionPage extends Component {
    state = {
        question: this.props.question,
        answer: this.state.answer,
        grade: this.state.grade,
        feedback: this.state.feedback,
        studentQuestionId: null
    }
    
    componentDidMount() {

        fetch(`http://localhost:3001/questions/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json"
            }})
    
        .then(resp => resp.json())
        .then(data => {
           this.setState({question: data.question})          
        })

        const question = this.props.auth.student.student_questions.filter(q => (q.question_id == this.props.match.params.id))
        this.setState({studentQuestionId: question[0].id}) 

        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
     
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.props)
        console.log('sumbit', this.state.answer)
        const reqObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                answer: this.state.answer
            }
            )}
        
        fetch(`http://localhost:3001/student_questions/${this.state.studentQuestionId}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.answerQuestion(data)
            this.props.history.push('/student_dash')
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
                   <div id="ggb-element"></div> 
                         <br/>
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
                         <Form onSubmit={this.handleSubmit}>
                             <TextArea type='text' value={this.state.answer} name='answer' onChange={this.handleChange} />
                             <br/>
                             <Button type='submit'>Submit</Button>
                         </Form>
                             </Segment>
                     </Grid.Column>
                     </Grid.Row>
                     <Grid.Row stretched>
                     <Grid.Column width={2}>
                         <Segment>Grade
                         <Form.Input fluid value={this.state.grade} readOnly />
                         </Segment>
                         
                     </Grid.Column>
                     <Grid.Column width={14}>
                         <Segment>Feedback
                         <Form.Input fluid value={this.state.feedback} readOnly />
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
  answerQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
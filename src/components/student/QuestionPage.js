import React, { Component } from 'react';
import { Grid, Segment, Container, Header, Form, TextArea, Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import StudentQuestionContainer from './StudentQuestionContainer'

class QuestionPage extends Component {
    state = {
        question: null
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
    }
    

    render() {
        console.log('state', this.state.question)
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
                         <Form>
                             <TextArea />
                         </Form>
                             </Segment>
                     </Grid.Column>
                     </Grid.Row>
                     <Grid.Row stretched>
                     <Grid.Column width={2}>
                         <Segment>Grade</Segment>
                     </Grid.Column>
                     <Grid.Column width={14}>
                         <Segment>Feedback</Segment>
                     </Grid.Column>
                     </Grid.Row>
                 </Grid>
                 <br/>
                 <Button type='submit'>Submit</Button>
                 </Container>
             </div>
        );
    }
}

const mapDispatchToProps = {

  }

export default connect(null, mapDispatchToProps)(QuestionPage)
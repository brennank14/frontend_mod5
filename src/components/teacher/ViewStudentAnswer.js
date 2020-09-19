import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Segment, Container, Header, Form, TextArea, Card, Input, Button } from 'semantic-ui-react'

class ViewStudentAnswer extends Component {
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
                   <Grid columns={2} divided>
                     <Grid.Row stretched>
                     <Grid.Column width={7}>
                         <Segment>
                         <Card>
                         <Card.Content>
                             <Card.Header>{this.state.question.name}</Card.Header>
                                 <Card.Description>
                                     {this.state.question.content}
                                 </Card.Description>
                             </Card.Content>
                         </Card>
                         </Segment>
                     </Grid.Column>
                     <Grid.Column width={9}>
                         <Segment>Answer:  
                                [current student answer]
                             </Segment>
                     </Grid.Column>
                     </Grid.Row>
                     <Grid.Row stretched>
                     <Grid.Column width={2}>
                         <Segment>Grade
                         <Form>
                         <Input />
                         </Form>
                         </Segment>
                     </Grid.Column>
                     <Grid.Column width={14}>
                         <Segment>Feedback
                         <Form>
                         <TextArea />
                         </Form>
                         </Segment>
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

export default connect(null, mapDispatchToProps)(ViewStudentAnswer)
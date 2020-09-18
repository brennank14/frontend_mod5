import React, { Component } from 'react';
import { Grid, Segment, Container, Header } from 'semantic-ui-react'

class QuestionPage extends Component {
    render() {
        return (
            <div>
                  
                  <Container>
                  <Header as='h1' textAlign='left'>Question Name</Header>
                  <Grid columns={2} divided>
                    <Grid.Row stretched>
                    <Grid.Column width={10}>
                        <Segment><div id="ggb-element"></div></Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Segment>Question</Segment>
                        <Segment>Answer</Segment>
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
                </Container>
                
            </div>
        );
    }
}

export default QuestionPage;
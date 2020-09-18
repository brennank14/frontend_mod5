import React, { Component } from 'react';
import { loadQuestions } from '../../actions/teacher_actions'
import { Button, Card, Container, Image } from 'semantic-ui-react'

class StudentQuestionContainer extends Component {
    
    
    
    
    
    
    render() {
        return (
            <div>
                <Container>
                <Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src= "https://image.shutterstock.com/image-vector/fun-cute-vector-childrens-math-260nw-215315230.jpg"
                        />
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Description>
                        {this.props.content}
                        </Card.Description>
                    </Card.Content>
                    </Card>
                    </Card.Group>
                </Container>
            </div>
        );
    }
}

export default StudentQuestionContainer;
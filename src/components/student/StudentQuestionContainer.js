import React, { Component } from 'react';
import { Card, Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class StudentQuestionContainer extends Component {
    
    handleClick = () => {
        
    }
    
    render() {
        return (
            <div>
                <Container >
                <Card.Group>
                <Link to={`/question/${this.props.id}`} >
                <Card onClick={this.handleClick}>
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
                    </Link>
                    </Card.Group>
                </Container>
            </div>
        );
    }
}

export default StudentQuestionContainer;
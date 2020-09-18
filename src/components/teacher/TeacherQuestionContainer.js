import React, { Component } from 'react';
import { Button, Card, Container, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteQuestion } from '../../actions/teacher_actions'
import { Link } from 'react-router-dom'


class TeacherQuestionContainer extends Component {
    state = {
        question: null
    }
    
    handleDelete = () => {
        fetch(`http://localhost:3001/questions/${this.props.id}`, {
            method: 'DELETE', 
            headers: {
                "Content-Type": "application/json"}})
        .then(resp => {
          this.props.deleteQuestion(this.props.id)
        })
      }

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
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Edit
                                </Button>
                                <Button basic color='red' onClick={this.handleDelete}>
                                    Delete
                                </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Container>
            </div>
        );
    }
}


const mapDispatchToProps = {
    deleteQuestion,
}

export default connect(null, mapDispatchToProps)(TeacherQuestionContainer);
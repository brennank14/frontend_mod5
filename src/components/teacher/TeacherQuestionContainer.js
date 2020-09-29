import React, { Component } from 'react';
import { Button, Card, Container, Image, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteQuestion } from '../../actions/auth'


class TeacherQuestionContainer extends Component {
    state = {
        question: null
    }
    
    handleDelete = () => {
        console.log('props', this.props)
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
                    <Card.Group >
                        <Card fluid color='blue' class="ui card">
                            <Card.Content>
                                <Image
                                floated='right'
                                size='tiny'
                                src= "https://www.clipartmax.com/png/middle/146-1466348_math-icon-design-png.png"
                                />
                                <Header as='h2' color='black'>{this.props.name}</Header>
                                <Card.Description id='content'>
                                {this.props.content}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button size='small' inverted color='red' floated='right' icon="trash alternate outline" onClick={this.handleDelete}>
                                <Icon name="trash alternate outline" />
                                    Delete
                                </Button>
                        
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


const mapDispatchToProps = {
    deleteQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherQuestionContainer);
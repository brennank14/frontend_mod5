import React, { Component } from 'react';
import { Card, Container, Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {  connect } from 'react-redux'

class StudentQuestionContainer extends Component {
    


    render() {
        return (
            <div>
                <Container>
                <Card.Group>
                <Link to={`/question/${this.props.id}`} >
                <Card inline-block>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src= "https://image.shutterstock.com/image-vector/fun-cute-vector-childrens-math-260nw-215315230.jpg"
                        />
                        <Card.Header>
                        <List.Icon name='square outline' size='large' verticalAlign='right' />
                        {this.props.name}
                        </Card.Header>
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

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    }
  }

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentQuestionContainer);
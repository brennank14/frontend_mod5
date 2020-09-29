import React, { Component } from 'react';
import { Card, Container, Image, Checkbox, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {  connect } from 'react-redux'

class StudentQuestionContainer extends Component {


    render() {
        return (
            <div>
                {/* <Container> */}
                <Link to={`/question/${this.props.id}`} >
                {/* <Card.Group> */}
                    
                    <Card id='card' color='blue' class="ui card" onClick={this.handleClick}>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='tiny'
                                src= "https://www.clipartmax.com/png/middle/146-1466348_math-icon-design-png.png"
                            />
                            <Header as='h2'>
                            {this.props.name}
                            </Header>
                            <Card.Description>
                            {this.props.content}
                            </Card.Description>
                        </Card.Content>
                        </Card>
                        
                    {/* </Card.Group> */}
                    </Link>
                {/* </Container> */}
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
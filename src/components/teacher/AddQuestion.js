import React, { Component } from 'react';
import { addQuestion } from '../../actions/auth'
import { addStudentQuestion } from '../../actions/auth'
import { Button, Form, Container, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class AddQuestion extends Component {
    state = {
        name: '',
        content: '',
        points: '',
        grade: '',
        feedback: '',
        answer: '',
        graded: null,
        teacher_id: this.props.auth.id
    }
    
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    handleSubmit = event => {
        event.preventDefault()               
        const reqObjOne = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                content: this.state.content,
                teacher_id: this.props.auth.id,
                points: this.state.points,
                grade: this.state.grade,
                feedback: this.state.feedback,
                answer: this.state.answer,
                graded: false
            })
        }
           
        console.log(this.props)
        this.props.auth.students.map(s => {
            addStudentQuestion(reqObjOne.body)
        })

        fetch(`http://localhost:3001/questions`, reqObjOne)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.props.addQuestion(data.question)
            this.props.history.push('/teacher_dash')
        })
    }
    


    render() {
        return (
            <div>
                <h1>Add Question Page</h1>
                <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                    <Form.Input fluid label='Question Name' placeholder='Question Name' value={this.state.name} name='name' width={13} onChange={this.handleChange} />
                    <Form.Input fluid label='Point Value' placeholder='Point Value' value={this.state.points} name='points' width={3} onChange={this.handleChange} />

                    </Form.Group>
                    <Form.TextArea fluid label='Content' value={this.state.content} name='content' onChange={this.handleChange}/>
                    <Form.Button>Submit</Form.Button>
                </Form>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
      }
}

const mapDispatchToProps = {
    addQuestion,
    addStudentQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
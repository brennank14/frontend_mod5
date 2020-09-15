import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import {loginSuccess } from '../../actions/auth'

class LoginPage extends Component {
    state = {
        username: 'brennank',
        password: 'brennank'
    }
    
        handleChange = (e) => {
            this.setState({
              [e.target.name]: e.target.value
            })
          }
    
        handleSubmit = (e) => {
        e.preventDefault()
    
        const reqObj = {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3001/api/v1/auth', reqObj)
        .then(res => res.json())
        .then(data => {console.log(data)
        // if (data.error) {
        //     this.setState({
        //     error: data.error
        //     })
        // } else {
        //     console.log(data)
        //     this.props.loginSuccess(data.user)
        //     //this.props.history.push('/dashboard')
        // }
        });
    }
    render() {
        return (
            <div class="ui container">
                <h2>Login to View Dashboard</h2>
                <form onSubmit={this.handleSubmit}>
                <div class="ui focus input">
                <input fluid onChange={this.handleChange} type='text' name='username' placeholder='Username' value={this.state.username} />
                </div>
                    <br/>
                    <br/>
                    <div class="ui focus input">
                    <input fluid onChange={this.handleChange} type="password" name="password" placeholder='Password' value={this.state.password} />
                    </div>
                    <br/>
                    <br/>
                    <div class="ui focus input">
                    <Form.Select
                        fluid
                        onChange={this.handleChange}
                        placeholder='User Type'
                        options={[
                            { key: 'Teacher', text: 'Teacher', name: 'teacher', value: 'teacher' },
                            { key: 'Student', text: 'Student', name: 'student', value: 'student' }
                          ]}
                    />
                    </div>
                    <br/>
                    <br/>
                    <input focus class="ui button" type='submit' />
                </form>
                </div>
    )
  }
            
};

const mapDispatchToProps = {
    loginSuccess,
  }

export default connect(null, mapDispatchToProps)(LoginPage);
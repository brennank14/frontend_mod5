import React, { Component } from 'react';
import { connect } from 'react-redux'
import {teacherLoginSuccess } from '../../actions/auth'
import {studentLoginSuccess } from '../../actions/auth'
import { Redirect } from 'react-router-dom'



class LoginPage extends Component {
    state = {
        username: 'brennank',
        password: 'brennank',
        user_type: 'teacher',
        error: null
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
        
        if (this.state.user_type === "teacher"){
            fetch('http://localhost:3001/api/v1/teacher_auth', reqObj)
            .then(res => res.json())
            .then(data => {
            if (data.error) {
                this.setState({
                error: data.error
                })
            } else  {
                console.log(data)
                this.props.teacherLoginSuccess(data.teacher)
                this.props.history.push('/teacher_dash')
            }
        })

        } else if (this.state.user_type === "student") {
            fetch('http://localhost:3001/api/v1/student_auth', reqObj)
            .then(res => res.json())
            .then(data => {
            if (data.error) {
                this.setState({
                error: data.error
                })
            } else {
                this.props.studentLoginSuccess(data)
                
                this.props.history.push('/student_dash')
            }
            })
        }}
    
    render() {
        return (
            <div class="ui container">
                <h2>Login to View Dashboard</h2>
                {this.state.error ? <h3 style={{color: 'white', backgroundColor: 'red'}}>{this.state.error}</h3> : null}
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
                    <select 
                        class="ui focus input"
                        fluid
                        value={this.state.user_type} 
                        name="user_type"
                        onChange={this.handleChange}
                        placeholder='User Type' 
                        >
                        <option value="none">User Type</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>                        
                    </div>
                    <br/>
                    <br/>
                    <input focus class="ui button" type='submit' />
                </form>
                </div>
    )
  }
}           


const mapDispatchToProps = {
    teacherLoginSuccess,
    studentLoginSuccess
  }

export default connect(null, mapDispatchToProps)(LoginPage);
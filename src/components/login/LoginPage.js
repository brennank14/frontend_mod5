import React, { Component } from 'react';
import { connect } from 'react-redux'
import { teacherLoginSuccess } from '../../actions/auth'
import { studentLoginSuccess } from '../../actions/auth'
import { Form, Select } from 'semantic-ui-react'


class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        user_type: '',
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
            'Content-Type': 'application/json',
            Authorization: `Bearer <token>`
            },
            body: JSON.stringify({teacher:
                this.state})
        }

        const reqObjTwo = {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer <token>`
            },
            body: JSON.stringify({student:
                this.state})
        }
        
        if (this.state.user_type === "teacher"){
            fetch('http://localhost:3001/teacher_auth', reqObj)
            .then(res => res.json())
            .then(data => {
            if (data.error) {
                this.setState({
                error: data.error
                })
            } else  {
                localStorage.setItem('myAppToken', data.token)
                this.props.teacherLoginSuccess(data.teacher.teacher)
                this.props.history.push('/teacher_dash')
            }
        })

        } else if (this.state.user_type === "student") {
            fetch('http://localhost:3001/student_auth', reqObjTwo)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            if (data.error) {
                this.setState({
                error: data.error
                })
            } else {
                localStorage.setItem('myAppToken', data.token)
                this.props.studentLoginSuccess(data.student.student)
                this.props.history.push('/student_dash')
            }
            })
        }}

    
    render() {
    const userOptions = [
        { key: 'u', text: 'User Type', value: '' },
        { key: 't', text: 'Teacher', value: 'teacher' },
        { key: 's', text: 'Student', value: 'student' },
        ]
        return (
            <div id='login' class="ui container">
                
                <h2>Login to View Dashboard</h2>
                {this.state.error ? <h3 style={{color: 'white', backgroundColor: 'red'}}>{this.state.error}</h3> : null}
                <form class='ui-form' onSubmit={this.handleSubmit}>
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
                        fluid
                        value={this.state.user_type} 
                        name="user_type"
                        onChange={this.handleChange}
                        placeholder='User Type' 
                        style={{fontSize: '13px', padding: '10px', color: '#86898E'}}
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
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
    )
  }
}           





                                            

                                        






const mapDispatchToProps = {
    teacherLoginSuccess,
    studentLoginSuccess
  }

export default connect(null, mapDispatchToProps)(LoginPage);
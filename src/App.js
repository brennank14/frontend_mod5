import React from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage';
import TeacherDash from './components/teacher/TeacherDash';
import StudentDash from './components/student/StudentDash';
import { Switch, Route } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const App = () => {
  return (
    <div className="App">
      <Header as='h1' block>
        Title
      </Header>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/student_dash' component={StudentDash} />
        <Route exact path='/teacher_dash' component={TeacherDash} />
      </Switch>
    </div>
  );
};

export default App;


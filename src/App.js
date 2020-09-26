import React from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage';
import TeacherDash from './components/teacher/TeacherDash';
import ViewStudentAnswer from './components/teacher/ViewStudentAnswer';
import ViewStudentDash from './components/teacher/ViewStudentDash';
import AddQuestion from './components/teacher/AddQuestion';
import StudentDash from './components/student/StudentDash';
import QuestionPage from './components/student/QuestionPage';
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
        <Route exact path='/add_question' component={AddQuestion} />
        <Route exact path='/question/:id' component={QuestionPage} />
        <Route exact path='/view_student/:student_id' component={ViewStudentDash} />
        <Route exact path='/view_student/:student_id/question/:question_id' component={ViewStudentAnswer} />
        <Route exact path='/' component={LoginPage} />
      </Switch>
    </div>
  );
};



export default App;


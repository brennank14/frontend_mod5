import React from 'react';
import App from './App';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
      </Switch>
    </div>
  );
};

export default App;

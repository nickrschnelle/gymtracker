import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={() => <div>Test</div>}/>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React, { Component } from 'react';
import EmployeeList from './components/EmployeeList'
import { Container } from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <Container>
        <section name="header">
          <h1>Employee list</h1>
        </section>

        <section name="main">
          <EmployeeList />
        </section>
      </Container>
    );
  }
}

export default App;
//App container (parent component)
// - state: count & results array
// - handleForm method to update thhe state
// - renders 4 child components
import React from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [Headers = {}, Response = {}]
    };
  }

  handleForm(count, results) {
    this.setState({count, results});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} />
        <Results count={this.state.count} headers={this.state.results[0]} response={this.state.results[1]} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

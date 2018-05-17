import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      restaurants: []
    }
  }

  // componentWillMount() {
  //   axios.get('/api/restaurants')
  //     .then(({ data }) => {
  //       this.setState({
  //         restaurants: [...data, ...this.state.restaurants]
  //       })
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })
  // }

  render() {
    return (
      <div>
        Hello from react!
      </div>
    )
  }
}

export default App;
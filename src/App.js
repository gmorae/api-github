import React from 'react';
import Card from './components/card';
import { getData } from './services/get.service';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      post: {
        name: String
      },
      users: [],
      details: []
    }
  }


  get = async () => {
    while(this.state.details.length > 0) {
      this.state.details.pop()
  }
    for (let i = 0; i < this.state.users.length; i++) {
      const element = this.state.users[i]
      const t = await getData(element)
      this.state.details.push(t.data)
    }
    this.setState({ details: this.state.details })
  }

  up = e => {
    e.preventDefault();
    const { name } = this.state

    !name ? console.log('digite algo') : this.state.users.push(name)
    
    
    this.get()
  }

  render() {
    return (
      <div className="container mt-5" id="app">
        <form onSubmit={this.up}>
          <input onChange={e => this.setState({ name: e.target.value })} name="name" />
          <button className="btn" type="submit">Add</button>
        </form>
        <section className="text-center dark-grey-text">
          <div className="row">
            {
              this.state.details.map((res) => {
                return (
                  <Card
                    key={res.id}
                    name={res.name || res.login}
                    image={res.avatar_url}
                    bio={res.bio ? res.bio : 'Não tem biografia'}
                    url={res.login}
                  />
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
}

export default App;

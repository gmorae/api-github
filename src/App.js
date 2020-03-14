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
    while (this.state.details.length > 0) {
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

    if (!name) {
      console.log('digite algo')
    } else { 
      this.state.users.push(name) 
      document.querySelector('#app input').value = ''
    }
    
    this.get()
  }

  deteteItem = id => {
    console.log(`delete ${id}`);
  }

  render() {
    return (
      <div className="container mt-5" id="app">
        <form onSubmit={this.up}>
          <div className="input-group mb-4 col-5">
            <input type="text" onChange={e => this.setState({ name: e.target.value })} name="name" className="form-control" placeholder="Nome do github" aria-label="Nome do github"
              aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-md btn-outline-default m-0 px-3 py-2 z-depth-0 waves-effect" type="submit"
                id="button-addon2">Adicionar</button>
            </div>
          </div>
        </form>
        <section className="text-center dark-grey-text">
          <div className="row">
            {
              this.state.details.map((res) => {
                return (
                  <Card
                    key={res.id}
                    id={res.id}
                    name={res.name || res.login}
                    image={res.avatar_url}
                    bio={res.bio ? res.bio : 'Não tem biografia'}
                    url={res.login}
                    delete={() => this.deteteItem(res.id)}
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

import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    }
    this.fetchDog = this.fetchDog.bind(this);
    this.getItemLocalStorage = this.getItemLocalStorage.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const r = this.state.data.message.split("/")[4];
    console.log(r);
  }

  getItemLocalStorage() {
    localStorage.getItem("dogURL");
  }


  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(result => this.setState({ data: result }));
  }

  render() {
    if(this.state.data === "") return "loading...";
    return (
      <div>
        <h1>Doguinhos</h1>
        <button onClick={this.fetchDog}>Novo doguinho!</button>
        <div>
          <img src={this.state.data.message} />
        </div>
        <p onChange={this.getItemLocalStorage}>Este é o doguinho</p>
      </div>
    );
  }
}

export default MyComponent;
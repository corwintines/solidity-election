import React, { Component } from "react";
import Election from "./contracts/Election.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
    candidates: {},
    candidatesCount: null
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Election.networks[networkId];
      const instance = new web3.eth.Contract(
        Election.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.getCandidatesInformations);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getCandidatesInformations = async () => {
    const candidatesCount = await this.state.contract.methods.candidatesCount().call();
    const candidates = {}

    for (let i=1; i<=candidatesCount; i++) {
      candidates[i] = await this.state.contract.methods.candidates(i).call();
    }

    this.setState({candidates, candidatesCount})
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <div className="App">
        <h1>Election Candidates</h1>
        <p>Number of Candidates: {this.state.candidatesCount}</p>
        <p>Account {this.state.accounts[0]}</p>
        {Object.values(this.state.candidates).map((candidate) => {
          console.log(candidate)
          return (
            <div key={candidate.id}>
              <tr>
                <th>{candidate.id}</th>
                <td>{candidate.name}</td>
                <td>{candidate.voteCount}</td>
              </tr>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

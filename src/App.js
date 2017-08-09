import React, { Component } from 'react';

import Events from './Components/Events'
import People from './Components/People'
import Players from './Components/Players'


import './App.css';


class Game extends React.Component{
	constructor(props){
		super(props);
		this.state={
			turns: 1,
			rounds: 1,
			centerTendency: 0,
		}
	}
	

	nextTurn() {
		this.setState({
			turns: this.state.turns + 1
		});
	}
	nextRound() {
		this.setState({
			rounds: this.state.rounds + 1
		});
	}

	preTurn() {
		if(this.state.turns>1){
		this.setState({
			turns: this.state.turns - 1
		});
		}
	}
	preRound() {
		if(this.state.rounds>1){
		this.setState({
			rounds: this.state.rounds - 1
		});
		}
	}

	tendencyPlus(){
		this.setState({
			centerTendency: this.state.centerTendency + 1
		});
	}

	tendencyMinus(){
		this.setState({
			centerTendency: this.state.centerTendency - 1
		});
	}



	render() {
		return (
		<div>
			<div>Turns: {this.state.turns} 
			<button 
			onClick={() => {this.nextTurn()}}> Next Turn
			</button>
			<button 
			onClick={() => {this.preTurn()}}> Pre Turn
			</button>
			</div>

			<div> Rounds: {this.state.rounds} 
			<button 
			onClick={() => {this.nextRound()}}> Next Round
			</button>
			<button 
			onClick={() => {this.preRound()}}> Pre Round
			</button>
			</div>

			<div> Center Tendency: {this.state.centerTendency}
			<button 
			onClick={() => {this.tendencyPlus()}}> +
			</button>
			<button 
			onClick={() => {this.tendencyMinus()}}> -
			</button>

			</div>

			<Players />
			<People />
			<Events />
		</div>
		);
	}
}



class App extends Component {
  render() {
    return (
      <div className="App">
       <Game />
      </div>
    );
  }
}

export default App;

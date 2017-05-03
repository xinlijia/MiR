import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class People extends React.Component {
	constructor(props){
		super(props);
		this.state={
			List: ["p1","p2","p3"],
			Alive: [],
			Dead: []
		}
	}
	render(){
		return(
			<div>
			{this.state.List}
			</div>
		)
	}
}


class Players extends React.Component {
	constructor(props){
		super(props);
		this.state={
			D1: 1,
			Z1: 2,
			J1: 3,
			D2: 4,
			Z2: 5,
			J2: 6
		}
	}	
  render() {
    return (
		<div>
			<h3> P1 </h3>
			<div> D: {this.state.D1}</div>
			<div> Z: {this.state.Z1}</div>
			<div> J: {this.state.J1}</div>
			<h3> P2 </h3>
			<div> D: {this.state.D2}</div>
			<div> Z: {this.state.Z2}</div>
			<div> J: {this.state.J2}</div>

		</div>
	);
  }
}




class Game extends React.Component{
	constructor(props){
		super(props);
		this.state={
			turns: 0,
			eventNow: "None",
			eventsNotOccur: ["e1","e2","e3"],
			eventsOccur: []
		}
	}
	//generate new event and update Game
	generateEvent(){
		const newEvent = this.state.eventsNotOccur.pop();
		this.state.eventsOccur.push(newEvent);
		this.setState({eventsNotOccur: this.state.eventsNotOccur});
		this.setState({eventsOccur: this.state.eventsOccur});
		this.setState({eventNow: newEvent});
	}

	nextTurn() {
		this.setState({
		turns: this.state.turns + 1
		});
		this.generateEvent()
	}

	render() {
		return (
		<div>
			<div>This turn event: {this.state.eventNow}</div>
			<div>Turns: {this.state.turns}</div>
			<button 
			onClick={() => {this.nextTurn()}}>
			</button>
			<Players />
			<People />
		</div>
		);
	}
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


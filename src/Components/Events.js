
import React from 'react';
//import './Events.css'


class Events extends React.Component {
	constructor(props){
		super(props);
		this.state={
			eventAll: ["e1","e2","e3"],
			eventEffects: {"e1":"e1's effect","e2":"e2's effect", "e3":"e3's effect"},
			eventNow: "None",
			eventShow: "None",
			eventShowEffect: "None",
			eventsNotOccur: ["e1","e2","e3"],
			eventsOccur: []
		}
	}
	//generate new event and update Game
	generateEvent(){
		const newEvent = this.state.eventsNotOccur.pop();//need randomize
		this.state.eventsOccur.push(newEvent);
		this.setState({eventsNotOccur: this.state.eventsNotOccur});
		this.setState({eventsOccur: this.state.eventsOccur});
		this.setState({eventNow: newEvent});
	}



	changeShowEvent(name){
		this.setState({eventShow: name});
		this.setState({eventShowEffect: this.state.eventEffects[name]});
	}

	render(){
		const rows = this.state.eventAll.map((name) => 
		<button onClick={() => {this.changeShowEvent(name)}}>{name}</button>
		);
		return(
			<div>
			<h2> Events </h2>
			<div>Event now: {this.state.eventNow}</div>
			<button onClick={() => {this.generateEvent()}}>Generate an event</button>
			<div>Event List: {rows}</div>
			<div>{this.state.eventShow}</div>
			<div>{this.state.eventShowEffect}</div>
			</div>
		)
	}
}

export default Events;
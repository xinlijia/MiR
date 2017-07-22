import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/************************************************************************

6/23/2017 
1. finish reveal, hide or exile a person;
2. change player's personal value and global value

TO DO:
1. add and delete player with entered name



6/22/2017 1. update components Event 2. add viewing effect function
Next step: finish all the basic function: 
1. reveal, hide or exile a person;
2. change player's personal value and global value
3. random generate an event

************************************************************************/

class People extends React.Component {
	constructor(props){
		super(props);
		this.state={
			List: ["p1","p2","p3"],
			effects:{"p1":"p1's effect","p2":"p2's effect","p3":"p3's effect"},
			nowPerson : "None",
			nowEffect : "None",
			reveal: [],
			hide: ["p1","p2","p3"],
			exile: [],
		}
	}



	revealPerson(name){
		var index = this.state.hide.indexOf(name);
		if(index > -1){
			this.state.hide.splice(index, 1);
			this.state.reveal.push(name);
			this.setState({reveal: this.state.reveal});
			this.setState({hide: this.state.hide});
		}
	}
	hidePerson(name){
		var index = this.state.reveal.indexOf(name);
		if(index > -1){
			this.state.reveal.splice(index, 1);
			this.state.hide.push(name);
			this.setState({reveal: this.state.reveal});
			this.setState({hide: this.state.hide});
		}
	}

	exilePerson(name){
		var indexr = this.state.reveal.indexOf(name);
		var indexh = this.state.hide.indexOf(name);

		if(indexr > -1){
			this.state.reveal.splice(indexr, 1);
			this.state.exile.push(name);
			this.setState({reveal: this.state.reveal});
			this.setState({exile: this.state.exile});
		}
		else{
			this.state.hide.splice(indexh, 1);
			this.state.exile.push(name);
			this.setState({hide: this.state.hide});
			this.setState({exile: this.state.exile});
		}

	}



	changePerson(name){
		this.setState({nowPerson: name});
		this.setState({nowEffect: this.state.effects[name]});
	}
	render(){
		const personList = this.state.List.map((name) => 
				<button onClick={() => {this.changePerson(name)}}>{name}</button>
				);
		const revealPersonList = this.state.List.map((name) => 
				<button onClick={() => {this.revealPerson(name)}}>reveal</button>
				);
		const hidePersonList = this.state.List.map((name) => 
				<button onClick={() => {this.hidePerson(name)}}>hide</button>
				);
		const exilePersonList = this.state.List.map((name) => 
				<button onClick={() => {this.exilePerson(name)}}>exile</button>
				);

		return(
			<div>
			<h2> People </h2>
			<div>{personList}</div>
			<div>{revealPersonList}</div>
			<div>{hidePersonList}</div>
			<div>{exilePersonList}</div>

			<div>Reveal:{this.state.reveal}</div>
			<div>Hide:{this.state.hide}</div>
			<div>Exile:{this.state.exile}</div>

			<div>{this.state.nowPerson}</div>
			<div>{this.state.nowEffect}</div>
			</div>
		)
	}
}


class Players extends React.Component {
	constructor(props){
		super(props);
		this.state={
			playerList:["p1"],
			playerD: {"p1":0},
			playerZ: {"p1":0},
			playerJ: {"p1":0},
			playerL: {"p1":0}
		}
	}

	increaseD(name){
		if(this.state.playerD[name]>=0){
			const new_playerD = this.state.playerD;
			new_playerD[name]+=1
			this.setState({
				playerD: new_playerD
			});
		}
	}
	decreaseD(name){
		if(this.state.playerD[name]>0){
			const new_playerD = this.state.playerD;
			new_playerD[name]-=1

			this.setState({
				playerD: new_playerD
			});
		}
	}



	increaseZ(name){
		if(this.state.playerZ[name]>=0){
			const new_playerZ = this.state.playerZ;
			new_playerZ[name]+=1

			this.setState({
				playerZ: new_playerZ
			});
		}
	}
	decreaseZ(name){
		if(this.state.playerZ[name]>0){
			const new_playerZ = this.state.playerZ;
			new_playerZ[name]-=1

			this.setState({
				playerZ: new_playerZ
			});
		}
	}



	increaseJ(name){
		if(this.state.playerJ[name]>=0){
			const new_playerJ = this.state.playerJ;
			new_playerJ[name]+=1

			this.setState({
				playerJ: new_playerJ
			});
		}
	}
	decreaseJ(name){
		if(this.state.playerJ[name]>0){
			const new_playerJ = this.state.playerJ;
			new_playerJ[name]-=1

			this.setState({
				playerJ: new_playerJ
			});
		}
	}

	increaseL(name){
		if(this.state.playerL[name]>=0){
			const new_playerL = this.state.playerL;
			new_playerL[name]+=1

			this.setState({
				playerL: new_playerL
			});
		}
	}
	decreaseL(name){
		if(this.state.playerL[name]>0){
			const new_playerL = this.state.playerL;
			new_playerL[name]-=1

			this.setState({
				playerL: new_playerL
			});
		}
	}





	render() {
		const PlayerList = this.state.playerList.map((name) => 
				<div>
				<h3> {name} </h3>
				<div> D: {this.state.playerD[name]} 
				<button onClick={() => {this.increaseD(name)}}>+</button>
				<button onClick={() => {this.decreaseD(name)}}>-</button>
				</div>

				<div> Z: {this.state.playerZ[name]}
				<button onClick={() => {this.increaseZ(name)}}>+</button>
				<button onClick={() => {this.decreaseZ(name)}}>-</button>
				</div>

				<div> J: {this.state.playerJ[name]}
				<button onClick={() => {this.increaseJ(name)}}>+</button>
				<button onClick={() => {this.decreaseJ(name)}}>-</button>
				</div>

				<div> Life: {this.state.playerL[name]}
				<button onClick={() => {this.increaseL(name)}}>+</button>
				<button onClick={() => {this.decreaseL(name)}}>-</button>
				</div>

				</div>
				);
    return (
		<div>
			<h2> Players </h2>
			{PlayerList}
		</div>
	);
  }
}





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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



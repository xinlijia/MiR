

import React from 'react';
//import './People.css'




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
        var indexe = this.state.hide.indexOf(name);
        if(indexe > -1){
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
export default People;
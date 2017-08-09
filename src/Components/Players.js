
import React from 'react';
//import './Players.css'



class Players extends React.Component {
	constructor(props){
		super(props);
		this.state={
			playerList:["p1","p2"],
			playerD: {"p1":0, "p2":0},
			playerZ: {"p1":0, "p2":0},
			playerJ: {"p1":0, "p2":0},
			playerL: {"p1":0, "p2":0}
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

export default Players;
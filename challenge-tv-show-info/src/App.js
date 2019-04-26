import React, { Component } from "react";
import DropDown from "./DropDown";
import Battlestar from "./data/BattlestarGalactica.json";
import Heading from "./Heading";
import ProcessJson from './ProcessJson';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: Battlestar[0].name
    };
}

episodeList(){
  return(
    Battlestar.map(episode => {
      return episode.name
    })
  )
}

currentEpisode = event => {
    this.setState({value: event});
}


  render() {
    return (
      <div className="container main">
        <Heading />
        <DropDown data={this.episodeList()} currentEpisode={this.currentEpisode} />
        <ProcessJson data={Battlestar} episode={this.state.value} />
      </div>
    );
  }
}


export default App;

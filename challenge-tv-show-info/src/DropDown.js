import React, { Component } from "react";

class DropDown extends Component {

  generateEpisodes = () => {
    return this.props.data.map((episode,index) => {
      return(
        <option value={episode} key={index}>{episode}</option>
      )
    })
  }

  setCurrentEpisode = event => {
    this.props.currentEpisode(event.target.value)
}

render(){
  return(
    <div>
<div className="d-flex justify-content-center" key='key'>
    <select onChange={this.setCurrentEpisode} key={1}>
    <this.generateEpisodes />
</select>
</div>
<div>
</div>
</div>
  )

}

}


export default DropDown

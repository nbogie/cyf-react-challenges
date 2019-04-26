import React, { Component } from "react";

class ProcessJson extends Component {

  findEpisode = () => {

      return this.props.data.find(episode => {
         return episode.name === this.props.episode
        })
    }

  RenderEpisode = () => {
    let episode = this.findEpisode();
    //HTML strip regex code from https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
    let episodeSummary = episode.summary.replace(/(<([^>]+)>)/ig,"");
    return(
      <div>
      <p>Season: {episode.season} Episode: {episode.number}</p>
      <p>{episode.name}</p>
      <img src={episode.image.medium} alt="hello" />
      <p className="text-center text-padding">{episodeSummary}</p>
      </div>

    )

  }

render(){
  return(
    <div className="col-xs-1" align="center">
    <this.RenderEpisode />
    </div>
  )
}


}


export default ProcessJson

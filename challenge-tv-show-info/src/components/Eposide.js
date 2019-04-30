import React from 'react';
import './Eposide.css';
const Eposide = (props) => {
    console.log(props.data.image.original)
    return (
        <div className="ui card eleven wide column">
            <h1 className="header">Title</h1>
            <div className="image ">

                <img src={props.data.image.original} />
            </div>
            <div class="content">
                <div className="description">
                    {props.data.summary}
                </div>
            </div>
            <div className="extra content">
                <span className="date">Aired: 2013</span>
            </div>
        </div>
    );
};

export default Eposide;


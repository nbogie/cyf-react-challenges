import React from 'react';
import Selector from './Selector';
import Eposide from './Eposide';
import GameOfThrones from '../data/GameOfThrones.json'

const App = () => {
    return (
        <div className="ui container">
            <div class="ui one column stackable center aligned page grid">
                <br />
                <h1>Game of Thrones</h1>
                <Selector />

                {/* <Eposide data={GameOfThrones[0].image.medium} /> */}
                {
                    GameOfThrones.map(ep => <Eposide key={ep.id} data={ep} />)

                }
            </div>

        </div>
    );

};


export default App;
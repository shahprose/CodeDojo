import React, { useContext, createContext, useEffect } from 'react';
import { io } from "socket.io-client";
import LoginContainer from "./containers/LoginContainer"
import WaitingRoomContainer from "./containers/WaitingRoomContainer"
import GameContainer from "./containers/GameContainer"
const socket = io();

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {

const checkSocket = () => {
   socket.emit('test', `This is the first socket test from ${socket.id}`)
}

    return (
        // <div>
        //     <button onClick={checkSocket}>click</button>
        // </div> 

        <Router>
            <Switch>
                 <Route path='/gameroom' component={GameContainer} />
                <Route path='/waitingroom' component={WaitingRoomContainer} />
                <Route exact path='/' component={LoginContainer}/>
            </Switch>
        </Router>

        
    )
}

export default App;

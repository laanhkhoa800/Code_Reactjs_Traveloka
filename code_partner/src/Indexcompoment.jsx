import React, { Component } from 'react';
import {BrowserRouter,Switch,Raute} from 'react-router-dom';
import Logincompoment from './Logincompoment';

class Indexcompoment extends Component {
    render() {
        return ( 
           <BrowserRouter>
            <Switch>
                <Raute exact path="/" Component ={Logincompoment}/>
            </Switch>
           </BrowserRouter>
        );
    }
}
export default Indexcompoment;
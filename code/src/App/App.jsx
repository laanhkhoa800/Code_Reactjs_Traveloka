import React, { Component } from 'react';
import './App.css';
import RouterMn from '../RouterMain/RouterMn';
import BookingMang from '../Partner/Page/BookingMang';




class App extends Component {
    render() {
        return ( 
        <div className = "App" >
                {/* <BookingMang/> */}
            <RouterMn/>
        </div>  
        );
    }
}

export default App;
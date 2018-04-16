import React, { Component } from 'react';
import MainComponent from './Components/MainComponent';
import ProductComponent from './Components/ProductComponent';
import GravidaButton from './Components/GravidaButtonComponent';

class App extends Component{
    constructor(props){
        super(props);
    }
    render() {

        return (
            <div>
                <MainComponent/>
                <GravidaButton/>
                <ProductComponent />
            </div>

        );
    }
}
export default App;

import React from "react";
import Container from "../Container/Container";
import SearchBox from "../SearchBox/SearchBox";
import Header from './../Header/Header'; 
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    constructor(){
            super();
        this.state= {
        headerText:'Name It!',
        headerExpanded: true,
        suggestedNames:[],
    };
}
    
handleInputChange = (inputText) =>{   
    this.setState({ 
        headerExpanded : !inputText,
        suggestedNames: inputText ? name(inputText):[],
    });
    
};

render(){
    return( 
    <div>
        <Header 
        headerExpanded={this.state.headerExpanded}
        headTitle={this.state.headerText} 
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <Container suggestedNames = {this.state.suggestedNames} />
    </div>
    );
}
}

//function App(){
  //  return <h1>This is my functional component</h1>
//
//}

export default App;
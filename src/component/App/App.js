import React from 'react';
import './App.css';
import Header from './../../Header/Header';
import SearchBox from './../../SearchBox/SearchBox.jsx';
import ResultContainer from './../ResultContainer/ResultContainer'
const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            headerExpanded:true,
            suggestedNames: []
        }
    }
    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded : !(inputText),
            suggestedNames: inputText ? name(inputText):[]
        })
    }
    render() {
        return (
            <>
            <Header headerExpanded = {this.state.headerExpanded}/>
            <SearchBox onInputChange = {this.handleInputChange}/>
            <ResultContainer suggestedNames = {this.state.suggestedNames} />
            </>
        )
    }
}
export default App;
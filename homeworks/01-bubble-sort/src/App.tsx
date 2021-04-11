import React from 'react';
import './App.css';
import BarItem from './components/BarItem';
import BarContainer from './components/BarContainer';
import generateArray from './services/generateArray';
import {Item} from './models';
import attachHeight from './services/attachHeight';
import Controls from './components/Controls';
import bubbleSort from './services/bubbleSort';

export interface State {
    array: Item[];
    status: string;
}

class App extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            array: attachHeight(generateArray()),
            status: 'Not solved',
        }
    }

    updateState = (upd: State) => {
        this.setState(upd)
        console.log('call');
    }

    onNewSet = () => {
        const newArray = attachHeight(generateArray());
        this.setState({array: newArray, status: 'Not solved' })
    }

    onStart = () => {
        console.log('start');
        const sorted = bubbleSort(this.state.array, this.updateState);
        console.log('sorted', sorted)
    }

    renderBarItems = () => {
        return this.state.array.map(i => <BarItem key={i.id} style={{height: `${i.height}px`}}>{i.value}</BarItem>)
    }

    render() {
        console.log('array', this.state.array)
        return (
            <div className="app">
                <h1>Bubble sort</h1>
                <BarContainer status={this.state.status}>
                    {this.renderBarItems()}
                </BarContainer>
                <Controls onNewSet={this.onNewSet} onStart={this.onStart}/>
                <div className="bar-container__status">{this.state.status}</div>
            </div>
        );
    }
}

export default App;

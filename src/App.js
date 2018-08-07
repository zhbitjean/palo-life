import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies'
import Counters from './components/counters'
import NavBar from './components/navbar'

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        // console.log(this.state.counters[index]);
        this.setState({counters})
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState(counters)
    }
    handleDelete = counterId => {
        const counters = this.state.counters.filter(
            c => c.id !== counterId
        );
        this.setState({counters: counters})
    };

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                    >
                    </Counters>

                </main>
            </React.Fragment>
        );
    }
}

export default App;

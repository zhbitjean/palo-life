import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["Home", "About Us", "White Paper", "Team and Supporters", "Language"]
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    // constructor() {
    //     super();
    //     this.handleIncrement.bind(this)
    // }


    // handleIncrement() {
    //     console.log('Increment Clicked', this);
    // }

    handleIncrement = () => {
        // arrow function don't rebind this, they inherent it
        console.log('Increment Clicked', this);
    }

    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className="badge badge-primary m-2">palo life</span>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {this.renderTags()}
                {this.state.tags.length === 0 && "Please create a new tag!"}
            </React.Fragment>
        );
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes;
    };

    formatCount() {
        const {count} = this.state;
        const x = <h1>Zero</h1>
        return count === 0 ? x: count;
    };
}

Counter.propTypes = {};

export default Counter;

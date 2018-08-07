import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     tags: ["Home", "About Us", "White Paper", "Team and Supporters", "Language"]
    // };

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    // constructor() {
    //     super();
    //     this.handleIncrement.bind(this)
    // }



    // handleIncrement = product => {
    //     // arrow function don't rebind this, they inherent it
    //     // the is experimental, it might not work in the future
    //     this.setState({value: this.state.value + 1})
    //     // console.log(product)
    // };

    render() {
        console.log('props', this.props);
        return (
            <React.Fragment>
                {/*<span style={this.styles} className="badge badge-primary m-2">palo life</span>*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {this.props.children}
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">+
                </button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">-
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">Delete
                </button>
                {/*{this.renderTags()}*/}
                {/*{this.state.tags.length === 0 && "Please create a new tag!"}*/}
            </React.Fragment>
        );
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"
        return classes;
    };

    formatCount() {
        const {value} = this.props.counter;
        const x = <h1>Zero</h1>
        return value === 0 ? x: value;
    };
}

// Counter.propTypes = {};

export default Counter;

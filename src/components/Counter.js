import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {initValue : props.initValue, num: 0, addCallback : props.addCallback, subCallback : props.subCallback};
    }

    onSubButtonClicked = () => {
        let oldNum = this.state.num;
        let newNum = oldNum - 1;
        this.setState({num : newNum});
        this.state.subCallback();
    }

    onAddButtonClicked = () => {
        let oldNum = this.state.num;
        let newNum = oldNum + 1;
        this.setState({num : newNum});
        this.state.addCallback();
    }

    render() {
        let elem = <div className="Counter">
            <input value="-" type="button" onClick={this.onSubButtonClicked}/>
            <input value={this.state.initValue} type="text" disabled/>
            <input value="+" type="button" onClick={this.onAddButtonClicked}/>
        </div>;
        return elem;
    }

}

export default Counter;

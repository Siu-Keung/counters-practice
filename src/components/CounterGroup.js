import React, {Component} from 'react';
import Counter from './Counter'

class CounterGroup extends Component{
    constructor(props){
        super(props);
        this.state = {counterNum : 0, sum : 0};
    }

    subCallback = () => {
        let newSum = this.state.sum - 1;
        let newState = this.state;
        newState.sum = newSum;
        this.setState(newState);
    }

    addCallback = () => {
        let newSum = this.state.sum + 1;
        let newState = this.state;
        newState.sum = newSum;
        this.setState(newState);
    }

    onCounterNumFieldChange = (event) => {
        this.state = {counterNum : event.target.value, sum : 0};
        this.setState(this.state);
    }

    render(){
        let counters = [];
        for(let i = 0; i < this.state.counterNum; i++){
            counters.push(<Counter initValue={0} subCallback={this.subCallback} addCallback={this.addCallback}/>);
        }
        return <div className="CounterGroup">
            <input onChange={this.onCounterNumFieldChange} type="text" placeholder="请输入计数器个数"/>
            {counters}
            <br/><span>总和：{this.state.sum}</span>
        </div>
    }

}

export default CounterGroup;

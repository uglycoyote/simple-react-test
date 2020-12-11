
import "./index.less"

import * as React from "react"
import * as ReactDOM from "react-dom"

class TestComponent extends React.Component<{}, {count: number}> {

    constructor(props: {}) {
        super(props);

        this.state = {count: 0};

        setInterval(()=>{this.increment()}, 1000);
    }

    increment() {
        const newValue = this.state.count+1;
        console.log("incrementing to " + newValue);
        this.setState({count: newValue});
    }

    render() {
        return <div className="test-component">
            <h3>Test component</h3>
            Count = {this.state.count}
        </div>

    }
}

ReactDOM.render(<TestComponent/>, document.getElementById("content"))
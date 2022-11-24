import React, { PureComponent } from 'react';

class Purecomp extends PureComponent {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }

    componentDidMount(){
        console.log("Mounted");
    }

    componentDidUpdate(){
        console.log("Updated");
    }

    render() {
        return (
            <div>
                <p>This is an example of PureComponent in which a count initially set at zero is increased and decreased by the respective buttons and the component is updating each time. The count is set to not go below zero so when it will be decreased further </p>
                <p>The PureComponent will not update when count is decreased at 0 because of the if condition.</p>
                <h3>The count is {this.state.count}</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increase</button>
                <button onClick={()=>{
                        if(this.state.count !== 0){
                            this.setState({count:this.state.count-1})
                        }
                    }}>Decrease</button>
            </div>
        );
    }
}

export default Purecomp;
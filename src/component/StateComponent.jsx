import React,{Compont} from "react";

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render(){
    return (
        <div>
            Counter:{this.state.counterh}
        <button></button>
        </div>
    );
  }
}

export default  StateComponent;

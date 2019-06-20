import React from "react";
import "./App.css";
import Slider from "./Component/Slider";

class App extends React.Component {
  state = {
    value: 500
  };

  handleOnChange = e =>
    this.setState({
      value: e.target.value
    });

  render() {
    return (
      <div>
        <section>
          <div>
            <h1>Loan Calculator</h1>
            <div className="row">
              <div className="col-6">
                <Slider
                  value={this.state.value}
                  min={500}
                  max={5000}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="col-6">
                <div>
                  <span className="loanText">{this.state.value}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

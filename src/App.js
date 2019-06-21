import React from "react";
import "./App.css";
import Slider from "./Component/Slider";

class App extends React.Component {
  state = {
    value: 500,
    months: 6
  };

  handleOnChange = e =>
    this.setState({
      value: e.target.value
    });

  handleOnChangeMonths = e =>
    this.setState({
      months: e.target.value
    });

  render() {
    return (
      <div>
        <section>
          <div className="cont">
            <h1>Loan Calculator</h1>
            <div className="row">
              <div className="col-6">
                <div className="container">
                  <h2 style={{ float: "left" }}>Loan Amount</h2>
                  <span className="loanText" style={{ float: "right" }}>
                    <sup
                      style={{
                        top: "-0.3em",
                        fontSize: "20px",
                        fontWeight: "400"
                      }}
                    >
                      &#8377;
                    </sup>
                    {this.state.value}
                  </span>
                  <Slider
                    value={this.state.value}
                    min={500}
                    max={5000}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="container-fluid mt-5">
                  <h2 style={{ float: "left" }}>Number of months</h2>
                  <span className="loanText" style={{ float: "right" }}>
                    {this.state.months}
                  </span>
                  <Slider
                    value={this.state.months}
                    min={6}
                    max={24}
                    onChange={this.handleOnChangeMonths}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="ml-5 row">
                  <div className="col-12">
                    <h2>Monthly EMI</h2>
                    <span className="subText">
                      <sup style={{ top: "-0.3em" }}>&#8377;</sup>15000
                    </span>
                  </div>
                </div>
                <div className="ml-5 row">
                  <div className="col-12 mt-5">
                    <h2>Interest Rate(%)</h2>
                    <span className="subText">12%</span>
                  </div>
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

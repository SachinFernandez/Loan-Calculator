import React from "react";
import "./App.css";
import axios from "axios";
import Slider from "./Component/Slider";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minLoanAmount: 500,
      minDurationMonths: 6,
      amountemi: 0,
      interestRate: 0
    };
    this.getLoanInterest(this.state.minLoanAmount, this.state.minDurationMonths);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
  }

  handleAmountChange(e) {
    this.setState({ minLoanAmount: e.target.value }, () => {
      this.getLoanInterest(this.state.amountemi, this.state.interestRate);
    });
  }

  handleDurationChange(e) {
    this.setState({ minDurationMonths: e.target.value }, () => {
      this.getLoanInterest(this.state.amountemi, this.state.interestRate);
    });
  }

  getLoanInterest() {
    axios
      .get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.minLoanAmount}&numMonths=${this.state.minDurationMonths}`)
      .then(res =>
        this.setState({
          amountemi: res.data.monthlyPayment.amount,
          interestRate: res.data.interestRate
        })
      );
  }

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
                    {this.state.minLoanAmount}
                  </span>
                  <Slider
                    value={this.state.minLoanAmount}
                    min={500}
                    max={5000}
                    onChange={this.handleAmountChange}
                  />
                </div>
                <div className="container-fluid mt-5">
                  <h2 style={{ float: "left" }}>Number of months</h2>
                  <span className="loanText" style={{ float: "right" }}>
                    {this.state.minDurationMonths}
                  </span>
                  <Slider
                    value={this.state.minDurationMonths}
                    min={6}
                    max={24}
                    onChange={this.handleDurationChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="ml-5 row">
                  <div className="col-12">
                    <h2>Monthly EMI</h2>
                    <span className="subText">
                      <sup style={{ top: "-0.3em" }}>&#8377;</sup>
                      {this.state.amountemi}
                    </span>
                  </div>
                </div>
                <div className="ml-5 row">
                  <div className="col-12 mt-5">
                    <h2>Interest Rate(%)</h2>
                    <span className="subText">{this.state.interestRate}</span>
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

var QuadraticCalculator = React.createClass({
  getInitialState: function() {
    return {
      length_of_side: 1,
    };
  },

  /**
   * This function will be re-bound in render multiple times. Each .bind() will
   * create a new function that calls this with the appropriate key as well as
   * the event. The key is the key in the state object that the value should be
   * mapped from.
   */
  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = parseFloat(event.target.value);
    this.setState(partialState);
  },

  render: function() {
    
    var golden_ratio = (1 + Math.sqrt(5))/2
    var length_of_side = this.state.length_of_side;

    var shorter_side = length_of_side / golden_ratio;
    var longer_side = length_of_side * golden_ratio;

    return (
      <div>
        <strong>
          Golden ratio = φ = (1 + &radic;<span style={{textDecoration:'overline'}}>5</span>) / 2 = <strong>{golden_ratio}</strong>
        </strong>
        <h4>Determine lengths using golden ratio!</h4>
        <p>
          <label>
          Enter a length : <input type="number" value={length_of_side} onChange={this.handleInputChange.bind(null, 'length_of_side')} />
          </label>
          <br />
          If a rectangle has a dimension of length : <strong>{length_of_side}</strong>
          <br />
          Then the other dimensions would be :
          <br />
          If <strong>{length_of_side}</strong> is the length of the shorter side of the rectangle, the longer side is : <strong>{longer_side}</strong>
          <br />
          If <strong>{length_of_side}</strong> is the length of the longer side of the rectangle, the shorter side is : <strong>{shorter_side}</strong>
          <br />
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <QuadraticCalculator />,
  document.getElementById('container')
);

import React from "react";

class Total extends React.Component {
  render() {
    let total = this.props.total.toFixed(2);
    let tax = (this.props.total * 0.15).toFixed(2);
    let totalIncTax = (+total + +tax).toFixed(2);
    const mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    return (
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#F6F6F6",
          padding: "10px"
        }}
      >
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">Total price:</span>
          <span className="col-6 text-right">${total}</span>
        </h3>
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">Tax (15%):</span>
          <span className="col-6 text-right">${tax}</span>
        </h3>
        <h3 className="row" style={mystyle}>
          <span className="col-6">Tota inc tax:</span>
          <span className="col-6 text-right">${totalIncTax}</span>
        </h3>
      </div>
    );
  }
}

export default Total;

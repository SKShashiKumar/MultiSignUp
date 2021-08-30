import React from "react";

const Address = ({ setForm, navigation }) => {

  const { previous, next } = navigation;

  return (

    <div className="form-container">
      <h1 className="mb-5">Additional details</h1>

      <form action="" onSubmit={next}>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" name="address" onChange={setForm} required />
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" name="city" onChange={setForm} required />
          </div>
          <div className="col">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" name="state" onChange={setForm} required />
          </div>
          <div className="col">
            <label htmlFor="pincode">Pincode</label>
            <input type="Number" className="form-control" name="pincode" onChange={setForm} pattern="^[1-9][0-9]{5}$" required />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger"  onClick={previous}>Back</button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary">Continue</button>
          </div>
        </div>
      </form>
    </div>

  );
};

export default Address;

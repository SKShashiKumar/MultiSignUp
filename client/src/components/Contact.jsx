import React from "react";

const Contact = ({ setForm, navigation }) => {

  const { previous, next } = navigation;

  
  return (
    <div className="form-container">
      <h1 className="mb-5">Register</h1>
      <form onSubmit={next}>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="exampleFormControlInput1">Contact number : </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">+91 </div>
                </div>
                <input type="tel" className="form-control" placeholder="987 654 3210" pattern="[0-9]{10}" name="phone" onChange={setForm} required />
              </div>
            </div>
            <div className="col">
              <label htmlFor="exampleFormControlInput1">Email : </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input type="email" className="form-control" id="email" placeholder="abcd@email.com" name="email" onChange={setForm} pattern="[a-zA-Z0-9]{2,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}" required />
              </div>
            </div>
          </div>
          <br /><div className="row">
            <div className="col-6">
              <button className="btn btn-danger" onClick={previous}>Back</button>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-primary">Continue</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
};

export default Contact;

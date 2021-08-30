import React from "react";

const Names = ({ setForm, navigation }) => {

  const { next } = navigation;


  return (

    <div className="form-container">
      <h1 className="mb-5">Register</h1>

      <form onSubmit={next}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" onChange={setForm} placeholder="Enter Your Name" required />
        </div>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"><h6>Gender:</h6></div>
            <div className="form-check">
            <div className="col-sm-4"><input type="radio" className="form-check-input" name="gender" value="Male" onChange={setForm} required />Male</div>
            </div>
            <div className="form-check">
            <div className="col-sm-4"><input type="radio" className=  "form-check-input" name="gender" value="Female" onChange={setForm} required />Female</div>
            </div>
          </div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" onChange={setForm} placeholder="Enter Password" required />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="gurl">Github Url</label>
          <input type="text" className="form-control" name="gurl" onChange={setForm} required />
        </div>
        <br />
        <div className="text-right">
          <button type="submit" className="btn btn-primary">Continue</button>
        </div>
      </form>
    </div>

  );
};

export default Names;

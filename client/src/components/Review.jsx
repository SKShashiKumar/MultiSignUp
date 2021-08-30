import React,{useState,useEffect} from "react";
import axios from 'axios'

const Review = ({ setForm, formData, navigation }) => {
  const {
    name,
    gender,
    email,
    password,
    phone,
    address,
    city,
    state,
    pincode,
    gurl
  } = formData;
  const { previous, go } = navigation;

  const [remail, setRemail] = useState(['abc'])

  useEffect(() => {  
    axios.get('/getAcc')
      .then(res => {
                    let res1 = res.data
                    setRemail(res1.map((x) =>
                    {
                      return(x.email)
                    }))
                  })
      .catch(err => console.log(err))
  },[])
  
  console.log(remail)
  
  let abc = () =>  
  {
    let cn = formData
    alert(`Saved ${cn.name}`)

   axios
    .post('/saveFm', cn)
    .then(() => { console.log('Register Saved');
        console.log(cn) })
    .catch(err => {  console.error(err)  })
  };

  let checkexist =() => {
    if (remail.indexOf(email) === -1) {
        console.log()
    }
    else
    {
      alert("Email Already Exist");
      previous()
    }
  }


  return (
    <div className="form-container1">
      <h2 className="mb-1">Confirm</h2>
      <form onSubmit={() => { go("submit");abc()}} onChange={checkexist}>
        <table className="col-sm-12" style={{ 'margin': '0 auto', 'alignItems': 'center' }}>
          <tbody>
            <tr>
              <td className="col-sm-2"><h6>Name:</h6></td><td className="col-sm-2">{`${name}`}</td>
            </tr>
            <tr>
              <td className="col-sm-2"><h6>
                Gender:</h6> </td><td className="col-sm-2">{`${gender}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2"><h6>
                Email:</h6> </td><td className="col-sm-2">{`${email}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2">
                <h6>Phone Number:</h6></td><td className="col-sm-2"> {`${phone}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2">
                <h6>Password:</h6> </td><td className="col-sm-2">{`${password}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2">
                <h6>Address:</h6> </td><td className="col-sm-2">{`${address}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2">
                <h6>City:</h6> </td><td className="col-sm-2">{`${city}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2">
                <h6>State:</h6></td><td className="col-sm-2"> {`${state}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2">
                <h6>Pincode: </h6></td><td className="col-sm-2">{`${pincode}`}
              </td>
            </tr>
            <tr>
              <td className="col-sm-2">
                <h6>Github URL:</h6> </td><td className="col-sm-2"><a href={`${gurl}`} target="blank">{`${gurl}`}</a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="col-sm-6">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
              <input type="checkbox" id="customCheck1" required />&nbsp;&nbsp;
              <label style={{'fontSize':'1 em'}}>I Accept </label>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        <div className="row">
          <div className="col-6 text-right">
            <button className="btn btn-success" type="submit">Continue</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;

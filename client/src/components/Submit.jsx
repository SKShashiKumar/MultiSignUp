import React from "react";
const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <div style={{'margin':'0 auto'}}>
      <h3 style={{'color':'white'}}>Thank you for submitting. Click here to get New form</h3><br/>
      <div style={{'color':'white','marginLeft':'25%'}}><button onClick={() => go("names")} className="btn bg-warning" style={{'padding':'5px','fontSize':'2em'}}>New Login</button></div>
    </div>
  );
};

export default Submit;

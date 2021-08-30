import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Names from "./Names";
import Address from "./Address";
import Contact from "./Contact";
import Review from "./Review";
import Submit from "./Submit";
import LoginForm from "./login";

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" }
];

const defaultData = {
  name: "Jon",
  gender: "Male",
  email: "JohnDoe@gmail.com",
  password: "password",
  phone: "+919876543210",
  address: "Address",
  city: "Hassan",
  state: "Karnataka",
  pincode: "573201",
  gurl: "http://domain.com"
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };    

  switch (id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;

import { Box, Button,  FormGroup, Typography } from "@mui/material";
import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  country: "",
  city: "",
  state: "",
  message: "",
};

const errStyle = {
  color: "red",
  fontSize: 12,
};

const FormValidation = () => {
  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!details.name || !details.email) {
      alert('Please provide name and email')
      return
    } else if(!regex.test(details.email)) {
      alert('Invalid email')
      return
    }

    alert("Details send Successfully");
    setDetails(initialState)


  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "120vh",
        }}
      >


        <FormGroup>

          <Typography style={{ fontWeight: 700, color: 'blue', fontSize: 25, marginBottom: 33, textAlign: 'center' }}> Basic Form Validation</Typography>

          <input
            required
            value={details.name}
            onChange={(e) => handleChange(e)}
            style={{ marginBottom: 11, width: 435,  borderRadius: 2, height: 40, outline: 'none', border: '2px solid  rgba(35, 34, 46, 0.3)', padding: '5px 11px' }}
            placeholder='Enter your name'
            name="name"
          />
          <Typography style={errStyle}> {} </Typography>


          <input
            required
            value={details.email}
            onChange={(e) => handleChange(e)}
            style={{ marginBottom: 11, width: 435, borderRadius: 2, height: 40, outline: 'none', border: '2px solid  rgba(35, 34, 46, 0.3)', padding: '5px 11px' }}
            placeholder='Enter your email'
            name="email"
          />
          <Typography style={errStyle}> { } </Typography>


          <input
            value={details.mobile}
            onChange={(e) => handleChange(e)}
            style={{ marginBottom: 11, width: 435, borderRadius: 2, height: 40, outline: 'none', border: '2px solid  rgba(35, 34, 46, 0.3)', padding: '5px 11px' }}
            placeholder='Enter your mobile number'
            name="mobile"
          />
          <Typography style={errStyle}> { }</Typography>


          <input
            value={details.country}
            onChange={(e) => handleChange(e)}
            style={{ marginBottom: 11, width: 435, borderRadius: 2, height: 40, outline: 'none', border: '2px solid  rgba(35, 34, 46, 0.3)', padding: '5px 11px' }}
            placeholder="Country"
            name="country"
          />
          <Typography style={errStyle}> {} </Typography>


          <input
            value={details.city}
            onChange={(e) => handleChange(e)}
            style={{ marginBottom: 11, width: 435, borderRadius: 2, height: 40, outline: 'none', border: '2px solid  rgba(35, 34, 46, 0.3)', padding: '5px 11px' }}
            placeholder="City"
            name="city"
          />
           <Typography style={errStyle}> { } </Typography>

          <input
            value={details.state}
            onChange={(e) => handleChange(e)}
            style={{ marginBottom: 11, width: 435, borderRadius: 2, height: 40, outline: 'none', border: '2px solid  rgba(35, 34, 46, 0.3)', padding: '5px 11px' }}
            placeholder="State"
            name="state"
          />
          <Typography style={errStyle}> { } </Typography>


          <input
            value={details.message}
            onChange={(e) => handleChange(e)}
            style={{ marginBottom: 11, width: 435, borderRadius: 2, height: 40, outline: 'none', border: '2px solid rgba(35, 34, 46, 0.3)', padding: '5px 11px' }}
            placeholder="Message"
            name="message"
          />
          <Typography style={errStyle}> { } </Typography>

          <Button
            style={{ borderRadius: 0 }}
            variant="contained"
            color="secondary"
            onClick={() => handleSubmit()}
          >

            Submit
          </Button>
        </FormGroup>
      </Box>
    </>
  );
};

export default FormValidation;

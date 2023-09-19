import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    // formData.set('photo', file);
    formData.append("photo", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/register",
      formData,
      config
    );

    if (res?.status === 200) {
      navigate("/");
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <h1 className="mb-3">Image Upload</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addUser}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;

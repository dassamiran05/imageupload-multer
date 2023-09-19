import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const getUserData = async () => {
    const res = await axios.get("http://localhost:5000/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      setData(res.data);
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  let content = null;
  if (data.length > 0) {
    content = data.map((item) => {
      return (
        <>
          <Card style={{ width: "22rem" }} className="mb-3">
            <Card.Img
              variant="top"
              src={item?.imgPath}
              style={{ textAlign: "center", margin: "auto" }}
              className="mt-2"
            />
            <Card.Body>
              <Card.Title>Name: {item?.name}</Card.Title>
              <Card.Text>Date Added: {item?.date}</Card.Text>
              <Button
                variant="danger"
                className="col-lg-6 text-center"
                onClick={() => handleDelete(item?._id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </>
      );
    });
  } else {
    content = <p>No Data Found</p>;
  }

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/deletedata/${id}`);
      getUserData();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-2">
        <h1>Mearn Image Upload</h1>
        <div className="text-end">
          <Button variant="primary">
            <NavLink to="/register" className="text-decoration-none text-white">
              Add User
            </NavLink>
          </Button>
        </div>
        <div className="row d-flex justify-content-start align-items-center mt-5 gap-3">
          {content}
        </div>
      </div>
    </>
  );
};

export default Home;

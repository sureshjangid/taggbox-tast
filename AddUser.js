import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {

    let history= useHistory();
    let [userInfo, setUserInfo] = useState({
        name: "",
        phone: "",
        city: "",
        zipcode: "",
      });
      let { name, phone, city, zipcode } = userInfo;
    
      // Adding Data
      let handleFild = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      };
    
      let formSubmit = async e => {
        try {
          e.preventDefault();
          await axios
            .post("https://jsonplaceholder.typicode.com/users", userInfo)
            .then(() => {
              alert("success");
              setUserInfo({
                name: "",
                phone: "",
                city: "",
                zipcode: "",
              });
              history.push('/');
            });
        } catch (error) {
          alert(error);
        }
      };

  return (
    <>
    <div className="container py-5">
        <div className="row mx-auto">
          <div>
            <div className="col-lg-6 mx-auto">
            <h1 className="p-5">Add User Data</h1>
              <form onSubmit={e => formSubmit(e)}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => handleFild(e)}
                  placeholder="Name"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={e => handleFild(e)}
                  placeholder="Phone"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={e => handleFild(e)}
                  placeholder="City"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="zipcode"
                  value={zipcode}
                  onChange={e => handleFild(e)}
                  placeholder="Zipcode"
                  className="form-control mb-2"
                />
                <button className="btn btn-success">Add Info</button>
                <br />
              </form>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default AddUser
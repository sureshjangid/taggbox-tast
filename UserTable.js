import React,{useState,useEffect} from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';

const UserTable = () => {


    let [data, setData] = useState([]);
      // Api
  let API_KEY = "https://jsonplaceholder.typicode.com/users";

  // Fetching data from API;
  let userData = async () => {
    try {
      let getInfo = await axios.get(`${API_KEY}`);
      setData(getInfo.data);
      console.log(getInfo.data);
    } catch (error) {
      alert("Data not Found");
    }
  };

  useEffect(() => {
    userData();
  }, []);



    // UserData Delete
    let DataDelete = async id => {
        try {
        await  axios
            .delete(`https://jsonplaceholder.typicode.com/users/{$id}`)
            .then(() => {
              alert("successfully Delete");
              userData();
            });
        } catch (error) {
          alert("failed to Delete");
        }
      };
  return (
    <div>
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <table className="table">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th> City</th>
                <th> Zipcode</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              <tbody>
                {data.map((curr) => {
                  let { id, name, phone, city, zipcode } = curr;
                  return (
                    <>
                      <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{curr.address.city}</td>
                        <td>{curr.address.zipcode}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => DataDelete(id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <NavLink
                            className="btn btn-primary"
                            to={`edit/${id}`}
                          >
                            Edit
                          </NavLink>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
            </div>
        </div>
    </div>
  )
}

export default UserTable
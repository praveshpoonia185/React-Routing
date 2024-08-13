import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Common/Loader";
import Sellers from './Sellers';

const Sellers = () => {
  const [name, setName] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [sellers, setSellers] = useState([]);

  const fetchSellers = async () => {
    try {
      setisLoading(true);
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setSellers(res.data);
          setisLoading(false);
        });
    } catch (err) {
      setisLoading(false);
      setErrors(err.message);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const addSeller = () => {
    const newSeller = {
      name: name,
      id: sellers.length + 1,
    };

    setSellers([newSeller, ...sellers]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newSeller)
      .then((res) => {
        setErrors([res.data, ...sellers]);
      })
      .catch((err) => {
        setErrors(err.message);
        setSellers(sellers);
      });
  };

  const deleteSeller = () => {
    sellers.filter((s) => {
      return setSellers(s.id !== id);
    });
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).catch((err) => {
      setErrors(err.message);
      setSellers(sellers);
    })
  };

  const updateSeller = (seller) => {
    const updatedSeller = {
      ...seller,
      name: seller.name + "Updated",
    }

    setSellers(sellers.map((s) => {
      return s.id === seller.id ? updatedSeller : s;
    }))

    axios.patch(`https://jsonplaceholder.typicode.com/users/${seller.id}`, updatedSeller).catch((err) => {
      setErrors(err.message);
      setSellers(sellers);
    })
  }

  return (
    <>
      <h1>Sellers</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={addSeller}>Add Seller</button>
      {isLoading && <Loader />}
      {errors && <em>{errors}</em>}
      <table>
        <tbody>
          {sellers.map((seller) => {
            <tr key={seller.id}>
              <td>{seller.name}</td>
              <td>
                <button onClick={() => updateSeller(seller.id)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteSeller(seller.id)}>Delete</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Sellers;

// BASICS OF HTTP REQUESTS:
// If our Browser want some Resources so, it will request server using Internet, This request is called as "HTTP Request"
// So in simple words, This HTTP request work like a Bridge between Clients and Servers

// Now, There are some methods which describe which type of task we want to perform:

// "GET" Request:- which is used to Fetching data from server
// "POST" Request:- which is used to Submit Data to Server
// "PUT" Request:- which is used to Replace Data at Server
// "PATCH" Request:- which is used to Update Specific at Server
// "DELETE" Request:- which is used to Delete Data from Server

// WHAT IS THE DIFFERENCE BETWEEN "PUT" AND "PATCH"?

// For eg: we have server which have information about 10 Books, Now, if we want to replace this one book with new Book details, then we use "PUT" Request,
// But if we want to update specific details of Book like we want to update its Price, then we use "PATCH" method

// Every "HTTP Request" and "Response" divided in two Sections:
// HEADER:- inwhich we define "Meta" data
// BODY:- inwhich we "Get" the data

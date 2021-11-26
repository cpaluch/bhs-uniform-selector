import React, { useState, useEffect } from "react";
import ManageUsers from "./components/Settings/ManageUsers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from 'axios';
import styles from "./ManageUsersPage.module.css";

export default function ManageUsersPage() {

  const [users, setUsers] = useState([]);

  // Get all users on page load
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    axios.get('http://localhost:5000/user').then(res => {
      const users = res.data;
      setUsers(users);
    });
  };

  const addUser = async (event) => {
    console.log(event)
    const formData = new FormData(event.currentTarget);
    const credentials = {
      email: formData.get('email'),
      password: formData.get('password'),
      f_name: formData.get('f_name'),
      l_name: formData.get('l_name'),
    };
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    axios
      .post('http://localhost:5000/user/register', credentials, config)
      .then(function (results) {
        getAllUsers();
      });
  }

  return (
    <div className={styles.float_container}>
      <Header className={styles.headerWrapper} />
      <div className={styles.settingsComponentWrapper}>
        <ManageUsers
          users={users}
          onRegisterUser={addUser} />
      </div>
      <div className={styles.addUniformFooter}>
        <Footer />
      </div>
    </div>
  );
};

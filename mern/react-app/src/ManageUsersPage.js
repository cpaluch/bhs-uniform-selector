import React, { useState, useEffect } from "react";
import ManageUsers from "./components/Settings/ManageUsers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from 'axios';
import styles from "./AddUniformsPage.module.css";
import validator from 'validator';

export default function ManageUsersPage () {

  const [users, setUsers] = useState([]);

  const [selectedUserIDs, setSelectedUserIDs] = useState([]);

  const [newUserInfo, setNewUserInfo] = useState({
    email : "",
    password : "",
    f_name : "",
    l_name : ""
  });

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

  const addUser = async () => {

    console.log(users)

    const credentials = {
      email: newUserInfo.email,
      password: newUserInfo.password,
      f_name: newUserInfo.f_name,
      l_name: newUserInfo.l_name,
    };

    // Check for empty fields
    if (credentials.email == null || credentials.email === "") {
      alert("Please enter an email address for the user.");
      return
    } else if (credentials.password == null || credentials.password === "") {
      alert("Please enter a password for the user.");
      return
    } else if (credentials.f_name == null || credentials.l_name === "") {
      alert("Please enter a first name for the user.");
      return
    } else if (credentials.l_name == null || credentials.l_name === "") {
      alert("Please enter a last name for the user.");
      return
    }

    // Check for invalid email address
    if (!validator.isEmail(credentials.email)) {
      alert("Please enter a valid email address.")
      return
    }

    console.log(users.find(u => u.email === credentials.email));

    // Check if user already exists
    if (users.find(u => u.email === credentials.email) !== undefined) {
      alert("User with email " + credentials.email + " already exists.")
      return
    }

    // All checks passed, create new user
    const config = {
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    axios
      .post('http://localhost:5000/user/register', credentials, config)
      .then(function(results) {
        getAllUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSelectedUsersChange = (user_ids) => {
    setSelectedUserIDs(user_ids);
  }

  const deleteUsers = async () => {
    const data = {
      user_ids: selectedUserIDs
    }
    const config = {
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    axios
      .post('http://localhost:5000/user/delete', data, config)
      .then(function(results) {
        getAllUsers();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleFNameChange = (f_name) => {
    setNewUserInfo({...newUserInfo, f_name : f_name });
  }

  const handleLNameChange = (l_name) => {
    setNewUserInfo({...newUserInfo, l_name : l_name });
  }

  const handleEmailChange = (email) => {
    setNewUserInfo({...newUserInfo, email: email });
  }

  const handlePasswordChange = (password) => {
    setNewUserInfo({...newUserInfo, password : password })
  }

  return (
    <div className={styles.float_container}>
      <Header className={styles.headerWrapper} />
      <div className={styles.settingsComponentWrapper}>
        <ManageUsers
          users={users}
          onSelectedUsersChange={handleSelectedUsersChange}
          onRegisterUser={addUser}
          onDeleteUsers={deleteUsers}
          onFNameChange={handleFNameChange}
          onLNameChange={handleLNameChange}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}/>
      </div>
      <Footer className={styles.footerWrapper} />
    </div>
  );
};

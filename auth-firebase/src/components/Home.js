import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
        Hello  <br />
        {user&&user.email}<br/>
        Welcome<br/>
        <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
    </>
  );
};

export default Home;
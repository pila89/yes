import { useDispatch, useSelector } from "react-redux";
import Usercard from "../../components/usercard/Usercard";
import { getUsers } from "../../Redux/actions/user";
import React, { useEffect } from "react";

//recuperer les listes des users

function User() {
  const dispatch = useDispatch();
 
  const users = useSelector((state) => state.userReducer.user);
  

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  return (
    
    <div>
      {!users ?<div>loading </div>: users.map((el) => (
          <Usercard user={el} />
      ))} 
     
    </div>
  );
}
export default User;




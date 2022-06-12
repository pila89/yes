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
      <div >  Admin space : List of users </div>

      {!users ?<div>loading </div>: users.map((el) => (
          <Usercard user={el} />
      ))} 
      {
       users && users.length == 0 ? <div> No users available</div>:<div> </div>
      } 
    </div>
  );
}
export default User;




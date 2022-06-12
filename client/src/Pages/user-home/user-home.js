import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/car-card/car-card";
import { getAllCars } from "../../Redux/actions/car";

//get cars

function User() {

  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carReducer.cars);

  useEffect(() => {
    dispatch(getAllCars())
  }, []);

  return (
    <div>
      <div>  User space : List of cars</div>
      <div> My cars  </div>
      
        {!cars ?<div>loading </div>: cars.map((el,index)  => ( 
        <div key={index}> 
        <CarCard car={el} />
        </div>

          
      ))}  
      
      {
cars && cars.length == 0 ? <div> No cars available</div>:<div> </div>
      } 
      
    </div>
  );
}
export default User;

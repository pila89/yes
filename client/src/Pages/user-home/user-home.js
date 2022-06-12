import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Voiturecard from "../../components/voiturecard/Voiturecard";
import { getAllVoiture } from "../../Redux/actions/voiture";

//recuperer les listes des voitures

function User() {

  const dispatch = useDispatch();
  const voitures = useSelector((state) => state.carReducer.voitures);
console.log(voitures);
  useEffect(() => {
    dispatch(getAllVoiture())
  }, []);

  return (
    <div>
        {!voitures ?<div>loading </div>: voitures.map((el) => (
          <Voiturecard voiture={el} />
      ))}  
    </div>
  );
}
export default User;

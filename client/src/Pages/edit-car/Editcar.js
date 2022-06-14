// import { Col, Row, Form, Input } from "antd";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editCar, getAllCars } from "../../Redux/actions/car";

// function EditCar({ match }) {
//   const dispatch = useDispatch();
//   const { cars } = useSelector((state) => state.carReducer);
//   const [car, setCar] = useState();
//   const [totalcars, settotalcars] = useState([]);

//   useEffect(() => {
//     if (cars.length == 0) {
//       dispatch(getAllCars());
//     } else {
//       settotalcars(cars);
//       setCar(cars.find((o) => o._id == match.params.carid));
//       console.log(car);
//     }
//   }, [cars]);
//   function onFinish(values) {
//     values._id = car._id;

//     dispatch(editCar(values));
//     console.log(values);
//   }

//   return (
//     <div>
//       <Row justify="center mt-5">
//         <Col lg={12} sm={24} xs={24} className="p-2">
//           {totalcars.length > 0 && (
//             <Form
//               initialValues={car}
//               className="bs1 p-2"
//               layout="vertical"
//               onFinish={onFinish}
//             >
//               <h3>EDIT Car</h3>
//               <hr />
//               <Form.Item
//                 name="marque"
//                 label="marque"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 name="kilometrage"
//                 label="kilometrage"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 name="dateDeCirculation"
//                 label="dateDeCirculation"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//               <div className="text-right">
//                 <button className="btn1">Edit CAR</button>
//               </div>
//             </Form>
//           )}
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default EditCar;

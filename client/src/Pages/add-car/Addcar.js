import { Col, Row, Form, Input } from "antd";
import React from "react";
import { useDispatch ,useSelector } from 'react-redux';
//import { addCar } from '../redux/actions/car'

function AddCar() {
   const dispatch = useDispatch()
  // const {loading} = useSelector(state=>state.alertsReducer)

  function onFinish(values) {
    //  values.bookedTimeSlots=[]
    //  dispatch((values))
   
  }

  return (
    <div>
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h3>Add New Car</h3>
            <hr />
            <Form.Item
              name="marque"
              label="marque"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="kilometrage"
              label="kilometrage"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateDeCirculation"
              label="dateDeCirculation"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <div className="text-right">
              <button className="btn1">ADD CAR</button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
    // </DefaultLayout>
  );
}

export default AddCar;

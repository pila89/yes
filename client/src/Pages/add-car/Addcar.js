import { Col, Row, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../../Redux/actions/car";

function AddCar() {
  const dispatch = useDispatch();

  const [marque, setMarque] = useState('');
  const [kilometrage, setKilometrage] = useState('');
  const [dateDeCirculation ,setDateDeCirculation]= useState('');

  return (
    <div>
     
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical">
            <h3>Add New Car</h3>
            <hr />
            <Form.Item
              name="marque"
              label="marque"
              onChange={(e) => setMarque(e.target.value)}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="kilometrage"
              type="number"
              label="kilometrage"
              onChange={(e) => setKilometrage(e.target.value)}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateDeCirculation" 
              onChange={(e) => setDateDeCirculation(e.target.value)}
              label="dateDeCirculation"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <div className="text-right">
              <button className="btn1" onClick={()=>dispatch(addCar({kilometrage,marque,dateDeCirculation}))}>
                ADD CAR
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AddCar;

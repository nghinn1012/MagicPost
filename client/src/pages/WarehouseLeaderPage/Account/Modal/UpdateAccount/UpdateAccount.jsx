import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getAllWarehouses, getAllTransactionPoints } from "../../../../../store/actions";
import { apiUpdateUserById } from "../../../../../services/user";

function UpdateAccountModal(props) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const { warehouses } = useSelector((state) => state.warehouse);
  const { transactionPoints } = useSelector((state) => state.transactionPoint);

  useEffect(() => {
    dispatch(getAllWarehouses());
  }, []);

  useEffect(() => {
    dispatch(getAllTransactionPoints());
  }, []);

  const { account } = props;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    role: "WAREHOUSE_STAFF",
    workLocation: "",
  });
  useEffect(() => {
    if (account) {
      setFormData({
        ...account,
        name: account.name || "",
        phone: account.phone || "",
        role: account.accountType || "",
        workLocation:
          account.Warehouses[0]?.name ||
          account.TransactionPoints[0]?.name ||
          "",
      });
    }
  }, [account]);
  

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      if (formData.phone[0] !== '0' || !(formData.phone.match('[0-9]{10}'))) {
        window.alert("Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.");
        return;
      }
      console.log(formData)
      const payload = {
        id: account.id,
        name: formData.name,
        phone: formData.phone,
        address: formData.address
      }
      apiUpdateUserById(payload)
      window.alert("Cập nhật thành công")
      window.location.reload()
      // props.onHide();
      // setFormData({
      //   userName: "",
      //   phone: "",
      //   role: "",
      //   workLocation: "",
      // });
    }
  };

  const handleHide = () => {
    setFormData({
      ...account,
      name: account.name || "",
      phone: account.phone || "",
      role: account.accountType || "",
      workLocation:
        account.Warehouses[0]?.name ||
        account.TransactionPoints[0]?.name ||
        "",
    });
    if (props.onHide) {
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      className="custom-modal"
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Cập nhật tài khoản
        </Modal.Title>
        <CloseIcon onClick={handleHide}>Đóng</CloseIcon>
      </Modal.Header>
      <Modal.Body>
        <Form validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="name">
              <Form.Label>Tên tài khoản</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="phone">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="address">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <div className="text-center mt-3" style={{ marginTop: "50px" }}>
              <Button variant="secondary" type="submit" id="input-submit">
                Cập nhật
              </Button>
              <Button variant="secondary" onClick={handleHide}>
                Đóng
              </Button>
            </div>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default UpdateAccountModal;

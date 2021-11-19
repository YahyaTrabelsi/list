import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Col, Button } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddStudent = ({ addSudent }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitStudent = (e) => {
    e.preventDefault();
    let newStudent = {
      firstName: firstName,
      lastName: lastName,
      photo: photo,
    };

    addSudent(newStudent);
    closeModal();
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name .."
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Second Name :</Form.Label>
            <Form.Control
              placeholder="Enter yout second name .."
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Photo : </Form.Label>
            <Form.Control
              placeholder="Enter you image adress ..."
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitStudent(e)}
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddStudent;

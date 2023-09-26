import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {  useSelector } from "react-redux";

function ViewModal({ id, setId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const allusers = useSelector((state) => state.crud.users);

  const singleUser = Array.from(allusers).filter((ele) => ele.id === id);

  return (
    <>
      <Button
        variant="primary"
        className="btn"
        onClick={() => [handleShow(), setId(id)]}
      >
        View
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="modalBackground">
            <div className="modalContainer">
              <h2>{singleUser[0]?.username}</h2>
              <h3>{singleUser[0]?.email}</h3>
              <h4>{singleUser[0]?.age}</h4>
              <p>{singleUser[0]?.gender}</p>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ViewModal;

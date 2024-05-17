import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useNavigate from 'react-router-dom';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => navigate(window.location.pathname);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sukses!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Data berhasil ditambahkan</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Kembali
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
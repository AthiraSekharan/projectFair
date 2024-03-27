import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploading from '../assets/images5.png'

function Edit() {

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit me-1'></i></button>
        <Modal size='lg' centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-4">
                <label >
                  <input type="file" style={{ display: 'none' }} />
                  <img height={'200px'} className='img-fluid' src={uploading} alt="" />
                </label>
              </div>
              <div className="col-lg-8">
  
                <div className='mb-2'><input className='form-control' placeholder='Project Title' type="text" />
                </div>
                <div className='mb-2'><input className='form-control' placeholder='Languages Used In The Projects' type="text" />
                </div>
                <div className='mb-2'><input className='form-control' placeholder='Project Github Link' type="text" />
                </div>
                <div className='mb-2'><input className='form-control' placeholder='Project Website Link' type="text" />
                </div>
               
              </div>
              <div className='mb-2'><input className='form-control' placeholder='Project Overview' type="text" />
                </div>
  
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Update</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  
}

export default Edit
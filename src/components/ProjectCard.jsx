import React,{ useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Card onClick={handleShow} className='shadow btn' style={{width:'28rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" />
      <Card.Body>
        <Card.Title>Project title</Card.Title>   
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PROJECT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img style={{height:'250px'}} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASUwDrs2Xr4betyoDOYfANPCZaN393CylQJJplg1hMQBRbDJkdtUKcbtez5cktUgzF64&usqp=CAU" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>PROJECT TITLE</h3>
              <h5><span className='fw-bolder'>LANGUAGE USED:</span>HTML,CSS,JS</h5>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>DESCRIPTION:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati laudantium sapiente magni sunt, commodi corporis saepe eaque voluptate mi.</p>
            </div>
          </div>

<hr />
<div className="float-start">
  <a href={'https://github.com/'} className='btn btn-secondary' target='_blank' onClick={handleClose}>
  <i className='fa-brands fa-github'></i>
  </a>
  <a href={'https://vercel.com/athirasekharans-projects'} className='btn btn-secondary ms-2' target='_blank' onClick={handleClose}>
  <i className='fa-solid fa-link'></i>
  </a>
</div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard
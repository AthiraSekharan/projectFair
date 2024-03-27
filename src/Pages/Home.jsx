import React from 'react'
import { Link } from 'react-router-dom'
import landing from '../assets/image1.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

function Home() {
  return (
    <>
  <div className='w-100 d-flex justify-content-center align-items-center rounded' style={{height:'100vh',backgroundColor:'lightgreen'}}>
<div className='container'>
    <div className="row align-items-center">
        <div className="col-lg-6">
         <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i> Project Fair</h1>
         <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolores aliquam accusamus praesentium id veritatis, sint ipsa ut quos nihil. Harum officiis soluta minima sequi quos doloremque eaque quia. Porro.</p>
         <Link to={'/login'}  className='btn btn-warning'>Start to Explore <i class="fa-solid fa-arrow-right"></i></Link>
         
        </div>
        <div className="col-lg-6">
    <img className='img-fluid' src={landing}  alt="" />
        </div>
    </div>
</div>







    </div>


<div className='mt-5'>
  <h1 className='text-center mb-5'>EXPLORE OUR PROJECTS</h1>
  <marquee>
    <div className='d-flex'>
<div className='me-5'>
<ProjectCard />
</div>

    </div>
  </marquee>
</div>





<div className='d-flex justify-content-evenly align-items-center mb-5'>
<h1>OUR TESTIMONIALS</h1>
</div>
<div  className='d-flex justify-content-evenly align-items-center mb-5'>
<Card style={{ width: '18rem' }}>
      <Card.Body className=''>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded-circle image-fluid ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPD9kbuTEWn1mM-bNxwgDebSjg0sfWfYQKIAlKrqx0SQ&s" alt="" />

         <span> MAX MILLER</span>
         </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>

          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>

          </div>
          
<p className='text-center'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium rem dignissimos accusamus dolore quasi ab tempore ex vel provident, ipsa quis debitis beatae possimus pariatur iste recusandae sapiente id.
</p>       
 </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Body className=''>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded-circle image-fluid ' src="https://www.freeiconspng.com/thumbs/female-icon/female-icon-6.png" alt="" />

         <span> LUKE DAMIAN</span>
         </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>

          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>

          </div>
          
<p className='text-center' >          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium rem dignissimos accusamus dolore quasi ab tempore ex vel provident, ipsa quis debitis beatae possimus pariatur iste recusandae sapiente id.
</p>       
 </Card.Text>
      </Card.Body>
    </Card>







    <Card style={{ width: '18rem' }}>
      <Card.Body className=''>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded-circle image-fluid ' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg" alt="" />

         <span> ALEXIA</span>
         </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>

          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>

          </div>
          
<p className='text-center'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium rem dignissimos accusamus dolore quasi ab tempore ex vel provident, ipsa quis debitis beatae possimus pariatur iste recusandae sapiente id.
</p>       
 </Card.Text>
      </Card.Body>
    </Card>







    


</div>

<div className='text-center'>
                    <Link style={{color:'blue'}} to={'/projects'}  className='btn btn-link'>Click Here To View More Projects</Link>
                </div>

<hr />
    
    </>
  )
}

export default Home
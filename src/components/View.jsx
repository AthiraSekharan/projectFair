import React from 'react'
import Edit from './Edit'
import Add from './Add'

function View() {
  return (
    <>
    <div className="d-flex justify-content-between  w-100">
      <h2 className='text-warning'>ALL PROJECTS</h2>
<div className=''><Add /></div>
    </div>
    <div className='mt-4'>
<div className="d-flex justify-content-between border p-2 rounded ">
  <h3>Project Title</h3>
  <div className='icons d-flex'>
<div className='btn'><Edit /></div>
<div className='btn'>
  <a href="" target='_blank'><i className='fa-brands fa-github mt-2'></i></a>
  
</div> 
<button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
 </div>
</div>
    </div>
    </>
  )
}

export default View
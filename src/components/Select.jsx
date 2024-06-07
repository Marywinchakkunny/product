import React from 'react'
import Navbar from './Navbar'

const Select = () => {
  return (
    
    <div>
    <Navbar/>
    <div className="container">
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor=""className="form-control">Product Name</label>
          <input type="text" className="form-control"/>
        </div>
        <button className="btn btn-success">Search</button>
      </div>
    </div>
    </div>
  )
}

export default Select

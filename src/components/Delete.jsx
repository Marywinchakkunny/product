import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div>
        <Navbar/>
    <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-control">Delete product</label>
                <input type="text" className="form-control" />
            </div>
            <button className="btn btn-danger">Delete</button>
        </div>
    </div>
    </div>
  )
}

export default Delete

import React from 'react';
import "../css/BlogItem.css";

const BlogItem = props => {
  const logo = props.image;

  return (
    <>
      <div className='p-2 col' key={props._id}>
        <a className='bloglink' href={props.link} target="_blank" rel="noreferrer">
          <div className='card blogItem'>
            <div className="card-body my-1">
              <img src={logo} className="blogImag img-fluid mx-auto d-block rounded" />
              <div className="card-title studentTitle text-capitalize">{props.name}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default BlogItem

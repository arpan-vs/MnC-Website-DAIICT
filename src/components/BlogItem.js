import React from 'react';
import "./students.css";

const BlogItem = props => {
    const toTitleCase = (str) =>{
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
    return (
        <>
            <a className='blogItem' href={props.link} target="_blank" >
                <div className=''>
                    <img src={props.image} className="blogImage" />
                    <div className="studentTitle">{toTitleCase(props.name)}</div>
                </div>
            </a>
        </>
    )
}

export default BlogItem

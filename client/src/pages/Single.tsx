import React from 'react';
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import { Link } from 'react-router-dom';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://res-console.cloudinary.com/dglwbgm9j/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/aGFwcHktdG8tY2hhdC95c3ZpMHJxb2xvdGFic3Q2bmJ4bA==/template_primary" alt="" />
          <div className="info">
            <span>Ashanur Hossain</span>
            <p>Posted two days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
      </div>
      <div className="menu">M</div>
    </div>
  )
}

export default Single
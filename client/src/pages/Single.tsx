import React from 'react';
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="http://res.cloudinary.com/dglwbgm9j/image/upload/v1693384013/happy-to-chat/ysvi0rqolotabst6nbxl.png" alt="" />
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
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nam enim aliquam rem, maiores tempore doloremque fugiat magnam. At placeat corporis ex ab. Dolor, non? Qui reiciendis consectetur repudiandae, similique ratione eius iusto vero dolore. Cupiditate neque nulla blanditiis et.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nam enim aliquam rem, maiores tempore doloremque fugiat magnam. At placeat corporis ex ab. Dolor, non? Qui reiciendis consectetur repudiandae, similique ratione eius iusto vero dolore. Cupiditate neque nulla blanditiis et.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nam enim aliquam rem, maiores tempore doloremque fugiat magnam. At placeat corporis ex ab. Dolor, non? Qui reiciendis consectetur repudiandae, similique ratione eius iusto vero dolore. Cupiditate neque nulla blanditiis et.</p>
        </div>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
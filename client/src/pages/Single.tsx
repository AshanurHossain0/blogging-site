import React, { useEffect, useState } from 'react';
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from "axios";
import { Post } from "../Models"
import moment from "moment";
import { UserState } from '../context/authContext';

const Single = () => {

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = UserState();

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_PORT}/posts/${postId}`)
        setPost(data);
        // console.log(posts);

      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [postId])

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post?.userImg && <img src={post.userImg} alt="User" />}
          <div className="info">
            <span>{post?.username}</span>
            <p>{moment(post?.date).fromNow()}</p>
          </div>
          { (currentUser?.username===post?.username) &&
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          }
        </div>
        <h1>{post?.title}</h1>
        {post?.descrip}
      </div>
      <Menu />
    </div>
  )
}

export default Single
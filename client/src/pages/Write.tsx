import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('')

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editor-container">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <label className='file' htmlFor="file">Upload Image</label>
          <input style={{ display: "none" }} type="file" id='file' />
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <label htmlFor="art">Art</label>
            <input type="radio" name="cat" value='art' id="art" />
          </div>
          <div className="cat">
            <label htmlFor="science">Science</label>
            <input type="radio" name="cat" value='science' id="science" />
          </div>
          <div className="cat">
            <label htmlFor="technology">Technology</label>
            <input type="radio" name="cat" value='technology' id="technology" />
          </div>
          <div className="cat">
            <label htmlFor="cinema">Cinema</label>
            <input type="radio" name="cat" value='cinema' id="cinema" />
          </div>
          <div className="cat">
            <label htmlFor="design">Design</label>
            <input type="radio" name="cat" value='design' id="design" />
          </div>
          <div className="cat">
            <label htmlFor="food">Food</label>
            <input type="radio" name="cat" value='food' id="food" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
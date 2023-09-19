import express from "express";
import db from "../config/db";
import jwt from "jsonwebtoken";



export const getPosts=(req:express.Request,res:express.Response)=>{
    const q=req.query.cat?"SELECT * FROM posts WHERE cat=?":"SELECT * FROM posts";

    db.query(q,[req.query.cat],(err:any,data:any)=>{
        if(err) return res.status(500).json(err.message);

        return res.status(200).json(data);
    })
}
export const getPost=(req:express.Request,res:express.Response)=>{
    const q="SELECT `username`,`title`,`desc`,p.img,u.img AS userImg,`cat`,`date` FROM users u JOIN posts p ON u.id=p.id WHERE p.id=?";

    db.query(q,[req.params.id],(err:any,data:any)=>{
        if(err) return res.status(500).json(err.message);

        return res.status(200).json(data[0]);
    })
}
export const addPost=(req:express.Request,res:express.Response)=>{

}
export const deletePost=(req:express.Request,res:express.Response)=>{

}
export const updatePost=(req:express.Request,res:express.Response)=>{

}
import express from "express";
import db from "../config/db";
import jwt from "jsonwebtoken";


//GET POSTS
export const getPosts=(req:express.Request,res:express.Response)=>{
    const q=req.query.cat?"SELECT * FROM posts WHERE cat=?":"SELECT * FROM posts";

    db.query(q,[req.query.cat],(err:any,data:any)=>{
        if(err) return res.status(500).json(err.message);

        return res.status(200).json(data);
    })
}

//GET POST BY ID
export const getPost=(req:express.Request,res:express.Response)=>{
    const q="SELECT `username`,`title`,`desc`,p.img,u.img AS userImg,`cat`,`date`,p.id FROM users u JOIN posts p ON u.id=p.id WHERE p.id=?";

    db.query(q,[req.params.id],(err:any,data:any)=>{
        if(err) return res.status(500).json(err.message);

        return res.status(200).json(data[0]);
    })
}

//ADD POST
export const addPost=(req:express.Request,res:express.Response)=>{
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated");

    jwt.verify(token,process.env.JWT_SECRET,(err:any,userInfo:any)=>{
        if(err) return res.status(403).json("Invalid token");
        const q="INSERT INTO posts(`title`,`desc`,`img`,`cat`,`date`,`uid`) VALUES(?)";
        const values:(string | number)[]=[req.body.title,req.body.desc,req.body.img,req.body.cat,req.body.date,userInfo.id]

        db.query(q,[values],(err:any,data:any)=>{
            if(err) return res.status(500).send(err.message);

            return res.status(201).json("Post has been created")
        })
    })
}

//DELETE POST
export const deletePost=(req:express.Request,res:express.Response)=>{
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated");

    jwt.verify(token,process.env.JWT_SECRET,(err:any,userInfo:any)=>{
        if(err) return res.status(403).json("Invalid token");
        const postId=req.params.id;
        const q="DELETE FROM posts WHERE `id`=? AND `uid`=?";
        db.query(q,[postId,userInfo.id],(err:any,data:any)=>{
            if(err) return res.status(500).send(err.message);

            return res.status(200).json("Post has been deleted")
        })
    })
}

//UPDATE POST
export const updatePost=(req:express.Request,res:express.Response)=>{
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated");

    jwt.verify(token,process.env.JWT_SECRET,(err:any,userInfo:any)=>{
        if(err) return res.status(403).json("Invalid token");
        const q="UPDATE posts SET  `title`=?,`desc`=?,`img`=?,`cat`=? WHERE id=? AND `uid`=?";
        const values:(string|number)[]=[req.body.title,req.body.desc,req.body.img,req.body.cat,req.params.id,userInfo.id]

        db.query(q,values,(err:any,data:any)=>{
            if(err) return res.status(500).send(err.message);

            return res.status(200).json("Post has been updated")
        })
    })
}
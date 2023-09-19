import Express from 'express';
import db from "../config/db";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


export const register= async (req:Express.Request,res:Express.Response)=>{
    //Check existing user
    const q="SELECT * FROM users WHERE email= ? OR username=?"
    
    db.query(q,[req.body.email,req.body.username],(err:any,data:any)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("Username or email already exists!");

        //Hash password
        const salt=bcrypt.genSaltSync(10);
        const hashPass=bcrypt.hashSync(req.body.password,salt);

        const q="INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values=[req.body.username,req.body.email,hashPass];
        db.query(q,[values],(err:any,data:any)=>{
            if(err) return res.json(err);
            return res.status(201).send("User has been created");
        })
    })
}

export const login= async (req:Express.Request,res:Express.Response)=>{
    //Check user existance
    const q="SELECT * FROM users WHERE email=? OR username=?";
    db.query(q,[req.body.username,req.body.username],(err:any,data:any)=>{
        if(err) return res.status(500).json(err);
        
        if(!data.length) return res.status(404).json("User not found");

        //Check password is correct or not
        const isCorrectPass=bcrypt.compareSync(req.body.password,data[0].password);
        if(!isCorrectPass) return res.status(400).json("Wrong username/email or password");

        //Create token
        const token=jwt.sign({id:data[0].id},process.env.JWT_SECRET);
        const {password,...others}=data[0];

        
        res.cookie("access_token",token,{httpOnly:true}).status(200).json(others);
    })
}

export const logout= async (req:Express.Request,res:Express.Response)=>{
    return res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out");
}
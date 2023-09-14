import Express from 'express';
import db from "../config/db";
import bcrypt from "bcryptjs";


export const register= async (req:Express.Request,res:Express.Response)=>{
    //Check existing user
    const q="SELECT * FROM users WHERE email= ? OR username=?"
    
    db.query(q,[req.body.email,req.body.username],(err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("username or email already exists!");

        //Hash password
        const salt=bcrypt.genSaltSync(10);
        const hashPass=bcrypt.hashSync(req.body.password,salt);

        const q="INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values=[req.body.username,req.body.email,hashPass];
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(201).send("user has been created");
        })
    })
}

export const login= async (req:Express.Request,res:Express.Response)=>{

}
export const logout= async (req:Express.Request,res:Express.Response)=>{

}
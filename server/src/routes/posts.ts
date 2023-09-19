import express from "express";

const router=express.Router();
import {addPost,getPost,getPosts,deletePost,updatePost} from "../controllers/posts"

router.get("/",getPosts)
router.get("/:id",getPost)
router.post("/",addPost)
router.delete("/:id",deletePost)
router.put("/:id",updatePost)

export default router;
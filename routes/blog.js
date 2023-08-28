const express=require('express');
const router=express.Router();

//import controllers


const {createComment}= require("../controllers/comments");
const {createPost,getAllPosts}= require("../controllers/posts");
const {likepost,unlikepost}= require("../controllers/likes");

//mapping create

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikepost);

//exporting controllers
module.exports=router;
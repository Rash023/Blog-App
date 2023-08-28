const Post=require("../models/postsmodel");
const Like=require("../models/likemodel");


exports.likepost= async (req,res)=>{
    try{
        const {post,user}=req.body;
        const like = new Like({
            post,user,
        });
        const savedLike= await like.save();

        const udpatedPost= await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                                .populate("likes")
                                .exec();

        res.json({
            post:udpatedPost,
        });
     }
    catch(err){

        return res.status(500).json({
            error: "Error While Creating comment" ,
        });

    }
};


exports.unlikepost= async(req,res)=>{
    try{
        const {post,like}= req.body;
        //finding id and deleting 
        const deletedLike= await Like.findOneAndDelete({post:post, _id:like});
        const udpatedPost= await Post.findByIdAndUpdate(post,{$pull:{like:deletedLike._id}},{new:true});

        res.json({
            post:udpatedPost,
        });
    }
    catch(err){
        return res.status(500).json({
            error: "Error While liking " 
        });
    }
}
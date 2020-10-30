const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middlewares/isAuth')
const Post =  require('../models/Post')

router.get('/test', (req, res, next) => {
    res.json("test")
})


router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name lastName")
    .populate("comments.postedBy","_id name lastName")
    .sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})

router.get('/getsubpost',requireLogin,(req,res)=>{

    // if postedBy in following
    Post.find({postedBy:{$in:req.user.following}})
    .populate("postedBy","_id name")
    .populate("comments.postedBy","_id name")
    .sort('-createdAt')
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,title2,body,pic} = req.body 

    if(!title || !title2 || !body){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    const post = new Post({
        title,
        title2,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id })
    .populate("postedBy","_id name lastName")
    .populate("comments.postedBy","_id name")
    .sort('-createdAt')
    
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})


router.put('/comment',requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

//update
router.post('/update' , requireLogin,(req,res)=>{
    
    const updatePost = {
        title,
        title2,
        body,
        postId
    }=req.body

    Post.findByIdAndUpdate(postId,{
        $set:{"title":title,
        "title2":title2,
            "body":body
            }

    },{
        new:true,
        useFindAndModify: false
    })
    
    .then(result=>{
        res.json({result})
    })
    .catch(err=>{
        console.log(err)
    })


})



//************************************* */

router.delete('/deletepost/:postId',requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})


// router.get('/search', async (req, res) => {
//     const { name } = req.query;
//     if(!name) {
//      global.logger.error('name can\'t find')
//      res.json({
//       errno: 0,
//       data: []
//       // msg: 'name can\'t find'
//      });
//      return;
//     }
   
//     const result = await User.find({name: new RegExp(name)}, '_id name src').exec();
   
//     res.json({
//      errno: 0,
//      data: result
//     })
//    })

module.exports = router
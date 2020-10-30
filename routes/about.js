const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middlewares/isAuth')
const User = require('../models/User')

router.get('/test', (req, res, next) => {
    res.json("test")
})

// router.post('/createabout',requireLogin,(req,res)=>{
//     const {age,mobile,address,mail} = req.body 

//     if(!age || !mobile || !address || !mail){
//       return  res.status(422).json({error:"Plase add all the fields"})
//     }
//     const about = new About({
//         age,
//         mobile,
//         address,
//         mail,
//         postedBy:req.user
//     })
//     about.save().then(result=>{
//         res.json({post:result})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

//update

router.post('/updateAbout' , requireLogin,(req,res)=>{
    
    const updateAbout = {
        age,
        mobile,
        address,
        name,
        lastName,
        postedBy
    }=req.body

    User.findByIdAndUpdate(postedBy,{
        $set:{ "age":age,
               "mobile":mobile,
               "address":address,
               "name":name,
               "lastName":lastName
              
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
//********************************************** */
router.post('/updatabout' , requireLogin,(req,res)=>{


    
    const updateabout = {
        name,
        lasName,
        age,
        addresse ,
        mobile,
        postedBy
    }=req.body

    User.findByIdAndUpdate(postedBy,{
        $set:{ "name":name,
               "lasName":lasName,
               "age":age,
               "addresse":addresse,
               
              
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




router.post('/updatename' , requireLogin,(req,res)=>{

 
    const updateAbout = {
        name,
        lastName,
       
        postedBy
    }=req.body

    User.findByIdAndUpdate(postedBy,{
        $set:{ "name":name,
               "lastName":lastName,
               
              
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

router.post('/updateage' , requireLogin,(req,res)=>{


    
    
    const updateAbout = {
        age,
       
        postedBy
    }=req.body

    User.findByIdAndUpdate(postedBy,{
        $set:{ "age":age
               
              
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

router.post('/updatemobile' , requireLogin,(req,res)=>{

    const updateAbout = {
        mobile,
       
        postedBy
    }=req.body

    User.findByIdAndUpdate(postedBy,{
        $set:{ "mobile":mobile
               
              
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

router.post('/updateaddress' , requireLogin,(req,res)=>{


    const updateAbout = {
        address,
       
        postedBy
    }=req.body

    User.findByIdAndUpdate(postedBy,{
        $set:{ "address":address
               
              
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



router.post('/updatepassword' , requireLogin,(req,res)=>{


    const updateAbout = {
        password,
       
        postedBy
    }=req.body

    User.findByIdAndUpdate(postedBy,{
        $set:{ "password":password
               
              
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


// ***********************************************************************

router.get('/aboutuser/:id' ,(req,res)=>{
    User.findById({_id:req.params.id})
  

    .then(mypost=>{
        if(!mypost){return res.status(404).end();}
       return res.status(200).json(mypost);
    }) 
    .catch(err=>{
        console.log(err)
    })
})



module.exports = router
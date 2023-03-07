const Post = require('../models/post')

exports.addPost = (req, res )=>{
   
   const postObject = JSON.parse(req.body.post)
   delete postObject._author
   const post = ""

   if (req.files) {

      let photoArray = []
      req.files.map(() => {
         photoArray.push(`${req.protocole}://${req.host}/postImage/${req.file.filename}`)
      })

      post = new Post({
         ...postObject,
         author:req.auth.userid,
         postUrl: photoArray
      })
   
   } else{
      post = new Post({
            ...postObject,
            author:req.auth.userid,
         })
      }

      post.save()
      .then(post => res.status(201).json({data: post}))
      .catch(err => res.status(500).json({message:err}))
}

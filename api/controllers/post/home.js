module.exports = async function(req, res) {

    const userId = req.session.userId
    const allPosts = await Post.find({user: userId})
    .populate('user')
    .sort('createdAt DESC')
    
    // return res.send(allPosts)

    res.view('pages/post/home', {
        allPosts
    })        
}
module.exports = async function(req, res) {

    const postBody = req.body.postBody
    console.log("Create post object with text: " + postBody)

    const userId = req.session.userId
    await Post.create({text: postBody, user: userId}).fetch()
    res.redirect('/post')
}
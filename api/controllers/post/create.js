module.exports = async function(req, res) {
    const postBody = req.body.postBody
    console.log("Create post object with text: " + postBody)

    // Waterline creation syntax
    // You need to put a await in front of promise objects : read up on why
    const record = await Post.create({text: postBody}).fetch()
    res.send(record)
}
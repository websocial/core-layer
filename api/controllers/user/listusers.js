module.exports = async function(req, res) {
    console.log("Listing out all users now...")

    //fetch all users using Waterline
    //This executes a promise object
    //You must use await
    const users = await User.find({})
    res.send(users)
}
module.exports = async function(req, res) {
    console.log("Listing out all users now...")

    //await is used to ensure User.find is complete before executing code under it
    const users = await User.find({})

    // Brute force solution
    // const objs = []
    // users.array.forEach(user => {
    //     objs.push({id: user.id,
    //          fullName: user.fullName,
    //           email: user.email})
    // });

    const lessDetailedUsers = []
    users.forEach(user => {
        lessDetailedUsers.push({id: user.id, fullName: user.fullName})
    });

   
    res.send(lessDetailedUsers)
}
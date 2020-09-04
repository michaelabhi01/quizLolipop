const editproile = require("../model/editprofile");


exports.edit_profile = (req, res) => {

    editproile.insert_edit_profile(req, res)
        .then(response => {
            //code to send sucess through message will be added here.
            res.send(JSON.stringify({ "Update": response }));
        })
}
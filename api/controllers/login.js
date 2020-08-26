const userentry = require("../model/userentry");


exports.login_post = (req, res) => {

    var otp = Math.floor(100000 + Math.random() * 900000);
    req.body.otp = otp;

    userentry.insert_update_user(req, res)
        .then(response => {
            //code to send OTP through message will be added here.
            res.send(JSON.stringify({ "OTP": response }));
        })
}
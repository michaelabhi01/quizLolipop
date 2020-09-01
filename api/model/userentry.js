const mysql = require("mysql");
const settings = require("../../settings");


exports.insert_update_user = (req, res) => {

    // var values = [req.body.name, req.body.mob_no, req.body.email, req.body.invite_code, req.body.otp];

    return new Promise((resolve, reject) => {

        const conn = mysql.createConnection(settings.dbConfig);
        conn.connect(function(err) {
            if (err) throw err;
            var query = "SELECT * FROM users WHERE mob_no = " + req.body.mob_no;
            conn.query(query, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    if (result.length == 0) {
                        var query = "INSERT INTO users(user_name,mob_no,email,invite_code,otp) VALUES (" + "'" + req.body.name + "'" + "," + req.body.mob_no + "," + "'" + req.body.email + "'" + "," + "'" + req.body.invite_code + "'" + "," + req.body.otp + ")";
                    } else {
                        var query = "UPDATE users SET user_name = ' " + req.body.name + " ' , email = ' " + req.body.email + " ', otp =" + req.body.otp + " WHERE mob_no = " + req.body.mob_no;
                    }
                    conn.query(query, function(err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(req.body.otp);
                        }
                        conn.destroy();
                    })
                }
            })
        })
    })
}
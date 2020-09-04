const mysql = require("mysql");
const settings = require("../../settings");


exports.insert_edit_profile = (req, res) => {
    return new Promise((resolve, reject) => {
        //var values = [req.body.name, req.body.email, req.body.city, req.body.pan_no];
        const conn = mysql.createConnection(settings.dbConfig);
        conn.connect(function(err) {
            if (err) throw err;
                    var query = "UPDATE users SET user_name = '" + req.body.name + "' , email = '" + req.body.email + "', city ='" + req.body.city + "', pan_no ='" + req.body.pan_no + "' WHERE mob_no = '" + req.body.mob_no + "' ";
                    conn.query(query, function(err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve('Sucess');
                        }
                        conn.destroy();
                    })
        })
    })
}
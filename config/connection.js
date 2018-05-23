function login(email, password, callback) {
    var connection = mysql({
      host: 'localhost',
      user: 'me',
      password: 'secret',
      database: 'userAuth_db'
    });
  
    connection.connect();
  
    var query = "SELECT id, email, password " +
      "FROM users WHERE email = ?";
  
    connection.query(query, [email], function (err, results) {
      if (err) return callback(err);
      if (results.length === 0) return callback(new WrongemailOrPasswordError(email));
      var user = results[0];
  
      bcrypt.compare(password, user.password, function (err, isValid) {
        if (err) {
          callback(err);
        } else if (!isValid) {
          callback(new WrongemailOrPasswordError(email));
        } else {
          callback(null, {
            id: user.id.toString(),
            nickname: user.nickname,
            email: user.email
          });
        }
      });
  
    });
  }
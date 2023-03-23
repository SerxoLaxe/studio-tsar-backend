function create(req, res, next) {
  try {
    //registerUser()
    res.statusCode = 200;
    res.send({
      status: "Ok",
      data: "New user account created successfully.",
    });
  } catch (error) {
    next(error);
  }
}

async function registerUser() {
  const connectionMysql = require("../../../../DB/connectionMysql");
  const connection = await connectionMysql();
  await connection.query(
    `INSERT INTO users(first_name,second_name, privileges,email,password, validation_code)
    VALUES(?,?,?,?,SHA2(?, 500), ?)`,
    ["Sergio", "Lage Loureiro", "admin", 'lalala@lalala.com', 'lalalala', 'p123oiqhuif121212hid']
  );
}

module.exports = create;

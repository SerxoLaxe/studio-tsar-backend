const { APIerror } = require("#api").services.customErrors
const usersModel = require("#models").users;

async function verifyUser(id, verificationCode) {

  const user = await usersModel.findByPk(id);

  if (user.verification_code === verificationCode) {
    const result = await usersModel.update(
      { verification_code: null },
      { where: { id: id } }
    );
  } else {
    const error = new APIerror("Wrong verification code");
    throw error;
  }
}

module.exports = verifyUser;

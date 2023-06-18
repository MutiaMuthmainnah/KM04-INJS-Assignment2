const jwt = require("jsonwebtoken")
const SECRET_KEY = "rahasia"

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY)
}

const verifyToken = (access_token) => {
  return jwt.verify(access_token, SECRET_KEY)
}

module.exports = {
  generateToken,
  verifyToken
}
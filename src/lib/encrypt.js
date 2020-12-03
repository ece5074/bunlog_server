const bcrypt = require('bcrypt')
const saltRounds = 16

/**
 * 비밀번호를 암호화하여 salt값과 함께 반환
 */
module.exports.genEncryption = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)

    return { salt, hashedPassword }
}

/**
 * 평문과 암호화된 비밀번호를 비교하여 올바른 패스워드인지 확인
 */
module.exports.verifiEncrypt = (password, saltedPassword) => 
                bcrypt.compareSync(password, saltedPassword)
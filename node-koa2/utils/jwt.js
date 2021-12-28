const jwt = require('jsonwebtoken');

class JWT {

    static obtain(body, time, code) {
        const { username, password } = body;
        const token = jwt.sign({
            username,
            password,
            iat: Date.now(),
            exp: Date.now() + time,
        }, code);
        return token;
    }

    static inspection(authorization, code) {
        /**
         * iat 发布时间
         * exp 到期时间
         */
        const { iat, exp } = jwt.verify(authorization, code);
        return {
            iat,
            exp
        }
    }
}
module.exports = {
    JWT
}
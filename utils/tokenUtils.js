import jwt from 'jsonwebtoken'

function generateToken(payload, expiresIN = '3h') {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIN })
}

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.log("Error: " + error.message)
        throw new Error("Invalid token")
    }
}

export { generateToken, verifyToken }
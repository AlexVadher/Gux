import {SignJWT, jwtVerify} from 'jose';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = async (payload) => {
    const jwtConstructor = new SignJWT(payload);

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return jwt;
};

export const validateToken = async (token) => {
    try {
        const {payload} = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_PRIVATE_KEY),
        );
        return payload;
    } catch (error) {
        throw new Error('Token inválido o expirado');
    }
};

export default {generateToken, validateToken};

import {SignJWT} from 'jose';
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
// funcion para verificar token
// export const verifyToken = async (token) => {
//     const jwt = new SignJWT();
//     const decoder = new TextDecoder();
//     const encoder = new TextEncoder();
//     const payload = await jwt.verify(
//         decoder.decode(token),
//         encoder.encode(process.env.JWT_PRIVATE_KEY),
//     );

//     return payload;
// };

export default generateToken;

import {SignJWT} from 'jose';

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

export default generateToken;

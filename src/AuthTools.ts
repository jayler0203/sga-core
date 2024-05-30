
import crypto from 'node:crypto';
import jwt, { JwtPayload } from "jsonwebtoken";
import {Scheme} from "./constants/Scheme"
/**
 * Módulo que proporciona herramientas de autenticación.
 * @module AuthTools
 */
const AuthTools = {
    /**
     * Codifica un texto en MD5.
     * @memberof AuthTools
     * @param {string} text - El texto a codificar.
     * @returns {string} La representación hexadecimal del texto codificado en MD5.
     */
    MD5Encoder: function(text:string): string {
        return crypto.createHash('md5').update(text).digest('hex');
    },
    /**
     * Obtiene las credenciales de autenticación básica.
     * @memberof AuthTools
     * @param {string} auth - La cadena de autenticación básica.
     * @returns {Array<string>} Las credenciales divididas en un array.
     */

    getCredentialsBasic: function(auth: string): Array<string> {
        const base64Credentials = auth.substring(Scheme.BASIC.length).trim();
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
        return credentials.split(Scheme.SEPARATOR, Scheme.LIMIT_BASIC);
    },
    /**
     * Verifica si un texto coincide con una cadena MD5 dada.
     * @memberof AuthTools
     * @param {string} text - El texto original.
     * @param {string} encryptedText - El texto MD5 encriptado para comparar.
     * @returns {boolean} true si el texto coincide con la cadena MD5; de lo contrario, false.
     */
    MD5Valid: function(text:string, encryptedText:string): boolean {
        return this.MD5Encoder(text) === encryptedText;
    },
    /**
     * Genera una contraseña aleatoria.
     * @memberof AuthTools
     * @returns {string} La contraseña generada.
     */

    GeneratePassword: function(): string {
        const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = '';
        for (let i = 0; i < Scheme.PASSWORD_SIZE; i++) {
            const randomIndex = Math.floor(Math.random() * values.length);
            password += values.charAt(randomIndex);
        }
        return password;
    },
    /**
     * Genera un client id aleatorio.
     * @memberof AuthTools
     * @returns {string} El client id generada.
     */
    GenerarClientId: function(): string {
        return this.MD5Encoder((Math.random() * 1000000 + 1) + '' + (Math.random() * 1000000 + 1));
    },
        /**
     * Genera un Client secret id aleatorio.
     * @memberof AuthTools
     * @returns {string} La secret id generada.
     */

    GenerarClientSecret: function(): string {
        return this.MD5Encoder((Math.random() * 1000000 + 1) + '' + (Math.random() * 1000000 + 1));
    },
    /**
    * Convierte una cadena en formato Base64 a una cadena de texto.
    * @memberof AuthTools
    * @param {string} text - La cadena en formato Base64 a decodificar.
    * @returns {string} La cadena decodificada.
    */
    Base64ToString: function(text: string): string {
        return Buffer.from(text, 'base64').toString('utf-8');
    },
    /**
    * Convierte una cadena de texto a formato Base64.
    * @memberof AuthTools
    * @param {string} text - La cadena de texto a codificar.
    * @returns {string} La cadena codificada en formato Base64.
    */
    StringToBase64: function(text: string): string {
        return Buffer.from(text).toString('base64');
    },
    /**
     * Decodifica un token JWT.
     * @memberof AuthTools
     * @param {string} token - El token JWT a decodificar.
     * @param {string} secret_key - La clave secreta para verificar la firma.
     * @param {string} clientId - El ID del cliente.
     * @returns {string|JwtPayload|null} El payload decodificado si la verificación es exitosa; de lo contrario, null.
     */

    decodeJWT: function(token: string, secret_key: string, clientId: string): string|JwtPayload | null {
        try {
            const decoded = jwt.verify(token, this.getSigningKey(secret_key, clientId))||null;
            return decoded;
        } catch (error:any) {
            console.error("Error:", error.message);
            return null;
        }
    },
        /**
     * Crea un token JWT.
     * @memberof AuthTools
     * @param {string} clientId - El ID del cliente.
     * @param {string} issuer - El emisor del token.
     * @param {string} secret - La clave secreta para firmar el token.
     * @param {string} subject - El sujeto del token.
     * @param {string} timeExp - El tiempo de expiración del token.
     * @returns {string} El token JWT generado.
     */

    createJWT: function(clientId: string, issuer: string, secret: string,timeExp: string|number,rol:string) : string {
        const payload ={
            sub:clientId,
            rol
        }
        const secretKey = this.getSigningKey(secret,clientId)
        const token = jwt.sign(payload, secretKey,{expiresIn:timeExp,issuer,jwtid:crypto.randomUUID(),});
        return token;
    },
    
    /**
     * Obtiene la clave de firma para JWT.
     * @memberof AuthTools
     * @param {string} secret - La clave secreta.
     * @param {string} clientID - El ID del cliente.
     * @returns {Buffer} La clave de firma.
     */
 
    getSigningKey: function(secret: string, clientID: string): Buffer {
        const concatString = secret + clientID;
        const base64String = this.StringToBase64(concatString)
        const keyBytes = Buffer.from(base64String, 'base64');
        return keyBytes;
    },
    /**
     * Obtiene el token Bearer de una cadena de token completa.
     * @memberof AuthTools
     * @param {string} token - La cadena de token completa.
     * @returns {string} El token Bearer.
     */

    ObtenerTokenBearer: function(token: string): string {
        return token.substring(Scheme.TOKEN_POSITION).trim();
    }
};

export  {AuthTools};

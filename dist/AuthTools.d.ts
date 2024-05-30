/// <reference types="node" />
import { JwtPayload } from "jsonwebtoken";
/**
 * Módulo que proporciona herramientas de autenticación.
 * @module AuthTools
 */
declare const AuthTools: {
    /**
     * Codifica un texto en MD5.
     * @memberof AuthTools
     * @param {string} text - El texto a codificar.
     * @returns {string} La representación hexadecimal del texto codificado en MD5.
     */
    MD5Encoder: (text: string) => string;
    /**
     * Obtiene las credenciales de autenticación básica.
     * @memberof AuthTools
     * @param {string} auth - La cadena de autenticación básica.
     * @returns {Array<string>} Las credenciales divididas en un array.
     */
    getCredentialsBasic: (auth: string) => Array<string>;
    /**
     * Verifica si un texto coincide con una cadena MD5 dada.
     * @memberof AuthTools
     * @param {string} text - El texto original.
     * @param {string} encryptedText - El texto MD5 encriptado para comparar.
     * @returns {boolean} true si el texto coincide con la cadena MD5; de lo contrario, false.
     */
    MD5Valid: (text: string, encryptedText: string) => boolean;
    /**
     * Genera una contraseña aleatoria.
     * @memberof AuthTools
     * @returns {string} La contraseña generada.
     */
    GeneratePassword: () => string;
    /**
     * Genera un client id aleatorio.
     * @memberof AuthTools
     * @returns {string} El client id generada.
     */
    GenerarClientId: () => string;
    /**
 * Genera un Client secret id aleatorio.
 * @memberof AuthTools
 * @returns {string} La secret id generada.
 */
    GenerarClientSecret: () => string;
    /**
    * Convierte una cadena en formato Base64 a una cadena de texto.
    * @memberof AuthTools
    * @param {string} text - La cadena en formato Base64 a decodificar.
    * @returns {string} La cadena decodificada.
    */
    Base64ToString: (text: string) => string;
    /**
    * Convierte una cadena de texto a formato Base64.
    * @memberof AuthTools
    * @param {string} text - La cadena de texto a codificar.
    * @returns {string} La cadena codificada en formato Base64.
    */
    StringToBase64: (text: string) => string;
    /**
     * Decodifica un token JWT.
     * @memberof AuthTools
     * @param {string} token - El token JWT a decodificar.
     * @param {string} secret_key - La clave secreta para verificar la firma.
     * @param {string} clientId - El ID del cliente.
     * @returns {string|JwtPayload|null} El payload decodificado si la verificación es exitosa; de lo contrario, null.
     */
    decodeJWT: (token: string, secret_key: string, clientId: string) => string | JwtPayload | null;
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
    createJWT: (clientId: string, issuer: string, secret: string, timeExp: string | number, rol: string) => string;
    /**
     * Obtiene la clave de firma para JWT.
     * @memberof AuthTools
     * @param {string} secret - La clave secreta.
     * @param {string} clientID - El ID del cliente.
     * @returns {Buffer} La clave de firma.
     */
    getSigningKey: (secret: string, clientID: string) => Buffer;
    /**
     * Obtiene el token Bearer de una cadena de token completa.
     * @memberof AuthTools
     * @param {string} token - La cadena de token completa.
     * @returns {string} El token Bearer.
     */
    ObtenerTokenBearer: (token: string) => string;
};
export { AuthTools };

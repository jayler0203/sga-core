import { Response } from "express";
/**
 * Maneja errores HTTP enviando una respuesta con un mensaje de error y un código de estado específico.
 * @param {Response} res - El objeto de respuesta HTTP.
 * @param {string} [message="Ocurrió un error"] - El mensaje de error a enviar en la respuesta.
 * @param {number} [code=403] - El código de estado HTTP a enviar en la respuesta.
 */
declare const handleHTTPError: (res: Response, message?: string, code?: number) => void;
export { handleHTTPError };

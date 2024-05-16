// responseMessages.js

// *** 200 *****//
const CODE_200 = "200";
const ERROR_200 = "La solicitud ha tenido éxito";

// *** 404 *****//
const CODE_404 = "404";
const ERROR_404 = "El servidor no pudo encontrar el contenido solicitado";

// *** 400 *****//
const CODE_400 = "400";
const ERROR_400 = "Error de esquema en el mensaje XML";

// *** 460 *****//
const CODE_460 = "460";
const ERROR_460 = "El campo ${fieldName} es obligatorio";

// *** 461 *****//
const CODE_461 = "461";

// *** 462 *****//
const CODE_462 = "462";
const ERROR_462 = "El campo ${fieldName} no coincide con la longitud aceptada";

// *** 463 *****//
const CODE_463 = "463";
const ERROR_463 = "El campo ${fieldName} no coincide con los posibles valores aceptados";

// *** 464 *****//
const CODE_464 = "464";
const ERROR_464 = "El recurso ya existe, favor ingresar uno nuevo.";

// *** 465 *****//
const CODE_465 = "465";
const ERROR_465 = "El campo ${fieldName} no coincide con el formato de dato aceptado";

// *** 466 *****//
const CODE_466 = "466";
const ERROR_466 = "La clave ${key} no existe en la base de datos";

// *** 467 *****//
const CODE_467 = "467";
const ERROR_467 = "El dato ${data} está siendo ocupado en la tabla:";

// *** 468 *****//
const CODE_468 = "468";
const ERROR_468 = "La cantidad de intentos del Token fue superada, el usuario queda inhabilitado.";

// *** 469 *****//
const CODE_469 = "469";
const ERROR_469 = "Error al tratar de desencriptar el usuario.";

// *** 470 *****//
const CODE_470 = "470";
const ERROR_470 = "El token guardado se ha sido consumido previamente.";

// *** 471 *****//
const CODE_471 = "471";
const ERROR_471 = "Formato de contraseña incorrecto.";

// *** 472 *****//
const CODE_472 = "472";
const ERROR_472 = "El perfil no se puede eliminar por que tiene usuarios activos asociados";

// *** 473 *****//
const CODE_473 = "473";
const ERROR_473 = "La contraseña no puede ser la misma que la anterior.";

// *** 474 *****//
const CODE_474 = "474";
const ERROR_474 = "Error en el servidor, contacte con un administrador.";

// *** 475 *****//
const CODE_475 = "475";
const ERROR_475 = "Contraseña es igual a la anterior.";

// *** 476 *****//
const CODE_476 = "476";
const ERROR_476 = "Contraseña invalida.";

// *** 401 *****//
const CODE_401 = "401";
const ERROR_401 = "401 Unauthorized.";

// Exporting the constants
module.exports = {
  CODE_200,
  ERROR_200,
  CODE_404,
  ERROR_404,
  CODE_400,
  ERROR_400,
  CODE_460,
  ERROR_460,
  CODE_461,
  CODE_462,
  ERROR_462,
  CODE_463,
  ERROR_463,
  CODE_464,
  ERROR_464,
  CODE_465,
  ERROR_465,
  CODE_466,
  ERROR_466,
  CODE_467,
  ERROR_467,
  CODE_468,
  ERROR_468,
  CODE_469,
  ERROR_469,
  CODE_470,
  ERROR_470,
  CODE_471,
  ERROR_471,
  CODE_472,
  ERROR_472,
  CODE_473,
  ERROR_473,
  CODE_474,
  ERROR_474,
  CODE_475,
  ERROR_475,
  CODE_476,
  ERROR_476,
  CODE_401,
  ERROR_401
};

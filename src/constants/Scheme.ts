interface SchemeType {
    ALGORITHM: string;
    SYSTEM_NAME: string;
    DATE_FORMAT: string;
    DATE_TIME_FORMAT: string;
    TIME_FORMAT: string;
    SPACE: string;
    TOKEN_POSITION: number;
    BEARER: string;
    BASIC: string;
    HEADER_AUTHORIZATION: string;
    HEADER_USER: string;
    HEADER_PASSWORD: string;
    HEADER_TYPE_CONTENT: string;
    HEADER_CLIENT_ID: string;
    HEADER_CLIENT_SECRET: string;
    HEADER_VALUE_CONTENT_TYPE: string;
    HEADER_VALUE_CONTENT_TYPE_JSON: string;
    SIMPLE_DATE_FORMAT: string;
    CHARSET_UTF8: string;
    MISSING_FIELD: string;
    PATTERN: string;
    DIGITS: string;
    LENGTH: string;
    DECIMAL_MAX: string;
    MAX: string;
    MIN: string;
    TYPE_MISMATCH: string;
    USER_STATUS: string;
    PERMISSION: string;
    ROLE: string;
    USER: string;
    IMAGE: string;
    ZERO: number;
    ONE: number;
    INACTIVE_USER_STATE_ID: number;
    USER_ROLE_ID: number;
    CODIFICATION_ISO8859: string;
    SEPARATOR: string;
    LIMIT_BASIC: number;
    SECRET_KEY: string;
    PASSWORD_SIZE: number;
}
const Scheme:SchemeType = {
    ALGORITHM: "MD5",
    SYSTEM_NAME: "Tienda",
    DATE_FORMAT: "YYYY-MM-DD",
    DATE_TIME_FORMAT: "YYYY-MM-DD HH:mm:ss",
    TIME_FORMAT: "HH:mm:ss",
    SPACE: " ",
    TOKEN_POSITION: 7,
    BEARER: "Bearer ",
    BASIC: "Basic",
    HEADER_AUTHORIZATION: "Authorization",
    HEADER_USER: "username",
    HEADER_PASSWORD: "password",
    HEADER_TYPE_CONTENT: "Content-Type",
    HEADER_CLIENT_ID: "clientId",
    HEADER_CLIENT_SECRET: "clientSecret",
    HEADER_VALUE_CONTENT_TYPE: "application/json; charset=UTF-8",
    HEADER_VALUE_CONTENT_TYPE_JSON: "application/json",
    SIMPLE_DATE_FORMAT: "YYYY-MM-DD",
    CHARSET_UTF8: "UTF8",
    MISSING_FIELD: "missingField",
    PATTERN: "Pattern",
    DIGITS: "Digits",
    LENGTH: "Length",
    DECIMAL_MAX: "DecimalMax",
    MAX: "Max",
    MIN: "Min",
    TYPE_MISMATCH: "typeMismatch",
    USER_STATUS: "estadoUsuario",
    PERMISSION: "permiso",
    ROLE: "rol",
    USER: "usuario",
    IMAGE: "imagen",
    ZERO: 0,
    ONE: 1,
    INACTIVE_USER_STATE_ID: 2,
    USER_ROLE_ID: 2,
    CODIFICATION_ISO8859: "iso-8859-1",
    SEPARATOR: ":",
    LIMIT_BASIC: 2,
    SECRET_KEY: "oeRaYY7Wo24sDqKSX3IM9ASGmdGPmkTd9jo1QTy4b7P9Ze5_9hKolVX8xNrQDcNRfVEdTZNOuOyqEGhXEbdJI-ZQ19k_o9MI0y3eZN2lp9jow55FfXMiINEdt1XR85VipRLSOkT6kSpzs2x-jbLDiz9iFVzkd81YKxMgPA7VfZeQUm4n-mOmnWMaVX30zGFU4L3oPBctYKkl4dYfqYWqRNfrgPJVi5DGFjywgxx0ASEiJHtV72paI3fDR2XwlSkyhhmY-ICjCRmsJN4fX1pdoL8a18-aQrvyu4j0Os6dVPYIoPvvY0SAZtWYKH",
    PASSWORD_SIZE: 8
};

export {Scheme};

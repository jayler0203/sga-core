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
declare const Scheme: SchemeType;
export { Scheme };

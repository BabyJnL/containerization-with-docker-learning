const HTTP_STATUS_CODE = {
    'Continue': 100,
    'Switching Protocols': 101,
    'OK': 200,
    'Created': 201,
    'Accepted': 202,
    'Non-Authoritative Information': 203,
    'No Content': 204,
    'Reset Content': 205,
    'Partial Content': 206,
    'Multiple Choices': 300,
    'Moved Permanently': 301,
    'Found': 302,
    'See Other': 303,
    'Not Modified': 304,
    'Use Proxy': 305,
    'Temporary Redirect': 307,
    'Bad Request': 400,
    'Unauthorized': 401,
    'Payment Required': 402,
    'Forbidden': 403,
    'Not Found': 404,
    'Method Not Allowed': 405,
    'Not Acceptable': 406,
    'Proxy Authentication Required': 407,
    'Request Timeout': 408,
    'Conflict': 409,
    'Gone': 410,
    'Length Required': 411,
    'Precondition Failed': 412,
    'Payload Too Large': 413,
    'URI Too Long': 414,
    'Unsupported Media Type': 415,
    'Range Not Satisfiable': 416,
    'Expectation Failed': 417,
    "I'm a teapot": 418,  // April Fools' joke in RFC 2324
    'Upgrade Required': 426,
    'Internal Server Error': 500,
    'Not Implemented': 501,
    'Bad Gateway': 502,
    'Service Unavailable': 503,
    'Gateway Timeout': 504,
    'HTTP Version Not Supported': 505
};

function getKeyByValue(object, value) 
{
    return Object.keys(object).find(key => object[key] === value);
}

function apiSuccessResponse(responseObject, message, data, statusCode = HTTP_STATUS_CODE.OK)
{
    return responseObject.status(statusCode).json({ status: getKeyByValue(HTTP_STATUS_CODE, statusCode), message, data });
}

function apiErrorResponse(responseObject, message, statusCode = HTTP_STATUS_CODE['Internal Server Error'])
{
    return responseObject.status(statusCode).json({ status: getKeyByValue(HTTP_STATUS_CODE, statusCode), message });
}

module.exports = { HTTP_STATUS_CODE, apiSuccessResponse, apiErrorResponse };
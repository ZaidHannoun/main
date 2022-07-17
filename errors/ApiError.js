class ApiError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiError(400, message)
    }

    static serverError(message) {
        return new ApiError(500, message)
    }
    static duplicateError(message) {
        return new ApiError(409, message)
    }
    static queryError(message) {
        return new ApiError(400, message)
    }
}

export { ApiError }
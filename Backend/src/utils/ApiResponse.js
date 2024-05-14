class ApiResponse {
    constructor(statusCode, data, meassage = "Success") {
        this.statusCode = statusCode
        this.data = data
        this.meassage = meassage
        this.status = statusCode < 400
    }
}

export { ApiResponse }
const asyncHandler = (func) => {
    return (req, res, next) => {
        Promise
            .resolve(func(req, res, next))
            .catch(error => next(error))
    }
}

export { asyncHandler }

/*
const asyncHandler2 = (func) => async (err, req, res, next) => {
    try {
        await func(err, req, res, next)
    } catch (error) {
        res
            .send(error.code || 500)
            .json({
                status: false,
                message: error.message
            })
    }
}
 */

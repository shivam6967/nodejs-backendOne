export const errorMiddleware = (error , req, res , next) => {

    error.message = error.message || "Internal Server Error"
    
    return res.status(404).json({
        success: false,
        message: error.message,
    })
}
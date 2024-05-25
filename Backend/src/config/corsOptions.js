const whiteList = [
    "http://localhost:5173",
    "http://localhost:5174",
]

const corsOptions = {
    origin: (origin, callback) => {
        // in case when we are in development, localhost is treated as "undefined" so we uses or condition !origin it becomes truthy value 
        // console.log(origin) // you can check origin in console 
        if (whiteList.indexOf(origin) !== -1 || !origin) { // incase of production remove this !origin from if condition
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200
}

export default corsOptions
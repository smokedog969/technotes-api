const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true, // Required for cookies
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = corsOptions
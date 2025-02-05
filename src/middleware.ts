import type { RequestHandler, ErrorRequestHandler } from 'express'
import createHttpError from "http-errors";

const healthCheck: RequestHandler = (req, res, next) => {
    res.status(200).json({message:"OK"});
}

const catchAll: RequestHandler = (req, res, next) => {
    next(createHttpError.NotFound())
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).json({
            message: err.message,
            name: err.name,
            status: err.status,
        })
    } else {
        res.status(500).json({
            status: 500,
            message: 'Oh no - smth went wrong',
            name: 'Internal Server Error',
        })
    }
}

const middleware = {
    healthCheck,
    catchAll,
    errorHandler,
};

export default middleware;
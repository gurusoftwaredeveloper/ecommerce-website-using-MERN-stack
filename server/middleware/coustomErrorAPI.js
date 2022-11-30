class CoustomErrorApi extends Error{
    constructor(statusCode,message){
        super(message)
        this.statusCode = statusCode;
    }
}

const createCostomError = (statusCode,message) =>{
    return new CoustomErrorApi(statusCode,message)
}

const coustomErrorHandler = (err, req, res, next) => {
    console.log(err)
    if (err instanceof CoustomErrorApi) {
        return res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(500).json({ msg: "Something went Wrong Try After Some Time" })
}

module.exports = { createCostomError , coustomErrorHandler}

const {body, validationResult} = require('express-validator')

const registerRules = ()=>[
    body("name","name is required").notEmpty(),
    body("lastName","lastName is required").notEmpty(),
    body("email","email should be email").isEmail(),
    body("password","password most contain 6 car").isLength({
        min:5,
        max:19
    })
]


const loginRules = ()=>[
    body("email","email should be email").isEmail(),
    body("password","password most contain 6 car").isLength({
        min:5,
        max:19
    })
]

const validator = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).send({errors:errors.array()})
        return
    }
    next()
}

module.exports = {validator,registerRules,loginRules}
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

exports.adminToken = (req,res,next) =>{ 
    const token = req.cookies.adminToken;
    if(!token)
    {
        res.render('login',{warning: "Unauthorized User"})
    }
    else
    {
        try 
        {
            const verifyToken = jwt.verify(token,process.env.adminToken);
            req.admin=verifyToken;
            next();
            
        } catch (error) {
            res.render('login',{warning: "Unauthorized User"})
        }
    }
}
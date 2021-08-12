const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
    path: './sys.env'
});

exports.login = async(req,res)=>{
    try
    {
        const {username,password}= req.body;
        if(process.env.username==username)
        {
            if(process.env.password=password)
            {
                jwt.sign({admin:username},process.env.admintoken,(err,res)=>{
                    if (err) {
                        console.log(error)
                    } else {
                        res.cookie('adminToken',token)
                        return res.status(400).render('admin/admin-dashboard',(err)=>{
                            if(err)
                            {
                                console.log(err)
                            }
                        })                    
                    }
                })
            }
            else
            {
                return res.status(401).render('login',{
                    warning: "Incorrect password"
                });
            }
        }
        else
        {
            return res.status(401).render('login',
            {
                warning: "User dosen't exist"
            });
        }
    }
    catch(err)
    {
        comsole.login(err);
    }
}
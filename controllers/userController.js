const { generateToken } = require("../helpers/jwt")
const express = require("express")
const fs = require ("fs")
const data = require('../data/users.json')

class UserController {
    static async login(req, res){
        try{
            const users = {name: req.body.name, password: req.body.password}
            const datausers = fs.readFileSync("./data/users.json")
            const dataKonversi = JSON.parse(data)
            if(user===dataKonversi){
                const token = generateToken(response)
                res.status(201).json({
                    token
                })
            }
        }catch(error){
            res.status(500).json(error)
        }
    }

    static async register(req, res) {
        try {
          const {
            username,
            email,
            password
          } = req.body
    
          const data = await User.create({
            username,
            email,
            password
          })
    
          const response = {
            id: data.id,
            username: data.username,
            email: data.email
          }
    
          res.status(201).json(response)
    
        } catch (error) {
          res.status(error?.code || 500).json(error)
          
        }
      }
      
    static async getAllUsers(req, res){
        try{
            const datausers = fs.readFileSync("./data/users.json")
            res.send(JSON.parse(datausers))

        } catch (error) {
            //dataerorr
          }
    }
}

// class UserController{
//     
// }

module.exports = UserController
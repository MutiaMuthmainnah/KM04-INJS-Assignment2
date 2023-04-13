const express = require("express")
const fs = require ("fs")
const data = require('../data/teachers.json')

class TeacherController {
    static async getAllTeachers(req, res){
        try{
            const datateachers = fs.readFileSync("./data/teachers.json")
            res.send(JSON.parse(datateachers))

        } catch (error) {
            //dataerorr
          }
    }
}

module.exports = TeacherController
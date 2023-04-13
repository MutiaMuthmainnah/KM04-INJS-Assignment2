// 'use strict';
// const {Model, DataTypes} = require('sequelize');
// const {hashPassword} = require('../helpers/bcrypt');
// const { sequelize } = require('.');

// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         static associate(models) {
//             this.hasMany(models.User)
//         }
//     };

//     User.init({
//         username:DataTypes.STRING,
//     }, {
//         Sequelize,
//         modelName: 'User',
//         hooks: {
//             beforeCreate: (user, opt) => {
//                 const hashedPassword = hashPassword(userpassword)
//                 user.password = hashPassword
//             }
//         }
//     });
//     return User;
// };
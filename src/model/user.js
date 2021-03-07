const connection = require('../config/db')

const user = {
    getUser:()=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM user', (err,result)=>{
                if (!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },
    getUserById:(id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM user WHERE user_Id = ?', id, (err,result)=>{
                if(!err){
                    resolve(result)
                }else(
                    reject(err)
                )
            })
            })
    },
    insertUser:(user)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO user SET ?', user,(err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },
    updateUser:(userId, user)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE user SET ? WHERE user_Id = ?', [user, userId],(err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },
    deleteUser:(id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM user WHERE user_Id = ?', id, (err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }
}

module.exports = user
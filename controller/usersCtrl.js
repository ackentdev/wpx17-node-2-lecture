const users = require('../db.json');
const axios = require('axios');

let swapi = [ ]

axios.get('https://swapi.co/api/people/').then(res => {
    swapi = res.data.results
})

let num = 11;

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send(users)
    },
    getAllStarWars: (req, res) => {
        res.status(200).send(swapi)
    },
    getById: (req, res) => {
        console.log(req.query)
        const filtered = users.filter( elem => {
            return elem.id == req.query.id
        })
        res.status(200).send(filtered)
        // ?id=4
    },
    deleteUser: (req, res) => {
        const index = users.findIndex(elem => {
            return elem.id == req.params.id
        })
        users.splice(index, 1)
        // const filtered = users.filter( elem => {
        //     return elem.id !== parseInt(req.params.id)
        // })
        res.status(200).send(users)
    },
    addUser: (req, res) => {
        const {first_name, last_name, email, school} = req.body
        const newUser = {
            id: num,
            first_name,
            last_name,
            email,
            school
        }
        num++
        users.push(newUser)
        res.status(200).send(users)
    },
    editSchool: (req, res) => {
        let index = users.findIndex(elem => {
            return elem.id == req.params.id
        })
        if(index !== -1){
            users[index].school = req.body.newSchool
        }
        res.status(200).send(users[index])
    }
}

var menuList = []

let randomID = require('random-id');


module.exports = {
    
    newMeal: (req, res) => {
        menuList.push(req.body)
        res.status(200).send(menuList)
    },

    getMeal: (req, res) => {
        res.status(200).send(menuList)
    },

    deleteMeal: (req, res) => {
        var { id } = req.params
        menuList.splice(id, 1)
        res.status(200).send(menuList)
    }
}
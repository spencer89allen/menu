
var menuList = []

module.exports = {
    
    newMeal: (req, res) => {
        req.body.id = menuList.length + 1;
        console.log(req.body)
        menuList.push(req.body)
        res.status(200).send(menuList)
    },

    getMeal: (req, res) => {
        res.status(200).send(menuList)
    },

    deleteMeal: (req, res) => {
        var { id } = req.params
        for(let i = 0; i < menuList.length; i ++){
            if(menuList[i].id == id){
                menuList.splice(i, 1);
            }
        }
        res.status(200).send(menuList)
    },

}
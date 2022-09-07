const app = {

    inicio:(req, res)=>{
        res.render("home")
    },

    sobre:(req, res)=>{
        res.render("sobre")
    }



}

module.exports = app;
let products = [{"title": "Cocacola",
                  "price": "200",
                  "thumbnail": "https://cdn4.iconfinder.com/data/icons/soda_pop_caps/PNG/Coca-Cola_256.png"},

                  {"title": "pepsi",
                  "price": "198",
                  "thumbnail": "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/pepsi-256.png"}]


const rutePostController = (req, res) => {
    try {
        products.push(req.body)
        res.redirect('/productos')
    } catch(e) {
        console.log('Error: ', e)
        res.sendStatus(500)
    }
    
}

const ruteGetController = (req, res) => {
    try {
        if (products.length>0) {
            res.render('pageGet.pug', {pageTitle: "Lista de Productos", datos : products})
        }else{
            res.render('pageGet.pug', {pageTitle: "No hay productos para mostrar"})
        }
                
    } catch(e) {
        console.log('Error: ', e)
        res.sendStatus(500)
    }
    
}

module.exports = {
    rutePostController,
    ruteGetController
}


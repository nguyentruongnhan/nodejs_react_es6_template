import Express from 'express'

let router = Express.Router() 

router.get("/*", (req, res, next) => {
  res.render('index')
})


export default router;
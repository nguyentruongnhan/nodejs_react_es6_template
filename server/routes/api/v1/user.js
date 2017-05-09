import Express from 'express'

let router = Express.Router() 

router.get("/list", (req, res, next) => {
  res.send([
      {id: 1, name: 'Nguyễn Trường Nhân'},
      {id: 2, name: 'Nguyễn Trường Ren'}
    ]);
})


export default router;
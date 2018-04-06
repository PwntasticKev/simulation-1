module.exports = {
  create: (req, res) => {
    console.log('works?')
    db.get-inventory().then(products => {
    res.status(200).send(products).catch(console.log)
    })
  },
  grabStuff: (req,res) => {
    res.status(200).send().catch();
  }
}
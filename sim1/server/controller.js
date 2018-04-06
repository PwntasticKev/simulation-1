module.exports = {
  create: (req, res) => {
    res.status(200).send().catch(console.log)
  }
}
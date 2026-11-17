const app = require('./server');
const PORT = process.env.PORT || 3000;

// 404 page not found code
app.use((req,res) => {
  return res.status(404).send("404 Page not found")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
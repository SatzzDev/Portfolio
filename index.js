const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('trust proxy', true)

app.get('/', async (req, res) => {
res.render('index')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});

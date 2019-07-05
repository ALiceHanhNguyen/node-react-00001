const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ name: 'Hanh' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
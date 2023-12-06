const express = require('express');
const routes = require('./routers');
const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
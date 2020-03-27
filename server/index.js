const servers = require('./require.js');
const app = require("express")();
const cors = require('cors');
const http = require("http").Server(app);
servers(app);


http.listen(3000, function() {
    console.log('listen in 3000')
})
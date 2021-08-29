var express = require('express');
var app = express();

var port = 3000;
app.get('/', function(request, response){
    response.send('Hello World!')
})

app.get('/users', function(request, response){
    response.send('<h2>User lists</h2>')
})

app.listen(port, function(){
    console.log("Server listening at port" + port);
})
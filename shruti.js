var express= require('express');

var app = express();

var controller=function(req,res){
console.log("list is");
var customer= [
{id:1,name:"shruti",salary:1000000},
{id:2,name:"nachiket",salary:1000000000}
];
res.send(customer);
};

app.get('/customer',controller);

var server= app.listen(6789,function(){
var host=server.address().address
var port=server.address().port
console.log("listening of port",host,port)
})
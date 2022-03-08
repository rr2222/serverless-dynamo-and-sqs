const AWS = require('aws-sdk');
const dontEnv = require('dotenv');
dontEnv.config();
const CONFIG = {
    region: process.env.AWS_REGION,
    endpoint: "http://127.0.0.1:4566"
}

AWS.config.update(CONFIG);
var ddb = new AWS.DynamoDB();



function postIteminDB(item){
    const obj = JSON.parse(item);
    var params = {
        TableName: 'transactions',
        Item: {
        'id' : {S: obj.id},
        'username' : {S: obj.username},
        'age' : {N: JSON.stringify(obj.age)},
        'transaction_type' : {S: obj.transaction_type},
        'quantidade' : {N: JSON.stringify(obj.quantidade)},
        'cpf' : {S: obj.cpf},
        }
      };
    
      console.log(params.Item);
      try {
        ddb.putItem(params, function(err, data) {
        }).promise();
        console.log("Mensagem postada no Dynamo");
      } catch (error) {
        console.log(error.message);
      }

}


module.exports = {postIteminDB}

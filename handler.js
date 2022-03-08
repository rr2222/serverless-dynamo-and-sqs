'use strict';

const sqsClient = require('./sqsClient');
const dontEnv = require('dotenv');
const dynamoClient = require('./dynamoClient');
module.exports.hello = async (event) => {
  dontEnv.config();
    const messageData = event.data;
    const result = await sqsClient.sendMessage(messageData);
    console.log("Mensagem Postada" + JSON.stringify(result));
}

module.exports.sqsConsumer = async (event) => {
  dontEnv.config();
  const result = await sqsClient.receiveMessages();
  console.log("Mensagem Recebida " + JSON.stringify(result.Messages[0].Body));
  console.log("--- Envinando para o DB ----------")
  dynamoClient.postIteminDB(result.Messages[0].Body);

}
const AWS = require('aws-sdk');
const dontEnv = require('dotenv');
dontEnv.config();
const CONFIG = {
    region: process.env.AWS_REGION,
}
const sqs = new AWS.SQS();
AWS.config.update(CONFIG);

function sendMessage(message){
	
	
	try {
		const messageSent = sqs.sendMessage({
			MessageBody: JSON.stringify(message),
			QueueUrl: `${process.env.AWS_QUEUE_URL}`
		}).promise();
		return messageSent;
	} catch (error) {
		console.log(error.message);
	}
	
}

async function receiveMessages(){
	var params = {
		AttributeNames: [
		   "SentTimestamp"
		],
		MaxNumberOfMessages: 10,
		MessageAttributeNames: [
		   "All"
		],
		QueueUrl: `${process.env.AWS_QUEUE_URL}`,
		VisibilityTimeout: 20,
		WaitTimeSeconds: 0
	   };
	try {
		const receivedMessage = sqs.receiveMessage(params, function(err, data){
			if (err) {
				console.log("Receive Error", err);
			  }
		}).promise();
		
		return receivedMessage;
	} catch (error) {
		console.log(error.message);
	} finally{

	}
		
}

module.exports = {sendMessage, receiveMessages}

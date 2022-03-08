function messageValidation(message){
    let messageData = message.data;
    
    if(!messageData.id){
        return "O campo id não pode ser vazio";
    }

}

function verifyHash(hash){
    let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    let regexValidation = hash.match(regexUuid);
    if(regexValidation == true){
        return true;
    }else{
        return "Campo id inválido"
    } 
}

module.exports = {messageValidation, verifyHash}
const chai = require('chai');
const messageValidator = require('../../validator/MessageValidator')

describe('MessageValidatorTest', () =>{
    let message =
        {
            "data":{
                "id": "",
                "username": "John",
                "age": 18,
                "transaction_type": "saque",
                "quantidade": 2.000,
                "cpf": "000.000.000-00"
            }
        }

    it('ShouldReturnErrorMessageIfIdIsEmpty', () => {
        //Given
        let givenError = messageValidator.messageValidation(message);
        
        //expect
        let errorMessage = "O campo id não pode ser vazio";

        //Assert
        var asset = chai.assert;
        asset.equal(givenError, errorMessage);

    });
});
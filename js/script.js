
function concatenateNumber() {
    var userPhone = document.getElementById('userPhone').value;

    if (!userPhone.startsWith('+55')) {
        document.getElementById('userPhone').value = '+55' + userPhone;
    }

    var nome = document.getElementById('nome').value;
    var messageText = `Olá ${nome}! Clique no link abaixo para fazer o download.\nhttps://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/05/calendario-f1-2024-sof2mab0jq75.jpg`;


    document.getElementById('messageText').value = messageText;
}
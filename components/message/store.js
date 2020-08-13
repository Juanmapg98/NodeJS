//aqui se crea toda la logica de almacenamiento
//mug = falsear la base dedatos o un servicio para validar que todo funciona correctamente

const list = [];

function addMessage(message) {
    list.push(message);
}

function getMessage() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage,
}
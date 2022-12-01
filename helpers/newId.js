const newId = (length) => {
    let result = '';
    let characters = 'asdfghjklqwertyuiopzxcvbnmQWERTYUIOPASDFGHJKZXCVBNM1234567890'
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random()* characters.length));
    }
    return result;
}

module.exports = {newId}
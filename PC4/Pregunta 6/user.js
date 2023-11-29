function User(username, password) {
    const _password = password;
    return {
        username: username,
        checkPassword: function(inputPassword) {
            return inputPassword === _password;
        }
    };
}
  
const newUser = User('user', '54321');
  
console.log(newUser.checkPassword('54321'));
console.log(newUser.checkPassword('12345'));
  
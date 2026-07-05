const axios = require('axios');
const readlineSync = require('readline-sync');

function hitAPI() {
    return axios.get(`https://api.github.com/users/${username}`);
}
const username = readlineSync.question('Enter your Github username: ');

hitAPI(username)
  .then((response) => {
    // If successful, extract and display data
    const data = response.data;
    console.log(`Name: ${data.name}`);
    console.log(`User Name: ${data.login}`);
    console.log(`The Followers on Github: ${data.followers}`);
  })
  .catch((error) => {
    // If there's an error, show the message
    console.log('Error:', error.message);
  });
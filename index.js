const app = "I don't do much.";

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
}

xhr.onerror = function() {
  console.log('Boooo');
}

xhr.send();

//with fetch

const token = '227b8b59769946ae3c12de6d379ad6dae1a1f53a';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

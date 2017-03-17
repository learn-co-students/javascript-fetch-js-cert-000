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

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'}); //converts data to a string

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};

xhr.open('POST', url);
xhr.send(data);

/*The boiler plate code for a POST request. Includes data that has been converted to a
string and passed as an argument to send(). POST has also been added in open() as 
an argument.*/

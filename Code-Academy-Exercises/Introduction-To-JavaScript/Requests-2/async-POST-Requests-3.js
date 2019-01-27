// information to reach API
const apiKey = '67c8eff2bb54488a9f8c41263f5facf9';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try{
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
'Content-type': 'application/json',
'apikey': apiKey
}
    });
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  }
  catch (error){
    console.log(error);
  }
};
// Code goes here

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/*In addition to our boilerplate code, we also pass in our apiKey as a property of
fetch()'s object argument. If the response returns with no error, the response is
displayed to the screen by renderResponse() passing in jsonResponse.'*/

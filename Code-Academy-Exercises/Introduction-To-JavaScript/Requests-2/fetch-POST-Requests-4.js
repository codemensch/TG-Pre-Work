// Information to reach API
const apiKey = '67c8eff2bb54488a9f8c41263f5facf9';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
	const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: {
  		'Content-type': 'application/json',
  		'apikey': apiKey
		},
    body: data
  }).then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/*After providing the url of the request endpoint and POST request data, we handle the
response by checking the ok status of the response and providing an error message if the
response fails.*/

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
	}
};

xhr.open('GET', url);

xhr.send();

/*I learned that an XHR GET request requires an XMLHttpRequest object declaration,
a URL to retrieve data from, the format or response type of the request, an event
handler when the request has finished, an open() method call to create a new request,
and a send() call. */

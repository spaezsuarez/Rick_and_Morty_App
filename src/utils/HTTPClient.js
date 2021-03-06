
class HTTPClient {

  constructor(URLBase = 'localhost:5000/') {
    this.url = URLBase.endsWith('/') ? URLBase : `${URLBase}/`;
  }

  static sendRequest(request) {
    
    return fetch(request.url, {
      method: request.method,
      headers: request.headers,
      body: JSON.stringify(request.data),
    }).then(response => {
      if (!response.ok)
        throw new Error('Request response with status ' + response.status);

      return response.json();
    });
  }

  get(endpoint) {
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'GET',
    });
  }

  post(endpoint, data) {
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data,
    });
  }

  put(endpoint, data) {
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data,
    });
  }

  del(endpoint) {
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'DELETE',
    });
  }
}

export default HTTPClient;
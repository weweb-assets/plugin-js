# How to configure a Javascript collection

Here, you can write a JS script that will be executed.

Any data returned by the script will be used as a collection source in WeWeb.

- The <a href="https://axios-http.com/" target="_blank" class="ww-editor-link">axios</a> library is provided for you to query APIs easily.
- This script will run as an `async` function. You can `await` data and you need to `return` the data at the end.

Example script :

```jsx
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

const response = await axios.get(url);

return response.data.results;
```

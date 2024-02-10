// Create web server
const express = require('express');
const app = express();

// Add CORS to allow any origin
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

// Add comments to the server
const comments = [];
app.get('/', (req, res) => {
  res.json(comments);
});

app.post('/', express.json(), (req, res) => {
  const { author, text } = req.body;
  if (typeof author === 'string' && typeof text === 'string') {
    comments.push({ author, text });
    res.status(201).json({ status: 'ok' });
  } else {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running');
});
```

You can run this server with the following command:

```sh
node comments.js
```

Now you can run the client and see the comments:

```sh
open index.html
```

You can also add a new comment:

```sh
curl -X POST -d '{"author": "Alice", "text": "Hello"}' -H "Content-Type: application/json" http://localhost:3000
```

If you want to see the comments from the server, you can run the following command:

```sh
curl http://localhost:3000
```

## Exercise 2: Add a new comment to the list

Add a new comment to the list when the user clicks the "Add" button.

## Exercise 3: Add a new comment to the server

Send a new comment to the server when the user adds it to the list.

## Exercise 4: Load comments from the server

Load comments from the server when the page is loaded.

## Exercise 5: Add a new comment to the list after adding it to the server

Add a new comment to the list after adding it to the server.

## Exercise 6: Add a new comment to the list after adding it to the server

Add a new comment to the list after adding it to the server.

## Exercise 7: Add a new comment to the list after adding it to the server

Add a new comment to the list after adding it to the server.

## Exercise 8: Add a new comment to the list after adding it to the
import express from 'express';

const app = express();

app.get('/', (reques, response) => {
    return response.json({ message: 'Hello Word!!' })
});

app.listen(3333);
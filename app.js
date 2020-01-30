const express = require('express');
const app = express();


app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Hello World! hook kk');
=======
    res.send('Hello World! modify');
>>>>>>> 1add88a92cb439864ed5cc5affb2f8dcb0c020a9
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on  port ${port}`));
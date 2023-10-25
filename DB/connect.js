const mongoose = require('mongoose');

const url = process.env.MONGODB_URL;

mongoose.connect(url, {
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to mongodb successfully');
}).catch((err) => {
    console.log(err.message);
});

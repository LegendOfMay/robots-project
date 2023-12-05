const client = require('./client.js');

const syncAndSeed = async() => {
    await client.connect();
    console.log("CONNECTED TO THE DB")
};

syncAndSeed();
const client = require('./client.js');
const { seedRobot } = require('./robots.js');

const dropTables = async() => {
    try {
        await client.query(`
        DROP TABLE IF EXISTS robots
        `);
    } catch(err) {
        console.log(err);
    }
}

const createTables = async() => {
    try {
        await client.query(`
        CREATE TABLE robots (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            model VARCHAR(20) NOT NULL,
            company VARCHAR(255) NOT NULL,
            image VARCHAR(255) NULL,
            guaranteed_months INT NOT NULL,
            safe_for_children BOOLEAN NOT NULL,
            release_date DATE NOT NULL,
            cost DECIMAL(10,2) NOT NULL
            )
        `);
    } catch (err) {
        console.log(err);
    }
}








const syncAndSeed = async() => {
    await client.connect();
    console.log("CONNECTED TO THE DB")

    await dropTables();
    console.log(`TABLES DROPPED`)

    await createTables();
    console.log(`TABLES CREATED`)

    await seedRobot();
};

syncAndSeed();
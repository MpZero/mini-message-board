require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR (20), message VARCHAR ( 200 ),  date DATE NOT NULL DEFAULT CURRENT_DATE);


INSERT INTO messages(username, message) 
VALUES ('Gonzalo', 'Hello World!'), 
('Alice', 'Nice app.'), 
('John', 'Hellooooo?'), 
('Cindy', 'I like burgers.');
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.PRODUCTION_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();

// console.log("testing");

import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
const name = chance.name({ middle_initial: true, prefix: true });
const age = chance.age();
const profession = chance.profession();

export const server = createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

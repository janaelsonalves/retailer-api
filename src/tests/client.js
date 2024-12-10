import http from "http";

const options = {
  port: 5000,
  hostname: "localhost",
  path: "/users",
  headers: {
    "content-type": "Application/json",
    authorization: "secretpassword",
  },
};

http.get(options, (res) => {
  console.log("Connection opened\nStatus:", res.statusCode);
  res.on("data", (chunk) => console.log(`Chunk: ${chunk.toString()}`));
  res.on("error", (err) => console.log(error));
  res.on("close", () => console.log("Connection closed."));
  res.on("end", () => console.log("No more data"));
});

const body = new Promise((resolve, reject) => {
  const req = http.request(options, (res) => {
    let chunks = [];
    res.on("data", (chunk) => chunks.push(chunk));
    res.on("end", () => resolve(Buffer.concat(chunks)));
    res.on("error", (err) => reject(err));
  });
  req.end();
});

body
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err));

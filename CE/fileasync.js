const fs = require("fs/promises");
const read = async () => {
  const data = await fs.readFile("./data.txt", "utf-8");
  console.log(data);
};
// read();
console.log("first");
const write = async () => {
  const newdata = "this is my work";
  await fs.writeFile("./data.txt", newdata, "utf-8");
};
write();

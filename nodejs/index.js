const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }

  const words = data.split(/\s+/).length;

  fs.writeFile("outputtext.txt", `Total words: ${words}`, (err) => {
    if (err) {
      console.log("Error writing file");
      return;
    }
    console.log("Done! Output written to outputtext.txt");
  });
});

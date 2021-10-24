import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "listes.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    //const enWord = req.body.en;
    //const frWord = req.body.fr;

    const newWord = req.body;
    data.englishList[0].data.push(newWord);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Succès!" });
  }
}

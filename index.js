import axios from "axios";
import chalk from "chalk";
import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
app.use(express.json());

const students = [];

console.log(process.env.PORT, "env");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(chalk.red(`Server is running on port`));
});

app.post("/students", (request, response) => {
  students.push(request.body);
  response.send(students);
});

app.get("/students", (request, response) => {
  response.send(students);
});

app.put("/students/:id", (request, response) => {
  const { id } = request.params;

  const index = students.findIndex((student) => student.id == id);

  response.send({
    message: "successfully",
    student: students[index],
  });
});

// 🟨 GET — news
app.get("/", async (request, response) => {
  const res = await axios.get("https://gogo.mn/cache/news-shinemedee?size=15");
  response.send(res.data);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(process.env.PORT, "env");
// const port = process.env.PORT;

// app.listen(port, () => {
//   console.log(chalk.red("server is running"));
// });

// app.post("/students", (request, response) => {
//   students.push(request.body);
//   response.send(students);
// });

// app.put("/students", (request, response) =>{
//   students.put(request.)
// })

// app.get("/", async (request, response) => {
//   const res = await axios.get("https://gogo.mn/cache/news-shinemedee?size=15");
//   response.send(res.data);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// app.get("/students", (request, response) => {
//   const result = students.name.map((name, index) => {
//     const age = students.age[index];
//     const isOld = age >= 18 ? "Хөгшин" : "Залуу";
//     return { name, age, category: isOld };
//   });

//   response.send(result);
// });

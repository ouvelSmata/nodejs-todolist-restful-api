import http from "http";
import { Todolist } from "./Todolist";

const todolist = new Todolist();

const server = http.createServer((req, res): void => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    todolist.getTodo(req, res);
  }
});

server.listen(3000);

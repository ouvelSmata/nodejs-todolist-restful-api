import http from "http";
import { Todolist } from "./Todolist";

const todolist = new Todolist();

const server = http.createServer((req, res): void => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    todolist.getTodo(req, res);
  } else if (req.method === "POST") {
    todolist.createTodo(req, res);
  } else if (req.method === "PUT") {
    todolist.updateTodo(req, res);
  }
});

server.listen(3000);

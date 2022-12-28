"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const Todolist_1 = require("./Todolist");
const todolist = new Todolist_1.Todolist();
const server = http_1.default.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.method === "GET") {
        todolist.getTodo(req, res);
    }
    else if (req.method === "POST") {
        todolist.createTodo(req, res);
    }
    else if (req.method === "PUT") {
        todolist.updateTodo(req, res);
    }
});
server.listen(3000);

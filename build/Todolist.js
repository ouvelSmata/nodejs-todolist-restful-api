"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todolist = void 0;
class Todolist {
    constructor() {
        this.todolist = ["Programmer", "Zaman", "Now"];
    }
    getJsonTodolist() {
        return JSON.stringify({
            status: "OK",
            code: 200,
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value,
                };
            }),
        });
    }
    getTodo(req, res) {
        res.write(this.getJsonTodolist());
        res.end();
    }
    createTodo(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);
            res.write(this.getJsonTodolist());
            res.end();
        });
    }
}
exports.Todolist = Todolist;

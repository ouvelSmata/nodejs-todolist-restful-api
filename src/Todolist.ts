import http, { IncomingMessage, ServerResponse } from "http";

export class Todolist {
  todolist: string[] = ["Programmer", "Zaman", "Now"];

  getJsonTodolist(): any {
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

  getTodo(req: IncomingMessage, res: ServerResponse): void {
    res.write(this.getJsonTodolist());
    res.end();
  }

  createTodo(req: IncomingMessage, res: ServerResponse): void {
    req.addListener("data", (data: any): void => {
      const body = JSON.parse(data.toString());

      this.todolist.push(body.todo);

      res.write(this.getJsonTodolist());
      res.end();
    });
  }

  updateTodo(req: IncomingMessage, res: ServerResponse): void {
    req.addListener("data", (data: any): void => {
      const body = JSON.parse(data.toString());

      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }

      res.write(this.getJsonTodolist());
      res.end();
    });
  }

  deleteTodo(req: IncomingMessage, res: ServerResponse): void {
    req.addListener("data", (data: any): void => {
      const body = JSON.parse(data.toString());

      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
      }

      res.write(this.getJsonTodolist());
      res.end();
    });
  }
}

import http from "http";

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

  getTodo(req: http.IncomingMessage, res: http.ServerResponse): void {
    res.write(this.getJsonTodolist());
    res.end();
  }
}

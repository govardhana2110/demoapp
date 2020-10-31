export class Todo {
  constructor(public id: number, public title: string, public status: string) {}
}

export interface Table {id: number;title: string;status: string;
}
export class Employee{
  constructor(public eid:number,public ename:string, public eage: string,public estatus: string,){};
}

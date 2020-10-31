export class HueGroup {
  public constructor(public Name: string, public Lights: Light[]) {}
}
export class Light {
  public constructor(public Name: string) {}
}
export class employee{
  public constructor( public Id: string,public Name: string,public Gender: string,public Department: string){}
}
export class Item {
  public constructor(public Name: string, public Value: number) {}
}

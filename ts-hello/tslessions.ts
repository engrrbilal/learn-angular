// //type anotation
// let a :number;
// let b : boolean;
// let c:string;
// let d : any;
// let e:number[]=[1,2,3]
// let f:any[] = [1,true,'a',false]

// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 3;

// enum Color {Red = 0,Green = 1,Blue};
// let backgroundColor = Color.Blue

// let message 
// message = 'abc';
// //type insertion for intelisense
// let endsWithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c')
// //arrow function
// let doLog = (message)=>console.log(message)

//custom types
//multiple arguments solution 1 object literal
// let drawPoint = (point:{x:number,y:number}) =>{
//     //...
// }
// drawPoint({
//     x:1,
//     y:2
// })
//multiple arguments solution 2 interface
// interface Point {
//     x:number,
//     y:number
// }
// let drawPoint = (point:Point) =>{
//     //...
// }
// let getDistance = (pointA:Point,pointB:Point)=>{
//     //...
// }
// drawPoint({
//     x:1,
//     y:2
// })
//cohesion oop concept things related go to one unit,class uses
// class Point {
//     x:number;
//     y:number;
//     draw(){
//         console.log(`x:${this.x}, y:${this.y}`)
//     }
//     getDistance(another:Point){
//         //,,,,
//     }
// }
// //defining object of class
// let point = new Point()
// point.x = 1,
// point.y = 2
// point.draw()

//constructor and acces modifiers
// class Point {
//     // private x:number;
//     // private y:number;
//     constructor(private _x?:number,private _y?:number){
//         // this.x = x,
//         // this.y = y
//     }
//     draw(){
//         console.log(`x:${this.x}, y:${this.y}`)
//     }
//     getDistance(another:Point){
//         //,,,,
//     }
//     ///properties
//     get x(){
//         return this._x
//     }
//     set x(value){
//         if(value < 0)
//             throw new Error('value cannot be less than 0')
//             this._x = value
//     }
// }
// //defining object of class
// let point = new Point()
// let x = point.x
// point.x = 10
// point.draw()

//modules
// class Point {
//     constructor(private x?:number,private y?:number){
   
//     }
//     draw(){
//         console.log(`x:${this.x}, y:${this.y}`)
//     }
// }
// //defining object of class
// let point = new Point()
// point.draw()
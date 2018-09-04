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
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("x:+" + this.x + ", y:" + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //,,,,
    };
    return Point;
}());
var point = new Point();
point.x = 1,
    point.y = 2;
point.draw();

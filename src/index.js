// class Point {
//     constructor(father){
//         this.father=father;  
//     }
//     toString() {
//        console.log(1);
//     }
// }

// class Point2 extends Point {
// 	constructor(x,y,father){
//         super(father)
//         this.x=x;
//         this.y=y;
//     }
//     say() {
//          console.log(2);
//     }
// }
// var p =new Point2(8,8,666);
// console.log(p)
class Point {
   _render() {
      alert('子类必须实现')
    }
    render(){
        return (`<p>${this._render()}这是块</p>`)
    }
}

class Point2 extends Point {
    _render() {
    return (`<span>这是行内</span>`);
    }
}
var p =new Point2();
console.log(p.render())
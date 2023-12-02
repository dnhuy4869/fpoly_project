"use strict";
// generic var
// type ThongTinSP = number | string | boolean | undefined;
// function xuly<T extends ThongTinSP>(p: T): T[] {
//     const listsp = [
//         { ten: 'Cà chua', gia: 30000, cònhàng: true },
//         { ten: 'Chuổi', gia: 14000, cònhàng: false },
//         { ten: 'Cam thảo', gia: 82000, cònhàng: true },
//         { ten: 'Chà Là', gia: 194000, cònhàng: true }
//     ]
//     let arr: T[] = [];
//     switch (typeof p) {
//         case 'number':
//             arr = listsp.map(e => e.gia) as T[];
//             break;
//         case 'string':
//             arr = listsp.map(e => e.ten) as T[];
//             break;
//         case 'boolean':
//             arr = listsp.map(e => e.cònhàng) as T[];
//             break;
//         default: arr = [];
//     }
//     return arr;
// }
// let arr1: number[] = xuly<number>(1); console.log(arr1);
// let arr2: string[] = xuly<string>(''); console.log(arr2);
// let arr3: boolean[] = xuly<boolean>(true); console.log(arr3);
// let arr4: undefined[] = xuly<undefined>(undefined); console.log(arr4);
// Generic function
// function xuly<Type>(arg: Type): Type { return arg;}
// let xl: <T>(arg: T) => T = xuly;
// console.log( xl<number>(5) ) ; //5
// console.log( xl<string>("Thứ sáu") ) ; //Thứ sáu
// console.log( xl<boolean>(true) ) ; //true
// function thuchien<T1, T2>( param1:T1, param2: T2):void { 
//     console.log(param1 + ' - '+ param2);
// }
// thuchien<string, number>("Gạo", 25000);
// thuchien<number, string>(25000, "Gạo");
// thuchien<string, string>("Gạo", "25000 đồng");
// function ghepGiaTri<Kieu>( arr: Kieu[]):void { 
//     console.log(arr.join(' - '));
// }
// ghepGiaTri<string>(["Đông Bộ Đầu", "Hàm Tử", "Bạch Đằng"]);
// ghepGiaTri<number>([1258, 1285, 1288]);
// Generic interface
// interface ITest<T> { 
//     variable1 : T;
//     method1( a: T , b: T) : T;
// }
// let x:ITest<number> = { 
//     variable1:0,
//     method1(a, b) { return a+b; }
// }
// let y:ITest<string> = { 
//     variable1:"",
//     method1(a, b) { return (a+b).toUpperCase(); }
// }
// interface IXuly<Type> { ketqua:Type; xuly(param:Type): Type}
// let tangDiem:IXuly<number> = { 
//     ketqua:1, 
//     xuly: function(n) { 
//         this.ketqua = n+1; 
//         return this.ketqua;
//     }
// }
// console.log( tangDiem.xuly(9) , tangDiem );
// let chuhoa:IXuly<string> = { 
//     ketqua:"", 
//     xuly: function(n:string) { 
//         this.ketqua = n.toUpperCase(); 
//         return this.ketqua;
//     }
// }
// console.log( chuhoa.xuly("viet nam") , chuhoa );
// interface ICaNhan<T, U> { info1: T; info2: U; }
// let k1:ICaNhan<string, number> = { info1:"Tèo", info2: 20 };
// let k2:ICaNhan<string, boolean> = { info1:"Út vẹo", info2:true }; 
// console.log(k1);
// console.log(k2);
// interface IThietBi<T, U>{ ( ten: T, gia: U): void; };
// function hamA(ten:string, gia:number):void { 
//   console.log(`Tên = ${ten} , giá = ${gia}`);
// }
// function hamB(ten: string, gia:string):void { 
//   console.log(`Tên = ${ten} , giá = ${gia}`);
// }
// let tb1: IThietBi<string, number> = hamA;
// tb1('Ổ cắm thông minh', 152000); 
// let tb2: IThietBi<string, string> = hamB;
// tb2('Quạt hút mùi', '3500000 đồng');
// Generic class
class G_Test {
}
let a = new G_Test();
a.zeroValue = 0;
a.cong = (x, y) => x + y;
console.log(a.cong(8, 3));
let b = new G_Test();
b.zeroValue = "";
b.cong = (x, y) => x + y;
console.log(b.cong("8", "3"));
console.log(b.cong("Tử", " tế"));
let c = new G_Test();
c.zeroValue = false;
c.cong = (x, y) => x || y;

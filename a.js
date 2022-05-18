// function Pagination(container, total, current) {
//     this.total = total;
//     this.current = current;
//     this.html = html;
//     this.val = val;
//     this.pageTotal = 0;
//     this.MaxPage = 5;
//     this.el = document.createElement('ul'); //TODO: 创建分页组件根节点
//     if (!this.el) return;
//
//     this.el.innerHTML = this.html();
//     container.appendChild(this.el);
//     this.el.className = this.total <= 1 ? '.pagination.hide' : '.pagination'; //TODO: 判断是否需要隐藏当前元素
//
//     function html() {
//         if (this.total <= 1) return '';
//         var lis = '<li>首页</li>'
//         this.pageTotal = this.total < this.MaxPage ? this.total : this.MaxPage
//         for(var i = 1; i <= this.pageTotal; i++){
//
//         }
//
//         //TODO: 生成组件的内部html字符串
//         return '';
//     }
//
//     function val(current) {
//         if (arguments.length === 0) return this.current;
//         if (current < 1 || current > this.total || current === this.current) return;
//         this.current = current;
//         this.el.innerHTML = this.html();
//     };
// }


// function getUrlParam(sUrl, sKey) {
//     var queryParam = sUrl.match(/(?<=\?).*(?=#)/g)[0] + '&';
//     console.log(typeof queryParam, queryParam instanceof Array)
//     var arr;
//     var obj = {};
//     var reg;
//     var match;
//     var key;
//     var value;
//     if(sKey){
//         reg = '(?<=' + sKey +'=)' + '.+?' +  '((?=&)|(?=#))';
//         match = queryParam.match(new RegExp(reg, 'g'));
//
//         if(!match){
//             return '';
//         }
//         if(match.length > 1){
//             return match;
//         }else{
//             return match[0];
//         }
//
//     }else{
//         arr = queryParam.split('&');
//         // console.log(arr)
//         for(var i = 0; i < arr.length; i++){
//             if(arr[i]){
//                 key = arr[i].match(/.+(?==)/g)[0];
//                 value = arr[i].match(/(?<==).+/g)[0];
//                 if(obj[key]){
//                     if (obj[key] instanceof Array) {
//                         obj[key].push(value);
//                     }else{
//                         var subs = [];
//                         subs.push(obj[key]);
//                         obj[key] = subs;
//                     }
//                 }else{
//                     obj[key] = value;
//                 }
//                 // console.log(arr[i].match(/.+(?==)/))
//             }
//         }
//         return obj;
//     }
//
// }
//
// function test() { var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test=4#hehe', 'key');
// console.log(a)
// return a.join('') === '1234'; }
//
// // console.log(test())
//
// console.log(+'str', '1234')
// var newN = [1,2,3,4].keys().map((item, index) => {
//     return item
// })
// console.log(newN)

// let reg = /mon and (dad) and (bady)/g
// let str = '123mon and dad and bady666'

// str.replace(reg, (...arr) => {
//     console.log(arr)
// })

// function *gen(init){
//     console.log(init)
//     console.log(yield 1, '666')
//     console.log(123)
//     console.log(yield 2)
//     console.log(yield 3)
// }

// let g = gen('foo')
// let result = g.next()
// console.log(result)

// let result2 = g.next()
// console.log(result2)

// let result3 = g.next()
// console.log(result3)


// function *inner(){
//    console.log(123)
// }

// function *outer(gen){
//     console.log('iter value:', yield* inner())
// }

// // for(const x of inner()){
// //     console.log('value:', x)
// // }

// let g = inner()

// console.log(g.next())
// console.log(g.next())
// console.log(g.next())


// function digui(n){
//     if(n > 0){
//         digui(n - 1)
//         console.log(n-1)
//     }
// }

// digui(3)

var arr = [1, 2, 3, 4, [5,6,7]]
console.log(arr.join(''))
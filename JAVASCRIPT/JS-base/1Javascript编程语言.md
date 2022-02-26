# JavaScript编程语言

## 一、JavaScript简介

### 1 JavaScript是什么 

#### 1.1 javascript
- JavaScript是一种脚本语言，使页面更生动
- 可以在浏览器中执行，可以在服务端执行
- 可以在任意搭载了JavaScript引擎的设备中执行


#### 1.2 引擎及其原理
- 不同的浏览器中嵌入了不同的JavaScript引擎
- V8引擎：Chrome、opera、Edge
- SpiderMonkey引擎： Firefox
- 引擎读取并解析脚本，然后将脚本编译成机器语言，然后机器代码快速执行
- 引擎会对流程中的各个阶段进行优化 

#### 1.3 浏览器中的JavaScript
JavaScript的能力很大程度上取决于它运行的环境，
为了用户信息安全，浏览器中的JavaScript功能受限，
**目的是防止恶意网页获取用户私人信息或损害用户数据**
##### 1.3.1 可以做的
- 在网页中添加新的HTML，修改网页内容和样式
- 响应用户的行为
- 向远程服务器发送网络请求，下载和上传文件
- 获取或设置cookie，向访问者提出问题或发送消息
- 本地存储：记住客户端的数据
##### 1.3.2 不可以做的
- 不能读、写、复制和执行硬盘上的任意文件，没有直接访问操作系统的功能
- 不同的标签页/窗口之间通常互不了解(同源策略)
- 可以与当前页面所在服务器通信，但削弱了与其它网站/服务器通信的能力，需要来自远程服务器的明确协议(在http header中)

#### 1.4 特点
- 与html/CSS完全集成
- 所有的主流浏览器都支持JavaScript

### 二、 手册与规范

#### 1. ECMA-262规范
#### 2. MDN JavaScript索引手册
#### 3. 兼容性表：不同引擎对javascript功能的支持情况

### 三、 代码编辑器
分两种：IDE(集成开发环境)和轻量编辑器
#### 1. IDE
- 管理整个项目，具有强大功能的编辑器，是个完整的开发环境
- Visual Studio Code：跨平台，免费
- Webstorm：跨平台，收费

#### 2. 轻量编辑器
- 用于快速打开和编辑文件
- Notepad++：windows免费
- Sublime text：跨平台

### 四、开发者控制台
- 首选Chrome浏览器进行开发
- 控制台查看错误、执行命令、检查变量等

## 二、JavaScript基础知识

### 2.1 JavaScript程序
#### 1. 内部标签 \<script>
##### 1.1 标签位置与作用
- \<script> 标签可以将javascript程序插在HTML文档的任何位置
- \<script> 标签中包裹了JavaScript代码，当浏览器遇到 \<script> 标签，代码会自动运行
##### 1.2 不常用的标签属性
- type属性：HTML4 标准中,type="text/javascript"，现在已经不需要
- language属性：为了显示脚本使用的语言，现在已经不需要，语言默认就是JavaScript
#### 2. 外部脚本文件 .js
- 大量的 JavaScript 代码，可以将它放入一个单独的.js文件
- 脚本文件可以通过scipt标签中的src属性添加到 HTML 文件
- src值为文件路径，绝对路径、相对路径都可
##### 2.1 外部脚本的好处
- 使用外部脚本文件的好处是浏览器会下载它，然后将它保存到浏览器的 缓存 中
- 之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次
- 这可以节省流量，并使得页面（加载）更快
#### 3. 注意
- 如果设置了 src 特性，script 标签内容将会被忽略，不会被执行
- 即一个单独的 \<script> 标签不能同时有 src 特性和内部包裹的代码

### 2.2 代码结构
#### 1. 语句
- 语句是执行行为（action）的语法结构和命令
- 语句之间可以使用英文分号进行分割
- 通常，每条语句独占一行，以提高代码的可读性
#### 2. 分号
- 当存在换行符（line break）时，在大多数情况下可以省略分号
- JavaScript 将换行符理解成“隐式”的分号。这也被称为 自动分号插入
- **在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！**
#### 3. 注释
- 单行注释以两个正斜杠字符 // 开始
- 多行注释以一个正斜杠和星号开始 /* 注释内容 */
- 不支持注释嵌套！

### 2.3 现代(严格)模式 "use strict"
- "use strict" 或者 'use strict'
- 当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作
- **请确保 "use strict" 出现在脚本的最顶部，否则严格模式可能无法启用**
- 没有办法取消 use strict，一旦进入了严格模式，就没有回头路了
#### 1. 是否使用"use strict"
- 现代 JavaScript 支持 “classes” 和 “modules”它们会自动启用 use strict
- 因此，如果使用它们，则无需添加 "use strict" 指令
- 目前欢迎将 "use strict"; 写在脚本的顶部
- 当代码全都写在了 class 和 module 中时，可以将 "use strict"; 这行代码省略掉

### 2.4 变量
- 变量用来命名及存储数据
#### 1. let关键字
1) 用let声明变量
```js
// 1. 声明变量
let number;
// 2. 给变量赋值
number = 10;
// 3. 声明变量的同时赋值
let message = "hello";
// 4. 使用变量名访问变量
console.log(message);
// 5. 修改变量值
number = 25;
// 6. 复制变量
let msg;
msg = message; // 把message的值拷贝给msg
```
- 一行中可以声明多个变量
- 为了可读性，请一行只声明一个变量
```js
// 书写多行变量：
// 1. 通常
let n1 = 1;
let n2 = 2;
let n3 = 3;
// 2. 逗号在后
let user = 'tom',
    age = 18,
    sex = '男';
// 3. 逗号在前
let uname = 'araay'
  , address = 'beijing'
  , color = 'red';
// 效果相同，看个人审美
```
2) 同一个变量不能重复声明，否则会报错
- 对同一个变量应该只声明一次，之后在不使用 let 的情况下对其进行引用
3) 变量要先声明再使用，没有使用严格模式的情况下，不声明变量而直接使用可能不报错，但是在use strict模式下一定会报错
#### 2. 变量命名规则
1) 变量名称只能包含字母，数字，符号 $ 和 _
2) 首字符不能是数字
3) 如果命名包括多个单词，通常采用驼峰式命名法(camelCase:除了第一个单词，其他的每个单词都以大写字母开头)
4) 区分大小写
5) 允许非英文字母，但不推荐
6) 不能使用保留字作为变量名(let、class、return、function等)
#### 3. 变量命名规范
1) 见名知意
2) 简洁
#### 4. let与var
- 都用来声明变量
- var是老旧的声明方式，现在不常用

### 2.5 常量
- 不能被修改的常数变量
#### 1. const关键字
1) 使用 const 声明的变量称为“常量”，不能被修改
```js
const number = 100;
number = 'wwz'; // 报错，不能对常量进行重新赋值
```
2) 通常使用大写字母和下划线来命名常量，将常量用作别名使用
```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
// ……当需要选择一个颜色
let color = COLOR_ORANGE;
console.log(color);
```
3) 大小写常量
- 通常用大写字母表示“硬编码（hard-coded）”的常量
- 硬编码：当值在执行之前或在被写入代码的时候，就知道值是什么了
- 程序运行时计算出的常量变量使用小写
```js
const BIRTHDAY = '18.04.1982'; // 使用大写
const age = someCode(birthday); // 使用小写
/*
age 是在程序运行时计算出的
今天我们有一个年龄，一年以后我们就会有另一个
它在某种意义上不会随着代码的执行而改变
但与 birthday 相比，它还是有一定的可变性：
它是计算出来的，因此应该使用小写
*/
```

### 2.6 数据类型
-  JavaScript 中有 8 种基本的数据类型（7 种原始类型和 1 种引用类型）
-  原始类型: 值只包含一个单独的内容（字符串、数字或者其他）
-  JavaScript，被称为“动态类型”（dynamically typed）的编程语言
-  编程语言中有不同的数据类型，但是定义的变量并不会在定义后，被限制为某一数据类型
#### 1. Number 类型
1) number 类型代表整数和浮点数
2) 特殊数值：Infinity、-Infinity、NaN
- Infinity：无穷大，可以通过除以0得到无穷大，也可以直接使用无穷大
```js
console.log(1 / 0); // Infinity
console.log(Infinity);
```
- NaN：代表计算错误，是一个不正确的或者一个未定义的数学操作所得到的结果
- 任何对 NaN 的进一步操作都会返回 NaN
```js
console.log("not a number" / 2); // NaN
```
3) 特殊的数值属于 “number” 类型,但它们并不是数字
#### 2. BigInt 类型(不常用)
- 新增加的，用于表示任意长度的整数
- 通过将 n 附加到整数字段的末尾来创建 BigInt 值
- 目前 Firefox/Chrome/Edge/Safari 已经支持 BigInt 了，但 IE 还没
```js
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```
#### 3. String 类型
- 字符串类型
##### 1. 字符串
- 有三种包含字符串的方式
- 双引号："Hello".
- 单引号：'Hello'.
- 反引号：`Hello`.
- 反引号是 功能扩展 引号，通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中
- ${…} 内的表达式(表达式可以是数字、字符串、变量等)会被计算，计算结果会成为字符串的一部分
```js
let name = "John";
// 嵌入一个变量
console.log( `Hello, ${name}!` ); // Hello, John!
// 嵌入一个表达式
console.log( `the result is ${1 + 2}` ); // the result is 3
```
#### 4. Boolean 类型（逻辑类型）
- boolean 类型仅包含两个值：true 和 false
#### 5. “null” 值
- 特殊的 null 值不属于上述任何一种类型
- 它构成了一个独立的类型，只包含 null 值
- JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值
#### 6. “undefined” 值
- 特殊值 undefined 和 null 一样自成类型
- undefined 的含义是 未被赋值
- 如果一个变量已被声明，但未被赋值，那么它的值就是 undefined
- 通常，使用 null 将一个“空”或者“未知”的值写入变量中，而 undefined 则保留作为未进行初始化的事物的默认初始值
#### 7. object对象类型 和 symbol 类型
- symbol 用于唯一的标识符
- object 用于更复杂的数据结构
#### 8. typeof 运算符
- typeof 运算符返回参数的数据类型
- 两种语法形式：有括号和没有括号，得到的结果是一样的
1) 作为运算符：typeof x      以字符串的形式返回数据类型
2) 函数形式：typeof(x)
```js
typeof undefined // "undefined"
typeof null // "object" 
/*
typeof null 会返回 "object" —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 object
*/
```

### 2.7 浏览器用户交互：alert、prompt 和 confirm
#### 1. alert弹窗
- alert("Hello");
- 弹出带有信息的小窗口被称为 模态窗
- 弹窗弹出时不能与页面其他部分进行交互，直到点击确认
#### 2. prompt输入框输入
- 浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮
- prompt 函数接收两个参数：
  result = prompt(title, [default]);
  title：显示给用户的文本
  default：可选的第二个参数，指定 input 框的初始值
- prompt 将返回用户在 input 框内输入的文本，如果用户取消了输入，则返回 null
#### 3. confirm确认框
- 语法：result = confirm(question);
- confirm 函数显示一个带有 question 以及确定和取消两个按钮的模态窗口
- 点击确定返回 true，点击取消返回 false

### 2.8 类型转换
- 隐式转换
  alert 会自动将任何值都转换为字符串以进行显示
  算术运算符会将值转换为数字
- 显式转换
#### 1. 字符串转换
- 调用 String(value) 来将 value 转换为字符串类型
```js
let flag = true;
flag = String(flag);
console.log(typeof(flag));
```
#### 2. 数字型转换
1) 在算术函数和表达式中，会自动进行 number 类型转换
```js
console.log("6" / "2" ); // 3, string 类型的值被自动转换成 number 类型后进行计算
```
2) 调用Number(value) 显式地将value 转换为 number 类型
```js
let flag = "123";
flag = Number(flag);
console.log(typeof(flag));
```
3) number 类型转换规则
- undefined转换为NaN
- null转换为0
- true转换为1，false转换为0
- 字符串，如果字符串是纯数字字符串，则直接转换为对应数字，非纯数字，读取到非数字时出现错误，转换为NaN
```js
console.log( Number("   123   ")); // 123
console.log( Number("123z")); // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```
#### 3. 布尔型转换
1) 调用 Boolean(value) 显式地进行转换
2) 转换规则如下：
- 直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false
- 其他值变成 true
#### 4.　易错点
- 对 undefined 进行数字型转换时，输出结果为 NaN，而非 0
- 对 "0" 和只有空格的字符串（比如：" "）进行布尔型转换时，输出结果为 true

### 2.9 运算符
#### 1. 术语
1) 运算元: 运算符应用的对象
2) 一元运算符: 如果一个运算符对应的只有一个运算元，那么它是 一元运算符,例如负号-
3) 二元运算符: 如果一个运算符拥有两个运算元，那么它是 二元运算符,例如减号-
#### 2. 数学支持
1) 运算符支持以下数学运算：加+、减-、乘*、除/、取余%、求幂**
2) 取余%：a % b 的结果是 a 整除 b 的 余数
3) 求幂**：a ** b 将 a 提升至 a 的 b 次幂
#### 3. 一元运算符+ 和 二元运算符+
##### 1. 二元运算符+
1) 用二元运算符 + 连接字符串
```js
let s = "my" + "string";
console.log(s); // mystring
```
2) 注意：只要任意一个运算元是字符串，那么另一个运算元也将被转化为字符串
```js
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // "41"，不是 "221"
console.log('1' + 2 + 2); // "122"，不是 "14"
```
3) 其他算术运算符只对数字起作用，并且总是将其运算元转换为数字
```js
console.log( 6 - '2' ); // 4，将 '2' 转换为数字
console.log( '6' / '2' ); // 3，将两个运算元都转换为数字
```
##### 2. 一元运算符+
1) 加号 + 应用于单个值，对数字没有任何作用
2) 但是如果运算元不是数字，加号 + 则会将其转化为数字(效果和 Number() 相同，但是更加简短)
```js
// 对数字无效
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// 转化非数字
console.log( +true ); // 1
console.log( +"" );   // 0
```
#### 4. 运算符优先级
- 每个运算符都有对应的优先级数字
- 数字越大，越先执行
- 如果优先级相同，则按照由左至右的顺序执行
- 圆括号拥有最高优先级
- **优先级排序：一元加号 = 一元负号 > 求幂 > 乘号 = 除号 > 加号 = 减号 > 赋值符**
#### 5. 赋值运算符(=)
1) 赋值 = 返回一个值
```js
let x;
x = value; // 将值 value 写入 x 然后返回 x
```
2) 链式赋值: 从右到左进行计算
```js
let a,b,c;
a = b = c = 2 + 2; // 可读性不高
```
3) 修改并赋值： +=   -=   *=  /=    %=     优先级与普通赋值运算符的优先级相同
```js
let n = 2;
n += 5; // 现在 n = 7（等同于 n = n + 5）
n *= 2; // 现在 n = 14（等同于 n = n * 2）
console.log( n ); // 14
```     
#### 6. 自增自减运算符
##### 1. 自增自减
1) 自增 ++ : 将变量与 1 相加 
2) 自减 -- : 将变量与 1 相减
3) 自增/自减只能应用于变量
4) 运算符 ++ 和 -- 可以置于变量前，也可以置于变量后
5) 建议不要在一行上写多个自增自减运算符，可读性不高
6) 自增自减运算符优先级比绝大部分的算数运算符要高
```js
let n = 2;
let m = 9;
n++; // n = n + 1
m--; // m = m -1
console.log(n);
console.log(m);
```
##### 2. 运算符前置和后置的区别
- 当运算符置于变量后，被称为“后置形式”：n++
- 当运算符置于变量前，被称为“前置形式”：++n
- 前置形式返回一个新的值，但后置返回原来的值（做加法/减法之前的值）
```js
let m = 3, n = 5, o = 5;
let l = m * n++;  // 参与运算的是原来的值
let q = m * ++o; // 参与运算的是新的值
console.log(l); // 15
console.log(q); // 18
console.log(n); // 6
console.log(o); // 6
```
#### 7. 位运算符
- 位运算符把运算元当做 32 位整数，并在它们的二进制表现形式上操作
- 按位与 ( & )
- 按位或 ( | )
- 按位异或 ( ^ )
- 按位非 ( ~ )
- 左移 ( << )
- 右移 ( >> )
- 无符号右移 ( >>> )
#### 8. 逗号运算符 ,
1) 逗号运算符能让我们处理多个语句
2) 使用 , 将它们分开
3) 每个语句都运行了，但是只有最后的语句的结果会被返回
```js
let a = (1 + 2, 3 + 4);
// 第一个语句 1 + 2 运行了，但是它的结果被丢弃了
// 随后计算 3 + 4，并且该计算结果被返回
console.log( a ); // 7（3 + 4 的结果）
```
4) 逗号运算符的优先级 = 还要低
```js
let a = 1 + 2, 3 + 4;
// 先执行 +，将数值相加得到 a = 3, 7
// 然后赋值运算符 = 执行 a = 3
// 然后逗号之后的数值 7 不会再执行，它被忽略掉了
console.log( a );
```
#### 9. 例题
```js
"" + 1 + 0 = "10" // 
"" - 1 + 0 = -1 // 
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" 
"  -9  " - 5 = -14 
null + 1 = 1 // null 经过数字转换之后会变为 0
undefined + 1 = NaN // undefined 经过数字转换之后会变为 NaN
" \t \n" - 2 = -2 // 整个字符串由空格字符组成，包括 \t、\n 以及它们之间的“常规”空格,类似于空字符串
```
#### 10. 比较运算符
##### 1. 比较运算符符
1) 大于 、 小于：a > b，a < b
2) 大于等于 、 小于等于：a >= b，a <= b
3) 检查两个值的相等：a == b，请注意双等号 == 表示相等性检查，而单等号 a = b 表示赋值
4) 检查两个值不相等：a != b
##### 2. 比较结果
1) 所有比较运算符均返回布尔值
- true为真
- false为假
##### 3. 字符串比较大小
1) 字符串比较大小步骤
2) 字符串是按字符（母）逐个进行比较的
3) 小写字母 a > 大写字母 A
- 首先比较两个字符串的首位字符大小
- 如果一方字符较大（或较小），则该字符串大于（或小于）另一个字符串
- 否则，如果两个字符串的首位字符相等，则继续取出两个字符串各自的后一位字符进行比较
- 重复上述步骤进行比较，直到比较完成某字符串的所有字符为止。
- 如果两个字符串的字符同时用完，那么则判定它们相等，否则未结束（还有未比较的字符）的字符串更大
```js
"apple" > "pineapple" → false
"2" > "12" → true
```
##### 4. 不同类型间的比较
1) 当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小
2) 对于布尔类型值，true 会被转化为 1、false 转化为 0
```js
console.log( '2' > 1 ); // true，字符串 '2' 会被转化为数字 2
console.log( '01' == 1 ); // true，字符串 '01' 会被转化为数字 1
console.log( true == 1 ); // true
console.log( false == 0 ); // true
```
##### 5. 严格相等 ===
1) 严格相等运算符 === 在进行比较时不会做任何的类型转换
2) 判断数据的类型和大小
```js
console.log( 0 === false ); // false，因为被比较值的数据类型不同
```
3) 严格不想等 !==
##### 6. 对 null 和 undefined 进行比较
1) 当使用严格相等 === 比较二者时,它们不相等，因为它们属于不同的类型
2) 当使用非严格相等 == 比较二者时,JavaScript 存在一个特殊的规则，会判定它们相等
```js
console.log( null === undefined ); // false
console.log( null == undefined ); // true
```
3) **当使用数学式或其他比较方法 < > <= >= 时：null 被转化为 0，undefined 被转化为 NaN**
4) undefined 和 null 在相等性检查 == 中不会进行任何的类型转换
```js
console.log( null > 0 );  //  0 > 0      false
console.log( null == 0 ); //   此时null不进行转换 false
console.log( null >= 0 ); //  true
```
5) **undefined 不应该被与其他值进行比较**
```js
// undefined 在比较中被转换为了 NaN，而 NaN 是一个特殊的数值型值，它与任何值进行比较都会返回 false
console.log( undefined > 0 ); // false 
console.log( undefined < 0 ); // false 
// undefined 只与 null 相等，不会与其他值相等
console.log( undefined == 0 ); // false 
```

### 2.10 条件语句 
#### 1. if .... else if ...else
1) if (…) 语句会计算圆括号内的表达式，并将计算结果转换为布尔型
2) 结果为true，执行条件下的代码，结果为false，无法执行
```js
if(...) {
  语句
} else if(...) {
  语句
} else {
  语句
}
```
#### 2. 条件远算符 ?   
1) ? 也被称为三元运算符
```js
let result = condition ? value1 : value2;
// 计算条件结果，如果结果为真，则返回 value1，否则返回 value2
```
2) 三元运算符可以连续使用
```js
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
```
3) 可以使用问号 ? 来代替 if 语句,但不建议这样使用，可读性差

### 2.11 逻辑运算符
JavaScript 中有四个逻辑运算符：||（或），&&（与），!（非），??（空值合并运算符）
#### 1. ||（或）
1) a || b: 除了两个操作数ab都是 false 的情况，结果都是 true
- true || true  ------> true
- false || true ------> true
- true || false ------> true
- false || false ------> false
2) 如果操作数不是布尔值，那么它将会被转化为布尔值来参与运算
3) 或运算寻找第一个真值: result = value1 || value2 || value3;
- 从左到右依次计算操作数
- 处理每一个操作数时，都将其转化为布尔值
- 如果结果是 true，就停止计算，返回这个操作数的初始值
- 如果所有的操作数都被计算过（也就是，转换结果都是 false），则返回最后一个操作数
- 最终返回的值是操作数的初始形式，不会做布尔转换
```js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

consple.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder
```
4) || 用法
- 获取变量列表或者表达式中的第一个真值
- 短路求值
#### 2. &&（与）
1) a && b : 当两个操作数都是真值时，与运算返回 true，否则返回 false
- true && true  -------> true
- false && true -------> false
- true && false -------> false
- false && false -------> false
2) 与运算寻找第一个假值: result = value1 && value2 && value3;
- 从左到右依次计算操作数
- 在处理每一个操作数时，都将其转化为布尔值
- 如果结果是 false，就停止计算，并返回这个操作数的初始值
- 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数
```js
console.log( 1 && 2 && null && 3 ); // null
console.log( 1 && 2 && 3 ); // 3，最后一个值
```
#### 3. || 与 && 比较
1) 与运算 && 的优先级比或运算 || 要高
2) 不要用 || 或 && 来取代 if
#### 4. !（非）
1) 语法： result = !value;
- 将操作数转化为布尔类型：true/false
- 返回相反的值
2) 两个非运算 !!: 第一个非运算将该值转化为布尔类型并取反，第二个非运算再次取
3) 非运算符 ! 的优先级在所有逻辑运算符里面最高
```js
console.log( !true ); // false
console.log( !0 ); // true
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
```
#### 5. 空值合并运算符 '??'
##### 1. 特殊术语
**已定义的（defined）**: 值既不是 null 也不是 undefined 的表达式
1) a ?? b 的结果是：
- 如果 a 是已定义的，则结果为 a，
- 如果 a 不是已定义的，则结果为 b
- 即第一个参数a不是 null/undefined，则 ?? 返回第一个参数a
- 否则，返回第二个参数b
```js
let result = a ?? b;
let result1 = (a !== null && a !== undefined) ? a : b;

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个已定义的值：
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
```
2) 与||比较
- || 返回第一个 真 值
- ?? 返回第一个 已定义的(defined) 值
- || 无法区分 false、0、空字符串 "" 和 null/undefined
```js
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
```
3) ??优先级
- ?? < ||，?? 运算符的优先级为 5，|| 为 6
- ?? 运算符的优先级非常低，仅略高于 ? 和 =，因此在表达式中使用它时请考虑添加括号
- 如果没有明确添加括号，不能将其与 || 或 && 一起使用

### 2.12 循环：while和for
循环 是一种重复运行同一代码的方
#### 1. while循环
1) 语法格式：
```js
while (condition) { // 当 condition 为真时，执行循环体的 code
  // 代码
  // 所谓的“循环体”
}
```
2) 循环体的单次执行叫作 一次迭代
3) while 中的循环条件会被计算，计算结果会被转化为布尔值
4) 如果循环体只有一条语句，则可以省略大括号 {…}
```js
// while (i != 0) 可简写为 while (i)
let i = 3;
while (i) { // 当 i 变成 0 时，条件为假，循环终止
  console.log( i );
  i--;
}
```
#### 2. do…while 循环
1) 语法格式：
```js
do {
  // 循环体
} while (condition); // 循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体
```
2) 不管条件是否为真，循环体 至少执行一次
```js
let i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);
```
#### 3. for 循环(常用)
1) 语法格式：
```js
for (1begin; 2condition; 4step) {
  // ……3循环体……
}
// begin 执行一次，然后进行迭代：每次检查 condition 后，执行 body 和 step
```
2) 内联变量声明: 声明的变量只能在循环体中使用
```js
// 内联变量
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 错误，没有这个变量

// 现有变量
let j = 0;
for (j = 0; j < 3; j++) { // 使用现有的变量
  console.log(j); // 0, 1, 2
}
console.log(j); // 3，可见，因为是在循环之外声明的
```
3) for 循环的任何语句段都可以被省略
```js
// 如果在循环开始时不需要做任何事，就可以省略 begin 语句段
let i = 0; // 已经声明了 i 并对它进行了赋值

for (; i < 3; i++) { // 不再需要 "begin" 语句段
  console.log( i ); // 0, 1, 2
}

// 也可以移除 step 语句段
let k = 0;

for (; k < 3;) {
  console.log( k++ );
}

//  删除所有内容，从而创建一个无限循环
for (;;) { // for 的两个 ; 必须存在，否则会出现语法错误
  // 无限循环
}
```
#### 4. break、continue
##### 1. break
1) 强制退出,终止整个循环，将控制权传递给循环后的第一行
##### 2. continue
1) 不会停掉整个循环,而是停止当前这一次迭代，并强制启动新一轮循环(如果条件允许的话)
2) continue 指令利于减少嵌套
3) 禁止 break/continue 在 ‘?’ 的右边    三元运算符
##### 3. break/continue 标签
1) 标签是给循环体起的带有冒号的标识符
2) 标签是 break/continue 跳出嵌套循环以转到外部的唯一方法
3) break/continue 标识符;    可以跳出当前循环/执行跳转到标记循环的下一次迭代
4) 注意 break/continue 标识符  必须在循环内部使用
```js
label: {
  // ...
  break label; // 有效
  // ...
}
```
#### 5. 例题
##### 1. 重复输入，直到正确为止
> 编写一个提示用户输入大于 100 的数字的循环
> 如果用户输入其他数值 —— 请他重新输入
> 循环一直在请求一个数字，直到用户输入了一个大于 100 的数字、取消输入或输入了一个空行为止
> 在这我们假设用户只会输入数字。在本题目中，不需要对非数值输入进行特殊处理
```js
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
```
##### 2. 输出素数（prime）
> 大于 1 且不能被除了 1 和它本身以外的任何数整除的整数叫做素数
> 写一个可以输出 2 到 n 之间的所有素数的代码
```js
// 有待优化
let n = prompt("请输入一个大于1的数字:");

A: for(let i = 2; i < n; i++) {  // 自然数

    for(let j = 2; j < i; j++) { // j被除数
          if(i % j == 0) {
              continue A;  // 不是素数，终止本次迭代，进行下一次循环
        }
    }
    console.log(i);
}
```

### 2.13 switch 语句
##### 1. 语法格式
1) switch 语句有至少一个 case 代码块和一个可选的 default 代码块
2) 如果没有 break，程序将不经过任何检查就会继续执行下一个 case
3) switch 和 case 都允许任意表达式
4) 被比较的值(表达式的值和case的值)必须是相同的数据类型才能进行匹配
```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```
##### 2. case分组
1) 共享同一段代码的几个 case 分支可以被分为一组
2) 分组能力其实是 switch 语句没有 break 时的副作用
```js
let a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) 下面这两个 case 被分在一组
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}
```

### 2.14 函数
#### 1. 函数声明：创建函数
```js
// function 关键字，name函数名
// parameter1参数，多个参数用逗号分隔
// body函数体
function name(parameter1, parameter2, ... parameterN) {
  ...body...
}
// 函数调用： 函数名()
name()
```
#### 2. 局部变量和全局变量
1) 在函数内声明的变量为**局部变量**，只能在函数内使用，函数外使用会报错
2) 在函数内部可以访问函数外声明的外部变量
3) 函数对外部变量拥有全部的访问权限，也可以修改外部变量的值
4) 如果在函数内外声明了一个同名变量，那么函数使用的是内部变量，修改函数内部变量不会影响外部同名变量的值
5) 任何函数之外声明的变量，都被称为 **全局变量**
6) 请减少全局变量的使用
```js
let sex = '女'; // 外部变量，也称为全局变量
let userName = 'John';
let m = 7;

function showMessage() {
  let userName = "Bob"; // 声明一个局部变量,与外部变量userName同名
  m = -5;  // 函数内访问外部变量
  let message = 'Hello, ' + userName; // Bob  这里用的是局部变量userName
  console.log(message);
}

// 函数会创建并使用它自己的 userName
showMessage();

console.log( userName ); // John，未被更改，函数没有访问外部变量
console.log(m) // -5  
// m与userName的不同在于函数内部也声明了userName
// 函数修改的是自己声明的变量，与外部同名变量无关
```
#### 3. 参数
1) 当一个值被作为函数参数（parameter）传递时，它被称为 参数（argument）
- 参数（parameter）是函数声明中括号内列出的变量（函数声明时）
- 参数（argument）是调用函数时传递给函数的值（函数调用时）
2) 参数默认值
- 如果一个函数被调用，但有参数（argument）未被提供，那么相应的值就会变成 undefined
- 设置参数的默认值，若参数（argument）未被提供时被调用，相应的值变成了设置的值
- 默认值可以是字符串、数字或者是更复杂的函数
- 默认值是在没有传递参数时起作用
```js
function showMessage(from, text = "no text given", note) {
  console.log( from + ": " + text + ' ' + note);
}
// 只传递了第一个参数from的值
// text默认值设置为no text given
// note的值没有被提供，值变为了undefined
// 默认值可以更复杂 例如： text = notherFunction()
showMessage("Ann"); // Ann: no text given undefined
```
3) 返回值：函数可以将一个值返回到调用代码中作为结果
- 指令 return 可以在函数的任意位置,当执行到return时，函数停止，并将return 后的值作为结果返回
- 在一个函数中可能会出现很多次 return
- 只使用 return 但没有返回值也是可行的，但这会导致函数立即退出
- 空值的 return 或没有 return 的函数返回值为 undefined
- 不要在 return 与返回值之间添加新行
```js
function sum(a, b) {
  return a + b;  // a + b 作为函数的返回值
  console.log(111);  // return后的语句不会被执行
}

let result = sum(1, 2);
console.log(result); // 3

function add(m, n) {
    return; // 退出函数
    console.log(222);
}
add()
```
#### 4. 函数命名
1) 函数就是行为（action）
2) 函数名它应该简短且尽可能准确地描述函数的作用
3) 用动词前缀来开始一个函数，这个前缀模糊地描述了这个行为
4) 函数名应简明扼要且具有描述性
```js
showMessage(..)     // 显示信息
getAge(..)          // 返回 age（gets it somehow）
calcSum(..)         // 计算求和并返回结果
createForm(..)      // 创建表单（通常会返回它）
checkPermission(..) // 检查权限并返回 true/false
```
#### 5. 函数内容
1) 函数应该简短且只有一个功能
2) 如果这个函数功能复杂，那么把该函数拆分成几个小的函数
3) **函数 == 注释**:一个单独的函数不仅更容易测试和调试 —— 它的存在本身就是一个很好的注释

### 2.15 函数表达式
**无论函数是如何创建的，函数都是一个值**
#### 1. 函数表达式：创建函数
```js
// name函数名，body函数体
// name的值是一个函数，这是一个函数表达式
let name = function() {
  ...body...
};  // 这里有分号;  因为这是一个赋值语句

// 调用函数
name();
// 打印函数
console.log(name) // 输出函数
```
#### 2. 回调函数/回调
1) 把一个函数作为参数传递，在后续操作中调用
2) 没有名字的函数叫匿名函数
#### 3. 函数表达式 vs 函数声明
1) 函数声明：在主代码流中声明为单独的语句的函数
2) 函数表达式：在一个表达式中或另一个语法结构中创建的函数
3) 函数表达式创建函数是在**代码执行到达时被创建**，并且**仅从那一刻起**可用
4) 函数声明创建函数是在**函数声明被定义之前**，它就可以被调用
5) 严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的，但在代码块外不可见
6) 最好使用函数声明，因为函数在被声明之前也是可见的，仅当函数声明不适合对应的任务时，才应使用函数表达式
```js
// 函数声明
function sum(a, b) {
  return a + b;
}
// 函数表达式
let sum1 = function(a, b) {
  return a + b;
};
```

### 2.16 箭头函数
1) 格式 ： 函数名 = (参数1, 参数2, ...参数n) => {函数体}
```js
let sum = (a, b) => a + b;

/* 这个箭头函数是下面这个函数的更短的版本：

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3
```
2) 如果只有一个参数，可以省略掉参数外的圆括号，如果函数体只有一句，可以省略掉花括号 
```js
double = n => n * 2;
```
3) 如果没有参数，括号将是空的（但括号应该保留）
```js
let sayHi = () => alert("Hello!");
```
4) 函数体有多行，使用{}括起来，且有return返回值
```js
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果使用了花括号，那么需要一个显式的 “return”
};
```

### 2.17 JavaScript 特性
#### 1. 代码结构
1) 语句用分号分隔
2) 建议在每个语句后面都加上分号
3) 在代码块 {...} 后以及有代码块的语法结构（例如循环）后不需要加分号
4) 在代码块添加了「额外的」分号也不是错误，分号会被忽略的
#### 2. 严格模式
1) 在脚本顶部写上 "use strict" 指令
2) 如果没有 "use strict"，所有东西仍可以正常工作，但是某些特性的表现方式与旧式「兼容」方式相同
3) 语言的一些现代特征（比如类）会隐式地启用严格模式
#### 3. 变量
1) 声明变量:
- let
- const（不变的常量变量，不能被改变）
- var
2) 一个变量名可以由以下组成：
- 字母和数字，但是第一个字符不能是数字。
- 字符 $ 和 _ 是允许的，用法同字母
- 非拉丁字母和象形文字也是允许的，但通常不会使用
3) 有 8 种数据类型：
- number — 可以是浮点数，也可以是整数
- bigint — 用于任意长度的整数
- string — 字符串类型
- boolean — 逻辑值：true/false
- null — 具有单个值 null 的类型，表示“空”或“不存在”
- undefined — 具有单个值 undefined 的类型，表示“未分配（未定义）”
- object 和 symbol — 对于复杂的数据结构和唯一标识符
4) typeof 运算符返回值的类型，但有两个例外：
```js
typeof null == "object" // JavaScript 编程语言的设计错误
typeof function(){} == "function" // 函数被特殊对待
```
#### 4. 浏览器交互
1) prompt(question[, default])
- 提出一个问题，并返回访问者输入的内容，如果他按下「取消」则返回 null。
2) confirm(question)
- 提出一个问题，并建议用户在“确定”和“取消”之间进行选择。选择结果以 true/false 形式返回。
3) alert(message)
- 输出一个 消息
4) 这些函数都会产生 模态框，它们会暂停代码执行并阻止访问者与页面的其他部分进行交互，直到用户做出回答为止
#### 5. 运算符
1) 算数运算符
- 常规的：+ - * /（加减乘除），取余运算符 % 和幂运算符 **
2) 赋值
- 简单的赋值：a = b 和合并了其他操作的赋值：a * = 2
3) 按位运算符
- 按位运算符在最低位级上操作 32 位的整数
4) 三元运算符
- 唯一具有三个参数的操作：cond ? resultA : resultB。如果 cond 为真，则返回 resultA，否则返回 resultB
5) 逻辑运算符
- 逻辑与 && 和或 || 执行短路运算，然后返回运算停止处的值（true/false 不是必须的）。逻辑非 ! 将操作数转换为布尔值并返回其相反的值
6) 空值合并运算符
- ?? 运算符从一列变量中，选取值为已定义的值（defined value）的变量。a ?? b 的结果是 a，除非 a 为 null/undefined，这时结果是 b
7) 比较运算符
- 对不同类型的值进行相等检查时，运算符 == 会将不同类型的值转换为数字（除了 null 和 undefined，它们彼此相等而没有其他情况）
8) 其他：逗号运算符
#### 6. 循环
1) 三种循环
2) 在 for(let...) 循环内部声明的变量，只在该循环内可见。但也可以省略 let 并重用已有的变量
3) 指令 break/continue 允许退出整个循环/当前迭代。使用标签来打破嵌套循环
```js
// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
```
#### 7. switch
1) “switch” 结构可以替代多个 if 检查。它内部使用 ===（严格相等）进行比较
#### 8. 函数
1) 三种创建函数的方式
```js
// 1. 函数声明：主代码流中的函数
function sum(a, b) {
  let result = a + b;

  return result;
}
// 2. 函数表达式：表达式上下文中的函数
let sum = function(a, b) {
  let result = a + b;

  return result;
}
// 3. 箭头函数：
// 3.1 表达式在右侧
let sum = (a, b) => a + b;

// 3.2 或带 {...} 的多行语法，此处需要 return：
let sum = (a, b) => {
  // ...
  return a + b;
}

// 3.3 没有参数
let sayHi = () => alert("Hello");

// 3.4 有一个参数
let double = n => n * 2;
```
2) 函数可能具有局部变量：在函数内部声明的变量，或在其参数列表中。这类变量只在函数内部可见
3) 参数可以有默认值：function sum(a = 1, b = 2) {...}
4) 函数总是返回一些东西。如果没有 return 语句，那么返回的结果是 undefined

## 三、代码质量
### 3.1 浏览器调试
1) 调试 是指在一个脚本中找出并修复错误的过程
2) 使用 Chrome（谷歌浏览器）
3) 调试过程：
- 开发者工具 ----->  选择 Sources(资源)面板
- 资源（Sources）面板包含三个部分：
- 文件导航（File Navigator）区域列出了 HTML、JavaScript、CSS 和包括图片在内的其他依附于此页面的文件
- 代码编辑（Code Editor） 区域展示源码
- JavaScript 调试（JavaScript Debugging） 区域是用于调试的
3) 控制台（Console）:可以输入一些命令然后按下 Enter 来执行
4) 断点（Breakpoints）
- 第一种方式：点击某行代码 例如第4行，就在第4行设置了一个断点
- 断点 是调试器会自动暂停 JavaScript 执行的地方
- 第二种： 条件断点
- 在行号上 右键单击 允许你创建一个 条件 断点。只有当给定的表达式为真（即满足条件）时才会被触发
- 第三种：在代码中添加debugger 命令来暂停代码，调试器会在debugger 命令处停止
5) 设置断点之后，程序会在某行暂停执行
- 右侧的信息下拉列表查看当前的代码状态
- 察看（Watch） —— 显示任意表达式的当前值
- 调用栈（Call Stack） —— 显示嵌套的调用链
- 作用域（Scope） —— 显示当前的变量
- 作用域（Scope） —— 显示当前的变量，高亮显示
- Global 显示全局变量（不在任何函数中）
- this 关键字
5) 跟踪执行
- 右侧面板的顶部,Paused on breakpoint上面一行图标
- 第一个图标： “恢复（Resume）”：如果没有其他的断点，那么程序就会继续执行，并且调试器不会再控制程序
- 第五个图标： 下一步（Step）”：运行下一条指令
- 第二个图标：“跨步（Step over）”：运行下一条指令，但 不会进入到一个函数中，里的函数指的是：不是内建的如 alert 函数等，而是我们自己写的函数
- 第三个图标： “步入（Step into）”会进入到代码中并等待
- 第四个图标： “步出（Step out）”：继续执行到当前函数的末尾
- 第六个图标：启用/禁用所有的断点
- 第七个图标：启用/禁用出现错误时自动暂停脚本执行
6) 日志记录：console.log 函数

### 3.2 代码风格
1) 花括号：代码段的开括号位于一行的末尾，左括号前还应该有一个空格
2) 单行代码也要加花括号
```js
if (n < 0) {
  alert(`Power ${n} is not supported`);
}
```
3) 一行代码不要太长
4) 缩进：
- 水平方向上的缩进：2 或 4 个空格(空格不是 tabs)
- 垂直方向上的缩进：用于将代码拆分成逻辑块的空行
5) 每一个语句后面都应该有一个分号
6) 尽量避免代码嵌套层级过深
7) 函数位置：建议先写调用代码，再写函数
8) ESLint ：检查器（Linters）是可以自动检查代码样式，并提出改进建议的工具

### 3.3 注释
1) 注释内容
- 整体架构，高层次的观点
- 函数的用法
- 重要的解决方案，特别是在不是很明显时
2) 避免注释：
- 描述“代码如何工作”和“代码做了什么”。
- 避免在代码已经足够简单或代码有很好的自描述性而不需要注释的情况下，还写些没必要的注释
let group = console.group,
  _group = console.group,
  __group = console.group,
  groupEnd = console.groupEnd,
  _groupEnd = console.groupEnd,
  __groupEnd = console.groupEnd,
  log = console.log;

group('1. 什么是模块？');

/**
 * 模块（ Modules ）是使用不同方式加载的 JS 文件（与 JS 原先的脚本加载方式相对）。
 *
 * 模块 与脚本（ script ）有很不同的语义：
 *
 * 1.模块代码自动运行在严格模式下，并且没有任何办法跳出严格模式；
 *
 * 2.在模块的顶级作用域创建的变量，不会被自动添加到共享的全局作用域，它们只会在模块顶级作用域的内部存在；
 *
 * 3.模块顶级作用域的 this 值为 undefined ；
 *
 * 4.模块不允许在代码中使用 HTML 风格的注释（这是 JS 来自于早期浏览器的历史遗留特性）；
 *
 * 5.对于需要让模块外部代码访问的内容，模块必须导出它们；
 *
 * 6.允许模块从其他模块导入绑定。
 */

// 模块的作用是：按需导出与导入代码的能力，而不用将所有内容放在同一个文件内。

groupEnd();

group('2. 基本的导出');

// 使用 export 关键字将已发布代码部分公开给其他模块。

// 目的：导出 任意变量、函数或类声明 ，从模块中将它们公开出去。
// 注意： export 不能导出 匿名函数 或 匿名类，除非使用 default 关键字。
{
  // 导出变量数据
  export var color = 'red';
  export let name = 'Nicholas';
  export const magicNumber = 7;

  // 导出函数
  export function sum(num1, num2) {
    return num1 + num1;
  }

  // 导出类
  export class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  }

  // 此函数为模块私有
  // 此例并未导出 subtract() 函数。此函数在模块外部不可访问，因为任意没有被显式导出的变量、函数或类都会在模块内保持私有。
  function subtract(num1, num2) {
    return num1 - num2;
  }

  // 定义一个函数……                  multiply() 函数没有在定义时被导出。
  function multiply(num1, num2) {
    return num1 * num2;
  }

  // ……稍后将其导出                 不仅能导出声明，还可以导出引用。
  export { multiply };
}

groupEnd();

group('3. 基本的导入');

_group('3.1 导入单个绑定');
_groupEnd();

_group('3.2 导入多个绑定');
_groupEnd();

_group('3.3 完全导入一个模块');
_groupEnd();

_group('3.4 导入绑定的一个微妙怪异点');
_groupEnd();

groupEnd();

group('4. 重命名导出与导入');

groupEnd();

group('5. 模块的默认值');

_group('5.1 导出默认值');
_groupEnd();

_group('5.2 导入默认值');
_groupEnd();

groupEnd();

group('6. 绑定的再导出');

groupEnd();

group('7. 无绑定的导入');

groupEnd();

group('8. 加载模块');

_group('8.1 在 Web 浏览器中使用模块');

__group('8.1.1 在 script 标签中使用模块');
__groupEnd();

__group('8.1.2 Web 浏览器中的模块加载次序');
__groupEnd();

__group('8.1.3 Web 浏览器中的异步模块加载');
__groupEnd();

__group('8.1.4 将模块作为 Worker 加载');
__groupEnd();

_groupEnd();

_group('8.2 浏览器模块说明符方案');
_groupEnd();

groupEnd();

define(function(require,exports,module){
	var pg=require('./addpages.js');
	var newpages=new pg(2,30,7);
	newpages.addliElement();
})


// 想用jq怎么办
// 在此处要把jq定义下
// 如
// var $=require('./jQuery.js');
// console.log($);


// define(function(require, exports, module) {
  // console.log('module1 ---- start');
  // // require 必须执行完成过后（./module2.js加载完成）才可以拿到返回值
  // var module2 = require('./03-module2.js'); // 阻塞代码执行
  // // JS中的阻塞会有卡顿的情况出现
  // console.log('module1 ---- end');
  //
  // console.log('module1 ---- start');
  // require.async('./03-module2.js', function(module2) {

  // }); // 此处不会阻塞代码执行

  // console.log('module1 ---- end');
// });

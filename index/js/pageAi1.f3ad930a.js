(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pageAi1"],{"59ec":function(t,n,a){"use strict";a("ccd7")},a575:function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"bed-page"},[a("div",{staticClass:"box-text"},[a("h3",[t._v("NumPy中dot方法矩阵积算法解析")]),a("p",[t._v(" 在NumPy中，有一个内置方法"),a("span",{staticClass:"code"},[t._v("numpy.dot")]),t._v("，使用方法如下： ")]),a("pre",{staticClass:"code-block"},[t._v(">>> a = np.array([[1, 1], [0, 1]])\n>>> b = np.array([[2, 0], [3, 4]])\n>>> np.dot(a, b)\n    array([[5, 4],\n           [3, 4]])\n>>> np.dot(b, a)\n    array([[2, 2],\n           [3, 7]])\n    ")]),a("p",[t._v(" 究竟多维数组是如何运算得出最终的结果的？"),a("strong",[t._v("第R行第C列的结果 = 第一个矩阵的R行所有数据 * 第二个矩阵的C列所有数据 后的所有数据之和")])]),a("p",[t._v(" 具体解释一下，例如上面的例子中，我们先把多维数组用矩阵的形式表现出来，假设我们需要计算出来的结果是c ")]),a("pre",{staticClass:"code-block"},[t._v("a               b                c\n1, 1            2, 0             ?1, ?2\n0, 1            3, 4             ?3, ?4\n    ")]),a("p",[t._v(" 按照上面的规则来试着计算一下，?1是第1行第1列，所以?1的结果应该是a的第一行所有数据，即1, 1分别乘以b的第一列的所有数据，即2, 3之后的总和。那么最终结果是"),a("strong",[t._v("?1 = 1 * 2 + 1 * 3 = 5")])]),a("p",[t._v(" 同理，"),a("strong",[t._v("?2 = 1 * 0 + 1 * 4 = 4")]),t._v("，"),a("strong",[t._v("?3 = 0 * 2 + 1 * 3 = 3")]),t._v("，"),a("strong",[t._v("?4 = 0 * 0 + 1 * 4 = 4")]),t._v("。即最终的结果就是5, 4, 3, 4。另外一个矩阵积运算是同样的操作方式。 ")])]),a("div",{staticClass:"box-tip"},[a("p",[t._v("2018-05-22")])])])}],e={name:"ai1",methods:{}},o=e,r=(a("59ec"),a("2877")),v=Object(r["a"])(o,s,c,!1,null,"90025b8c",null);n["default"]=v.exports},ccd7:function(t,n,a){}}]);
//# sourceMappingURL=pageAi1.f3ad930a.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{217:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[s._v("#")]),s._v(" 定位")]),s._v(" "),a("p",[s._v("现在您已经知道了如何创建和显示精灵，让我们来看看如何定位和调整它们的大小。")]),s._v(" "),a("p",[s._v("在前面的示例中，将cat精灵添加到左上角的舞台上。猫的"),a("code",[s._v("x")]),s._v("位置为"),a("code",[s._v("0")]),s._v(","),a("code",[s._v("y")]),s._v("位置为"),a("code",[s._v("0")]),s._v("。您可以通过更改猫的"),a("code",[s._v("x")]),s._v("和"),a("code",[s._v("y")]),s._v("属性值来更改猫的位置。下面介绍通过把猫的"),a("code",[s._v("x")]),s._v("和"),a("code",[s._v("y")]),s._v("属性值设置为"),a("code",[s._v("96")]),s._v("，使其位于舞台中央。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在创建精灵之后，在setup函数的里面添加这两行代码。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Create the `cat` sprite")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sprite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/cat.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Change the sprite's position")]),s._v("\n  cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Add the cat to the stage so you can see it")]),s._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("在本例中，如前所述，"),a("code",[s._v("Sprite")]),s._v("是"),a("code",[s._v("PIXI.Sprite")]),s._v("的别名，"),a("code",[s._v("TextureCache")]),s._v("是"),a("code",[s._v("PIXI.utils.TextureCache")]),s._v("的别名，"),a("code",[s._v("resources")]),s._v("是"),a("code",[s._v("PIXI.loader.resources")]),s._v("的别名。从现在开始，示例代码中的所有Pixi对象和方法都将使用相同格式的别名")])]),s._v(" "),a("p",[s._v("这两行新代码将把猫向右移动96个像素，向下移动96个像素。显示结果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/03.png",alt:""}})]),s._v(" "),a("p",[s._v("猫的左上角(它的左耳)代表它的"),a("code",[s._v("x")]),s._v("和"),a("code",[s._v("y")]),s._v("锚点。要使猫向右移动，请增加其"),a("code",[s._v("x")]),s._v("属性的值。要使猫向下移动，请增加其"),a("code",[s._v("y")]),s._v("属性的值。如果猫的"),a("code",[s._v("x")]),s._v("值为0，那么它将位于舞台的最左边。如果它的"),a("code",[s._v("y")]),s._v("值是0，它就在舞台的最顶端。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/04.png",alt:""}})]),s._v(" "),a("p",[s._v("不需要单独设置精灵的"),a("code",[s._v("x")]),s._v("和"),a("code",[s._v("y")]),s._v("属性，您可以在一行代码中将它们设置在一起，如下所示：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sprite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
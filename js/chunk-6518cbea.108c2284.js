(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6518cbea"],{1079:function(e,a,t){"use strict";var n=t("541c");a["a"]=n["a"]},"34b6":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("2b0e"),r=t("b42e"),c=t("c637"),i=t("a723"),o=t("9b76"),s=t("365c"),l=t("cf75"),d=t("7c32"),u=t("7fa6"),b=Object(l["d"])({noBody:Object(l["c"])(i["g"],!1),rightAlign:Object(l["c"])(i["g"],!1),tag:Object(l["c"])(i["u"],"div"),verticalAlign:Object(l["c"])(i["u"],"top")},c["ub"]),p=n["default"].extend({name:c["ub"],functional:!0,props:b,render:function(e,a){var t=a.props,n=a.data,c=a.slots,i=a.scopedSlots,l=a.children,b=t.noBody,p=t.rightAlign,m=t.verticalAlign,g=b?l:[];if(!b){var h={},f=c(),y=i||{};g.push(e(u["a"],Object(s["b"])(o["i"],h,y,f)));var v=Object(s["b"])(o["c"],h,y,f);v&&g[p?"push":"unshift"](e(d["a"],{props:{right:p,verticalAlign:m}},v))}return e(t.tag,Object(r["a"])(n,{staticClass:"media"}),g)}})},"42f0":function(e,a,t){e.exports=t.p+"img/avatar-s-21.3fdebd01.jpg"},6683:function(e,a,t){e.exports=t.p+"img/avatar-s-16.037d5bcb.jpg"},7605:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{md:"6"}},[t("media-left-align")],1),t("b-col",{attrs:{md:"6"}},[t("media-right-align")],1),t("b-col",{attrs:{md:"6"}},[t("media-left-align-border")],1),t("b-col",{attrs:{md:"6"}},[t("media-right-align-border")],1),t("b-col",{attrs:{cols:"12"}},[t("media-nested")],1),t("b-col",{attrs:{cols:"12"}},[t("media-vertical-align")],1),t("b-col",{attrs:{cols:"12"}},[t("media-no-body")],1)],1)},r=[],c=t("a15b"),i=t("b28b"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("b-card-code",{attrs:{title:"Left Aligned Media Objects"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLeftAlign)+" ")]},proxy:!0}])},[n("b-card-text",[e._v(" The "),n("code",[e._v("media object")]),e._v(" helps build complex and repetitive components where some media is positioned alongside content that doesn't wrap around said media. Plus, it does this with only two required classes thanks to flexbox. ")]),n("div",{staticClass:"media-list"},[n("b-media",{attrs:{"vertical-align":"top"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("26fa"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Cookie candy ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy. ")])],1),n("b-media",{attrs:{"vertical-align":"top"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("fa7b"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Tootsie roll dessert ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie roll gingerbread croissant chupa chups. ")])],1),n("b-media",{attrs:{"vertical-align":"top"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("b7fa"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Tootsie roll dessert ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie roll gingerbread croissant chupa chups. ")])],1)],1)],1)},s=[],l=t("1079"),d=t("34b6"),u=t("4918"),b=t("d6e4"),p='\n<template>\n  <div class="media-list">\n    <b-media vertical-align="top">\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-3.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h4 class="media-heading">\n        Cookie candy\n      </h4>\n      <b-card-text class="mb-0">\n        Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy.\n      </b-card-text>\n    </b-media>\n    <b-media vertical-align="top">\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-6.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h4 class="media-heading">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text class="mb-0">\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n    <b-media vertical-align="top">\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-1.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h4 class="media-heading">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text class="mb-0">\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="media-list media-bordered">\n    <b-media>\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-23.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h4 class="media-heading">\n        Cookie candy\n      </h4>\n      <b-card-text>\n        Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.\n        Brownie lemon drops chocolate cake donut croissant cotton candy.\n      </b-card-text>\n    </b-media>\n\n    <b-media>\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-16.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h4 class="media-heading">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text>\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n\n    <b-media>\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-15.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h4 class="media-heading">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text>\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n<\/script>\n',g='\n<template>\n  <b-media>\n    <template #aside>\n      <b-img\n        :src="require(\'@/assets/images/portrait/small/avatar-s-12.jpg\')"\n        blank-color="#ccc"\n        width="64"\n        alt="placeholder"\n      />\n    </template>\n\n    <h5 class="mt-0">\n      Media heading\n    </h5>\n    <b-card-text>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n      vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n      lacinia congue felis in faucibus.\n    </b-card-text>\n\n    <b-media class="mt-3">\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-13.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n\n      <h5 class="mt-0">\n        Media heading\n      </h5>\n      <b-card-text class="mb-0">\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n        lacinia congue felis in faucibus.\n      </b-card-text>\n    </b-media>\n  </b-media>\n</template>\n\n<script>\nimport { BMedia, BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n<\/script>\n',h='\n<template>\n  <div class="media-list">\n    <b-media\n      right-align\n      vertical-align="top"\n      class="text-right"\n    >\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n          rounded="circle"\n        />\n      </template>\n      <h4 class="media-heading">\n        Oat cake\n      </h4>\n      <b-card-text class="mb-0">\n        Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee\n        donut. Chocolate pie croissant gummi bears muffin dessert chocolate. Generic placeholder image\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      vertical-align="top"\n      class="text-right"\n    >\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n          rounded="circle"\n        />\n      </template>\n      <h4 class="media-heading">\n        Jelly chocolate cake\n      </h4>\n      <b-card-text class="mb-0">\n        Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n        snaps.Jelly beans cake chocolate cake gummi bears lollipop.\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      vertical-align="top"\n      class="text-right"\n    >\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-2.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n          rounded="circle"\n        />\n      </template>\n      <h4 class="media-heading">\n        Pudding marshmallow\n      </h4>\n      <b-card-text class="mb-0">\n        Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon\n        drops brownie biscuit jelly-o biscuit gummies.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  }\n}\n<\/script>\n',f='\n<template>\n  <div class="media-list media-bordered">\n    <b-media\n      right-align\n      class="text-right"\n    >\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-9.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n          rounded="circle"\n        />\n      </template>\n      <h4 class="media-heading">\n        Chupa chups candy\n      </h4>\n      <b-card-text>\n        Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.\n        Brownie lemon drops chocolate cake donut croissant cotton candy.\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      class="text-right"\n    >\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-14.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n          rounded="circle"\n        />\n      </template>\n      <h4 class="media-heading">\n        Chocolate pudding\n      </h4>\n      <b-card-text>\n        Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n        snaps.Jelly beans cake chocolate cake gummi bears lollipop.\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      class="text-right"\n    >\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-21.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n          rounded="circle"\n        />\n      </template>\n      <h4 class="media-heading">\n        Cotton candy jelly\n      </h4>\n      <b-card-text>\n        Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon\n        drops brownie biscuit jelly-o biscuit gummies.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n<\/script>\n',y='\n<template>\n  <div class="media-list media-bordered">\n    <b-media vertical-align="top">\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-4.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h5>\n        Top Aligned Media\n      </h5>\n      <b-card-text>\n        Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      </b-card-text>\n    </b-media>\n\n    <b-media vertical-align="center">\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-1.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h5 class="mt-1">\n        Middle Aligned Media\n      </h5>\n      <b-card-text>\n        Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      </b-card-text>\n    </b-media>\n\n    <b-media vertical-align="bottom">\n      <template #aside>\n        <b-img\n          :src="require(\'@/assets/images/portrait/small/avatar-s-16.jpg\')"\n          blank-color="#ccc"\n          width="64"\n          alt="placeholder"\n        />\n      </template>\n      <h5 class="mt-1">\n        Bottom Aligned Media\n      </h5>\n      <b-card-text class="mb-0">\n        Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n<\/script>\n',v='\n<template>\n  <b-media no-body>\n    <b-media-aside>\n      <b-img\n        :src="require(\'@/assets/images/portrait/small/avatar-s-2.jpg\')"\n        blank-color="#ccc"\n        fluid\n        alt="placeholder"\n      />\n    </b-media-aside>\n\n    <b-media-body class="ml-1">\n      <h5 class="mt-0">\n        Media Title\n      </h5>\n      <b-card-text>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n        lacinia congue felis in faucibus.\n      </b-card-text>\n      <b-card-text class="mb-1">\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et\n        magnis dis parturient montes, nascetur ridiculus mus.\n      </b-card-text>\n\n      <b-media no-body>\n        <b-media-aside>\n          <b-img\n            :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n            blank-color="#ccc"\n            width="64"\n            alt="placeholder"\n          />\n        </b-media-aside>\n        <b-media-body class="ml-1">\n          <h5 class="mt-0">\n            Nested Media\n          </h5>\n          <b-card-text>Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</b-card-text>\n        </b-media-body>\n      </b-media>\n    </b-media-body>\n  </b-media>\n</template>\n\n<script>\nimport { BMedia, BImg, BMediaAside, BMediaBody } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n    BMediaAside,\n    BMediaBody,\n  },\n}\n<\/script>\n',k={components:{BCardCode:l["a"],BMedia:d["a"],BImg:u["a"],BCardText:b["a"]},data:function(){return{codeLeftAlign:p}}},j=k,w=t("2877"),C=Object(w["a"])(j,o,s,!1,null,null,null),x=C.exports,O=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("b-card-code",{attrs:{title:"Right Aligned Media With Round Images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeRightAlign)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Change the order of content in media objects by adding ")]),n("code",[e._v("right-align")]),n("span",[e._v(" property.")]),n("span",[e._v("For image circle ")]),n("code",[e._v('rounded="circle"')]),n("span",[e._v(" prop with ")]),n("code",[e._v("<b-img>.")]),n("span",[e._v("Use class ")]),n("code",[e._v("text-right")]),n("span",[e._v(" for text right.")])]),n("div",{staticClass:"media-list"},[n("b-media",{staticClass:"text-right",attrs:{"right-align":"","vertical-align":"top"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("351c"),"blank-color":"#ccc",width:"64",alt:"placeholder",rounded:"circle"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Oat cake ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut. Chocolate pie croissant gummi bears muffin dessert chocolate. Generic placeholder image ")])],1),n("b-media",{staticClass:"text-right",attrs:{"right-align":"","vertical-align":"top"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("b690"),"blank-color":"#ccc",width:"64",alt:"placeholder",rounded:"circle"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Jelly chocolate cake ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake chocolate cake gummi bears lollipop. ")])],1),n("b-media",{staticClass:"text-right",attrs:{"right-align":"","vertical-align":"top"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("3423"),"blank-color":"#ccc",width:"64",alt:"placeholder",rounded:"circle"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Pudding marshmallow ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops brownie biscuit jelly-o biscuit gummies. ")])],1)],1)],1)},_=[],B={components:{BCardCode:l["a"],BCardText:b["a"],BMedia:d["a"],BImg:u["a"]},data:function(){return{codeRightAlign:h}}},M=B,S=Object(w["a"])(M,O,_,!1,null,null,null),q=S.exports,A=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("b-card-code",{attrs:{title:"Left Aligned Bordered Media"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLeftAlignBorder)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Wrap media list using ")]),n("code",[e._v(".media-bordered")]),n("span",[e._v(" class for bordered Media Object.")])]),n("div",{staticClass:"media-list media-bordered"},[n("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("d0db"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Cookie candy ")]),n("b-card-text",[e._v(" Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy. ")])],1),n("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("6683"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Tootsie roll dessert ")]),n("b-card-text",[e._v(" Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie roll gingerbread croissant chupa chups. ")])],1),n("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("e4ed"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Tootsie roll dessert ")]),n("b-card-text",[e._v(" Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie roll gingerbread croissant chupa chups. ")])],1)],1)],1)},T=[],P={components:{BCardCode:l["a"],BMedia:d["a"],BCardText:b["a"],BImg:u["a"]},data:function(){return{codeLeftAlignBorder:m}}},D=P,I=Object(w["a"])(D,A,T,!1,null,null,null),J=I.exports,L=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("b-card-code",{attrs:{title:"Right Aligned Bordered Media"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeRightAlignBorder)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Wrap media list using ")]),n("code",[e._v(".media-bordered")]),n("span",[e._v(" class for bordered Media Object.")])]),n("div",{staticClass:"media-list media-bordered"},[n("b-media",{staticClass:"text-right",attrs:{"right-align":""},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("f2be"),"blank-color":"#ccc",width:"64",alt:"placeholder",rounded:"circle"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Chupa chups candy ")]),n("b-card-text",[e._v(" Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy. ")])],1),n("b-media",{staticClass:"text-right",attrs:{"right-align":""},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("12d0"),"blank-color":"#ccc",width:"64",alt:"placeholder",rounded:"circle"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Chocolate pudding ")]),n("b-card-text",[e._v(" Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake chocolate cake gummi bears lollipop. ")])],1),n("b-media",{staticClass:"text-right",attrs:{"right-align":""},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("42f0"),"blank-color":"#ccc",width:"64",alt:"placeholder",rounded:"circle"}})]},proxy:!0}])},[n("h4",{staticClass:"media-heading"},[e._v(" Cotton candy jelly ")]),n("b-card-text",[e._v(" Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops brownie biscuit jelly-o biscuit gummies. ")])],1)],1)],1)},N=[],z={components:{BCardCode:l["a"],BMedia:d["a"],BCardText:b["a"],BImg:u["a"]},data:function(){return{codeRightAlignBorder:f}}},E=z,F=Object(w["a"])(E,L,N,!1,null,null,null),R=F.exports,$=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("b-card-code",{attrs:{title:"Nested Media"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeNested)+" ")]},proxy:!0}])},[n("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("bb8e"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h5",{staticClass:"mt-0"},[e._v(" Media heading ")]),n("b-card-text",[e._v(" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")]),n("b-media",{staticClass:"mt-3",scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("ecc1"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h5",{staticClass:"mt-0"},[e._v(" Media heading ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],1)],1)],1)},V=[],G={components:{BCardCode:l["a"],BMedia:d["a"],BCardText:b["a"],BImg:u["a"]},data:function(){return{codeNested:g}}},W=G,H=Object(w["a"])(W,$,V,!1,null,null,null),U=H.exports,K=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("b-card-code",{attrs:{title:"Vertical align"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVerticalAlign)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Aside can be vertical aligned using ")]),n("code",[e._v("vertical-align")]),n("span",[e._v(" should be either ")]),n("code",[e._v("top, center")]),n("span",[e._v(" or ")]),n("code",[e._v("end")]),n("span",[e._v(" . Default is ")]),n("code",[e._v("top")]),e._v(". ")]),n("div",{staticClass:"media-list media-bordered"},[n("b-media",{attrs:{"vertical-align":"top"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("fbb2"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h5",[e._v(" Top Aligned Media ")]),n("b-card-text",[e._v(" Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry. Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps. ")])],1),n("b-media",{attrs:{"vertical-align":"center"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("b7fa"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h5",{staticClass:"mt-1"},[e._v(" Middle Aligned Media ")]),n("b-card-text",[e._v(" Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry. Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps. ")])],1),n("b-media",{attrs:{"vertical-align":"bottom"},scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t("6683"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[n("h5",{staticClass:"mt-1"},[e._v(" Bottom Aligned Media ")]),n("b-card-text",{staticClass:"mb-0"},[e._v(" Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry. Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps. ")])],1)],1)],1)},Q=[],X={components:{BCardCode:l["a"],BCardText:b["a"],BMedia:d["a"],BImg:u["a"]},data:function(){return{codeVerticalAlign:y}}},Y=X,Z=Object(w["a"])(Y,K,Q,!1,null,null,null),ee=Z.exports,ae=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("b-card-code",{attrs:{title:"No body (with sub-components)"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeNoBody)+" ")]},proxy:!0}])},[n("b-media",{attrs:{"no-body":""}},[n("b-media-aside",[n("b-img",{attrs:{src:t("3423"),"blank-color":"#ccc",fluid:"",alt:"placeholder"}})],1),n("b-media-body",{staticClass:"ml-1"},[n("h5",{staticClass:"mt-0"},[e._v(" Media Title ")]),n("b-card-text",[e._v(" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")]),n("b-card-text",{staticClass:"mb-1"},[e._v(" Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),n("b-media",{attrs:{"no-body":""}},[n("b-media-aside",[n("b-img",{attrs:{src:t("351c"),"blank-color":"#ccc",width:"64",alt:"placeholder"}})],1),n("b-media-body",{staticClass:"ml-1"},[n("h5",{staticClass:"mt-0"},[e._v(" Nested Media ")]),n("b-card-text",[e._v("Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")])],1)],1)],1)],1)],1)},te=[],ne=t("7c32"),re=t("7fa6"),ce={components:{BCardCode:l["a"],BMedia:d["a"],BImg:u["a"],BMediaAside:ne["a"],BCardText:b["a"],BMediaBody:re["a"]},data:function(){return{codeNoBody:v}}},ie=ce,oe=Object(w["a"])(ie,ae,te,!1,null,null,null),se=oe.exports,le={components:{BRow:c["a"],BCol:i["a"],MediaLeftAlign:x,MediaRightAlign:q,MediaLeftAlignBorder:J,MediaRightAlignBorder:R,MediaNested:U,MediaVerticalAlign:ee,MediaNoBody:se}},de=le,ue=Object(w["a"])(de,n,r,!1,null,null,null);a["default"]=ue.exports},"7c32":function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("2b0e"),r=t("b42e"),c=t("c637"),i=t("a723"),o=t("cf75");function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var l=Object(o["d"])({right:Object(o["c"])(i["g"],!1),tag:Object(o["c"])(i["u"],"div"),verticalAlign:Object(o["c"])(i["u"],"top")},c["vb"]),d=n["default"].extend({name:c["vb"],functional:!0,props:l,render:function(e,a){var t=a.props,n=a.data,c=a.children,i=t.verticalAlign,o="top"===i?"start":"bottom"===i?"end":i;return e(t.tag,Object(r["a"])(n,{staticClass:"media-aside",class:s({"media-aside-right":t.right},"align-self-".concat(o),o)}),c)}})},"7fa6":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("2b0e"),r=t("b42e"),c=t("c637"),i=t("a723"),o=t("cf75"),s=Object(o["d"])({tag:Object(o["c"])(i["u"],"div")},c["wb"]),l=n["default"].extend({name:c["wb"],functional:!0,props:s,render:function(e,a){var t=a.props,n=a.data,c=a.children;return e(t.tag,Object(r["a"])(n,{staticClass:"media-body"}),c)}})},a15b:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var n=t("b42e"),r=t("c637"),c=t("a723"),i=t("2326"),o=t("228e"),s=t("6c06"),l=t("b508"),d=t("d82f"),u=t("cf75"),b=t("fa73");function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){g(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function g(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var h=["start","end","center"],f=Object(l["a"])((function(e,a){return a=Object(b["h"])(Object(b["g"])(a)),a?Object(b["c"])(["row-cols",e,a].filter(s["a"]).join("-")):null})),y=Object(l["a"])((function(e){return Object(b["c"])(e.replace("cols",""))})),v=[],k=function(){var e=Object(o["b"])().reduce((function(e,a){return e[Object(u["g"])(a,"cols")]=Object(u["c"])(c["p"]),e}),Object(d["c"])(null));return v=Object(d["h"])(e),Object(u["d"])(Object(d["m"])(m(m({},e),{},{alignContent:Object(u["c"])(c["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(h,"between","around","stretch"),e)})),alignH:Object(u["c"])(c["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(h,"between","around"),e)})),alignV:Object(u["c"])(c["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(h,"baseline","stretch"),e)})),noGutters:Object(u["c"])(c["g"],!1),tag:Object(u["c"])(c["u"],"div")})),r["Ob"])},j={name:r["Ob"],functional:!0,get props(){return delete this.props,this.props=k(),this.props},render:function(e,a){var t,r=a.props,c=a.data,i=a.children,o=r.alignV,s=r.alignH,l=r.alignContent,d=[];return v.forEach((function(e){var a=f(y(e),r[e]);a&&d.push(a)})),d.push((t={"no-gutters":r.noGutters},g(t,"align-items-".concat(o),o),g(t,"justify-content-".concat(s),s),g(t,"align-content-".concat(l),l),t)),e(r.tag,Object(n["a"])(c,{staticClass:"row",class:d}),i)}}},b28b:function(e,a,t){"use strict";t.d(a,"a",(function(){return C}));var n=t("b42e"),r=t("c637"),c=t("a723"),i=t("992e"),o=t("2326"),s=t("228e"),l=t("6c06"),d=t("7b1e"),u=t("b508"),b=t("d82f"),p=t("cf75"),m=t("fa73");function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(Object(t),!0).forEach((function(a){f(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function f(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var y=["auto","start","end","center","baseline","stretch"],v=function(e,a,t){var n=e;if(!Object(d["p"])(t)&&!1!==t)return a&&(n+="-".concat(a)),"col"!==e||""!==t&&!0!==t?(n+="-".concat(t),Object(m["c"])(n)):Object(m["c"])(n)},k=Object(u["a"])(v),j=Object(b["c"])(null),w=function(){var e=Object(s["b"])().filter(l["a"]),a=e.reduce((function(e,a){return e[a]=Object(p["c"])(c["i"]),e}),Object(b["c"])(null)),t=e.reduce((function(e,a){return e[Object(p["g"])(a,"offset")]=Object(p["c"])(c["p"]),e}),Object(b["c"])(null)),n=e.reduce((function(e,a){return e[Object(p["g"])(a,"order")]=Object(p["c"])(c["p"]),e}),Object(b["c"])(null));return j=Object(b["a"])(Object(b["c"])(null),{col:Object(b["h"])(a),offset:Object(b["h"])(t),order:Object(b["h"])(n)}),Object(p["d"])(Object(b["m"])(h(h(h(h({},a),t),n),{},{alignSelf:Object(p["c"])(c["u"],null,(function(e){return Object(o["a"])(y,e)})),col:Object(p["c"])(c["g"],!1),cols:Object(p["c"])(c["p"]),offset:Object(p["c"])(c["p"]),order:Object(p["c"])(c["p"]),tag:Object(p["c"])(c["u"],"div")})),r["y"])},C={name:r["y"],functional:!0,get props(){return delete this.props,this.props=w()},render:function(e,a){var t,r=a.props,c=a.data,o=a.children,s=r.cols,l=r.offset,d=r.order,u=r.alignSelf,b=[];for(var p in j)for(var m=j[p],g=0;g<m.length;g++){var h=k(p,m[g].replace(p,""),r[m[g]]);h&&b.push(h)}var y=b.some((function(e){return i["e"].test(e)}));return b.push((t={col:r.col||!y&&!s},f(t,"col-".concat(s),s),f(t,"offset-".concat(l),l),f(t,"order-".concat(d),d),f(t,"align-self-".concat(u),u),t)),e(r.tag,Object(n["a"])(c,{class:b}),o)}}},d6e4:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("2b0e"),r=t("b42e"),c=t("c637"),i=t("a723"),o=t("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(i["u"],"p")},c["u"]),l=n["default"].extend({name:c["u"],functional:!0,props:s,render:function(e,a){var t=a.props,n=a.data,c=a.children;return e(t.textTag,Object(r["a"])(n,{staticClass:"card-text"}),c)}})}}]);
//# sourceMappingURL=chunk-6518cbea.108c2284.js.map
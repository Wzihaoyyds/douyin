if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$8 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, " 页面 - 1 ");
  }
  const PagesTabbarTabbar1Tabbar1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/Project/douyin/pages/tabbar/tabbar-1/tabbar-1.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, " 页面 - 2 ");
  }
  const PagesTabbarTabbar2Tabbar2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/Project/douyin/pages/tabbar/tabbar-2/tabbar-2.vue"]]);
  const _imports_0 = "/static/logo.png";
  const _imports_1 = "/static/img/release.png";
  const _imports_2 = "/static/img/video.png";
  const _imports_3 = "/static/img/qa.png";
  const _sfc_main$6 = {
    data() {
      return {
        active: false
      };
    },
    onLoad() {
    },
    onShow() {
      this.active = true;
    },
    onHide() {
      this.active = false;
    },
    methods: {
      goToPage(url) {
        if (!url)
          return;
        uni.navigateTo({
          url
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["content", { "active": $data.active }])
      },
      [
        vue.createElementVNode(
          "image",
          {
            class: vue.normalizeClass(["logo", { "active": $data.active }]),
            src: _imports_0,
            mode: "aspectFit"
          },
          null,
          2
          /* CLASS */
        ),
        vue.createElementVNode("view", { class: "tabbar-box-wrap" }, [
          vue.createElementVNode("view", { class: "tabbar-box" }, [
            vue.createElementVNode("view", {
              class: "tabbar-box-item",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.goToPage("/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release"))
            }, [
              vue.createElementVNode("image", {
                class: "box-image",
                src: _imports_1,
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", { class: "explain" }, "发图文")
            ]),
            vue.createElementVNode("view", {
              class: "tabbar-box-item",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.goToPage("/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video"))
            }, [
              vue.createElementVNode("image", {
                class: "box-image",
                src: _imports_2,
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", { class: "explain" }, "发视频")
            ]),
            vue.createElementVNode("view", {
              class: "tabbar-box-item",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.goToPage("/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa"))
            }, [
              vue.createElementVNode("image", {
                class: "box-image",
                src: _imports_3,
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", { class: "explain" }, "提问")
            ])
          ])
        ])
      ],
      2
      /* CLASS */
    );
  }
  const PagesTabbarTabbar3Tabbar3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-afdd7fb7"], ["__file", "D:/Project/douyin/pages/tabbar/tabbar-3/tabbar-3.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, " 页面 - 4 ");
  }
  const PagesTabbarTabbar4Tabbar4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/Project/douyin/pages/tabbar/tabbar-4/tabbar-4.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, " 页面 - 5 ");
  }
  const PagesTabbarTabbar5Tabbar5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/Project/douyin/pages/tabbar/tabbar-5/tabbar-5.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, " 页面 - 发图文 ");
  }
  const PagesTabbar3DetialTabbar3ReleaseTabbar3Release = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Project/douyin/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, " 页面 - 发视频 ");
  }
  const PagesTabbar3DetialTabbar3VideoTabbar3Video = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Project/douyin/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, " 页面 - 提问 ");
  }
  const PagesTabbar3DetialTabbar3QaTabbar3Qa = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Project/douyin/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa.vue"]]);
  __definePage("pages/tabbar/tabbar-1/tabbar-1", PagesTabbarTabbar1Tabbar1);
  __definePage("pages/tabbar/tabbar-2/tabbar-2", PagesTabbarTabbar2Tabbar2);
  __definePage("pages/tabbar/tabbar-3/tabbar-3", PagesTabbarTabbar3Tabbar3);
  __definePage("pages/tabbar/tabbar-4/tabbar-4", PagesTabbarTabbar4Tabbar4);
  __definePage("pages/tabbar/tabbar-5/tabbar-5", PagesTabbarTabbar5Tabbar5);
  __definePage("pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release", PagesTabbar3DetialTabbar3ReleaseTabbar3Release);
  __definePage("pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video", PagesTabbar3DetialTabbar3VideoTabbar3Video);
  __definePage("pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa", PagesTabbar3DetialTabbar3QaTabbar3Qa);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      setTimeout(() => {
        uni.setTabBarBadge({
          index: 1,
          text: "31"
        });
        uni.showTabBarRedDot({
          index: 3
        });
      }, 1e3);
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:17", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:20", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Project/douyin/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);

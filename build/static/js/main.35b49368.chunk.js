(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    38: function (e, n, t) {
      e.exports = t.p + "static/media/logo.5d5d9eef.svg";
    },
    42: function (e, n, t) {
      e.exports = t(96);
    },
    47: function (e, n, t) {},
    48: function (e, n, t) {},
    55: function (e, n) {},
    57: function (e, n) {},
    66: function (e, n) {},
    68: function (e, n) {},
    96: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t(3),
        c = t.n(o),
        a = t(34),
        i = t.n(a),
        r = (t(47), t(35)),
        s = t(36),
        l = t(40),
        u = t(37),
        f = t(41),
        p = t(38),
        d = t.n(p),
        h = (t(48), t(39)),
        m = t.n(h),
        g = (function (e) {
          function n() {
            return (
              Object(r.a)(this, n),
              Object(l.a)(this, Object(u.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(n, e),
            Object(s.a)(n, [
              {
                key: "onListenClick",
                value: function () {
                  fetch("http://localhost:3001/api/speech-to-text/token")
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (e) {
                      var n = m()({
                        access_token: e,
                        objectMode: !0,
                        extractResults: !0,
                        format: !1,
                      });
                      n.on("data", function (e) {
                        console.log(e);
                      }),
                        n.on("error", function (e) {
                          console.log(e);
                        }),
                        (document.querySelector("#stop").onclick =
                          n.stop.bind(n));
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    "div",
                    { className: "App" },
                    c.a.createElement(
                      "header",
                      { className: "App-header" },
                      c.a.createElement("img", {
                        src: d.a,
                        className: "App-logo",
                        alt: "logo",
                      }),
                      c.a.createElement(
                        "button",
                        { className: "btn", onClick: this.onListenClick },
                        "Listen to Mic"
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(o.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(c.a.createElement(g, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[42, 1, 2]],
]);
//# sourceMappingURL=main.35b49368.chunk.js.map

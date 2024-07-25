(() => {
  var M_ = Object.create;
  var tn = Object.defineProperty;
  var D_ = Object.getOwnPropertyDescriptor;
  var F_ = Object.getOwnPropertyNames;
  var G_ = Object.getPrototypeOf,
    V_ = Object.prototype.hasOwnProperty;
  var se = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Re = (e, t) => {
      for (var r in t) tn(e, r, { get: t[r], enumerable: !0 });
    },
    xs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of F_(t))
          !V_.call(e, o) &&
            o !== r &&
            tn(e, o, {
              get: () => t[o],
              enumerable: !(n = D_(t, o)) || n.enumerable,
            });
      return e;
    };
  var ee = (e, t, r) => (
      (r = e != null ? M_(G_(e)) : {}),
      xs(
        t || !e || !e.__esModule
          ? tn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Ye = (e) => xs(tn({}, "__esModule", { value: !0 }), e);
  var Si = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, g) {
        var y = new D.Bare();
        return y.init(l, g);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (g) {
          return "-" + g.toLowerCase();
        });
      }
      function n(l) {
        var g = parseInt(l.slice(1), 16),
          y = (g >> 16) & 255,
          I = (g >> 8) & 255,
          L = 255 & g;
        return [y, I, L];
      }
      function o(l, g, y) {
        return (
          "#" + ((1 << 24) | (l << 16) | (g << 8) | y).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, g) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof g + "] " + g);
      }
      function s(l, g, y) {
        f("Units do not match [" + l + "]: " + g + ", " + y);
      }
      function u(l, g, y) {
        if ((g !== void 0 && (y = g), l === void 0)) return y;
        var I = y;
        return (
          xt.test(l) || !Jr.test(l)
            ? (I = parseInt(l, 10))
            : Jr.test(l) && (I = 1e3 * parseFloat(l)),
          0 > I && (I = 0),
          I === I ? I : y
        );
      }
      function f(l) {
        ue.debug && window && window.console.warn(l);
      }
      function h(l) {
        for (var g = -1, y = l ? l.length : 0, I = []; ++g < y; ) {
          var L = l[g];
          L && I.push(L);
        }
        return I;
      }
      var d = (function (l, g, y) {
          function I(Y) {
            return typeof Y == "object";
          }
          function L(Y) {
            return typeof Y == "function";
          }
          function w() {}
          function H(Y, ae) {
            function F() {
              var be = new $();
              return L(be.init) && be.init.apply(be, arguments), be;
            }
            function $() {}
            ae === y && ((ae = Y), (Y = Object)), (F.Bare = $);
            var Z,
              pe = (w[l] = Y[l]),
              Ke = ($[l] = F[l] = new w());
            return (
              (Ke.constructor = F),
              (F.mixin = function (be) {
                return ($[l] = F[l] = H(F, be)[l]), F;
              }),
              (F.open = function (be) {
                if (
                  ((Z = {}),
                  L(be) ? (Z = be.call(F, Ke, pe, F, Y)) : I(be) && (Z = be),
                  I(Z))
                )
                  for (var vr in Z) g.call(Z, vr) && (Ke[vr] = Z[vr]);
                return L(Ke.init) || (Ke.init = Y), F;
              }),
              F.open(ae)
            );
          }
          return H;
        })("prototype", {}.hasOwnProperty),
        v = {
          ease: [
            "ease",
            function (l, g, y, I) {
              var L = (l /= I) * l,
                w = L * l;
              return (
                g +
                y * (-2.75 * w * L + 11 * L * L + -15.5 * w + 8 * L + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, g, y, I) {
              var L = (l /= I) * l,
                w = L * l;
              return g + y * (-1 * w * L + 3 * L * L + -3 * w + 2 * L);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, g, y, I) {
              var L = (l /= I) * l,
                w = L * l;
              return (
                g +
                y * (0.3 * w * L + -1.6 * L * L + 2.2 * w + -1.8 * L + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, g, y, I) {
              var L = (l /= I) * l,
                w = L * l;
              return g + y * (2 * w * L + -5 * L * L + 2 * w + 2 * L);
            },
          ],
          linear: [
            "linear",
            function (l, g, y, I) {
              return (y * l) / I + g;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, g, y, I) {
              return y * (l /= I) * l + g;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, g, y, I) {
              return -y * (l /= I) * (l - 2) + g;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l + g
                : (-y / 2) * (--l * (l - 2) - 1) + g;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, g, y, I) {
              return y * (l /= I) * l * l + g;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, g, y, I) {
              return y * ((l = l / I - 1) * l * l + 1) + g;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l * l + g
                : (y / 2) * ((l -= 2) * l * l + 2) + g;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, g, y, I) {
              return y * (l /= I) * l * l * l + g;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, g, y, I) {
              return -y * ((l = l / I - 1) * l * l * l - 1) + g;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l * l * l + g
                : (-y / 2) * ((l -= 2) * l * l * l - 2) + g;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, g, y, I) {
              return y * (l /= I) * l * l * l * l + g;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, g, y, I) {
              return y * ((l = l / I - 1) * l * l * l * l + 1) + g;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l * l * l * l + g
                : (y / 2) * ((l -= 2) * l * l * l * l + 2) + g;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, g, y, I) {
              return -y * Math.cos((l / I) * (Math.PI / 2)) + y + g;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, g, y, I) {
              return y * Math.sin((l / I) * (Math.PI / 2)) + g;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, g, y, I) {
              return (-y / 2) * (Math.cos((Math.PI * l) / I) - 1) + g;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, g, y, I) {
              return l === 0 ? g : y * Math.pow(2, 10 * (l / I - 1)) + g;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, g, y, I) {
              return l === I
                ? g + y
                : y * (-Math.pow(2, (-10 * l) / I) + 1) + g;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, g, y, I) {
              return l === 0
                ? g
                : l === I
                ? g + y
                : (l /= I / 2) < 1
                ? (y / 2) * Math.pow(2, 10 * (l - 1)) + g
                : (y / 2) * (-Math.pow(2, -10 * --l) + 2) + g;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, g, y, I) {
              return -y * (Math.sqrt(1 - (l /= I) * l) - 1) + g;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, g, y, I) {
              return y * Math.sqrt(1 - (l = l / I - 1) * l) + g;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (-y / 2) * (Math.sqrt(1 - l * l) - 1) + g
                : (y / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + g;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, g, y, I, L) {
              return (
                L === void 0 && (L = 1.70158),
                y * (l /= I) * l * ((L + 1) * l - L) + g
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, g, y, I, L) {
              return (
                L === void 0 && (L = 1.70158),
                y * ((l = l / I - 1) * l * ((L + 1) * l + L) + 1) + g
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, g, y, I, L) {
              return (
                L === void 0 && (L = 1.70158),
                (l /= I / 2) < 1
                  ? (y / 2) * l * l * (((L *= 1.525) + 1) * l - L) + g
                  : (y / 2) *
                      ((l -= 2) * l * (((L *= 1.525) + 1) * l + L) + 2) +
                    g
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        _ = document,
        E = window,
        P = "bkwld-tram",
        x = /[\-\.0-9]/g,
        A = /[A-Z]/,
        b = "number",
        C = /^(rgb|#)/,
        N = /(em|cm|mm|in|pt|pc|px)$/,
        S = /(em|cm|mm|in|pt|pc|px|%)$/,
        V = /(deg|rad|turn)$/,
        X = "unitless",
        W = /(all|none) 0s ease 0s/,
        B = /^(width|height)$/,
        j = " ",
        M = _.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        q = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var g,
            y,
            I = "",
            L = l.split("-");
          for (g = 0; g < L.length; g++)
            I += L[g].charAt(0).toUpperCase() + L[g].slice(1);
          for (g = 0; g < T.length; g++)
            if (((y = T[g] + I), y in M.style))
              return { dom: y, css: q[g] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (G.transition) {
        var z = G.timing.dom;
        if (((M.style[z] = v["ease-in-back"][0]), !M.style[z]))
          for (var K in m) v[K][0] = m[K];
      }
      var te = (t.frame = (function () {
          var l =
            E.requestAnimationFrame ||
            E.webkitRequestAnimationFrame ||
            E.mozRequestAnimationFrame ||
            E.oRequestAnimationFrame ||
            E.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(E)
            : function (g) {
                E.setTimeout(g, 16);
              };
        })()),
        Ie = (t.now = (function () {
          var l = E.performance,
            g = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return g && G.bind
            ? g.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = d(function (l) {
          function g(k, J) {
            var le = h(("" + k).split(j)),
              ne = le[0];
            J = J || {};
            var Oe = vt[ne];
            if (!Oe) return f("Unsupported property: " + ne);
            if (!J.weak || !this.props[ne]) {
              var Ge = Oe[0],
                we = this.props[ne];
              return (
                we || (we = this.props[ne] = new Ge.Bare()),
                we.init(this.$el, le, Oe, J),
                we
              );
            }
          }
          function y(k, J, le) {
            if (k) {
              var ne = typeof k;
              if (
                (J ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ne == "number" && J)
              )
                return (
                  (this.timer = new ze({
                    duration: k,
                    context: this,
                    complete: w,
                  })),
                  void (this.active = !0)
                );
              if (ne == "string" && J) {
                switch (k) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    H.call(this);
                    break;
                  case "redraw":
                    $.call(this);
                    break;
                  default:
                    g.call(this, k, le && le[1]);
                }
                return w.call(this);
              }
              if (ne == "function") return void k.call(this, this);
              if (ne == "object") {
                var Oe = 0;
                Ke.call(
                  this,
                  k,
                  function (he, q_) {
                    he.span > Oe && (Oe = he.span), he.stop(), he.animate(q_);
                  },
                  function (he) {
                    "wait" in he && (Oe = u(he.wait, 0));
                  }
                ),
                  pe.call(this),
                  Oe > 0 &&
                    ((this.timer = new ze({ duration: Oe, context: this })),
                    (this.active = !0),
                    J && (this.timer.complete = w));
                var Ge = this,
                  we = !1,
                  en = {};
                te(function () {
                  Ke.call(Ge, k, function (he) {
                    he.active && ((we = !0), (en[he.name] = he.nextStyle));
                  }),
                    we && Ge.$el.css(en);
                });
              }
            }
          }
          function I(k) {
            (k = u(k, 0)),
              this.active
                ? this.queue.push({ options: k })
                : ((this.timer = new ze({
                    duration: k,
                    context: this,
                    complete: w,
                  })),
                  (this.active = !0));
          }
          function L(k) {
            return this.active
              ? (this.queue.push({ options: k, args: arguments }),
                void (this.timer.complete = w))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function w() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var k = this.queue.shift();
              y.call(this, k.options, !0, k.args);
            }
          }
          function H(k) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var J;
            typeof k == "string"
              ? ((J = {}), (J[k] = 1))
              : (J = typeof k == "object" && k != null ? k : this.props),
              Ke.call(this, J, be),
              pe.call(this);
          }
          function Y(k) {
            H.call(this, k), Ke.call(this, k, vr, N_);
          }
          function ae(k) {
            typeof k != "string" && (k = "block"), (this.el.style.display = k);
          }
          function F() {
            H.call(this), (this.el.style.display = "none");
          }
          function $() {
            this.el.offsetHeight;
          }
          function Z() {
            H.call(this), e.removeData(this.el, P), (this.$el = this.el = null);
          }
          function pe() {
            var k,
              J,
              le = [];
            this.upstream && le.push(this.upstream);
            for (k in this.props)
              (J = this.props[k]), J.active && le.push(J.string);
            (le = le.join(",")),
              this.style !== le &&
                ((this.style = le), (this.el.style[G.transition.dom] = le));
          }
          function Ke(k, J, le) {
            var ne,
              Oe,
              Ge,
              we,
              en = J !== be,
              he = {};
            for (ne in k)
              (Ge = k[ne]),
                ne in Me
                  ? (he.transform || (he.transform = {}),
                    (he.transform[ne] = Ge))
                  : (A.test(ne) && (ne = r(ne)),
                    ne in vt
                      ? (he[ne] = Ge)
                      : (we || (we = {}), (we[ne] = Ge)));
            for (ne in he) {
              if (((Ge = he[ne]), (Oe = this.props[ne]), !Oe)) {
                if (!en) continue;
                Oe = g.call(this, ne);
              }
              J.call(this, Oe, Ge);
            }
            le && we && le.call(this, we);
          }
          function be(k) {
            k.stop();
          }
          function vr(k, J) {
            k.set(J);
          }
          function N_(k) {
            this.$el.css(k);
          }
          function Fe(k, J) {
            l[k] = function () {
              return this.children
                ? P_.call(this, J, arguments)
                : (this.el && J.apply(this, arguments), this);
            };
          }
          function P_(k, J) {
            var le,
              ne = this.children.length;
            for (le = 0; ne > le; le++) k.apply(this.children[le], J);
            return this;
          }
          (l.init = function (k) {
            if (
              ((this.$el = e(k)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ue.keepInherited && !ue.fallback)
            ) {
              var J = at(this.el, "transition");
              J && !W.test(J) && (this.upstream = J);
            }
            G.backface &&
              ue.hideBackface &&
              de(this.el, G.backface.css, "hidden");
          }),
            Fe("add", g),
            Fe("start", y),
            Fe("wait", I),
            Fe("then", L),
            Fe("next", w),
            Fe("stop", H),
            Fe("set", Y),
            Fe("show", ae),
            Fe("hide", F),
            Fe("redraw", $),
            Fe("destroy", Z);
        }),
        D = d(p, function (l) {
          function g(y, I) {
            var L = e.data(y, P) || e.data(y, P, new p.Bare());
            return L.el || L.init(y), I ? L.start(I) : L;
          }
          l.init = function (y, I) {
            var L = e(y);
            if (!L.length) return this;
            if (L.length === 1) return g(L[0], I);
            var w = [];
            return (
              L.each(function (H, Y) {
                w.push(g(Y, I));
              }),
              (this.children = w),
              this
            );
          };
        }),
        R = d(function (l) {
          function g() {
            var w = this.get();
            this.update("auto");
            var H = this.get();
            return this.update(w), H;
          }
          function y(w, H, Y) {
            return H !== void 0 && (Y = H), w in v ? w : Y;
          }
          function I(w) {
            var H = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
            return (H ? o(H[1], H[2], H[3]) : w).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var L = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (w, H, Y, ae) {
            (this.$el = w), (this.el = w[0]);
            var F = H[0];
            Y[2] && (F = Y[2]),
              st[F] && (F = st[F]),
              (this.name = F),
              (this.type = Y[1]),
              (this.duration = u(H[1], this.duration, L.duration)),
              (this.ease = y(H[2], this.ease, L.ease)),
              (this.delay = u(H[3], this.delay, L.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = B.test(this.name)),
              (this.unit = ae.unit || this.unit || ue.defaultUnit),
              (this.angle = ae.angle || this.angle || ue.defaultAngle),
              ue.fallback || ae.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    j +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? j + v[this.ease][0] : "") +
                    (this.delay ? j + this.delay + "ms" : "")));
          }),
            (l.set = function (w) {
              (w = this.convert(w, this.type)), this.update(w), this.redraw();
            }),
            (l.transition = function (w) {
              (this.active = !0),
                (w = this.convert(w, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  w == "auto" && (w = g.call(this))),
                (this.nextStyle = w);
            }),
            (l.fallback = function (w) {
              var H =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (w = this.convert(w, this.type)),
                this.auto &&
                  (H == "auto" && (H = this.convert(this.get(), this.type)),
                  w == "auto" && (w = g.call(this))),
                (this.tween = new ye({
                  from: H,
                  to: w,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return at(this.el, this.name);
            }),
            (l.update = function (w) {
              de(this.el, this.name, w);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                de(this.el, this.name, this.get()));
              var w = this.tween;
              w && w.context && w.destroy();
            }),
            (l.convert = function (w, H) {
              if (w == "auto" && this.auto) return w;
              var Y,
                ae = typeof w == "number",
                F = typeof w == "string";
              switch (H) {
                case b:
                  if (ae) return w;
                  if (F && w.replace(x, "") === "") return +w;
                  Y = "number(unitless)";
                  break;
                case C:
                  if (F) {
                    if (w === "" && this.original) return this.original;
                    if (H.test(w))
                      return w.charAt(0) == "#" && w.length == 7 ? w : I(w);
                  }
                  Y = "hex or rgb string";
                  break;
                case N:
                  if (ae) return w + this.unit;
                  if (F && H.test(w)) return w;
                  Y = "number(px) or string(unit)";
                  break;
                case S:
                  if (ae) return w + this.unit;
                  if (F && H.test(w)) return w;
                  Y = "number(px) or string(unit or %)";
                  break;
                case V:
                  if (ae) return w + this.angle;
                  if (F && H.test(w)) return w;
                  Y = "number(deg) or string(angle)";
                  break;
                case X:
                  if (ae || (F && S.test(w))) return w;
                  Y = "number(unitless) or string(unit or %)";
              }
              return a(Y, w), w;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        O = d(R, function (l, g) {
          l.init = function () {
            g.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), C));
          };
        }),
        Q = d(R, function (l, g) {
          (l.init = function () {
            g.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (y) {
              this.$el[this.name](y);
            });
        }),
        re = d(R, function (l, g) {
          function y(I, L) {
            var w, H, Y, ae, F;
            for (w in I)
              (ae = Me[w]),
                (Y = ae[0]),
                (H = ae[1] || w),
                (F = this.convert(I[w], Y)),
                L.call(this, H, F, Y);
          }
          (l.init = function () {
            g.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Me.perspective &&
                  ue.perspective &&
                  ((this.current.perspective = ue.perspective),
                  de(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (I) {
              y.call(this, I, function (L, w) {
                this.current[L] = w;
              }),
                de(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (I) {
              var L = this.values(I);
              this.tween = new qe({
                current: this.current,
                values: L,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var w,
                H = {};
              for (w in this.current) H[w] = w in L ? L[w] : this.current[w];
              (this.active = !0), (this.nextStyle = this.style(H));
            }),
            (l.fallback = function (I) {
              var L = this.values(I);
              this.tween = new qe({
                current: this.current,
                values: L,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              de(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (I) {
              var L,
                w = "";
              for (L in I) w += L + "(" + I[L] + ") ";
              return w;
            }),
            (l.values = function (I) {
              var L,
                w = {};
              return (
                y.call(this, I, function (H, Y, ae) {
                  (w[H] = Y),
                    this.current[H] === void 0 &&
                      ((L = 0),
                      ~H.indexOf("scale") && (L = 1),
                      (this.current[H] = this.convert(L, ae)));
                }),
                w
              );
            });
        }),
        ye = d(function (l) {
          function g(F) {
            Y.push(F) === 1 && te(y);
          }
          function y() {
            var F,
              $,
              Z,
              pe = Y.length;
            if (pe)
              for (te(y), $ = Ie(), F = pe; F--; ) (Z = Y[F]), Z && Z.render($);
          }
          function I(F) {
            var $,
              Z = e.inArray(F, Y);
            Z >= 0 &&
              (($ = Y.slice(Z + 1)),
              (Y.length = Z),
              $.length && (Y = Y.concat($)));
          }
          function L(F) {
            return Math.round(F * ae) / ae;
          }
          function w(F, $, Z) {
            return o(
              F[0] + Z * ($[0] - F[0]),
              F[1] + Z * ($[1] - F[1]),
              F[2] + Z * ($[2] - F[2])
            );
          }
          var H = { ease: v.ease[1], from: 0, to: 1 };
          (l.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var $ = F.ease || H.ease;
            v[$] && ($ = v[$][1]),
              typeof $ != "function" && ($ = H.ease),
              (this.ease = $),
              (this.update = F.update || i),
              (this.complete = F.complete || i),
              (this.context = F.context || this),
              (this.name = F.name);
            var Z = F.from,
              pe = F.to;
            Z === void 0 && (Z = H.from),
              pe === void 0 && (pe = H.to),
              (this.unit = F.unit || ""),
              typeof Z == "number" && typeof pe == "number"
                ? ((this.begin = Z), (this.change = pe - Z))
                : this.format(pe, Z),
              (this.value = this.begin + this.unit),
              (this.start = Ie()),
              F.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = Ie()),
                (this.active = !0),
                g(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), I(this));
            }),
            (l.render = function (F) {
              var $,
                Z = F - this.start;
              if (this.delay) {
                if (Z <= this.delay) return;
                Z -= this.delay;
              }
              if (Z < this.duration) {
                var pe = this.ease(Z, 0, 1, this.duration);
                return (
                  ($ = this.startRGB
                    ? w(this.startRGB, this.endRGB, pe)
                    : L(this.begin + pe * this.change)),
                  (this.value = $ + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              ($ = this.endHex || this.begin + this.change),
                (this.value = $ + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (F, $) {
              if ((($ += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = n($)),
                  (this.endRGB = n(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Z = $.replace(x, ""),
                  pe = F.replace(x, "");
                Z !== pe && s("tween", $, F), (this.unit = Z);
              }
              ($ = parseFloat($)),
                (F = parseFloat(F)),
                (this.begin = this.value = $),
                (this.change = F - $);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var Y = [],
            ae = 1e3;
        }),
        ze = d(ye, function (l) {
          (l.init = function (g) {
            (this.duration = g.duration || 0),
              (this.complete = g.complete || i),
              (this.context = g.context),
              this.play();
          }),
            (l.render = function (g) {
              var y = g - this.start;
              y < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        qe = d(ye, function (l, g) {
          (l.init = function (y) {
            (this.context = y.context),
              (this.update = y.update),
              (this.tweens = []),
              (this.current = y.current);
            var I, L;
            for (I in y.values)
              (L = y.values[I]),
                this.current[I] !== L &&
                  this.tweens.push(
                    new ye({
                      name: I,
                      from: this.current[I],
                      to: L,
                      duration: y.duration,
                      delay: y.delay,
                      ease: y.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (y) {
              var I,
                L,
                w = this.tweens.length,
                H = !1;
              for (I = w; I--; )
                (L = this.tweens[I]),
                  L.context &&
                    (L.render(y), (this.current[L.name] = L.value), (H = !0));
              return H
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((g.destroy.call(this), this.tweens)) {
                var y,
                  I = this.tweens.length;
                for (y = I; y--; ) this.tweens[y].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ue = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (ue.fallback = !0);
        ue.agentTests.push("(" + l + ")");
        var g = new RegExp(ue.agentTests.join("|"), "i");
        ue.fallback = g.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new ye(l);
        }),
        (t.delay = function (l, g, y) {
          return new ze({ complete: g, duration: l, context: y });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var de = e.style,
        at = e.css,
        st = { transform: G.transform && G.transform.css },
        vt = {
          color: [O, C],
          background: [O, C, "background-color"],
          "outline-color": [O, C],
          "border-color": [O, C],
          "border-top-color": [O, C],
          "border-right-color": [O, C],
          "border-bottom-color": [O, C],
          "border-left-color": [O, C],
          "border-width": [R, N],
          "border-top-width": [R, N],
          "border-right-width": [R, N],
          "border-bottom-width": [R, N],
          "border-left-width": [R, N],
          "border-spacing": [R, N],
          "letter-spacing": [R, N],
          margin: [R, N],
          "margin-top": [R, N],
          "margin-right": [R, N],
          "margin-bottom": [R, N],
          "margin-left": [R, N],
          padding: [R, N],
          "padding-top": [R, N],
          "padding-right": [R, N],
          "padding-bottom": [R, N],
          "padding-left": [R, N],
          "outline-width": [R, N],
          opacity: [R, b],
          top: [R, S],
          right: [R, S],
          bottom: [R, S],
          left: [R, S],
          "font-size": [R, S],
          "text-indent": [R, S],
          "word-spacing": [R, S],
          width: [R, S],
          "min-width": [R, S],
          "max-width": [R, S],
          height: [R, S],
          "min-height": [R, S],
          "max-height": [R, S],
          "line-height": [R, X],
          "scroll-top": [Q, b, "scrollTop"],
          "scroll-left": [Q, b, "scrollLeft"],
        },
        Me = {};
      G.transform &&
        ((vt.transform = [re]),
        (Me = {
          x: [S, "translateX"],
          y: [S, "translateY"],
          rotate: [V],
          rotateX: [V],
          rotateY: [V],
          scale: [b],
          scaleX: [b],
          scaleY: [b],
          skew: [V],
          skewX: [V],
          skewY: [V],
        })),
        G.transform &&
          G.backface &&
          ((Me.z = [S, "translateZ"]),
          (Me.rotateZ = [V]),
          (Me.scaleZ = [b]),
          (Me.perspective = [N]));
      var xt = /ms/,
        Jr = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ss = c((bX, As) => {
    "use strict";
    var U_ = window.$,
      X_ = Si() && U_.tram;
    As.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        h = r.forEach,
        d = r.map,
        v = r.reduce,
        m = r.reduceRight,
        _ = r.filter,
        E = r.every,
        P = r.some,
        x = r.indexOf,
        A = r.lastIndexOf,
        b = Array.isArray,
        C = Object.keys,
        N = o.bind,
        S =
          (e.each =
          e.forEach =
            function (T, q, U) {
              if (T == null) return T;
              if (h && T.forEach === h) T.forEach(q, U);
              else if (T.length === +T.length) {
                for (var G = 0, z = T.length; G < z; G++)
                  if (q.call(U, T[G], G, T) === t) return;
              } else
                for (var K = e.keys(T), G = 0, z = K.length; G < z; G++)
                  if (q.call(U, T[K[G]], K[G], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, q, U) {
          var G = [];
          return T == null
            ? G
            : d && T.map === d
            ? T.map(q, U)
            : (S(T, function (z, K, te) {
                G.push(q.call(U, z, K, te));
              }),
              G);
        }),
        (e.find = e.detect =
          function (T, q, U) {
            var G;
            return (
              V(T, function (z, K, te) {
                if (q.call(U, z, K, te)) return (G = z), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (T, q, U) {
            var G = [];
            return T == null
              ? G
              : _ && T.filter === _
              ? T.filter(q, U)
              : (S(T, function (z, K, te) {
                  q.call(U, z, K, te) && G.push(z);
                }),
                G);
          });
      var V =
        (e.some =
        e.any =
          function (T, q, U) {
            q || (q = e.identity);
            var G = !1;
            return T == null
              ? G
              : P && T.some === P
              ? T.some(q, U)
              : (S(T, function (z, K, te) {
                  if (G || (G = q.call(U, z, K, te))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (T, q) {
          return T == null
            ? !1
            : x && T.indexOf === x
            ? T.indexOf(q) != -1
            : V(T, function (U) {
                return U === q;
              });
        }),
        (e.delay = function (T, q) {
          var U = a.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, U);
          }, q);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var q, U, G;
          return function () {
            q ||
              ((q = !0),
              (U = arguments),
              (G = this),
              X_.frame(function () {
                (q = !1), T.apply(G, U);
              }));
          };
        }),
        (e.debounce = function (T, q, U) {
          var G,
            z,
            K,
            te,
            Ie,
            p = function () {
              var D = e.now() - te;
              D < q
                ? (G = setTimeout(p, q - D))
                : ((G = null), U || ((Ie = T.apply(K, z)), (K = z = null)));
            };
          return function () {
            (K = this), (z = arguments), (te = e.now());
            var D = U && !G;
            return (
              G || (G = setTimeout(p, q)),
              D && ((Ie = T.apply(K, z)), (K = z = null)),
              Ie
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var q = 1, U = arguments.length; q < U; q++) {
            var G = arguments[q];
            for (var z in G) T[z] === void 0 && (T[z] = G[z]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (C) return C(T);
          var q = [];
          for (var U in T) e.has(T, U) && q.push(U);
          return q;
        }),
        (e.has = function (T, q) {
          return f.call(T, q);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var X = /(.)^/,
        W = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        B = /\\|'|\r|\n|\u2028|\u2029/g,
        j = function (T) {
          return "\\" + W[T];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, q, U) {
          !q && U && (q = U), (q = e.defaults({}, q, e.templateSettings));
          var G = RegExp(
              [
                (q.escape || X).source,
                (q.interpolate || X).source,
                (q.evaluate || X).source,
              ].join("|") + "|$",
              "g"
            ),
            z = 0,
            K = "__p+='";
          T.replace(G, function (D, R, O, Q, re) {
            return (
              (K += T.slice(z, re).replace(B, j)),
              (z = re + D.length),
              R
                ? (K +=
                    `'+
((__t=(` +
                    R +
                    `))==null?'':_.escape(__t))+
'`)
                : O
                ? (K +=
                    `'+
((__t=(` +
                    O +
                    `))==null?'':__t)+
'`)
                : Q &&
                  (K +=
                    `';
` +
                    Q +
                    `
__p+='`),
              D
            );
          }),
            (K += `';
`);
          var te = q.variable;
          if (te) {
            if (!M.test(te))
              throw new Error("variable is not a bare identifier: " + te);
          } else
            (K =
              `with(obj||{}){
` +
              K +
              `}
`),
              (te = "obj");
          K =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            K +
            `return __p;
`;
          var Ie;
          try {
            Ie = new Function(q.variable || "obj", "_", K);
          } catch (D) {
            throw ((D.source = K), D);
          }
          var p = function (D) {
            return Ie.call(this, D, e);
          };
          return (
            (p.source =
              "function(" +
              te +
              `){
` +
              K +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var Qe = c((OX, Ms) => {
    "use strict";
    var ie = {},
      Ft = {},
      Gt = [],
      Ri = window.Webflow || [],
      gt = window.jQuery,
      Ue = gt(window),
      W_ = gt(document),
      $e = gt.isFunction,
      Ve = (ie._ = Ss()),
      Rs = (ie.tram = Si() && gt.tram),
      nn = !1,
      Ci = !1;
    Rs.config.hideBackface = !1;
    Rs.config.keepInherited = !0;
    ie.define = function (e, t, r) {
      Ft[e] && Ls(Ft[e]);
      var n = (Ft[e] = t(gt, Ve, r) || {});
      return Cs(n), n;
    };
    ie.require = function (e) {
      return Ft[e];
    };
    function Cs(e) {
      ie.env() &&
        ($e(e.design) && Ue.on("__wf_design", e.design),
        $e(e.preview) && Ue.on("__wf_preview", e.preview)),
        $e(e.destroy) && Ue.on("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && H_(e);
    }
    function H_(e) {
      if (nn) {
        e.ready();
        return;
      }
      Ve.contains(Gt, e.ready) || Gt.push(e.ready);
    }
    function Ls(e) {
      $e(e.design) && Ue.off("__wf_design", e.design),
        $e(e.preview) && Ue.off("__wf_preview", e.preview),
        $e(e.destroy) && Ue.off("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && B_(e);
    }
    function B_(e) {
      Gt = Ve.filter(Gt, function (t) {
        return t !== e.ready;
      });
    }
    ie.push = function (e) {
      if (nn) {
        $e(e) && e();
        return;
      }
      Ri.push(e);
    };
    ie.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var rn = navigator.userAgent.toLowerCase(),
      Ns = (ie.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      k_ = (ie.env.chrome =
        /chrome/.test(rn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(rn.match(/chrome\/(\d+)\./)[1], 10)),
      j_ = (ie.env.ios = /(ipod|iphone|ipad)/.test(rn));
    ie.env.safari = /safari/.test(rn) && !k_ && !j_;
    var wi;
    Ns &&
      W_.on("touchstart mousedown", function (e) {
        wi = e.target;
      });
    ie.validClick = Ns
      ? function (e) {
          return e === wi || gt.contains(e, wi);
        }
      : function () {
          return !0;
        };
    var Ps = "resize.webflow orientationchange.webflow load.webflow",
      z_ = "scroll.webflow " + Ps;
    ie.resize = Li(Ue, Ps);
    ie.scroll = Li(Ue, z_);
    ie.redraw = Li();
    function Li(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ve.throttle(function (o) {
          Ve.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (Ve.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ve.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    ie.location = function (e) {
      window.location = e;
    };
    ie.env() && (ie.location = function () {});
    ie.ready = function () {
      (nn = !0), Ci ? K_() : Ve.each(Gt, ws), Ve.each(Ri, ws), ie.resize.up();
    };
    function ws(e) {
      $e(e) && e();
    }
    function K_() {
      (Ci = !1), Ve.each(Ft, Cs);
    }
    var At;
    ie.load = function (e) {
      At.then(e);
    };
    function qs() {
      At && (At.reject(), Ue.off("load", At.resolve)),
        (At = new gt.Deferred()),
        Ue.on("load", At.resolve);
    }
    ie.destroy = function (e) {
      (e = e || {}),
        (Ci = !0),
        Ue.triggerHandler("__wf_destroy"),
        e.domready != null && (nn = e.domready),
        Ve.each(Ft, Ls),
        ie.resize.off(),
        ie.scroll.off(),
        ie.redraw.off(),
        (Gt = []),
        (Ri = []),
        At.state() === "pending" && qs();
    };
    gt(ie.ready);
    qs();
    Ms.exports = window.Webflow = ie;
  });
  var Gs = c((xX, Fs) => {
    "use strict";
    var Ds = Qe();
    Ds.define(
      "brand",
      (Fs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            _ = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && a.hostname !== _ && (m = !0),
            m &&
              !s &&
              ((f = f || d()),
              v(),
              setTimeout(v, 500),
              e(r).off(u, h).on(u, h));
        };
        function h() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", m ? "display: none !important;" : "");
        }
        function d() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            E = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(_, E), m[0];
        }
        function v() {
          var m = o.children(i),
            _ = m.length && m.get(0) === f,
            E = Ds.env("editor");
          if (_) {
            E && m.remove();
            return;
          }
          m.length && m.remove(), E || o.append(f);
        }
        return t;
      })
    );
  });
  var Us = c((AX, Vs) => {
    "use strict";
    var Ni = Qe();
    Ni.define(
      "edit",
      (Vs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Ni.env("test") || Ni.env("frame")) && !r.fixture && !Y_())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || v,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : o.on(s, d).triggerHandler(s);
        function d() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function v() {
          (u = !0),
            (window.WebflowEditor = !0),
            o.off(s, d),
            A(function (C) {
              e.ajax({
                url: x("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(C),
              });
            });
        }
        function m(C) {
          return function (N) {
            if (!N) {
              console.error("Could not load editor data");
              return;
            }
            (N.thirdPartyCookiesSupported = C),
              _(P(N.scriptPath), function () {
                window.WebflowEditor(N);
              });
          };
        }
        function _(C, N) {
          e.ajax({ type: "GET", url: C, dataType: "script", cache: !0 }).then(
            N,
            E
          );
        }
        function E(C, N, S) {
          throw (console.error("Could not load editor script: " + N), S);
        }
        function P(C) {
          return C.indexOf("//") >= 0
            ? C
            : x("https://editor-api.webflow.com" + C);
        }
        function x(C) {
          return C.replace(/([^:])\/\//g, "$1/");
        }
        function A(C) {
          var N = window.document.createElement("iframe");
          (N.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (N.style.display = "none"),
            (N.sandbox = "allow-scripts allow-same-origin");
          var S = function (V) {
            V.data === "WF_third_party_cookies_unsupported"
              ? (b(N, S), C(!1))
              : V.data === "WF_third_party_cookies_supported" &&
                (b(N, S), C(!0));
          };
          (N.onerror = function () {
            b(N, S), C(!1);
          }),
            window.addEventListener("message", S, !1),
            window.document.body.appendChild(N);
        }
        function b(C, N) {
          window.removeEventListener("message", N, !1), C.remove();
        }
        return n;
      })
    );
    function Y_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ws = c((SX, Xs) => {
    "use strict";
    var $_ = Qe();
    $_.define(
      "focus-visible",
      (Xs.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(b) {
            return !!(
              b &&
              b !== document &&
              b.nodeName !== "HTML" &&
              b.nodeName !== "BODY" &&
              "classList" in b &&
              "contains" in b.classList
            );
          }
          function u(b) {
            var C = b.type,
              N = b.tagName;
            return !!(
              (N === "INPUT" && a[C] && !b.readOnly) ||
              (N === "TEXTAREA" && !b.readOnly) ||
              b.isContentEditable
            );
          }
          function f(b) {
            b.getAttribute("data-wf-focus-visible") ||
              b.setAttribute("data-wf-focus-visible", "true");
          }
          function h(b) {
            b.getAttribute("data-wf-focus-visible") &&
              b.removeAttribute("data-wf-focus-visible");
          }
          function d(b) {
            b.metaKey ||
              b.altKey ||
              b.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function v() {
            n = !1;
          }
          function m(b) {
            s(b.target) && (n || u(b.target)) && f(b.target);
          }
          function _(b) {
            s(b.target) &&
              b.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              h(b.target));
          }
          function E() {
            document.visibilityState === "hidden" && (o && (n = !0), P());
          }
          function P() {
            document.addEventListener("mousemove", A),
              document.addEventListener("mousedown", A),
              document.addEventListener("mouseup", A),
              document.addEventListener("pointermove", A),
              document.addEventListener("pointerdown", A),
              document.addEventListener("pointerup", A),
              document.addEventListener("touchmove", A),
              document.addEventListener("touchstart", A),
              document.addEventListener("touchend", A);
          }
          function x() {
            document.removeEventListener("mousemove", A),
              document.removeEventListener("mousedown", A),
              document.removeEventListener("mouseup", A),
              document.removeEventListener("pointermove", A),
              document.removeEventListener("pointerdown", A),
              document.removeEventListener("pointerup", A),
              document.removeEventListener("touchmove", A),
              document.removeEventListener("touchstart", A),
              document.removeEventListener("touchend", A);
          }
          function A(b) {
            (b.target.nodeName && b.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), x());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", v, !0),
            document.addEventListener("pointerdown", v, !0),
            document.addEventListener("touchstart", v, !0),
            document.addEventListener("visibilitychange", E, !0),
            P(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var ks = c((wX, Bs) => {
    "use strict";
    var Hs = Qe();
    Hs.define(
      "focus",
      (Bs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Hs.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Ks = c((RX, zs) => {
    "use strict";
    var Pi = window.jQuery,
      Ze = {},
      on = [],
      js = ".w-ix",
      an = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Pi(t).triggerHandler(Ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Pi(t).triggerHandler(Ze.types.OUTRO));
        },
      };
    Ze.triggers = {};
    Ze.types = { INTRO: "w-ix-intro" + js, OUTRO: "w-ix-outro" + js };
    Ze.init = function () {
      for (var e = on.length, t = 0; t < e; t++) {
        var r = on[t];
        r[0](0, r[1]);
      }
      (on = []), Pi.extend(Ze.triggers, an);
    };
    Ze.async = function () {
      for (var e in an) {
        var t = an[e];
        an.hasOwnProperty(e) &&
          (Ze.triggers[e] = function (r, n) {
            on.push([t, n]);
          });
      }
    };
    Ze.async();
    zs.exports = Ze;
  });
  var Mi = c((CX, Qs) => {
    "use strict";
    var qi = Ks();
    function Ys(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Q_ = window.jQuery,
      sn = {},
      $s = ".w-ix",
      Z_ = {
        reset: function (e, t) {
          qi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          qi.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          qi.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE");
        },
      };
    sn.triggers = {};
    sn.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
    Q_.extend(sn.triggers, Z_);
    Qs.exports = sn;
  });
  var Zs = c((LX, ut) => {
    function Di(e) {
      return (
        (ut.exports = Di =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ut.exports.__esModule = !0),
        (ut.exports.default = ut.exports),
        Di(e)
      );
    }
    (ut.exports = Di),
      (ut.exports.__esModule = !0),
      (ut.exports.default = ut.exports);
  });
  var un = c((NX, gr) => {
    var J_ = Zs().default;
    function Js(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Js = function (o) {
        return o ? r : t;
      })(e);
    }
    function eT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (J_(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Js(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (gr.exports = eT),
      (gr.exports.__esModule = !0),
      (gr.exports.default = gr.exports);
  });
  var eu = c((PX, yr) => {
    function tT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (yr.exports = tT),
      (yr.exports.__esModule = !0),
      (yr.exports.default = yr.exports);
  });
  var ce = c((qX, tu) => {
    var cn = function (e) {
      return e && e.Math == Math && e;
    };
    tu.exports =
      cn(typeof globalThis == "object" && globalThis) ||
      cn(typeof window == "object" && window) ||
      cn(typeof self == "object" && self) ||
      cn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Vt = c((MX, ru) => {
    ru.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var St = c((DX, nu) => {
    var rT = Vt();
    nu.exports = !rT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var ln = c((FX, iu) => {
    var Er = Function.prototype.call;
    iu.exports = Er.bind
      ? Er.bind(Er)
      : function () {
          return Er.apply(Er, arguments);
        };
  });
  var uu = c((su) => {
    "use strict";
    var ou = {}.propertyIsEnumerable,
      au = Object.getOwnPropertyDescriptor,
      nT = au && !ou.call({ 1: 2 }, 1);
    su.f = nT
      ? function (t) {
          var r = au(this, t);
          return !!r && r.enumerable;
        }
      : ou;
  });
  var Fi = c((VX, cu) => {
    cu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Xe = c((UX, fu) => {
    var lu = Function.prototype,
      Gi = lu.bind,
      Vi = lu.call,
      iT = Gi && Gi.bind(Vi);
    fu.exports = Gi
      ? function (e) {
          return e && iT(Vi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Vi.apply(e, arguments);
            }
          );
        };
  });
  var hu = c((XX, pu) => {
    var du = Xe(),
      oT = du({}.toString),
      aT = du("".slice);
    pu.exports = function (e) {
      return aT(oT(e), 8, -1);
    };
  });
  var gu = c((WX, vu) => {
    var sT = ce(),
      uT = Xe(),
      cT = Vt(),
      lT = hu(),
      Ui = sT.Object,
      fT = uT("".split);
    vu.exports = cT(function () {
      return !Ui("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return lT(e) == "String" ? fT(e, "") : Ui(e);
        }
      : Ui;
  });
  var Xi = c((HX, yu) => {
    var dT = ce(),
      pT = dT.TypeError;
    yu.exports = function (e) {
      if (e == null) throw pT("Can't call method on " + e);
      return e;
    };
  });
  var mr = c((BX, Eu) => {
    var hT = gu(),
      vT = Xi();
    Eu.exports = function (e) {
      return hT(vT(e));
    };
  });
  var Je = c((kX, mu) => {
    mu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ut = c((jX, _u) => {
    var gT = Je();
    _u.exports = function (e) {
      return typeof e == "object" ? e !== null : gT(e);
    };
  });
  var _r = c((zX, Tu) => {
    var Wi = ce(),
      yT = Je(),
      ET = function (e) {
        return yT(e) ? e : void 0;
      };
    Tu.exports = function (e, t) {
      return arguments.length < 2 ? ET(Wi[e]) : Wi[e] && Wi[e][t];
    };
  });
  var bu = c((KX, Iu) => {
    var mT = Xe();
    Iu.exports = mT({}.isPrototypeOf);
  });
  var xu = c((YX, Ou) => {
    var _T = _r();
    Ou.exports = _T("navigator", "userAgent") || "";
  });
  var Nu = c(($X, Lu) => {
    var Cu = ce(),
      Hi = xu(),
      Au = Cu.process,
      Su = Cu.Deno,
      wu = (Au && Au.versions) || (Su && Su.version),
      Ru = wu && wu.v8,
      We,
      fn;
    Ru &&
      ((We = Ru.split(".")),
      (fn = We[0] > 0 && We[0] < 4 ? 1 : +(We[0] + We[1])));
    !fn &&
      Hi &&
      ((We = Hi.match(/Edge\/(\d+)/)),
      (!We || We[1] >= 74) &&
        ((We = Hi.match(/Chrome\/(\d+)/)), We && (fn = +We[1])));
    Lu.exports = fn;
  });
  var Bi = c((QX, qu) => {
    var Pu = Nu(),
      TT = Vt();
    qu.exports =
      !!Object.getOwnPropertySymbols &&
      !TT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Pu && Pu < 41)
        );
      });
  });
  var ki = c((ZX, Mu) => {
    var IT = Bi();
    Mu.exports = IT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var ji = c((JX, Du) => {
    var bT = ce(),
      OT = _r(),
      xT = Je(),
      AT = bu(),
      ST = ki(),
      wT = bT.Object;
    Du.exports = ST
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = OT("Symbol");
          return xT(t) && AT(t.prototype, wT(e));
        };
  });
  var Gu = c((e5, Fu) => {
    var RT = ce(),
      CT = RT.String;
    Fu.exports = function (e) {
      try {
        return CT(e);
      } catch {
        return "Object";
      }
    };
  });
  var Uu = c((t5, Vu) => {
    var LT = ce(),
      NT = Je(),
      PT = Gu(),
      qT = LT.TypeError;
    Vu.exports = function (e) {
      if (NT(e)) return e;
      throw qT(PT(e) + " is not a function");
    };
  });
  var Wu = c((r5, Xu) => {
    var MT = Uu();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : MT(r);
    };
  });
  var Bu = c((n5, Hu) => {
    var DT = ce(),
      zi = ln(),
      Ki = Je(),
      Yi = Ut(),
      FT = DT.TypeError;
    Hu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Ki((r = e.toString)) && !Yi((n = zi(r, e)))) ||
        (Ki((r = e.valueOf)) && !Yi((n = zi(r, e)))) ||
        (t !== "string" && Ki((r = e.toString)) && !Yi((n = zi(r, e))))
      )
        return n;
      throw FT("Can't convert object to primitive value");
    };
  });
  var ju = c((i5, ku) => {
    ku.exports = !1;
  });
  var dn = c((o5, Ku) => {
    var zu = ce(),
      GT = Object.defineProperty;
    Ku.exports = function (e, t) {
      try {
        GT(zu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        zu[e] = t;
      }
      return t;
    };
  });
  var pn = c((a5, $u) => {
    var VT = ce(),
      UT = dn(),
      Yu = "__core-js_shared__",
      XT = VT[Yu] || UT(Yu, {});
    $u.exports = XT;
  });
  var $i = c((s5, Zu) => {
    var WT = ju(),
      Qu = pn();
    (Zu.exports = function (e, t) {
      return Qu[e] || (Qu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: WT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ec = c((u5, Ju) => {
    var HT = ce(),
      BT = Xi(),
      kT = HT.Object;
    Ju.exports = function (e) {
      return kT(BT(e));
    };
  });
  var yt = c((c5, tc) => {
    var jT = Xe(),
      zT = ec(),
      KT = jT({}.hasOwnProperty);
    tc.exports =
      Object.hasOwn ||
      function (t, r) {
        return KT(zT(t), r);
      };
  });
  var Qi = c((l5, rc) => {
    var YT = Xe(),
      $T = 0,
      QT = Math.random(),
      ZT = YT((1).toString);
    rc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + ZT(++$T + QT, 36);
    };
  });
  var Zi = c((f5, sc) => {
    var JT = ce(),
      eI = $i(),
      nc = yt(),
      tI = Qi(),
      ic = Bi(),
      ac = ki(),
      Xt = eI("wks"),
      wt = JT.Symbol,
      oc = wt && wt.for,
      rI = ac ? wt : (wt && wt.withoutSetter) || tI;
    sc.exports = function (e) {
      if (!nc(Xt, e) || !(ic || typeof Xt[e] == "string")) {
        var t = "Symbol." + e;
        ic && nc(wt, e)
          ? (Xt[e] = wt[e])
          : ac && oc
          ? (Xt[e] = oc(t))
          : (Xt[e] = rI(t));
      }
      return Xt[e];
    };
  });
  var fc = c((d5, lc) => {
    var nI = ce(),
      iI = ln(),
      uc = Ut(),
      cc = ji(),
      oI = Wu(),
      aI = Bu(),
      sI = Zi(),
      uI = nI.TypeError,
      cI = sI("toPrimitive");
    lc.exports = function (e, t) {
      if (!uc(e) || cc(e)) return e;
      var r = oI(e, cI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = iI(r, e, t)), !uc(n) || cc(n))
        )
          return n;
        throw uI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), aI(e, t);
    };
  });
  var Ji = c((p5, dc) => {
    var lI = fc(),
      fI = ji();
    dc.exports = function (e) {
      var t = lI(e, "string");
      return fI(t) ? t : t + "";
    };
  });
  var to = c((h5, hc) => {
    var dI = ce(),
      pc = Ut(),
      eo = dI.document,
      pI = pc(eo) && pc(eo.createElement);
    hc.exports = function (e) {
      return pI ? eo.createElement(e) : {};
    };
  });
  var ro = c((v5, vc) => {
    var hI = St(),
      vI = Vt(),
      gI = to();
    vc.exports =
      !hI &&
      !vI(function () {
        return (
          Object.defineProperty(gI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var no = c((yc) => {
    var yI = St(),
      EI = ln(),
      mI = uu(),
      _I = Fi(),
      TI = mr(),
      II = Ji(),
      bI = yt(),
      OI = ro(),
      gc = Object.getOwnPropertyDescriptor;
    yc.f = yI
      ? gc
      : function (t, r) {
          if (((t = TI(t)), (r = II(r)), OI))
            try {
              return gc(t, r);
            } catch {}
          if (bI(t, r)) return _I(!EI(mI.f, t, r), t[r]);
        };
  });
  var Tr = c((y5, mc) => {
    var Ec = ce(),
      xI = Ut(),
      AI = Ec.String,
      SI = Ec.TypeError;
    mc.exports = function (e) {
      if (xI(e)) return e;
      throw SI(AI(e) + " is not an object");
    };
  });
  var Ir = c((Ic) => {
    var wI = ce(),
      RI = St(),
      CI = ro(),
      _c = Tr(),
      LI = Ji(),
      NI = wI.TypeError,
      Tc = Object.defineProperty;
    Ic.f = RI
      ? Tc
      : function (t, r, n) {
          if ((_c(t), (r = LI(r)), _c(n), CI))
            try {
              return Tc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw NI("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var hn = c((m5, bc) => {
    var PI = St(),
      qI = Ir(),
      MI = Fi();
    bc.exports = PI
      ? function (e, t, r) {
          return qI.f(e, t, MI(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var oo = c((_5, Oc) => {
    var DI = Xe(),
      FI = Je(),
      io = pn(),
      GI = DI(Function.toString);
    FI(io.inspectSource) ||
      (io.inspectSource = function (e) {
        return GI(e);
      });
    Oc.exports = io.inspectSource;
  });
  var Sc = c((T5, Ac) => {
    var VI = ce(),
      UI = Je(),
      XI = oo(),
      xc = VI.WeakMap;
    Ac.exports = UI(xc) && /native code/.test(XI(xc));
  });
  var ao = c((I5, Rc) => {
    var WI = $i(),
      HI = Qi(),
      wc = WI("keys");
    Rc.exports = function (e) {
      return wc[e] || (wc[e] = HI(e));
    };
  });
  var vn = c((b5, Cc) => {
    Cc.exports = {};
  });
  var Dc = c((O5, Mc) => {
    var BI = Sc(),
      qc = ce(),
      so = Xe(),
      kI = Ut(),
      jI = hn(),
      uo = yt(),
      co = pn(),
      zI = ao(),
      KI = vn(),
      Lc = "Object already initialized",
      fo = qc.TypeError,
      YI = qc.WeakMap,
      gn,
      br,
      yn,
      $I = function (e) {
        return yn(e) ? br(e) : gn(e, {});
      },
      QI = function (e) {
        return function (t) {
          var r;
          if (!kI(t) || (r = br(t)).type !== e)
            throw fo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    BI || co.state
      ? ((Et = co.state || (co.state = new YI())),
        (Nc = so(Et.get)),
        (lo = so(Et.has)),
        (Pc = so(Et.set)),
        (gn = function (e, t) {
          if (lo(Et, e)) throw new fo(Lc);
          return (t.facade = e), Pc(Et, e, t), t;
        }),
        (br = function (e) {
          return Nc(Et, e) || {};
        }),
        (yn = function (e) {
          return lo(Et, e);
        }))
      : ((Rt = zI("state")),
        (KI[Rt] = !0),
        (gn = function (e, t) {
          if (uo(e, Rt)) throw new fo(Lc);
          return (t.facade = e), jI(e, Rt, t), t;
        }),
        (br = function (e) {
          return uo(e, Rt) ? e[Rt] : {};
        }),
        (yn = function (e) {
          return uo(e, Rt);
        }));
    var Et, Nc, lo, Pc, Rt;
    Mc.exports = { set: gn, get: br, has: yn, enforce: $I, getterFor: QI };
  });
  var Vc = c((x5, Gc) => {
    var po = St(),
      ZI = yt(),
      Fc = Function.prototype,
      JI = po && Object.getOwnPropertyDescriptor,
      ho = ZI(Fc, "name"),
      eb = ho && function () {}.name === "something",
      tb = ho && (!po || (po && JI(Fc, "name").configurable));
    Gc.exports = { EXISTS: ho, PROPER: eb, CONFIGURABLE: tb };
  });
  var Bc = c((A5, Hc) => {
    var rb = ce(),
      Uc = Je(),
      nb = yt(),
      Xc = hn(),
      ib = dn(),
      ob = oo(),
      Wc = Dc(),
      ab = Vc().CONFIGURABLE,
      sb = Wc.get,
      ub = Wc.enforce,
      cb = String(String).split("String");
    (Hc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Uc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!nb(r, "name") || (ab && r.name !== s)) && Xc(r, "name", s),
          (u = ub(r)),
          u.source || (u.source = cb.join(typeof s == "string" ? s : ""))),
        e === rb)
      ) {
        i ? (e[t] = r) : ib(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Uc(this) && sb(this).source) || ob(this);
    });
  });
  var vo = c((S5, kc) => {
    var lb = Math.ceil,
      fb = Math.floor;
    kc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? fb : lb)(t);
    };
  });
  var zc = c((w5, jc) => {
    var db = vo(),
      pb = Math.max,
      hb = Math.min;
    jc.exports = function (e, t) {
      var r = db(e);
      return r < 0 ? pb(r + t, 0) : hb(r, t);
    };
  });
  var Yc = c((R5, Kc) => {
    var vb = vo(),
      gb = Math.min;
    Kc.exports = function (e) {
      return e > 0 ? gb(vb(e), 9007199254740991) : 0;
    };
  });
  var Qc = c((C5, $c) => {
    var yb = Yc();
    $c.exports = function (e) {
      return yb(e.length);
    };
  });
  var go = c((L5, Jc) => {
    var Eb = mr(),
      mb = zc(),
      _b = Qc(),
      Zc = function (e) {
        return function (t, r, n) {
          var o = Eb(t),
            i = _b(o),
            a = mb(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Jc.exports = { includes: Zc(!0), indexOf: Zc(!1) };
  });
  var Eo = c((N5, tl) => {
    var Tb = Xe(),
      yo = yt(),
      Ib = mr(),
      bb = go().indexOf,
      Ob = vn(),
      el = Tb([].push);
    tl.exports = function (e, t) {
      var r = Ib(e),
        n = 0,
        o = [],
        i;
      for (i in r) !yo(Ob, i) && yo(r, i) && el(o, i);
      for (; t.length > n; ) yo(r, (i = t[n++])) && (~bb(o, i) || el(o, i));
      return o;
    };
  });
  var En = c((P5, rl) => {
    rl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var il = c((nl) => {
    var xb = Eo(),
      Ab = En(),
      Sb = Ab.concat("length", "prototype");
    nl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return xb(t, Sb);
      };
  });
  var al = c((ol) => {
    ol.f = Object.getOwnPropertySymbols;
  });
  var ul = c((D5, sl) => {
    var wb = _r(),
      Rb = Xe(),
      Cb = il(),
      Lb = al(),
      Nb = Tr(),
      Pb = Rb([].concat);
    sl.exports =
      wb("Reflect", "ownKeys") ||
      function (t) {
        var r = Cb.f(Nb(t)),
          n = Lb.f;
        return n ? Pb(r, n(t)) : r;
      };
  });
  var ll = c((F5, cl) => {
    var qb = yt(),
      Mb = ul(),
      Db = no(),
      Fb = Ir();
    cl.exports = function (e, t) {
      for (var r = Mb(t), n = Fb.f, o = Db.f, i = 0; i < r.length; i++) {
        var a = r[i];
        qb(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var dl = c((G5, fl) => {
    var Gb = Vt(),
      Vb = Je(),
      Ub = /#|\.prototype\./,
      Or = function (e, t) {
        var r = Wb[Xb(e)];
        return r == Bb ? !0 : r == Hb ? !1 : Vb(t) ? Gb(t) : !!t;
      },
      Xb = (Or.normalize = function (e) {
        return String(e).replace(Ub, ".").toLowerCase();
      }),
      Wb = (Or.data = {}),
      Hb = (Or.NATIVE = "N"),
      Bb = (Or.POLYFILL = "P");
    fl.exports = Or;
  });
  var hl = c((V5, pl) => {
    var mo = ce(),
      kb = no().f,
      jb = hn(),
      zb = Bc(),
      Kb = dn(),
      Yb = ll(),
      $b = dl();
    pl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        u,
        f,
        h;
      if (
        (n
          ? (a = mo)
          : o
          ? (a = mo[r] || Kb(r, {}))
          : (a = (mo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((h = kb(a, s)), (u = h && h.value)) : (u = a[s]),
            (i = $b(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            Yb(f, u);
          }
          (e.sham || (u && u.sham)) && jb(f, "sham", !0), zb(a, s, f, e);
        }
    };
  });
  var gl = c((U5, vl) => {
    var Qb = Eo(),
      Zb = En();
    vl.exports =
      Object.keys ||
      function (t) {
        return Qb(t, Zb);
      };
  });
  var El = c((X5, yl) => {
    var Jb = St(),
      eO = Ir(),
      tO = Tr(),
      rO = mr(),
      nO = gl();
    yl.exports = Jb
      ? Object.defineProperties
      : function (t, r) {
          tO(t);
          for (var n = rO(r), o = nO(r), i = o.length, a = 0, s; i > a; )
            eO.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var _l = c((W5, ml) => {
    var iO = _r();
    ml.exports = iO("document", "documentElement");
  });
  var wl = c((H5, Sl) => {
    var oO = Tr(),
      aO = El(),
      Tl = En(),
      sO = vn(),
      uO = _l(),
      cO = to(),
      lO = ao(),
      Il = ">",
      bl = "<",
      To = "prototype",
      Io = "script",
      xl = lO("IE_PROTO"),
      _o = function () {},
      Al = function (e) {
        return bl + Io + Il + e + bl + "/" + Io + Il;
      },
      Ol = function (e) {
        e.write(Al("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      fO = function () {
        var e = cO("iframe"),
          t = "java" + Io + ":",
          r;
        return (
          (e.style.display = "none"),
          uO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Al("document.F=Object")),
          r.close(),
          r.F
        );
      },
      mn,
      _n = function () {
        try {
          mn = new ActiveXObject("htmlfile");
        } catch {}
        _n =
          typeof document < "u"
            ? document.domain && mn
              ? Ol(mn)
              : fO()
            : Ol(mn);
        for (var e = Tl.length; e--; ) delete _n[To][Tl[e]];
        return _n();
      };
    sO[xl] = !0;
    Sl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((_o[To] = oO(t)), (n = new _o()), (_o[To] = null), (n[xl] = t))
            : (n = _n()),
          r === void 0 ? n : aO(n, r)
        );
      };
  });
  var Cl = c((B5, Rl) => {
    var dO = Zi(),
      pO = wl(),
      hO = Ir(),
      bo = dO("unscopables"),
      Oo = Array.prototype;
    Oo[bo] == null && hO.f(Oo, bo, { configurable: !0, value: pO(null) });
    Rl.exports = function (e) {
      Oo[bo][e] = !0;
    };
  });
  var Ll = c(() => {
    "use strict";
    var vO = hl(),
      gO = go().includes,
      yO = Cl();
    vO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return gO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    yO("includes");
  });
  var Pl = c((z5, Nl) => {
    var EO = ce(),
      mO = Xe();
    Nl.exports = function (e, t) {
      return mO(EO[e].prototype[t]);
    };
  });
  var Ml = c((K5, ql) => {
    Ll();
    var _O = Pl();
    ql.exports = _O("Array", "includes");
  });
  var Fl = c((Y5, Dl) => {
    var TO = Ml();
    Dl.exports = TO;
  });
  var Vl = c(($5, Gl) => {
    var IO = Fl();
    Gl.exports = IO;
  });
  var xo = c((Q5, Ul) => {
    var bO =
      typeof global == "object" && global && global.Object === Object && global;
    Ul.exports = bO;
  });
  var He = c((Z5, Xl) => {
    var OO = xo(),
      xO = typeof self == "object" && self && self.Object === Object && self,
      AO = OO || xO || Function("return this")();
    Xl.exports = AO;
  });
  var Wt = c((J5, Wl) => {
    var SO = He(),
      wO = SO.Symbol;
    Wl.exports = wO;
  });
  var jl = c((eW, kl) => {
    var Hl = Wt(),
      Bl = Object.prototype,
      RO = Bl.hasOwnProperty,
      CO = Bl.toString,
      xr = Hl ? Hl.toStringTag : void 0;
    function LO(e) {
      var t = RO.call(e, xr),
        r = e[xr];
      try {
        e[xr] = void 0;
        var n = !0;
      } catch {}
      var o = CO.call(e);
      return n && (t ? (e[xr] = r) : delete e[xr]), o;
    }
    kl.exports = LO;
  });
  var Kl = c((tW, zl) => {
    var NO = Object.prototype,
      PO = NO.toString;
    function qO(e) {
      return PO.call(e);
    }
    zl.exports = qO;
  });
  var mt = c((rW, Ql) => {
    var Yl = Wt(),
      MO = jl(),
      DO = Kl(),
      FO = "[object Null]",
      GO = "[object Undefined]",
      $l = Yl ? Yl.toStringTag : void 0;
    function VO(e) {
      return e == null
        ? e === void 0
          ? GO
          : FO
        : $l && $l in Object(e)
        ? MO(e)
        : DO(e);
    }
    Ql.exports = VO;
  });
  var Ao = c((nW, Zl) => {
    function UO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Zl.exports = UO;
  });
  var So = c((iW, Jl) => {
    var XO = Ao(),
      WO = XO(Object.getPrototypeOf, Object);
    Jl.exports = WO;
  });
  var ct = c((oW, ef) => {
    function HO(e) {
      return e != null && typeof e == "object";
    }
    ef.exports = HO;
  });
  var wo = c((aW, rf) => {
    var BO = mt(),
      kO = So(),
      jO = ct(),
      zO = "[object Object]",
      KO = Function.prototype,
      YO = Object.prototype,
      tf = KO.toString,
      $O = YO.hasOwnProperty,
      QO = tf.call(Object);
    function ZO(e) {
      if (!jO(e) || BO(e) != zO) return !1;
      var t = kO(e);
      if (t === null) return !0;
      var r = $O.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && tf.call(r) == QO;
    }
    rf.exports = ZO;
  });
  var nf = c((Ro) => {
    "use strict";
    Object.defineProperty(Ro, "__esModule", { value: !0 });
    Ro.default = JO;
    function JO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var of = c((Lo, Co) => {
    "use strict";
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    var ex = nf(),
      tx = rx(ex);
    function rx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ht;
    typeof self < "u"
      ? (Ht = self)
      : typeof window < "u"
      ? (Ht = window)
      : typeof global < "u"
      ? (Ht = global)
      : typeof Co < "u"
      ? (Ht = Co)
      : (Ht = Function("return this")());
    var nx = (0, tx.default)(Ht);
    Lo.default = nx;
  });
  var No = c((Ar) => {
    "use strict";
    Ar.__esModule = !0;
    Ar.ActionTypes = void 0;
    Ar.default = cf;
    var ix = wo(),
      ox = uf(ix),
      ax = of(),
      af = uf(ax);
    function uf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var sf = (Ar.ActionTypes = { INIT: "@@redux/INIT" });
    function cf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(cf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function h() {
        return i;
      }
      function d(E) {
        if (typeof E != "function")
          throw new Error("Expected listener to be a function.");
        var P = !0;
        return (
          f(),
          s.push(E),
          function () {
            if (P) {
              (P = !1), f();
              var A = s.indexOf(E);
              s.splice(A, 1);
            }
          }
        );
      }
      function v(E) {
        if (!(0, ox.default)(E))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof E.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (i = o(i, E));
        } finally {
          u = !1;
        }
        for (var P = (a = s), x = 0; x < P.length; x++) P[x]();
        return E;
      }
      function m(E) {
        if (typeof E != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = E), v({ type: sf.INIT });
      }
      function _() {
        var E,
          P = d;
        return (
          (E = {
            subscribe: function (A) {
              if (typeof A != "object")
                throw new TypeError("Expected the observer to be an object.");
              function b() {
                A.next && A.next(h());
              }
              b();
              var C = P(b);
              return { unsubscribe: C };
            },
          }),
          (E[af.default] = function () {
            return this;
          }),
          E
        );
      }
      return (
        v({ type: sf.INIT }),
        (n = { dispatch: v, subscribe: d, getState: h, replaceReducer: m }),
        (n[af.default] = _),
        n
      );
    }
  });
  var qo = c((Po) => {
    "use strict";
    Po.__esModule = !0;
    Po.default = sx;
    function sx(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var df = c((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = dx;
    var lf = No(),
      ux = wo(),
      lW = ff(ux),
      cx = qo(),
      fW = ff(cx);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function lx(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function fx(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: lf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                lf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function dx(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        fx(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var v = !1, m = {}, _ = 0; _ < i.length; _++) {
          var E = i[_],
            P = r[E],
            x = f[E],
            A = P(x, h);
          if (typeof A > "u") {
            var b = lx(E, h);
            throw new Error(b);
          }
          (m[E] = A), (v = v || A !== x);
        }
        return v ? m : f;
      };
    }
  });
  var hf = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = px;
    function pf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function px(e, t) {
      if (typeof e == "function") return pf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = pf(a, t));
      }
      return n;
    }
  });
  var Go = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = hx;
    function hx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var vf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    var vx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Vo.default = mx;
    var gx = Go(),
      yx = Ex(gx);
    function Ex(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function mx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            u = s.dispatch,
            f = [],
            h = {
              getState: s.getState,
              dispatch: function (v) {
                return u(v);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(h);
            })),
            (u = yx.default.apply(void 0, f)(s.dispatch)),
            vx({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Uo = c((De) => {
    "use strict";
    De.__esModule = !0;
    De.compose =
      De.applyMiddleware =
      De.bindActionCreators =
      De.combineReducers =
      De.createStore =
        void 0;
    var _x = No(),
      Tx = Bt(_x),
      Ix = df(),
      bx = Bt(Ix),
      Ox = hf(),
      xx = Bt(Ox),
      Ax = vf(),
      Sx = Bt(Ax),
      wx = Go(),
      Rx = Bt(wx),
      Cx = qo(),
      gW = Bt(Cx);
    function Bt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    De.createStore = Tx.default;
    De.combineReducers = bx.default;
    De.bindActionCreators = xx.default;
    De.applyMiddleware = Sx.default;
    De.compose = Rx.default;
  });
  var Be,
    Xo,
    et,
    Lx,
    Nx,
    Tn,
    Px,
    Wo = se(() => {
      "use strict";
      (Be = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Xo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (et = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Lx = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Nx = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Tn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Px = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ce,
    qx,
    In = se(() => {
      "use strict";
      (Ce = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (qx = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Mx,
    gf = se(() => {
      "use strict";
      Mx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Dx,
    Fx,
    Gx,
    Vx,
    Ux,
    Xx,
    Wx,
    Ho,
    yf = se(() => {
      "use strict";
      In();
      ({
        TRANSFORM_MOVE: Dx,
        TRANSFORM_SCALE: Fx,
        TRANSFORM_ROTATE: Gx,
        TRANSFORM_SKEW: Vx,
        STYLE_SIZE: Ux,
        STYLE_FILTER: Xx,
        STYLE_FONT_VARIATION: Wx,
      } = Ce),
        (Ho = {
          [Dx]: !0,
          [Fx]: !0,
          [Gx]: !0,
          [Vx]: !0,
          [Ux]: !0,
          [Xx]: !0,
          [Wx]: !0,
        });
    });
  var ve = {};
  Re(ve, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => oA,
    IX2_ANIMATION_FRAME_CHANGED: () => Jx,
    IX2_CLEAR_REQUESTED: () => $x,
    IX2_ELEMENT_STATE_CHANGED: () => iA,
    IX2_EVENT_LISTENER_ADDED: () => Qx,
    IX2_EVENT_STATE_CHANGED: () => Zx,
    IX2_INSTANCE_ADDED: () => tA,
    IX2_INSTANCE_REMOVED: () => nA,
    IX2_INSTANCE_STARTED: () => rA,
    IX2_MEDIA_QUERIES_DEFINED: () => sA,
    IX2_PARAMETER_CHANGED: () => eA,
    IX2_PLAYBACK_REQUESTED: () => Kx,
    IX2_PREVIEW_REQUESTED: () => zx,
    IX2_RAW_DATA_IMPORTED: () => Hx,
    IX2_SESSION_INITIALIZED: () => Bx,
    IX2_SESSION_STARTED: () => kx,
    IX2_SESSION_STOPPED: () => jx,
    IX2_STOP_REQUESTED: () => Yx,
    IX2_TEST_FRAME_RENDERED: () => uA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => aA,
  });
  var Hx,
    Bx,
    kx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    Ef = se(() => {
      "use strict";
      (Hx = "IX2_RAW_DATA_IMPORTED"),
        (Bx = "IX2_SESSION_INITIALIZED"),
        (kx = "IX2_SESSION_STARTED"),
        (jx = "IX2_SESSION_STOPPED"),
        (zx = "IX2_PREVIEW_REQUESTED"),
        (Kx = "IX2_PLAYBACK_REQUESTED"),
        (Yx = "IX2_STOP_REQUESTED"),
        ($x = "IX2_CLEAR_REQUESTED"),
        (Qx = "IX2_EVENT_LISTENER_ADDED"),
        (Zx = "IX2_EVENT_STATE_CHANGED"),
        (Jx = "IX2_ANIMATION_FRAME_CHANGED"),
        (eA = "IX2_PARAMETER_CHANGED"),
        (tA = "IX2_INSTANCE_ADDED"),
        (rA = "IX2_INSTANCE_STARTED"),
        (nA = "IX2_INSTANCE_REMOVED"),
        (iA = "IX2_ELEMENT_STATE_CHANGED"),
        (oA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (aA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (sA = "IX2_MEDIA_QUERIES_DEFINED"),
        (uA = "IX2_TEST_FRAME_RENDERED");
    });
  var Te = {};
  Re(Te, {
    ABSTRACT_NODE: () => aS,
    AUTO: () => YA,
    BACKGROUND: () => HA,
    BACKGROUND_COLOR: () => WA,
    BAR_DELIMITER: () => ZA,
    BORDER_COLOR: () => BA,
    BOUNDARY_SELECTOR: () => pA,
    CHILDREN: () => JA,
    COLON_DELIMITER: () => QA,
    COLOR: () => kA,
    COMMA_DELIMITER: () => $A,
    CONFIG_UNIT: () => TA,
    CONFIG_VALUE: () => yA,
    CONFIG_X_UNIT: () => EA,
    CONFIG_X_VALUE: () => hA,
    CONFIG_Y_UNIT: () => mA,
    CONFIG_Y_VALUE: () => vA,
    CONFIG_Z_UNIT: () => _A,
    CONFIG_Z_VALUE: () => gA,
    DISPLAY: () => jA,
    FILTER: () => GA,
    FLEX: () => zA,
    FONT_VARIATION_SETTINGS: () => VA,
    HEIGHT: () => XA,
    HTML_ELEMENT: () => iS,
    IMMEDIATE_CHILDREN: () => eS,
    IX2_ID_DELIMITER: () => cA,
    OPACITY: () => FA,
    PARENT: () => rS,
    PLAIN_OBJECT: () => oS,
    PRESERVE_3D: () => nS,
    RENDER_GENERAL: () => uS,
    RENDER_PLUGIN: () => lS,
    RENDER_STYLE: () => cS,
    RENDER_TRANSFORM: () => sS,
    ROTATE_X: () => LA,
    ROTATE_Y: () => NA,
    ROTATE_Z: () => PA,
    SCALE_3D: () => CA,
    SCALE_X: () => SA,
    SCALE_Y: () => wA,
    SCALE_Z: () => RA,
    SIBLINGS: () => tS,
    SKEW: () => qA,
    SKEW_X: () => MA,
    SKEW_Y: () => DA,
    TRANSFORM: () => IA,
    TRANSLATE_3D: () => AA,
    TRANSLATE_X: () => bA,
    TRANSLATE_Y: () => OA,
    TRANSLATE_Z: () => xA,
    WF_PAGE: () => lA,
    WIDTH: () => UA,
    WILL_CHANGE: () => KA,
    W_MOD_IX: () => dA,
    W_MOD_JS: () => fA,
  });
  var cA,
    lA,
    fA,
    dA,
    pA,
    hA,
    vA,
    gA,
    yA,
    EA,
    mA,
    _A,
    TA,
    IA,
    bA,
    OA,
    xA,
    AA,
    SA,
    wA,
    RA,
    CA,
    LA,
    NA,
    PA,
    qA,
    MA,
    DA,
    FA,
    GA,
    VA,
    UA,
    XA,
    WA,
    HA,
    BA,
    kA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    eS,
    tS,
    rS,
    nS,
    iS,
    oS,
    aS,
    sS,
    uS,
    cS,
    lS,
    mf = se(() => {
      "use strict";
      (cA = "|"),
        (lA = "data-wf-page"),
        (fA = "w-mod-js"),
        (dA = "w-mod-ix"),
        (pA = ".w-dyn-item"),
        (hA = "xValue"),
        (vA = "yValue"),
        (gA = "zValue"),
        (yA = "value"),
        (EA = "xUnit"),
        (mA = "yUnit"),
        (_A = "zUnit"),
        (TA = "unit"),
        (IA = "transform"),
        (bA = "translateX"),
        (OA = "translateY"),
        (xA = "translateZ"),
        (AA = "translate3d"),
        (SA = "scaleX"),
        (wA = "scaleY"),
        (RA = "scaleZ"),
        (CA = "scale3d"),
        (LA = "rotateX"),
        (NA = "rotateY"),
        (PA = "rotateZ"),
        (qA = "skew"),
        (MA = "skewX"),
        (DA = "skewY"),
        (FA = "opacity"),
        (GA = "filter"),
        (VA = "font-variation-settings"),
        (UA = "width"),
        (XA = "height"),
        (WA = "backgroundColor"),
        (HA = "background"),
        (BA = "borderColor"),
        (kA = "color"),
        (jA = "display"),
        (zA = "flex"),
        (KA = "willChange"),
        (YA = "AUTO"),
        ($A = ","),
        (QA = ":"),
        (ZA = "|"),
        (JA = "CHILDREN"),
        (eS = "IMMEDIATE_CHILDREN"),
        (tS = "SIBLINGS"),
        (rS = "PARENT"),
        (nS = "preserve-3d"),
        (iS = "HTML_ELEMENT"),
        (oS = "PLAIN_OBJECT"),
        (aS = "ABSTRACT_NODE"),
        (sS = "RENDER_TRANSFORM"),
        (uS = "RENDER_GENERAL"),
        (cS = "RENDER_STYLE"),
        (lS = "RENDER_PLUGIN");
    });
  var _f = {};
  Re(_f, {
    ActionAppliesTo: () => qx,
    ActionTypeConsts: () => Ce,
    EventAppliesTo: () => Xo,
    EventBasedOn: () => et,
    EventContinuousMouseAxes: () => Lx,
    EventLimitAffectedElements: () => Nx,
    EventTypeConsts: () => Be,
    IX2EngineActionTypes: () => ve,
    IX2EngineConstants: () => Te,
    InteractionTypeConsts: () => Mx,
    QuickEffectDirectionConsts: () => Px,
    QuickEffectIds: () => Tn,
    ReducedMotionTypes: () => Ho,
  });
  var Le = se(() => {
    "use strict";
    Wo();
    In();
    gf();
    yf();
    Ef();
    mf();
    In();
    Wo();
  });
  var fS,
    Tf,
    If = se(() => {
      "use strict";
      Le();
      ({ IX2_RAW_DATA_IMPORTED: fS } = ve),
        (Tf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case fS:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var kt = c((fe) => {
    "use strict";
    Object.defineProperty(fe, "__esModule", { value: !0 });
    var dS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    fe.clone = On;
    fe.addLast = xf;
    fe.addFirst = Af;
    fe.removeLast = Sf;
    fe.removeFirst = wf;
    fe.insert = Rf;
    fe.removeAt = Cf;
    fe.replaceAt = Lf;
    fe.getIn = xn;
    fe.set = An;
    fe.setIn = Sn;
    fe.update = Pf;
    fe.updateIn = qf;
    fe.merge = Mf;
    fe.mergeDeep = Df;
    fe.mergeIn = Ff;
    fe.omit = Gf;
    fe.addDefaults = Vf;
    var bf = "INVALID_ARGS";
    function Of(e) {
      throw new Error(e);
    }
    function Bo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var pS = {}.hasOwnProperty;
    function On(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Bo(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function Ne(e, t, r) {
      var n = r;
      n == null && Of(bf);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var h = Bo(f);
          if (h.length)
            for (var d = 0; d <= h.length; d++) {
              var v = h[d];
              if (!(e && n[v] !== void 0)) {
                var m = f[v];
                t && bn(n[v]) && bn(m) && (m = Ne(e, t, n[v], m)),
                  !(m === void 0 || m === n[v]) &&
                    (o || ((o = !0), (n = On(n))), (n[v] = m));
              }
            }
        }
      }
      return n;
    }
    function bn(e) {
      var t = typeof e > "u" ? "undefined" : dS(e);
      return e != null && (t === "object" || t === "function");
    }
    function xf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Af(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Sf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function wf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Rf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Cf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Lf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function xn(e, t) {
      if ((!Array.isArray(t) && Of(bf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function An(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = On(o);
      return (i[t] = r), i;
    }
    function Nf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          bn(e) && bn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Nf(a, t, r, n + 1);
      }
      return An(e, i, o);
    }
    function Sn(e, t, r) {
      return t.length ? Nf(e, t, r, 0) : r;
    }
    function Pf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return An(e, t, o);
    }
    function qf(e, t, r) {
      var n = xn(e, t),
        o = r(n);
      return Sn(e, t, o);
    }
    function Mf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ne.call.apply(Ne, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : Ne(!1, !1, e, t, r, n, o, i);
    }
    function Df(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ne.call.apply(Ne, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : Ne(!1, !0, e, t, r, n, o, i);
    }
    function Ff(e, t, r, n, o, i, a) {
      var s = xn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          h = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        h[d - 7] = arguments[d];
      return (
        h.length
          ? (u = Ne.call.apply(Ne, [null, !1, !1, s, r, n, o, i, a].concat(h)))
          : (u = Ne(!1, !1, s, r, n, o, i, a)),
        Sn(e, t, u)
      );
    }
    function Gf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (pS.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = Bo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (i[u] = e[u]);
      }
      return i;
    }
    function Vf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ne.call.apply(Ne, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : Ne(!0, !1, e, t, r, n, o, i);
    }
    var hS = {
      clone: On,
      addLast: xf,
      addFirst: Af,
      removeLast: Sf,
      removeFirst: wf,
      insert: Rf,
      removeAt: Cf,
      replaceAt: Lf,
      getIn: xn,
      set: An,
      setIn: Sn,
      update: Pf,
      updateIn: qf,
      merge: Mf,
      mergeDeep: Df,
      mergeIn: Ff,
      omit: Gf,
      addDefaults: Vf,
    };
    fe.default = hS;
  });
  var Xf,
    vS,
    gS,
    yS,
    ES,
    mS,
    Uf,
    Wf,
    Hf = se(() => {
      "use strict";
      Le();
      (Xf = ee(kt())),
        ({
          IX2_PREVIEW_REQUESTED: vS,
          IX2_PLAYBACK_REQUESTED: gS,
          IX2_STOP_REQUESTED: yS,
          IX2_CLEAR_REQUESTED: ES,
        } = ve),
        (mS = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Uf = Object.create(null, {
          [vS]: { value: "preview" },
          [gS]: { value: "playback" },
          [yS]: { value: "stop" },
          [ES]: { value: "clear" },
        })),
        (Wf = (e = mS, t) => {
          if (t.type in Uf) {
            let r = [Uf[t.type]];
            return (0, Xf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var xe,
    _S,
    TS,
    IS,
    bS,
    OS,
    xS,
    AS,
    SS,
    wS,
    RS,
    Bf,
    CS,
    kf,
    jf = se(() => {
      "use strict";
      Le();
      (xe = ee(kt())),
        ({
          IX2_SESSION_INITIALIZED: _S,
          IX2_SESSION_STARTED: TS,
          IX2_TEST_FRAME_RENDERED: IS,
          IX2_SESSION_STOPPED: bS,
          IX2_EVENT_LISTENER_ADDED: OS,
          IX2_EVENT_STATE_CHANGED: xS,
          IX2_ANIMATION_FRAME_CHANGED: AS,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: SS,
          IX2_VIEWPORT_WIDTH_CHANGED: wS,
          IX2_MEDIA_QUERIES_DEFINED: RS,
        } = ve),
        (Bf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (CS = 20),
        (kf = (e = Bf, t) => {
          switch (t.type) {
            case _S: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, xe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case TS:
              return (0, xe.set)(e, "active", !0);
            case IS: {
              let {
                payload: { step: r = CS },
              } = t;
              return (0, xe.set)(e, "tick", e.tick + r);
            }
            case bS:
              return Bf;
            case AS: {
              let {
                payload: { now: r },
              } = t;
              return (0, xe.set)(e, "tick", r);
            }
            case OS: {
              let r = (0, xe.addLast)(e.eventListeners, t.payload);
              return (0, xe.set)(e, "eventListeners", r);
            }
            case xS: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, xe.setIn)(e, ["eventState", r], n);
            }
            case SS: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, xe.setIn)(e, ["playbackState", r], n);
            }
            case wS: {
              let { width: r, mediaQueries: n } = t.payload,
                o = n.length,
                i = null;
              for (let a = 0; a < o; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  i = s;
                  break;
                }
              }
              return (0, xe.merge)(e, { viewportWidth: r, mediaQueryKey: i });
            }
            case RS:
              return (0, xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Kf = c((DW, zf) => {
    function LS() {
      (this.__data__ = []), (this.size = 0);
    }
    zf.exports = LS;
  });
  var wn = c((FW, Yf) => {
    function NS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Yf.exports = NS;
  });
  var Sr = c((GW, $f) => {
    var PS = wn();
    function qS(e, t) {
      for (var r = e.length; r--; ) if (PS(e[r][0], t)) return r;
      return -1;
    }
    $f.exports = qS;
  });
  var Zf = c((VW, Qf) => {
    var MS = Sr(),
      DS = Array.prototype,
      FS = DS.splice;
    function GS(e) {
      var t = this.__data__,
        r = MS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : FS.call(t, r, 1), --this.size, !0;
    }
    Qf.exports = GS;
  });
  var ed = c((UW, Jf) => {
    var VS = Sr();
    function US(e) {
      var t = this.__data__,
        r = VS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Jf.exports = US;
  });
  var rd = c((XW, td) => {
    var XS = Sr();
    function WS(e) {
      return XS(this.__data__, e) > -1;
    }
    td.exports = WS;
  });
  var id = c((WW, nd) => {
    var HS = Sr();
    function BS(e, t) {
      var r = this.__data__,
        n = HS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    nd.exports = BS;
  });
  var wr = c((HW, od) => {
    var kS = Kf(),
      jS = Zf(),
      zS = ed(),
      KS = rd(),
      YS = id();
    function jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = kS;
    jt.prototype.delete = jS;
    jt.prototype.get = zS;
    jt.prototype.has = KS;
    jt.prototype.set = YS;
    od.exports = jt;
  });
  var sd = c((BW, ad) => {
    var $S = wr();
    function QS() {
      (this.__data__ = new $S()), (this.size = 0);
    }
    ad.exports = QS;
  });
  var cd = c((kW, ud) => {
    function ZS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ud.exports = ZS;
  });
  var fd = c((jW, ld) => {
    function JS(e) {
      return this.__data__.get(e);
    }
    ld.exports = JS;
  });
  var pd = c((zW, dd) => {
    function e0(e) {
      return this.__data__.has(e);
    }
    dd.exports = e0;
  });
  var tt = c((KW, hd) => {
    function t0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    hd.exports = t0;
  });
  var ko = c((YW, vd) => {
    var r0 = mt(),
      n0 = tt(),
      i0 = "[object AsyncFunction]",
      o0 = "[object Function]",
      a0 = "[object GeneratorFunction]",
      s0 = "[object Proxy]";
    function u0(e) {
      if (!n0(e)) return !1;
      var t = r0(e);
      return t == o0 || t == a0 || t == i0 || t == s0;
    }
    vd.exports = u0;
  });
  var yd = c(($W, gd) => {
    var c0 = He(),
      l0 = c0["__core-js_shared__"];
    gd.exports = l0;
  });
  var _d = c((QW, md) => {
    var jo = yd(),
      Ed = (function () {
        var e = /[^.]+$/.exec((jo && jo.keys && jo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function f0(e) {
      return !!Ed && Ed in e;
    }
    md.exports = f0;
  });
  var zo = c((ZW, Td) => {
    var d0 = Function.prototype,
      p0 = d0.toString;
    function h0(e) {
      if (e != null) {
        try {
          return p0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Td.exports = h0;
  });
  var bd = c((JW, Id) => {
    var v0 = ko(),
      g0 = _d(),
      y0 = tt(),
      E0 = zo(),
      m0 = /[\\^$.*+?()[\]{}|]/g,
      _0 = /^\[object .+?Constructor\]$/,
      T0 = Function.prototype,
      I0 = Object.prototype,
      b0 = T0.toString,
      O0 = I0.hasOwnProperty,
      x0 = RegExp(
        "^" +
          b0
            .call(O0)
            .replace(m0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function A0(e) {
      if (!y0(e) || g0(e)) return !1;
      var t = v0(e) ? x0 : _0;
      return t.test(E0(e));
    }
    Id.exports = A0;
  });
  var xd = c((eH, Od) => {
    function S0(e, t) {
      return e?.[t];
    }
    Od.exports = S0;
  });
  var _t = c((tH, Ad) => {
    var w0 = bd(),
      R0 = xd();
    function C0(e, t) {
      var r = R0(e, t);
      return w0(r) ? r : void 0;
    }
    Ad.exports = C0;
  });
  var Rn = c((rH, Sd) => {
    var L0 = _t(),
      N0 = He(),
      P0 = L0(N0, "Map");
    Sd.exports = P0;
  });
  var Rr = c((nH, wd) => {
    var q0 = _t(),
      M0 = q0(Object, "create");
    wd.exports = M0;
  });
  var Ld = c((iH, Cd) => {
    var Rd = Rr();
    function D0() {
      (this.__data__ = Rd ? Rd(null) : {}), (this.size = 0);
    }
    Cd.exports = D0;
  });
  var Pd = c((oH, Nd) => {
    function F0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Nd.exports = F0;
  });
  var Md = c((aH, qd) => {
    var G0 = Rr(),
      V0 = "__lodash_hash_undefined__",
      U0 = Object.prototype,
      X0 = U0.hasOwnProperty;
    function W0(e) {
      var t = this.__data__;
      if (G0) {
        var r = t[e];
        return r === V0 ? void 0 : r;
      }
      return X0.call(t, e) ? t[e] : void 0;
    }
    qd.exports = W0;
  });
  var Fd = c((sH, Dd) => {
    var H0 = Rr(),
      B0 = Object.prototype,
      k0 = B0.hasOwnProperty;
    function j0(e) {
      var t = this.__data__;
      return H0 ? t[e] !== void 0 : k0.call(t, e);
    }
    Dd.exports = j0;
  });
  var Vd = c((uH, Gd) => {
    var z0 = Rr(),
      K0 = "__lodash_hash_undefined__";
    function Y0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = z0 && t === void 0 ? K0 : t),
        this
      );
    }
    Gd.exports = Y0;
  });
  var Xd = c((cH, Ud) => {
    var $0 = Ld(),
      Q0 = Pd(),
      Z0 = Md(),
      J0 = Fd(),
      ew = Vd();
    function zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    zt.prototype.clear = $0;
    zt.prototype.delete = Q0;
    zt.prototype.get = Z0;
    zt.prototype.has = J0;
    zt.prototype.set = ew;
    Ud.exports = zt;
  });
  var Bd = c((lH, Hd) => {
    var Wd = Xd(),
      tw = wr(),
      rw = Rn();
    function nw() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Wd(),
          map: new (rw || tw)(),
          string: new Wd(),
        });
    }
    Hd.exports = nw;
  });
  var jd = c((fH, kd) => {
    function iw(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    kd.exports = iw;
  });
  var Cr = c((dH, zd) => {
    var ow = jd();
    function aw(e, t) {
      var r = e.__data__;
      return ow(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    zd.exports = aw;
  });
  var Yd = c((pH, Kd) => {
    var sw = Cr();
    function uw(e) {
      var t = sw(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Kd.exports = uw;
  });
  var Qd = c((hH, $d) => {
    var cw = Cr();
    function lw(e) {
      return cw(this, e).get(e);
    }
    $d.exports = lw;
  });
  var Jd = c((vH, Zd) => {
    var fw = Cr();
    function dw(e) {
      return fw(this, e).has(e);
    }
    Zd.exports = dw;
  });
  var tp = c((gH, ep) => {
    var pw = Cr();
    function hw(e, t) {
      var r = pw(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ep.exports = hw;
  });
  var Cn = c((yH, rp) => {
    var vw = Bd(),
      gw = Yd(),
      yw = Qd(),
      Ew = Jd(),
      mw = tp();
    function Kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Kt.prototype.clear = vw;
    Kt.prototype.delete = gw;
    Kt.prototype.get = yw;
    Kt.prototype.has = Ew;
    Kt.prototype.set = mw;
    rp.exports = Kt;
  });
  var ip = c((EH, np) => {
    var _w = wr(),
      Tw = Rn(),
      Iw = Cn(),
      bw = 200;
    function Ow(e, t) {
      var r = this.__data__;
      if (r instanceof _w) {
        var n = r.__data__;
        if (!Tw || n.length < bw - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Iw(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    np.exports = Ow;
  });
  var Ko = c((mH, op) => {
    var xw = wr(),
      Aw = sd(),
      Sw = cd(),
      ww = fd(),
      Rw = pd(),
      Cw = ip();
    function Yt(e) {
      var t = (this.__data__ = new xw(e));
      this.size = t.size;
    }
    Yt.prototype.clear = Aw;
    Yt.prototype.delete = Sw;
    Yt.prototype.get = ww;
    Yt.prototype.has = Rw;
    Yt.prototype.set = Cw;
    op.exports = Yt;
  });
  var sp = c((_H, ap) => {
    var Lw = "__lodash_hash_undefined__";
    function Nw(e) {
      return this.__data__.set(e, Lw), this;
    }
    ap.exports = Nw;
  });
  var cp = c((TH, up) => {
    function Pw(e) {
      return this.__data__.has(e);
    }
    up.exports = Pw;
  });
  var fp = c((IH, lp) => {
    var qw = Cn(),
      Mw = sp(),
      Dw = cp();
    function Ln(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new qw(); ++t < r; ) this.add(e[t]);
    }
    Ln.prototype.add = Ln.prototype.push = Mw;
    Ln.prototype.has = Dw;
    lp.exports = Ln;
  });
  var pp = c((bH, dp) => {
    function Fw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    dp.exports = Fw;
  });
  var vp = c((OH, hp) => {
    function Gw(e, t) {
      return e.has(t);
    }
    hp.exports = Gw;
  });
  var Yo = c((xH, gp) => {
    var Vw = fp(),
      Uw = pp(),
      Xw = vp(),
      Ww = 1,
      Hw = 2;
    function Bw(e, t, r, n, o, i) {
      var a = r & Ww,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = i.get(e),
        h = i.get(t);
      if (f && h) return f == t && h == e;
      var d = -1,
        v = !0,
        m = r & Hw ? new Vw() : void 0;
      for (i.set(e, t), i.set(t, e); ++d < s; ) {
        var _ = e[d],
          E = t[d];
        if (n) var P = a ? n(E, _, d, t, e, i) : n(_, E, d, e, t, i);
        if (P !== void 0) {
          if (P) continue;
          v = !1;
          break;
        }
        if (m) {
          if (
            !Uw(t, function (x, A) {
              if (!Xw(m, A) && (_ === x || o(_, x, r, n, i))) return m.push(A);
            })
          ) {
            v = !1;
            break;
          }
        } else if (!(_ === E || o(_, E, r, n, i))) {
          v = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), v;
    }
    gp.exports = Bw;
  });
  var Ep = c((AH, yp) => {
    var kw = He(),
      jw = kw.Uint8Array;
    yp.exports = jw;
  });
  var _p = c((SH, mp) => {
    function zw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    mp.exports = zw;
  });
  var Ip = c((wH, Tp) => {
    function Kw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Tp.exports = Kw;
  });
  var Sp = c((RH, Ap) => {
    var bp = Wt(),
      Op = Ep(),
      Yw = wn(),
      $w = Yo(),
      Qw = _p(),
      Zw = Ip(),
      Jw = 1,
      eR = 2,
      tR = "[object Boolean]",
      rR = "[object Date]",
      nR = "[object Error]",
      iR = "[object Map]",
      oR = "[object Number]",
      aR = "[object RegExp]",
      sR = "[object Set]",
      uR = "[object String]",
      cR = "[object Symbol]",
      lR = "[object ArrayBuffer]",
      fR = "[object DataView]",
      xp = bp ? bp.prototype : void 0,
      $o = xp ? xp.valueOf : void 0;
    function dR(e, t, r, n, o, i, a) {
      switch (r) {
        case fR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case lR:
          return !(e.byteLength != t.byteLength || !i(new Op(e), new Op(t)));
        case tR:
        case rR:
        case oR:
          return Yw(+e, +t);
        case nR:
          return e.name == t.name && e.message == t.message;
        case aR:
        case uR:
          return e == t + "";
        case iR:
          var s = Qw;
        case sR:
          var u = n & Jw;
          if ((s || (s = Zw), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= eR), a.set(e, t);
          var h = $w(s(e), s(t), n, o, i, a);
          return a.delete(e), h;
        case cR:
          if ($o) return $o.call(e) == $o.call(t);
      }
      return !1;
    }
    Ap.exports = dR;
  });
  var Nn = c((CH, wp) => {
    function pR(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    wp.exports = pR;
  });
  var Ee = c((LH, Rp) => {
    var hR = Array.isArray;
    Rp.exports = hR;
  });
  var Qo = c((NH, Cp) => {
    var vR = Nn(),
      gR = Ee();
    function yR(e, t, r) {
      var n = t(e);
      return gR(e) ? n : vR(n, r(e));
    }
    Cp.exports = yR;
  });
  var Np = c((PH, Lp) => {
    function ER(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Lp.exports = ER;
  });
  var Zo = c((qH, Pp) => {
    function mR() {
      return [];
    }
    Pp.exports = mR;
  });
  var Jo = c((MH, Mp) => {
    var _R = Np(),
      TR = Zo(),
      IR = Object.prototype,
      bR = IR.propertyIsEnumerable,
      qp = Object.getOwnPropertySymbols,
      OR = qp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                _R(qp(e), function (t) {
                  return bR.call(e, t);
                }));
          }
        : TR;
    Mp.exports = OR;
  });
  var Fp = c((DH, Dp) => {
    function xR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Dp.exports = xR;
  });
  var Vp = c((FH, Gp) => {
    var AR = mt(),
      SR = ct(),
      wR = "[object Arguments]";
    function RR(e) {
      return SR(e) && AR(e) == wR;
    }
    Gp.exports = RR;
  });
  var Lr = c((GH, Wp) => {
    var Up = Vp(),
      CR = ct(),
      Xp = Object.prototype,
      LR = Xp.hasOwnProperty,
      NR = Xp.propertyIsEnumerable,
      PR = Up(
        (function () {
          return arguments;
        })()
      )
        ? Up
        : function (e) {
            return CR(e) && LR.call(e, "callee") && !NR.call(e, "callee");
          };
    Wp.exports = PR;
  });
  var Bp = c((VH, Hp) => {
    function qR() {
      return !1;
    }
    Hp.exports = qR;
  });
  var Pn = c((Nr, $t) => {
    var MR = He(),
      DR = Bp(),
      zp = typeof Nr == "object" && Nr && !Nr.nodeType && Nr,
      kp = zp && typeof $t == "object" && $t && !$t.nodeType && $t,
      FR = kp && kp.exports === zp,
      jp = FR ? MR.Buffer : void 0,
      GR = jp ? jp.isBuffer : void 0,
      VR = GR || DR;
    $t.exports = VR;
  });
  var qn = c((UH, Kp) => {
    var UR = 9007199254740991,
      XR = /^(?:0|[1-9]\d*)$/;
    function WR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? UR),
        !!t &&
          (r == "number" || (r != "symbol" && XR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Kp.exports = WR;
  });
  var Mn = c((XH, Yp) => {
    var HR = 9007199254740991;
    function BR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= HR;
    }
    Yp.exports = BR;
  });
  var Qp = c((WH, $p) => {
    var kR = mt(),
      jR = Mn(),
      zR = ct(),
      KR = "[object Arguments]",
      YR = "[object Array]",
      $R = "[object Boolean]",
      QR = "[object Date]",
      ZR = "[object Error]",
      JR = "[object Function]",
      eC = "[object Map]",
      tC = "[object Number]",
      rC = "[object Object]",
      nC = "[object RegExp]",
      iC = "[object Set]",
      oC = "[object String]",
      aC = "[object WeakMap]",
      sC = "[object ArrayBuffer]",
      uC = "[object DataView]",
      cC = "[object Float32Array]",
      lC = "[object Float64Array]",
      fC = "[object Int8Array]",
      dC = "[object Int16Array]",
      pC = "[object Int32Array]",
      hC = "[object Uint8Array]",
      vC = "[object Uint8ClampedArray]",
      gC = "[object Uint16Array]",
      yC = "[object Uint32Array]",
      oe = {};
    oe[cC] =
      oe[lC] =
      oe[fC] =
      oe[dC] =
      oe[pC] =
      oe[hC] =
      oe[vC] =
      oe[gC] =
      oe[yC] =
        !0;
    oe[KR] =
      oe[YR] =
      oe[sC] =
      oe[$R] =
      oe[uC] =
      oe[QR] =
      oe[ZR] =
      oe[JR] =
      oe[eC] =
      oe[tC] =
      oe[rC] =
      oe[nC] =
      oe[iC] =
      oe[oC] =
      oe[aC] =
        !1;
    function EC(e) {
      return zR(e) && jR(e.length) && !!oe[kR(e)];
    }
    $p.exports = EC;
  });
  var Jp = c((HH, Zp) => {
    function mC(e) {
      return function (t) {
        return e(t);
      };
    }
    Zp.exports = mC;
  });
  var th = c((Pr, Qt) => {
    var _C = xo(),
      eh = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
      qr = eh && typeof Qt == "object" && Qt && !Qt.nodeType && Qt,
      TC = qr && qr.exports === eh,
      ea = TC && _C.process,
      IC = (function () {
        try {
          var e = qr && qr.require && qr.require("util").types;
          return e || (ea && ea.binding && ea.binding("util"));
        } catch {}
      })();
    Qt.exports = IC;
  });
  var Dn = c((BH, ih) => {
    var bC = Qp(),
      OC = Jp(),
      rh = th(),
      nh = rh && rh.isTypedArray,
      xC = nh ? OC(nh) : bC;
    ih.exports = xC;
  });
  var ta = c((kH, oh) => {
    var AC = Fp(),
      SC = Lr(),
      wC = Ee(),
      RC = Pn(),
      CC = qn(),
      LC = Dn(),
      NC = Object.prototype,
      PC = NC.hasOwnProperty;
    function qC(e, t) {
      var r = wC(e),
        n = !r && SC(e),
        o = !r && !n && RC(e),
        i = !r && !n && !o && LC(e),
        a = r || n || o || i,
        s = a ? AC(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || PC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              CC(f, u))
          ) &&
          s.push(f);
      return s;
    }
    oh.exports = qC;
  });
  var Fn = c((jH, ah) => {
    var MC = Object.prototype;
    function DC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || MC;
      return e === r;
    }
    ah.exports = DC;
  });
  var uh = c((zH, sh) => {
    var FC = Ao(),
      GC = FC(Object.keys, Object);
    sh.exports = GC;
  });
  var Gn = c((KH, ch) => {
    var VC = Fn(),
      UC = uh(),
      XC = Object.prototype,
      WC = XC.hasOwnProperty;
    function HC(e) {
      if (!VC(e)) return UC(e);
      var t = [];
      for (var r in Object(e)) WC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ch.exports = HC;
  });
  var Ct = c((YH, lh) => {
    var BC = ko(),
      kC = Mn();
    function jC(e) {
      return e != null && kC(e.length) && !BC(e);
    }
    lh.exports = jC;
  });
  var Mr = c(($H, fh) => {
    var zC = ta(),
      KC = Gn(),
      YC = Ct();
    function $C(e) {
      return YC(e) ? zC(e) : KC(e);
    }
    fh.exports = $C;
  });
  var ph = c((QH, dh) => {
    var QC = Qo(),
      ZC = Jo(),
      JC = Mr();
    function eL(e) {
      return QC(e, JC, ZC);
    }
    dh.exports = eL;
  });
  var gh = c((ZH, vh) => {
    var hh = ph(),
      tL = 1,
      rL = Object.prototype,
      nL = rL.hasOwnProperty;
    function iL(e, t, r, n, o, i) {
      var a = r & tL,
        s = hh(e),
        u = s.length,
        f = hh(t),
        h = f.length;
      if (u != h && !a) return !1;
      for (var d = u; d--; ) {
        var v = s[d];
        if (!(a ? v in t : nL.call(t, v))) return !1;
      }
      var m = i.get(e),
        _ = i.get(t);
      if (m && _) return m == t && _ == e;
      var E = !0;
      i.set(e, t), i.set(t, e);
      for (var P = a; ++d < u; ) {
        v = s[d];
        var x = e[v],
          A = t[v];
        if (n) var b = a ? n(A, x, v, t, e, i) : n(x, A, v, e, t, i);
        if (!(b === void 0 ? x === A || o(x, A, r, n, i) : b)) {
          E = !1;
          break;
        }
        P || (P = v == "constructor");
      }
      if (E && !P) {
        var C = e.constructor,
          N = t.constructor;
        C != N &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof C == "function" &&
            C instanceof C &&
            typeof N == "function" &&
            N instanceof N
          ) &&
          (E = !1);
      }
      return i.delete(e), i.delete(t), E;
    }
    vh.exports = iL;
  });
  var Eh = c((JH, yh) => {
    var oL = _t(),
      aL = He(),
      sL = oL(aL, "DataView");
    yh.exports = sL;
  });
  var _h = c((eB, mh) => {
    var uL = _t(),
      cL = He(),
      lL = uL(cL, "Promise");
    mh.exports = lL;
  });
  var Ih = c((tB, Th) => {
    var fL = _t(),
      dL = He(),
      pL = fL(dL, "Set");
    Th.exports = pL;
  });
  var ra = c((rB, bh) => {
    var hL = _t(),
      vL = He(),
      gL = hL(vL, "WeakMap");
    bh.exports = gL;
  });
  var Vn = c((nB, Ch) => {
    var na = Eh(),
      ia = Rn(),
      oa = _h(),
      aa = Ih(),
      sa = ra(),
      Rh = mt(),
      Zt = zo(),
      Oh = "[object Map]",
      yL = "[object Object]",
      xh = "[object Promise]",
      Ah = "[object Set]",
      Sh = "[object WeakMap]",
      wh = "[object DataView]",
      EL = Zt(na),
      mL = Zt(ia),
      _L = Zt(oa),
      TL = Zt(aa),
      IL = Zt(sa),
      Lt = Rh;
    ((na && Lt(new na(new ArrayBuffer(1))) != wh) ||
      (ia && Lt(new ia()) != Oh) ||
      (oa && Lt(oa.resolve()) != xh) ||
      (aa && Lt(new aa()) != Ah) ||
      (sa && Lt(new sa()) != Sh)) &&
      (Lt = function (e) {
        var t = Rh(e),
          r = t == yL ? e.constructor : void 0,
          n = r ? Zt(r) : "";
        if (n)
          switch (n) {
            case EL:
              return wh;
            case mL:
              return Oh;
            case _L:
              return xh;
            case TL:
              return Ah;
            case IL:
              return Sh;
          }
        return t;
      });
    Ch.exports = Lt;
  });
  var Gh = c((iB, Fh) => {
    var ua = Ko(),
      bL = Yo(),
      OL = Sp(),
      xL = gh(),
      Lh = Vn(),
      Nh = Ee(),
      Ph = Pn(),
      AL = Dn(),
      SL = 1,
      qh = "[object Arguments]",
      Mh = "[object Array]",
      Un = "[object Object]",
      wL = Object.prototype,
      Dh = wL.hasOwnProperty;
    function RL(e, t, r, n, o, i) {
      var a = Nh(e),
        s = Nh(t),
        u = a ? Mh : Lh(e),
        f = s ? Mh : Lh(t);
      (u = u == qh ? Un : u), (f = f == qh ? Un : f);
      var h = u == Un,
        d = f == Un,
        v = u == f;
      if (v && Ph(e)) {
        if (!Ph(t)) return !1;
        (a = !0), (h = !1);
      }
      if (v && !h)
        return (
          i || (i = new ua()),
          a || AL(e) ? bL(e, t, r, n, o, i) : OL(e, t, u, r, n, o, i)
        );
      if (!(r & SL)) {
        var m = h && Dh.call(e, "__wrapped__"),
          _ = d && Dh.call(t, "__wrapped__");
        if (m || _) {
          var E = m ? e.value() : e,
            P = _ ? t.value() : t;
          return i || (i = new ua()), o(E, P, r, n, i);
        }
      }
      return v ? (i || (i = new ua()), xL(e, t, r, n, o, i)) : !1;
    }
    Fh.exports = RL;
  });
  var ca = c((oB, Xh) => {
    var CL = Gh(),
      Vh = ct();
    function Uh(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!Vh(e) && !Vh(t))
        ? e !== e && t !== t
        : CL(e, t, r, n, Uh, o);
    }
    Xh.exports = Uh;
  });
  var Hh = c((aB, Wh) => {
    var LL = Ko(),
      NL = ca(),
      PL = 1,
      qL = 2;
    function ML(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var u = s[0],
          f = e[u],
          h = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var d = new LL();
          if (n) var v = n(f, h, u, e, t, d);
          if (!(v === void 0 ? NL(h, f, PL | qL, n, d) : v)) return !1;
        }
      }
      return !0;
    }
    Wh.exports = ML;
  });
  var la = c((sB, Bh) => {
    var DL = tt();
    function FL(e) {
      return e === e && !DL(e);
    }
    Bh.exports = FL;
  });
  var jh = c((uB, kh) => {
    var GL = la(),
      VL = Mr();
    function UL(e) {
      for (var t = VL(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, GL(o)];
      }
      return t;
    }
    kh.exports = UL;
  });
  var fa = c((cB, zh) => {
    function XL(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    zh.exports = XL;
  });
  var Yh = c((lB, Kh) => {
    var WL = Hh(),
      HL = jh(),
      BL = fa();
    function kL(e) {
      var t = HL(e);
      return t.length == 1 && t[0][2]
        ? BL(t[0][0], t[0][1])
        : function (r) {
            return r === e || WL(r, e, t);
          };
    }
    Kh.exports = kL;
  });
  var Dr = c((fB, $h) => {
    var jL = mt(),
      zL = ct(),
      KL = "[object Symbol]";
    function YL(e) {
      return typeof e == "symbol" || (zL(e) && jL(e) == KL);
    }
    $h.exports = YL;
  });
  var Xn = c((dB, Qh) => {
    var $L = Ee(),
      QL = Dr(),
      ZL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      JL = /^\w*$/;
    function eN(e, t) {
      if ($L(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        QL(e)
        ? !0
        : JL.test(e) || !ZL.test(e) || (t != null && e in Object(t));
    }
    Qh.exports = eN;
  });
  var ev = c((pB, Jh) => {
    var Zh = Cn(),
      tN = "Expected a function";
    function da(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(tN);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (da.Cache || Zh)()), r;
    }
    da.Cache = Zh;
    Jh.exports = da;
  });
  var rv = c((hB, tv) => {
    var rN = ev(),
      nN = 500;
    function iN(e) {
      var t = rN(e, function (n) {
          return r.size === nN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    tv.exports = iN;
  });
  var iv = c((vB, nv) => {
    var oN = rv(),
      aN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      sN = /\\(\\)?/g,
      uN = oN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(aN, function (r, n, o, i) {
            t.push(o ? i.replace(sN, "$1") : n || r);
          }),
          t
        );
      });
    nv.exports = uN;
  });
  var pa = c((gB, ov) => {
    function cN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    ov.exports = cN;
  });
  var fv = c((yB, lv) => {
    var av = Wt(),
      lN = pa(),
      fN = Ee(),
      dN = Dr(),
      pN = 1 / 0,
      sv = av ? av.prototype : void 0,
      uv = sv ? sv.toString : void 0;
    function cv(e) {
      if (typeof e == "string") return e;
      if (fN(e)) return lN(e, cv) + "";
      if (dN(e)) return uv ? uv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -pN ? "-0" : t;
    }
    lv.exports = cv;
  });
  var pv = c((EB, dv) => {
    var hN = fv();
    function vN(e) {
      return e == null ? "" : hN(e);
    }
    dv.exports = vN;
  });
  var Fr = c((mB, hv) => {
    var gN = Ee(),
      yN = Xn(),
      EN = iv(),
      mN = pv();
    function _N(e, t) {
      return gN(e) ? e : yN(e, t) ? [e] : EN(mN(e));
    }
    hv.exports = _N;
  });
  var Jt = c((_B, vv) => {
    var TN = Dr(),
      IN = 1 / 0;
    function bN(e) {
      if (typeof e == "string" || TN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -IN ? "-0" : t;
    }
    vv.exports = bN;
  });
  var Wn = c((TB, gv) => {
    var ON = Fr(),
      xN = Jt();
    function AN(e, t) {
      t = ON(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[xN(t[r++])];
      return r && r == n ? e : void 0;
    }
    gv.exports = AN;
  });
  var Hn = c((IB, yv) => {
    var SN = Wn();
    function wN(e, t, r) {
      var n = e == null ? void 0 : SN(e, t);
      return n === void 0 ? r : n;
    }
    yv.exports = wN;
  });
  var mv = c((bB, Ev) => {
    function RN(e, t) {
      return e != null && t in Object(e);
    }
    Ev.exports = RN;
  });
  var Tv = c((OB, _v) => {
    var CN = Fr(),
      LN = Lr(),
      NN = Ee(),
      PN = qn(),
      qN = Mn(),
      MN = Jt();
    function DN(e, t, r) {
      t = CN(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = MN(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && qN(o) && PN(a, o) && (NN(e) || LN(e)));
    }
    _v.exports = DN;
  });
  var bv = c((xB, Iv) => {
    var FN = mv(),
      GN = Tv();
    function VN(e, t) {
      return e != null && GN(e, t, FN);
    }
    Iv.exports = VN;
  });
  var xv = c((AB, Ov) => {
    var UN = ca(),
      XN = Hn(),
      WN = bv(),
      HN = Xn(),
      BN = la(),
      kN = fa(),
      jN = Jt(),
      zN = 1,
      KN = 2;
    function YN(e, t) {
      return HN(e) && BN(t)
        ? kN(jN(e), t)
        : function (r) {
            var n = XN(r, e);
            return n === void 0 && n === t ? WN(r, e) : UN(t, n, zN | KN);
          };
    }
    Ov.exports = YN;
  });
  var Bn = c((SB, Av) => {
    function $N(e) {
      return e;
    }
    Av.exports = $N;
  });
  var ha = c((wB, Sv) => {
    function QN(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Sv.exports = QN;
  });
  var Rv = c((RB, wv) => {
    var ZN = Wn();
    function JN(e) {
      return function (t) {
        return ZN(t, e);
      };
    }
    wv.exports = JN;
  });
  var Lv = c((CB, Cv) => {
    var eP = ha(),
      tP = Rv(),
      rP = Xn(),
      nP = Jt();
    function iP(e) {
      return rP(e) ? eP(nP(e)) : tP(e);
    }
    Cv.exports = iP;
  });
  var Tt = c((LB, Nv) => {
    var oP = Yh(),
      aP = xv(),
      sP = Bn(),
      uP = Ee(),
      cP = Lv();
    function lP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? sP
        : typeof e == "object"
        ? uP(e)
          ? aP(e[0], e[1])
          : oP(e)
        : cP(e);
    }
    Nv.exports = lP;
  });
  var va = c((NB, Pv) => {
    var fP = Tt(),
      dP = Ct(),
      pP = Mr();
    function hP(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!dP(t)) {
          var i = fP(r, 3);
          (t = pP(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    Pv.exports = hP;
  });
  var ga = c((PB, qv) => {
    function vP(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    qv.exports = vP;
  });
  var Dv = c((qB, Mv) => {
    var gP = /\s/;
    function yP(e) {
      for (var t = e.length; t-- && gP.test(e.charAt(t)); );
      return t;
    }
    Mv.exports = yP;
  });
  var Gv = c((MB, Fv) => {
    var EP = Dv(),
      mP = /^\s+/;
    function _P(e) {
      return e && e.slice(0, EP(e) + 1).replace(mP, "");
    }
    Fv.exports = _P;
  });
  var kn = c((DB, Xv) => {
    var TP = Gv(),
      Vv = tt(),
      IP = Dr(),
      Uv = 0 / 0,
      bP = /^[-+]0x[0-9a-f]+$/i,
      OP = /^0b[01]+$/i,
      xP = /^0o[0-7]+$/i,
      AP = parseInt;
    function SP(e) {
      if (typeof e == "number") return e;
      if (IP(e)) return Uv;
      if (Vv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Vv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = TP(e);
      var r = OP.test(e);
      return r || xP.test(e) ? AP(e.slice(2), r ? 2 : 8) : bP.test(e) ? Uv : +e;
    }
    Xv.exports = SP;
  });
  var Bv = c((FB, Hv) => {
    var wP = kn(),
      Wv = 1 / 0,
      RP = 17976931348623157e292;
    function CP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = wP(e)), e === Wv || e === -Wv)) {
        var t = e < 0 ? -1 : 1;
        return t * RP;
      }
      return e === e ? e : 0;
    }
    Hv.exports = CP;
  });
  var ya = c((GB, kv) => {
    var LP = Bv();
    function NP(e) {
      var t = LP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    kv.exports = NP;
  });
  var zv = c((VB, jv) => {
    var PP = ga(),
      qP = Tt(),
      MP = ya(),
      DP = Math.max;
    function FP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : MP(r);
      return o < 0 && (o = DP(n + o, 0)), PP(e, qP(t, 3), o);
    }
    jv.exports = FP;
  });
  var Ea = c((UB, Kv) => {
    var GP = va(),
      VP = zv(),
      UP = GP(VP);
    Kv.exports = UP;
  });
  var Qv = {};
  Re(Qv, {
    ELEMENT_MATCHES: () => XP,
    FLEX_PREFIXED: () => ma,
    IS_BROWSER_ENV: () => ke,
    TRANSFORM_PREFIXED: () => It,
    TRANSFORM_STYLE_PREFIXED: () => zn,
    withBrowser: () => jn,
  });
  var $v,
    ke,
    jn,
    XP,
    ma,
    It,
    Yv,
    zn,
    Kn = se(() => {
      "use strict";
      ($v = ee(Ea())),
        (ke = typeof window < "u"),
        (jn = (e, t) => (ke ? e() : t)),
        (XP = jn(() =>
          (0, $v.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ma = jn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o];
              if (((e.style.display = i), e.style.display === i)) return i;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (It = jn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o] + r;
              if (e.style[i] !== void 0) return i;
            }
          }
          return "transform";
        }, "transform")),
        (Yv = It.split("transform")[0]),
        (zn = Yv ? Yv + "TransformStyle" : "transformStyle");
    });
  var _a = c((XB, rg) => {
    var WP = 4,
      HP = 0.001,
      BP = 1e-7,
      kP = 10,
      Gr = 11,
      Yn = 1 / (Gr - 1),
      jP = typeof Float32Array == "function";
    function Zv(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Jv(e, t) {
      return 3 * t - 6 * e;
    }
    function eg(e) {
      return 3 * e;
    }
    function $n(e, t, r) {
      return ((Zv(t, r) * e + Jv(t, r)) * e + eg(t)) * e;
    }
    function tg(e, t, r) {
      return 3 * Zv(t, r) * e * e + 2 * Jv(t, r) * e + eg(t);
    }
    function zP(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = $n(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > BP && ++s < kP);
      return a;
    }
    function KP(e, t, r, n) {
      for (var o = 0; o < WP; ++o) {
        var i = tg(t, r, n);
        if (i === 0) return t;
        var a = $n(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    rg.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = jP ? new Float32Array(Gr) : new Array(Gr);
      if (t !== r || n !== o)
        for (var a = 0; a < Gr; ++a) i[a] = $n(a * Yn, t, n);
      function s(u) {
        for (var f = 0, h = 1, d = Gr - 1; h !== d && i[h] <= u; ++h) f += Yn;
        --h;
        var v = (u - i[h]) / (i[h + 1] - i[h]),
          m = f + v * Yn,
          _ = tg(m, t, n);
        return _ >= HP ? KP(u, m, t, n) : _ === 0 ? m : zP(u, f, f + Yn, t, n);
      }
      return function (f) {
        return t === r && n === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : $n(s(f), r, o);
      };
    };
  });
  var Ur = {};
  Re(Ur, {
    bounce: () => Cq,
    bouncePast: () => Lq,
    ease: () => YP,
    easeIn: () => $P,
    easeInOut: () => ZP,
    easeOut: () => QP,
    inBack: () => Tq,
    inCirc: () => yq,
    inCubic: () => rq,
    inElastic: () => Oq,
    inExpo: () => hq,
    inOutBack: () => bq,
    inOutCirc: () => mq,
    inOutCubic: () => iq,
    inOutElastic: () => Aq,
    inOutExpo: () => gq,
    inOutQuad: () => tq,
    inOutQuart: () => sq,
    inOutQuint: () => lq,
    inOutSine: () => pq,
    inQuad: () => JP,
    inQuart: () => oq,
    inQuint: () => uq,
    inSine: () => fq,
    outBack: () => Iq,
    outBounce: () => _q,
    outCirc: () => Eq,
    outCubic: () => nq,
    outElastic: () => xq,
    outExpo: () => vq,
    outQuad: () => eq,
    outQuart: () => aq,
    outQuint: () => cq,
    outSine: () => dq,
    swingFrom: () => wq,
    swingFromTo: () => Sq,
    swingTo: () => Rq,
  });
  function JP(e) {
    return Math.pow(e, 2);
  }
  function eq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function tq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function rq(e) {
    return Math.pow(e, 3);
  }
  function nq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function iq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function oq(e) {
    return Math.pow(e, 4);
  }
  function aq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function sq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function uq(e) {
    return Math.pow(e, 5);
  }
  function cq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function lq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function fq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function dq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function pq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function hq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function vq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function gq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function yq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Eq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function mq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function _q(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Tq(e) {
    let t = lt;
    return e * e * ((t + 1) * e - t);
  }
  function Iq(e) {
    let t = lt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function bq(e) {
    let t = lt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Oq(e) {
    let t = lt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function xq(e) {
    let t = lt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Aq(e) {
    let t = lt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Sq(e) {
    let t = lt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function wq(e) {
    let t = lt;
    return e * e * ((t + 1) * e - t);
  }
  function Rq(e) {
    let t = lt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Cq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Lq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Vr,
    lt,
    YP,
    $P,
    QP,
    ZP,
    Ta = se(() => {
      "use strict";
      (Vr = ee(_a())),
        (lt = 1.70158),
        (YP = (0, Vr.default)(0.25, 0.1, 0.25, 1)),
        ($P = (0, Vr.default)(0.42, 0, 1, 1)),
        (QP = (0, Vr.default)(0, 0, 0.58, 1)),
        (ZP = (0, Vr.default)(0.42, 0, 0.58, 1));
    });
  var ig = {};
  Re(ig, {
    applyEasing: () => Pq,
    createBezierEasing: () => Nq,
    optimizeFloat: () => Xr,
  });
  function Xr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      o = Number(Math.round(e * n) / n);
    return Math.abs(o) > 1e-4 ? o : 0;
  }
  function Nq(e) {
    return (0, ng.default)(...e);
  }
  function Pq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Xr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Ur[e] ? Ur[e](t) : t);
  }
  var ng,
    Ia = se(() => {
      "use strict";
      Ta();
      ng = ee(_a());
    });
  var sg = {};
  Re(sg, {
    createElementState: () => ag,
    ixElements: () => zq,
    mergeActionState: () => ba,
  });
  function ag(e, t, r, n, o) {
    let i =
      r === qq ? (0, er.getIn)(o, ["config", "target", "objectId"]) : null;
    return (0, er.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
  }
  function ba(e, t, r, n, o) {
    let i = Yq(o);
    return (0, er.mergeIn)(e, [t, jq, r], n, i);
  }
  function Yq(e) {
    let { config: t } = e;
    return Kq.reduce((r, n) => {
      let o = n[0],
        i = n[1],
        a = t[o],
        s = t[i];
      return a != null && s != null && (r[i] = s), r;
    }, {});
  }
  var er,
    HB,
    qq,
    BB,
    Mq,
    Dq,
    Fq,
    Gq,
    Vq,
    Uq,
    Xq,
    Wq,
    Hq,
    Bq,
    kq,
    og,
    jq,
    zq,
    Kq,
    ug = se(() => {
      "use strict";
      er = ee(kt());
      Le();
      ({
        HTML_ELEMENT: HB,
        PLAIN_OBJECT: qq,
        ABSTRACT_NODE: BB,
        CONFIG_X_VALUE: Mq,
        CONFIG_Y_VALUE: Dq,
        CONFIG_Z_VALUE: Fq,
        CONFIG_VALUE: Gq,
        CONFIG_X_UNIT: Vq,
        CONFIG_Y_UNIT: Uq,
        CONFIG_Z_UNIT: Xq,
        CONFIG_UNIT: Wq,
      } = Te),
        ({
          IX2_SESSION_STOPPED: Hq,
          IX2_INSTANCE_ADDED: Bq,
          IX2_ELEMENT_STATE_CHANGED: kq,
        } = ve),
        (og = {}),
        (jq = "refState"),
        (zq = (e = og, t = {}) => {
          switch (t.type) {
            case Hq:
              return og;
            case Bq: {
              let {
                  elementId: r,
                  element: n,
                  origin: o,
                  actionItem: i,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = i,
                u = e;
              return (
                (0, er.getIn)(u, [r, n]) !== n && (u = ag(u, n, a, r, i)),
                ba(u, r, s, o, i)
              );
            }
            case kq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: o,
                actionItem: i,
              } = t.payload;
              return ba(e, r, n, o, i);
            }
            default:
              return e;
          }
        });
      Kq = [
        [Mq, Vq],
        [Dq, Uq],
        [Fq, Xq],
        [Gq, Wq],
      ];
    });
  var cg = c((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.renderPlugin =
      me.getPluginOrigin =
      me.getPluginDuration =
      me.getPluginDestination =
      me.getPluginConfig =
      me.createPluginInstance =
      me.clearPlugin =
        void 0;
    var $q = (e) => e.value;
    me.getPluginConfig = $q;
    var Qq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    me.getPluginDuration = Qq;
    var Zq = (e) => e || { value: 0 };
    me.getPluginOrigin = Zq;
    var Jq = (e) => ({ value: e.value });
    me.getPluginDestination = Jq;
    var eM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    me.createPluginInstance = eM;
    var tM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    me.renderPlugin = tM;
    var rM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    me.clearPlugin = rM;
  });
  var fg = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var nM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      iM = () => window.Webflow.require("spline"),
      oM = (e, t) => e.filter((r) => !t.includes(r)),
      aM = (e, t) => e.value[t];
    _e.getPluginConfig = aM;
    var sM = () => null;
    _e.getPluginDuration = sM;
    var lg = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      uM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let i = Object.keys(e),
            a = oM(n, i);
          return a.length ? a.reduce((u, f) => ((u[f] = lg[f]), u), e) : e;
        }
        return n.reduce((i, a) => ((i[a] = lg[a]), i), {});
      };
    _e.getPluginOrigin = uM;
    var cM = (e) => e.value;
    _e.getPluginDestination = cM;
    var lM = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? nM(n) : null;
    };
    _e.createPluginInstance = lM;
    var fM = (e, t, r) => {
      let n = iM(),
        o = n.getInstance(e),
        i = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = i && s.findObjectById(i);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      o ? a(o.spline) : n.setLoadHandler(e, a);
    };
    _e.renderPlugin = fM;
    var dM = () => null;
    _e.clearPlugin = dM;
  });
  var pg = c((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    ge.getPluginOrigin =
      ge.getPluginDuration =
      ge.getPluginDestination =
      ge.getPluginConfig =
      ge.createPluginInstance =
      ge.clearPlugin =
        void 0;
    ge.normalizeColor = dg;
    ge.renderPlugin = void 0;
    function dg(e) {
      let t,
        r,
        n,
        o = 1,
        i = e.replace(/\s/g, "").toLowerCase();
      if (i.startsWith("#")) {
        let a = i.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (i.startsWith("rgba")) {
        let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (o = parseFloat(a[3]));
      } else if (i.startsWith("rgb")) {
        let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (i.startsWith("hsla")) {
        let a = i.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        o = parseFloat(a[3]);
        let h = (1 - Math.abs(2 * f - 1)) * u,
          d = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          v = f - h / 2,
          m,
          _,
          E;
        s >= 0 && s < 60
          ? ((m = h), (_ = d), (E = 0))
          : s >= 60 && s < 120
          ? ((m = d), (_ = h), (E = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (_ = h), (E = d))
          : s >= 180 && s < 240
          ? ((m = 0), (_ = d), (E = h))
          : s >= 240 && s < 300
          ? ((m = d), (_ = 0), (E = h))
          : ((m = h), (_ = 0), (E = d)),
          (t = Math.round((m + v) * 255)),
          (r = Math.round((_ + v) * 255)),
          (n = Math.round((E + v) * 255));
      } else if (i.startsWith("hsl")) {
        let a = i.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * f - 1)) * u,
          d = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          v = f - h / 2,
          m,
          _,
          E;
        s >= 0 && s < 60
          ? ((m = h), (_ = d), (E = 0))
          : s >= 60 && s < 120
          ? ((m = d), (_ = h), (E = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (_ = h), (E = d))
          : s >= 180 && s < 240
          ? ((m = 0), (_ = d), (E = h))
          : s >= 240 && s < 300
          ? ((m = d), (_ = 0), (E = h))
          : ((m = h), (_ = 0), (E = d)),
          (t = Math.round((m + v) * 255)),
          (r = Math.round((_ + v) * 255)),
          (n = Math.round((E + v) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: o }
      );
    }
    var pM = (e, t) => e.value[t];
    ge.getPluginConfig = pM;
    var hM = () => null;
    ge.getPluginDuration = hM;
    var vM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        o = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(o, 10) };
      if (r.red != null && r.green != null && r.blue != null) return dg(o);
    };
    ge.getPluginOrigin = vM;
    var gM = (e) => e.value;
    ge.getPluginDestination = gM;
    var yM = () => null;
    ge.createPluginInstance = yM;
    var EM = (e, t, r) => {
      let n = r.config.target.objectId,
        o = r.config.value.unit,
        { PLUGIN_VARIABLE: i } = t,
        { size: a, red: s, green: u, blue: f, alpha: h } = i,
        d;
      a != null && (d = a + o),
        s != null &&
          f != null &&
          u != null &&
          h != null &&
          (d = `rgba(${s}, ${u}, ${f}, ${h})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    ge.renderPlugin = EM;
    var mM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    ge.clearPlugin = mM;
  });
  var hg = c((Qn) => {
    "use strict";
    var xa = un().default;
    Object.defineProperty(Qn, "__esModule", { value: !0 });
    Qn.pluginMethodMap = void 0;
    var Oa = (Le(), Ye(_f)),
      _M = xa(cg()),
      TM = xa(fg()),
      IM = xa(pg()),
      KB = (Qn.pluginMethodMap = new Map([
        [Oa.ActionTypeConsts.PLUGIN_LOTTIE, { ..._M }],
        [Oa.ActionTypeConsts.PLUGIN_SPLINE, { ...TM }],
        [Oa.ActionTypeConsts.PLUGIN_VARIABLE, { ...IM }],
      ]));
  });
  var vg = {};
  Re(vg, {
    clearPlugin: () => La,
    createPluginInstance: () => OM,
    getPluginConfig: () => Sa,
    getPluginDestination: () => Ra,
    getPluginDuration: () => bM,
    getPluginOrigin: () => wa,
    isPluginType: () => Nt,
    renderPlugin: () => Ca,
  });
  function Nt(e) {
    return Aa.pluginMethodMap.has(e);
  }
  var Aa,
    Pt,
    Sa,
    wa,
    bM,
    Ra,
    OM,
    Ca,
    La,
    Na = se(() => {
      "use strict";
      Kn();
      Aa = ee(hg());
      (Pt = (e) => (t) => {
        if (!ke) return () => null;
        let r = Aa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Sa = Pt("getPluginConfig")),
        (wa = Pt("getPluginOrigin")),
        (bM = Pt("getPluginDuration")),
        (Ra = Pt("getPluginDestination")),
        (OM = Pt("createPluginInstance")),
        (Ca = Pt("renderPlugin")),
        (La = Pt("clearPlugin"));
    });
  var yg = c((QB, gg) => {
    function xM(e, t) {
      return e == null || e !== e ? t : e;
    }
    gg.exports = xM;
  });
  var mg = c((ZB, Eg) => {
    function AM(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    Eg.exports = AM;
  });
  var Tg = c((JB, _g) => {
    function SM(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++o];
          if (r(i[u], u, i) === !1) break;
        }
        return t;
      };
    }
    _g.exports = SM;
  });
  var bg = c((ek, Ig) => {
    var wM = Tg(),
      RM = wM();
    Ig.exports = RM;
  });
  var Pa = c((tk, Og) => {
    var CM = bg(),
      LM = Mr();
    function NM(e, t) {
      return e && CM(e, t, LM);
    }
    Og.exports = NM;
  });
  var Ag = c((rk, xg) => {
    var PM = Ct();
    function qM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!PM(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    xg.exports = qM;
  });
  var qa = c((nk, Sg) => {
    var MM = Pa(),
      DM = Ag(),
      FM = DM(MM);
    Sg.exports = FM;
  });
  var Rg = c((ik, wg) => {
    function GM(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    wg.exports = GM;
  });
  var Lg = c((ok, Cg) => {
    var VM = mg(),
      UM = qa(),
      XM = Tt(),
      WM = Rg(),
      HM = Ee();
    function BM(e, t, r) {
      var n = HM(e) ? VM : WM,
        o = arguments.length < 3;
      return n(e, XM(t, 4), r, o, UM);
    }
    Cg.exports = BM;
  });
  var Pg = c((ak, Ng) => {
    var kM = ga(),
      jM = Tt(),
      zM = ya(),
      KM = Math.max,
      YM = Math.min;
    function $M(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = zM(r)), (o = r < 0 ? KM(n + o, 0) : YM(o, n - 1))),
        kM(e, jM(t, 3), o, !0)
      );
    }
    Ng.exports = $M;
  });
  var Mg = c((sk, qg) => {
    var QM = va(),
      ZM = Pg(),
      JM = QM(ZM);
    qg.exports = JM;
  });
  function Dg(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function t1(e, t) {
    if (Dg(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let o = 0; o < r.length; o++)
      if (!e1.call(t, r[o]) || !Dg(e[r[o]], t[r[o]])) return !1;
    return !0;
  }
  var e1,
    Ma,
    Fg = se(() => {
      "use strict";
      e1 = Object.prototype.hasOwnProperty;
      Ma = t1;
    });
  var ey = {};
  Re(ey, {
    cleanupHTMLElement: () => Z1,
    clearAllStyles: () => Q1,
    clearObjectCache: () => E1,
    getActionListProgress: () => eD,
    getAffectedElements: () => Ua,
    getComputedStyle: () => A1,
    getDestinationValues: () => P1,
    getElementId: () => I1,
    getInstanceId: () => _1,
    getInstanceOrigin: () => R1,
    getItemConfigByKey: () => N1,
    getMaxDurationItemIndex: () => Jg,
    getNamespacedParameterId: () => nD,
    getRenderType: () => $g,
    getStyleProp: () => q1,
    mediaQueriesEqual: () => oD,
    observeStore: () => x1,
    reduceListToGroup: () => tD,
    reifyState: () => b1,
    renderHTMLElement: () => M1,
    shallowEqual: () => Ma,
    shouldAllowMediaQuery: () => iD,
    shouldNamespaceEventParameter: () => rD,
    stringifyTarget: () => aD,
  });
  function E1() {
    Zn.clear();
  }
  function _1() {
    return "i" + m1++;
  }
  function I1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + T1++;
  }
  function b1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ri.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      o = r && r.mediaQueries,
      i = [];
    return (
      o
        ? (i = o.map((a) => a.key))
        : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: o,
          mediaQueryKeys: i,
        },
      }
    );
  }
  function x1({ store: e, select: t, onChange: r, comparator: n = O1 }) {
    let { getState: o, subscribe: i } = e,
      a = i(u),
      s = t(o());
    function u() {
      let f = t(o());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Ug(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ua({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: o,
  }) {
    if (!o) throw new Error("IX2 missing elementApi");
    let { targets: i } = e;
    if (Array.isArray(i) && i.length > 0)
      return i.reduce(
        (M, T) =>
          M.concat(
            Ua({
              config: { target: T },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: o,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: h,
        matchSelector: d,
        elementContains: v,
        isSiblingNode: m,
      } = o,
      { target: _ } = e;
    if (!_) return [];
    let {
      id: E,
      objectId: P,
      selector: x,
      selectorGuids: A,
      appliesTo: b,
      useEventTarget: C,
    } = Ug(_);
    if (P) return [Zn.has(P) ? Zn.get(P) : Zn.set(P, {}).get(P)];
    if (b === Xo.PAGE) {
      let M = a(E);
      return M ? [M] : [];
    }
    let S = (t?.action?.config?.affectedElements ?? {})[E || x] || {},
      V = !!(S.id || S.selector),
      X,
      W,
      B,
      j = t && s(Ug(t.target));
    if (
      (V
        ? ((X = S.limitAffectedElements), (W = j), (B = s(S)))
        : (W = B = s({ id: E, selector: x, selectorGuids: A })),
      t && C)
    ) {
      let M = r && (B || C === !0) ? [r] : u(j);
      if (B) {
        if (C === v1) return u(B).filter((T) => M.some((q) => v(T, q)));
        if (C === Gg) return u(B).filter((T) => M.some((q) => v(q, T)));
        if (C === Vg) return u(B).filter((T) => M.some((q) => m(q, T)));
      }
      return M;
    }
    return W == null || B == null
      ? []
      : ke && n
      ? u(B).filter((M) => n.contains(M))
      : X === Gg
      ? u(W, B)
      : X === h1
      ? f(u(W)).filter(d(B))
      : X === Vg
      ? h(u(W)).filter(d(B))
      : u(B);
  }
  function A1({ element: e, actionItem: t }) {
    if (!ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case or:
      case ar:
      case sr:
      case ur:
      case ii:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function R1(e, t = {}, r = {}, n, o) {
    let { getStyle: i } = o,
      { actionTypeId: a } = n;
    if (Nt(a)) return wa(a)(t[a], n);
    switch (n.actionTypeId) {
      case rr:
      case nr:
      case ir:
      case kr:
        return t[n.actionTypeId] || Xa[n.actionTypeId];
      case jr:
        return S1(t[n.actionTypeId], n.config.filters);
      case zr:
        return w1(t[n.actionTypeId], n.config.fontVariations);
      case zg:
        return { value: (0, ft.default)(parseFloat(i(e, ei)), 1) };
      case or: {
        let s = i(e, rt),
          u = i(e, nt),
          f,
          h;
        return (
          n.config.widthUnit === bt
            ? (f = Xg.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, ft.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === bt
            ? (h = Xg.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (h = (0, ft.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: h }
        );
      }
      case ar:
      case sr:
      case ur:
        return K1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: i,
        });
      case ii:
        return { value: (0, ft.default)(i(e, ti), r.display) };
      case y1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function P1({ element: e, actionItem: t, elementApi: r }) {
    if (Nt(t.actionTypeId)) return Ra(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case rr:
      case nr:
      case ir:
      case kr: {
        let { xValue: n, yValue: o, zValue: i } = t.config;
        return { xValue: n, yValue: o, zValue: i };
      }
      case or: {
        let { getStyle: n, setStyle: o, getProperty: i } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!ke) return { widthValue: u, heightValue: f };
        if (a === bt) {
          let h = n(e, rt);
          o(e, rt, ""), (u = i(e, "offsetWidth")), o(e, rt, h);
        }
        if (s === bt) {
          let h = n(e, nt);
          o(e, nt, ""), (f = i(e, "offsetHeight")), o(e, nt, h);
        }
        return { widthValue: u, heightValue: f };
      }
      case ar:
      case sr:
      case ur: {
        let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
        return { rValue: n, gValue: o, bValue: i, aValue: a };
      }
      case jr:
        return t.config.filters.reduce(C1, {});
      case zr:
        return t.config.fontVariations.reduce(L1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function $g(e) {
    if (/^TRANSFORM_/.test(e)) return kg;
    if (/^STYLE_/.test(e)) return Ga;
    if (/^GENERAL_/.test(e)) return Fa;
    if (/^PLUGIN_/.test(e)) return jg;
  }
  function q1(e, t) {
    return e === Ga ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function M1(e, t, r, n, o, i, a, s, u) {
    switch (s) {
      case kg:
        return U1(e, t, r, o, a);
      case Ga:
        return Y1(e, t, r, o, i, a);
      case Fa:
        return $1(e, o, a);
      case jg: {
        let { actionTypeId: f } = o;
        if (Nt(f)) return Ca(f)(u, t, o);
      }
    }
  }
  function U1(e, t, r, n, o) {
    let i = V1.map((s) => {
        let u = Xa[s],
          {
            xValue: f = u.xValue,
            yValue: h = u.yValue,
            zValue: d = u.zValue,
            xUnit: v = "",
            yUnit: m = "",
            zUnit: _ = "",
          } = t[s] || {};
        switch (s) {
          case rr:
            return `${i1}(${f}${v}, ${h}${m}, ${d}${_})`;
          case nr:
            return `${o1}(${f}${v}, ${h}${m}, ${d}${_})`;
          case ir:
            return `${a1}(${f}${v}) ${s1}(${h}${m}) ${u1}(${d}${_})`;
          case kr:
            return `${c1}(${f}${v}, ${h}${m})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = o;
    qt(e, It, o), a(e, It, i), H1(n, r) && a(e, zn, l1);
  }
  function X1(e, t, r, n) {
    let o = (0, ri.default)(t, (a, s, u) => `${a} ${u}(${s}${G1(u, r)})`, ""),
      { setStyle: i } = n;
    qt(e, Wr, n), i(e, Wr, o);
  }
  function W1(e, t, r, n) {
    let o = (0, ri.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: i } = n;
    qt(e, Hr, n), i(e, Hr, o);
  }
  function H1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === rr && n !== void 0) ||
      (e === nr && n !== void 0) ||
      (e === ir && (t !== void 0 || r !== void 0))
    );
  }
  function z1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function K1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let o = Va[t],
      i = n(e, o),
      a = k1.test(i) ? i : r[o],
      s = z1(j1, a).split(Br);
    return {
      rValue: (0, ft.default)(parseInt(s[0], 10), 255),
      gValue: (0, ft.default)(parseInt(s[1], 10), 255),
      bValue: (0, ft.default)(parseInt(s[2], 10), 255),
      aValue: (0, ft.default)(parseFloat(s[3]), 1),
    };
  }
  function Y1(e, t, r, n, o, i) {
    let { setStyle: a } = i;
    switch (n.actionTypeId) {
      case or: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: h } = r;
        f !== void 0 && (s === bt && (s = "px"), qt(e, rt, i), a(e, rt, f + s)),
          h !== void 0 &&
            (u === bt && (u = "px"), qt(e, nt, i), a(e, nt, h + u));
        break;
      }
      case jr: {
        X1(e, r, n.config, i);
        break;
      }
      case zr: {
        W1(e, r, n.config, i);
        break;
      }
      case ar:
      case sr:
      case ur: {
        let s = Va[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          h = Math.round(r.bValue),
          d = r.aValue;
        qt(e, s, i),
          a(e, s, d >= 1 ? `rgb(${u},${f},${h})` : `rgba(${u},${f},${h},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        qt(e, o, i), a(e, o, r.value + s);
        break;
      }
    }
  }
  function $1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ii: {
        let { value: o } = t.config;
        o === f1 && ke ? n(e, ti, ma) : n(e, ti, o);
        return;
      }
    }
  }
  function qt(e, t, r) {
    if (!ke) return;
    let n = Yg[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, tr);
    if (!a) {
      i(e, tr, n);
      return;
    }
    let s = a.split(Br).map(Kg);
    s.indexOf(n) === -1 && i(e, tr, s.concat(n).join(Br));
  }
  function Qg(e, t, r) {
    if (!ke) return;
    let n = Yg[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, tr);
    !a ||
      a.indexOf(n) === -1 ||
      i(
        e,
        tr,
        a
          .split(Br)
          .map(Kg)
          .filter((s) => s !== n)
          .join(Br)
      );
  }
  function Q1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: o = {} } = r;
    Object.keys(n).forEach((i) => {
      let a = n[i],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = o[u];
      f && Wg({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(o).forEach((i) => {
        Wg({ actionList: o[i], elementApi: t });
      });
  }
  function Wg({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e;
    n &&
      n.forEach((i) => {
        Hg({ actionGroup: i, event: t, elementApi: r });
      }),
      o &&
        o.forEach((i) => {
          let { continuousActionGroups: a } = i;
          a.forEach((s) => {
            Hg({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Hg({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((o) => {
      let { actionTypeId: i, config: a } = o,
        s;
      Nt(i)
        ? (s = (u) => La(i)(u, o))
        : (s = Zg({ effect: J1, actionTypeId: i, elementApi: r })),
        Ua({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function Z1(e, t, r) {
    let { setStyle: n, getStyle: o } = r,
      { actionTypeId: i } = t;
    if (i === or) {
      let { config: a } = t;
      a.widthUnit === bt && n(e, rt, ""), a.heightUnit === bt && n(e, nt, "");
    }
    o(e, tr) && Zg({ effect: Qg, actionTypeId: i, elementApi: r })(e);
  }
  function J1(e, t, r) {
    let { setStyle: n } = r;
    Qg(e, t, r), n(e, t, ""), t === It && n(e, zn, "");
  }
  function Jg(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, o) => {
        let { config: i } = n,
          a = i.delay + i.duration;
        a >= t && ((t = a), (r = o));
      }),
      r
    );
  }
  function eD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: o, verboseTimeElapsed: i = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: h } = u,
          d = h[Jg(h)],
          { config: v, actionTypeId: m } = d;
        o.id === d.id && (s = a + i);
        let _ = $g(m) === Fa ? 0 : v.duration;
        a += v.delay + _;
      }),
      a > 0 ? Xr(s / a) : 0
    );
  }
  function tD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e,
      i = [],
      a = (s) => (
        i.push((0, ni.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      o &&
        o.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ni.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
      })
    );
  }
  function rD(e, { basedOn: t }) {
    return (
      (e === Be.SCROLLING_IN_VIEW && (t === et.ELEMENT || t == null)) ||
      (e === Be.MOUSE_MOVE && t === et.ELEMENT)
    );
  }
  function nD(e, t) {
    return e + g1 + t;
  }
  function iD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function oD(e, t) {
    return Ma(e && e.sort(), t && t.sort());
  }
  function aD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Da + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Da + r + Da + n;
  }
  var ft,
    ri,
    Jn,
    ni,
    r1,
    n1,
    i1,
    o1,
    a1,
    s1,
    u1,
    c1,
    l1,
    f1,
    ei,
    Wr,
    Hr,
    rt,
    nt,
    Bg,
    d1,
    p1,
    Gg,
    h1,
    Vg,
    v1,
    ti,
    tr,
    bt,
    Br,
    g1,
    Da,
    kg,
    Fa,
    Ga,
    jg,
    rr,
    nr,
    ir,
    kr,
    zg,
    jr,
    zr,
    or,
    ar,
    sr,
    ur,
    ii,
    y1,
    Kg,
    Va,
    Yg,
    Zn,
    m1,
    T1,
    O1,
    Xg,
    S1,
    w1,
    C1,
    L1,
    N1,
    Xa,
    D1,
    F1,
    G1,
    V1,
    B1,
    k1,
    j1,
    Zg,
    ty = se(() => {
      "use strict";
      (ft = ee(yg())), (ri = ee(Lg())), (Jn = ee(Mg())), (ni = ee(kt()));
      Le();
      Fg();
      Ia();
      Na();
      Kn();
      ({
        BACKGROUND: r1,
        TRANSFORM: n1,
        TRANSLATE_3D: i1,
        SCALE_3D: o1,
        ROTATE_X: a1,
        ROTATE_Y: s1,
        ROTATE_Z: u1,
        SKEW: c1,
        PRESERVE_3D: l1,
        FLEX: f1,
        OPACITY: ei,
        FILTER: Wr,
        FONT_VARIATION_SETTINGS: Hr,
        WIDTH: rt,
        HEIGHT: nt,
        BACKGROUND_COLOR: Bg,
        BORDER_COLOR: d1,
        COLOR: p1,
        CHILDREN: Gg,
        IMMEDIATE_CHILDREN: h1,
        SIBLINGS: Vg,
        PARENT: v1,
        DISPLAY: ti,
        WILL_CHANGE: tr,
        AUTO: bt,
        COMMA_DELIMITER: Br,
        COLON_DELIMITER: g1,
        BAR_DELIMITER: Da,
        RENDER_TRANSFORM: kg,
        RENDER_GENERAL: Fa,
        RENDER_STYLE: Ga,
        RENDER_PLUGIN: jg,
      } = Te),
        ({
          TRANSFORM_MOVE: rr,
          TRANSFORM_SCALE: nr,
          TRANSFORM_ROTATE: ir,
          TRANSFORM_SKEW: kr,
          STYLE_OPACITY: zg,
          STYLE_FILTER: jr,
          STYLE_FONT_VARIATION: zr,
          STYLE_SIZE: or,
          STYLE_BACKGROUND_COLOR: ar,
          STYLE_BORDER: sr,
          STYLE_TEXT_COLOR: ur,
          GENERAL_DISPLAY: ii,
          OBJECT_VALUE: y1,
        } = Ce),
        (Kg = (e) => e.trim()),
        (Va = Object.freeze({ [ar]: Bg, [sr]: d1, [ur]: p1 })),
        (Yg = Object.freeze({
          [It]: n1,
          [Bg]: r1,
          [ei]: ei,
          [Wr]: Wr,
          [rt]: rt,
          [nt]: nt,
          [Hr]: Hr,
        })),
        (Zn = new Map());
      m1 = 1;
      T1 = 1;
      O1 = (e, t) => e === t;
      (Xg = /px/),
        (S1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = D1[n.type]), r),
            e || {}
          )),
        (w1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = F1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (C1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (L1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (N1 = (e, t, r) => {
          if (Nt(e)) return Sa(e)(r, t);
          switch (e) {
            case jr: {
              let n = (0, Jn.default)(r.filters, ({ type: o }) => o === t);
              return n ? n.value : 0;
            }
            case zr: {
              let n = (0, Jn.default)(
                r.fontVariations,
                ({ type: o }) => o === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Xa = {
        [rr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [nr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ir]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [kr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (D1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (F1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (G1 = (e, t) => {
          let r = (0, Jn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (V1 = Object.keys(Xa));
      (B1 = "\\(([^)]+)\\)"), (k1 = /^rgb/), (j1 = RegExp(`rgba?${B1}`));
      Zg =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case rr:
            case nr:
            case ir:
            case kr:
              e(n, It, r);
              break;
            case jr:
              e(n, Wr, r);
              break;
            case zr:
              e(n, Hr, r);
              break;
            case zg:
              e(n, ei, r);
              break;
            case or:
              e(n, rt, r), e(n, nt, r);
              break;
            case ar:
            case sr:
            case ur:
              e(n, Va[t], r);
              break;
            case ii:
              e(n, ti, r);
              break;
          }
        };
    });
  var Mt = c((Ae) => {
    "use strict";
    var cr = un().default;
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.IX2VanillaUtils =
      Ae.IX2VanillaPlugins =
      Ae.IX2ElementsReducer =
      Ae.IX2Easings =
      Ae.IX2EasingUtils =
      Ae.IX2BrowserSupport =
        void 0;
    var sD = cr((Kn(), Ye(Qv)));
    Ae.IX2BrowserSupport = sD;
    var uD = cr((Ta(), Ye(Ur)));
    Ae.IX2Easings = uD;
    var cD = cr((Ia(), Ye(ig)));
    Ae.IX2EasingUtils = cD;
    var lD = cr((ug(), Ye(sg)));
    Ae.IX2ElementsReducer = lD;
    var fD = cr((Na(), Ye(vg)));
    Ae.IX2VanillaPlugins = fD;
    var dD = cr((ty(), Ye(ey)));
    Ae.IX2VanillaUtils = dD;
  });
  var ai,
    dt,
    pD,
    hD,
    vD,
    gD,
    yD,
    ED,
    oi,
    ry,
    mD,
    _D,
    Wa,
    TD,
    ID,
    bD,
    OD,
    ny,
    iy = se(() => {
      "use strict";
      Le();
      (ai = ee(Mt())),
        (dt = ee(kt())),
        ({
          IX2_RAW_DATA_IMPORTED: pD,
          IX2_SESSION_STOPPED: hD,
          IX2_INSTANCE_ADDED: vD,
          IX2_INSTANCE_STARTED: gD,
          IX2_INSTANCE_REMOVED: yD,
          IX2_ANIMATION_FRAME_CHANGED: ED,
        } = ve),
        ({
          optimizeFloat: oi,
          applyEasing: ry,
          createBezierEasing: mD,
        } = ai.IX2EasingUtils),
        ({ RENDER_GENERAL: _D } = Te),
        ({
          getItemConfigByKey: Wa,
          getRenderType: TD,
          getStyleProp: ID,
        } = ai.IX2VanillaUtils),
        (bD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: o,
              destinationKeys: i,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: h,
              skipToValue: d,
            } = e,
            { parameters: v } = t.payload,
            m = Math.max(1 - a, 0.01),
            _ = v[n];
          _ == null && ((m = 1), (_ = s));
          let E = Math.max(_, 0) || 0,
            P = oi(E - r),
            x = h ? d : oi(r + P * m),
            A = x * 100;
          if (x === r && e.current) return e;
          let b, C, N, S;
          for (let X = 0, { length: W } = o; X < W; X++) {
            let { keyframe: B, actionItems: j } = o[X];
            if ((X === 0 && (b = j[0]), A >= B)) {
              b = j[0];
              let M = o[X + 1],
                T = M && A !== B;
              (C = T ? M.actionItems[0] : null),
                T && ((N = B / 100), (S = (M.keyframe - B) / 100));
            }
          }
          let V = {};
          if (b && !C)
            for (let X = 0, { length: W } = i; X < W; X++) {
              let B = i[X];
              V[B] = Wa(u, B, b.config);
            }
          else if (b && C && N !== void 0 && S !== void 0) {
            let X = (x - N) / S,
              W = b.config.easing,
              B = ry(W, X, f);
            for (let j = 0, { length: M } = i; j < M; j++) {
              let T = i[j],
                q = Wa(u, T, b.config),
                z = (Wa(u, T, C.config) - q) * B + q;
              V[T] = z;
            }
          }
          return (0, dt.merge)(e, { position: x, current: V });
        }),
        (OD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: o,
              immediate: i,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: h,
              pluginDuration: d,
              instanceDelay: v,
              customEasingFn: m,
              skipMotion: _,
            } = e,
            E = u.config.easing,
            { duration: P, delay: x } = u.config;
          d != null && (P = d),
            (x = v ?? x),
            a === _D ? (P = 0) : (i || _) && (P = x = 0);
          let { now: A } = t.payload;
          if (r && n) {
            let b = A - (o + x);
            if (s) {
              let X = A - o,
                W = P + x,
                B = oi(Math.min(Math.max(0, X / W), 1));
              e = (0, dt.set)(e, "verboseTimeElapsed", W * B);
            }
            if (b < 0) return e;
            let C = oi(Math.min(Math.max(0, b / P), 1)),
              N = ry(E, C, m),
              S = {},
              V = null;
            return (
              h.length &&
                (V = h.reduce((X, W) => {
                  let B = f[W],
                    j = parseFloat(n[W]) || 0,
                    T = (parseFloat(B) - j) * N + j;
                  return (X[W] = T), X;
                }, {})),
              (S.current = V),
              (S.position = C),
              C === 1 && ((S.active = !1), (S.complete = !0)),
              (0, dt.merge)(e, S)
            );
          }
          return e;
        }),
        (ny = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case pD:
              return t.payload.ixInstances || Object.freeze({});
            case hD:
              return Object.freeze({});
            case vD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: o,
                  eventId: i,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: h,
                  origin: d,
                  destination: v,
                  immediate: m,
                  verbose: _,
                  continuous: E,
                  parameterId: P,
                  actionGroups: x,
                  smoothing: A,
                  restingValue: b,
                  pluginInstance: C,
                  pluginDuration: N,
                  instanceDelay: S,
                  skipMotion: V,
                  skipToValue: X,
                } = t.payload,
                { actionTypeId: W } = o,
                B = TD(W),
                j = ID(B, W),
                M = Object.keys(v).filter(
                  (q) => v[q] != null && typeof v[q] != "string"
                ),
                { easing: T } = o.config;
              return (0, dt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: v,
                destinationKeys: M,
                immediate: m,
                verbose: _,
                current: null,
                actionItem: o,
                actionTypeId: W,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: B,
                isCarrier: h,
                styleProp: j,
                continuous: E,
                parameterId: P,
                actionGroups: x,
                smoothing: A,
                restingValue: b,
                pluginInstance: C,
                pluginDuration: N,
                instanceDelay: S,
                skipMotion: V,
                skipToValue: X,
                customEasingFn:
                  Array.isArray(T) && T.length === 4 ? mD(T) : void 0,
              });
            }
            case gD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, dt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case yD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                o = Object.keys(e),
                { length: i } = o;
              for (let a = 0; a < i; a++) {
                let s = o[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case ED: {
              let r = e,
                n = Object.keys(e),
                { length: o } = n;
              for (let i = 0; i < o; i++) {
                let a = n[i],
                  s = e[a],
                  u = s.continuous ? bD : OD;
                r = (0, dt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var xD,
    AD,
    SD,
    oy,
    ay = se(() => {
      "use strict";
      Le();
      ({
        IX2_RAW_DATA_IMPORTED: xD,
        IX2_SESSION_STOPPED: AD,
        IX2_PARAMETER_CHANGED: SD,
      } = ve),
        (oy = (e = {}, t) => {
          switch (t.type) {
            case xD:
              return t.payload.ixParameters || {};
            case AD:
              return {};
            case SD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var cy = {};
  Re(cy, { default: () => RD });
  var sy,
    uy,
    wD,
    RD,
    ly = se(() => {
      "use strict";
      sy = ee(Uo());
      If();
      Hf();
      jf();
      uy = ee(Mt());
      iy();
      ay();
      ({ ixElements: wD } = uy.IX2ElementsReducer),
        (RD = (0, sy.combineReducers)({
          ixData: Tf,
          ixRequest: Wf,
          ixSession: kf,
          ixElements: wD,
          ixInstances: ny,
          ixParameters: oy,
        }));
    });
  var dy = c((Ok, fy) => {
    var CD = mt(),
      LD = Ee(),
      ND = ct(),
      PD = "[object String]";
    function qD(e) {
      return typeof e == "string" || (!LD(e) && ND(e) && CD(e) == PD);
    }
    fy.exports = qD;
  });
  var hy = c((xk, py) => {
    var MD = ha(),
      DD = MD("length");
    py.exports = DD;
  });
  var gy = c((Ak, vy) => {
    var FD = "\\ud800-\\udfff",
      GD = "\\u0300-\\u036f",
      VD = "\\ufe20-\\ufe2f",
      UD = "\\u20d0-\\u20ff",
      XD = GD + VD + UD,
      WD = "\\ufe0e\\ufe0f",
      HD = "\\u200d",
      BD = RegExp("[" + HD + FD + XD + WD + "]");
    function kD(e) {
      return BD.test(e);
    }
    vy.exports = kD;
  });
  var xy = c((Sk, Oy) => {
    var Ey = "\\ud800-\\udfff",
      jD = "\\u0300-\\u036f",
      zD = "\\ufe20-\\ufe2f",
      KD = "\\u20d0-\\u20ff",
      YD = jD + zD + KD,
      $D = "\\ufe0e\\ufe0f",
      QD = "[" + Ey + "]",
      Ha = "[" + YD + "]",
      Ba = "\\ud83c[\\udffb-\\udfff]",
      ZD = "(?:" + Ha + "|" + Ba + ")",
      my = "[^" + Ey + "]",
      _y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ty = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      JD = "\\u200d",
      Iy = ZD + "?",
      by = "[" + $D + "]?",
      e2 = "(?:" + JD + "(?:" + [my, _y, Ty].join("|") + ")" + by + Iy + ")*",
      t2 = by + Iy + e2,
      r2 = "(?:" + [my + Ha + "?", Ha, _y, Ty, QD].join("|") + ")",
      yy = RegExp(Ba + "(?=" + Ba + ")|" + r2 + t2, "g");
    function n2(e) {
      for (var t = (yy.lastIndex = 0); yy.test(e); ) ++t;
      return t;
    }
    Oy.exports = n2;
  });
  var Sy = c((wk, Ay) => {
    var i2 = hy(),
      o2 = gy(),
      a2 = xy();
    function s2(e) {
      return o2(e) ? a2(e) : i2(e);
    }
    Ay.exports = s2;
  });
  var Ry = c((Rk, wy) => {
    var u2 = Gn(),
      c2 = Vn(),
      l2 = Ct(),
      f2 = dy(),
      d2 = Sy(),
      p2 = "[object Map]",
      h2 = "[object Set]";
    function v2(e) {
      if (e == null) return 0;
      if (l2(e)) return f2(e) ? d2(e) : e.length;
      var t = c2(e);
      return t == p2 || t == h2 ? e.size : u2(e).length;
    }
    wy.exports = v2;
  });
  var Ly = c((Ck, Cy) => {
    var g2 = "Expected a function";
    function y2(e) {
      if (typeof e != "function") throw new TypeError(g2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Cy.exports = y2;
  });
  var ka = c((Lk, Ny) => {
    var E2 = _t(),
      m2 = (function () {
        try {
          var e = E2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Ny.exports = m2;
  });
  var ja = c((Nk, qy) => {
    var Py = ka();
    function _2(e, t, r) {
      t == "__proto__" && Py
        ? Py(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    qy.exports = _2;
  });
  var Dy = c((Pk, My) => {
    var T2 = ja(),
      I2 = wn(),
      b2 = Object.prototype,
      O2 = b2.hasOwnProperty;
    function x2(e, t, r) {
      var n = e[t];
      (!(O2.call(e, t) && I2(n, r)) || (r === void 0 && !(t in e))) &&
        T2(e, t, r);
    }
    My.exports = x2;
  });
  var Vy = c((qk, Gy) => {
    var A2 = Dy(),
      S2 = Fr(),
      w2 = qn(),
      Fy = tt(),
      R2 = Jt();
    function C2(e, t, r, n) {
      if (!Fy(e)) return e;
      t = S2(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var u = R2(t[o]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (o != a) {
          var h = s[u];
          (f = n ? n(h, u, s) : void 0),
            f === void 0 && (f = Fy(h) ? h : w2(t[o + 1]) ? [] : {});
        }
        A2(s, u, f), (s = s[u]);
      }
      return e;
    }
    Gy.exports = C2;
  });
  var Xy = c((Mk, Uy) => {
    var L2 = Wn(),
      N2 = Vy(),
      P2 = Fr();
    function q2(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = L2(e, a);
        r(s, a) && N2(i, P2(a, e), s);
      }
      return i;
    }
    Uy.exports = q2;
  });
  var Hy = c((Dk, Wy) => {
    var M2 = Nn(),
      D2 = So(),
      F2 = Jo(),
      G2 = Zo(),
      V2 = Object.getOwnPropertySymbols,
      U2 = V2
        ? function (e) {
            for (var t = []; e; ) M2(t, F2(e)), (e = D2(e));
            return t;
          }
        : G2;
    Wy.exports = U2;
  });
  var ky = c((Fk, By) => {
    function X2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    By.exports = X2;
  });
  var zy = c((Gk, jy) => {
    var W2 = tt(),
      H2 = Fn(),
      B2 = ky(),
      k2 = Object.prototype,
      j2 = k2.hasOwnProperty;
    function z2(e) {
      if (!W2(e)) return B2(e);
      var t = H2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !j2.call(e, n))) || r.push(n);
      return r;
    }
    jy.exports = z2;
  });
  var Yy = c((Vk, Ky) => {
    var K2 = ta(),
      Y2 = zy(),
      $2 = Ct();
    function Q2(e) {
      return $2(e) ? K2(e, !0) : Y2(e);
    }
    Ky.exports = Q2;
  });
  var Qy = c((Uk, $y) => {
    var Z2 = Qo(),
      J2 = Hy(),
      eF = Yy();
    function tF(e) {
      return Z2(e, eF, J2);
    }
    $y.exports = tF;
  });
  var Jy = c((Xk, Zy) => {
    var rF = pa(),
      nF = Tt(),
      iF = Xy(),
      oF = Qy();
    function aF(e, t) {
      if (e == null) return {};
      var r = rF(oF(e), function (n) {
        return [n];
      });
      return (
        (t = nF(t)),
        iF(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    Zy.exports = aF;
  });
  var tE = c((Wk, eE) => {
    var sF = Tt(),
      uF = Ly(),
      cF = Jy();
    function lF(e, t) {
      return cF(e, uF(sF(t)));
    }
    eE.exports = lF;
  });
  var nE = c((Hk, rE) => {
    var fF = Gn(),
      dF = Vn(),
      pF = Lr(),
      hF = Ee(),
      vF = Ct(),
      gF = Pn(),
      yF = Fn(),
      EF = Dn(),
      mF = "[object Map]",
      _F = "[object Set]",
      TF = Object.prototype,
      IF = TF.hasOwnProperty;
    function bF(e) {
      if (e == null) return !0;
      if (
        vF(e) &&
        (hF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          gF(e) ||
          EF(e) ||
          pF(e))
      )
        return !e.length;
      var t = dF(e);
      if (t == mF || t == _F) return !e.size;
      if (yF(e)) return !fF(e).length;
      for (var r in e) if (IF.call(e, r)) return !1;
      return !0;
    }
    rE.exports = bF;
  });
  var oE = c((Bk, iE) => {
    var OF = ja(),
      xF = Pa(),
      AF = Tt();
    function SF(e, t) {
      var r = {};
      return (
        (t = AF(t, 3)),
        xF(e, function (n, o, i) {
          OF(r, o, t(n, o, i));
        }),
        r
      );
    }
    iE.exports = SF;
  });
  var sE = c((kk, aE) => {
    function wF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    aE.exports = wF;
  });
  var cE = c((jk, uE) => {
    var RF = Bn();
    function CF(e) {
      return typeof e == "function" ? e : RF;
    }
    uE.exports = CF;
  });
  var fE = c((zk, lE) => {
    var LF = sE(),
      NF = qa(),
      PF = cE(),
      qF = Ee();
    function MF(e, t) {
      var r = qF(e) ? LF : NF;
      return r(e, PF(t));
    }
    lE.exports = MF;
  });
  var pE = c((Kk, dE) => {
    var DF = He(),
      FF = function () {
        return DF.Date.now();
      };
    dE.exports = FF;
  });
  var gE = c((Yk, vE) => {
    var GF = tt(),
      za = pE(),
      hE = kn(),
      VF = "Expected a function",
      UF = Math.max,
      XF = Math.min;
    function WF(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        u,
        f = 0,
        h = !1,
        d = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError(VF);
      (t = hE(t) || 0),
        GF(r) &&
          ((h = !!r.leading),
          (d = "maxWait" in r),
          (i = d ? UF(hE(r.maxWait) || 0, t) : i),
          (v = "trailing" in r ? !!r.trailing : v));
      function m(S) {
        var V = n,
          X = o;
        return (n = o = void 0), (f = S), (a = e.apply(X, V)), a;
      }
      function _(S) {
        return (f = S), (s = setTimeout(x, t)), h ? m(S) : a;
      }
      function E(S) {
        var V = S - u,
          X = S - f,
          W = t - V;
        return d ? XF(W, i - X) : W;
      }
      function P(S) {
        var V = S - u,
          X = S - f;
        return u === void 0 || V >= t || V < 0 || (d && X >= i);
      }
      function x() {
        var S = za();
        if (P(S)) return A(S);
        s = setTimeout(x, E(S));
      }
      function A(S) {
        return (s = void 0), v && n ? m(S) : ((n = o = void 0), a);
      }
      function b() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = o = s = void 0);
      }
      function C() {
        return s === void 0 ? a : A(za());
      }
      function N() {
        var S = za(),
          V = P(S);
        if (((n = arguments), (o = this), (u = S), V)) {
          if (s === void 0) return _(u);
          if (d) return clearTimeout(s), (s = setTimeout(x, t)), m(u);
        }
        return s === void 0 && (s = setTimeout(x, t)), a;
      }
      return (N.cancel = b), (N.flush = C), N;
    }
    vE.exports = WF;
  });
  var EE = c(($k, yE) => {
    var HF = gE(),
      BF = tt(),
      kF = "Expected a function";
    function jF(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(kF);
      return (
        BF(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        HF(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    yE.exports = jF;
  });
  var _E = {};
  Re(_E, {
    actionListPlaybackChanged: () => fr,
    animationFrameChanged: () => ui,
    clearRequested: () => yG,
    elementStateChanged: () => ts,
    eventListenerAdded: () => si,
    eventStateChanged: () => Za,
    instanceAdded: () => Ja,
    instanceRemoved: () => es,
    instanceStarted: () => ci,
    mediaQueriesDefined: () => ns,
    parameterChanged: () => lr,
    playbackRequested: () => vG,
    previewRequested: () => hG,
    rawDataImported: () => Ka,
    sessionInitialized: () => Ya,
    sessionStarted: () => $a,
    sessionStopped: () => Qa,
    stopRequested: () => gG,
    testFrameRendered: () => EG,
    viewportWidthChanged: () => rs,
  });
  var mE,
    zF,
    KF,
    YF,
    $F,
    QF,
    ZF,
    JF,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    Ka,
    Ya,
    $a,
    Qa,
    hG,
    vG,
    gG,
    yG,
    si,
    EG,
    Za,
    ui,
    lr,
    Ja,
    ci,
    es,
    ts,
    fr,
    rs,
    ns,
    li = se(() => {
      "use strict";
      Le();
      (mE = ee(Mt())),
        ({
          IX2_RAW_DATA_IMPORTED: zF,
          IX2_SESSION_INITIALIZED: KF,
          IX2_SESSION_STARTED: YF,
          IX2_SESSION_STOPPED: $F,
          IX2_PREVIEW_REQUESTED: QF,
          IX2_PLAYBACK_REQUESTED: ZF,
          IX2_STOP_REQUESTED: JF,
          IX2_CLEAR_REQUESTED: eG,
          IX2_EVENT_LISTENER_ADDED: tG,
          IX2_TEST_FRAME_RENDERED: rG,
          IX2_EVENT_STATE_CHANGED: nG,
          IX2_ANIMATION_FRAME_CHANGED: iG,
          IX2_PARAMETER_CHANGED: oG,
          IX2_INSTANCE_ADDED: aG,
          IX2_INSTANCE_STARTED: sG,
          IX2_INSTANCE_REMOVED: uG,
          IX2_ELEMENT_STATE_CHANGED: cG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: lG,
          IX2_VIEWPORT_WIDTH_CHANGED: fG,
          IX2_MEDIA_QUERIES_DEFINED: dG,
        } = ve),
        ({ reifyState: pG } = mE.IX2VanillaUtils),
        (Ka = (e) => ({ type: zF, payload: { ...pG(e) } })),
        (Ya = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: KF,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        ($a = () => ({ type: YF })),
        (Qa = () => ({ type: $F })),
        (hG = ({ rawData: e, defer: t }) => ({
          type: QF,
          payload: { defer: t, rawData: e },
        })),
        (vG = ({
          actionTypeId: e = Ce.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: o,
          immediate: i,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: ZF,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: o,
            immediate: i,
            verbose: s,
            rawData: u,
          },
        })),
        (gG = (e) => ({ type: JF, payload: { actionListId: e } })),
        (yG = () => ({ type: eG })),
        (si = (e, t) => ({
          type: tG,
          payload: { target: e, listenerParams: t },
        })),
        (EG = (e = 1) => ({ type: rG, payload: { step: e } })),
        (Za = (e, t) => ({ type: nG, payload: { stateKey: e, newState: t } })),
        (ui = (e, t) => ({ type: iG, payload: { now: e, parameters: t } })),
        (lr = (e, t) => ({ type: oG, payload: { key: e, value: t } })),
        (Ja = (e) => ({ type: aG, payload: { ...e } })),
        (ci = (e, t) => ({ type: sG, payload: { instanceId: e, time: t } })),
        (es = (e) => ({ type: uG, payload: { instanceId: e } })),
        (ts = (e, t, r, n) => ({
          type: cG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (fr = ({ actionListId: e, isPlaying: t }) => ({
          type: lG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (rs = ({ width: e, mediaQueries: t }) => ({
          type: fG,
          payload: { width: e, mediaQueries: t },
        })),
        (ns = () => ({ type: dG }));
    });
  var Se = {};
  Re(Se, {
    elementContains: () => as,
    getChildElements: () => wG,
    getClosestElement: () => Kr,
    getProperty: () => bG,
    getQuerySelector: () => os,
    getRefType: () => ss,
    getSiblingElements: () => RG,
    getStyle: () => IG,
    getValidDocument: () => xG,
    isSiblingNode: () => SG,
    matchSelector: () => OG,
    queryDocument: () => AG,
    setStyle: () => TG,
  });
  function TG(e, t, r) {
    e.style[t] = r;
  }
  function IG(e, t) {
    return e.style[t];
  }
  function bG(e, t) {
    return e[t];
  }
  function OG(e) {
    return (t) => t[is](e);
  }
  function os({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(TE) !== -1) {
        let n = e.split(TE),
          o = n[0];
        if (((r = n[1]), o !== document.documentElement.getAttribute(bE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function xG(e) {
    return e == null || e === document.documentElement.getAttribute(bE)
      ? document
      : null;
  }
  function AG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function as(e, t) {
    return e.contains(t);
  }
  function SG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function wG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: o } = e[r],
        { length: i } = o;
      if (i) for (let a = 0; a < i; a++) t.push(o[a]);
    }
    return t;
  }
  function RG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: o } = e; n < o; n++) {
      let { parentNode: i } = e[n];
      if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
        continue;
      r.push(i);
      let a = i.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ss(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? mG
        : _G
      : null;
  }
  var IE,
    is,
    TE,
    mG,
    _G,
    bE,
    Kr,
    OE = se(() => {
      "use strict";
      IE = ee(Mt());
      Le();
      ({ ELEMENT_MATCHES: is } = IE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: TE,
          HTML_ELEMENT: mG,
          PLAIN_OBJECT: _G,
          WF_PAGE: bE,
        } = Te);
      Kr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[is] && r[is](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var us = c((Jk, AE) => {
    var CG = tt(),
      xE = Object.create,
      LG = (function () {
        function e() {}
        return function (t) {
          if (!CG(t)) return {};
          if (xE) return xE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    AE.exports = LG;
  });
  var fi = c((ej, SE) => {
    function NG() {}
    SE.exports = NG;
  });
  var pi = c((tj, wE) => {
    var PG = us(),
      qG = fi();
    function di(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    di.prototype = PG(qG.prototype);
    di.prototype.constructor = di;
    wE.exports = di;
  });
  var NE = c((rj, LE) => {
    var RE = Wt(),
      MG = Lr(),
      DG = Ee(),
      CE = RE ? RE.isConcatSpreadable : void 0;
    function FG(e) {
      return DG(e) || MG(e) || !!(CE && e && e[CE]);
    }
    LE.exports = FG;
  });
  var ME = c((nj, qE) => {
    var GG = Nn(),
      VG = NE();
    function PE(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = VG), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? PE(s, t - 1, r, n, o)
            : GG(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    qE.exports = PE;
  });
  var FE = c((ij, DE) => {
    var UG = ME();
    function XG(e) {
      var t = e == null ? 0 : e.length;
      return t ? UG(e, 1) : [];
    }
    DE.exports = XG;
  });
  var VE = c((oj, GE) => {
    function WG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    GE.exports = WG;
  });
  var WE = c((aj, XE) => {
    var HG = VE(),
      UE = Math.max;
    function BG(e, t, r) {
      return (
        (t = UE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = UE(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), HG(e, this, s);
        }
      );
    }
    XE.exports = BG;
  });
  var BE = c((sj, HE) => {
    function kG(e) {
      return function () {
        return e;
      };
    }
    HE.exports = kG;
  });
  var zE = c((uj, jE) => {
    var jG = BE(),
      kE = ka(),
      zG = Bn(),
      KG = kE
        ? function (e, t) {
            return kE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: jG(t),
              writable: !0,
            });
          }
        : zG;
    jE.exports = KG;
  });
  var YE = c((cj, KE) => {
    var YG = 800,
      $G = 16,
      QG = Date.now;
    function ZG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = QG(),
          o = $G - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= YG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    KE.exports = ZG;
  });
  var QE = c((lj, $E) => {
    var JG = zE(),
      eV = YE(),
      tV = eV(JG);
    $E.exports = tV;
  });
  var JE = c((fj, ZE) => {
    var rV = FE(),
      nV = WE(),
      iV = QE();
    function oV(e) {
      return iV(nV(e, void 0, rV), e + "");
    }
    ZE.exports = oV;
  });
  var rm = c((dj, tm) => {
    var em = ra(),
      aV = em && new em();
    tm.exports = aV;
  });
  var im = c((pj, nm) => {
    function sV() {}
    nm.exports = sV;
  });
  var cs = c((hj, am) => {
    var om = rm(),
      uV = im(),
      cV = om
        ? function (e) {
            return om.get(e);
          }
        : uV;
    am.exports = cV;
  });
  var um = c((vj, sm) => {
    var lV = {};
    sm.exports = lV;
  });
  var ls = c((gj, lm) => {
    var cm = um(),
      fV = Object.prototype,
      dV = fV.hasOwnProperty;
    function pV(e) {
      for (
        var t = e.name + "", r = cm[t], n = dV.call(cm, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    lm.exports = pV;
  });
  var vi = c((yj, fm) => {
    var hV = us(),
      vV = fi(),
      gV = 4294967295;
    function hi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = gV),
        (this.__views__ = []);
    }
    hi.prototype = hV(vV.prototype);
    hi.prototype.constructor = hi;
    fm.exports = hi;
  });
  var pm = c((Ej, dm) => {
    function yV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    dm.exports = yV;
  });
  var vm = c((mj, hm) => {
    var EV = vi(),
      mV = pi(),
      _V = pm();
    function TV(e) {
      if (e instanceof EV) return e.clone();
      var t = new mV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = _V(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    hm.exports = TV;
  });
  var Em = c((_j, ym) => {
    var IV = vi(),
      gm = pi(),
      bV = fi(),
      OV = Ee(),
      xV = ct(),
      AV = vm(),
      SV = Object.prototype,
      wV = SV.hasOwnProperty;
    function gi(e) {
      if (xV(e) && !OV(e) && !(e instanceof IV)) {
        if (e instanceof gm) return e;
        if (wV.call(e, "__wrapped__")) return AV(e);
      }
      return new gm(e);
    }
    gi.prototype = bV.prototype;
    gi.prototype.constructor = gi;
    ym.exports = gi;
  });
  var _m = c((Tj, mm) => {
    var RV = vi(),
      CV = cs(),
      LV = ls(),
      NV = Em();
    function PV(e) {
      var t = LV(e),
        r = NV[t];
      if (typeof r != "function" || !(t in RV.prototype)) return !1;
      if (e === r) return !0;
      var n = CV(r);
      return !!n && e === n[0];
    }
    mm.exports = PV;
  });
  var Om = c((Ij, bm) => {
    var Tm = pi(),
      qV = JE(),
      MV = cs(),
      fs = ls(),
      DV = Ee(),
      Im = _m(),
      FV = "Expected a function",
      GV = 8,
      VV = 32,
      UV = 128,
      XV = 256;
    function WV(e) {
      return qV(function (t) {
        var r = t.length,
          n = r,
          o = Tm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(FV);
          if (o && !a && fs(i) == "wrapper") var a = new Tm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = fs(i),
            u = s == "wrapper" ? MV(i) : void 0;
          u &&
          Im(u[0]) &&
          u[1] == (UV | GV | VV | XV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[fs(u[0])].apply(a, u[3]))
            : (a = i.length == 1 && Im(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            h = f[0];
          if (a && f.length == 1 && DV(h)) return a.plant(h).value();
          for (var d = 0, v = r ? t[d].apply(this, f) : h; ++d < r; )
            v = t[d].call(this, v);
          return v;
        };
      });
    }
    bm.exports = WV;
  });
  var Am = c((bj, xm) => {
    var HV = Om(),
      BV = HV();
    xm.exports = BV;
  });
  var wm = c((Oj, Sm) => {
    function kV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Sm.exports = kV;
  });
  var Cm = c((xj, Rm) => {
    var jV = wm(),
      ds = kn();
    function zV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ds(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ds(t)), (t = t === t ? t : 0)),
        jV(ds(e), t, r)
      );
    }
    Rm.exports = zV;
  });
  var Vm,
    Um,
    Xm,
    Wm,
    KV,
    YV,
    $V,
    QV,
    ZV,
    JV,
    eU,
    tU,
    rU,
    nU,
    iU,
    oU,
    aU,
    sU,
    uU,
    Hm,
    Bm,
    cU,
    lU,
    fU,
    km,
    dU,
    pU,
    jm,
    hU,
    ps,
    zm,
    Lm,
    Nm,
    Km,
    $r,
    vU,
    it,
    Ym,
    gU,
    Pe,
    je,
    Qr,
    $m,
    hs,
    Pm,
    vs,
    yU,
    Yr,
    EU,
    mU,
    _U,
    Qm,
    qm,
    TU,
    Mm,
    IU,
    bU,
    OU,
    Dm,
    yi,
    Ei,
    Fm,
    Gm,
    Zm,
    Jm = se(() => {
      "use strict";
      (Vm = ee(Am())), (Um = ee(Hn())), (Xm = ee(Cm()));
      Le();
      gs();
      li();
      (Wm = ee(Mt())),
        ({
          MOUSE_CLICK: KV,
          MOUSE_SECOND_CLICK: YV,
          MOUSE_DOWN: $V,
          MOUSE_UP: QV,
          MOUSE_OVER: ZV,
          MOUSE_OUT: JV,
          DROPDOWN_CLOSE: eU,
          DROPDOWN_OPEN: tU,
          SLIDER_ACTIVE: rU,
          SLIDER_INACTIVE: nU,
          TAB_ACTIVE: iU,
          TAB_INACTIVE: oU,
          NAVBAR_CLOSE: aU,
          NAVBAR_OPEN: sU,
          MOUSE_MOVE: uU,
          PAGE_SCROLL_DOWN: Hm,
          SCROLL_INTO_VIEW: Bm,
          SCROLL_OUT_OF_VIEW: cU,
          PAGE_SCROLL_UP: lU,
          SCROLLING_IN_VIEW: fU,
          PAGE_FINISH: km,
          ECOMMERCE_CART_CLOSE: dU,
          ECOMMERCE_CART_OPEN: pU,
          PAGE_START: jm,
          PAGE_SCROLL: hU,
        } = Be),
        (ps = "COMPONENT_ACTIVE"),
        (zm = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Lm } = Te),
        ({ getNamespacedParameterId: Nm } = Wm.IX2VanillaUtils),
        (Km = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        ($r = Km(({ element: e, nativeEvent: t }) => e === t.target)),
        (vU = Km(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (it = (0, Vm.default)([$r, vU])),
        (Ym = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              o = n[t];
            if (o && !yU[o.eventTypeId]) return o;
          }
          return null;
        }),
        (gU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Ym(e, n);
        }),
        (Pe = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
          let { action: i, id: a } = t,
            { actionListId: s, autoStopEventId: u } = i.config,
            f = Ym(e, u);
          return (
            f &&
              dr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Lm + n.split(Lm)[1],
                actionListId: (0, Um.default)(f, "action.config.actionListId"),
              }),
            dr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            Zr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            o
          );
        }),
        (je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Qr = { handler: je(it, Pe) }),
        ($m = { ...Qr, types: [ps, zm].join(" ") }),
        (hs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Pm = "mouseover mouseout"),
        (vs = { types: hs }),
        (yU = { PAGE_START: jm, PAGE_FINISH: km }),
        (Yr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Xm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (EU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (mU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: o } = t,
            i = e.contains(n);
          if (r === "mouseover" && i) return !0;
          let a = e.contains(o);
          return !!(r === "mouseout" && i && a);
        }),
        (_U = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: o } = Yr(),
            i = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
          return EU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: o - u,
          });
        }),
        (Qm = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            o = [ps, zm].indexOf(n) !== -1 ? n === ps : r.isActive,
            i = { ...r, isActive: o };
          return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
        }),
        (qm = (e) => (t, r) => {
          let n = { elementHovered: mU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (TU = (e) => (t, r) => {
          let n = { ...r, elementVisible: _U(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Mm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = Yr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              h = f === "PX",
              d = o - i,
              v = Number((n / d).toFixed(2));
            if (r && r.percentTop === v) return r;
            let m = (h ? u : (i * (u || 0)) / 100) / d,
              _,
              E,
              P = 0;
            r &&
              ((_ = v > r.percentTop),
              (E = r.scrollingDown !== _),
              (P = E ? v : r.anchorTop));
            let x = s === Hm ? v >= P + m : v <= P - m,
              A = {
                ...r,
                percentTop: v,
                inBounds: x,
                anchorTop: P,
                scrollingDown: _,
              };
            return (r && x && (E || A.inBounds !== r.inBounds) && e(t, A)) || A;
          }),
        (IU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (bU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (OU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Dm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (yi = (e = !0) => ({
          ...$m,
          handler: je(
            e ? it : $r,
            Qm((t, r) => (r.isActive ? Qr.handler(t, r) : r))
          ),
        })),
        (Ei = (e = !0) => ({
          ...$m,
          handler: je(
            e ? it : $r,
            Qm((t, r) => (r.isActive ? r : Qr.handler(t, r)))
          ),
        })),
        (Fm = {
          ...vs,
          handler: TU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: o } = e,
              { ixData: i } = o.getState(),
              { events: a } = i;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Bm) === r
              ? (Pe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Gm = 0.05),
        (Zm = {
          [rU]: yi(),
          [nU]: Ei(),
          [tU]: yi(),
          [eU]: Ei(),
          [sU]: yi(!1),
          [aU]: Ei(!1),
          [iU]: yi(),
          [oU]: Ei(),
          [pU]: { types: "ecommerce-cart-open", handler: je(it, Pe) },
          [dU]: { types: "ecommerce-cart-close", handler: je(it, Pe) },
          [KV]: {
            types: "click",
            handler: je(
              it,
              Dm((e, { clickCount: t }) => {
                gU(e) ? t === 1 && Pe(e) : Pe(e);
              })
            ),
          },
          [YV]: {
            types: "click",
            handler: je(
              it,
              Dm((e, { clickCount: t }) => {
                t === 2 && Pe(e);
              })
            ),
          },
          [$V]: { ...Qr, types: "mousedown" },
          [QV]: { ...Qr, types: "mouseup" },
          [ZV]: {
            types: Pm,
            handler: je(
              it,
              qm((e, t) => {
                t.elementHovered && Pe(e);
              })
            ),
          },
          [JV]: {
            types: Pm,
            handler: je(
              it,
              qm((e, t) => {
                t.elementHovered || Pe(e);
              })
            ),
          },
          [uU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: o,
              },
              i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: h = 0,
                } = r,
                {
                  clientX: d = i.clientX,
                  clientY: v = i.clientY,
                  pageX: m = i.pageX,
                  pageY: _ = i.pageY,
                } = n,
                E = s === "X_AXIS",
                P = n.type === "mouseout",
                x = h / 100,
                A = u,
                b = !1;
              switch (a) {
                case et.VIEWPORT: {
                  x = E
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(v, window.innerHeight) / window.innerHeight;
                  break;
                }
                case et.PAGE: {
                  let {
                    scrollLeft: C,
                    scrollTop: N,
                    scrollWidth: S,
                    scrollHeight: V,
                  } = Yr();
                  x = E ? Math.min(C + m, S) / S : Math.min(N + _, V) / V;
                  break;
                }
                case et.ELEMENT:
                default: {
                  A = Nm(o, u);
                  let C = n.type.indexOf("mouse") === 0;
                  if (C && it({ element: t, nativeEvent: n }) !== !0) break;
                  let N = t.getBoundingClientRect(),
                    { left: S, top: V, width: X, height: W } = N;
                  if (!C && !IU({ left: d, top: v }, N)) break;
                  (b = !0), (x = E ? (d - S) / X : (v - V) / W);
                  break;
                }
              }
              return (
                P && (x > 1 - Gm || x < Gm) && (x = Math.round(x)),
                (a !== et.ELEMENT || b || b !== i.elementHovered) &&
                  ((x = f ? 1 - x : x), e.dispatch(lr(A, x))),
                {
                  elementHovered: b,
                  clientX: d,
                  clientY: v,
                  pageX: m,
                  pageY: _,
                }
              );
            },
          },
          [hU]: {
            types: hs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: o, scrollHeight: i, clientHeight: a } = Yr(),
                s = o / (i - a);
              (s = n ? 1 - s : s), e.dispatch(lr(r, s));
            },
          },
          [fU]: {
            types: hs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              o = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: i,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = Yr(),
                {
                  basedOn: h,
                  selectedAxis: d,
                  continuousParameterGroupId: v,
                  startsEntering: m,
                  startsExiting: _,
                  addEndOffset: E,
                  addStartOffset: P,
                  addOffsetValue: x = 0,
                  endOffsetValue: A = 0,
                } = r,
                b = d === "X_AXIS";
              if (h === et.VIEWPORT) {
                let C = b ? i / s : a / u;
                return (
                  C !== o.scrollPercent && t.dispatch(lr(v, C)),
                  { scrollPercent: C }
                );
              } else {
                let C = Nm(n, v),
                  N = e.getBoundingClientRect(),
                  S = (P ? x : 0) / 100,
                  V = (E ? A : 0) / 100;
                (S = m ? S : 1 - S), (V = _ ? V : 1 - V);
                let X = N.top + Math.min(N.height * S, f),
                  B = N.top + N.height * V - X,
                  j = Math.min(f + B, u),
                  T = Math.min(Math.max(0, f - X), j) / j;
                return (
                  T !== o.scrollPercent && t.dispatch(lr(C, T)),
                  { scrollPercent: T }
                );
              }
            },
          },
          [Bm]: Fm,
          [cU]: Fm,
          [Hm]: {
            ...vs,
            handler: Mm((e, t) => {
              t.scrollingDown && Pe(e);
            }),
          },
          [lU]: {
            ...vs,
            handler: Mm((e, t) => {
              t.scrollingDown || Pe(e);
            }),
          },
          [km]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je($r, bU(Pe)),
          },
          [jm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je($r, OU(Pe)),
          },
        });
    });
  var g_ = {};
  Re(g_, {
    observeRequests: () => BU,
    startActionGroup: () => Zr,
    startEngine: () => Oi,
    stopActionGroup: () => dr,
    stopAllActionGroups: () => p_,
    stopEngine: () => xi,
  });
  function BU(e) {
    Dt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: zU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: KU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: YU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: $U });
  }
  function kU(e) {
    Dt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        xi(e),
          c_({ store: e, elementApi: Se }),
          Oi({ store: e, allowEvents: !0 }),
          l_();
      },
    });
  }
  function jU(e, t) {
    let r = Dt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function zU({ rawData: e, defer: t }, r) {
    let n = () => {
      Oi({ store: r, rawData: e, allowEvents: !0 }), l_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function l_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function KU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: o,
        eventId: i,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: h } = e;
    if (n && o && h && s) {
      let d = h.actionLists[n];
      d && (h = PU({ actionList: d, actionItemId: o, rawData: h }));
    }
    if (
      (Oi({ store: t, rawData: h, allowEvents: a, testManual: u }),
      (n && r === Ce.GENERAL_START_ACTION) || ys(r))
    ) {
      dr({ store: t, actionListId: n }),
        d_({ store: t, actionListId: n, eventId: i });
      let d = Zr({
        store: t,
        eventId: i,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && d && t.dispatch(fr({ actionListId: n, isPlaying: !s }));
    }
  }
  function YU({ actionListId: e }, t) {
    e ? dr({ store: t, actionListId: e }) : p_({ store: t }), xi(t);
  }
  function $U(e, t) {
    xi(t), c_({ store: t, elementApi: Se });
  }
  function Oi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: o } = e.getState();
    t && e.dispatch(Ka(t)),
      o.active ||
        (e.dispatch(
          Ya({
            hasBoundaryNodes: !!document.querySelector(_i),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (rX(e), QU(), e.getState().ixSession.hasDefinedMediaQueries && kU(e)),
        e.dispatch($a()),
        ZU(e, n));
  }
  function QU() {
    let { documentElement: e } = document;
    e.className.indexOf(e_) === -1 && (e.className += ` ${e_}`);
  }
  function ZU(e, t) {
    let r = (n) => {
      let { ixSession: o, ixParameters: i } = e.getState();
      o.active &&
        (e.dispatch(ui(n, i)), t ? jU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function xi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(JU), FU(), e.dispatch(Qa());
    }
  }
  function JU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function eX({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: o,
    actionListId: i,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: h } = e.getState(),
      { events: d } = f,
      v = d[n],
      { eventTypeId: m } = v,
      _ = {},
      E = {},
      P = [],
      { continuousActionGroups: x } = a,
      { id: A } = a;
    qU(m, o) && (A = MU(t, A));
    let b = h.hasBoundaryNodes && r ? Kr(r, _i) : null;
    x.forEach((C) => {
      let { keyframe: N, actionItems: S } = C;
      S.forEach((V) => {
        let { actionTypeId: X } = V,
          { target: W } = V.config;
        if (!W) return;
        let B = W.boundaryMode ? b : null,
          j = GU(W) + Es + X;
        if (((E[j] = tX(E[j], N, V)), !_[j])) {
          _[j] = !0;
          let { config: M } = V;
          Ti({
            config: M,
            event: v,
            eventTarget: r,
            elementRoot: B,
            elementApi: Se,
          }).forEach((T) => {
            P.push({ element: T, key: j });
          });
        }
      });
    }),
      P.forEach(({ element: C, key: N }) => {
        let S = E[N],
          V = (0, pt.default)(S, "[0].actionItems[0]", {}),
          { actionTypeId: X } = V,
          W = bi(X) ? _s(X)(C, V) : null,
          B = ms({ element: C, actionItem: V, elementApi: Se }, W);
        Ts({
          store: e,
          element: C,
          eventId: n,
          actionListId: i,
          actionItem: V,
          destination: B,
          continuous: !0,
          parameterId: A,
          actionGroups: S,
          smoothing: s,
          restingValue: u,
          pluginInstance: W,
        });
      });
  }
  function tX(e = [], t, r) {
    let n = [...e],
      o;
    return (
      n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
      o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[o].actionItems.push(r),
      n
    );
  }
  function rX(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    f_(e),
      (0, pr.default)(r, (o, i) => {
        let a = Zm[i];
        if (!a) {
          console.warn(`IX2 event type not configured: ${i}`);
          return;
        }
        uX({ logic: a, store: e, events: o });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && iX(e);
  }
  function iX(e) {
    let t = () => {
      f_(e);
    };
    nX.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(si(window, [r, t]));
    }),
      t();
  }
  function f_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: o } = r;
      e.dispatch(rs({ width: n, mediaQueries: o }));
    }
  }
  function uX({ logic: e, store: t, events: r }) {
    cX(r);
    let { types: n, handler: o } = e,
      { ixData: i } = t.getState(),
      { actionLists: a } = i,
      s = oX(r, sX);
    if (!(0, n_.default)(s)) return;
    (0, pr.default)(s, (d, v) => {
      let m = r[v],
        { action: _, id: E, mediaQueries: P = i.mediaQueryKeys } = m,
        { actionListId: x } = _.config;
      VU(P, i.mediaQueryKeys) || t.dispatch(ns()),
        _.actionTypeId === Ce.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((b) => {
            let { continuousParameterGroupId: C } = b,
              N = (0, pt.default)(a, `${x}.continuousParameterGroups`, []),
              S = (0, r_.default)(N, ({ id: W }) => W === C),
              V = (b.smoothing || 0) / 100,
              X = (b.restingState || 0) / 100;
            S &&
              d.forEach((W, B) => {
                let j = E + Es + B;
                eX({
                  store: t,
                  eventStateKey: j,
                  eventTarget: W,
                  eventId: E,
                  eventConfig: b,
                  actionListId: x,
                  parameterGroup: S,
                  smoothing: V,
                  restingValue: X,
                });
              });
          }),
        (_.actionTypeId === Ce.GENERAL_START_ACTION || ys(_.actionTypeId)) &&
          d_({ store: t, actionListId: x, eventId: E });
    });
    let u = (d) => {
        let { ixSession: v } = t.getState();
        aX(s, (m, _, E) => {
          let P = r[_],
            x = v.eventState[E],
            { action: A, mediaQueries: b = i.mediaQueryKeys } = P;
          if (!Ii(b, v.mediaQueryKey)) return;
          let C = (N = {}) => {
            let S = o(
              {
                store: t,
                element: m,
                event: P,
                eventConfig: N,
                nativeEvent: d,
                eventStateKey: E,
              },
              x
            );
            UU(S, x) || t.dispatch(Za(E, S));
          };
          A.actionTypeId === Ce.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(P.config) ? P.config : [P.config]).forEach(C)
            : C();
        });
      },
      f = (0, s_.default)(u, HU),
      h = ({ target: d = document, types: v, throttle: m }) => {
        v.split(" ")
          .filter(Boolean)
          .forEach((_) => {
            let E = m ? f : u;
            d.addEventListener(_, E), t.dispatch(si(d, [_, E]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function cX(e) {
    if (!WU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: o, target: i } = e[n],
        a = os(i);
      t[a] ||
        ((o === Be.MOUSE_CLICK || o === Be.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function d_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: o } = e.getState(),
      { actionLists: i, events: a } = n,
      s = a[r],
      u = i[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, pt.default)(u, "actionItemGroups[0].actionItems", []),
        h = (0, pt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ii(h, o.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: v, actionTypeId: m } = d,
          _ =
            v?.target?.useEventTarget === !0 && v?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : v,
          E = Ti({ config: _, event: s, elementApi: Se }),
          P = bi(m);
        E.forEach((x) => {
          let A = P ? _s(m)(x, d) : null;
          Ts({
            destination: ms({ element: x, actionItem: d, elementApi: Se }, A),
            immediate: !0,
            store: e,
            element: x,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: A,
          });
        });
      });
    }
  }
  function p_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, pr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: o } = r;
        Is(r, e), o && e.dispatch(fr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function dr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
  }) {
    let { ixInstances: i, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Kr(r, _i) : null;
    (0, pr.default)(i, (u) => {
      let f = (0, pt.default)(u, "actionItem.config.target.boundaryMode"),
        h = n ? u.eventStateKey === n : !0;
      if (u.actionListId === o && u.eventId === t && h) {
        if (s && f && !as(s, u.element)) return;
        Is(u, e),
          u.verbose && e.dispatch(fr({ actionListId: o, isPlaying: !1 }));
      }
    });
  }
  function Zr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
    groupIndex: i = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: h } = u,
      d = h[t] || {},
      { mediaQueries: v = u.mediaQueryKeys } = d,
      m = (0, pt.default)(u, `actionLists.${o}`, {}),
      { actionItemGroups: _, useFirstGroupAsInitialState: E } = m;
    if (!_ || !_.length) return !1;
    i >= _.length && (0, pt.default)(d, "config.loop") && (i = 0),
      i === 0 && E && i++;
    let x =
        (i === 0 || (i === 1 && E)) && ys(d.action?.actionTypeId)
          ? d.config.delay
          : void 0,
      A = (0, pt.default)(_, [i, "actionItems"], []);
    if (!A.length || !Ii(v, f.mediaQueryKey)) return !1;
    let b = f.hasBoundaryNodes && r ? Kr(r, _i) : null,
      C = CU(A),
      N = !1;
    return (
      A.forEach((S, V) => {
        let { config: X, actionTypeId: W } = S,
          B = bi(W),
          { target: j } = X;
        if (!j) return;
        let M = j.boundaryMode ? b : null;
        Ti({
          config: X,
          event: d,
          eventTarget: r,
          elementRoot: M,
          elementApi: Se,
        }).forEach((q, U) => {
          let G = B ? _s(W)(q, S) : null,
            z = B ? XU(W)(q, S) : null;
          N = !0;
          let K = C === V && U === 0,
            te = LU({ element: q, actionItem: S }),
            Ie = ms({ element: q, actionItem: S, elementApi: Se }, G);
          Ts({
            store: e,
            element: q,
            actionItem: S,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o,
            groupIndex: i,
            isCarrier: K,
            computedStyle: te,
            destination: Ie,
            immediate: a,
            verbose: s,
            pluginInstance: G,
            pluginDuration: z,
            instanceDelay: x,
          });
        });
      }),
      N
    );
  }
  function Ts(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: o,
        actionItem: i,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: h,
      } = n,
      d = !u,
      v = wU(),
      { ixElements: m, ixSession: _, ixData: E } = t.getState(),
      P = SU(m, o),
      { refState: x } = m[P] || {},
      A = ss(o),
      b = _.reducedMotion && Ho[i.actionTypeId],
      C;
    if (b && u)
      switch (E.events[h]?.eventTypeId) {
        case Be.MOUSE_MOVE:
        case Be.MOUSE_MOVE_IN_VIEWPORT:
          C = f;
          break;
        default:
          C = 0.5;
          break;
      }
    let N = NU(o, x, r, i, Se, s);
    if (
      (t.dispatch(
        Ja({
          instanceId: v,
          elementId: P,
          origin: N,
          refType: A,
          skipMotion: b,
          skipToValue: C,
          ...n,
        })
      ),
      h_(document.body, "ix2-animation-started", v),
      a)
    ) {
      lX(t, v);
      return;
    }
    Dt({ store: t, select: ({ ixInstances: S }) => S[v], onChange: v_ }),
      d && t.dispatch(ci(v, _.tick));
  }
  function Is(e, t) {
    h_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: o } = t.getState(),
      { ref: i, refType: a } = o[r] || {};
    a === u_ && DU(i, n, Se), t.dispatch(es(e.id));
  }
  function h_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function lX(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(ci(t, 0)), e.dispatch(ui(performance.now(), r));
    let { ixInstances: n } = e.getState();
    v_(n[t], e);
  }
  function v_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: o,
        elementId: i,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: h,
        eventId: d,
        eventTarget: v,
        eventStateKey: m,
        actionListId: _,
        isCarrier: E,
        styleProp: P,
        verbose: x,
        pluginInstance: A,
      } = e,
      { ixData: b, ixSession: C } = t.getState(),
      { events: N } = b,
      S = N[d] || {},
      { mediaQueries: V = b.mediaQueryKeys } = S;
    if (Ii(V, C.mediaQueryKey) && (n || r || o)) {
      if (f || (u === AU && o)) {
        t.dispatch(ts(i, s, f, a));
        let { ixElements: X } = t.getState(),
          { ref: W, refType: B, refState: j } = X[i] || {},
          M = j && j[s];
        (B === u_ || bi(s)) && RU(W, j, M, d, a, P, Se, u, A);
      }
      if (o) {
        if (E) {
          let X = Zr({
            store: t,
            eventId: d,
            eventTarget: v,
            eventStateKey: m,
            actionListId: _,
            groupIndex: h + 1,
            verbose: x,
          });
          x && !X && t.dispatch(fr({ actionListId: _, isPlaying: !1 }));
        }
        Is(e, t);
      }
    }
  }
  var r_,
    pt,
    n_,
    i_,
    o_,
    a_,
    pr,
    s_,
    mi,
    xU,
    ys,
    Es,
    _i,
    u_,
    AU,
    e_,
    Ti,
    SU,
    ms,
    Dt,
    wU,
    RU,
    c_,
    CU,
    LU,
    NU,
    PU,
    qU,
    MU,
    Ii,
    DU,
    FU,
    GU,
    VU,
    UU,
    bi,
    _s,
    XU,
    t_,
    WU,
    HU,
    nX,
    oX,
    aX,
    sX,
    gs = se(() => {
      "use strict";
      (r_ = ee(Ea())),
        (pt = ee(Hn())),
        (n_ = ee(Ry())),
        (i_ = ee(tE())),
        (o_ = ee(nE())),
        (a_ = ee(oE())),
        (pr = ee(fE())),
        (s_ = ee(EE()));
      Le();
      mi = ee(Mt());
      li();
      OE();
      Jm();
      (xU = Object.keys(Tn)),
        (ys = (e) => xU.includes(e)),
        ({
          COLON_DELIMITER: Es,
          BOUNDARY_SELECTOR: _i,
          HTML_ELEMENT: u_,
          RENDER_GENERAL: AU,
          W_MOD_IX: e_,
        } = Te),
        ({
          getAffectedElements: Ti,
          getElementId: SU,
          getDestinationValues: ms,
          observeStore: Dt,
          getInstanceId: wU,
          renderHTMLElement: RU,
          clearAllStyles: c_,
          getMaxDurationItemIndex: CU,
          getComputedStyle: LU,
          getInstanceOrigin: NU,
          reduceListToGroup: PU,
          shouldNamespaceEventParameter: qU,
          getNamespacedParameterId: MU,
          shouldAllowMediaQuery: Ii,
          cleanupHTMLElement: DU,
          clearObjectCache: FU,
          stringifyTarget: GU,
          mediaQueriesEqual: VU,
          shallowEqual: UU,
        } = mi.IX2VanillaUtils),
        ({
          isPluginType: bi,
          createPluginInstance: _s,
          getPluginDuration: XU,
        } = mi.IX2VanillaPlugins),
        (t_ = navigator.userAgent),
        (WU = t_.match(/iPad/i) || t_.match(/iPhone/)),
        (HU = 12);
      nX = ["resize", "orientationchange"];
      (oX = (e, t) => (0, i_.default)((0, a_.default)(e, t), o_.default)),
        (aX = (e, t) => {
          (0, pr.default)(e, (r, n) => {
            r.forEach((o, i) => {
              let a = n + Es + i;
              t(o, n, a);
            });
          });
        }),
        (sX = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ti({ config: t, elementApi: Se });
        });
    });
  var E_ = c((ht) => {
    "use strict";
    var fX = un().default,
      dX = eu().default;
    Object.defineProperty(ht, "__esModule", { value: !0 });
    ht.actions = void 0;
    ht.destroy = y_;
    ht.init = yX;
    ht.setEnv = gX;
    ht.store = void 0;
    Vl();
    var pX = Uo(),
      hX = dX((ly(), Ye(cy))),
      bs = (gs(), Ye(g_)),
      vX = fX((li(), Ye(_E)));
    ht.actions = vX;
    var Os = (ht.store = (0, pX.createStore)(hX.default));
    function gX(e) {
      e() && (0, bs.observeRequests)(Os);
    }
    function yX(e) {
      y_(), (0, bs.startEngine)({ store: Os, rawData: e, allowEvents: !0 });
    }
    function y_() {
      (0, bs.stopEngine)(Os);
    }
  });
  var I_ = c((qj, T_) => {
    "use strict";
    var m_ = Qe(),
      __ = E_();
    __.setEnv(m_.env);
    m_.define(
      "ix2",
      (T_.exports = function () {
        return __;
      })
    );
  });
  var O_ = c((Mj, b_) => {
    "use strict";
    var hr = Qe();
    hr.define(
      "links",
      (b_.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = hr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          h = /\/$/,
          d,
          v;
        r.ready = r.design = r.preview = m;
        function m() {
          (o = i && hr.env("design")),
            (v = hr.env("slug") || a.pathname || ""),
            hr.scroll.off(E),
            (d = []);
          for (var x = document.links, A = 0; A < x.length; ++A) _(x[A]);
          d.length && (hr.scroll.on(E), E());
        }
        function _(x) {
          if (!x.getAttribute("hreflang")) {
            var A =
              (o && x.getAttribute("href-disabled")) || x.getAttribute("href");
            if (((s.href = A), !(A.indexOf(":") >= 0))) {
              var b = e(x);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var C = e(s.hash);
                C.length && d.push({ link: b, sec: C, active: !1 });
                return;
              }
              if (!(A === "#" || A === "")) {
                var N =
                  s.href === a.href || A === v || (f.test(A) && h.test(v));
                P(b, u, N);
              }
            }
          }
        }
        function E() {
          var x = n.scrollTop(),
            A = n.height();
          t.each(d, function (b) {
            if (!b.link.attr("hreflang")) {
              var C = b.link,
                N = b.sec,
                S = N.offset().top,
                V = N.outerHeight(),
                X = A * 0.5,
                W = N.is(":visible") && S + V - X >= x && S + X <= x + A;
              b.active !== W && ((b.active = W), P(C, u, W));
            }
          });
        }
        function P(x, A, b) {
          var C = x.hasClass(A);
          (b && C) || (!b && !C) || (b ? x.addClass(A) : x.removeClass(A));
        }
        return r;
      })
    );
  });
  var A_ = c((Dj, x_) => {
    "use strict";
    var Ai = Qe();
    Ai.define(
      "scroll",
      (x_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = _() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          u = Ai.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(v));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var E = /^#[a-zA-Z0-9][\w:.-]*$/;
        function P(M) {
          return E.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
        }
        let x =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function A() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            x.matches
          );
        }
        function b(M, T) {
          var q;
          switch (T) {
            case "add":
              (q = M.attr("tabindex")),
                q
                  ? M.attr("data-wf-tabindex-swap", q)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (q = M.attr("data-wf-tabindex-swap")),
                q
                  ? (M.attr("tabindex", q),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", T === "add");
        }
        function C(M) {
          var T = M.currentTarget;
          if (
            !(
              Ai.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var q = P(T) ? T.hash : "";
            if (q !== "") {
              var U = e(q);
              U.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                N(q, M),
                window.setTimeout(
                  function () {
                    S(U, function () {
                      b(U, "add"),
                        U.get(0).focus({ preventScroll: !0 }),
                        b(U, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function N(M) {
          if (
            r.hash !== M &&
            n &&
            n.pushState &&
            !(Ai.env.chrome && r.protocol === "file:")
          ) {
            var T = n.state && n.state.hash;
            T !== M && n.pushState({ hash: M }, "", M);
          }
        }
        function S(M, T) {
          var q = o.scrollTop(),
            U = V(M);
          if (q !== U) {
            var G = X(M, q, U),
              z = Date.now(),
              K = function () {
                var te = Date.now() - z;
                window.scroll(0, W(q, U, te, G)),
                  te <= G ? s(K) : typeof T == "function" && T();
              };
            s(K);
          }
        }
        function V(M) {
          var T = e(f),
            q = T.css("position") === "fixed" ? T.outerHeight() : 0,
            U = M.offset().top - q;
          if (M.data("scroll") === "mid") {
            var G = o.height() - q,
              z = M.outerHeight();
            z < G && (U -= Math.round((G - z) / 2));
          }
          return U;
        }
        function X(M, T, q) {
          if (A()) return 0;
          var U = 1;
          return (
            a.add(M).each(function (G, z) {
              var K = parseFloat(z.getAttribute("data-scroll-time"));
              !isNaN(K) && K >= 0 && (U = K);
            }),
            (472.143 * Math.log(Math.abs(T - q) + 125) - 2e3) * U
          );
        }
        function W(M, T, q, U) {
          return q > U ? T : M + (T - M) * B(q / U);
        }
        function B(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function j() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: T } = t;
          i.on(T, d, C),
            i.on(M, h, function (q) {
              q.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: j };
      })
    );
  });
  var w_ = c((Fj, S_) => {
    "use strict";
    var EX = Qe();
    EX.define(
      "touch",
      (S_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            h;
          i.addEventListener("touchstart", d, !1),
            i.addEventListener("touchmove", v, !1),
            i.addEventListener("touchend", m, !1),
            i.addEventListener("touchcancel", _, !1),
            i.addEventListener("mousedown", d, !1),
            i.addEventListener("mousemove", v, !1),
            i.addEventListener("mouseup", m, !1),
            i.addEventListener("mouseout", _, !1);
          function d(P) {
            var x = P.touches;
            (x && x.length > 1) ||
              ((a = !0),
              x ? ((s = !0), (f = x[0].clientX)) : (f = P.clientX),
              (h = f));
          }
          function v(P) {
            if (a) {
              if (s && P.type === "mousemove") {
                P.preventDefault(), P.stopPropagation();
                return;
              }
              var x = P.touches,
                A = x ? x[0].clientX : P.clientX,
                b = A - h;
              (h = A),
                Math.abs(b) > u &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", P, { direction: b > 0 ? "right" : "left" }), _());
            }
          }
          function m(P) {
            if (a && ((a = !1), s && P.type === "mouseup")) {
              P.preventDefault(), P.stopPropagation(), (s = !1);
              return;
            }
          }
          function _() {
            a = !1;
          }
          function E() {
            i.removeEventListener("touchstart", d, !1),
              i.removeEventListener("touchmove", v, !1),
              i.removeEventListener("touchend", m, !1),
              i.removeEventListener("touchcancel", _, !1),
              i.removeEventListener("mousedown", d, !1),
              i.removeEventListener("mousemove", v, !1),
              i.removeEventListener("mouseup", m, !1),
              i.removeEventListener("mouseout", _, !1),
              (i = null);
          }
          this.destroy = E;
        }
        function o(i, a, s) {
          var u = e.Event(i, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var L_ = c((Gj, C_) => {
    "use strict";
    var Ot = Qe(),
      mX = Mi(),
      ot = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      R_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Ot.define(
      "slider",
      (C_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(document),
          i,
          a,
          s = Ot.env(),
          u = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          h =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          d = "w-slider-force-show",
          v = mX.triggers,
          m,
          _ = !1;
        (r.ready = function () {
          (a = Ot.env("design")), E();
        }),
          (r.design = function () {
            (a = !0), setTimeout(E, 1e3);
          }),
          (r.preview = function () {
            (a = !1), E();
          }),
          (r.redraw = function () {
            (_ = !0), E(), (_ = !1);
          }),
          (r.destroy = P);
        function E() {
          (i = o.find(u)), i.length && (i.each(b), !m && (P(), x()));
        }
        function P() {
          Ot.resize.off(A), Ot.redraw.off(r.redraw);
        }
        function x() {
          Ot.resize.on(A), Ot.redraw.on(r.redraw);
        }
        function A() {
          i.filter(":visible").each(G);
        }
        function b(p, D) {
          var R = e(D),
            O = e.data(D, u);
          O ||
            (O = e.data(D, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: R,
              config: {},
            })),
            (O.mask = R.children(".w-slider-mask")),
            (O.left = R.children(".w-slider-arrow-left")),
            (O.right = R.children(".w-slider-arrow-right")),
            (O.nav = R.children(".w-slider-nav")),
            (O.slides = O.mask.children(".w-slide")),
            O.slides.each(v.reset),
            _ && (O.maskWidth = 0),
            R.attr("role") === void 0 && R.attr("role", "region"),
            R.attr("aria-label") === void 0 && R.attr("aria-label", "carousel");
          var Q = O.mask.attr("id");
          if (
            (Q || ((Q = "w-slider-mask-" + p), O.mask.attr("id", Q)),
            !a && !O.ariaLiveLabel && (O.ariaLiveLabel = e(h).appendTo(O.mask)),
            O.left.attr("role", "button"),
            O.left.attr("tabindex", "0"),
            O.left.attr("aria-controls", Q),
            O.left.attr("aria-label") === void 0 &&
              O.left.attr("aria-label", "previous slide"),
            O.right.attr("role", "button"),
            O.right.attr("tabindex", "0"),
            O.right.attr("aria-controls", Q),
            O.right.attr("aria-label") === void 0 &&
              O.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            O.left.hide(), O.right.hide(), O.nav.hide(), (m = !0);
            return;
          }
          O.el.off(u),
            O.left.off(u),
            O.right.off(u),
            O.nav.off(u),
            C(O),
            a
              ? (O.el.on("setting" + u, T(O)), M(O), (O.hasTimer = !1))
              : (O.el.on("swipe" + u, T(O)),
                O.left.on("click" + u, X(O)),
                O.right.on("click" + u, W(O)),
                O.left.on("keydown" + u, V(O, X)),
                O.right.on("keydown" + u, V(O, W)),
                O.nav.on("keydown" + u, "> div", T(O)),
                O.config.autoplay &&
                  !O.hasTimer &&
                  ((O.hasTimer = !0), (O.timerCount = 1), j(O)),
                O.el.on("mouseenter" + u, S(O, !0, "mouse")),
                O.el.on("focusin" + u, S(O, !0, "keyboard")),
                O.el.on("mouseleave" + u, S(O, !1, "mouse")),
                O.el.on("focusout" + u, S(O, !1, "keyboard"))),
            O.nav.on("click" + u, "> div", T(O)),
            s ||
              O.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var re = R.filter(":hidden");
          re.addClass(d);
          var ye = R.parents(":hidden");
          ye.addClass(d), _ || G(p, D), re.removeClass(d), ye.removeClass(d);
        }
        function C(p) {
          var D = {};
          (D.crossOver = 0),
            (D.animation = p.el.attr("data-animation") || "slide"),
            D.animation === "outin" &&
              ((D.animation = "cross"), (D.crossOver = 0.5)),
            (D.easing = p.el.attr("data-easing") || "ease");
          var R = p.el.attr("data-duration");
          if (
            ((D.duration = R != null ? parseInt(R, 10) : 500),
            N(p.el.attr("data-infinite")) && (D.infinite = !0),
            N(p.el.attr("data-disable-swipe")) && (D.disableSwipe = !0),
            N(p.el.attr("data-hide-arrows"))
              ? (D.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            N(p.el.attr("data-autoplay")))
          ) {
            (D.autoplay = !0),
              (D.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (D.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var O = "mousedown" + u + " touchstart" + u;
            a ||
              p.el.off(O).one(O, function () {
                M(p);
              });
          }
          var Q = p.right.width();
          (D.edge = Q ? Q + 40 : 100), (p.config = D);
        }
        function N(p) {
          return p === "1" || p === "true";
        }
        function S(p, D, R) {
          return function (O) {
            if (D) p.hasFocus[R] = D;
            else if (
              e.contains(p.el.get(0), O.relatedTarget) ||
              ((p.hasFocus[R] = D),
              (p.hasFocus.mouse && R === "keyboard") ||
                (p.hasFocus.keyboard && R === "mouse"))
            )
              return;
            D
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && M(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && j(p));
          };
        }
        function V(p, D) {
          return function (R) {
            switch (R.keyCode) {
              case ot.SPACE:
              case ot.ENTER:
                return D(p)(), R.preventDefault(), R.stopPropagation();
            }
          };
        }
        function X(p) {
          return function () {
            U(p, { index: p.index - 1, vector: -1 });
          };
        }
        function W(p) {
          return function () {
            U(p, { index: p.index + 1, vector: 1 });
          };
        }
        function B(p, D) {
          var R = null;
          D === p.slides.length && (E(), z(p)),
            t.each(p.anchors, function (O, Q) {
              e(O.els).each(function (re, ye) {
                e(ye).index() === D && (R = Q);
              });
            }),
            R != null && U(p, { index: R, immediate: !0 });
        }
        function j(p) {
          M(p);
          var D = p.config,
            R = D.timerMax;
          (R && p.timerCount++ > R) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (W(p)(), j(p));
            }, D.delay));
        }
        function M(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function T(p) {
          return function (D, R) {
            R = R || {};
            var O = p.config;
            if (a && D.type === "setting") {
              if (R.select === "prev") return X(p)();
              if (R.select === "next") return W(p)();
              if ((C(p), z(p), R.select == null)) return;
              B(p, R.select);
              return;
            }
            if (D.type === "swipe")
              return O.disableSwipe || Ot.env("editor")
                ? void 0
                : R.direction === "left"
                ? W(p)()
                : R.direction === "right"
                ? X(p)()
                : void 0;
            if (p.nav.has(D.target).length) {
              var Q = e(D.target).index();
              if (
                (D.type === "click" && U(p, { index: Q }), D.type === "keydown")
              )
                switch (D.keyCode) {
                  case ot.ENTER:
                  case ot.SPACE: {
                    U(p, { index: Q }), D.preventDefault();
                    break;
                  }
                  case ot.ARROW_LEFT:
                  case ot.ARROW_UP: {
                    q(p.nav, Math.max(Q - 1, 0)), D.preventDefault();
                    break;
                  }
                  case ot.ARROW_RIGHT:
                  case ot.ARROW_DOWN: {
                    q(p.nav, Math.min(Q + 1, p.pages)), D.preventDefault();
                    break;
                  }
                  case ot.HOME: {
                    q(p.nav, 0), D.preventDefault();
                    break;
                  }
                  case ot.END: {
                    q(p.nav, p.pages), D.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function q(p, D) {
          var R = p.children().eq(D).focus();
          p.children().not(R);
        }
        function U(p, D) {
          D = D || {};
          var R = p.config,
            O = p.anchors;
          p.previous = p.index;
          var Q = D.index,
            re = {};
          Q < 0
            ? ((Q = O.length - 1),
              R.infinite &&
                ((re.x = -p.endX), (re.from = 0), (re.to = O[0].width)))
            : Q >= O.length &&
              ((Q = 0),
              R.infinite &&
                ((re.x = O[O.length - 1].width),
                (re.from = -O[O.length - 1].x),
                (re.to = re.from - re.x))),
            (p.index = Q);
          var ye = p.nav
            .children()
            .eq(Q)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(ye)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            R.hideArrows &&
              (p.index === O.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ze = p.offsetX || 0,
            qe = (p.offsetX = -O[p.index].x),
            ue = { x: qe, opacity: 1, visibility: "" },
            de = e(O[p.index].els),
            at = e(O[p.previous] && O[p.previous].els),
            st = p.slides.not(de),
            vt = R.animation,
            Me = R.easing,
            xt = Math.round(R.duration),
            Jr = D.vector || (p.index > p.previous ? 1 : -1),
            l = "opacity " + xt + "ms " + Me,
            g = "transform " + xt + "ms " + Me;
          if (
            (de.find(R_).removeAttr("tabindex"),
            de.removeAttr("aria-hidden"),
            de.find("*").removeAttr("aria-hidden"),
            st.find(R_).attr("tabindex", "-1"),
            st.attr("aria-hidden", "true"),
            st.find("*").attr("aria-hidden", "true"),
            a || (de.each(v.intro), st.each(v.outro)),
            D.immediate && !_)
          ) {
            n(de).set(ue), L();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${Q + 1} of ${O.length}.`),
            vt === "cross")
          ) {
            var y = Math.round(xt - xt * R.crossOver),
              I = Math.round(xt - y);
            (l = "opacity " + y + "ms " + Me),
              n(at).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(de)
                .set({ visibility: "", x: qe, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .wait(I)
                .then({ opacity: 1 })
                .then(L);
            return;
          }
          if (vt === "fade") {
            n(at).set({ visibility: "" }).stop(),
              n(de)
                .set({ visibility: "", x: qe, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(L);
            return;
          }
          if (vt === "over") {
            (ue = { x: p.endX }),
              n(at).set({ visibility: "" }).stop(),
              n(de)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: qe + O[p.index].width * Jr,
                })
                .add(g)
                .start({ x: qe })
                .then(L);
            return;
          }
          R.infinite && re.x
            ? (n(p.slides.not(at))
                .set({ visibility: "", x: re.x })
                .add(g)
                .start({ x: qe }),
              n(at)
                .set({ visibility: "", x: re.from })
                .add(g)
                .start({ x: re.to }),
              (p.shifted = at))
            : (R.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: ze }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(g).start({ x: qe }));
          function L() {
            (de = e(O[p.index].els)),
              (st = p.slides.not(de)),
              vt !== "slide" && (ue.visibility = "hidden"),
              n(st).set(ue);
          }
        }
        function G(p, D) {
          var R = e.data(D, u);
          if (R) {
            if (te(R)) return z(R);
            a && Ie(R) && z(R);
          }
        }
        function z(p) {
          var D = 1,
            R = 0,
            O = 0,
            Q = 0,
            re = p.maskWidth,
            ye = re - p.config.edge;
          ye < 0 && (ye = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (qe, ue) {
              O - R > ye &&
                (D++,
                (R += re),
                (p.anchors[D - 1] = { els: [], x: O, width: 0 })),
                (Q = e(ue).outerWidth(!0)),
                (O += Q),
                (p.anchors[D - 1].width += Q),
                p.anchors[D - 1].els.push(ue);
              var de = qe + 1 + " of " + p.slides.length;
              e(ue).attr("aria-label", de), e(ue).attr("role", "group");
            }),
            (p.endX = O),
            a && (p.pages = null),
            p.nav.length && p.pages !== D && ((p.pages = D), K(p));
          var ze = p.index;
          ze >= D && (ze = D - 1), U(p, { immediate: !0, index: ze });
        }
        function K(p) {
          var D = [],
            R,
            O = p.el.attr("data-nav-spacing");
          O && (O = parseFloat(O) + "px");
          for (var Q = 0, re = p.pages; Q < re; Q++)
            (R = e(f)),
              R.attr("aria-label", "Show slide " + (Q + 1) + " of " + re)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && R.text(Q + 1),
              O != null && R.css({ "margin-left": O, "margin-right": O }),
              D.push(R);
          p.nav.empty().append(D);
        }
        function te(p) {
          var D = p.mask.width();
          return p.maskWidth !== D ? ((p.maskWidth = D), !0) : !1;
        }
        function Ie(p) {
          var D = 0;
          return (
            p.slides.each(function (R, O) {
              D += e(O).outerWidth(!0);
            }),
            p.slidesWidth !== D ? ((p.slidesWidth = D), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Gs();
  Us();
  Ws();
  ks();
  Mi();
  I_();
  O_();
  A_();
  w_();
  L_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-2": {
      id: "e-2",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5343bca08039b78d170002c6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1562872223331,
    },
    "e-7": {
      id: "e-7",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d1202780a78f74b4c475dd7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d1202780a78f74b4c475dd7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1562877354666,
    },
    "e-10": {
      id: "e-10",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "5d27a5436df2e601d828e0d3",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1562881875944,
    },
    "e-12": {
      id: "e-12",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|462a282a-3c93-b2c2-4bc4-1c45b323fa3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|462a282a-3c93-b2c2-4bc4-1c45b323fa3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563708897265,
    },
    "e-13": {
      id: "e-13",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|462a282a-3c93-b2c2-4bc4-1c45b323fa3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|462a282a-3c93-b2c2-4bc4-1c45b323fa3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563708897266,
    },
    "e-14": {
      id: "e-14",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|85d26124-a07a-0189-15d9-074cdc5da320",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|85d26124-a07a-0189-15d9-074cdc5da320",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563709435668,
    },
    "e-15": {
      id: "e-15",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|85d26124-a07a-0189-15d9-074cdc5da320",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|85d26124-a07a-0189-15d9-074cdc5da320",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563709435669,
    },
    "e-16": {
      id: "e-16",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|3006e0ba-b29c-1f44-16fa-9f2df904cb4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|3006e0ba-b29c-1f44-16fa-9f2df904cb4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563709453831,
    },
    "e-17": {
      id: "e-17",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|3006e0ba-b29c-1f44-16fa-9f2df904cb4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|3006e0ba-b29c-1f44-16fa-9f2df904cb4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563709453832,
    },
    "e-18": {
      id: "e-18",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5d1202780a78f74b4c475dd7|530b5ec6-8420-f58e-1965-98b4edd9a63d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d1202780a78f74b4c475dd7|530b5ec6-8420-f58e-1965-98b4edd9a63d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563710056727,
    },
    "e-19": {
      id: "e-19",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5d1202780a78f74b4c475dd7|530b5ec6-8420-f58e-1965-98b4edd9a63d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d1202780a78f74b4c475dd7|530b5ec6-8420-f58e-1965-98b4edd9a63d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563710056728,
    },
    "e-20": {
      id: "e-20",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-21" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d27a5436df2e601d828e0d3|4be36480-7b85-9737-e4e4-925b517b4bd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3|4be36480-7b85-9737-e4e4-925b517b4bd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 73,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1564675025387,
    },
    "e-21": {
      id: "e-21",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeOut", autoStopEventId: "e-20" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d27a5436df2e601d828e0d3|4be36480-7b85-9737-e4e4-925b517b4bd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3|4be36480-7b85-9737-e4e4-925b517b4bd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: false,
      },
      createdOn: 1564675025389,
    },
    "e-28": {
      id: "e-28",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-29" },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5d27a5436df2e601d828e0d3|d975f085-4d90-104b-e1b7-6ae14a89106a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3|d975f085-4d90-104b-e1b7-6ae14a89106a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 122,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1564774935329,
    },
    "e-29": {
      id: "e-29",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeOut", autoStopEventId: "e-28" },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5d27a5436df2e601d828e0d3|d975f085-4d90-104b-e1b7-6ae14a89106a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3|d975f085-4d90-104b-e1b7-6ae14a89106a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: false,
      },
      createdOn: 1564774935331,
    },
    "e-30": {
      id: "e-30",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-31" },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5d27a5436df2e601d828e0d3|e45b02e6-f041-bcac-0f18-6d98bcafe9b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3|e45b02e6-f041-bcac-0f18-6d98bcafe9b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 122,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1564774962744,
    },
    "e-31": {
      id: "e-31",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeOut", autoStopEventId: "e-30" },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5d27a5436df2e601d828e0d3|e45b02e6-f041-bcac-0f18-6d98bcafe9b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3|e45b02e6-f041-bcac-0f18-6d98bcafe9b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: false,
      },
      createdOn: 1564774962746,
    },
    "e-34": {
      id: "e-34",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d51c80528fbf0254469b51e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d51c80528fbf0254469b51e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1565640726278,
    },
    "e-36": {
      id: "e-36",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d51c80528fbf0254469b51e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d51c80528fbf0254469b51e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1565640726278,
    },
    "e-38": {
      id: "e-38",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d51d2e328fbf037d069f93c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d51d2e328fbf037d069f93c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1565643507522,
    },
    "e-40": {
      id: "e-40",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d51d2e328fbf037d069f93c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d51d2e328fbf037d069f93c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1565643507522,
    },
    "e-42": {
      id: "e-42",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-6-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1566407259578,
    },
    "e-43": {
      id: "e-43",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "5d1202780a78f74b4c475dd7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d1202780a78f74b4c475dd7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-6-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1566407477168,
    },
    "e-44": {
      id: "e-44",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "5d51c80528fbf0254469b51e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d51c80528fbf0254469b51e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-6-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1566407504785,
    },
    "e-45": {
      id: "e-45",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "5d51d2e328fbf037d069f93c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d51d2e328fbf037d069f93c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-6-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1566407517597,
    },
    "e-46": {
      id: "e-46",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "5d27a5436df2e601d828e0d3",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d27a5436df2e601d828e0d3",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1566638833947,
    },
    "e-48": {
      id: "e-48",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5d6ed53d5fd0242a2024054e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d6ed53d5fd0242a2024054e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1567713838211,
    },
    "e-50": {
      id: "e-50",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "5d6ed53d5fd0242a2024054e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5d6ed53d5fd0242a2024054e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-6-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1567713890057,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|47b07086-96f1-e788-005f-6f43fa12f6f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|47b07086-96f1-e788-005f-6f43fa12f6f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688053957131,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5343bca08039b78d170002c6|47b07086-96f1-e788-005f-6f43fa12f6f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5343bca08039b78d170002c6|47b07086-96f1-e788-005f-6f43fa12f6f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688053957131,
    },
  },
  actionLists: {
    "a-4": {
      id: "a-4",
      title: "Swipe In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".header.swipe-up",
                  selectorGuids: [
                    "f5dee88d-7ee0-08cf-4076-87dd4643df6b",
                    "6cfa524d-d5db-8678-f6b6-586c654007aa",
                  ],
                },
                yValue: 39,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".description",
                  selectorGuids: ["6c7ac3ca-9128-74f0-7850-1a4f99860aa1"],
                },
                yValue: 65,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".description",
                  selectorGuids: ["6c7ac3ca-9128-74f0-7850-1a4f99860aa1"],
                },
                yValue: 178,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-19",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".work-background",
                  selectorGuids: ["18275ea4-c2d5-df91-3b7c-056f96d29a07"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "VH",
                locked: false,
              },
            },
            {
              id: "a-4-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".header.header-large",
                  selectorGuids: [
                    "f5dee88d-7ee0-08cf-4076-87dd4643df6b",
                    "abc97030-d2e3-ff00-daea-0d295684dd98",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-33",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".background",
                  selectorGuids: ["ad14e454-bc1f-0154-31ce-37d6daf37d39"],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "VH",
                locked: false,
              },
            },
            {
              id: "a-4-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-item",
                  selectorGuids: ["b90b77c8-3cb3-b322-59fa-01e809c40cf9"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-37",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-item",
                  selectorGuids: ["b90b77c8-3cb3-b322-59fa-01e809c40cf9"],
                },
                filters: [
                  { type: "blur", filterId: "8d9d", value: 20, unit: "px" },
                ],
              },
            },
            {
              id: "a-4-n-39",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".profile-img",
                  selectorGuids: ["7981dc3e-1c9b-ae94-49c3-9984f2e35322"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-4-n-41",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".banner",
                  selectorGuids: ["58ab3bd9-e01c-12c0-3d9a-21d0b92548a8"],
                },
                yValue: -300,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-34",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 1000,
                target: {
                  selector: ".background",
                  selectorGuids: ["ad14e454-bc1f-0154-31ce-37d6daf37d39"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "VH",
                locked: false,
              },
            },
            {
              id: "a-4-n-20",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 100,
                easing: "inOutExpo",
                duration: 750,
                target: {
                  selector: ".work-background",
                  selectorGuids: ["18275ea4-c2d5-df91-3b7c-056f96d29a07"],
                },
                heightValue: 95,
                widthUnit: "PX",
                heightUnit: "VH",
                locked: false,
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1000,
                target: {
                  selector: ".header.swipe-up",
                  selectorGuids: [
                    "f5dee88d-7ee0-08cf-4076-87dd4643df6b",
                    "6cfa524d-d5db-8678-f6b6-586c654007aa",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1100,
                target: {
                  selector: ".description",
                  selectorGuids: ["6c7ac3ca-9128-74f0-7850-1a4f99860aa1"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1200,
                target: {
                  selector: ".description",
                  selectorGuids: ["6c7ac3ca-9128-74f0-7850-1a4f99860aa1"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 2000,
                target: {
                  selector: ".header.header-large",
                  selectorGuids: [
                    "f5dee88d-7ee0-08cf-4076-87dd4643df6b",
                    "abc97030-d2e3-ff00-daea-0d295684dd98",
                  ],
                },
                yValue: -2,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-38",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 500,
                easing: "inOutExpo",
                duration: 750,
                target: {
                  selector: ".nav-item",
                  selectorGuids: ["b90b77c8-3cb3-b322-59fa-01e809c40cf9"],
                },
                filters: [
                  { type: "blur", filterId: "6828", value: 0, unit: "px" },
                ],
              },
            },
            {
              id: "a-4-n-40",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 500,
                easing: "outExpo",
                duration: 750,
                target: {
                  selector: ".profile-img",
                  selectorGuids: ["7981dc3e-1c9b-ae94-49c3-9984f2e35322"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-4-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-item",
                  selectorGuids: ["b90b77c8-3cb3-b322-59fa-01e809c40cf9"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-42",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "inOutExpo",
                duration: 1500,
                target: {
                  selector: ".banner",
                  selectorGuids: ["58ab3bd9-e01c-12c0-3d9a-21d0b92548a8"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1562870919729,
    },
    "a-9": {
      id: "a-9",
      title: "Underline",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-underline",
                  selectorGuids: ["0f7e651c-d873-c9ad-a07c-b7ec8c264957"],
                },
                xValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-underline",
                  selectorGuids: ["0f7e651c-d873-c9ad-a07c-b7ec8c264957"],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1563708905532,
    },
    "a-10": {
      id: "a-10",
      title: "UnderlineOut",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-underline",
                  selectorGuids: ["0f7e651c-d873-c9ad-a07c-b7ec8c264957"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inExpo",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-underline",
                  selectorGuids: ["0f7e651c-d873-c9ad-a07c-b7ec8c264957"],
                },
                xValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1563709042069,
    },
    a: {
      id: "a",
      title: "New Mouse Animation",
      continuousParameterGroups: [
        {
          id: "a-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [],
        },
        {
          id: "a-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      selector: ".section-right",
                      selectorGuids: ["18fe0e65-8d60-b77e-4556-4d0ed332ae00"],
                    },
                    yValue: 6,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      selector: ".section-right",
                      selectorGuids: ["18fe0e65-8d60-b77e-4556-4d0ed332ae00"],
                    },
                    yValue: -6,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1562863224209,
    },
    "a-6": {
      id: "a-6",
      title: "shadowParallax",
      continuousParameterGroups: [
        {
          id: "a-6-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-6-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".element-item",
                      selectorGuids: ["7d4bf246-02a5-2a31-4d99-34e2abd4859e"],
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-6-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutExpo",
                    duration: 500,
                    target: {
                      selector: ".element-item",
                      selectorGuids: ["7d4bf246-02a5-2a31-4d99-34e2abd4859e"],
                    },
                    xValue: -1,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-6-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-6-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".element-item",
                      selectorGuids: ["7d4bf246-02a5-2a31-4d99-34e2abd4859e"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-6-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".element-item",
                      selectorGuids: ["7d4bf246-02a5-2a31-4d99-34e2abd4859e"],
                    },
                    yValue: -2,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1562874594788,
    },
    "a-11": {
      id: "a-11",
      title: "Swipe In background",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".work-background",
                  selectorGuids: ["18275ea4-c2d5-df91-3b7c-056f96d29a07"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "VH",
                locked: false,
              },
            },
            {
              id: "a-11-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5d27a5436df2e601d828e0d3|39673138-3ef7-ee2b-b64c-a042611faa0c",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 100,
                easing: "inOutExpo",
                duration: 750,
                target: {
                  selector: ".work-background",
                  selectorGuids: ["18275ea4-c2d5-df91-3b7c-056f96d29a07"],
                },
                heightValue: 70,
                widthUnit: "PX",
                heightUnit: "VH",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 350,
                target: {
                  id: "5d27a5436df2e601d828e0d3|39673138-3ef7-ee2b-b64c-a042611faa0c",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1562870919729,
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    fadeOut: {
      id: "fadeOut",
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});

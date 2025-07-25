/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, i, a, s;
    for (var l in S)
      if (S.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = S[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
          ((a = e[i]),
            (s = a.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = o)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = o)),
            C.push((o ? "" : "no-") + s.join("-")));
      }
  }
  function i(e) {
    var t = b.className,
      n = Modernizr._config.classPrefix || "";
    if ((x && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      x ? (b.className.baseVal = t) : (b.className = t));
  }
  function a(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function s() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : x
        ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
        : t.createElement.apply(t, arguments);
  }
  function l(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function u() {
    var e = t.body;
    return (e || ((e = s(x ? "svg" : "body")), (e.fake = !0)), e);
  }
  function c(e, n, r, o) {
    var i,
      a,
      l,
      c,
      f = "modernizr",
      d = s("div"),
      p = u();
    if (parseInt(r, 10))
      for (; r--; )
        ((l = s("div")), (l.id = o ? o[r] : f + (r + 1)), d.appendChild(l));
    return (
      (i = s("style")),
      (i.type = "text/css"),
      (i.id = "s" + f),
      (p.fake ? p : d).appendChild(i),
      p.appendChild(d),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(t.createTextNode(e)),
      (d.id = f),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (c = b.style.overflow),
        (b.style.overflow = "hidden"),
        b.appendChild(p)),
      (a = n(d, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (b.style.overflow = c), b.offsetHeight)
        : d.parentNode.removeChild(d),
      !!a
    );
  }
  function f(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var a = i.error ? "error" : "log";
        i[a].call(
          i,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate",
        );
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }
  function p(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(f(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--; ) i.push("(" + f(t[o]) + ":" + r + ")");
      return (
        (i = i.join(" or ")),
        c(
          "@supports (" + i + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == d(e, null, "position");
          },
        )
      );
    }
    return n;
  }
  function m(e, t, o, i) {
    function u() {
      f && (delete P.style, delete P.modElem);
    }
    if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
      var c = p(e, o);
      if (!r(c, "undefined")) return c;
    }
    for (
      var f, d, m, h, g, v = ["modernizr", "tspan", "samp"];
      !P.style && v.length;

    )
      ((f = !0), (P.modElem = s(v.shift())), (P.style = P.modElem.style));
    for (m = e.length, d = 0; m > d; d++)
      if (
        ((h = e[d]),
        (g = P.style[h]),
        a(h, "-") && (h = l(h)),
        P.style[h] !== n)
      ) {
        if (i || r(o, "undefined")) return (u(), "pfx" == t ? h : !0);
        try {
          P.style[h] = o;
        } catch (y) {}
        if (P.style[h] != g) return (u(), "pfx" == t ? h : !0);
      }
    return (u(), !1);
  }
  function h(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function g(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t)
        return n === !1
          ? e[i]
          : ((o = t[e[i]]), r(o, "function") ? h(o, n || t) : o);
    return !1;
  }
  function v(e, t, n, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + T.join(a + " ") + a).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? m(s, t, o, i)
      : ((s = (e + " " + N.join(a + " ") + a).split(" ")), g(s, t, n));
  }
  function y(e, t, r) {
    return v(e, n, n, t, r);
  }
  var C = [],
    S = [],
    E = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        S.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        S.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  ((Modernizr.prototype = E), (Modernizr = new Modernizr()));
  var b = t.documentElement,
    x = "svg" === b.nodeName.toLowerCase(),
    w = E._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
  E._prefixes = w;
  x ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = C.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e, t) {
        var n = C.elements;
        ("string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (C.elements = n + " " + e),
          u(t));
      }
      function i(e) {
        var t = y[e[g]];
        return (t || ((t = {}), v++, (e[g] = v), (y[v] = t)), t);
      }
      function a(e, n, r) {
        if ((n || (n = t), f)) return n.createElement(e);
        r || (r = i(n));
        var o;
        return (
          (o = r.cache[e]
            ? r.cache[e].cloneNode()
            : h.test(e)
              ? (r.cache[e] = r.createElem(e)).cloneNode()
              : r.createElem(e)),
          !o.canHaveChildren || m.test(e) || o.tagUrn
            ? o
            : r.frag.appendChild(o)
        );
      }
      function s(e, n) {
        if ((e || (e = t), f)) return e.createDocumentFragment();
        n = n || i(e);
        for (
          var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length;
          l > a;
          a++
        )
          o.createElement(s[a]);
        return o;
      }
      function l(e, t) {
        (t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return C.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e),
                    t.frag.createElement(e),
                    'c("' + e + '")'
                  );
                }) +
              ");return n}",
          )(C, t.frag)));
      }
      function u(e) {
        e || (e = t);
        var r = i(e);
        return (
          !C.shivCSS ||
            c ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",
            )),
          f || l(e, r),
          e
        );
      }
      var c,
        f,
        d = "3.7.3",
        p = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        v = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement("a");
          ((e.innerHTML = "<xyz></xyz>"),
            (c = "hidden" in e),
            (f =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })()));
        } catch (n) {
          ((c = !0), (f = !0));
        }
      })();
      var C = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: d,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: f,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: u,
        createElement: a,
        createDocumentFragment: s,
        addElements: o,
      };
      ((e.html5 = C),
        u(t),
        "object" == typeof module && module.exports && (module.exports = C));
    })("undefined" != typeof e ? e : this, t);
  var _ = "Moz O ms Webkit",
    N = E._config.usePrefixes ? _.toLowerCase().split(" ") : [];
  E._domPrefixes = N;
  var z = ((E.testStyles = c), { elem: s("modernizr") });
  Modernizr._q.push(function () {
    delete z.elem;
  });
  var P = { style: z.elem.style };
  Modernizr._q.unshift(function () {
    delete P.style;
  });
  var j =
      ((E.testProp = function (e, t, r) {
        return m([e], n, t, r);
      }),
      "CSS" in e && "supports" in e.CSS),
    k = "supportsCSS" in e;
  Modernizr.addTest("supports", j || k);
  var T = E._config.usePrefixes ? _.split(" ") : [];
  ((E._cssomPrefixes = T),
    (E.testAllProps = v),
    (E.testAllProps = y),
    Modernizr.addTest("csstransforms3d", function () {
      return !!y("perspective", "1px", !0);
    }),
    o(),
    i(C),
    delete E.addTest,
    delete E.addAsyncTest);
  for (var F = 0; F < Modernizr._q.length; F++) Modernizr._q[F]();
  e.Modernizr = Modernizr;
})(window, document);

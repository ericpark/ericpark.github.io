(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    DL4o: function(e, t, r) {},
    RXBc: function(e, t, r) {
      "use strict";
      r.r(t);
      var a = r("q1tI"),
        n = r.n(a),
        i = r("Wbzz"),
        s = r("Bl7J"),
        c = r("vrFN"),
        o = e =>
          n.a.createElement(
            "article",
            {
              className: `post-card ${e.count % 3 == 0 && "post-card-large"} ${
                e.postClass
              } ${e.node.frontmatter.thumbnail ? "with-image" : "no-image"}`,
              style: e.node.frontmatter.thumbnail && {
                backgroundImage: `url(${e.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
                margin: "1px 1px 1px 1px"
              }
            },
            n.a.createElement(
              i.Link,
              { to: e.node.fields.slug, className: "post-card-link" },
              n.a.createElement(
                "div",
                { className: "post-card-content" },
                n.a.createElement(
                  "h2",
                  { className: "post-card-title" },
                  e.node.frontmatter.title || e.node.fields.slug
                )
              )
            )
          ),
        l = r("dI71");
      var u = (function() {
        function e(e) {
          (this.isSpeedy = void 0 === e.speedy || e.speedy),
            (this.tags = []),
            (this.ctr = 0),
            (this.nonce = e.nonce),
            (this.key = e.key),
            (this.container = e.container),
            (this.before = null);
        }
        var t = e.prototype;
        return (
          (t.insert = function(e) {
            if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
              var t,
                r = (function(e) {
                  var t = document.createElement("style");
                  return (
                    t.setAttribute("data-emotion", e.key),
                    void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                    t.appendChild(document.createTextNode("")),
                    t
                  );
                })(this);
              (t =
                0 === this.tags.length
                  ? this.before
                  : this.tags[this.tags.length - 1].nextSibling),
                this.container.insertBefore(r, t),
                this.tags.push(r);
            }
            var a = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var n = (function(e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t];
              })(a);
              try {
                var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                n.insertRule(e, i ? 0 : n.cssRules.length);
              } catch (s) {
                0;
              }
            } else a.appendChild(document.createTextNode(e));
            this.ctr++;
          }),
          (t.flush = function() {
            this.tags.forEach(function(e) {
              return e.parentNode.removeChild(e);
            }),
              (this.tags = []),
              (this.ctr = 0);
          }),
          e
        );
      })();
      var d = function(e) {
        function t(e, t, a) {
          var n = t.trim().split(f);
          t = n;
          var i = n.length,
            s = e.length;
          switch (s) {
            case 0:
            case 1:
              var c = 0;
              for (e = 0 === s ? "" : e[0] + " "; c < i; ++c)
                t[c] = r(e, t[c], a).trim();
              break;
            default:
              var o = (c = 0);
              for (t = []; c < i; ++c)
                for (var l = 0; l < s; ++l)
                  t[o++] = r(e[l] + " ", n[c], a).trim();
          }
          return t;
        }
        function r(e, t, r) {
          var a = t.charCodeAt(0);
          switch ((33 > a && (a = (t = t.trim()).charCodeAt(0)), a)) {
            case 38:
              return t.replace(p, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(p, "$1" + e.trim());
            default:
              if (0 < 1 * r && 0 < t.indexOf("\f"))
                return t.replace(
                  p,
                  (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                );
          }
          return e + t;
        }
        function a(e, t, r, i) {
          var s = e + ";",
            c = 2 * t + 3 * r + 4 * i;
          if (944 === c) {
            e = s.indexOf(":", 9) + 1;
            var o = s.substring(e, s.length - 1).trim();
            return (
              (o = s.substring(0, e).trim() + o + ";"),
              1 === N || (2 === N && n(o, 1)) ? "-webkit-" + o + o : o
            );
          }
          if (0 === N || (2 === N && !n(s, 1))) return s;
          switch (c) {
            case 1015:
              return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
            case 951:
              return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
            case 963:
              return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
            case 1009:
              if (100 !== s.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + s + s;
            case 978:
              return "-webkit-" + s + "-moz-" + s + s;
            case 1019:
            case 983:
              return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
            case 883:
              if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
              if (0 < s.indexOf("image-set(", 11))
                return s.replace(E, "$1-webkit-$2") + s;
              break;
            case 932:
              if (45 === s.charCodeAt(4))
                switch (s.charCodeAt(5)) {
                  case 103:
                    return (
                      "-webkit-box-" +
                      s.replace("-grow", "") +
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("grow", "positive") +
                      s
                    );
                  case 115:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("shrink", "negative") +
                      s
                    );
                  case 98:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("basis", "preferred-size") +
                      s
                    );
                }
              return "-webkit-" + s + "-ms-" + s + s;
            case 964:
              return "-webkit-" + s + "-ms-flex-" + s + s;
            case 1023:
              if (99 !== s.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (o = s
                  .substring(s.indexOf(":", 15))
                  .replace("flex-", "")
                  .replace("space-between", "justify")) +
                "-webkit-" +
                s +
                "-ms-flex-pack" +
                o +
                s
              );
            case 1005:
              return m.test(s)
                ? s.replace(d, ":-webkit-") + s.replace(d, ":-moz-") + s
                : s;
            case 1e3:
              switch (
                ((t = (o = s.substring(13).trim()).indexOf("-") + 1),
                o.charCodeAt(0) + o.charCodeAt(t))
              ) {
                case 226:
                  o = s.replace(k, "tb");
                  break;
                case 232:
                  o = s.replace(k, "tb-rl");
                  break;
                case 220:
                  o = s.replace(k, "lr");
                  break;
                default:
                  return s;
              }
              return "-webkit-" + s + "-ms-" + o + s;
            case 1017:
              if (-1 === s.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (s = e).length - 10),
                (c =
                  (o = (33 === s.charCodeAt(t) ? s.substring(0, t) : s)
                    .substring(e.indexOf(":", 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | o.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > o.charCodeAt(8)) break;
                case 115:
                  s = s.replace(o, "-webkit-" + o) + ";" + s;
                  break;
                case 207:
                case 102:
                  s =
                    s.replace(
                      o,
                      "-webkit-" + (102 < c ? "inline-" : "") + "box"
                    ) +
                    ";" +
                    s.replace(o, "-webkit-" + o) +
                    ";" +
                    s.replace(o, "-ms-" + o + "box") +
                    ";" +
                    s;
              }
              return s + ";";
            case 938:
              if (45 === s.charCodeAt(5))
                switch (s.charCodeAt(6)) {
                  case 105:
                    return (
                      (o = s.replace("-items", "")),
                      "-webkit-" + s + "-webkit-box-" + o + "-ms-flex-" + o + s
                    );
                  case 115:
                    return (
                      "-webkit-" + s + "-ms-flex-item-" + s.replace(A, "") + s
                    );
                  default:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-flex-line-pack" +
                      s.replace("align-content", "").replace(A, "") +
                      s
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === x.test(e))
                return 115 ===
                  (o = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? a(e.replace("stretch", "fill-available"), t, r, i).replace(
                      ":fill-available",
                      ":stretch"
                    )
                  : s.replace(o, "-webkit-" + o) +
                      s.replace(o, "-moz-" + o.replace("fill-", "")) +
                      s;
              break;
            case 962:
              if (
                ((s =
                  "-webkit-" +
                  s +
                  (102 === s.charCodeAt(5) ? "-ms-" + s : "") +
                  s),
                211 === r + i &&
                  105 === s.charCodeAt(13) &&
                  0 < s.indexOf("transform", 10))
              )
                return (
                  s
                    .substring(0, s.indexOf(";", 27) + 1)
                    .replace(h, "$1-webkit-$2") + s
                );
          }
          return s;
        }
        function n(e, t) {
          var r = e.indexOf(1 === t ? ":" : "{"),
            a = e.substring(0, 3 !== t ? r : 10);
          return (
            (r = e.substring(r + 1, e.length - 1)),
            _(2 !== t ? a : a.replace(C, "$1"), r, t)
          );
        }
        function i(e, t) {
          var r = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return r !== t + ";"
            ? r.replace(y, " or ($1)").substring(4)
            : "(" + t + ")";
        }
        function s(e, t, r, a, n, i, s, c, l, u) {
          for (var d, m = 0, h = t; m < $; ++m)
            switch ((d = z[m].call(o, e, h, r, a, n, i, s, c, l, u))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                h = d;
            }
          if (h !== t) return h;
        }
        function c(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((_ = null),
              e
                ? "function" != typeof e
                  ? (N = 1)
                  : ((N = 2), (_ = e))
                : (N = 0)),
            c
          );
        }
        function o(e, r) {
          var c = e;
          if ((33 > c.charCodeAt(0) && (c = c.trim()), (c = [c]), 0 < $)) {
            var o = s(-1, r, c, c, I, S, 0, 0, 0, 0);
            void 0 !== o && "string" == typeof o && (r = o);
          }
          var d = (function e(r, c, o, d, m) {
            for (
              var h,
                f,
                p,
                k,
                y,
                A = 0,
                C = 0,
                x = 0,
                E = 0,
                z = 0,
                _ = 0,
                R = (p = h = 0),
                F = 0,
                D = 0,
                q = 0,
                G = 0,
                P = o.length,
                W = P - 1,
                B = "",
                L = "",
                T = "",
                U = "";
              F < P;

            ) {
              if (
                ((f = o.charCodeAt(F)),
                F === W &&
                  0 !== C + E + x + A &&
                  (0 !== C && (f = 47 === C ? 10 : 47),
                  (E = x = A = 0),
                  P++,
                  W++),
                0 === C + E + x + A)
              ) {
                if (
                  F === W &&
                  (0 < D && (B = B.replace(u, "")), 0 < B.trim().length)
                ) {
                  switch (f) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      B += o.charAt(F);
                  }
                  f = 59;
                }
                switch (f) {
                  case 123:
                    for (
                      h = (B = B.trim()).charCodeAt(0), p = 1, G = ++F;
                      F < P;

                    ) {
                      switch ((f = o.charCodeAt(F))) {
                        case 123:
                          p++;
                          break;
                        case 125:
                          p--;
                          break;
                        case 47:
                          switch ((f = o.charCodeAt(F + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (R = F + 1; R < W; ++R)
                                  switch (o.charCodeAt(R)) {
                                    case 47:
                                      if (
                                        42 === f &&
                                        42 === o.charCodeAt(R - 1) &&
                                        F + 2 !== R
                                      ) {
                                        F = R + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === f) {
                                        F = R + 1;
                                        break e;
                                      }
                                  }
                                F = R;
                              }
                          }
                          break;
                        case 91:
                          f++;
                        case 40:
                          f++;
                        case 34:
                        case 39:
                          for (; F++ < W && o.charCodeAt(F) !== f; );
                      }
                      if (0 === p) break;
                      F++;
                    }
                    switch (
                      ((p = o.substring(G, F)),
                      0 === h &&
                        (h = (B = B.replace(l, "").trim()).charCodeAt(0)),
                      h)
                    ) {
                      case 64:
                        switch (
                          (0 < D && (B = B.replace(u, "")),
                          (f = B.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            D = c;
                            break;
                          default:
                            D = j;
                        }
                        if (
                          ((G = (p = e(c, D, p, f, m + 1)).length),
                          0 < $ &&
                            ((y = s(
                              3,
                              p,
                              (D = t(j, B, q)),
                              c,
                              I,
                              S,
                              G,
                              f,
                              m,
                              d
                            )),
                            (B = D.join("")),
                            void 0 !== y &&
                              0 === (G = (p = y.trim()).length) &&
                              ((f = 0), (p = ""))),
                          0 < G)
                        )
                          switch (f) {
                            case 115:
                              B = B.replace(w, i);
                            case 100:
                            case 109:
                            case 45:
                              p = B + "{" + p + "}";
                              break;
                            case 107:
                              (p = (B = B.replace(b, "$1 $2")) + "{" + p + "}"),
                                (p =
                                  1 === N || (2 === N && n("@" + p, 3))
                                    ? "@-webkit-" + p + "@" + p
                                    : "@" + p);
                              break;
                            default:
                              (p = B + p), 112 === d && ((L += p), (p = ""));
                          }
                        else p = "";
                        break;
                      default:
                        p = e(c, t(c, B, q), p, d, m + 1);
                    }
                    (T += p),
                      (p = q = D = R = h = 0),
                      (B = ""),
                      (f = o.charCodeAt(++F));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (G = (B = (0 < D ? B.replace(u, "") : B).trim()).length)
                    )
                      switch (
                        (0 === R &&
                          ((h = B.charCodeAt(0)),
                          45 === h || (96 < h && 123 > h)) &&
                          (G = (B = B.replace(" ", ":")).length),
                        0 < $ &&
                          void 0 !==
                            (y = s(1, B, c, r, I, S, L.length, d, m, d)) &&
                          0 === (G = (B = y.trim()).length) &&
                          (B = "\0\0"),
                        (h = B.charCodeAt(0)),
                        (f = B.charCodeAt(1)),
                        h)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === f || 99 === f) {
                            U += B + o.charAt(F);
                            break;
                          }
                        default:
                          58 !== B.charCodeAt(G - 1) &&
                            (L += a(B, h, f, B.charCodeAt(2)));
                      }
                    (q = D = R = h = 0), (B = ""), (f = o.charCodeAt(++F));
                }
              }
              switch (f) {
                case 13:
                case 10:
                  47 === C
                    ? (C = 0)
                    : 0 === 1 + h &&
                      107 !== d &&
                      0 < B.length &&
                      ((D = 1), (B += "\0")),
                    0 < $ * M && s(0, B, c, r, I, S, L.length, d, m, d),
                    (S = 1),
                    I++;
                  break;
                case 59:
                case 125:
                  if (0 === C + E + x + A) {
                    S++;
                    break;
                  }
                default:
                  switch ((S++, (k = o.charAt(F)), f)) {
                    case 9:
                    case 32:
                      if (0 === E + A + C)
                        switch (z) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            k = "";
                            break;
                          default:
                            32 !== f && (k = " ");
                        }
                      break;
                    case 0:
                      k = "\\0";
                      break;
                    case 12:
                      k = "\\f";
                      break;
                    case 11:
                      k = "\\v";
                      break;
                    case 38:
                      0 === E + C + A && ((D = q = 1), (k = "\f" + k));
                      break;
                    case 108:
                      if (0 === E + C + A + O && 0 < R)
                        switch (F - R) {
                          case 2:
                            112 === z && 58 === o.charCodeAt(F - 3) && (O = z);
                          case 8:
                            111 === _ && (O = _);
                        }
                      break;
                    case 58:
                      0 === E + C + A && (R = F);
                      break;
                    case 44:
                      0 === C + x + E + A && ((D = 1), (k += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === C && (E = E === f ? 0 : 0 === E ? f : E);
                      break;
                    case 91:
                      0 === E + C + x && A++;
                      break;
                    case 93:
                      0 === E + C + x && A--;
                      break;
                    case 41:
                      0 === E + C + A && x--;
                      break;
                    case 40:
                      if (0 === E + C + A) {
                        if (0 === h)
                          switch (2 * z + 3 * _) {
                            case 533:
                              break;
                            default:
                              h = 1;
                          }
                        x++;
                      }
                      break;
                    case 64:
                      0 === C + x + E + A + R + p && (p = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < E + A + x))
                        switch (C) {
                          case 0:
                            switch (2 * f + 3 * o.charCodeAt(F + 1)) {
                              case 235:
                                C = 47;
                                break;
                              case 220:
                                (G = F), (C = 42);
                            }
                            break;
                          case 42:
                            47 === f &&
                              42 === z &&
                              G + 2 !== F &&
                              (33 === o.charCodeAt(G + 2) &&
                                (L += o.substring(G, F + 1)),
                              (k = ""),
                              (C = 0));
                        }
                  }
                  0 === C && (B += k);
              }
              (_ = z), (z = f), F++;
            }
            if (0 < (G = L.length)) {
              if (
                ((D = c),
                0 < $ &&
                  void 0 !== (y = s(2, L, D, r, I, S, G, d, m, d)) &&
                    0 === (L = y).length)
              )
                return U + L + T;
              if (((L = D.join(",") + "{" + L + "}"), 0 != N * O)) {
                switch ((2 !== N || n(L, 2) || (O = 0), O)) {
                  case 111:
                    L = L.replace(v, ":-moz-$1") + L;
                    break;
                  case 112:
                    L =
                      L.replace(g, "::-webkit-input-$1") +
                      L.replace(g, "::-moz-$1") +
                      L.replace(g, ":-ms-input-$1") +
                      L;
                }
                O = 0;
              }
            }
            return U + L + T;
          })(j, c, r, 0, 0);
          return (
            0 < $ &&
              void 0 !== (o = s(-2, d, c, c, I, S, d.length, 0, 0, 0)) &&
                (d = o),
            "",
            (O = 0),
            (S = I = 1),
            d
          );
        }
        var l = /^\0+/g,
          u = /[\0\r\f]/g,
          d = /: */g,
          m = /zoo|gra/,
          h = /([,: ])(transform)/g,
          f = /,\r+?/g,
          p = /([\t\r\n ])*\f?&/g,
          b = /@(k\w+)\s*(\S*)\s*/,
          g = /::(place)/g,
          v = /:(read-only)/g,
          k = /[svh]\w+-[tblr]{2}/,
          w = /\(\s*(.*)\s*\)/g,
          y = /([\s\S]*?);/g,
          A = /-self|flex-/g,
          C = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          x = /stretch|:\s*\w+\-(?:conte|avail)/,
          E = /([^-])(image-set\()/,
          S = 1,
          I = 1,
          O = 0,
          N = 1,
          j = [],
          z = [],
          $ = 0,
          _ = null,
          M = 0;
        return (
          (o.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                $ = z.length = 0;
                break;
              default:
                if ("function" == typeof t) z[$++] = t;
                else if ("object" == typeof t)
                  for (var r = 0, a = t.length; r < a; ++r) e(t[r]);
                else M = 0 | !!t;
            }
            return e;
          }),
          (o.set = c),
          void 0 !== e && c(e),
          o
        );
      };
      function m(e) {
        e && h.current.insert(e + "}");
      }
      var h = { current: null },
        f = function(e, t, r, a, n, i, s, c, o, l) {
          switch (e) {
            case 1:
              switch (t.charCodeAt(0)) {
                case 64:
                  return h.current.insert(t + ";"), "";
                case 108:
                  if (98 === t.charCodeAt(2)) return "";
              }
              break;
            case 2:
              if (0 === c) return t + "/*|*/";
              break;
            case 3:
              switch (c) {
                case 102:
                case 112:
                  return h.current.insert(r[0] + t), "";
                default:
                  return t + (0 === l ? "/*|*/" : "");
              }
            case -2:
              t.split("/*|*/}").forEach(m);
          }
        },
        p = function(e) {
          void 0 === e && (e = {});
          var t,
            r = e.key || "css";
          void 0 !== e.prefix && (t = { prefix: e.prefix });
          var a = new d(t);
          var n,
            i = {};
          n = e.container || document.head;
          var s,
            c = document.querySelectorAll("style[data-emotion-" + r + "]");
          Array.prototype.forEach.call(c, function(e) {
            e
              .getAttribute("data-emotion-" + r)
              .split(" ")
              .forEach(function(e) {
                i[e] = !0;
              }),
              e.parentNode !== n && n.appendChild(e);
          }),
            a.use(e.stylisPlugins)(f),
            (s = function(e, t, r, n) {
              var i = t.name;
              (h.current = r), a(e, t.styles), n && (o.inserted[i] = !0);
            });
          var o = {
            key: r,
            sheet: new u({
              key: r,
              container: n,
              nonce: e.nonce,
              speedy: e.speedy
            }),
            nonce: e.nonce,
            inserted: i,
            registered: {},
            insert: s
          };
          return o;
        };
      r("VbXa");
      function b(e, t, r) {
        var a = "";
        return (
          r.split(" ").forEach(function(r) {
            void 0 !== e[r] ? t.push(e[r]) : (a += r + " ");
          }),
          a
        );
      }
      var g = function(e, t, r) {
        var a = e.key + "-" + t.name;
        if (
          (!1 === r &&
            void 0 === e.registered[a] &&
            (e.registered[a] = t.styles),
          void 0 === e.inserted[t.name])
        ) {
          var n = t;
          do {
            e.insert("." + a, n, e.sheet, !0);
            n = n.next;
          } while (void 0 !== n);
        }
      };
      var v = function(e) {
          for (var t, r = 0, a = 0, n = e.length; n >= 4; ++a, n -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(a)) |
                    ((255 & e.charCodeAt(++a)) << 8) |
                    ((255 & e.charCodeAt(++a)) << 16) |
                    ((255 & e.charCodeAt(++a)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
          switch (n) {
            case 3:
              r ^= (255 & e.charCodeAt(a + 2)) << 16;
            case 2:
              r ^= (255 & e.charCodeAt(a + 1)) << 8;
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(a))) +
                ((59797 * (r >>> 16)) << 16);
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36);
        },
        k = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
        };
      var w = /[A-Z]|^ms/g,
        y = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        A = function(e) {
          return 45 === e.charCodeAt(1);
        },
        C = function(e) {
          return null != e && "boolean" != typeof e;
        },
        x = (function(e) {
          var t = {};
          return function(r) {
            return void 0 === t[r] && (t[r] = e(r)), t[r];
          };
        })(function(e) {
          return A(e) ? e : e.replace(w, "-$&").toLowerCase();
        }),
        E = function(e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(y, function(e, t, r) {
                  return (I = { name: t, styles: r, next: I }), t;
                });
          }
          return 1 === k[e] || A(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function S(e, t, r, a) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim)
              return (I = { name: r.name, styles: r.styles, next: I }), r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (I = { name: n.name, styles: n.styles, next: I }),
                    (n = n.next);
              return r.styles + ";";
            }
            return (function(e, t, r) {
              var a = "";
              if (Array.isArray(r))
                for (var n = 0; n < r.length; n++) a += S(e, t, r[n], !1);
              else
                for (var i in r) {
                  var s = r[i];
                  if ("object" != typeof s)
                    null != t && void 0 !== t[s]
                      ? (a += i + "{" + t[s] + "}")
                      : C(s) && (a += x(i) + ":" + E(i, s) + ";");
                  else if (
                    !Array.isArray(s) ||
                    "string" != typeof s[0] ||
                    (null != t && void 0 !== t[s[0]])
                  ) {
                    var c = S(e, t, s, !1);
                    switch (i) {
                      case "animation":
                      case "animationName":
                        a += x(i) + ":" + c + ";";
                        break;
                      default:
                        a += i + "{" + c + "}";
                    }
                  } else
                    for (var o = 0; o < s.length; o++)
                      C(s[o]) && (a += x(i) + ":" + E(i, s[o]) + ";");
                }
              return a;
            })(e, t, r);
          case "function":
            if (void 0 !== e) {
              var i = I,
                s = r(e);
              return (I = i), S(e, t, s, a);
            }
            break;
          case "string":
        }
        if (null == t) return r;
        var c = t[r];
        return void 0 === c || a ? r : c;
      }
      var I,
        O = /label:\s*([^\s;\n{]+)\s*;/g;
      var N = function(e, t, r) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var a = !0,
            n = "";
          I = void 0;
          var i = e[0];
          null == i || void 0 === i.raw
            ? ((a = !1), (n += S(r, t, i, !1)))
            : (n += i[0]);
          for (var s = 1; s < e.length; s++)
            (n += S(r, t, e[s], 46 === n.charCodeAt(n.length - 1))),
              a && (n += i[s]);
          O.lastIndex = 0;
          for (var c, o = ""; null !== (c = O.exec(n)); ) o += "-" + c[1];
          return { name: v(n) + o, styles: n, next: I };
        },
        j =
          (Object.prototype.hasOwnProperty,
          Object(a.createContext)(
            "undefined" != typeof HTMLElement ? p() : null
          )),
        z = Object(a.createContext)({}),
        $ =
          (j.Provider,
          function(e) {
            var t = function(t, r) {
              return Object(a.createElement)(j.Consumer, null, function(a) {
                return e(t, a, r);
              });
            };
            return Object(a.forwardRef)(t);
          });
      var _ = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return N(t);
        },
        M =
          (a.Component,
          function e(t) {
            for (var r = t.length, a = 0, n = ""; a < r; a++) {
              var i = t[a];
              if (null != i) {
                var s = void 0;
                switch (typeof i) {
                  case "boolean":
                    break;
                  case "object":
                    if (Array.isArray(i)) s = e(i);
                    else
                      for (var c in ((s = ""), i))
                        i[c] && c && (s && (s += " "), (s += c));
                    break;
                  default:
                    s = i;
                }
                s && (n && (n += " "), (n += s));
              }
            }
            return n;
          });
      function R(e, t, r) {
        var a = [],
          n = b(e, a, r);
        return a.length < 2 ? r : n + t(a);
      }
      var F = function() {
          return null;
        },
        D =
          ($(function(e, t) {
            return Object(a.createElement)(z.Consumer, null, function(r) {
              var n = function() {
                  for (
                    var e = arguments.length, r = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    r[a] = arguments[a];
                  var n = N(r, t.registered);
                  return g(t, n, !1), t.key + "-" + n.name;
                },
                i = {
                  css: n,
                  cx: function() {
                    for (
                      var e = arguments.length, r = new Array(e), a = 0;
                      a < e;
                      a++
                    )
                      r[a] = arguments[a];
                    return R(t.registered, n, M(r));
                  },
                  theme: r
                },
                s = e.children(i);
              var c = Object(a.createElement)(F, null);
              return Object(a.createElement)(a.Fragment, null, c, s);
            });
          }),
          e => {
            let { items: t, color: r } = e;
            return n.a.createElement(
              "span",
              {
                style: {
                  "& span": {
                    animation: q + " 5s easeIn infinite 5s",
                    opacity: 0
                  }
                }
              },
              t.map(e =>
                n.a.createElement("span", { key: e, css: { color: r } }, e)
              )
            );
          });
      const q = (function() {
        var e = _.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          }
        };
      })({
        "0%": { opacity: 0 },
        "6%": { opacity: 0 },
        "21%": { opacity: 1 },
        "69%": { opacity: 1 },
        "84%": { opacity: 0 },
        "90%": { opacity: 0 },
        "100%": { opacity: 0 }
      });
      var G = (function(e) {
        function t() {
          for (var t, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            ((t = e.call.apply(e, [this].concat(a)) || this).state = {
              shouldAnimate: !0,
              item: 0,
              size: {}
            }),
            (t.sliderContainer = n.a.createRef()),
            (t.intervalId = null),
            (t.decrementItem = () => {
              t._clearInterval(),
                t.setState({
                  item:
                    (t.state.item + t.props.items.length - 1) %
                    t.props.items.length
                });
            }),
            (t.incrementItemAndClearInterval = () => {
              t._clearInterval(), t.incrementItem();
            }),
            (t.incrementItem = () => {
              t.setState(e => ({ item: (e.item + 1) % t.props.items.length }));
            }),
            t
          );
        }
        Object(l.a)(t, e);
        var r = t.prototype;
        return (
          (r._clearInterval = function() {
            this.intervalId &&
              (clearInterval(this.intervalId), (this.intervalId = null));
          }),
          (r.componentDidMount = function() {
            const e = this.shouldAnimate();
            e &&
              requestAnimationFrame(() => {
                (this.intervalId = setInterval(this.incrementItem, 5e3)),
                  this.setState({
                    shouldAnimate: e,
                    size: this.getDimensions()
                  });
              });
          }),
          (r.componentWillUnmount = function() {
            clearInterval(this.intervalId);
          }),
          (r.componentDidUpdate = function(e, t) {
            t.shouldAnimate &&
              t.item !== this.state.item &&
              requestAnimationFrame(() => {
                this.setState({ size: this.getDimensions() });
              });
          }),
          (r.getDimensions = function() {
            return null === this.sliderContainer.current
              ? { width: "auto", height: "auto" }
              : this.sliderContainer.current.getBoundingClientRect();
          }),
          (r.shouldAnimate = function() {
            const e = window.matchMedia("(prefers-reduced-motion)");
            return !e || !e.matches;
          }),
          (r.render = function() {
            const { shouldAnimate: e } = this.state,
              { text: t, workName: r } = this.props.items[this.state.item],
              a = e && this.intervalId;
            return n.a.createElement(
              "div",
              {
                style: {
                  padding: "0rem 0 5rem",
                  margin: "0rem 0 4rem",
                  position: "center"
                }
              },
              n.a.createElement(
                "div",
                {
                  "aria-live": this.intervalId ? "off" : "polite",
                  "aria-atomic": "true",
                  "aria-relevant": "all"
                },
                n.a.createElement(
                  "p",
                  {
                    style: {
                      fontSize: "2.25rem",
                      fontFamily:
                        '"Futura PT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      textAlign: "center",
                      marginBottom: 0
                    }
                  },
                  n.a.createElement(
                    "span",
                    {
                      style: {
                        display: "inline-block",
                        transition: e ? "width 150ms easeIn" : "none",
                        width: this.state.size.width || "auto"
                      }
                    },
                    n.a.createElement(
                      "span",
                      {
                        style: {
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                          display: "inline-block"
                        },
                        id: "headline-slider",
                        ref: this.sliderContainer
                      },
                      a
                        ? n.a.createElement(D, { items: [t] })
                        : n.a.createElement(n.a.Fragment, null, t)
                    )
                  )
                )
              )
            );
          }),
          t
        );
      })(a.Component);
      function P(e) {
        let t,
          r = e.length;
        for (; r > 0; )
          (t = Math.floor(Math.random() * r)),
            r--,
            ([e[r], e[t]] = [e[t], e[r]]);
        return e;
      }
      const W = "2410291111";
      var B = function(e) {
        let { roles: t } = e;
        return n.a.createElement(i.StaticQuery, {
          query: W,
          render: e => n.a.createElement(G, { items: P(t) })
        });
      };
      const L = "4268877247";
      var T = function() {
          let e =
            "\n  entrepreneur. dry cleaner. climber. dog trainer. campaign staff member. implementation consultant. system architect. flutter developer. \n  solutions consultant. front end developer. caterer. iOS developer. IT consultant. head volunteer.\n  fried chicken restaurant server. G51 venture scholar. md circuit court intern.  bbq restaurant server. \n  published medical journal author. smoothie maker. backend engineer. neuroscience lab volunteer.  connect 4 pro. food service manager.  \n  alumni call center representative. pizza tosser/almost-dropper. volunteer hospital ambassador. \n  how i met your mother enthusiast. ex-bostonian. automator. cto.";
          return n.a.createElement(i.StaticQuery, {
            query: L,
            render: t =>
              n.a.createElement(
                "div",
                {
                  className: "post-content-body",
                  style: { padding: "15vw 0" }
                },
                n.a.createElement(
                  "div",
                  { className: "row" },
                  n.a.createElement(
                    "div",
                    { className: "col-12", style: { textAlign: "center" } },
                    n.a.createElement(
                      "div",
                      {
                        style: {
                          textAlign: "center",
                          margin: "2 2 2 2",
                          padding: "1rem 2rem 0rem 2rem"
                        }
                      },
                      n.a.createElement(
                        "div",
                        { className: "post-content-body" },
                        "Eric the",
                        n.a.createElement(
                          "div",
                          {
                            style: {
                              padding: "1rem 0",
                              textAlign: "center",
                              margin: "0vw 10vw"
                            }
                          },
                          n.a.createElement(B, {
                            roles: e
                              .split(".")
                              .map(e => ({ text: e.trim(), workName: "" }))
                          }),
                          n.a.createElement("p", null, e),
                          n.a.createElement("p", null, "let's add some more")
                        )
                      )
                    )
                  )
                )
              )
          });
        },
        U = r("9eSz"),
        H = r.n(U);
      r("DL4o"), r("jk3P");
      const J = (e, t) => {
        let { data: r } = e;
        const a = r.site.siteMetadata.title,
          i = r.allMarkdownRemark.edges;
        let l = 0;
        return n.a.createElement(
          s.a,
          { location: t, title: a },
          n.a.createElement(c.a, {
            title: "Home",
            keywords: ["blog", "gatsby", "javascript", "react"]
          }),
          n.a.createElement(
            "figure",
            { className: "kg-header kg-header-image" },
            n.a.createElement(H.a, {
              fluid: r.smallPic.childImageSharp.fluid,
              className: "kg-header-image"
            })
          ),
          r.site.siteMetadata.description &&
            n.a.createElement(
              "header",
              { className: "page-head" },
              n.a.createElement(
                "h2",
                { className: "page-head-title" },
                r.site.siteMetadata.description
              ),
              n.a.createElement(
                "p",
                { className: "page-head-description" },
                "ex-CTO @ ",
                n.a.createElement(
                  "a",
                  { href: "https://www.orbitinteractive.com/" },
                  "orbit interactive"
                )
              ),
              n.a.createElement(H.a, {
                fluid: r.logo.childImageSharp.fluid,
                className: "kg-logo-image"
              })
            ),
          n.a.createElement(T, null),
          n.a.createElement(
            "div",
            { className: "post-feed" },
            i.map(e => {
              let { node: t } = e;
              return (
                l++,
                n.a.createElement(o, {
                  key: t.fields.slug,
                  count: l,
                  node: t,
                  postClass: "post"
                })
              );
            })
          )
        );
      };
      t.default = e =>
        n.a.createElement(i.StaticQuery, {
          query: "1562644269",
          render: t =>
            n.a.createElement(
              J,
              Object.assign({ location: e.location, props: !0, data: t }, e)
            )
        });
    },
    jk3P: function(e, t, r) {}
  }
]);
//# sourceMappingURL=component---src-pages-index-js-93777e0f3e0878309008.js.map

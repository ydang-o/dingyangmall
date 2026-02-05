import {
  __commonJS,
  __esm,
  __export
} from "./chunk-V4OQ3NZ2.js";

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m2 = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v2 = { s: m2, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c2), s3 = n2 - i2 < 0, u3 = e2.clone().add(r2 + (s3 ? -1 : 1), c2);
        return +(-(r2 + (n2 - i2) / (s3 ? i2 - u3 : u3 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c2, y: h2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i, ms: r, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D2 = {};
      D2[g] = M2;
      var p2 = "$isDayjsObject", S2 = function(t2) {
        return t2 instanceof _2 || !(!t2 || !t2[p2]);
      }, w2 = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s3 = e2.toLowerCase();
          D2[s3] && (i2 = s3), n2 && (D2[s3] = n2, i2 = s3);
          var u3 = e2.split("-");
          if (!i2 && u3.length > 1) return t2(u3[0]);
        } else {
          var a3 = e2.name;
          D2[a3] = e2, i2 = a3;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O2 = function(t2, e2) {
        if (S2(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _2(n2);
      }, b2 = v2;
      b2.l = w2, b2.i = S2, b2.w = function(t2, e2) {
        return O2(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _2 = function() {
        function M3(t2) {
          this.$L = w2(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p2] = true;
        }
        var m3 = M3.prototype;
        return m3.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s3 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m3.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l2);
        }, m3.isSame = function(t2, e2) {
          var n2 = O2(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m3.isAfter = function(t2, e2) {
          return O2(t2) < this.startOf(e2);
        }, m3.isBefore = function(t2, e2) {
          return this.endOf(e2) < O2(t2);
        }, m3.$g = function(t2, e2, n2) {
          return b2.u(t2) ? this[e2] : this.set(n2, t2);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b2.u(e2) || e2, f3 = b2.p(t2), l3 = function(t3, e3) {
            var i2 = b2.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a2);
          }, $2 = function(t3, e3) {
            return b2.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h2:
              return r2 ? l3(1, 0) : l3(31, 11);
            case c2:
              return r2 ? l3(1, M4) : l3(0, M4 + 1);
            case o2:
              var g2 = this.$locale().weekStart || 0, D3 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l3(r2 ? m4 - D3 : m4 + (6 - D3), M4);
            case a2:
            case d2:
              return $2(v3 + "Hours", 0);
            case u2:
              return $2(v3 + "Minutes", 1);
            case s2:
              return $2(v3 + "Seconds", 2);
            case i:
              return $2(v3 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m3.$set = function(t2, e2) {
          var n2, o3 = b2.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n2 = {}, n2[a2] = f3 + "Date", n2[d2] = f3 + "Date", n2[c2] = f3 + "Month", n2[h2] = f3 + "FullYear", n2[u2] = f3 + "Hours", n2[s2] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r] = f3 + "Milliseconds", n2)[o3], $2 = o3 === a2 ? this.$D + (e2 - this.$W) : e2;
          if (o3 === c2 || o3 === h2) {
            var y2 = this.clone().set(d2, 1);
            y2.$d[l3]($2), y2.init(), this.$d = y2.set(d2, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l3 && this.$d[l3]($2);
          return this.init(), this;
        }, m3.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m3.get = function(t2) {
          return this[b2.p(t2)]();
        }, m3.add = function(r2, f3) {
          var d3, l3 = this;
          r2 = Number(r2);
          var $2 = b2.p(f3), y2 = function(t2) {
            var e2 = O2(l3);
            return b2.w(e2.date(e2.date() + Math.round(t2 * r2)), l3);
          };
          if ($2 === c2) return this.set(c2, this.$M + r2);
          if ($2 === h2) return this.set(h2, this.$y + r2);
          if ($2 === a2) return y2(1);
          if ($2 === o2) return y2(7);
          var M4 = (d3 = {}, d3[s2] = e, d3[u2] = n, d3[i] = t, d3)[$2] || 1, m4 = this.$d.getTime() + r2 * M4;
          return b2.w(m4, this);
        }, m3.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m3.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l2;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n2.weekdays, c3 = n2.months, f3 = n2.meridiem, h3 = function(t3, n3, i3, s4) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s4);
          }, d3 = function(t3) {
            return b2.s(s3 % 12 || 12, t3, "0");
          }, $2 = f3 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b2.s(e2.$y, 4, "0");
                case "M":
                  return a3 + 1;
                case "MM":
                  return b2.s(a3 + 1, 2, "0");
                case "MMM":
                  return h3(n2.monthsShort, a3, c3, 3);
                case "MMMM":
                  return h3(c3, a3);
                case "D":
                  return e2.$D;
                case "DD":
                  return b2.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n2.weekdaysMin, e2.$W, o3, 2);
                case "ddd":
                  return h3(n2.weekdaysShort, e2.$W, o3, 3);
                case "dddd":
                  return o3[e2.$W];
                case "H":
                  return String(s3);
                case "HH":
                  return b2.s(s3, 2, "0");
                case "h":
                  return d3(1);
                case "hh":
                  return d3(2);
                case "a":
                  return $2(s3, u3, true);
                case "A":
                  return $2(s3, u3, false);
                case "m":
                  return String(u3);
                case "mm":
                  return b2.s(u3, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b2.s(e2.$s, 2, "0");
                case "SSS":
                  return b2.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r2, d3, l3) {
          var $2, y2 = this, M4 = b2.p(d3), m4 = O2(r2), v3 = (m4.utcOffset() - this.utcOffset()) * e, g2 = this - m4, D3 = function() {
            return b2.m(y2, m4);
          };
          switch (M4) {
            case h2:
              $2 = D3() / 12;
              break;
            case c2:
              $2 = D3();
              break;
            case f2:
              $2 = D3() / 3;
              break;
            case o2:
              $2 = (g2 - v3) / 6048e5;
              break;
            case a2:
              $2 = (g2 - v3) / 864e5;
              break;
            case u2:
              $2 = g2 / n;
              break;
            case s2:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l3 ? $2 : b2.a($2);
        }, m3.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m3.$locale = function() {
          return D2[this.$L];
        }, m3.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w2(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M3;
      }(), k = _2.prototype;
      return O2.prototype = k, [["$ms", r], ["$s", i], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O2.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _2, O2), t2.$i = true), O2;
      }, O2.locale = w2, O2.isDayjs = S2, O2.unix = function(t2) {
        return O2(1e3 * t2);
      }, O2.en = D2[g], O2.Ls = D2, O2.p = {}, O2;
    });
  }
});

// node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler_exports = {};
__export(shared_esm_bundler_exports, {
  EMPTY_ARR: () => EMPTY_ARR,
  EMPTY_OBJ: () => EMPTY_OBJ,
  NO: () => NO,
  NOOP: () => NOOP,
  PatchFlagNames: () => PatchFlagNames,
  PatchFlags: () => PatchFlags,
  ShapeFlags: () => ShapeFlags,
  SlotFlags: () => SlotFlags,
  camelize: () => camelize,
  capitalize: () => capitalize,
  cssVarNameEscapeSymbolsRE: () => cssVarNameEscapeSymbolsRE,
  def: () => def,
  escapeHtml: () => escapeHtml,
  escapeHtmlComment: () => escapeHtmlComment,
  extend: () => extend,
  genCacheKey: () => genCacheKey,
  genPropsAccessExp: () => genPropsAccessExp,
  generateCodeFrame: () => generateCodeFrame,
  getEscapedCssVarName: () => getEscapedCssVarName,
  getGlobalThis: () => getGlobalThis,
  hasChanged: () => hasChanged,
  hasOwn: () => hasOwn,
  hyphenate: () => hyphenate,
  includeBooleanAttr: () => includeBooleanAttr,
  invokeArrayFns: () => invokeArrayFns,
  isArray: () => isArray,
  isBooleanAttr: () => isBooleanAttr,
  isBuiltInDirective: () => isBuiltInDirective,
  isDate: () => isDate,
  isFunction: () => isFunction,
  isGloballyAllowed: () => isGloballyAllowed,
  isGloballyWhitelisted: () => isGloballyWhitelisted,
  isHTMLTag: () => isHTMLTag,
  isIntegerKey: () => isIntegerKey,
  isKnownHtmlAttr: () => isKnownHtmlAttr,
  isKnownMathMLAttr: () => isKnownMathMLAttr,
  isKnownSvgAttr: () => isKnownSvgAttr,
  isMap: () => isMap,
  isMathMLTag: () => isMathMLTag,
  isModelListener: () => isModelListener,
  isObject: () => isObject,
  isOn: () => isOn,
  isPlainObject: () => isPlainObject,
  isPromise: () => isPromise,
  isRegExp: () => isRegExp,
  isRenderableAttrValue: () => isRenderableAttrValue,
  isReservedProp: () => isReservedProp,
  isSSRSafeAttrName: () => isSSRSafeAttrName,
  isSVGTag: () => isSVGTag,
  isSet: () => isSet,
  isSpecialBooleanAttr: () => isSpecialBooleanAttr,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isVoidTag: () => isVoidTag,
  looseEqual: () => looseEqual,
  looseIndexOf: () => looseIndexOf,
  looseToNumber: () => looseToNumber,
  makeMap: () => makeMap,
  normalizeClass: () => normalizeClass,
  normalizeCssVarValue: () => normalizeCssVarValue,
  normalizeProps: () => normalizeProps,
  normalizeStyle: () => normalizeStyle,
  objectToString: () => objectToString,
  parseStringStyle: () => parseStringStyle,
  propsToAttrMap: () => propsToAttrMap,
  remove: () => remove,
  slotFlagsText: () => slotFlagsText,
  stringifyStyle: () => stringifyStyle,
  toDisplayString: () => toDisplayString,
  toHandlerKey: () => toHandlerKey,
  toNumber: () => toNumber,
  toRawType: () => toRawType,
  toTypeString: () => toTypeString
});
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
  return source + JSON.stringify(
    options,
    (_2, val) => typeof val === "function" ? val.toString() : val
  );
}
function generateCodeFrame(source, start = 0, end = source.length) {
  start = Math.max(0, Math.min(start, source.length));
  end = Math.max(0, Math.min(end, source.length));
  if (start > end) return "";
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_2, idx) => idx % 2 === 1);
  lines = lines.filter((_2, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(
          `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
        );
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(
            1,
            end > count ? lineLength - pad : end - start
          );
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  if (!styles) return "";
  if (isString(styles)) return styles;
  let ret = "";
  for (const key in styles) {
    const value = styles[key];
    if (isString(value) || typeof value === "number") {
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  }
  const type4 = typeof value;
  return type4 === "string" || type4 === "number" || type4 === "boolean";
}
function escapeHtml(string3) {
  const str = "" + string3;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function getEscapedCssVarName(key, doubleEscape) {
  return key.replace(
    cssVarNameEscapeSymbolsRE,
    (s2) => doubleEscape ? s2 === '"' ? '\\\\\\"' : `\\\\${s2}` : `\\${s2}`
  );
}
function looseCompareArrays(a2, b2) {
  if (a2.length !== b2.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a2.length; i++) {
    equal = looseEqual(a2[i], b2[i]);
  }
  return equal;
}
function looseEqual(a2, b2) {
  if (a2 === b2) return true;
  let aValidType = isDate(a2);
  let bValidType = isDate(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a2.getTime() === b2.getTime() : false;
  }
  aValidType = isSymbol(a2);
  bValidType = isSymbol(b2);
  if (aValidType || bValidType) {
    return a2 === b2;
  }
  aValidType = isArray(a2);
  bValidType = isArray(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a2, b2) : false;
  }
  aValidType = isObject(a2);
  bValidType = isObject(b2);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a2).length;
    const bKeysCount = Object.keys(b2).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a2) {
      const aHasKey = a2.hasOwnProperty(key);
      const bHasKey = b2.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b2[key])) {
        return false;
      }
    }
  }
  return String(a2) === String(b2);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
function normalizeCssVarValue(value) {
  if (value == null) {
    return "initial";
  }
  if (typeof value === "string") {
    return value === "" ? " " : value;
  }
  if (typeof value !== "number" || !Number.isFinite(value)) {
    if (true) {
      console.warn(
        "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
        value
      );
    }
  }
  return String(value);
}
var EMPTY_OBJ, EMPTY_ARR, NOOP, NO, isOn, isModelListener, extend, remove, hasOwnProperty, hasOwn, isArray, isMap, isSet, isDate, isRegExp, isFunction, isString, isSymbol, isObject, isPromise, objectToString, toTypeString, toRawType, isPlainObject, isIntegerKey, isReservedProp, isBuiltInDirective, cacheStringFunction, camelizeRE, camelize, hyphenateRE, hyphenate, capitalize, toHandlerKey, hasChanged, invokeArrayFns, def, looseToNumber, toNumber, _globalThis, getGlobalThis, identRE, PatchFlags, PatchFlagNames, ShapeFlags, SlotFlags, slotFlagsText, GLOBALS_ALLOWED, isGloballyAllowed, isGloballyWhitelisted, range, listDelimiterRE, propertyDelimiterRE, styleCommentRE, HTML_TAGS, SVG_TAGS, MATH_TAGS, VOID_TAGS, isHTMLTag, isSVGTag, isMathMLTag, isVoidTag, specialBooleanAttrs, isSpecialBooleanAttr, isBooleanAttr, unsafeAttrCharRE, attrValidationCache, propsToAttrMap, isKnownHtmlAttr, isKnownSvgAttr, isKnownMathMLAttr, escapeRE, commentStripRE, cssVarNameEscapeSymbolsRE, isRef, toDisplayString, replacer, stringifySymbol;
var init_shared_esm_bundler = __esm({
  "node_modules/@vue/shared/dist/shared.esm-bundler.js"() {
    EMPTY_OBJ = true ? Object.freeze({}) : {};
    EMPTY_ARR = true ? Object.freeze([]) : [];
    NOOP = () => {
    };
    NO = () => false;
    isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
    isModelListener = (key) => key.startsWith("onUpdate:");
    extend = Object.assign;
    remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    hasOwnProperty = Object.prototype.hasOwnProperty;
    hasOwn = (val, key) => hasOwnProperty.call(val, key);
    isArray = Array.isArray;
    isMap = (val) => toTypeString(val) === "[object Map]";
    isSet = (val) => toTypeString(val) === "[object Set]";
    isDate = (val) => toTypeString(val) === "[object Date]";
    isRegExp = (val) => toTypeString(val) === "[object RegExp]";
    isFunction = (val) => typeof val === "function";
    isString = (val) => typeof val === "string";
    isSymbol = (val) => typeof val === "symbol";
    isObject = (val) => val !== null && typeof val === "object";
    isPromise = (val) => {
      return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
    };
    objectToString = Object.prototype.toString;
    toTypeString = (value) => objectToString.call(value);
    toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    isPlainObject = (val) => toTypeString(val) === "[object Object]";
    isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    isReservedProp = makeMap(
      // the leading comma is intentional so empty string "" is also included
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    );
    isBuiltInDirective = makeMap(
      "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
    );
    cacheStringFunction = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    camelizeRE = /-\w/g;
    camelize = cacheStringFunction(
      (str) => {
        return str.replace(camelizeRE, (c2) => c2.slice(1).toUpperCase());
      }
    );
    hyphenateRE = /\B([A-Z])/g;
    hyphenate = cacheStringFunction(
      (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
    );
    capitalize = cacheStringFunction((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    toHandlerKey = cacheStringFunction(
      (str) => {
        const s2 = str ? `on${capitalize(str)}` : ``;
        return s2;
      }
    );
    hasChanged = (value, oldValue) => !Object.is(value, oldValue);
    invokeArrayFns = (fns, ...arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](...arg);
      }
    };
    def = (obj, key, value, writable = false) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
      });
    };
    looseToNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    toNumber = (val) => {
      const n = isString(val) ? Number(val) : NaN;
      return isNaN(n) ? val : n;
    };
    getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    PatchFlags = {
      "TEXT": 1,
      "1": "TEXT",
      "CLASS": 2,
      "2": "CLASS",
      "STYLE": 4,
      "4": "STYLE",
      "PROPS": 8,
      "8": "PROPS",
      "FULL_PROPS": 16,
      "16": "FULL_PROPS",
      "NEED_HYDRATION": 32,
      "32": "NEED_HYDRATION",
      "STABLE_FRAGMENT": 64,
      "64": "STABLE_FRAGMENT",
      "KEYED_FRAGMENT": 128,
      "128": "KEYED_FRAGMENT",
      "UNKEYED_FRAGMENT": 256,
      "256": "UNKEYED_FRAGMENT",
      "NEED_PATCH": 512,
      "512": "NEED_PATCH",
      "DYNAMIC_SLOTS": 1024,
      "1024": "DYNAMIC_SLOTS",
      "DEV_ROOT_FRAGMENT": 2048,
      "2048": "DEV_ROOT_FRAGMENT",
      "CACHED": -1,
      "-1": "CACHED",
      "BAIL": -2,
      "-2": "BAIL"
    };
    PatchFlagNames = {
      [1]: `TEXT`,
      [2]: `CLASS`,
      [4]: `STYLE`,
      [8]: `PROPS`,
      [16]: `FULL_PROPS`,
      [32]: `NEED_HYDRATION`,
      [64]: `STABLE_FRAGMENT`,
      [128]: `KEYED_FRAGMENT`,
      [256]: `UNKEYED_FRAGMENT`,
      [512]: `NEED_PATCH`,
      [1024]: `DYNAMIC_SLOTS`,
      [2048]: `DEV_ROOT_FRAGMENT`,
      [-1]: `CACHED`,
      [-2]: `BAIL`
    };
    ShapeFlags = {
      "ELEMENT": 1,
      "1": "ELEMENT",
      "FUNCTIONAL_COMPONENT": 2,
      "2": "FUNCTIONAL_COMPONENT",
      "STATEFUL_COMPONENT": 4,
      "4": "STATEFUL_COMPONENT",
      "TEXT_CHILDREN": 8,
      "8": "TEXT_CHILDREN",
      "ARRAY_CHILDREN": 16,
      "16": "ARRAY_CHILDREN",
      "SLOTS_CHILDREN": 32,
      "32": "SLOTS_CHILDREN",
      "TELEPORT": 64,
      "64": "TELEPORT",
      "SUSPENSE": 128,
      "128": "SUSPENSE",
      "COMPONENT_SHOULD_KEEP_ALIVE": 256,
      "256": "COMPONENT_SHOULD_KEEP_ALIVE",
      "COMPONENT_KEPT_ALIVE": 512,
      "512": "COMPONENT_KEPT_ALIVE",
      "COMPONENT": 6,
      "6": "COMPONENT"
    };
    SlotFlags = {
      "STABLE": 1,
      "1": "STABLE",
      "DYNAMIC": 2,
      "2": "DYNAMIC",
      "FORWARDED": 3,
      "3": "FORWARDED"
    };
    slotFlagsText = {
      [1]: "STABLE",
      [2]: "DYNAMIC",
      [3]: "FORWARDED"
    };
    GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
    isGloballyAllowed = makeMap(GLOBALS_ALLOWED);
    isGloballyWhitelisted = isGloballyAllowed;
    range = 2;
    listDelimiterRE = /;(?![^(]*\))/g;
    propertyDelimiterRE = /:([^]+)/;
    styleCommentRE = /\/\*[^]*?\*\//g;
    HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
    VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    isHTMLTag = makeMap(HTML_TAGS);
    isSVGTag = makeMap(SVG_TAGS);
    isMathMLTag = makeMap(MATH_TAGS);
    isVoidTag = makeMap(VOID_TAGS);
    specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    isSpecialBooleanAttr = makeMap(specialBooleanAttrs);
    isBooleanAttr = makeMap(
      specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
    );
    unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    attrValidationCache = {};
    propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    isKnownHtmlAttr = makeMap(
      `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
    );
    isKnownSvgAttr = makeMap(
      `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
    );
    isKnownMathMLAttr = makeMap(
      `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
    );
    escapeRE = /["'&<>]/;
    commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
    cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
    isRef = (val) => {
      return !!(val && val["__v_isRef"] === true);
    };
    toDisplayString = (val) => {
      return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
    };
    replacer = (_key, val) => {
      if (isRef(val)) {
        return replacer(_key, val.value);
      } else if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce(
            (entries, [key, val2], i) => {
              entries[stringifySymbol(key, i) + " =>"] = val2;
              return entries;
            },
            {}
          )
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
        };
      } else if (isSymbol(val)) {
        return stringifySymbol(val);
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    stringifySymbol = (v2, i = "") => {
      var _a;
      return (
        // Symbol.description in es2019+ so we need to cast here to pass
        // the lib: es2016 check
        isSymbol(v2) ? `Symbol(${(_a = v2.description) != null ? _a : i})` : v2
      );
    };
  }
});

// node_modules/normalize-wheel-es/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  default: () => Y
});
function a() {
  if (!v) {
    v = true;
    var e = navigator.userAgent, n = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), i = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (x = /\b(iPhone|iP[ao]d)/.exec(e), E = /\b(iP[ao]d)/.exec(e), w = /Android/i.exec(e), M = /FBAN\/\w+;/i.exec(e), F = /Mobile/i.exec(e), D = !!/Win64/.exec(e), n) {
      o = n[1] ? parseFloat(n[1]) : n[5] ? parseFloat(n[5]) : NaN, o && document && document.documentMode && (o = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(e);
      N = r ? parseFloat(r[1]) + 4 : o, f = n[2] ? parseFloat(n[2]) : NaN, s = n[3] ? parseFloat(n[3]) : NaN, u = n[4] ? parseFloat(n[4]) : NaN, u ? (n = /(?:Chrome\/(\d+\.\d+))/.exec(e), d = n && n[1] ? parseFloat(n[1]) : NaN) : d = NaN;
    } else o = f = s = d = u = NaN;
    if (i) {
      if (i[1]) {
        var t = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        l = t ? parseFloat(t[1].replace("_", ".")) : true;
      } else l = false;
      p = !!i[2], m = !!i[3];
    } else l = p = m = false;
  }
}
function S(e, n) {
  if (!h.canUseDOM || n && !("addEventListener" in document)) return false;
  var i = "on" + e, r = i in document;
  if (!r) {
    var t = document.createElement("div");
    t.setAttribute(i, "return;"), r = typeof t[i] == "function";
  }
  return !r && X && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
function T(e) {
  var n = 0, i = 0, r = 0, t = 0;
  return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (n = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (n = i, i = 0), r = n * O, t = i * O, "deltaY" in e && (t = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || t) && e.deltaMode && (e.deltaMode == 1 ? (r *= I, t *= I) : (r *= P, t *= P)), r && !n && (n = r < 1 ? -1 : 1), t && !i && (i = t < 1 ? -1 : 1), { spinX: n, spinY: i, pixelX: r, pixelY: t };
}
var v, o, f, s, u, d, N, l, p, m, w, D, x, E, M, F, _, A, c, U, h, X, b, O, I, P, Y;
var init_dist = __esm({
  "node_modules/normalize-wheel-es/dist/index.mjs"() {
    v = false;
    _ = { ie: function() {
      return a() || o;
    }, ieCompatibilityMode: function() {
      return a() || N > o;
    }, ie64: function() {
      return _.ie() && D;
    }, firefox: function() {
      return a() || f;
    }, opera: function() {
      return a() || s;
    }, webkit: function() {
      return a() || u;
    }, safari: function() {
      return _.webkit();
    }, chrome: function() {
      return a() || d;
    }, windows: function() {
      return a() || p;
    }, osx: function() {
      return a() || l;
    }, linux: function() {
      return a() || m;
    }, iphone: function() {
      return a() || x;
    }, mobile: function() {
      return a() || x || E || w || F;
    }, nativeApp: function() {
      return a() || M;
    }, android: function() {
      return a() || w;
    }, ipad: function() {
      return a() || E;
    } };
    A = _;
    c = !!(typeof window < "u" && window.document && window.document.createElement);
    U = { canUseDOM: c, canUseWorkers: typeof Worker < "u", canUseEventListeners: c && !!(window.addEventListener || window.attachEvent), canUseViewport: c && !!window.screen, isInWorker: !c };
    h = U;
    h.canUseDOM && (X = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
    b = S;
    O = 10;
    I = 40;
    P = 800;
    T.getEventType = function() {
      return A.firefox() ? "DOMMouseScroll" : b("wheel") ? "wheel" : "mousewheel";
    };
    Y = T;
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x2,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x2,
    right: x2 + width,
    bottom: y + height,
    x: x2,
    y
  };
}
var sides, alignments, placements, min, max, round, floor, createCoords, oppositeSideMap, oppositeAlignmentMap, yAxisSides, lrPlacement, rlPlacement, tbPlacement, btPlacement;
var init_floating_ui_utils = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"() {
    sides = ["top", "right", "bottom", "left"];
    alignments = ["start", "end"];
    placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
    min = Math.min;
    max = Math.max;
    round = Math.round;
    floor = Math.floor;
    createCoords = (v2) => ({
      x: v2,
      y: v2
    });
    oppositeSideMap = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    oppositeAlignmentMap = {
      start: "end",
      end: "start"
    };
    yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
    lrPlacement = ["left", "right"];
    rlPlacement = ["right", "left"];
    tbPlacement = ["top", "bottom"];
    btPlacement = ["bottom", "top"];
  }
});

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x2,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a2, b2) => a2.y - b2.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var computePosition, arrow, autoPlacement, flip, hide, inline, originSides, offset, shift, limitShift, size;
var init_floating_ui_core = __esm({
  "node_modules/@floating-ui/core/dist/floating-ui.core.mjs"() {
    init_floating_ui_utils();
    init_floating_ui_utils();
    computePosition = async (reference, floating, config) => {
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform
      } = config;
      const validMiddleware = middleware.filter(Boolean);
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
      let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x: x2,
        y
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i = 0; i < validMiddleware.length; i++) {
        var _platform$detectOverf;
        const {
          name,
          fn
        } = validMiddleware[i];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x: x2,
          y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform: {
            ...platform,
            detectOverflow: (_platform$detectOverf = platform.detectOverflow) != null ? _platform$detectOverf : detectOverflow
          },
          elements: {
            reference,
            floating
          }
        });
        x2 = nextX != null ? nextX : x2;
        y = nextY != null ? nextY : y;
        middlewareData = {
          ...middlewareData,
          [name]: {
            ...middlewareData[name],
            ...data
          }
        };
        if (reset && resetCount <= 50) {
          resetCount++;
          if (typeof reset === "object") {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x: x2,
              y
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i = -1;
        }
      }
      return {
        x: x2,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    };
    arrow = (options) => ({
      name: "arrow",
      options,
      async fn(state) {
        const {
          x: x2,
          y,
          placement,
          rects,
          platform,
          elements,
          middlewareData
        } = state;
        const {
          element,
          padding = 0
        } = evaluate(options, state) || {};
        if (element == null) {
          return {};
        }
        const paddingObject = getPaddingObject(padding);
        const coords = {
          x: x2,
          y
        };
        const axis = getAlignmentAxis(placement);
        const length = getAxisLength(axis);
        const arrowDimensions = await platform.getDimensions(element);
        const isYAxis = axis === "y";
        const minProp = isYAxis ? "top" : "left";
        const maxProp = isYAxis ? "bottom" : "right";
        const clientProp = isYAxis ? "clientHeight" : "clientWidth";
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
        if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;
        const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        const minPadding = min(paddingObject[minProp], largestPossiblePadding);
        const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
        const min$1 = minPadding;
        const max2 = clientSize - arrowDimensions[length] - maxPadding;
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset2 = clamp(min$1, center, max2);
        const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
        return {
          [axis]: coords[axis] + alignmentOffset,
          data: {
            [axis]: offset2,
            centerOffset: center - offset2 - alignmentOffset,
            ...shouldAddOffset && {
              alignmentOffset
            }
          },
          reset: shouldAddOffset
        };
      }
    });
    autoPlacement = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "autoPlacement",
        options,
        async fn(state) {
          var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
          const {
            rects,
            middlewareData,
            placement,
            platform,
            elements
          } = state;
          const {
            crossAxis = false,
            alignment,
            allowedPlacements = placements,
            autoAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);
          const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
          const overflow = await platform.detectOverflow(state, detectOverflowOptions);
          const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
          const currentPlacement = placements$1[currentIndex];
          if (currentPlacement == null) {
            return {};
          }
          const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
          if (placement !== currentPlacement) {
            return {
              reset: {
                placement: placements$1[0]
              }
            };
          }
          const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
          const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
            placement: currentPlacement,
            overflows: currentOverflows
          }];
          const nextPlacement = placements$1[currentIndex + 1];
          if (nextPlacement) {
            return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          const placementsSortedByMostSpace = allOverflows.map((d2) => {
            const alignment2 = getAlignment(d2.placement);
            return [d2.placement, alignment2 && crossAxis ? (
              // Check along the mainAxis and main crossAxis side.
              d2.overflows.slice(0, 2).reduce((acc, v2) => acc + v2, 0)
            ) : (
              // Check only the mainAxis.
              d2.overflows[0]
            ), d2.overflows];
          }).sort((a2, b2) => a2[1] - b2[1]);
          const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d2) => d2[2].slice(
            0,
            // Aligned placements should not check their opposite crossAxis
            // side.
            getAlignment(d2[0]) ? 2 : 3
          ).every((v2) => v2 <= 0));
          const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
          if (resetPlacement !== placement) {
            return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: resetPlacement
              }
            };
          }
          return {};
        }
      };
    };
    flip = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "flip",
        options,
        async fn(state) {
          var _middlewareData$arrow, _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = "bestFit",
            fallbackAxisSideDirection = "none",
            flipAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);
          if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          const side = getSide(placement);
          const initialSideAxis = getSideAxis(initialPlacement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
          if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements2 = [initialPlacement, ...fallbackPlacements];
          const overflow = await platform.detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const sides2 = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];
          if (!overflows.every((side2) => side2 <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements2[nextIndex];
            if (nextPlacement) {
              const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
              if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
              // overflows the main axis.
              overflowsData.every((d2) => getSideAxis(d2.placement) === initialSideAxis ? d2.overflows[0] > 0 : true)) {
                return {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                };
              }
            }
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$filter2;
                  const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d2.placement);
                      return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                      // reading directions favoring greater width.
                      currentSideAxis === "y";
                    }
                    return true;
                  }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    };
    hide = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "hide",
        options,
        async fn(state) {
          const {
            rects,
            platform
          } = state;
          const {
            strategy = "referenceHidden",
            ...detectOverflowOptions
          } = evaluate(options, state);
          switch (strategy) {
            case "referenceHidden": {
              const overflow = await platform.detectOverflow(state, {
                ...detectOverflowOptions,
                elementContext: "reference"
              });
              const offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
            case "escaped": {
              const overflow = await platform.detectOverflow(state, {
                ...detectOverflowOptions,
                altBoundary: true
              });
              const offsets = getSideOffsets(overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: offsets,
                  escaped: isAnySideFullyClipped(offsets)
                }
              };
            }
            default: {
              return {};
            }
          }
        }
      };
    };
    inline = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "inline",
        options,
        async fn(state) {
          const {
            placement,
            elements,
            rects,
            platform,
            strategy
          } = state;
          const {
            padding = 2,
            x: x2,
            y
          } = evaluate(options, state);
          const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
          const clientRects = getRectsByLine(nativeClientRects);
          const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
          const paddingObject = getPaddingObject(padding);
          function getBoundingClientRect() {
            if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x2 != null && y != null) {
              return clientRects.find((rect) => x2 > rect.left - paddingObject.left && x2 < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
            }
            if (clientRects.length >= 2) {
              if (getSideAxis(placement) === "y") {
                const firstRect = clientRects[0];
                const lastRect = clientRects[clientRects.length - 1];
                const isTop = getSide(placement) === "top";
                const top2 = firstRect.top;
                const bottom2 = lastRect.bottom;
                const left2 = isTop ? firstRect.left : lastRect.left;
                const right2 = isTop ? firstRect.right : lastRect.right;
                const width2 = right2 - left2;
                const height2 = bottom2 - top2;
                return {
                  top: top2,
                  bottom: bottom2,
                  left: left2,
                  right: right2,
                  width: width2,
                  height: height2,
                  x: left2,
                  y: top2
                };
              }
              const isLeftSide = getSide(placement) === "left";
              const maxRight = max(...clientRects.map((rect) => rect.right));
              const minLeft = min(...clientRects.map((rect) => rect.left));
              const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
              const top = measureRects[0].top;
              const bottom = measureRects[measureRects.length - 1].bottom;
              const left = minLeft;
              const right = maxRight;
              const width = right - left;
              const height = bottom - top;
              return {
                top,
                bottom,
                left,
                right,
                width,
                height,
                x: left,
                y: top
              };
            }
            return fallback;
          }
          const resetRects = await platform.getElementRects({
            reference: {
              getBoundingClientRect
            },
            floating: elements.floating,
            strategy
          });
          if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
            return {
              reset: {
                rects: resetRects
              }
            };
          }
          return {};
        }
      };
    };
    originSides = /* @__PURE__ */ new Set(["left", "top"]);
    offset = function(options) {
      if (options === void 0) {
        options = 0;
      }
      return {
        name: "offset",
        options,
        async fn(state) {
          var _middlewareData$offse, _middlewareData$arrow;
          const {
            x: x2,
            y,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options);
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x2 + diffCoords.x,
            y: y + diffCoords.y,
            data: {
              ...diffCoords,
              placement
            }
          };
        }
      };
    };
    shift = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "shift",
        options,
        async fn(state) {
          const {
            x: x2,
            y,
            placement,
            platform
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x3,
                  y: y2
                } = _ref;
                return {
                  x: x3,
                  y: y2
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const coords = {
            x: x2,
            y
          };
          const overflow = await platform.detectOverflow(state, detectOverflowOptions);
          const crossAxis = getSideAxis(getSide(placement));
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === "y" ? "top" : "left";
            const maxSide = mainAxis === "y" ? "bottom" : "right";
            const min2 = mainAxisCoord + overflow[minSide];
            const max2 = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = clamp(min2, mainAxisCoord, max2);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === "y" ? "top" : "left";
            const maxSide = crossAxis === "y" ? "bottom" : "right";
            const min2 = crossAxisCoord + overflow[minSide];
            const max2 = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = clamp(min2, crossAxisCoord, max2);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x2,
              y: limitedCoords.y - y,
              enabled: {
                [mainAxis]: checkMainAxis,
                [crossAxis]: checkCrossAxis
              }
            }
          };
        }
      };
    };
    limitShift = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        options,
        fn(state) {
          const {
            x: x2,
            y,
            placement,
            rects,
            middlewareData
          } = state;
          const {
            offset: offset2 = 0,
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true
          } = evaluate(options, state);
          const coords = {
            x: x2,
            y
          };
          const crossAxis = getSideAxis(placement);
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          const rawOffset = evaluate(offset2, state);
          const computedOffset = typeof rawOffset === "number" ? {
            mainAxis: rawOffset,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...rawOffset
          };
          if (checkMainAxis) {
            const len = mainAxis === "y" ? "height" : "width";
            const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
            const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
            if (mainAxisCoord < limitMin) {
              mainAxisCoord = limitMin;
            } else if (mainAxisCoord > limitMax) {
              mainAxisCoord = limitMax;
            }
          }
          if (checkCrossAxis) {
            var _middlewareData$offse, _middlewareData$offse2;
            const len = mainAxis === "y" ? "width" : "height";
            const isOriginSide = originSides.has(getSide(placement));
            const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
            const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
            if (crossAxisCoord < limitMin) {
              crossAxisCoord = limitMin;
            } else if (crossAxisCoord > limitMax) {
              crossAxisCoord = limitMax;
            }
          }
          return {
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          };
        }
      };
    };
    size = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "size",
        options,
        async fn(state) {
          var _state$middlewareData, _state$middlewareData2;
          const {
            placement,
            rects,
            platform,
            elements
          } = state;
          const {
            apply = () => {
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const overflow = await platform.detectOverflow(state, detectOverflowOptions);
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const isYAxis = getSideAxis(placement) === "y";
          const {
            width,
            height
          } = rects.floating;
          let heightSide;
          let widthSide;
          if (side === "top" || side === "bottom") {
            heightSide = side;
            widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
          } else {
            widthSide = side;
            heightSide = alignment === "end" ? "top" : "bottom";
          }
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          const maximumClippingWidth = width - overflow.left - overflow.right;
          const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
          const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
          const noShift = !state.middlewareData.shift;
          let availableHeight = overflowAvailableHeight;
          let availableWidth = overflowAvailableWidth;
          if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
            availableWidth = maximumClippingWidth;
          }
          if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
            availableHeight = maximumClippingHeight;
          }
          if (noShift && !alignment) {
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            if (isYAxis) {
              availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
            } else {
              availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
          }
          await apply({
            ...state,
            availableWidth,
            availableHeight
          });
          const nextDimensions = await platform.getDimensions(elements.floating);
          if (width !== nextDimensions.width || height !== nextDimensions.height) {
            return {
              reset: {
                rects: true
              }
            };
          }
          return {};
        }
      };
    };
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
var invalidOverflowDisplayValues, tableElements, topLayerSelectors, transformProperties, willChangeValues, containValues, lastTraversableNodeNames;
var init_floating_ui_utils_dom = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"() {
    invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
    tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
    topLayerSelectors = [":popover-open", ":modal"];
    transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
    willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
    containValues = ["paint", "layout", "strict", "content"];
    lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  }
});

// node_modules/async-validator/dist-web/index.js
var dist_web_exports = {};
__export(dist_web_exports, {
  default: () => Schema
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x2) {
      if (x2 === "%%") {
        return "%";
      }
      if (i >= len) {
        return x2;
      }
      switch (x2) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_2) {
            return "[Circular]";
          }
          break;
        default:
          return x2;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a2) {
    func(a2, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v2 = value;
  for (var i = 0; i < path.length; i++) {
    if (v2 == void 0) {
      return v2;
    }
    v2 = v2[path[i]];
  }
  return v2;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s2 in source) {
      if (source.hasOwnProperty(s2)) {
        var value = source[s2];
        if (typeof value === "object" && typeof target[s2] === "object") {
          target[s2] = _extends({}, target[s2], value);
        } else {
          target[s2] = value;
        }
      }
    }
  }
  return target;
}
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var formatRegExp, warning, AsyncValidationError, required$1, whitespace, urlReg, getUrlRegex, pattern$2, types, type$1, range2, ENUM$1, enumerable$1, pattern$1, rules, string, method2, number2, _boolean, regexp2, integer2, floatFn, array2, object2, ENUM, enumerable2, pattern2, date2, required2, type2, any, validators, messages, Schema;
var init_dist_web = __esm({
  "node_modules/async-validator/dist-web/index.js"() {
    formatRegExp = /%[sdj%]/g;
    warning = function warning2() {
    };
    if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
      warning = function warning3(type4, errors) {
        if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
          if (errors.every(function(e) {
            return typeof e === "string";
          })) {
            console.warn(type4, errors);
          }
        }
      };
    }
    AsyncValidationError = function(_Error) {
      _inheritsLoose(AsyncValidationError2, _Error);
      function AsyncValidationError2(errors, fields) {
        var _this;
        _this = _Error.call(this, "Async Validation Error") || this;
        _this.errors = errors;
        _this.fields = fields;
        return _this;
      }
      return AsyncValidationError2;
    }(_wrapNativeSuper(Error));
    required$1 = function required(rule, value, source, errors, options, type4) {
      if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
        errors.push(format(options.messages.required, rule.fullField));
      }
    };
    whitespace = function whitespace2(rule, value, source, errors, options) {
      if (/^\s+$/.test(value) || value === "") {
        errors.push(format(options.messages.whitespace, rule.fullField));
      }
    };
    getUrlRegex = function() {
      if (urlReg) {
        return urlReg;
      }
      var word = "[a-fA-F\\d:]";
      var b2 = function b3(options) {
        return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
      };
      var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
      var v6seg = "[a-fA-F\\d]{1,4}";
      var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
      var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
      var v4exact = new RegExp("^" + v4 + "$");
      var v6exact = new RegExp("^" + v6 + "$");
      var ip = function ip2(options) {
        return options && options.exact ? v46Exact : new RegExp("(?:" + b2(options) + v4 + b2(options) + ")|(?:" + b2(options) + v6 + b2(options) + ")", "g");
      };
      ip.v4 = function(options) {
        return options && options.exact ? v4exact : new RegExp("" + b2(options) + v4 + b2(options), "g");
      };
      ip.v6 = function(options) {
        return options && options.exact ? v6exact : new RegExp("" + b2(options) + v6 + b2(options), "g");
      };
      var protocol = "(?:(?:[a-z]+:)?//)";
      var auth = "(?:\\S+(?::\\S*)?@)?";
      var ipv4 = ip.v4().source;
      var ipv6 = ip.v6().source;
      var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
      var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
      var port = "(?::\\d{2,5})?";
      var path = '(?:[/?#][^\\s"]*)?';
      var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
      urlReg = new RegExp("(?:^" + regex + "$)", "i");
      return urlReg;
    };
    pattern$2 = {
      // http://emailregex.com/
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
      // url: new RegExp(
      //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
      //   'i',
      // ),
      hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    };
    types = {
      integer: function integer(value) {
        return types.number(value) && parseInt(value, 10) === value;
      },
      "float": function float(value) {
        return types.number(value) && !types.integer(value);
      },
      array: function array(value) {
        return Array.isArray(value);
      },
      regexp: function regexp(value) {
        if (value instanceof RegExp) {
          return true;
        }
        try {
          return !!new RegExp(value);
        } catch (e) {
          return false;
        }
      },
      date: function date(value) {
        return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
      },
      number: function number(value) {
        if (isNaN(value)) {
          return false;
        }
        return typeof value === "number";
      },
      object: function object(value) {
        return typeof value === "object" && !types.array(value);
      },
      method: function method(value) {
        return typeof value === "function";
      },
      email: function email(value) {
        return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
      },
      url: function url(value) {
        return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
      },
      hex: function hex(value) {
        return typeof value === "string" && !!value.match(pattern$2.hex);
      }
    };
    type$1 = function type(rule, value, source, errors, options) {
      if (rule.required && value === void 0) {
        required$1(rule, value, source, errors, options);
        return;
      }
      var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
      var ruleType = rule.type;
      if (custom.indexOf(ruleType) > -1) {
        if (!types[ruleType](value)) {
          errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
        }
      } else if (ruleType && typeof value !== rule.type) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    };
    range2 = function range3(rule, value, source, errors, options) {
      var len = typeof rule.len === "number";
      var min2 = typeof rule.min === "number";
      var max2 = typeof rule.max === "number";
      var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      var val = value;
      var key = null;
      var num = typeof value === "number";
      var str = typeof value === "string";
      var arr = Array.isArray(value);
      if (num) {
        key = "number";
      } else if (str) {
        key = "string";
      } else if (arr) {
        key = "array";
      }
      if (!key) {
        return false;
      }
      if (arr) {
        val = value.length;
      }
      if (str) {
        val = value.replace(spRegexp, "_").length;
      }
      if (len) {
        if (val !== rule.len) {
          errors.push(format(options.messages[key].len, rule.fullField, rule.len));
        }
      } else if (min2 && !max2 && val < rule.min) {
        errors.push(format(options.messages[key].min, rule.fullField, rule.min));
      } else if (max2 && !min2 && val > rule.max) {
        errors.push(format(options.messages[key].max, rule.fullField, rule.max));
      } else if (min2 && max2 && (val < rule.min || val > rule.max)) {
        errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
      }
    };
    ENUM$1 = "enum";
    enumerable$1 = function enumerable(rule, value, source, errors, options) {
      rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
      if (rule[ENUM$1].indexOf(value) === -1) {
        errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
      }
    };
    pattern$1 = function pattern(rule, value, source, errors, options) {
      if (rule.pattern) {
        if (rule.pattern instanceof RegExp) {
          rule.pattern.lastIndex = 0;
          if (!rule.pattern.test(value)) {
            errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
          }
        } else if (typeof rule.pattern === "string") {
          var _pattern = new RegExp(rule.pattern);
          if (!_pattern.test(value)) {
            errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
          }
        }
      }
    };
    rules = {
      required: required$1,
      whitespace,
      type: type$1,
      range: range2,
      "enum": enumerable$1,
      pattern: pattern$1
    };
    string = function string2(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value, "string") && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options, "string");
        if (!isEmptyValue(value, "string")) {
          rules.type(rule, value, source, errors, options);
          rules.range(rule, value, source, errors, options);
          rules.pattern(rule, value, source, errors, options);
          if (rule.whitespace === true) {
            rules.whitespace(rule, value, source, errors, options);
          }
        }
      }
      callback(errors);
    };
    method2 = function method3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (value !== void 0) {
          rules.type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    number2 = function number3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (value === "") {
          value = void 0;
        }
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (value !== void 0) {
          rules.type(rule, value, source, errors, options);
          rules.range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    _boolean = function _boolean2(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (value !== void 0) {
          rules.type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    regexp2 = function regexp3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value)) {
          rules.type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    integer2 = function integer3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (value !== void 0) {
          rules.type(rule, value, source, errors, options);
          rules.range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    floatFn = function floatFn2(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (value !== void 0) {
          rules.type(rule, value, source, errors, options);
          rules.range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    array2 = function array3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((value === void 0 || value === null) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options, "array");
        if (value !== void 0 && value !== null) {
          rules.type(rule, value, source, errors, options);
          rules.range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    object2 = function object3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (value !== void 0) {
          rules.type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    ENUM = "enum";
    enumerable2 = function enumerable3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (value !== void 0) {
          rules[ENUM](rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    pattern2 = function pattern3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value, "string") && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, "string")) {
          rules.pattern(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    date2 = function date3(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value, "date") && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, "date")) {
          var dateObject;
          if (value instanceof Date) {
            dateObject = value;
          } else {
            dateObject = new Date(value);
          }
          rules.type(rule, dateObject, source, errors, options);
          if (dateObject) {
            rules.range(rule, dateObject.getTime(), source, errors, options);
          }
        }
      }
      callback(errors);
    };
    required2 = function required3(rule, value, callback, source, options) {
      var errors = [];
      var type4 = Array.isArray(value) ? "array" : typeof value;
      rules.required(rule, value, source, errors, options, type4);
      callback(errors);
    };
    type2 = function type3(rule, value, callback, source, options) {
      var ruleType = rule.type;
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value, ruleType) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options, ruleType);
        if (!isEmptyValue(value, ruleType)) {
          rules.type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    };
    any = function any2(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (isEmptyValue(value) && !rule.required) {
          return callback();
        }
        rules.required(rule, value, source, errors, options);
      }
      callback(errors);
    };
    validators = {
      string,
      method: method2,
      number: number2,
      "boolean": _boolean,
      regexp: regexp2,
      integer: integer2,
      "float": floatFn,
      array: array2,
      object: object2,
      "enum": enumerable2,
      pattern: pattern2,
      date: date2,
      url: type2,
      hex: type2,
      email: type2,
      required: required2,
      any
    };
    messages = newMessages();
    Schema = function() {
      function Schema2(descriptor) {
        this.rules = null;
        this._messages = messages;
        this.define(descriptor);
      }
      var _proto = Schema2.prototype;
      _proto.define = function define2(rules2) {
        var _this = this;
        if (!rules2) {
          throw new Error("Cannot configure a schema with no rules");
        }
        if (typeof rules2 !== "object" || Array.isArray(rules2)) {
          throw new Error("Rules must be an object");
        }
        this.rules = {};
        Object.keys(rules2).forEach(function(name) {
          var item = rules2[name];
          _this.rules[name] = Array.isArray(item) ? item : [item];
        });
      };
      _proto.messages = function messages2(_messages) {
        if (_messages) {
          this._messages = deepMerge(newMessages(), _messages);
        }
        return this._messages;
      };
      _proto.validate = function validate(source_, o2, oc) {
        var _this2 = this;
        if (o2 === void 0) {
          o2 = {};
        }
        if (oc === void 0) {
          oc = function oc2() {
          };
        }
        var source = source_;
        var options = o2;
        var callback = oc;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
          if (callback) {
            callback(null, source);
          }
          return Promise.resolve(source);
        }
        function complete(results) {
          var errors = [];
          var fields = {};
          function add(e) {
            if (Array.isArray(e)) {
              var _errors;
              errors = (_errors = errors).concat.apply(_errors, e);
            } else {
              errors.push(e);
            }
          }
          for (var i = 0; i < results.length; i++) {
            add(results[i]);
          }
          if (!errors.length) {
            callback(null, source);
          } else {
            fields = convertFieldsError(errors);
            callback(errors, fields);
          }
        }
        if (options.messages) {
          var messages$1 = this.messages();
          if (messages$1 === messages) {
            messages$1 = newMessages();
          }
          deepMerge(messages$1, options.messages);
          options.messages = messages$1;
        } else {
          options.messages = this.messages();
        }
        var series = {};
        var keys = options.keys || Object.keys(this.rules);
        keys.forEach(function(z) {
          var arr = _this2.rules[z];
          var value = source[z];
          arr.forEach(function(r) {
            var rule = r;
            if (typeof rule.transform === "function") {
              if (source === source_) {
                source = _extends({}, source);
              }
              value = source[z] = rule.transform(value);
            }
            if (typeof rule === "function") {
              rule = {
                validator: rule
              };
            } else {
              rule = _extends({}, rule);
            }
            rule.validator = _this2.getValidationMethod(rule);
            if (!rule.validator) {
              return;
            }
            rule.field = z;
            rule.fullField = rule.fullField || z;
            rule.type = _this2.getType(rule);
            series[z] = series[z] || [];
            series[z].push({
              rule,
              value,
              source,
              field: z
            });
          });
        });
        var errorFields = {};
        return asyncMap(series, options, function(data, doIt) {
          var rule = data.rule;
          var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
          deep = deep && (rule.required || !rule.required && data.value);
          rule.field = data.field;
          function addFullField(key, schema) {
            return _extends({}, schema, {
              fullField: rule.fullField + "." + key,
              fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
            });
          }
          function cb(e) {
            if (e === void 0) {
              e = [];
            }
            var errorList = Array.isArray(e) ? e : [e];
            if (!options.suppressWarning && errorList.length) {
              Schema2.warning("async-validator:", errorList);
            }
            if (errorList.length && rule.message !== void 0) {
              errorList = [].concat(rule.message);
            }
            var filledErrors = errorList.map(complementError(rule, source));
            if (options.first && filledErrors.length) {
              errorFields[rule.field] = 1;
              return doIt(filledErrors);
            }
            if (!deep) {
              doIt(filledErrors);
            } else {
              if (rule.required && !data.value) {
                if (rule.message !== void 0) {
                  filledErrors = [].concat(rule.message).map(complementError(rule, source));
                } else if (options.error) {
                  filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
                }
                return doIt(filledErrors);
              }
              var fieldsSchema = {};
              if (rule.defaultField) {
                Object.keys(data.value).map(function(key) {
                  fieldsSchema[key] = rule.defaultField;
                });
              }
              fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
              var paredFieldsSchema = {};
              Object.keys(fieldsSchema).forEach(function(field) {
                var fieldSchema = fieldsSchema[field];
                var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
                paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
              });
              var schema = new Schema2(paredFieldsSchema);
              schema.messages(options.messages);
              if (data.rule.options) {
                data.rule.options.messages = options.messages;
                data.rule.options.error = options.error;
              }
              schema.validate(data.value, data.rule.options || options, function(errs) {
                var finalErrors = [];
                if (filledErrors && filledErrors.length) {
                  finalErrors.push.apply(finalErrors, filledErrors);
                }
                if (errs && errs.length) {
                  finalErrors.push.apply(finalErrors, errs);
                }
                doIt(finalErrors.length ? finalErrors : null);
              });
            }
          }
          var res;
          if (rule.asyncValidator) {
            res = rule.asyncValidator(rule, data.value, cb, data.source, options);
          } else if (rule.validator) {
            try {
              res = rule.validator(rule, data.value, cb, data.source, options);
            } catch (error) {
              console.error == null ? void 0 : console.error(error);
              if (!options.suppressValidatorError) {
                setTimeout(function() {
                  throw error;
                }, 0);
              }
              cb(error.message);
            }
            if (res === true) {
              cb();
            } else if (res === false) {
              cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
            } else if (res instanceof Array) {
              cb(res);
            } else if (res instanceof Error) {
              cb(res.message);
            }
          }
          if (res && res.then) {
            res.then(function() {
              return cb();
            }, function(e) {
              return cb(e);
            });
          }
        }, function(results) {
          complete(results);
        }, source);
      };
      _proto.getType = function getType(rule) {
        if (rule.type === void 0 && rule.pattern instanceof RegExp) {
          rule.type = "pattern";
        }
        if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
          throw new Error(format("Unknown rule type %s", rule.type));
        }
        return rule.type || "string";
      };
      _proto.getValidationMethod = function getValidationMethod(rule) {
        if (typeof rule.validator === "function") {
          return rule.validator;
        }
        var keys = Object.keys(rule);
        var messageIndex = keys.indexOf("message");
        if (messageIndex !== -1) {
          keys.splice(messageIndex, 1);
        }
        if (keys.length === 1 && keys[0] === "required") {
          return validators.required;
        }
        return validators[this.getType(rule)] || void 0;
      };
      return Schema2;
    }();
    Schema.register = function register(type4, validator) {
      if (typeof validator !== "function") {
        throw new Error("Cannot register a validator by type, validator is not a function");
      }
      validators[type4] = validator;
    };
    Schema.warning = warning;
    Schema.messages = messages;
    Schema.validators = validators;
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o2 = /\d*[^-_:/,()\s\d]+/, s2 = {}, a2 = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f2 = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        }(e2);
      }], u2 = function(e2) {
        var t2 = s2[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d2 = function(e2, t2) {
        var n2, r2 = s2.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c2 = { A: [o2, function(e2) {
        this.afternoon = d2(e2, false);
      }], a: [o2, function(e2) {
        this.afternoon = d2(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f2("seconds")], ss: [i, f2("seconds")], m: [i, f2("minutes")], mm: [i, f2("minutes")], H: [i, f2("hours")], h: [i, f2("hours")], HH: [i, f2("hours")], hh: [i, f2("hours")], D: [i, f2("day")], DD: [r, f2("day")], Do: [o2, function(e2) {
        var t2 = s2.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f2("week")], ww: [r, f2("week")], M: [i, f2("month")], MM: [r, f2("month")], MMM: [o2, function(e2) {
        var t2 = u2("months"), n2 = (u2("monthsShort") || t2.map(function(e3) {
          return e3.slice(0, 3);
        })).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o2, function(e2) {
        var t2 = u2("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f2("year")], YY: [r, function(e2) {
        this.year = a2(e2);
      }], YYYY: [/\d{4}/, f2("year")], Z: h2, ZZ: h2 };
      function l2(n2) {
        var r2, i2;
        r2 = n2, i2 = s2 && s2.formats;
        for (var o3 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
          var o4 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o4].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
            return t3 || n4.slice(1);
          });
        })).match(t), a3 = o3.length, f3 = 0; f3 < a3; f3 += 1) {
          var h3 = o3[f3], u3 = c2[h3], d3 = u3 && u3[0], l3 = u3 && u3[1];
          o3[f3] = l3 ? { regex: d3, parser: l3 } : h3.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a3; n3 += 1) {
            var i3 = o3[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s3 = i3.regex, f4 = i3.parser, h4 = e2.slice(r3), u4 = s3.exec(h4)[0];
              f4.call(t2, u4), e2 = e2.replace(u4, "");
            }
          }
          return function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          }(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a2 = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o3 = e3.args;
          this.$u = r3;
          var a3 = o3[1];
          if ("string" == typeof a3) {
            var f3 = true === o3[2], h3 = true === o3[3], u3 = f3 || h3, d3 = o3[2];
            h3 && (d3 = o3[2]), s2 = this.$locale(), !f3 && d3 && (s2 = n2.Ls[d3]), this.$d = function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l2(t4)(e4), o4 = i3.year, s3 = i3.month, a4 = i3.day, f4 = i3.hours, h4 = i3.minutes, u4 = i3.seconds, d4 = i3.milliseconds, c4 = i3.zone, m3 = i3.week, M3 = /* @__PURE__ */ new Date(), Y2 = a4 || (o4 || s3 ? 1 : M3.getDate()), p2 = o4 || M3.getFullYear(), v2 = 0;
                o4 && !s3 || (v2 = s3 > 0 ? s3 - 1 : M3.getMonth());
                var D2, w2 = f4 || 0, g = h4 || 0, y = u4 || 0, L = d4 || 0;
                return c4 ? new Date(Date.UTC(p2, v2, Y2, w2, g, y, L + 60 * c4.offset * 1e3)) : n3 ? new Date(Date.UTC(p2, v2, Y2, w2, g, y, L)) : (D2 = new Date(p2, v2, Y2, w2, g, y, L), m3 && (D2 = r4(D2).week(m3).toDate()), D2);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            }(t3, a3, r3, n2), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u3 && t3 != this.format(a3) && (this.$d = /* @__PURE__ */ new Date("")), s2 = {};
          } else if (a3 instanceof Array) for (var c3 = a3.length, m2 = 1; m2 <= c3; m2 += 1) {
            o3[1] = a3[m2 - 1];
            var M2 = n2.apply(this, o3);
            if (M2.isValid()) {
              this.$d = M2.$d, this.$L = M2.$L, this.init();
              break;
            }
            m2 === c3 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/localeData.js
var require_localeData = __commonJS({
  "node_modules/dayjs/plugin/localeData.js"(exports, module) {
    !function(n, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).dayjs_plugin_localeData = e();
    }(exports, function() {
      "use strict";
      return function(n, e, t) {
        var r = e.prototype, o2 = function(n2) {
          return n2 && (n2.indexOf ? n2 : n2.s);
        }, u2 = function(n2, e2, t2, r2, u3) {
          var i2 = n2.name ? n2 : n2.$locale(), a3 = o2(i2[e2]), s3 = o2(i2[t2]), f2 = a3 || s3.map(function(n3) {
            return n3.slice(0, r2);
          });
          if (!u3) return f2;
          var d2 = i2.weekStart;
          return f2.map(function(n3, e3) {
            return f2[(e3 + (d2 || 0)) % 7];
          });
        }, i = function() {
          return t.Ls[t.locale()];
        }, a2 = function(n2, e2) {
          return n2.formats[e2] || function(n3) {
            return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
              return e3 || t2.slice(1);
            });
          }(n2.formats[e2.toUpperCase()]);
        }, s2 = function() {
          var n2 = this;
          return { months: function(e2) {
            return e2 ? e2.format("MMMM") : u2(n2, "months");
          }, monthsShort: function(e2) {
            return e2 ? e2.format("MMM") : u2(n2, "monthsShort", "months", 3);
          }, firstDayOfWeek: function() {
            return n2.$locale().weekStart || 0;
          }, weekdays: function(e2) {
            return e2 ? e2.format("dddd") : u2(n2, "weekdays");
          }, weekdaysMin: function(e2) {
            return e2 ? e2.format("dd") : u2(n2, "weekdaysMin", "weekdays", 2);
          }, weekdaysShort: function(e2) {
            return e2 ? e2.format("ddd") : u2(n2, "weekdaysShort", "weekdays", 3);
          }, longDateFormat: function(e2) {
            return a2(n2.$locale(), e2);
          }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
        };
        r.localeData = function() {
          return s2.bind(this)();
        }, t.localeData = function() {
          var n2 = i();
          return { firstDayOfWeek: function() {
            return n2.weekStart || 0;
          }, weekdays: function() {
            return t.weekdays();
          }, weekdaysShort: function() {
            return t.weekdaysShort();
          }, weekdaysMin: function() {
            return t.weekdaysMin();
          }, months: function() {
            return t.months();
          }, monthsShort: function() {
            return t.monthsShort();
          }, longDateFormat: function(e2) {
            return a2(n2, e2);
          }, meridiem: n2.meridiem, ordinal: n2.ordinal };
        }, t.months = function() {
          return u2(i(), "months");
        }, t.monthsShort = function() {
          return u2(i(), "monthsShort", "months", 3);
        }, t.weekdays = function(n2) {
          return u2(i(), "weekdays", null, null, n2);
        }, t.weekdaysShort = function(n2) {
          return u2(i(), "weekdaysShort", "weekdays", 3, n2);
        }, t.weekdaysMin = function(n2) {
          return u2(i(), "weekdaysMin", "weekdays", 2, n2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/advancedFormat.js
var require_advancedFormat = __commonJS({
  "node_modules/dayjs/plugin/advancedFormat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        var r = t.prototype, n = r.format;
        r.format = function(e2) {
          var t2 = this, r2 = this.$locale();
          if (!this.isValid()) return n.bind(this)(e2);
          var s2 = this.$utils(), a2 = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
            switch (e3) {
              case "Q":
                return Math.ceil((t2.$M + 1) / 3);
              case "Do":
                return r2.ordinal(t2.$D);
              case "gggg":
                return t2.weekYear();
              case "GGGG":
                return t2.isoWeekYear();
              case "wo":
                return r2.ordinal(t2.week(), "W");
              case "w":
              case "ww":
                return s2.s(t2.week(), "w" === e3 ? 1 : 2, "0");
              case "W":
              case "WW":
                return s2.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
              case "k":
              case "kk":
                return s2.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
              case "X":
                return Math.floor(t2.$d.getTime() / 1e3);
              case "x":
                return t2.$d.getTime();
              case "z":
                return "[" + t2.offsetName() + "]";
              case "zzz":
                return "[" + t2.offsetName("long") + "]";
              default:
                return e3;
            }
          });
          return n.bind(this)(a2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/weekOfYear.js
var require_weekOfYear = __commonJS({
  "node_modules/dayjs/plugin/weekOfYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
    }(exports, function() {
      "use strict";
      var e = "week", t = "year";
      return function(i, n, r) {
        var f2 = n.prototype;
        f2.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f3 = r(this).startOf(t).add(1, t).date(n2), s2 = r(this).endOf(e);
            if (f3.isBefore(s2)) return 1;
          }
          var a2 = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o2 = this.diff(a2, e, true);
          return o2 < 0 ? r(this).startOf("week").week() : Math.ceil(o2);
        }, f2.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/weekYear.js
var require_weekYear = __commonJS({
  "node_modules/dayjs/plugin/weekYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekYear = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.weekYear = function() {
          var e2 = this.month(), t2 = this.week(), n = this.year();
          return 1 === t2 && 11 === e2 ? n + 1 : 0 === e2 && t2 >= 52 ? n - 1 : n;
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/dayOfYear.js
var require_dayOfYear = __commonJS({
  "node_modules/dayjs/plugin/dayOfYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_dayOfYear = t();
    }(exports, function() {
      "use strict";
      return function(e, t, n) {
        t.prototype.dayOfYear = function(e2) {
          var t2 = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
          return null == e2 ? t2 : this.add(e2 - t2, "day");
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isSameOrAfter.js
var require_isSameOrAfter = __commonJS({
  "node_modules/dayjs/plugin/isSameOrAfter.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isSameOrBefore.js
var require_isSameOrBefore = __commonJS({
  "node_modules/dayjs/plugin/isSameOrBefore.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrBefore = i();
    }(exports, function() {
      "use strict";
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    });
  }
});

// node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max2) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max2 === 360 ? n : Math.min(max2, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max2), 10) / 100;
  }
  if (Math.abs(n - max2) < 1e-6) {
    return 1;
  }
  if (max2 === 360) {
    n = (n < 0 ? n % max2 + max2 : n % max2) / parseFloat(String(max2));
  } else {
    n = n % max2 / parseFloat(String(max2));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
var init_util = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/util.js"() {
  }
});

// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b2) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r, g, b2) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r, g, b2);
  var min2 = Math.min(r, g, b2);
  var h2 = 0;
  var s2 = 0;
  var l2 = (max2 + min2) / 2;
  if (max2 === min2) {
    s2 = 0;
    h2 = 0;
  } else {
    var d2 = max2 - min2;
    s2 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
    switch (max2) {
      case r:
        h2 = (g - b2) / d2 + (g < b2 ? 6 : 0);
        break;
      case g:
        h2 = (b2 - r) / d2 + 2;
        break;
      case b2:
        h2 = (r - g) / d2 + 4;
        break;
      default:
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, l: l2 };
}
function hue2rgb(p2, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p2 + (q - p2) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p2 + (q - p2) * (2 / 3 - t) * 6;
  }
  return p2;
}
function hslToRgb(h2, s2, l2) {
  var r;
  var g;
  var b2;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  if (s2 === 0) {
    g = l2;
    b2 = l2;
    r = l2;
  } else {
    var q = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p2 = 2 * l2 - q;
    r = hue2rgb(p2, q, h2 + 1 / 3);
    g = hue2rgb(p2, q, h2);
    b2 = hue2rgb(p2, q, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHsv(r, g, b2) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r, g, b2);
  var min2 = Math.min(r, g, b2);
  var h2 = 0;
  var v2 = max2;
  var d2 = max2 - min2;
  var s2 = max2 === 0 ? 0 : d2 / max2;
  if (max2 === min2) {
    h2 = 0;
  } else {
    switch (max2) {
      case r:
        h2 = (g - b2) / d2 + (g < b2 ? 6 : 0);
        break;
      case g:
        h2 = (b2 - r) / d2 + 2;
        break;
      case b2:
        h2 = (r - g) / d2 + 4;
        break;
      default:
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, v: v2 };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2);
  var f2 = h2 - i;
  var p2 = v2 * (1 - s2);
  var q = v2 * (1 - f2 * s2);
  var t = v2 * (1 - (1 - f2) * s2);
  var mod = i % 6;
  var r = [v2, q, p2, p2, t, v2][mod];
  var g = [t, v2, v2, q, p2, p2][mod];
  var b2 = [p2, p2, t, v2, v2, q][mod];
  return { r: r * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHex(r, g, b2, allow3Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r, g, b2, a2, allow4Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function rgbaToArgbHex(r, g, b2, a2) {
  var hex2 = [
    pad2(convertDecimalToHex(a2)),
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  return hex2.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var init_conversion = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/conversion.js"() {
    init_util();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names;
var init_css_color_names = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/css-color-names.js"() {
    names = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      goldenrod: "#daa520",
      gold: "#ffd700",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavenderblush: "#fff0f5",
      lavender: "#e6e6fa",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };
  }
});

// node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var CSS_INTEGER, CSS_NUMBER, CSS_UNIT, PERMISSIVE_MATCH3, PERMISSIVE_MATCH4, matchers;
var init_format_input = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/format-input.js"() {
    init_conversion();
    init_css_color_names();
    init_util();
    CSS_INTEGER = "[-\\+]?\\d+%?";
    CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
    PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    matchers = {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }
});

// node_modules/@ctrl/tinycolor/dist/module/index.js
function tinycolor(color, opts) {
  if (color === void 0) {
    color = "";
  }
  if (opts === void 0) {
    opts = {};
  }
  return new TinyColor(color, opts);
}
var TinyColor;
var init_module = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/index.js"() {
    init_conversion();
    init_css_color_names();
    init_format_input();
    init_util();
    TinyColor = /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R = RsRGB / 12.92;
        } else {
          R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G = GsRGB / 12.92;
        } else {
          G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s2 = this.toHsl().s;
        return s2 === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h2 = Math.round(hsv.h * 360);
        var s2 = Math.round(hsv.s * 100);
        var v2 = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h2 = Math.round(hsl.h * 360);
        var s2 = Math.round(hsl.s * 100);
        var l2 = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toHexShortString = function(allowShortChar) {
        if (allowShortChar === void 0) {
          allowShortChar = false;
        }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b2 = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b2, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b2, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x2) {
          return "".concat(Math.round(bound01(x2, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x2) {
          return Math.round(bound01(x2, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (hex2 === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format2) {
        var formatSet = Boolean(format2);
        format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
        if (needsAlphaFormat) {
          if (format2 === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format2 === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format2 === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format2 === "hex" || format2 === "hex6") {
          formattedString = this.toHexString();
        }
        if (format2 === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format2 === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format2 === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format2 === "name") {
          formattedString = this.toName();
        }
        if (format2 === "hsl") {
          formattedString = this.toHslString();
        }
        if (format2 === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p2 = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
          g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
          b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
          a: (rgb2.a - rgb1.a) * p2 + rgb1.a
        };
        return new TinyColor2(rgba);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(new TinyColor2(hsl));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h2 = hsv.h;
        var s2 = hsv.s;
        var v2 = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
          v2 = (v2 + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        return [
          this,
          new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
          new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor2({
          r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
          g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
          b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
          a: alpha
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n) {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
          result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/readability.js
function readability(color1, color2) {
  var c1 = new TinyColor(color1);
  var c2 = new TinyColor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
}
function isReadable(color1, color2, wcag2) {
  var _a, _b;
  if (wcag2 === void 0) {
    wcag2 = { level: "AA", size: "small" };
  }
  var readabilityLevel = readability(color1, color2);
  switch (((_a = wcag2.level) !== null && _a !== void 0 ? _a : "AA") + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : "small")) {
    case "AAsmall":
    case "AAAlarge":
      return readabilityLevel >= 4.5;
    case "AAlarge":
      return readabilityLevel >= 3;
    case "AAAsmall":
      return readabilityLevel >= 7;
    default:
      return false;
  }
}
function mostReadable(baseColor, colorList, args) {
  if (args === void 0) {
    args = { includeFallbackColors: false, level: "AA", size: "small" };
  }
  var bestColor = null;
  var bestScore = 0;
  var includeFallbackColors = args.includeFallbackColors, level = args.level, size2 = args.size;
  for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
    var color = colorList_1[_i];
    var score = readability(baseColor, color);
    if (score > bestScore) {
      bestScore = score;
      bestColor = new TinyColor(color);
    }
  }
  if (isReadable(baseColor, bestColor, { level, size: size2 }) || !includeFallbackColors) {
    return bestColor;
  }
  args.includeFallbackColors = false;
  return mostReadable(baseColor, ["#fff", "#000"], args);
}
var init_readability = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/readability.js"() {
    init_module();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js
function toMsFilter(firstColor, secondColor) {
  var color = new TinyColor(firstColor);
  var hex8String = "#" + rgbaToArgbHex(color.r, color.g, color.b, color.a);
  var secondHex8String = hex8String;
  var gradientType = color.gradientType ? "GradientType = 1, " : "";
  if (secondColor) {
    var s2 = new TinyColor(secondColor);
    secondHex8String = "#" + rgbaToArgbHex(s2.r, s2.g, s2.b, s2.a);
  }
  return "progid:DXImageTransform.Microsoft.gradient(".concat(gradientType, "startColorstr=").concat(hex8String, ",endColorstr=").concat(secondHex8String, ")");
}
var init_to_ms_filter = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js"() {
    init_conversion();
    init_module();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/from-ratio.js
function fromRatio(ratio, opts) {
  var newColor = {
    r: convertToPercentage(ratio.r),
    g: convertToPercentage(ratio.g),
    b: convertToPercentage(ratio.b)
  };
  if (ratio.a !== void 0) {
    newColor.a = Number(ratio.a);
  }
  return new TinyColor(newColor, opts);
}
function legacyRandom() {
  return new TinyColor({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
}
var init_from_ratio = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/from-ratio.js"() {
    init_module();
    init_util();
  }
});

// node_modules/@ctrl/tinycolor/dist/module/random.js
function random(options) {
  if (options === void 0) {
    options = {};
  }
  if (options.count !== void 0 && options.count !== null) {
    var totalColors = options.count;
    var colors = [];
    options.count = void 0;
    while (totalColors > colors.length) {
      options.count = null;
      if (options.seed) {
        options.seed += 1;
      }
      colors.push(random(options));
    }
    options.count = totalColors;
    return colors;
  }
  var h2 = pickHue(options.hue, options.seed);
  var s2 = pickSaturation(h2, options);
  var v2 = pickBrightness(h2, s2, options);
  var res = { h: h2, s: s2, v: v2 };
  if (options.alpha !== void 0) {
    res.a = options.alpha;
  }
  return new TinyColor(res);
}
function pickHue(hue, seed) {
  var hueRange = getHueRange(hue);
  var res = randomWithin(hueRange, seed);
  if (res < 0) {
    res = 360 + res;
  }
  return res;
}
function pickSaturation(hue, options) {
  if (options.hue === "monochrome") {
    return 0;
  }
  if (options.luminosity === "random") {
    return randomWithin([0, 100], options.seed);
  }
  var saturationRange = getColorInfo(hue).saturationRange;
  var sMin = saturationRange[0];
  var sMax = saturationRange[1];
  switch (options.luminosity) {
    case "bright":
      sMin = 55;
      break;
    case "dark":
      sMin = sMax - 10;
      break;
    case "light":
      sMax = 55;
      break;
    default:
      break;
  }
  return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S2, options) {
  var bMin = getMinimumBrightness(H, S2);
  var bMax = 100;
  switch (options.luminosity) {
    case "dark":
      bMax = bMin + 20;
      break;
    case "light":
      bMin = (bMax + bMin) / 2;
      break;
    case "random":
      bMin = 0;
      bMax = 100;
      break;
    default:
      break;
  }
  return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S2) {
  var lowerBounds = getColorInfo(H).lowerBounds;
  for (var i = 0; i < lowerBounds.length - 1; i++) {
    var s1 = lowerBounds[i][0];
    var v1 = lowerBounds[i][1];
    var s2 = lowerBounds[i + 1][0];
    var v2 = lowerBounds[i + 1][1];
    if (S2 >= s1 && S2 <= s2) {
      var m2 = (v2 - v1) / (s2 - s1);
      var b2 = v1 - m2 * s1;
      return m2 * S2 + b2;
    }
  }
  return 0;
}
function getHueRange(colorInput) {
  var num = parseInt(colorInput, 10);
  if (!Number.isNaN(num) && num < 360 && num > 0) {
    return [num, num];
  }
  if (typeof colorInput === "string") {
    var namedColor = bounds.find(function(n) {
      return n.name === colorInput;
    });
    if (namedColor) {
      var color = defineColor(namedColor);
      if (color.hueRange) {
        return color.hueRange;
      }
    }
    var parsed = new TinyColor(colorInput);
    if (parsed.isValid) {
      var hue = parsed.toHsv().h;
      return [hue, hue];
    }
  }
  return [0, 360];
}
function getColorInfo(hue) {
  if (hue >= 334 && hue <= 360) {
    hue -= 360;
  }
  for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
    var bound = bounds_1[_i];
    var color = defineColor(bound);
    if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
      return color;
    }
  }
  throw Error("Color not found");
}
function randomWithin(range4, seed) {
  if (seed === void 0) {
    return Math.floor(range4[0] + Math.random() * (range4[1] + 1 - range4[0]));
  }
  var max2 = range4[1] || 1;
  var min2 = range4[0] || 0;
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;
  return Math.floor(min2 + rnd * (max2 - min2));
}
function defineColor(bound) {
  var sMin = bound.lowerBounds[0][0];
  var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
  var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
  var bMax = bound.lowerBounds[0][1];
  return {
    name: bound.name,
    hueRange: bound.hueRange,
    lowerBounds: bound.lowerBounds,
    saturationRange: [sMin, sMax],
    brightnessRange: [bMin, bMax]
  };
}
var bounds;
var init_random = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/random.js"() {
    init_module();
    bounds = [
      {
        name: "monochrome",
        hueRange: null,
        lowerBounds: [
          [0, 0],
          [100, 0]
        ]
      },
      {
        name: "red",
        hueRange: [-26, 18],
        lowerBounds: [
          [20, 100],
          [30, 92],
          [40, 89],
          [50, 85],
          [60, 78],
          [70, 70],
          [80, 60],
          [90, 55],
          [100, 50]
        ]
      },
      {
        name: "orange",
        hueRange: [19, 46],
        lowerBounds: [
          [20, 100],
          [30, 93],
          [40, 88],
          [50, 86],
          [60, 85],
          [70, 70],
          [100, 70]
        ]
      },
      {
        name: "yellow",
        hueRange: [47, 62],
        lowerBounds: [
          [25, 100],
          [40, 94],
          [50, 89],
          [60, 86],
          [70, 84],
          [80, 82],
          [90, 80],
          [100, 75]
        ]
      },
      {
        name: "green",
        hueRange: [63, 178],
        lowerBounds: [
          [30, 100],
          [40, 90],
          [50, 85],
          [60, 81],
          [70, 74],
          [80, 64],
          [90, 50],
          [100, 40]
        ]
      },
      {
        name: "blue",
        hueRange: [179, 257],
        lowerBounds: [
          [20, 100],
          [30, 86],
          [40, 80],
          [50, 74],
          [60, 60],
          [70, 52],
          [80, 44],
          [90, 39],
          [100, 35]
        ]
      },
      {
        name: "purple",
        hueRange: [258, 282],
        lowerBounds: [
          [20, 100],
          [30, 87],
          [40, 79],
          [50, 70],
          [60, 65],
          [70, 59],
          [80, 52],
          [90, 45],
          [100, 42]
        ]
      },
      {
        name: "pink",
        hueRange: [283, 334],
        lowerBounds: [
          [20, 100],
          [30, 90],
          [40, 86],
          [60, 84],
          [80, 80],
          [90, 75],
          [100, 73]
        ]
      }
    ];
  }
});

// node_modules/@ctrl/tinycolor/dist/module/interfaces.js
var init_interfaces = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/interfaces.js"() {
  }
});

// node_modules/@ctrl/tinycolor/dist/module/public_api.js
var public_api_exports = {};
__export(public_api_exports, {
  TinyColor: () => TinyColor,
  bounds: () => bounds,
  convertDecimalToHex: () => convertDecimalToHex,
  convertHexToDecimal: () => convertHexToDecimal,
  default: () => public_api_default,
  fromRatio: () => fromRatio,
  hslToRgb: () => hslToRgb,
  hsvToRgb: () => hsvToRgb,
  inputToRGB: () => inputToRGB,
  isReadable: () => isReadable,
  isValidCSSUnit: () => isValidCSSUnit,
  legacyRandom: () => legacyRandom,
  mostReadable: () => mostReadable,
  names: () => names,
  numberInputToObject: () => numberInputToObject,
  parseIntFromHex: () => parseIntFromHex,
  random: () => random,
  readability: () => readability,
  rgbToHex: () => rgbToHex,
  rgbToHsl: () => rgbToHsl,
  rgbToHsv: () => rgbToHsv,
  rgbToRgb: () => rgbToRgb,
  rgbaToArgbHex: () => rgbaToArgbHex,
  rgbaToHex: () => rgbaToHex,
  stringInputToObject: () => stringInputToObject,
  tinycolor: () => tinycolor,
  toMsFilter: () => toMsFilter
});
var public_api_default;
var init_public_api = __esm({
  "node_modules/@ctrl/tinycolor/dist/module/public_api.js"() {
    init_module();
    init_module();
    init_css_color_names();
    init_readability();
    init_to_ms_filter();
    init_from_ratio();
    init_format_input();
    init_random();
    init_interfaces();
    init_conversion();
    public_api_default = tinycolor;
  }
});

// node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm_exports = {};
__export(memoize_one_esm_exports, {
  default: () => memoizeOne
});
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}
var safeIsNaN;
var init_memoize_one_esm = __esm({
  "node_modules/memoize-one/dist/memoize-one.esm.js"() {
    safeIsNaN = Number.isNaN || function ponyfill(value) {
      return typeof value === "number" && value !== value;
    };
  }
});

export {
  NOOP,
  hasOwn,
  isArray,
  isDate,
  isFunction,
  isString,
  isObject,
  isPromise,
  toRawType,
  isPlainObject,
  camelize,
  hyphenate,
  capitalize,
  shared_esm_bundler_exports,
  init_shared_esm_bundler,
  min,
  max,
  round,
  floor,
  createCoords,
  rectToClientRect,
  init_floating_ui_utils,
  detectOverflow,
  computePosition,
  arrow,
  autoPlacement,
  flip,
  hide,
  inline,
  offset,
  shift,
  limitShift,
  size,
  init_floating_ui_core,
  getNodeName,
  getWindow,
  getDocumentElement,
  isElement,
  isHTMLElement,
  isOverflowElement,
  isTableElement,
  isTopLayer,
  isContainingBlock,
  getContainingBlock,
  isWebKit,
  isLastTraversableNode,
  getComputedStyle,
  getNodeScroll,
  getParentNode,
  getOverflowAncestors,
  getFrameElement,
  init_floating_ui_utils_dom,
  Schema,
  dist_web_exports,
  init_dist_web,
  TinyColor,
  public_api_exports,
  init_public_api,
  require_dayjs_min,
  require_customParseFormat,
  Y,
  dist_exports,
  init_dist,
  require_localeData,
  require_advancedFormat,
  require_weekOfYear,
  require_weekYear,
  require_dayOfYear,
  require_isSameOrAfter,
  require_isSameOrBefore,
  memoizeOne,
  memoize_one_esm_exports,
  init_memoize_one_esm
};
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

normalize-wheel-es/dist/index.mjs:
  (**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   *)
*/
//# sourceMappingURL=chunk-EHWNIDRL.js.map

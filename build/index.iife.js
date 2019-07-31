var badgin = (function(t) {
  'use strict'
  let e = !1
  const n = () => {
      e ||
        (console.warn(
          'Application must run in standalone mode and Badging API must be enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
        ),
        (e = !0))
    },
    r = { mediaQuery: null, value: null }
  function o() {
    return (
      r.mediaQuery ||
        ((r.mediaQuery = window.matchMedia('(display-mode: standalone)')),
        (r.mediaQuery.onchange = t => {
          i(r.value)
        })),
      r.mediaQuery.matches && 'ExperimentalBadge' in window
    )
  }
  function i(t) {
    return (
      (r.value = t), o() ? (window.ExperimentalBadge.set(t), !0) : (n(), !1)
    )
  }
  var a =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {}
  var u,
    c =
      ((function(t, e) {
        var n = 200,
          r = '__lodash_hash_undefined__',
          o = 800,
          i = 16,
          u = 9007199254740991,
          c = '[object Arguments]',
          l = '[object AsyncFunction]',
          f = '[object Function]',
          s = '[object GeneratorFunction]',
          d = '[object Null]',
          h = '[object Object]',
          p = '[object Proxy]',
          v = '[object Undefined]',
          y = /^\[object .+?Constructor\]$/,
          _ = /^(?:0|[1-9]\d*)$/,
          b = {}
        ;(b['[object Float32Array]'] = b['[object Float64Array]'] = b[
          '[object Int8Array]'
        ] = b['[object Int16Array]'] = b['[object Int32Array]'] = b[
          '[object Uint8Array]'
        ] = b['[object Uint8ClampedArray]'] = b['[object Uint16Array]'] = b[
          '[object Uint32Array]'
        ] = !0),
          (b[c] = b['[object Array]'] = b['[object ArrayBuffer]'] = b[
            '[object Boolean]'
          ] = b['[object DataView]'] = b['[object Date]'] = b[
            '[object Error]'
          ] = b[f] = b['[object Map]'] = b['[object Number]'] = b[h] = b[
            '[object RegExp]'
          ] = b['[object Set]'] = b['[object String]'] = b[
            '[object WeakMap]'
          ] = !1)
        var g,
          m,
          j,
          w = 'object' == typeof a && a && a.Object === Object && a,
          A = 'object' == typeof self && self && self.Object === Object && self,
          O = w || A || Function('return this')(),
          x = e && !e.nodeType && e,
          z = x && t && !t.nodeType && t,
          T = z && z.exports === x,
          S = T && w.process,
          k = (function() {
            try {
              var t = z && z.require && z.require('util').types
              return t || (S && S.binding && S.binding('util'))
            } catch (t) {}
          })(),
          B = k && k.isTypedArray,
          C = Array.prototype,
          E = Function.prototype,
          P = Object.prototype,
          $ = O['__core-js_shared__'],
          I = E.toString,
          N = P.hasOwnProperty,
          F = (g = /[^.]+$/.exec(($ && $.keys && $.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + g
            : '',
          U = P.toString,
          q = I.call(Object),
          M = RegExp(
            '^' +
              I.call(N)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          R = T ? O.Buffer : void 0,
          Q = O.Symbol,
          D = O.Uint8Array,
          L = R ? R.allocUnsafe : void 0,
          V =
            ((m = Object.getPrototypeOf),
            (j = Object),
            function(t) {
              return m(j(t))
            }),
          W = Object.create,
          G = P.propertyIsEnumerable,
          H = C.splice,
          J = Q ? Q.toStringTag : void 0,
          K = (function() {
            try {
              var t = jt(Object, 'defineProperty')
              return t({}, '', {}), t
            } catch (t) {}
          })(),
          X = R ? R.isBuffer : void 0,
          Y = Math.max,
          Z = Date.now,
          tt = jt(O, 'Map'),
          et = jt(Object, 'create'),
          nt = (function() {
            function t() {}
            return function(e) {
              if (!Pt(e)) return {}
              if (W) return W(e)
              t.prototype = e
              var n = new t()
              return (t.prototype = void 0), n
            }
          })()
        function rt(t) {
          var e = -1,
            n = null == t ? 0 : t.length
          for (this.clear(); ++e < n; ) {
            var r = t[e]
            this.set(r[0], r[1])
          }
        }
        function ot(t) {
          var e = -1,
            n = null == t ? 0 : t.length
          for (this.clear(); ++e < n; ) {
            var r = t[e]
            this.set(r[0], r[1])
          }
        }
        function it(t) {
          var e = -1,
            n = null == t ? 0 : t.length
          for (this.clear(); ++e < n; ) {
            var r = t[e]
            this.set(r[0], r[1])
          }
        }
        function at(t) {
          var e = (this.__data__ = new ot(t))
          this.size = e.size
        }
        function ut(t, e) {
          var n = St(t),
            r = !n && Tt(t),
            o = !n && !r && Bt(t),
            i = !n && !r && !o && It(t),
            a = n || r || o || i,
            u = a
              ? (function(t, e) {
                  for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
                  return r
                })(t.length, String)
              : [],
            c = u.length
          for (var l in t)
            (!e && !N.call(t, l)) ||
              (a &&
                ('length' == l ||
                  (o && ('offset' == l || 'parent' == l)) ||
                  (i &&
                    ('buffer' == l ||
                      'byteLength' == l ||
                      'byteOffset' == l)) ||
                  wt(l, c))) ||
              u.push(l)
          return u
        }
        function ct(t, e, n) {
          ;((void 0 === n || zt(t[e], n)) && (void 0 !== n || e in t)) ||
            st(t, e, n)
        }
        function lt(t, e, n) {
          var r = t[e]
          ;(N.call(t, e) && zt(r, n) && (void 0 !== n || e in t)) || st(t, e, n)
        }
        function ft(t, e) {
          for (var n = t.length; n--; ) if (zt(t[n][0], e)) return n
          return -1
        }
        function st(t, e, n) {
          '__proto__' == e && K
            ? K(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (t[e] = n)
        }
        ;(rt.prototype.clear = function() {
          ;(this.__data__ = et ? et(null) : {}), (this.size = 0)
        }),
          (rt.prototype.delete = function(t) {
            var e = this.has(t) && delete this.__data__[t]
            return (this.size -= e ? 1 : 0), e
          }),
          (rt.prototype.get = function(t) {
            var e = this.__data__
            if (et) {
              var n = e[t]
              return n === r ? void 0 : n
            }
            return N.call(e, t) ? e[t] : void 0
          }),
          (rt.prototype.has = function(t) {
            var e = this.__data__
            return et ? void 0 !== e[t] : N.call(e, t)
          }),
          (rt.prototype.set = function(t, e) {
            var n = this.__data__
            return (
              (this.size += this.has(t) ? 0 : 1),
              (n[t] = et && void 0 === e ? r : e),
              this
            )
          }),
          (ot.prototype.clear = function() {
            ;(this.__data__ = []), (this.size = 0)
          }),
          (ot.prototype.delete = function(t) {
            var e = this.__data__,
              n = ft(e, t)
            return !(
              n < 0 ||
              (n == e.length - 1 ? e.pop() : H.call(e, n, 1), --this.size, 0)
            )
          }),
          (ot.prototype.get = function(t) {
            var e = this.__data__,
              n = ft(e, t)
            return n < 0 ? void 0 : e[n][1]
          }),
          (ot.prototype.has = function(t) {
            return ft(this.__data__, t) > -1
          }),
          (ot.prototype.set = function(t, e) {
            var n = this.__data__,
              r = ft(n, t)
            return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
          }),
          (it.prototype.clear = function() {
            ;(this.size = 0),
              (this.__data__ = {
                hash: new rt(),
                map: new (tt || ot)(),
                string: new rt(),
              })
          }),
          (it.prototype.delete = function(t) {
            var e = mt(this, t).delete(t)
            return (this.size -= e ? 1 : 0), e
          }),
          (it.prototype.get = function(t) {
            return mt(this, t).get(t)
          }),
          (it.prototype.has = function(t) {
            return mt(this, t).has(t)
          }),
          (it.prototype.set = function(t, e) {
            var n = mt(this, t),
              r = n.size
            return n.set(t, e), (this.size += n.size == r ? 0 : 1), this
          }),
          (at.prototype.clear = function() {
            ;(this.__data__ = new ot()), (this.size = 0)
          }),
          (at.prototype.delete = function(t) {
            var e = this.__data__,
              n = e.delete(t)
            return (this.size = e.size), n
          }),
          (at.prototype.get = function(t) {
            return this.__data__.get(t)
          }),
          (at.prototype.has = function(t) {
            return this.__data__.has(t)
          }),
          (at.prototype.set = function(t, e) {
            var r = this.__data__
            if (r instanceof ot) {
              var o = r.__data__
              if (!tt || o.length < n - 1)
                return o.push([t, e]), (this.size = ++r.size), this
              r = this.__data__ = new it(o)
            }
            return r.set(t, e), (this.size = r.size), this
          })
        var dt,
          ht = function(t, e, n) {
            for (var r = -1, o = Object(t), i = n(t), a = i.length; a--; ) {
              var u = i[dt ? a : ++r]
              if (!1 === e(o[u], u, o)) break
            }
            return t
          }
        function pt(t) {
          return null == t
            ? void 0 === t
              ? v
              : d
            : J && J in Object(t)
            ? (function(t) {
                var e = N.call(t, J),
                  n = t[J]
                try {
                  t[J] = void 0
                  var r = !0
                } catch (t) {}
                var o = U.call(t)
                r && (e ? (t[J] = n) : delete t[J])
                return o
              })(t)
            : (function(t) {
                return U.call(t)
              })(t)
        }
        function vt(t) {
          return $t(t) && pt(t) == c
        }
        function yt(t) {
          return (
            !(!Pt(t) || ((e = t), F && F in e)) &&
            (Ct(t) ? M : y).test(
              (function(t) {
                if (null != t) {
                  try {
                    return I.call(t)
                  } catch (t) {}
                  try {
                    return t + ''
                  } catch (t) {}
                }
                return ''
              })(t)
            )
          )
          var e
        }
        function _t(t) {
          if (!Pt(t))
            return (function(t) {
              var e = []
              if (null != t) for (var n in Object(t)) e.push(n)
              return e
            })(t)
          var e = At(t),
            n = []
          for (var r in t)
            ('constructor' != r || (!e && N.call(t, r))) && n.push(r)
          return n
        }
        function bt(t, e, n, r, o) {
          t !== e &&
            ht(
              e,
              function(i, a) {
                if ((o || (o = new at()), Pt(i)))
                  !(function(t, e, n, r, o, i, a) {
                    var u = Ot(t, n),
                      c = Ot(e, n),
                      l = a.get(c)
                    if (l) return void ct(t, n, l)
                    var f = i ? i(u, c, n + '', t, e, a) : void 0,
                      s = void 0 === f
                    if (s) {
                      var d = St(c),
                        p = !d && Bt(c),
                        v = !d && !p && It(c)
                      ;(f = c),
                        d || p || v
                          ? St(u)
                            ? (f = u)
                            : $t((m = u)) && kt(m)
                            ? (f = (function(t, e) {
                                var n = -1,
                                  r = t.length
                                e || (e = Array(r))
                                for (; ++n < r; ) e[n] = t[n]
                                return e
                              })(u))
                            : p
                            ? ((s = !1),
                              (f = (function(t, e) {
                                if (e) return t.slice()
                                var n = t.length,
                                  r = L ? L(n) : new t.constructor(n)
                                return t.copy(r), r
                              })(c, !0)))
                            : v
                            ? ((s = !1),
                              (y = c),
                              (_ = !0
                                ? ((b = y.buffer),
                                  (g = new b.constructor(b.byteLength)),
                                  new D(g).set(new D(b)),
                                  g)
                                : y.buffer),
                              (f = new y.constructor(
                                _,
                                y.byteOffset,
                                y.length
                              )))
                            : (f = [])
                          : (function(t) {
                              if (!$t(t) || pt(t) != h) return !1
                              var e = V(t)
                              if (null === e) return !0
                              var n = N.call(e, 'constructor') && e.constructor
                              return (
                                'function' == typeof n &&
                                n instanceof n &&
                                I.call(n) == q
                              )
                            })(c) || Tt(c)
                          ? ((f = u),
                            Tt(u)
                              ? (f = (function(t) {
                                  return (function(t, e, n, r) {
                                    var o = !n
                                    n || (n = {})
                                    var i = -1,
                                      a = e.length
                                    for (; ++i < a; ) {
                                      var u = e[i],
                                        c = r ? r(n[u], t[u], u, n, t) : void 0
                                      void 0 === c && (c = t[u]),
                                        o ? st(n, u, c) : lt(n, u, c)
                                    }
                                    return n
                                  })(t, Nt(t))
                                })(u))
                              : (Pt(u) && !Ct(u)) ||
                                (f = (function(t) {
                                  return 'function' != typeof t.constructor ||
                                    At(t)
                                    ? {}
                                    : nt(V(t))
                                })(c)))
                          : (s = !1)
                    }
                    var y, _, b, g
                    var m
                    s && (a.set(c, f), o(f, c, r, i, a), a.delete(c))
                    ct(t, n, f)
                  })(t, e, a, n, bt, r, o)
                else {
                  var u = r ? r(Ot(t, a), i, a + '', t, e, o) : void 0
                  void 0 === u && (u = i), ct(t, a, u)
                }
              },
              Nt
            )
        }
        function gt(t, e) {
          return xt(
            (function(t, e, n) {
              return (
                (e = Y(void 0 === e ? t.length - 1 : e, 0)),
                function() {
                  for (
                    var r = arguments,
                      o = -1,
                      i = Y(r.length - e, 0),
                      a = Array(i);
                    ++o < i;

                  )
                    a[o] = r[e + o]
                  o = -1
                  for (var u = Array(e + 1); ++o < e; ) u[o] = r[o]
                  return (
                    (u[e] = n(a)),
                    (function(t, e, n) {
                      switch (n.length) {
                        case 0:
                          return t.call(e)
                        case 1:
                          return t.call(e, n[0])
                        case 2:
                          return t.call(e, n[0], n[1])
                        case 3:
                          return t.call(e, n[0], n[1], n[2])
                      }
                      return t.apply(e, n)
                    })(t, this, u)
                  )
                }
              )
            })(t, e, qt),
            t + ''
          )
        }
        function mt(t, e) {
          var n,
            r,
            o = t.__data__
          return ('string' == (r = typeof (n = e)) ||
          'number' == r ||
          'symbol' == r ||
          'boolean' == r
          ? '__proto__' !== n
          : null === n)
            ? o['string' == typeof e ? 'string' : 'hash']
            : o.map
        }
        function jt(t, e) {
          var n = (function(t, e) {
            return null == t ? void 0 : t[e]
          })(t, e)
          return yt(n) ? n : void 0
        }
        function wt(t, e) {
          var n = typeof t
          return (
            !!(e = null == e ? u : e) &&
            ('number' == n || ('symbol' != n && _.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          )
        }
        function At(t) {
          var e = t && t.constructor
          return t === (('function' == typeof e && e.prototype) || P)
        }
        function Ot(t, e) {
          if (
            ('constructor' !== e || 'function' != typeof t[e]) &&
            '__proto__' != e
          )
            return t[e]
        }
        var xt = (function(t) {
          var e = 0,
            n = 0
          return function() {
            var r = Z(),
              a = i - (r - n)
            if (((n = r), a > 0)) {
              if (++e >= o) return arguments[0]
            } else e = 0
            return t.apply(void 0, arguments)
          }
        })(
          K
            ? function(t, e) {
                return K(t, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value:
                    ((n = e),
                    function() {
                      return n
                    }),
                  writable: !0,
                })
                var n
              }
            : qt
        )
        function zt(t, e) {
          return t === e || (t != t && e != e)
        }
        var Tt = vt(
            (function() {
              return arguments
            })()
          )
            ? vt
            : function(t) {
                return $t(t) && N.call(t, 'callee') && !G.call(t, 'callee')
              },
          St = Array.isArray
        function kt(t) {
          return null != t && Et(t.length) && !Ct(t)
        }
        var Bt =
          X ||
          function() {
            return !1
          }
        function Ct(t) {
          if (!Pt(t)) return !1
          var e = pt(t)
          return e == f || e == s || e == l || e == p
        }
        function Et(t) {
          return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= u
        }
        function Pt(t) {
          var e = typeof t
          return null != t && ('object' == e || 'function' == e)
        }
        function $t(t) {
          return null != t && 'object' == typeof t
        }
        var It = B
          ? (function(t) {
              return function(e) {
                return t(e)
              }
            })(B)
          : function(t) {
              return $t(t) && Et(t.length) && !!b[pt(t)]
            }
        function Nt(t) {
          return kt(t) ? ut(t, !0) : _t(t)
        }
        var Ft,
          Ut =
            ((Ft = function(t, e, n) {
              bt(t, e, n)
            }),
            gt(function(t, e) {
              var n = -1,
                r = e.length,
                o = r > 1 ? e[r - 1] : void 0,
                i = r > 2 ? e[2] : void 0
              for (
                o = Ft.length > 3 && 'function' == typeof o ? (r--, o) : void 0,
                  i &&
                    (function(t, e, n) {
                      if (!Pt(n)) return !1
                      var r = typeof e
                      return (
                        !!('number' == r
                          ? kt(n) && wt(e, n.length)
                          : 'string' == r && (e in n)) && zt(n[e], t)
                      )
                    })(e[0], e[1], i) &&
                    ((o = r < 3 ? void 0 : o), (r = 1)),
                  t = Object(t);
                ++n < r;

              ) {
                var a = e[n]
                a && Ft(t, a, n, o)
              }
              return t
            }))
        function qt(t) {
          return t
        }
        t.exports = Ut
      })((u = { exports: {} }), u.exports),
      u.exports)
  function l(t) {
    return !!t && Number.isInteger(t) && t >= 0
  }
  function f(t) {
    return void 0 === t || !Number.isInteger(t)
  }
  const s = () => {
      const t = document.getElementsByTagName('link')
      for (let e = 0; e < t.length; e++) {
        const n = t[e]
        if (
          n.hasAttribute('href') &&
          (n.getAttribute('rel') || '').match(/\bicon\b/)
        )
          return n
      }
      return null
    },
    d = Math.ceil(window.devicePixelRatio) || 1,
    h = 16 * d,
    p = {
      favicon: null,
      value: null,
      options: { backgroundColor: '#424242', color: '#ffffff', indicator: '!' },
    }
  let v = null,
    y = null,
    _ = null,
    b = null
  const g = t => {
      if (!t) return
      let e = s()
      for (; e && e.parentNode; ) e.parentNode.removeChild(e), (e = s())
      const n = document.createElement('link')
      ;(n.type = 'image/x-icon'),
        (n.rel = 'icon'),
        (n.href = t),
        document.getElementsByTagName('head')[0].appendChild(n)
    },
    m = (t, e) => {
      y &&
        ((y.onload = () => {
          y &&
            _ &&
            (b.clearRect(0, 0, h, h),
            b.drawImage(y, 0, 0, y.width, y.height, 0, 0, h, h),
            j(b, t, e),
            g(_.toDataURL()))
        }),
        v &&
          (v.href.match(/^data/) || (y.crossOrigin = 'anonymous'),
          (y.src = v.href)))
    },
    j = (t, e, n) => {
      let r = null
      if (
        (f(e) ? (r = n.indicator) : l(e) && (r = e < 100 ? String(e) : '99+'),
        null === r)
      )
        return
      const o = r.length - 1,
        i = 8 * d + 4 * d * o,
        a = h - 7 * d,
        u = h - i - d,
        c = 16 * d,
        s = 16 * d,
        p = 5 * d
      t.save(),
        (t.globalAlpha = 1),
        (t.fillStyle = n.backgroundColor),
        (t.strokeStyle = n.backgroundColor),
        (t.lineWidth = d),
        t.beginPath(),
        t.moveTo(u + p, a),
        t.quadraticCurveTo(u, a, u, a + p),
        t.lineTo(u, c - p),
        t.quadraticCurveTo(u, c, u + p, c),
        t.lineTo(s - p, c),
        t.quadraticCurveTo(s, c, s, c - p),
        t.lineTo(s, a + p),
        t.quadraticCurveTo(s, a, s - p, a),
        t.closePath(),
        t.fill(),
        t.restore(),
        t.save(),
        (t.font = `${7 * d}px Arial`),
        (t.fillStyle = n.color),
        (t.textAlign = 'center'),
        (t.textBaseline = 'top'),
        t.fillText(r, u + i / 2 + 1, 9 * d + 1),
        t.restore()
    }
  function w() {
    return (
      v ||
        ((v = s()),
        (y = document.createElement('img')),
        ((_ = document.createElement('canvas')).width = h),
        (_.height = h),
        (b = _.getContext ? _.getContext('2d') : null)),
      !!b && !!v
    )
  }
  const A = { title: null, value: null, options: { indicator: '!' } }
  function O(t, e) {
    null === A.title &&
      ((A.title = document.title),
      Object.defineProperty(document, 'title', {
        get: () => A.title,
        set: t => {
          console.log('change'),
            (A.title = t),
            (function(t, e, n) {
              let r = t
              f(e) ? (r = `(${n.indicator}) ${t}`) : l(e) && (r = `(${e}) ${t}`)
              const o = document.querySelector('title')
              o && (o.childNodes[0].nodeValue = r)
            })(A.title, A.value, A.options)
        },
      })),
      (A.value = t),
      c(A.options, e),
      (document.title = document.title)
  }
  return (
    (t.clear = function() {
      o() && window.ExperimentalBadge.clear(),
        w() && g(v.href),
        (A.value = null),
        (document.title = document.title)
    }),
    (t.set = function(t, e = {}) {
      switch (e.method) {
        case void 0:
        case 'Badging':
          if (i(t) && 'Badging' === e.method) break
        case 'Favicon':
          if (
            (function(t, e) {
              return (
                (p.value = t),
                c(p.options, e),
                !!w() && (m(p.value, p.options), !0)
              )
            })(t, e.favicon)
          )
            break
        default:
          O(t, e.title)
      }
    }),
    t
  )
})({})

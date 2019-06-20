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
    o() ? ((r.value = t), window.ExperimentalBadge.set(t)) : n()
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
    c = ((function(t, e) {
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
        g = {}
      ;(g['[object Float32Array]'] = g['[object Float64Array]'] = g[
        '[object Int8Array]'
      ] = g['[object Int16Array]'] = g['[object Int32Array]'] = g[
        '[object Uint8Array]'
      ] = g['[object Uint8ClampedArray]'] = g['[object Uint16Array]'] = g[
        '[object Uint32Array]'
      ] = !0),
        (g[c] = g['[object Array]'] = g['[object ArrayBuffer]'] = g[
          '[object Boolean]'
        ] = g['[object DataView]'] = g['[object Date]'] = g[
          '[object Error]'
        ] = g[f] = g['[object Map]'] = g['[object Number]'] = g[h] = g[
          '[object RegExp]'
        ] = g['[object Set]'] = g['[object String]'] = g[
          '[object WeakMap]'
        ] = !1)
      var b = 'object' == typeof a && a && a.Object === Object && a,
        m = 'object' == typeof self && self && self.Object === Object && self,
        j = b || m || Function('return this')(),
        w = e && !e.nodeType && e,
        A = w && t && !t.nodeType && t,
        O = A && A.exports === w,
        z = O && b.process,
        x = (function() {
          try {
            return z && z.binding && z.binding('util')
          } catch (t) {}
        })(),
        T = x && x.isTypedArray
      function S(t, e) {
        return '__proto__' == e ? void 0 : t[e]
      }
      var B,
        E,
        $,
        P = Array.prototype,
        k = Function.prototype,
        F = Object.prototype,
        C = j['__core-js_shared__'],
        I = k.toString,
        N = F.hasOwnProperty,
        U = (B = /[^.]+$/.exec((C && C.keys && C.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + B
          : '',
        M = F.toString,
        R = I.call(Object),
        q = RegExp(
          '^' +
            I.call(N)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        Q = O ? j.Buffer : void 0,
        D = j.Symbol,
        L = j.Uint8Array,
        V = Q ? Q.allocUnsafe : void 0,
        W = ((E = Object.getPrototypeOf),
        ($ = Object),
        function(t) {
          return E($(t))
        }),
        G = Object.create,
        H = F.propertyIsEnumerable,
        J = P.splice,
        K = D ? D.toStringTag : void 0,
        X = (function() {
          try {
            var t = wt(Object, 'defineProperty')
            return t({}, '', {}), t
          } catch (t) {}
        })(),
        Y = Q ? Q.isBuffer : void 0,
        Z = Math.max,
        tt = Date.now,
        et = wt(j, 'Map'),
        nt = wt(Object, 'create'),
        rt = (function() {
          function t() {}
          return function(e) {
            if (!kt(e)) return {}
            if (G) return G(e)
            t.prototype = e
            var n = new t()
            return (t.prototype = void 0), n
          }
        })()
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
        var e = -1,
          n = null == t ? 0 : t.length
        for (this.clear(); ++e < n; ) {
          var r = t[e]
          this.set(r[0], r[1])
        }
      }
      function ut(t) {
        var e = (this.__data__ = new it(t))
        this.size = e.size
      }
      function ct(t, e) {
        var n = St(t),
          r = !n && Tt(t),
          o = !n && !r && Et(t),
          i = !n && !r && !o && Ct(t),
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
                  ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
                At(l, c))) ||
            u.push(l)
        return u
      }
      function lt(t, e, n) {
        ;((void 0 === n || xt(t[e], n)) && (void 0 !== n || e in t)) ||
          dt(t, e, n)
      }
      function ft(t, e, n) {
        var r = t[e]
        ;(N.call(t, e) && xt(r, n) && (void 0 !== n || e in t)) || dt(t, e, n)
      }
      function st(t, e) {
        for (var n = t.length; n--; ) if (xt(t[n][0], e)) return n
        return -1
      }
      function dt(t, e, n) {
        '__proto__' == e && X
          ? X(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n)
      }
      ;(ot.prototype.clear = function() {
        ;(this.__data__ = nt ? nt(null) : {}), (this.size = 0)
      }),
        (ot.prototype.delete = function(t) {
          var e = this.has(t) && delete this.__data__[t]
          return (this.size -= e ? 1 : 0), e
        }),
        (ot.prototype.get = function(t) {
          var e = this.__data__
          if (nt) {
            var n = e[t]
            return n === r ? void 0 : n
          }
          return N.call(e, t) ? e[t] : void 0
        }),
        (ot.prototype.has = function(t) {
          var e = this.__data__
          return nt ? void 0 !== e[t] : N.call(e, t)
        }),
        (ot.prototype.set = function(t, e) {
          var n = this.__data__
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = nt && void 0 === e ? r : e),
            this
          )
        }),
        (it.prototype.clear = function() {
          ;(this.__data__ = []), (this.size = 0)
        }),
        (it.prototype.delete = function(t) {
          var e = this.__data__,
            n = st(e, t)
          return !(
            n < 0 ||
            (n == e.length - 1 ? e.pop() : J.call(e, n, 1), --this.size, 0)
          )
        }),
        (it.prototype.get = function(t) {
          var e = this.__data__,
            n = st(e, t)
          return n < 0 ? void 0 : e[n][1]
        }),
        (it.prototype.has = function(t) {
          return st(this.__data__, t) > -1
        }),
        (it.prototype.set = function(t, e) {
          var n = this.__data__,
            r = st(n, t)
          return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
        }),
        (at.prototype.clear = function() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new ot(),
              map: new (et || it)(),
              string: new ot(),
            })
        }),
        (at.prototype.delete = function(t) {
          var e = jt(this, t).delete(t)
          return (this.size -= e ? 1 : 0), e
        }),
        (at.prototype.get = function(t) {
          return jt(this, t).get(t)
        }),
        (at.prototype.has = function(t) {
          return jt(this, t).has(t)
        }),
        (at.prototype.set = function(t, e) {
          var n = jt(this, t),
            r = n.size
          return n.set(t, e), (this.size += n.size == r ? 0 : 1), this
        }),
        (ut.prototype.clear = function() {
          ;(this.__data__ = new it()), (this.size = 0)
        }),
        (ut.prototype.delete = function(t) {
          var e = this.__data__,
            n = e.delete(t)
          return (this.size = e.size), n
        }),
        (ut.prototype.get = function(t) {
          return this.__data__.get(t)
        }),
        (ut.prototype.has = function(t) {
          return this.__data__.has(t)
        }),
        (ut.prototype.set = function(t, e) {
          var r = this.__data__
          if (r instanceof it) {
            var o = r.__data__
            if (!et || o.length < n - 1)
              return o.push([t, e]), (this.size = ++r.size), this
            r = this.__data__ = new at(o)
          }
          return r.set(t, e), (this.size = r.size), this
        })
      var ht,
        pt = function(t, e, n) {
          for (var r = -1, o = Object(t), i = n(t), a = i.length; a--; ) {
            var u = i[ht ? a : ++r]
            if (!1 === e(o[u], u, o)) break
          }
          return t
        }
      function vt(t) {
        return null == t
          ? void 0 === t
            ? v
            : d
          : K && K in Object(t)
          ? (function(t) {
              var e = N.call(t, K),
                n = t[K]
              try {
                t[K] = void 0
                var r = !0
              } catch (t) {}
              var o = M.call(t)
              r && (e ? (t[K] = n) : delete t[K])
              return o
            })(t)
          : (function(t) {
              return M.call(t)
            })(t)
      }
      function yt(t) {
        return Ft(t) && vt(t) == c
      }
      function _t(t) {
        return (
          !(!kt(t) || ((e = t), U && U in e)) &&
          ($t(t) ? q : y).test(
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
      function gt(t) {
        if (!kt(t))
          return (function(t) {
            var e = []
            if (null != t) for (var n in Object(t)) e.push(n)
            return e
          })(t)
        var e = Ot(t),
          n = []
        for (var r in t)
          ('constructor' != r || (!e && N.call(t, r))) && n.push(r)
        return n
      }
      function bt(t, e, n, r, o) {
        t !== e &&
          pt(
            e,
            function(i, a) {
              if (kt(i))
                o || (o = new ut()),
                  (function(t, e, n, r, o, i, a) {
                    var u = S(t, n),
                      c = S(e, n),
                      l = a.get(c)
                    if (l) return void lt(t, n, l)
                    var f = i ? i(u, c, n + '', t, e, a) : void 0,
                      s = void 0 === f
                    if (s) {
                      var d = St(c),
                        p = !d && Et(c),
                        v = !d && !p && Ct(c)
                      ;(f = c),
                        d || p || v
                          ? St(u)
                            ? (f = u)
                            : Ft((m = u)) && Bt(m)
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
                                  r = V ? V(n) : new t.constructor(n)
                                return t.copy(r), r
                              })(c, !0)))
                            : v
                            ? ((s = !1),
                              (y = c),
                              (_ = !0
                                ? ((g = y.buffer),
                                  (b = new g.constructor(g.byteLength)),
                                  new L(b).set(new L(g)),
                                  b)
                                : y.buffer),
                              (f = new y.constructor(
                                _,
                                y.byteOffset,
                                y.length
                              )))
                            : (f = [])
                          : (function(t) {
                              if (!Ft(t) || vt(t) != h) return !1
                              var e = W(t)
                              if (null === e) return !0
                              var n = N.call(e, 'constructor') && e.constructor
                              return (
                                'function' == typeof n &&
                                n instanceof n &&
                                I.call(n) == R
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
                                        o ? dt(n, u, c) : ft(n, u, c)
                                    }
                                    return n
                                  })(t, It(t))
                                })(u))
                              : (!kt(u) || (r && $t(u))) &&
                                (f = (function(t) {
                                  return 'function' != typeof t.constructor ||
                                    Ot(t)
                                    ? {}
                                    : rt(W(t))
                                })(c)))
                          : (s = !1)
                    }
                    var y, _, g, b
                    var m
                    s && (a.set(c, f), o(f, c, r, i, a), a.delete(c))
                    lt(t, n, f)
                  })(t, e, a, n, bt, r, o)
              else {
                var u = r ? r(S(t, a), i, a + '', t, e, o) : void 0
                void 0 === u && (u = i), lt(t, a, u)
              }
            },
            It
          )
      }
      function mt(t, e) {
        return zt(
          (function(t, e, n) {
            return (
              (e = Z(void 0 === e ? t.length - 1 : e, 0)),
              function() {
                for (
                  var r = arguments,
                    o = -1,
                    i = Z(r.length - e, 0),
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
          })(t, e, Mt),
          t + ''
        )
      }
      function jt(t, e) {
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
      function wt(t, e) {
        var n = (function(t, e) {
          return null == t ? void 0 : t[e]
        })(t, e)
        return _t(n) ? n : void 0
      }
      function At(t, e) {
        var n = typeof t
        return (
          !!(e = null == e ? u : e) &&
          ('number' == n || ('symbol' != n && _.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        )
      }
      function Ot(t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || F)
      }
      var zt = (function(t) {
        var e = 0,
          n = 0
        return function() {
          var r = tt(),
            a = i - (r - n)
          if (((n = r), a > 0)) {
            if (++e >= o) return arguments[0]
          } else e = 0
          return t.apply(void 0, arguments)
        }
      })(
        X
          ? function(t, e) {
              return X(t, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: ((n = e),
                function() {
                  return n
                }),
                writable: !0,
              })
              var n
            }
          : Mt
      )
      function xt(t, e) {
        return t === e || (t != t && e != e)
      }
      var Tt = yt(
          (function() {
            return arguments
          })()
        )
          ? yt
          : function(t) {
              return Ft(t) && N.call(t, 'callee') && !H.call(t, 'callee')
            },
        St = Array.isArray
      function Bt(t) {
        return null != t && Pt(t.length) && !$t(t)
      }
      var Et =
        Y ||
        function() {
          return !1
        }
      function $t(t) {
        if (!kt(t)) return !1
        var e = vt(t)
        return e == f || e == s || e == l || e == p
      }
      function Pt(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= u
      }
      function kt(t) {
        var e = typeof t
        return null != t && ('object' == e || 'function' == e)
      }
      function Ft(t) {
        return null != t && 'object' == typeof t
      }
      var Ct = T
        ? (function(t) {
            return function(e) {
              return t(e)
            }
          })(T)
        : function(t) {
            return Ft(t) && Pt(t.length) && !!g[vt(t)]
          }
      function It(t) {
        return Bt(t) ? ct(t, !0) : gt(t)
      }
      var Nt,
        Ut = ((Nt = function(t, e, n) {
          bt(t, e, n)
        }),
        mt(function(t, e) {
          var n = -1,
            r = e.length,
            o = r > 1 ? e[r - 1] : void 0,
            i = r > 2 ? e[2] : void 0
          for (
            o = Nt.length > 3 && 'function' == typeof o ? (r--, o) : void 0,
              i &&
                (function(t, e, n) {
                  if (!kt(n)) return !1
                  var r = typeof e
                  return (
                    !!('number' == r
                      ? Bt(n) && At(e, n.length)
                      : 'string' == r && (e in n)) && xt(n[e], t)
                  )
                })(e[0], e[1], i) &&
                ((o = r < 3 ? void 0 : o), (r = 1)),
              t = Object(t);
            ++n < r;

          ) {
            var a = e[n]
            a && Nt(t, a, n, o)
          }
          return t
        }))
      function Mt(t) {
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
      options: {
        fontSize: 8 * d,
        fontFamily: 'Arial',
        background: '#424242',
        color: '#ffffff',
        height: 8,
        width: 7,
        opacity: 1,
        indicator: '!',
      },
    }
  let v = null,
    y = null,
    _ = null,
    g = null
  const b = t => {
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
            (g.clearRect(0, 0, h, h),
            g.drawImage(y, 0, 0, y.width, y.height, 0, 0, h, h),
            j(g, t, e),
            b(_.toDataURL()))
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
        i = n.width * d + 4 * d * o,
        a = n.height * d,
        u = h - a,
        c = h - i - d,
        s = 16 * d,
        p = 16 * d,
        v = 5 * d,
        y = c + i / 2 + 1
      t.save(),
        (t.globalAlpha = n.opacity),
        (t.fillStyle = n.background),
        (t.strokeStyle = n.background),
        (t.lineWidth = d),
        t.beginPath(),
        t.moveTo(c + v, u),
        t.quadraticCurveTo(c, u, c, u + v),
        t.lineTo(c, s - v),
        t.quadraticCurveTo(c, s, c + v, s),
        t.lineTo(p - v, s),
        t.quadraticCurveTo(p, s, p, s - v),
        t.lineTo(p, u + v),
        t.quadraticCurveTo(p, u, p - v, u),
        t.closePath(),
        t.fill(),
        t.restore(),
        t.save(),
        (t.font = `${n.fontSize}px ${n.fontFamily}`),
        (t.fillStyle = n.color),
        (t.textAlign = 'center'),
        (t.textBaseline = 'top'),
        t.fillText(r, y, 9 * d),
        t.restore()
    }
  function w() {
    return (
      v ||
        ((v = s()),
        (y = document.createElement('img')),
        ((_ = document.createElement('canvas')).width = h),
        (_.height = h),
        (g = _.getContext ? _.getContext('2d') : null)),
      !!g && !!v
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
        w() && b(v.href),
        (A.value = null),
        (document.title = document.title)
    }),
    (t.set = function(t, e = {}) {
      switch (e.method || (o() ? 'Badging' : w() ? 'Favicon' : 'Title')) {
        case 'Badging':
          return void i(t)
        case 'Favicon':
          return void (function(t, e) {
            w() && (c(p.options, e), m(t, p.options))
          })(t, e.favicon)
        default:
          O(t, e.title)
      }
    }),
    t
  )
})({})

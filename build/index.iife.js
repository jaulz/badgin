var badgin = (function(t) {
  'use strict'
  var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {}
  var n,
    r = ((function(t, n) {
      var r = 200,
        o = '__lodash_hash_undefined__',
        i = 800,
        a = 16,
        c = 9007199254740991,
        u = '[object Arguments]',
        f = '[object AsyncFunction]',
        l = '[object Function]',
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
        (g[u] = g['[object Array]'] = g['[object ArrayBuffer]'] = g[
          '[object Boolean]'
        ] = g['[object DataView]'] = g['[object Date]'] = g[
          '[object Error]'
        ] = g[l] = g['[object Map]'] = g['[object Number]'] = g[h] = g[
          '[object RegExp]'
        ] = g['[object Set]'] = g['[object String]'] = g[
          '[object WeakMap]'
        ] = !1)
      var b = 'object' == typeof e && e && e.Object === Object && e,
        m = 'object' == typeof self && self && self.Object === Object && self,
        j = b || m || Function('return this')(),
        w = n && !n.nodeType && n,
        A = w && t && !t.nodeType && t,
        O = A && A.exports === w,
        x = O && b.process,
        z = (function() {
          try {
            return x && x.binding && x.binding('util')
          } catch (t) {}
        })(),
        T = z && z.isTypedArray
      function S(t, e) {
        return '__proto__' == e ? void 0 : t[e]
      }
      var P,
        E,
        B,
        F = Array.prototype,
        k = Function.prototype,
        $ = Object.prototype,
        C = j['__core-js_shared__'],
        I = k.toString,
        U = $.hasOwnProperty,
        N = (P = /[^.]+$/.exec((C && C.keys && C.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + P
          : '',
        R = $.toString,
        D = I.call(Object),
        M = RegExp(
          '^' +
            I.call(U)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        q = O ? j.Buffer : void 0,
        L = j.Symbol,
        W = j.Uint8Array,
        G = q ? q.allocUnsafe : void 0,
        V = ((E = Object.getPrototypeOf),
        (B = Object),
        function(t) {
          return E(B(t))
        }),
        H = Object.create,
        J = $.propertyIsEnumerable,
        K = F.splice,
        Q = L ? L.toStringTag : void 0,
        X = (function() {
          try {
            var t = wt(Object, 'defineProperty')
            return t({}, '', {}), t
          } catch (t) {}
        })(),
        Y = q ? q.isBuffer : void 0,
        Z = Math.max,
        tt = Date.now,
        et = wt(j, 'Map'),
        nt = wt(Object, 'create'),
        rt = (function() {
          function t() {}
          return function(e) {
            if (!kt(e)) return {}
            if (H) return H(e)
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
      function ct(t) {
        var e = (this.__data__ = new it(t))
        this.size = e.size
      }
      function ut(t, e) {
        var n = St(t),
          r = !n && Tt(t),
          o = !n && !r && Et(t),
          i = !n && !r && !o && Ct(t),
          a = n || r || o || i,
          c = a
            ? (function(t, e) {
                for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
                return r
              })(t.length, String)
            : [],
          u = c.length
        for (var f in t)
          (!e && !U.call(t, f)) ||
            (a &&
              ('length' == f ||
                (o && ('offset' == f || 'parent' == f)) ||
                (i &&
                  ('buffer' == f || 'byteLength' == f || 'byteOffset' == f)) ||
                At(f, u))) ||
            c.push(f)
        return c
      }
      function ft(t, e, n) {
        ;((void 0 === n || zt(t[e], n)) && (void 0 !== n || e in t)) ||
          dt(t, e, n)
      }
      function lt(t, e, n) {
        var r = t[e]
        ;(U.call(t, e) && zt(r, n) && (void 0 !== n || e in t)) || dt(t, e, n)
      }
      function st(t, e) {
        for (var n = t.length; n--; ) if (zt(t[n][0], e)) return n
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
            return n === o ? void 0 : n
          }
          return U.call(e, t) ? e[t] : void 0
        }),
        (ot.prototype.has = function(t) {
          var e = this.__data__
          return nt ? void 0 !== e[t] : U.call(e, t)
        }),
        (ot.prototype.set = function(t, e) {
          var n = this.__data__
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = nt && void 0 === e ? o : e),
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
            (n == e.length - 1 ? e.pop() : K.call(e, n, 1), --this.size, 0)
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
        (ct.prototype.clear = function() {
          ;(this.__data__ = new it()), (this.size = 0)
        }),
        (ct.prototype.delete = function(t) {
          var e = this.__data__,
            n = e.delete(t)
          return (this.size = e.size), n
        }),
        (ct.prototype.get = function(t) {
          return this.__data__.get(t)
        }),
        (ct.prototype.has = function(t) {
          return this.__data__.has(t)
        }),
        (ct.prototype.set = function(t, e) {
          var n = this.__data__
          if (n instanceof it) {
            var o = n.__data__
            if (!et || o.length < r - 1)
              return o.push([t, e]), (this.size = ++n.size), this
            n = this.__data__ = new at(o)
          }
          return n.set(t, e), (this.size = n.size), this
        })
      var ht,
        pt = function(t, e, n) {
          for (var r = -1, o = Object(t), i = n(t), a = i.length; a--; ) {
            var c = i[ht ? a : ++r]
            if (!1 === e(o[c], c, o)) break
          }
          return t
        }
      function vt(t) {
        return null == t
          ? void 0 === t
            ? v
            : d
          : Q && Q in Object(t)
          ? (function(t) {
              var e = U.call(t, Q),
                n = t[Q]
              try {
                t[Q] = void 0
                var r = !0
              } catch (t) {}
              var o = R.call(t)
              r && (e ? (t[Q] = n) : delete t[Q])
              return o
            })(t)
          : (function(t) {
              return R.call(t)
            })(t)
      }
      function yt(t) {
        return $t(t) && vt(t) == u
      }
      function _t(t) {
        return (
          !(!kt(t) || ((e = t), N && N in e)) &&
          (Bt(t) ? M : y).test(
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
          ('constructor' != r || (!e && U.call(t, r))) && n.push(r)
        return n
      }
      function bt(t, e, n, r, o) {
        t !== e &&
          pt(
            e,
            function(i, a) {
              if (kt(i))
                o || (o = new ct()),
                  (function(t, e, n, r, o, i, a) {
                    var c = S(t, n),
                      u = S(e, n),
                      f = a.get(u)
                    if (f) return void ft(t, n, f)
                    var l = i ? i(c, u, n + '', t, e, a) : void 0,
                      s = void 0 === l
                    if (s) {
                      var d = St(u),
                        p = !d && Et(u),
                        v = !d && !p && Ct(u)
                      ;(l = u),
                        d || p || v
                          ? St(c)
                            ? (l = c)
                            : $t((m = c)) && Pt(m)
                            ? (l = (function(t, e) {
                                var n = -1,
                                  r = t.length
                                e || (e = Array(r))
                                for (; ++n < r; ) e[n] = t[n]
                                return e
                              })(c))
                            : p
                            ? ((s = !1),
                              (l = (function(t, e) {
                                if (e) return t.slice()
                                var n = t.length,
                                  r = G ? G(n) : new t.constructor(n)
                                return t.copy(r), r
                              })(u, !0)))
                            : v
                            ? ((s = !1),
                              (y = u),
                              (_ = !0
                                ? ((g = y.buffer),
                                  (b = new g.constructor(g.byteLength)),
                                  new W(b).set(new W(g)),
                                  b)
                                : y.buffer),
                              (l = new y.constructor(
                                _,
                                y.byteOffset,
                                y.length
                              )))
                            : (l = [])
                          : (function(t) {
                              if (!$t(t) || vt(t) != h) return !1
                              var e = V(t)
                              if (null === e) return !0
                              var n = U.call(e, 'constructor') && e.constructor
                              return (
                                'function' == typeof n &&
                                n instanceof n &&
                                I.call(n) == D
                              )
                            })(u) || Tt(u)
                          ? ((l = c),
                            Tt(c)
                              ? (l = (function(t) {
                                  return (function(t, e, n, r) {
                                    var o = !n
                                    n || (n = {})
                                    var i = -1,
                                      a = e.length
                                    for (; ++i < a; ) {
                                      var c = e[i],
                                        u = r ? r(n[c], t[c], c, n, t) : void 0
                                      void 0 === u && (u = t[c]),
                                        o ? dt(n, c, u) : lt(n, c, u)
                                    }
                                    return n
                                  })(t, It(t))
                                })(c))
                              : (!kt(c) || (r && Bt(c))) &&
                                (l = (function(t) {
                                  return 'function' != typeof t.constructor ||
                                    Ot(t)
                                    ? {}
                                    : rt(V(t))
                                })(u)))
                          : (s = !1)
                    }
                    var y, _, g, b
                    var m
                    s && (a.set(u, l), o(l, u, r, i, a), a.delete(u))
                    ft(t, n, l)
                  })(t, e, a, n, bt, r, o)
              else {
                var c = r ? r(S(t, a), i, a + '', t, e, o) : void 0
                void 0 === c && (c = i), ft(t, a, c)
              }
            },
            It
          )
      }
      function mt(t, e) {
        return xt(
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
                for (var c = Array(e + 1); ++o < e; ) c[o] = r[o]
                return (
                  (c[e] = n(a)),
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
                  })(t, this, c)
                )
              }
            )
          })(t, e, Rt),
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
          !!(e = null == e ? c : e) &&
          ('number' == n || ('symbol' != n && _.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        )
      }
      function Ot(t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || $)
      }
      var xt = (function(t) {
        var e = 0,
          n = 0
        return function() {
          var r = tt(),
            o = a - (r - n)
          if (((n = r), o > 0)) {
            if (++e >= i) return arguments[0]
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
          : Rt
      )
      function zt(t, e) {
        return t === e || (t != t && e != e)
      }
      var Tt = yt(
          (function() {
            return arguments
          })()
        )
          ? yt
          : function(t) {
              return $t(t) && U.call(t, 'callee') && !J.call(t, 'callee')
            },
        St = Array.isArray
      function Pt(t) {
        return null != t && Ft(t.length) && !Bt(t)
      }
      var Et =
        Y ||
        function() {
          return !1
        }
      function Bt(t) {
        if (!kt(t)) return !1
        var e = vt(t)
        return e == l || e == s || e == f || e == p
      }
      function Ft(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= c
      }
      function kt(t) {
        var e = typeof t
        return null != t && ('object' == e || 'function' == e)
      }
      function $t(t) {
        return null != t && 'object' == typeof t
      }
      var Ct = T
        ? (function(t) {
            return function(e) {
              return t(e)
            }
          })(T)
        : function(t) {
            return $t(t) && Ft(t.length) && !!g[vt(t)]
          }
      function It(t) {
        return Pt(t) ? ut(t, !0) : gt(t)
      }
      var Ut,
        Nt = ((Ut = function(t, e, n) {
          bt(t, e, n)
        }),
        mt(function(t, e) {
          var n = -1,
            r = e.length,
            o = r > 1 ? e[r - 1] : void 0,
            i = r > 2 ? e[2] : void 0
          for (
            o = Ut.length > 3 && 'function' == typeof o ? (r--, o) : void 0,
              i &&
                (function(t, e, n) {
                  if (!kt(n)) return !1
                  var r = typeof e
                  return (
                    !!('number' == r
                      ? Pt(n) && At(e, n.length)
                      : 'string' == r && (e in n)) && zt(n[e], t)
                  )
                })(e[0], e[1], i) &&
                ((o = r < 3 ? void 0 : o), (r = 1)),
              t = Object(t);
            ++n < r;

          ) {
            var a = e[n]
            a && Ut(t, a, n, o)
          }
          return t
        }))
      function Rt(t) {
        return t
      }
      t.exports = Nt
    })((n = { exports: {} }), n.exports),
    n.exports)
  const o = () => {
    console.warn(
      'Badging API is not enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
    )
  }
  function i() {
    return 'ExperimentalBadge' in window
  }
  function a(t, e, n, r) {
    return new (n || (n = Promise))(function(o, i) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (t) {
          i(t)
        }
      }
      function c(t) {
        try {
          u(r.throw(t))
        } catch (t) {
          i(t)
        }
      }
      function u(t) {
        t.done
          ? o(t.value)
          : new n(function(e) {
              e(t.value)
            }).then(a, c)
      }
      u((r = r.apply(t, e || [])).next())
    })
  }
  function c(t) {
    return !t || !Number.parseInt(t) || t < 0
  }
  let u = 0
  const f = () => {
      const t = document.getElementsByTagName('link')
      for (let e = 0; e < t.length; e++) {
        const n = t[e]
        if (
          n.hasAttribute('href') &&
          (n.getAttribute('rel') || '').match(/\bicon\b/)
        )
          return n
      }
    },
    l = Math.ceil(window.devicePixelRatio) || 1,
    s = 16 * l,
    d = f(),
    h = document.createElement('img'),
    p = document.createElement('canvas')
  ;(p.width = s), (p.height = s)
  const v = p.getContext ? p.getContext('2d') : null,
    y = {
      fontSize: 10 * l,
      fontFamily: 'Arial',
      background: '#F03D25',
      color: '#ffffff',
      height: 9,
      width: 7,
      opacity: 1,
    },
    _ = t => {
      if (!t) return
      let e = f()
      for (; e && e.parentNode; ) e.parentNode.removeChild(e), (e = f())
      const n = document.createElement('link')
      ;(n.type = 'image/x-icon'),
        (n.rel = 'icon'),
        (n.href = t),
        document.getElementsByTagName('head')[0].appendChild(n)
    },
    g = (t, e) => {
      ;(h.onload = () => {
        v.clearRect(0, 0, s, s),
          v.drawImage(h, 0, 0, h.width, h.height, 0, 0, s, s),
          String(t).length > 0 && b(v, t, e),
          _(p.toDataURL())
      }),
        d &&
          (d.href.match(/^data/) || (h.crossOrigin = 'anonymous'),
          (h.src = d.href))
    },
    b = (t, e, n) => {
      const r = String(e).length - 1,
        o = n.width * l + 6 * l * r,
        i = n.height * l,
        a = s - i,
        c = s - o - l,
        u = 16 * l,
        f = 16 * l,
        d = 2 * l
      t.save(),
        (t.globalAlpha = n.opacity),
        (t.font = `${n.fontSize}px ${n.fontFamily}`),
        (t.fillStyle = n.background),
        (t.strokeStyle = n.background),
        (t.lineWidth = l),
        t.beginPath(),
        t.moveTo(c + d, a),
        t.quadraticCurveTo(c, a, c, a + d),
        t.lineTo(c, u - d),
        t.quadraticCurveTo(c, u, c + d, u),
        t.lineTo(f - d, u),
        t.quadraticCurveTo(f, u, f, u - d),
        t.lineTo(f, a + d),
        t.quadraticCurveTo(f, a, f - d, a),
        t.closePath(),
        t.fill(),
        (t.fillStyle = n.color),
        (t.textAlign = 'right'),
        (t.textBaseline = 'top'),
        t.fillText(String(e), 2 === l ? 29 : 15, 7 * l),
        t.restore()
    },
    m = (t, e) =>
      a(void 0, void 0, void 0, function*() {
        const n = () => !document.hidden
        if (!n()) return void g(t, e)
        const r = [
          { opacity: 0 },
          { opacity: 0.1 },
          { opacity: 0.2 },
          { opacity: 0.3 },
          { opacity: 0.4 },
          { opacity: 0.5 },
          { opacity: 0.6 },
          { opacity: 0.7 },
          { opacity: 0.8 },
          { opacity: 0.9 },
          { opacity: 1 },
        ]
        try {
          if (u) {
            const o = u
            ;(u = t),
              yield [...r].reverse().reduce(
                (t, r) =>
                  a(this, void 0, void 0, function*() {
                    if ((yield t, !n())) throw new Error()
                    return new Promise(t => {
                      g(o, Object.assign({}, e, r)), setTimeout(() => t(), 50)
                    })
                  }),
                Promise.resolve({})
              )
          }
          t &&
            (yield r.reduce(
              (r, o) =>
                a(this, void 0, void 0, function*() {
                  if ((yield r, !n())) throw new Error()
                  return new Promise(n => {
                    g(t, Object.assign({}, e, o)), setTimeout(() => n(), 50)
                  })
                }),
              Promise.resolve({})
            ))
        } catch (n) {
          c(t) ? _(d.href) : g(t, e)
        }
      })
  const j = document.title
  const w = {
    method: i() ? 'Badging' : v && d ? 'Favicon' : 'Title',
    favicon: y,
  }
  function A(t = w) {
    const e = r({}, w, t)
    switch (e.method) {
      case 'Badging':
        return void (i() ? window.ExperimentalBadge.clear() : o())
      case 'Favicon':
        return void (function(t) {
          m(0, t)
        })(e.favicon)
      default:
        document.title = j
    }
  }
  return (
    (t.clear = A),
    (t.set = function(t, e = w) {
      const n = r({}, w, e)
      if (c(t)) A(n)
      else
        switch (n.method) {
          case 'Badging':
            return void (function(t) {
              i() ? window.ExperimentalBadge.set(t) : o()
            })(t)
          case 'Favicon':
            return void (function(t, e) {
              m(t, e)
            })(t, n.favicon)
          default:
            !(function(t) {
              document.title = `(${t}) ${j}`
            })(t)
        }
    }),
    t
  )
})({})

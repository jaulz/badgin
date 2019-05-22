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
        l = '[object AsyncFunction]',
        f = '[object Function]',
        s = '[object GeneratorFunction]',
        d = '[object Null]',
        h = '[object Object]',
        p = '[object Proxy]',
        v = '[object Undefined]',
        _ = /^\[object .+?Constructor\]$/,
        y = /^(?:0|[1-9]\d*)$/,
        b = {}
      ;(b['[object Float32Array]'] = b['[object Float64Array]'] = b[
        '[object Int8Array]'
      ] = b['[object Int16Array]'] = b['[object Int32Array]'] = b[
        '[object Uint8Array]'
      ] = b['[object Uint8ClampedArray]'] = b['[object Uint16Array]'] = b[
        '[object Uint32Array]'
      ] = !0),
        (b[u] = b['[object Array]'] = b['[object ArrayBuffer]'] = b[
          '[object Boolean]'
        ] = b['[object DataView]'] = b['[object Date]'] = b[
          '[object Error]'
        ] = b[f] = b['[object Map]'] = b['[object Number]'] = b[h] = b[
          '[object RegExp]'
        ] = b['[object Set]'] = b['[object String]'] = b[
          '[object WeakMap]'
        ] = !1)
      var g = 'object' == typeof e && e && e.Object === Object && e,
        m = 'object' == typeof self && self && self.Object === Object && self,
        j = g || m || Function('return this')(),
        w = n && !n.nodeType && n,
        A = w && t && !t.nodeType && t,
        O = A && A.exports === w,
        z = O && g.process,
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
        F = Array.prototype,
        k = Function.prototype,
        P = Object.prototype,
        C = j['__core-js_shared__'],
        I = k.toString,
        N = P.hasOwnProperty,
        U = (B = /[^.]+$/.exec((C && C.keys && C.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + B
          : '',
        M = P.toString,
        R = I.call(Object),
        D = RegExp(
          '^' +
            I.call(N)
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
        ($ = Object),
        function(t) {
          return E($(t))
        }),
        H = Object.create,
        J = P.propertyIsEnumerable,
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
        for (var l in t)
          (!e && !N.call(t, l)) ||
            (a &&
              ('length' == l ||
                (o && ('offset' == l || 'parent' == l)) ||
                (i &&
                  ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
                At(l, u))) ||
            c.push(l)
        return c
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
            return n === o ? void 0 : n
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
              var e = N.call(t, Q),
                n = t[Q]
              try {
                t[Q] = void 0
                var r = !0
              } catch (t) {}
              var o = M.call(t)
              r && (e ? (t[Q] = n) : delete t[Q])
              return o
            })(t)
          : (function(t) {
              return M.call(t)
            })(t)
      }
      function _t(t) {
        return Pt(t) && vt(t) == u
      }
      function yt(t) {
        return (
          !(!kt(t) || ((e = t), U && U in e)) &&
          ($t(t) ? D : _).test(
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
      function bt(t) {
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
      function gt(t, e, n, r, o) {
        t !== e &&
          pt(
            e,
            function(i, a) {
              if (kt(i))
                o || (o = new ct()),
                  (function(t, e, n, r, o, i, a) {
                    var c = S(t, n),
                      u = S(e, n),
                      l = a.get(u)
                    if (l) return void lt(t, n, l)
                    var f = i ? i(c, u, n + '', t, e, a) : void 0,
                      s = void 0 === f
                    if (s) {
                      var d = St(u),
                        p = !d && Et(u),
                        v = !d && !p && Ct(u)
                      ;(f = u),
                        d || p || v
                          ? St(c)
                            ? (f = c)
                            : Pt((m = c)) && Bt(m)
                            ? (f = (function(t, e) {
                                var n = -1,
                                  r = t.length
                                e || (e = Array(r))
                                for (; ++n < r; ) e[n] = t[n]
                                return e
                              })(c))
                            : p
                            ? ((s = !1),
                              (f = (function(t, e) {
                                if (e) return t.slice()
                                var n = t.length,
                                  r = G ? G(n) : new t.constructor(n)
                                return t.copy(r), r
                              })(u, !0)))
                            : v
                            ? ((s = !1),
                              (_ = u),
                              (y = !0
                                ? ((b = _.buffer),
                                  (g = new b.constructor(b.byteLength)),
                                  new W(g).set(new W(b)),
                                  g)
                                : _.buffer),
                              (f = new _.constructor(
                                y,
                                _.byteOffset,
                                _.length
                              )))
                            : (f = [])
                          : (function(t) {
                              if (!Pt(t) || vt(t) != h) return !1
                              var e = V(t)
                              if (null === e) return !0
                              var n = N.call(e, 'constructor') && e.constructor
                              return (
                                'function' == typeof n &&
                                n instanceof n &&
                                I.call(n) == R
                              )
                            })(u) || Tt(u)
                          ? ((f = c),
                            Tt(c)
                              ? (f = (function(t) {
                                  return (function(t, e, n, r) {
                                    var o = !n
                                    n || (n = {})
                                    var i = -1,
                                      a = e.length
                                    for (; ++i < a; ) {
                                      var c = e[i],
                                        u = r ? r(n[c], t[c], c, n, t) : void 0
                                      void 0 === u && (u = t[c]),
                                        o ? dt(n, c, u) : ft(n, c, u)
                                    }
                                    return n
                                  })(t, It(t))
                                })(c))
                              : (!kt(c) || (r && $t(c))) &&
                                (f = (function(t) {
                                  return 'function' != typeof t.constructor ||
                                    Ot(t)
                                    ? {}
                                    : rt(V(t))
                                })(u)))
                          : (s = !1)
                    }
                    var _, y, b, g
                    var m
                    s && (a.set(u, f), o(f, u, r, i, a), a.delete(u))
                    lt(t, n, f)
                  })(t, e, a, n, gt, r, o)
              else {
                var c = r ? r(S(t, a), i, a + '', t, e, o) : void 0
                void 0 === c && (c = i), lt(t, a, c)
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
        return yt(n) ? n : void 0
      }
      function At(t, e) {
        var n = typeof t
        return (
          !!(e = null == e ? c : e) &&
          ('number' == n || ('symbol' != n && y.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        )
      }
      function Ot(t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || P)
      }
      var zt = (function(t) {
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
          : Mt
      )
      function xt(t, e) {
        return t === e || (t != t && e != e)
      }
      var Tt = _t(
          (function() {
            return arguments
          })()
        )
          ? _t
          : function(t) {
              return Pt(t) && N.call(t, 'callee') && !J.call(t, 'callee')
            },
        St = Array.isArray
      function Bt(t) {
        return null != t && Ft(t.length) && !$t(t)
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
      function Ft(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= c
      }
      function kt(t) {
        var e = typeof t
        return null != t && ('object' == e || 'function' == e)
      }
      function Pt(t) {
        return null != t && 'object' == typeof t
      }
      var Ct = T
        ? (function(t) {
            return function(e) {
              return t(e)
            }
          })(T)
        : function(t) {
            return Pt(t) && Ft(t.length) && !!b[vt(t)]
          }
      function It(t) {
        return Bt(t) ? ut(t, !0) : bt(t)
      }
      var Nt,
        Ut = ((Nt = function(t, e, n) {
          gt(t, e, n)
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
    })((n = { exports: {} }), n.exports),
    n.exports)
  const o = () => {
    console.warn(
      'Application must run in standalone mode and Badging API must be enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
    )
  }
  function i() {
    return (
      window.matchMedia('(display-mode: standalone)').matches &&
      'ExperimentalBadge' in window
    )
  }
  function a(t) {
    return t && Number.isInteger(t) && t >= 0
  }
  function c(t) {
    return void 0 === t || !Number.isInteger(t)
  }
  const u = () => {
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
    f = 16 * l,
    s = u(),
    d = document.createElement('img'),
    h = document.createElement('canvas')
  ;(h.width = f), (h.height = f)
  const p = h.getContext ? h.getContext('2d') : null,
    v = {
      fontSize: 8 * l,
      fontFamily: 'Arial',
      background: '#F03D25',
      color: '#ffffff',
      height: 8,
      width: 7,
      opacity: 1,
    },
    _ = t => {
      if (!t) return
      let e = u()
      for (; e && e.parentNode; ) e.parentNode.removeChild(e), (e = u())
      const n = document.createElement('link')
      ;(n.type = 'image/x-icon'),
        (n.rel = 'icon'),
        (n.href = t),
        document.getElementsByTagName('head')[0].appendChild(n)
    },
    y = (t, e) => {
      ;(d.onload = () => {
        p.clearRect(0, 0, f, f),
          p.drawImage(d, 0, 0, d.width, d.height, 0, 0, f, f),
          b(p, t, e),
          _(h.toDataURL())
      }),
        s &&
          (s.href.match(/^data/) || (d.crossOrigin = 'anonymous'),
          (d.src = s.href))
    },
    b = (t, e, n) => {
      const r = c(e) ? ' ' : a(e) ? String(e) : null
      if (null === r) return
      const o = r.length - 1,
        i = n.width * l + 4 * l * o,
        u = n.height * l,
        s = f - u,
        d = f - i - l,
        h = 16 * l,
        p = 16 * l,
        v = 5 * l
      t.save(),
        (t.globalAlpha = n.opacity),
        (t.font = `${n.fontSize}px ${n.fontFamily}`),
        (t.fillStyle = n.background),
        (t.strokeStyle = n.background),
        (t.lineWidth = l),
        t.beginPath(),
        t.moveTo(d + v, s),
        t.quadraticCurveTo(d, s, d, s + v),
        t.lineTo(d, h - v),
        t.quadraticCurveTo(d, h, d + v, h),
        t.lineTo(p - v, h),
        t.quadraticCurveTo(p, h, p, h - v),
        t.lineTo(p, s + v),
        t.quadraticCurveTo(p, s, p - v, s),
        t.closePath(),
        t.fill(),
        (t.fillStyle = n.color),
        (t.textAlign = 'right'),
        (t.textBaseline = 'top'),
        t.fillText(r, 2 === l ? 29 : 15, 9 * l),
        t.restore()
    }
  const g = document.title,
    m = { indicator: '!' }
  const j = () => ({
    method: i() ? 'Badging' : p && s ? 'Favicon' : 'Title',
    favicon: v,
    title: m,
  })
  return (
    (t.clear = function() {
      i() ? window.ExperimentalBadge.clear() : o(),
        _(s.href),
        (document.title = g)
    }),
    (t.set = function(t, e = j()) {
      const n = r({}, j(), e)
      switch (n.method) {
        case 'Badging':
          return void (function(t) {
            i() ? window.ExperimentalBadge.set(t) : o()
          })(t)
        case 'Favicon':
          return void (function(t, e) {
            y(t, e)
          })(t, n.favicon)
        default:
          !(function(t, e) {
            c(t)
              ? (document.title = `(${e.indicator}) ${g}`)
              : a(t)
              ? (document.title = `(${t}) ${g}`)
              : (document.title = g)
          })(t, n.title)
      }
    }),
    t
  )
})({})

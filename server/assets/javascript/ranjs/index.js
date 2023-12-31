function s(t, s = 1) {
    return s < 2 ? t() : Array.from({
        length: s
    }, (() => t()))
}
class e {
    constructor(t) {
        this._state = t || [Math.random() * Number.MAX_SAFE_INTEGER >>> 0, 2, 3, 4], this.next()
    }
    static hash(t) {
        let s = 0;
        for (let e = 0; e < t.length; e++) s = (s << 5) - s + t.charCodeAt(e), s |= 0;
        return s
    }
    next() {
        const t = this._state[1] << 9,
            s = this._state[0] + this._state[3];
        return this._state[2] = this._state[2] ^ this._state[0], this._state[3] = this._state[3] ^ this._state[1], this._state[1] = this._state[1] ^ this._state[2], this._state[0] = this._state[0] ^ this._state[3], this._state[2] = this._state[2] ^ t, this._state[3] = this._state[3] << 11 | this._state[3] >>> 21, (s >>> 0) / 4294967296
    }
    seed(t) {
        this._state = [("number" == typeof t ? t : e.hash(t)) >>> 0, 2, 3, 4];
        for (let t = 0; t < 100; t++) this.next()
    }
    load(t) {
        this._state = t
    }
    save() {
        return this._state
    }
}
const a = new e;
var h = Object.freeze({
    __proto__: null,
    seed: t => a.seed(t),
    float: function (t, e, h) {
        return 0 === arguments.length ? a.next() : 1 === arguments.length ? a.next() * t : s((() => a.next() * (e - t) + t), h)
    },
    int: function (t, e, h) {
        return 1 === arguments.length ? Math.floor(a.next() * (t + 1)) : s((() => Math.floor(a.next() * (e - t + 1) + t)), h)
    },
    choice: function (t, e) {
        if (Array.isArray(t) && 0 !== t.length) return s((() => t[Math.floor(a.next() * t.length)]), e)
    },
    char: function (t, e) {
        if ("string" == typeof t && "" !== t) return s((() => t.charAt(Math.floor(a.next() * t.length))), e)
    },
    shuffle: function (t) {
        let s, e, h = t.length;
        for (; h;) s = Math.floor(a.next() * h--), e = t[h], t[h] = t[s], t[s] = e;
        return t
    },
    coin: function (t, e, h = .5, r = 1) {
        return s((() => a.next() < h ? t : e), r)
    }
});

function r(t) {
    return t.length > 0 ? t.reduce(((t, s) => t + s), 0) / t.length : void 0
}
const i = 100,
    n = Number.EPSILON,
    p = 1e-30;

function o(t) {
    let s = Math.pow(3 + 2 * Math.SQRT2, 30);
    s = (s + 1 / s) / 2;
    let e = -1,
        a = -s,
        h = 0,
        r = 0;
    for (let s = 0; s < 30 && (a = e - a, h = a * t(s), r += h, !(Math.abs(h / r) < n)); s++) e *= (s + 30) * (s - 30) / ((s + .5) * (s + 1));
    return r / s
}
const u = 1.618;

function l(t, s, e) {
    let a, h, r, p, o, u, l, c, d, M = s,
        f = e,
        m = e,
        g = t(M),
        _ = t(f);
    if (!(g > 0 && _ > 0 || g < 0 && _ < 0)) {
        r = _;
        for (let s = 0; s < i; s++) {
            if ((_ > 0 && r > 0 || _ < 0 && r < 0) && (m = M, r = g, h = a = f - M), Math.abs(r) < Math.abs(_) && (M = f, f = m, m = M, g = _, _ = r, r = g), c = n * (2 * Math.abs(f) + .5), d = .5 * (m - f), Math.abs(d) <= c || 0 === _) return f;
            if (Math.abs(h) >= c && Math.abs(g) > Math.abs(_)) {
                l = _ / g, M === m ? (p = 2 * d * l, o = 1 - l) : (o = g / r, u = _ / r, p = l * (2 * d * o * (o - u) - (f - M) * (u - 1)), o = (o - 1) * (u - 1) * (l - 1)), p > 0 && (o = -o), p = Math.abs(p);
                const t = 3 * d * o - Math.abs(c * o),
                    s = Math.abs(h * o);
                2 * p < (t < s ? t : s) ? (h = a, a = p / o) : (a = d, h = a)
            } else a = d, h = a;
            M = f, g = _, Math.abs(a) > c ? f += a : f += c * Math.sign(d), _ = t(f)
        }
    }
}

function c(t, s, e) {
    let a, h, r = e;
    for (let e = 0; e < i && (h = s(r), a = t(r) / (Math.abs(h) > n ? h : s(r + n)), r -= a, !(Math.abs(a / r) < n)); e++);
    return r
}

function d(t) {
    const s = t.sort(((t, s) => t - s));
    let e = s[0],
        a = 0;
    for (let t = 1; t < s.length; t++) {
        const h = e + s[t];
        Math.abs(e) > Math.abs(s[t]) ? a += e - h + s[t] : a += s[t] - h + e, e = h
    }
    return e + a
}

function M(t, s, e, a) {
    let h, r = t,
        p = e(r);
    a && (r = a(r, 0));
    for (let t = 1; t < i && (r = s(r, t), h = e(r), p += h, !(Math.abs(h / p) < n)); t++) a && (r = a(r, t));
    return p
}
const f = (t, s, e) => {
    const a = t[s];
    t[s] = t[e], t[e] = a
};

function m(t, s, e, a) {
    if (s === e) return t[s];
    const h = function (t, s, e, a) {
        const h = t[a];
        f(t, a, e);
        let r = s;
        for (let a = s; a < e; a++) t[a] < h && (f(t, r, a), r++);
        return f(t, e, r), r
    }(t, s, e, Math.floor((s + e) / 2));
    return a === h ? t[a] : a < h ? m(t, s, h - 1, a) : m(t, h + 1, e, a)
}

function g(t, s) {
    return m(t, 0, t.length - 1, s)
}

function _(t) {
    if (0 === t.length) return;
    const s = t.length;
    return s % 2 == 1 ? g(t, (s - 1) / 2) : .5 * (g(t, s / 2 - 1) + g(t, s / 2))
}

function b(t) {
    switch (t.sort(((t, s) => t - s)), t.length) {
        case 1:
            return t[0];
        case 2:
            return (t[0] + t[1]) / 2;
        case 3:
            return t[1] - t[0] < t[2] - t[1] ? (t[0] + t[1]) / 2 : t[1] - t[0] > t[2] - t[1] ? (t[2] + t[1]) / 2 : t[1];
        default: {
            let s = 0,
                e = t[t.length - 1] - t[0];
            const a = Math.ceil(t.length / 2),
                h = t.length;
            for (let r = 0; r < h - a + 1; r++) {
                const h = t[r + a - 1] - t[r];
                h < e && (e = h, s = r)
            }
            return b(t.slice(s, s + a))
        }
    }
}

function x(t, s) {
    if (0 === t.length) return;
    const e = (t.length - 1) * s,
        a = Math.floor(e),
        h = g(t, a);
    if (a < t.length - 1) {
        return h + (e - a) * (g(t, a + 1) - h)
    }
    return h
}
var v = Object.freeze({
    __proto__: null,
    geometricMean: function (t) {
        return t.reduce(((t, s) => t || 0 === s), !1) ? 0 : Math.exp(r(t.map((t => Math.log(Math.abs(t))))))
    },
    harmonicMean: function (t) {
        return t.reduce(((t, s) => t && s > 0), !0) ? 1 / r(t.map((t => 1 / t))) : void 0
    },
    mean: r,
    median: _,
    midrange: function (t) {
        if (0 === t.length) return;
        let s = t[0],
            e = t[0];
        for (const a of t) s = Math.min(s, a), e = Math.max(e, a);
        return (s + e) / 2
    },
    mode: function (t) {
        if (0 !== t.length) return t.reduce(((t, s) => t && Number.isInteger(s)), !0) ? function (t) {
            const s = Array.from(t.reduce(((t, s) => t.set(s, (t.get(s) || 0) + 1)), new Map))
                .sort(((t, s) => s[1] - t[1])),
                e = s[0][1];
            return s.filter((t => t[1] === e))
                .map((t => t[0]))
                .sort(((t, s) => t - s))
        }(t) : b(t)
    },
    trimean: function (t) {
        if (0 !== t.length) return (x(t, .25) + 2 * _(t) + x(t, .75)) / 4
    }
});

function w(t, s) {
    if (t.length < 2 || s.length < 2 || t.length !== s.length) return;
    const e = r(t),
        a = r(s);
    return t.length * r(t.map(((t, h) => (t - e) * (s[h] - a)))) / (t.length - 1)
}
class q {
    constructor(t) {
        "number" == typeof t ? (this._v = new Array(t)
            .fill(0), this._v[0] = 1) : Array.isArray(t) ? this._v = t : "object" == typeof t && Array.isArray(t._v) ? this._v = t._v : this._v = [1, 0, 0]
    }
    v() {
        return this._v.slice()
    }
    dim() {
        return this._v.length
    }
    i(t, s) {
        if (void 0 === s) return this._v[t];
        this._v[t] = s
    }
    f(t) {
        return new q(this._v.map(((s, e) => t(s, e))))
    }
    scale(t) {
        return new q(this._v.map((s => s * t)))
    }
    add(t) {
        const s = t.v();
        return new q(this._v.map(((t, e) => t + s[e])))
    }
    sub(t) {
        const s = t.v();
        return new q(this._v.map(((t, e) => t - s[e])))
    }
    dot(t) {
        const s = t.v();
        return this._v.reduce(((t, e, a) => t + e * s[a]), 0)
    }
    outer(t) {
        return this._v.map((s => t.scale(s)
            .v()))
    }
}
class k {
    constructor(t) {
        if ("number" == typeof t) {
            this._m = Array.from({
                length: t
            }, (() => new Array(t)
                .fill(0)));
            for (let s = 0; s < t; s++) this._m[s][s] = 1
        } else Array.isArray(t) ? this._m = t : "object" == typeof t && Array.isArray(t._m) ? this._m = t._m : this._m = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }
    m() {
        return this._m.map((t => t.slice()))
    }
    ij(t, s, e) {
        if (void 0 === e) return this._m[t][s];
        this._m[t][s] = e
    }
    f(t) {
        return new k(this._m.map(((s, e) => s.map(((s, a) => t(s, e, a))))))
    }
    scale(t) {
        return this.f((s => s * t))
    }
    add(t) {
        const s = t.m();
        return new k(this._m.map(((t, e) => t.map(((t, a) => t + s[e][a])))))
    }
    sub(t) {
        const s = t.m();
        return new k(this._m.map(((t, e) => t.map(((t, a) => t - s[e][a])))))
    }
    mult(t) {
        const s = t.m(),
            e = this._m.length,
            a = new k(e);
        for (let t = 0; t < e; t++)
            for (let h = 0; h < e; h++) {
                let r = 0;
                for (let a = 0; a < e; a++) r += this._m[t][a] * s[a][h];
                a.ij(t, h, r)
            }
        return a
    }
    t() {
        return new k(this._m[0].map(((t, s) => this._m.map((t => t[s])))))
    }
    apply(t) {
        return new q(this._m.map((s => t.dot(new q(s)))))
    }
    ldl() {
        const t = this._m.length,
            s = new k(t),
            e = new k(t);
        for (let a = 0; a < t; a++) {
            let h = this.ij(a, a);
            for (let t = 0; t < a; t++) h -= s.ij(t, t) * e.ij(a, t) * e.ij(a, t);
            s.ij(a, a, h);
            for (let r = t - 1; r > a; r--) {
                let t = this.ij(r, a);
                for (let h = 0; h < a; h++) t -= s.ij(h, h) * e.ij(r, h) * e.ij(a, h);
                e.ij(r, a, t / h)
            }
        }
        return {
            D: s,
            L: e
        }
    }
    rowSum() {
        return this._m.map((t => t.reduce(((t, s) => t + s), 0)))
    }
    hadamard(t) {
        const s = t.m();
        return this.f(((t, e, a) => t * s[e][a]))
    }
    trace() {
        const t = this._m.length;
        let s = 0;
        for (let e = 0; e < t; e++) s += this._m[e][e];
        return s
    }
}

function I(t) {
    const s = new k(t.map((s => t.map((t => Math.abs(s - t)))))),
        e = s.rowSum()
            .map((s => s / t.length)),
        a = r(e);
    return s.f(((t, s, h) => t + a - e[s] - e[h]))
}

function y(t, s) {
    let e = 0;
    for (let a = 1; a < t.length; a++)
        for (let h = 0; h < a; h++) Math.sign(t[a] - t[h]) * Math.sign(s[a] - s[h]) > 0 && e++;
    return e
}

function N(t, s) {
    let e = 0;
    for (let a = 1; a < t.length; a++)
        for (let h = 0; h < a; h++) Math.sign(t[a] - t[h]) * Math.sign(s[a] - s[h]) < 0 && e++;
    return e
}

function P(t) {
    const s = t.reduce(((t, s) => Object.assign(t, {
        [s]: (t[s] || 0) + 1
    })), {});
    return Object.values(s)
        .filter((t => t > 1))
        .reduce(((t, s) => t + s * (s - 1) / 2), 0)
}

function T(t, s, e, a) {
    const h = s * e;
    return 0 === h ? void 0 : t * a / h
}

function E(t) {
    if (t.length > 1) {
        let s = 0,
            e = 0,
            a = 0,
            h = 0;
        for (const r of t) e = r - a, a += e / ++s, h += e * (r - a);
        return h / (s - 1)
    }
}

function S(t) {
    const s = E(t);
    return s && Math.abs(Math.sqrt(s))
}

function A(t, s) {
    const e = w(t, s),
        a = S(t),
        h = S(s);
    return void 0 === e || a * h == 0 ? void 0 : e / (a * h)
}

function L(t, s) {
    return (y(t, s) - N(t, s)) / (t.length * (t.length - 1))
}

function O(t) {
    if (0 === t.length) return;
    const s = t.slice()
        .sort(((t, s) => t - s)),
        e = s.slice()
            .reverse();
    return t.map((t => (s.indexOf(t) + 1 + e.length - e.indexOf(t)) / 2))
}
var j = Object.freeze({
    __proto__: null,
    covariance: w,
    dCov: function (t, s) {
        if (t.length * s.length == 0 || t.length !== s.length) return;
        const e = I(t),
            a = I(s);
        return Math.sqrt(r([].concat(...e.hadamard(a)
            .m())))
    },
    dCor: function (t, s) {
        const e = I(t),
            a = I(s),
            h = Math.sqrt(r([].concat(...e.hadamard(e)
                .m()))),
            i = Math.sqrt(r([].concat(...a.hadamard(a)
                .m())));
        if (h * i > 0) {
            return Math.sqrt(r([].concat(...e.hadamard(a)
                .m()))) / Math.sqrt(h * i)
        }
    },
    kendall: function (t, s) {
        if (0 === t.length || 0 === s.length || t.length !== s.length) return;
        const e = y(t, s) - N(t, s),
            a = t.length * (t.length - 1) / 2,
            h = P(t),
            r = P(s);
        return e / Math.sqrt((a - h) * (a - r))
    },
    kullbackLeibler: function (t, s) {
        if (0 !== t.length && 0 !== s.length && t.length === s.length && !(s.filter(((s, e) => 0 === s && 0 !== t[e]))
            .length > 0)) return d(t.filter((t => t > 0))
                .map(((t, e) => t * Math.log(t / s[e]))))
    },
    oddsRatio: T,
    pearson: A,
    pointBiserial: function (t, s) {
        if (0 === t.length || 0 === s.length || t.length !== s.length) return;
        const e = S(t);
        if (0 === e) return;
        const a = t.filter(((t, e) => 0 === s[e])),
            h = t.filter(((t, e) => 1 === s[e])),
            i = a.length,
            n = h.length,
            p = r(a);
        return (r(h) - p) * Math.sqrt(i * n / (t.length * (t.length - 1))) / e
    },
    somersD: function (t, s) {
        if (0 !== t.length && 0 !== s.length && t.length === s.length) return L(t, s) / L(t, t)
    },
    spearman: function (t, s) {
        if (0 !== t.length && 0 !== s.length && t.length === s.length) return A(O(t), O(s))
    },
    yuleQ: function (t, s, e, a) {
        const h = T(t, s, e, a);
        if (void 0 !== h) return (h - 1) / (h + 1)
    },
    yuleY: function (t, s, e, a) {
        const h = T(t, s, e, a);
        if (void 0 === h) return;
        const r = Math.sqrt(h);
        return (r - 1) / (r + 1)
    }
});

function R(t) {
    if (t.length < 2) return;
    let s = 0;
    for (let e = 0; e < t.length; e++)
        for (let a = 0; a < t.length; a++) a > e && (s += Math.abs(t[e] - t[a]));
    return 2 * s / (t.length * t.length)
}

function F(t) {
    const s = R(t),
        e = r(t);
    return 0 === e ? void 0 : s && s / e
}
var B = Object.freeze({
    __proto__: null,
    cv: function (t) {
        const s = S(t),
            e = r(t);
        return 0 === e ? void 0 : s && s / e
    },
    dVar: function (t) {
        if (0 === t.length) return;
        const s = I(t);
        return Math.sqrt(r([].concat(...s.hadamard(s)
            .m())))
    },
    entropy: function (t, s) {
        if (0 === t.length) return;
        const e = function (t) {
            const s = void 0 === t ? 1 : Math.log(t);
            return t => Math.log(t) / s
        }(s);
        return -d(t.map((t => t * e(t))))
    },
    gini: function (t) {
        const s = F(t);
        return s && s / 2
    },
    iqr: function (t) {
        if (0 !== t.length) return x(t, .75) - x(t, .25)
    },
    md: R,
    midhinge: function (t) {
        if (0 !== t.length) return (x(t, .25) + x(t, .75)) / 2
    },
    range: function (t) {
        if (0 !== t.length) return function (t) {
            let s = t[0];
            for (const e of t) s = Math.max(e, s);
            return s
        }(t) - function (t) {
            let s = t[0];
            for (const e of t) s = Math.min(e, s);
            return s
        }(t)
    },
    rmd: F,
    stdev: S,
    qcd: function (t) {
        if (0 === t.length) return;
        const s = x(t, .25),
            e = x(t, .75);
        return (e - s) / (s + e)
    },
    variance: E,
    vmr: function (t) {
        const s = E(t),
            e = r(t);
        return 0 === e ? void 0 : s && s / e
    }
});
const z = [0, 6.635, 9.21, 11.345, 13.277, 15.086, 16.812, 18.475, 20.09, 21.666, 23.209, 24.725, 26.217, 27.688, 29.141, 30.578, 32, 33.409, 34.805, 36.191, 37.566, 38.932, 40.289, 41.638, 42.98, 44.314, 45.642, 46.963, 48.278, 49.588, 50.892, 52.191, 53.486, 54.776, 56.061, 57.342, 58.619, 59.893, 61.162, 62.428, 63.691, 64.95, 66.206, 67.459, 68.71, 69.957, 71.201, 72.443, 73.683, 74.919, 76.154, 77.386, 78.616, 79.843, 81.069, 82.292, 83.513, 84.733, 85.95, 87.166, 88.379, 89.591, 90.802, 92.01, 93.217, 94.422, 95.626, 96.828, 98.028, 99.228, 100.425, 101.621, 102.816, 104.01, 105.202, 106.393, 107.583, 108.771, 109.958, 111.144, 112.329, 113.512, 114.695, 115.876, 117.057, 118.236, 119.414, 120.591, 121.767, 122.942, 124.116, 125.289, 126.462, 127.633, 128.803, 129.973, 131.141, 132.309, 133.476, 134.642, 135.807, 136.971, 138.134, 139.297, 140.459, 141.62, 142.78, 143.94, 145.099, 146.257, 147.414, 148.571, 149.727, 150.882, 152.037, 153.191, 154.344, 155.496, 156.648, 157.8, 158.95, 160.1, 161.25, 162.398, 163.546, 164.694, 165.841, 166.987, 168.133, 169.278, 170.423, 171.567, 172.711, 173.854, 174.996, 176.138, 177.28, 178.421, 179.561, 180.701, 181.84, 182.979, 184.118, 185.256, 186.393, 187.53, 188.666, 189.802, 190.938, 192.073, 193.208, 194.342, 195.476, 196.609, 197.742, 198.874, 200.006, 201.138, 202.269, 203.4, 204.53, 205.66, 206.79, 207.919, 209.047, 210.176, 211.304, 212.431, 213.558, 214.685, 215.812, 216.938, 218.063, 219.189, 220.314, 221.438, 222.563, 223.687, 224.81, 225.933, 227.056, 228.179, 229.301, 230.423, 231.544, 232.665, 233.786, 234.907, 236.027, 237.147, 238.266, 239.386, 240.505, 241.623, 242.742, 243.86, 244.977, 246.095, 247.212, 248.329, 249.445, 250.561, 251.677, 252.793, 253.908, 255.023, 256.138, 257.253, 258.367, 259.481, 260.595, 261.708, 262.821, 263.934, 265.047, 266.159, 267.271, 268.383, 269.495, 270.606, 271.717, 272.828, 273.939, 275.049, 276.159, 277.269, 278.379, 279.488, 280.597, 281.706, 282.814, 283.923, 285.031, 286.139, 287.247, 288.354, 289.461, 290.568, 291.675, 292.782, 293.888, 294.994, 296.1, 297.206, 298.311, 299.417, 300.522, 301.626, 302.731, 303.835, 304.94],
    G = [359.906, 414.474, 468.724, 522.717, 576.493, 630.084, 683.516, 736.807, 789.974, 843.029, 895.984, 948.848, 1001.63, 1054.334, 1106.969];
class D {
    constructor(t, s) {
        this.t = t, this.k = s, this.p = {}, this.s = [], this.r = new e, this.c = []
    }
    static validate(t, s) {
        if (s.filter((s => {
            let e = s.split(/ (<=|>=|!=) /);
            1 === e.length && (e = s.split(/ ([=<>]) /));
            const a = Object.prototype.hasOwnProperty.call(t, e[0]) ? t[e[0]] : parseFloat(e[0]),
                h = Object.prototype.hasOwnProperty.call(t, e[2]) ? t[e[2]] : parseFloat(e[2]);
            switch (e[1]) {
                case "<":
                    return a >= h;
                case "<=":
                    return a > h;
                case ">":
                    return a <= h;
                case ">=":
                    return a < h;
                case "!=":
                    return a === h;
                default:
                    return !1
            }
        }))
            .length > 0) throw Error(`Invalid parameters. Parameters must satisfy the following constraints: ${s.join(", ")}`)
    }
    _toInt(t) {
        return "discrete" === this.t ? Math.round(t) : t
    }
    _generator() {
        throw Error("Distribution._generator() is not implemented")
    }
    _pdf(t) {
        throw Error("Distribution._pdf() is not implemented")
    }
    _cdf(t) {
        throw Error("Distribution._cdf() is not implemented")
    }
    _qEstimateTable(t) {
        let s = 0,
            e = 0,
            a = 1;
        for (let h = 0; h < i; h++) {
            if (this.cdf(e) >= t) break;
            s = e, e += a, a = Math.ceil(1.618 * a)
        }
        for (let a = 0; a < i; a++) {
            if (e - s <= 1) return e;
            const a = Math.floor((s + e) / 2);
            t > this.cdf(a) ? s = a : e = a
        }
    }
    _qEstimateRoot(t) {
        const s = ((Number.isFinite(this.s[1].value) ? this.s[1].value : 10) - (Number.isFinite(this.s[0].value) ? this.s[0].value : -10)) / 2;
        let e = Math.random();
        this.s[0].closed ? e = this.s[0].value + Number.EPSILON : Number.isFinite(this.s[0].value) && (e = this.s[0].value + s * Math.random());
        let a = e + Math.random();
        this.s[1].closed ? a = this.s[1].value - Number.EPSILON : Number.isFinite(this.s[1].value) && (a = this.s[1].value - s * Math.random());
        const h = function (t, s, e, a) {
            if (s === e) return;
            let h = Math.min(s, e);
            const r = a ? a[0].value : -1 / 0;
            let n = a && a[0].closed ? 0 : 1,
                p = Math.max(s, e);
            const o = a ? a[1].value : 1 / 0;
            let l, c = a && a[1].closed ? 0 : 1,
                d = t(h),
                M = t(p);
            for (let s = 0; s < i; s++) {
                if (d * M < 0) return [h, p];
                l = u * (p - h), Math.abs(d) < Math.abs(M) ? (h = Math.max(h - l, r + n), n /= u, d = t(h)) : Math.abs(d) > Math.abs(M) ? (p = Math.min(p + l, o - c), c /= u, M = t(p)) : (h = Math.max(h - l, r + n), n /= u, d = t(h), p = Math.min(p + l, o + c), c /= u, M = t(p))
            }
            return [s || h, e || p]
        }((s => this.cdf(s) - t), e, a, this.s);
        if (void 0 !== h) return Math.min(Math.max(l((s => this.cdf(s) - t), ...h), this.s[0].value), this.s[1].value)
    }
    type() {
        return this.t
    }
    support() {
        return this.s
    }
    seed(t) {
        return this.r.seed(t), this
    }
    save() {
        return {
            prngState: this.r.save(),
            params: this.p,
            constants: this.c,
            support: this.s
        }
    }
    load(t) {
        return this.p = t.params, this.c = t.constants, this.s = t.support, this.r.load(t.prngState), this
    }
    sample(t = 1) {
        return s((() => this._generator()), t)
    }
    pdf(t) {
        const s = this._toInt(t);
        return this.s[0].closed && s < this.s[0].value || !this.s[0].closed && s <= this.s[0].value || this.s[1].closed && s > this.s[1].value || !this.s[1].closed && s >= this.s[1].value ? 0 : this._pdf(s)
    }
    cdf(t) {
        const s = this._toInt(t);
        return this.s[0].closed && s < this.s[0].value || !this.s[0].closed && s <= this.s[0].value ? 0 : s >= this.s[1].value ? 1 : this._cdf(s)
    }
    q(t) {
        return t < 0 || t > 1 ? void 0 : 0 === t ? this.s[0].value : 1 === t ? this.s[1].value : "function" == typeof this._q ? this._q(t) : "discrete" === this.t ? this._qEstimateTable(t) : this._qEstimateRoot(t)
    }
    survival(t) {
        return 1 - this._cdf(t)
    }
    hazard(t) {
        return this._pdf(t) / this.survival(t)
    }
    cHazard(t) {
        return -Math.log(this.survival(t))
    }
    lnPdf(t) {
        return Math.log(this._pdf(t))
    }
    lnL(t) {
        return d(t.map((t => this.lnPdf(t))))
    }
    aic(t) {
        return 2 * (this.k - this.lnL(t))
    }
    bic(t) {
        return Math.log(t.length) * this.k - 2 * this.lnL(t)
    }
    test(t) {
        return "discrete" === this.t ? function (t, s, e) {
            const a = new Map;
            t.forEach((function (t) {
                a.set(t, a.has(t) ? a.get(t) + 1 : 1)
            }));
            let h = 0,
                r = 0,
                i = 0,
                n = 0;
            a.forEach(((e, a) => {
                r += s(parseInt(a)) * t.length, i += e, r > 20 && (h += Math.pow(i - r, 2) / r, r = 0, i = 0, n++)
            }));
            const p = Math.max(1, n - e - 1),
                o = p <= 250 ? z[p] : G[Math.floor(p / 50)];
            return {
                statistics: h,
                passed: h <= o
            }
        }(t, (t => this.pdf(t)), this.k) : function (t, s) {
            t.sort(((t, s) => t - s));
            let e = 0;
            for (let a = 0; a < t.length; a++) e = Math.max(e, Math.abs((a + 1) / t.length - s(t[a])));
            return {
                statistics: e,
                passed: e <= 1.628 / Math.sqrt(t.length)
            }
        }(t, (t => this.cdf(t)))
    }
}
const Q = [676.5203681218851, -1259.1392167224028, 771.3234287776531, -176.6150291621406, 12.507343278686905, -.13857109526572012, 9984369578019572e-21, 1.5056327351493116e-7],
    H = Math.sqrt(2 * Math.PI);

function C(t) {
    let s;
    if (t < .5) s = Math.PI / (Math.sin(Math.PI * t) * C(1 - t));
    else {
        t--;
        let e = .9999999999998099;
        const a = Q.length;
        Q.forEach(((s, a) => {
            e += s / (t + a + 1)
        }));
        const h = t + a - .5;
        s = H * Math.pow(h, t + .5) * Math.exp(-h) * e
    }
    return s
}

function U(t) {
    const s = Math.abs(t);
    let e, a;
    return s < 3.75 ? (a = t / 3.75, a *= a, e = 1 + a * (3.5156229 + a * (3.0899424 + a * (1.2067492 + a * (.2659732 + a * (.0360768 + .0045813 * a)))))) : (a = 3.75 / s, e = Math.exp(s) / Math.sqrt(s) * (.39894228 + a * (.01328592 + a * (.00225319 + a * (a * (.00916281 + a * (a * (.02635537 + a * (.00392377 * a - .01647633)) - .02057706)) - .00157565))))), e
}

function K(t, s) {
    let e, a, h, r;
    if (0 === t) return U(s);
    if (1 === t) return function (t) {
        const s = Math.abs(t);
        let e, a;
        return s < 3.75 ? (a = t / 3.75, a *= a, e = s * (.5 + a * (.87890594 + a * (.51498869 + a * (.15084934 + a * (.02658733 + a * (.00301532 + 32411e-8 * a))))))) : (a = 3.75 / s, e = .02282967 + a * (a * (.01787654 - .00420059 * a) - .02895312), e = .39894228 + a * (a * (a * (.00163801 + a * (a * e - .01031555)) - .00362018) - .03988024), e *= Math.exp(s) / Math.sqrt(s)), t < 0 ? -e : e
    }(s);
    if (0 === s) return 0;
    const i = 2 / Math.abs(s);
    h = 0, r = 0, e = 1;
    for (let s = 2 * (t + Math.round(Math.sqrt(40 * t))); s > 0; s--) a = h + s * i * e, h = e, e = a, Math.abs(e) > 1 / n && (r *= n, e *= n, h *= n), s === t && (r = h);
    return r *= U(s) / e, r
}

function Z(t, s) {
    switch (t) {
        case 0:
            return 0 === s ? 1 : Math.sinh(s) / s;
        case 1:
            return 0 === s ? 0 : (Math.cosh(s) - Math.sinh(s) / s) / s;
        default:
            if (t > 0) {
                const e = function (t, s) {
                    let e, a = 1 + 1 / s,
                        h = 1;
                    for (let r = 2; r <= t; r++) e = (r + r - 1) * a / s + h, h = a, a = e;
                    return [Math.exp(-s) * e / s, Math.exp(-s) * h / s]
                }(t + 1, s);
                return 0 === s ? 0 : 1 / (s * s * (function (t, s) {
                    let e = s / (t + t + 1),
                        a = e,
                        h = a,
                        r = (t + t + 3) / s;
                    for (let t = 1; t < i && (e = 1 / (r + e), a *= r * e - 1, h += a, r += 2 / s, !(Math.abs(a / h) < n)); t++);
                    return h
                }(t + 1, s) * e[1] + e[0]))
            }
            return (t + t + 3) * Z(t + 1, s) / s + Z(t + 2, s)
    }
}
const W = [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, .001208650973866179, -5395239384953e-18];

function V(t) {
    const s = t;
    let e = t,
        a = s + 5.5;
    a = (s + .5) * Math.log(a) - a;
    let h = 1.000000000190015;
    for (let t = 0; t < 6; t++) e++, h += W[t] / e;
    return a + Math.log(2.5066282746310007 * h / s)
}

function X(t, s) {
    return Math.exp(V(t) + V(s) - V(t + s))
}

function J(t, s, e) {
    const a = t + s,
        h = t + 1,
        r = t - 1;
    let o = 1,
        u = 1 - a * e / h;
    u = Math.max(Math.abs(u), p), u = 1 / u;
    let l = u;
    for (let c = 1; c < i; c++) {
        const i = 2 * c;
        let d = c * (s - c) * e / ((r + i) * (t + i));
        u = 1 + d * u, u = Math.max(Math.abs(u), p), o = 1 + d / o, o = Math.max(Math.abs(o), p), u = 1 / u, l *= u * o, d = -(t + c) * (a + c) * e / ((t + i) * (h + i)), u = 1 + d * u, u = Math.max(Math.abs(u), p), o = 1 + d / o, o = Math.max(Math.abs(o), p), u = 1 / u;
        const M = u * o;
        if (l *= M, Math.abs(M - 1) < n) break
    }
    return l
}

function Y(t, s, e) {
    const a = e <= 0 || e >= 1 ? 0 : Math.exp(V(t + s) - V(t) - V(s) + t * Math.log(e) + s * Math.log(1 - e));
    return e < (t + 1) / (t + s + 2) ? a * J(t, s, e) / t : 1 - a * J(s, t, 1 - e) / s
}

function $(t, s) {
    if (s < 0) return 0;
    {
        let e = t,
            a = 1 / t,
            h = a;
        for (let t = 0; t < i && (e++, a *= s / e, h += a, !(Math.abs(a) < Math.abs(h) * n)); t++);
        return h * Math.exp(-s + t * Math.log(s) - V(t))
    }
}

function tt(t, s) {
    let e, a, h = s + 1 - t,
        r = 1 / p,
        o = 1 / h,
        u = o;
    for (let s = 1; s < i && (e = s * (t - s), h += 2, o = e * o + h, o = Math.max(Math.abs(o), p), o = 1 / o, r = h + e / r, r = Math.max(Math.abs(r), p), a = r * o, u *= a, !(Math.abs(a - 1) < n)); s++);
    return u * Math.exp(-s + t * Math.log(s) - V(t))
}

function st(t, s) {
    return s < t + 1 ? $(t, s) : 1 - tt(t, s)
}

function et(t, s) {
    return s < t + 1 ? 1 - $(t, s) : tt(t, s)
}
const at = [.0833333333333333, .0145833333333333, .0031498015873016, .00075248704806, .0001907475361251];

function ht(t) {
    return t < 0 ? -st(.5, t * t) : st(.5, t * t)
}

function rt(t) {
    return t < 0 ? 1 + st(.5, t * t) : et(.5, t * t)
}

function it(t) {
    let s = 0;
    const e = t * t;
    let a = .5 * Math.pow(Math.PI, 5.5);
    for (let t = at.length - 1; t >= 0; t--) s = (s + at[t] * a) * e, a /= Math.PI;
    return s = (s + 1) * t, c((s => ht(s) - t), (t => 2 * Math.exp(-t * t) / Math.sqrt(Math.PI)), s)
}

function nt(t) {
    return o((s => Math.pow(s + 1, -t))) / (1 - Math.pow(2, 1 - t))
}
const pt = [.16666666666666666, -.03333333333333333, .023809523809523808, -.03333333333333333, .07575757575757576, -.2531135531135531, 1.1666666666666667, -7.092156862745098, 54.971177944862156, -529.1242424242424, 6192.123188405797, -86580.25311355312, 1425517.1666666667, -27298231.067816094, 601580873.9006424, -15116315767.092157, 429614643061.1667, -13711655205088.334];

function ot(t, s) {
    return nt(s) - function (t, s) {
        let e = 0;
        for (let a = 0; a <= 20; a++) e += Math.pow(s + a, -t);
        e += Math.pow(s + 20, 1 - t) / (t - 1) - .5 / Math.pow(s + 20, t);
        let a = 1;
        for (let h = 1; h < pt.length; h++) {
            let r = V(t + 4 * h - 3) - V(t + 2 * h - 2);
            if (r -= (t + 2 * h - 1) * Math.log(s + 20), r -= V(2 * h + 1), a *= pt[h - 1] * Math.exp(r), e += a, Math.abs(a / e) < n) break
        }
        return e
    }(s, t + 1)
}

function ut(t, s, e) {
    return Math.abs(t) < Number.EPSILON ? 1 : Math.abs(e) < 50 ? function (t, s, e) {
        return 1 + M({
            a: t * e / s
        }, ((a, h) => (a.a *= (t + h) * e / ((s + h) * (h + 1)), a)), (t => t.a))
    }(t, s, e) : function (t, s, e) {
        const a = 1 + M({
            c: (s - t) * (1 - t) / e
        }, ((a, h) => (a.c *= (s - t + h) * (1 - t + h) / ((h + 1) * e), a)), (t => t.c));
        return Math.exp(e + (t - s) * Math.log(e) + V(s) - V(t)) * a
    }(t, s, e)
}

function lt(t, s) {
    let e = s,
        a = 0;
    for (let s = 0; s < i; s++) {
        const s = e * Math.exp(e) - t;
        if (a = s / ((e + 1) * Math.exp(e) - (e + 2) * s / (2 * e + 2)), e -= a, Math.abs(a / e) < n) break
    }
    return e
}

function ct(t) {
    return lt(t, -2)
}

function dt(t) {
    return lt(t, t < 1 ? 0 : Math.log(t))
}

function Mt(t, s) {
    return V(t) + V(s) - V(t + s)
}

function ft(t, s) {
    return V(t + 1) - V(s + 1) - V(t - s + 1)
}
const mt = {
    q(t, s, e) {
        let a = 1,
            h = Math.exp((t - 1) * Math.log(e) - e - V(t)),
            r = et(t, e),
            p = a * r,
            o = p;
        for (let u = 1; u < i && (h *= e / (t + u - 1), r += h, a *= s / u, p = a * r, o += p, !(p / o < n)); u++);
        return Math.exp(-s) * o
    },
    p(t, s, e) {
        const a = t + V(t) - Math.log(2 * Math.PI * n),
            h = Math.log(s * e),
            r = s * e;
        let i = c((s => (s + t) * Math.log(s + t) + s * Math.log(s) - 2 * s - s * h - a), (s => Math.log(s * (s + t) / r)), .5 * (Math.sqrt(t * t + 4 * s * e) - t) + 1);
        i = Math.ceil(i);
        let p = Math.exp(i * Math.log(s) - V(i + 1)),
            o = Math.exp((t + i) * Math.log(e) - e - V(t + i + 1)),
            u = st(t + i, e),
            l = p * u,
            d = l;
        for (let a = i - 1; a >= 0; a--) o *= (t + a + 1) / e, u += o, p *= (a + 1) / s, l = p * u, d += l;
        return 1 - Math.exp(-s) * d
    }
};

function gt(t, s, e) {
    const a = e > s + t ? "q" : "p";
    return 0 === e ? 1 : 0 === s ? et(t, e) : mt[a](t, s, e)
}
const _t = 1 / Math.sqrt(2 * Math.PI),
    bt = .5 / Math.PI,
    xt = [.025, .09, .15, .36, .5, .9, .99999],
    vt = [.02, .06, .09, .125, .26, .4, .6, 1.6, 1.7, 2.33, 2.4, 3.36, 3.4, 4.8],
    wt = [
        [0, 0, 1, 12, 12, 12, 12, 12, 12, 12, 12, 15, 15, 15, 8],
        [0, 1, 1, 2, 2, 4, 4, 13, 13, 14, 14, 15, 15, 15, 8],
        [1, 1, 2, 2, 2, 4, 4, 14, 14, 14, 14, 15, 15, 15, 9],
        [1, 1, 2, 4, 4, 4, 4, 6, 6, 15, 15, 15, 15, 15, 9],
        [1, 2, 2, 4, 4, 5, 5, 7, 7, 16, 16, 16, 11, 11, 10],
        [1, 2, 4, 4, 4, 5, 5, 7, 7, 16, 16, 16, 11, 11, 11],
        [1, 2, 3, 3, 5, 5, 7, 7, 16, 16, 16, 16, 16, 11, 11],
        [1, 2, 3, 3, 5, 5, 17, 17, 17, 17, 16, 16, 16, 11, 11]
    ],
    qt = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 6],
    kt = [2, 3, 4, 5, 7, 10, 12, 18, 10, 20, 30, 20, 4, 7, 8, 20, 13, 0],
    It = [.9999999999999999, -.999999999999888, .9999999999829075, -.999999998962825, .9999999666045937, -.9999993398627247, .9999912561113696, -.9999177762446338, .9994283555587014, -.99697311720723, .987514480372753, -.9591585798057288, .8924630551100671, -.76893425990464, .5889352846848469, -.38380345160440255, .203176017010453, -.08281363160700499, .024167984735759578, -.004467656666397183, .00039141169402373836],
    yt = [.0035082039676451716, .031279042338030756, .08526682628321945, .16245071730812277, .25851196049125436, .3680755384069753, .485010929056047, .6027751415261857, .7147788421775323, .814755109887601, .8971102975594897, .9572380808594426, .991788329746297],
    Nt = [.018831438115323503, .01856708624397765, .018042093461223385, .017263829606398752, .016243219975989858, .014994592034116705, .01353547446966209, .011886351605820165, .010070377242777432, .008113054574229958, .006041900952847024, .0038862217010742057, .001679303108454609];

function Pt(t) {
    return .5 * ht(t / Math.SQRT2)
}

function Tt(t) {
    return .5 * rt(t / Math.SQRT2)
}

function Et(t, s, e) {
    let a = 7;
    for (let t = 0; t < 7; t++)
        if (s <= xt[t]) {
            a = t;
            break
        } let h = 14;
    for (let s = 0; s < 14; s++)
        if (t <= vt[s]) {
            h = s;
            break
        } const r = wt[a][h],
            i = kt[r];
    switch (qt[r]) {
        case 2:
            return function (t, s, e, a) {
                const h = t * t,
                    r = -s * s;
                let i = _t * s * Math.exp(-.5 * e * e),
                    n = Pt(e) / t;
                const p = 1 / h;
                let o = 0;
                const u = a + a + 1;
                for (let t = 1; t < u; t += 2) o += n, n = p * (i - t * n), i *= r;
                return _t * Math.exp(-.5 * h) * o
            }(t, s, e, i);
        case 3:
            return function (t, s, e, a) {
                const h = t * t,
                    r = s * s;
                let i = _t * s * Math.exp(-.5 * e * e),
                    n = Pt(e) / t;
                const p = 1 / h;
                let o = 0;
                for (let t = 1, s = 1; t <= a; t++, s += 2) o += n * It[t - 1], n = p * (s * n - i), i *= r;
                return _t * Math.exp(-.5 * h) * o
            }(t, s, e, i);
        case 4:
            return function (t, s, e) {
                const a = t * t,
                    h = -s * s;
                let r = 0,
                    i = bt * s * Math.exp(-.5 * a * (1 - h)),
                    n = 1;
                const p = e + e + 1;
                for (let t = 3; t <= p; t += 2) r += i * n, n = (1 - a * n) / t, i *= h;
                return r
            }(t, s, i);
        case 5:
            return function (t, s, e) {
                const a = -.5 * t * t,
                    h = s * s;
                let r = 0;
                for (let t = 0; t < e; t++) {
                    const s = 1 + h * yt[t];
                    r += Nt[t] * Math.exp(a * s) / s
                }
                return s * r
            }(t, s, i);
        case 6:
            return function (t, s) {
                const e = Tt(t),
                    a = 1 - s,
                    h = Math.atan(a / (1 + s));
                let r = .5 * e * (1 - e);
                return 0 !== h && (r -= bt * h * Math.exp(-.5 * a * t * t / h)), r
            }(t, s);
        default:
            return function (t, s, e) {
                const a = -.5 * t * t,
                    h = Math.exp(a),
                    r = s * s;
                let i = bt * s,
                    n = h - 1,
                    p = a * h,
                    o = bt * Math.atan(s);
                for (let t = 2, s = 1; t <= e; t++, s += 2) o += n * i / s, i *= r, n = p - n, p *= a / t;
                return o
            }(t, s, i)
    }
}

function St(t, s = 0, e = 1) {
    const a = t.next(),
        h = t.next();
    return e * Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * h) + s
}

function At(t, s, e = 1) {
    if (!(s > 1)) return At(t, s + 1, e) * Math.pow(t.next(), 1 / s);
    {
        const a = s - 1 / 3,
            h = 1 / Math.sqrt(9 * a);
        let r, i, n;
        for (let s = 0; s < 1e3; s++)
            if (r = St(t), r > -1 / h && (i = Math.pow(1 + h * r, 3), n = t.next(), Math.log(n) < .5 * r * r + a * (1 - i + Math.log(i)))) return a * i / e
    }
}
class Lt extends D {
    constructor(t = 1, s = 1) {
        super("continuous", arguments.length), this.p = {
            alpha: t,
            beta: s
        }, D.validate({
            alpha: t,
            beta: s
        }, ["alpha > 0", "beta > 0"]), this.s = [{
            value: 0,
            closed: t >= 1
        }, {
            value: 1,
            closed: s >= 1
        }], this.c = [X(t, s), t - 1, s - 1]
    }
    _generator() {
        return function (t, s, e) {
            const a = At(t, s, 1),
                h = At(t, e, 1),
                r = a / (a + h);
            return Math.abs(1 - r) < Number.EPSILON ? 1 - h / a : r
        }(this.r, this.p.alpha, this.p.beta)
    }
    _pdf(t) {
        const s = Math.pow(t, this.c[1]),
            e = Math.pow(1 - t, this.c[2]);
        return Number.isFinite(s) && Number.isFinite(e) ? s * e / this.c[0] : 0
    }
    _cdf(t) {
        return Y(this.p.alpha, this.p.beta, t)
    }
}
class Ot extends D {
    constructor(t = 1) {
        super("continuous", arguments.length);
        const s = Math.round(t);
        this.p = {
            n: s
        }, D.validate({
            n: s
        }, ["n > 0"]), this.s = [{
            value: 0,
            closed: !0
        }, {
            value: s,
            closed: !0
        }], this.c = Array.from({
            length: s + 1
        }, ((t, e) => V(e + 1) + V(s - e + 1)))
    }
    _generator() {
        return d(Array.from({
            length: this.p.n
        }, (() => this.r.next())))
    }
    _pdf(t) {
        const s = t < this.p.n / 2 ? t : this.p.n - t,
            e = Array.from({
                length: Math.floor(s) + 1
            }, ((t, e) => {
                const a = (this.p.n - 1) * Math.log(s - e) - this.c[e];
                return e % 2 == 0 ? Math.exp(a) : -Math.exp(a)
            }));
        return e.sort(((t, s) => t - s)), this.p.n * d(e)
    }
    _cdf(t) {
        const s = t < this.p.n / 2 ? t : this.p.n - t,
            e = d(Array.from({
                length: Math.floor(s) + 1
            }, ((t, e) => {
                const a = this.p.n * Math.log(s - e) - this.c[e];
                return e % 2 == 0 ? Math.exp(a) : -Math.exp(a)
            }))
                .sort(((t, s) => t - s)));
        return t < this.p.n / 2 ? e : 1 - e
    }
}
class jt {
    constructor(t) {
        this.n = t.length, this.prob = [0], this.alias = [0];
        let s = 0;
        if (t.length > 1) {
            for (let e = 0; e < this.n; e++) s += t[e];
            const e = [],
                a = [],
                h = [];
            for (let r = 0; r < this.n; r++) e.push(this.n * t[r] / s), e[r] < 1 ? a.push(r) : h.push(r);
            this.prob = [], this.alias = [];
            for (let t = 0; t < this.n; t++) this.prob.push(1), this.alias.push(t);
            let r = 0,
                i = 0;
            for (; a.length > 0 && h.length > 0;) r = a.shift(), i = h.shift(), this.prob[r] = e[r], this.alias[r] = i, e[i] += e[r] - 1, e[i] < 1 ? a.push(i) : h.push(i);
            for (; h.length > 0;) i = h.shift(), this.prob[i] = 1, this.alias[i] = i;
            for (; a.length > 0;) r = a.shift(), this.prob[r] = 1, this.alias[r] = r
        }
        this.weights = t.map((t => t / s))
    }
    sample(t) {
        if (this.n <= 1) return 0;
        const s = Math.floor(t.next() * this.n);
        return t.next() < this.prob[s] ? s : this.alias[s]
    }
    weight(t) {
        return this.weights[t]
    }
}
class Rt extends D {
    constructor(t = [1, 1, 1], s = 0) {
        super("discrete", arguments.length), this.p = {
            n: t.length,
            weights: t,
            min: s
        }, D.validate({
            w_i: t.reduce(((t, s) => t && s >= 0), !0) ? 1 : -1,
            min: s
        }, ["w_i >= 0"]), this.s = [{
            value: s,
            closed: !0
        }, {
            value: Math.max(0, t.length - 1) + s,
            closed: !0
        }], this.aliasTable = new jt(t);
        let e = this.aliasTable.weight(0);
        this.pdfTable = [e], this.cdfTable = [e];
        for (let s = 1; s < t.length; s++) e = this.aliasTable.weight(s), this.pdfTable.push(e), this.cdfTable.push(this.cdfTable[s - 1] + e)
    }
    _generator() {
        return this.p.min + this.aliasTable.sample(this.r)
    }
    _pdf(t) {
        return this.p.n <= 1 ? 1 : this.pdfTable[t - this.p.min]
    }
    _cdf(t) {
        return Math.min(1, this.cdfTable[t - this.p.min])
    }
}
class Ft extends D {
    constructor(t = 0, s = 1) {
        super("continuous", arguments.length), this.p = {
            mu: t,
            sigma: s
        }, D.validate({
            mu: t,
            sigma: s
        }, ["sigma > 0"]), this.s = [{
            value: -1 / 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }], this.c = [s * Math.sqrt(2 * Math.PI), s * Math.SQRT2]
    }
    _generator() {
        return St(this.r, this.p.mu, this.p.sigma)
    }
    _pdf(t) {
        return Math.exp(-.5 * Math.pow((t - this.p.mu) / this.p.sigma, 2)) / this.c[0]
    }
    _cdf(t) {
        return .5 * (1 + ht((t - this.p.mu) / this.c[1]))
    }
    _q(t) {
        return this.p.mu + this.c[1] * it(2 * t - 1)
    }
}
class Bt extends D {
    constructor(t = !1) {
        super("discrete", arguments.length), this.TABLE_SIZE = 1e3, this.MAX_NUMBER_OF_TABLES = 100, this.logP = t, this.aliasTables = [], this.pdfTable = [], this.cdfTable = []
    }
    _pk(t) {
        throw Error("PreComputed._pk() is not implemented")
    }
    _advance(t) {
        for (let s = this.pdfTable.length; s <= t; s++) {
            const t = this._pk(s);
            this.pdfTable.push(t), "function" == typeof this._ck ? this.cdfTable.push(this._ck(s)) : this.cdfTable.push((this.cdfTable[this.cdfTable.length - 1] || 0) + (this.logP ? Math.exp(t) : t))
        }
    }
    _addAliasTable() {
        const t = this.aliasTables.length,
            s = Array.from({
                length: this.TABLE_SIZE
            }, ((s, e) => this._pdf(this.TABLE_SIZE * t + e)));
        let e = s.reduce(((t, s) => t + s), 0);
        t > 0 && (e += this.aliasTables[t - 1].total), this.aliasTables.push({
            table: new jt(s.concat([1 - e])),
            total: e
        })
    }
    _generator() {
        let t = 0;
        do {
            t >= this.aliasTables.length && this._addAliasTable();
            const s = this.aliasTables[t].table.sample(this.r);
            if (s !== this.TABLE_SIZE) return s + t * this.TABLE_SIZE;
            t++
        } while (t < this.MAX_NUMBER_OF_TABLES)
    }
    _pdf(t) {
        return t < this.pdfTable.length || this._advance(t), this.logP ? Math.exp(this.pdfTable[t]) : this.pdfTable[t]
    }
    _cdf(t) {
        return t < this.cdfTable.length ? this.cdfTable[t] : (this._advance(t), Math.min(1, this.cdfTable[t]))
    }
}
class zt extends D {
    constructor(t = 0, s = 1) {
        super("continuous", arguments.length), this.p = {
            x0: t,
            gamma: s
        }, D.validate({
            x0: t,
            gamma: s
        }, ["gamma > 0"]), this.s = [{
            value: -1 / 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }], this.c = [Math.PI * this.p.gamma]
    }
    _generator() {
        return this.p.x0 + this.p.gamma * Math.tan(Math.PI * (this.r.next() - .5))
    }
    _pdf(t) {
        const s = (t - this.p.x0) / this.p.gamma;
        return 1 / (this.c[0] * (1 + s * s))
    }
    _cdf(t) {
        return .5 + Math.atan2(t - this.p.x0, this.p.gamma) / Math.PI
    }
    _q(t) {
        return this.p.x0 + this.p.gamma * Math.tan(Math.PI * (t - .5))
    }
}
class Gt extends D {
    constructor(t = 1, s = 1) {
        super("continuous", arguments.length), this.p = {
            alpha: t,
            beta: s
        }, D.validate({
            alpha: t,
            beta: s
        }, ["alpha > 0", "beta > 0"]), this.s = [{
            value: 0,
            closed: t >= 1
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return At(this.r, this.p.alpha, this.p.beta)
    }
    _pdf(t) {
        return Math.exp(this.p.alpha * Math.log(this.p.beta) - this.p.beta * t - V(this.p.alpha)) * Math.pow(t, this.p.alpha - 1)
    }
    _cdf(t) {
        return st(this.p.alpha, this.p.beta * t)
    }
}
class Dt extends Gt {
    constructor(t = 2) {
        super(Math.round(t) / 2, .5), D.validate({
            k: t
        }, ["k > 0"])
    }
}
class Qt extends D {
    constructor(t = 1, s = 1, e = 1) {
        super("continuous", arguments.length), this.p = {
            p: t,
            a: s,
            b: e
        }, D.validate({
            p: t,
            a: s,
            b: e
        }, ["p > 0", "a > 0", "b > 0"]), this.s = [{
            value: 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return this._q(this.r.next())
    }
    _pdf(t) {
        const s = Math.pow(t / this.p.b, this.p.a);
        return this.p.a * this.p.p * Math.pow(s, this.p.p) / (t * Math.pow(s + 1, this.p.p + 1))
    }
    _cdf(t) {
        return Math.pow(1 + Math.pow(t / this.p.b, -this.p.a), -this.p.p)
    }
    _q(t) {
        return this.p.b * Math.pow(Math.pow(t, -1 / this.p.p) - 1, -1 / this.p.a)
    }
}

function Ht(t, s) {
    if (s < 30) {
        const e = Math.exp(-s);
        let a = 0,
            h = 1;
        do {
            a++, h *= t.next()
        } while (h > e);
        return a - 1
    } {
        const e = .767 - 3.36 / s,
            a = Math.PI / Math.sqrt(3 * s),
            h = a * s,
            r = Math.log(e) - s - Math.log(a);
        for (let e = 0; e < 1e3; e++) {
            let e, i, n;
            do {
                e = t.next(), i = (h - Math.log((1 - e) / e)) / a, n = Math.floor(i + .5)
            } while (n < 0);
            const p = t.next(),
                o = h - a * i;
            if (o + Math.log(p / Math.pow(1 + Math.exp(o), 2)) <= r + n * Math.log(s) - V(n + 1)) return n
        }
    }
}

function Ct(t, s = 1) {
    return -Math.log(t.next()) / s
}
class Ut extends D {
    constructor(t = 1) {
        super("continuous", arguments.length), this.p = {
            lambda: t
        }, D.validate({
            lambda: t
        }, ["lambda > 0"]), this.s = [{
            value: 0,
            closed: !0
        }, {
            value: 1 / 0,
            closed: !1
        }], this.c = [Math.exp(-t)]
    }
    _generator() {
        return Ct(this.r, this.p.lambda)
    }
    _pdf(t) {
        return this.p.lambda * Math.pow(this.c[0], t)
    }
    _cdf(t) {
        return 1 - Math.pow(this.c[0], t)
    }
    _q(t) {
        return -Math.log(1 - t) / this.p.lambda
    }
}
class Kt extends Ut {
    constructor(t = 1, s = 1) {
        super(1), this.p = Object.assign(this.p, {
            lambda2: t,
            k: s
        }), D.validate({
            lambda: t,
            k: s
        }, ["lambda > 0", "k > 0"]), this.s = [{
            value: 0,
            closed: s >= 1
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return this.p.lambda2 * Math.pow(super._generator(), 1 / this.p.k)
    }
    _pdf(t) {
        return this.p.k * Math.pow(t / this.p.lambda2, this.p.k - 1) * super._pdf(Math.pow(t / this.p.lambda2, this.p.k)) / this.p.lambda2
    }
    _cdf(t) {
        return super._cdf(Math.pow(t / this.p.lambda2, this.p.k))
    }
    _q(t) {
        return this.p.lambda2 * Math.pow(-Math.log(1 - t), 1 / this.p.k)
    }
}

function Zt(t, s = 0, e = 1) {
    return Math.max(s, Math.min(e, t))
}

function Wt(t, s, e) {
    return At(t, s / 2 + Ht(t, e / 2), .5)
}
class Vt extends D {
    constructor(t = 1, s = 1, e = 1, a = 1) {
        super("continuous", arguments.length), this.p = {
            alpha: t,
            beta: s,
            lambda1: e,
            lambda2: a
        }, D.validate({
            alpha: t,
            beta: s,
            lambda1: e,
            lambda2: a
        }, ["alpha > 0", "beta > 0", "lambda1 >= 0", "lambda2 >= 0"]), this.s = [{
            value: 0,
            closed: !1
        }, {
            value: 1,
            closed: !1
        }]
    }
    _generator() {
        const t = Wt(this.r, 2 * this.p.alpha, this.p.lambda1),
            s = Wt(this.r, 2 * this.p.beta, this.p.lambda2),
            e = t / (t + s);
        return 1 === e ? 1 - s / t : e
    }
    _pdf(t) {
        const s = t / (1 - t),
            e = this.p.alpha + this.p.beta,
            a = this.p.lambda1 / 2,
            h = this.p.lambda2 / 2,
            r = Math.round(a),
            p = Math.round(h),
            o = Math.exp(r * Math.log(a) - V(r + 1)),
            u = Math.exp(p * Math.log(h) - V(p + 1)),
            l = (p > 0 ? p : 1) * u / h,
            c = Math.pow(s, this.p.alpha + r - 2),
            d = Math.pow(1 + s, this.p.alpha + r + this.p.beta + p - 2),
            f = X(this.p.alpha + r, this.p.beta + p);
        let m = f,
            g = f,
            _ = 0,
            b = d,
            x = c * o * (r > 0 ? r : 1) / a;
        for (let t = 0; t < i; t++) {
            const i = r + t,
                o = this.p.alpha + i;
            let c = 0;
            if (b *= 1 + s, x *= s * a / (i > 0 ? i : 1), c += M({
                y: b * (1 + s),
                p: l * h / (p > 0 ? p : 1),
                b: m
            }, ((t, e) => {
                const a = p + e;
                return t.y *= 1 + s, t.p *= h / (a > 0 ? a : 1), t
            }), (t => x * t.p / (t.b * t.y)), ((t, s) => {
                const a = p + s;
                return t.b *= (this.p.beta + a) / (e + i + a), t
            })), p > 0 && (c += M({
                y: b,
                p: p * u / h,
                b: m * (e + i + p - 1) / (this.p.beta + p - 1)
            }, ((t, a) => {
                const r = p - a - 1;
                return r >= 0 ? (t.y /= 1 + s, t.p *= (r + 1) / h, t.b *= (e + i + r) / (this.p.beta + r)) : t.p = 0, t
            }), (t => x * t.p / (t.b * t.y)))), _ += c, Math.abs(c / _) < n) break;
            m *= o / (e + i + p)
        }
        if (r > 0) {
            let t = (1 + s) * d,
                i = s * c * o;
            for (let o = r - 1; o >= 0; o--) {
                let r = 0;
                const c = this.p.alpha + o;
                if (t /= 1 + s, i *= (o + 1) / (s * a), g *= (e + o + p) / c, r += M({
                    y: t * (1 + s),
                    p: l * h / (p > 0 ? p : 1),
                    b: g
                }, ((t, e) => {
                    const a = p + e;
                    return t.y *= 1 + s, t.p *= h / (a > 0 ? a : 1), t
                }), (t => i * t.p / (t.b * t.y)), ((t, s) => {
                    const a = p + s;
                    return t.b *= (this.p.beta + a) / (e + o + a), t
                })), p > 0 && (r += M({
                    y: t,
                    p: u * p / h,
                    b: g * (e + o + p - 1) / (this.p.beta + p - 1)
                }, ((t, a) => {
                    const r = p - a - 1;
                    return r >= 0 ? (t.y /= 1 + s, t.p *= (r + 1) / h, t.b *= (e + o + r) / (this.p.beta + r)) : t.p = 0, t
                }), (t => i * t.p / (t.b * t.y)))), _ += r, Math.abs(r / _) < n) break
            }
        }
        return Math.exp(-a - h) * _ / Math.pow(1 - t, 2)
    }
    _cdf(t) {
        const s = Math.round(this.p.lambda1 / 2),
            e = Math.round(this.p.lambda2 / 2),
            a = this.p.beta + e - 1,
            h = this.p.lambda1 / 2,
            r = this.p.lambda2 / 2,
            p = Math.exp(s * Math.log(h) - V(s + 1)),
            o = Math.exp(e * Math.log(r) - V(e + 1)),
            u = (e > 0 ? e : 1) * o / r,
            l = Math.pow(t, this.p.alpha + s),
            c = Math.pow(1 - t, this.p.beta + e),
            d = X(this.p.alpha + s, this.p.beta + e),
            f = Y(this.p.alpha + s, this.p.beta + e, t);
        let m = 0,
            g = (s > 0 ? s : 1) * p / h,
            _ = l,
            b = d,
            x = f;
        for (let p = 0; p < i; p++) {
            const i = s + p,
                l = this.p.alpha + i;
            let d = 0;
            if (g *= h / (i > 0 ? i : 1), d += M({
                p: u * r / (e > 0 ? e : 1),
                xb: c,
                b: b,
                ib: x
            }, ((t, s) => {
                const a = e + s;
                return t.p *= r / (a > 0 ? a : 1), t
            }), (t => g * t.p * t.ib), ((s, a) => {
                const h = e + a,
                    r = this.p.beta + h;
                return s.ib += _ * s.xb / (r * s.b), s.b *= r / (l + r), s.xb *= 1 - t, s
            })), e > 0) {
                const s = c / (1 - t),
                    h = b * (l + a) / a;
                d += M({
                    p: o * e / r,
                    xb: s,
                    b: h,
                    ib: x - _ * s / (a * h)
                }, ((s, a) => {
                    const h = e - a - 1,
                        i = this.p.beta + h;
                    return h >= 0 ? (s.p *= (h + 1) / r, s.xb /= 1 - t, s.b *= (l + i) / i, s.ib -= _ * s.xb / (i * s.b)) : (s.p = 0, s.ib = 0), s
                }), (t => g * t.p * t.ib))
            }
            if (m += d, Math.abs(d / m) < n) break;
            x -= _ * c / (l * b), b *= l / (l + this.p.beta + e), _ *= t
        }
        if (s > 0) {
            let i = p,
                g = l,
                _ = d,
                b = f;
            for (let p = s - 1; p >= 0; p--) {
                let s = 0;
                const l = this.p.alpha + p;
                if (i *= (p + 1) / h, g /= t, _ *= (l + this.p.beta + e) / l, b += g * c / (l * _), s += M({
                    p: u * r / (e > 0 ? e : 1),
                    xb: c,
                    b: _,
                    ib: b
                }, ((t, s) => {
                    const a = e + s;
                    return t.p *= r / (a > 0 ? a : 1), t
                }), (t => i * t.p * t.ib), ((s, a) => {
                    const h = e + a,
                        r = this.p.beta + h;
                    return s.ib += g * s.xb / (r * s.b), s.b *= r / (l + r), s.xb *= 1 - t, s
                })), e > 0) {
                    s += M({
                        p: o * e / r,
                        xb: c / (1 - t),
                        b: _ * (l + a) / a,
                        ib: b - g * (c / (1 - t)) / (a * (_ * (l + a) / a))
                    }, ((s, a) => {
                        const h = e - a - 1,
                            i = this.p.beta + h;
                        return h >= 0 ? (s.p *= (h + 1) / r, s.xb /= 1 - t, s.b *= (l + i) / i, s.ib -= g * s.xb / (i * s.b)) : s.p = 0, s
                    }), (t => i * t.p * t.ib))
                }
                if (m += s, Math.abs(s / m) < n) break
            }
        }
        return Zt(Math.exp(-h - r) * m)
    }
}

function Xt(t, s) {
    return At(t, s / 2, .5)
}
class Jt extends D {
    constructor(t = 1, s = 1) {
        super("continuous", arguments.length);
        const e = Math.round(t);
        this.p = {
            nu: e,
            mu: s
        }, D.validate({
            nu: e,
            mu: s
        }, ["nu > 0"]), this.s = [{
            value: -1 / 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }];
        const a = s * s / 2;
        this.c = [Math.sqrt(1 + 2 / e), Math.exp(V((e + 1) / 2) - V(e / 2) - a) / Math.sqrt(Math.PI * e)]
    }
    static fnm(t, s, e) {
        if (Math.abs(s) < Number.EPSILON) return e > 0 ? 1 - .5 * Y(t / 2, .5, t / (e * e + t)) : .5 * Y(t / 2, .5, t / (e * e + t));
        const a = e < 0 ? -s : s,
            h = .5 * (1 + ht(-a / Math.SQRT2));
        if (Math.abs(e) < Number.EPSILON) return h;
        const r = e * e / (t + e * e),
            i = a * a / 2,
            n = t / 2,
            p = Math.floor(i),
            o = V(n),
            u = V(p + 1),
            l = V(p + 1.5),
            c = Math.log(r),
            d = Math.exp(-i - V(p + 1) + p * Math.log(i)),
            f = a * Math.exp(-i - V(p + 1.5) + p * Math.log(i)) / Math.SQRT2,
            m = p + .5,
            g = p + 1,
            _ = m + n,
            b = g + n,
            x = n * Math.log(1 - r),
            v = Math.exp(V(p + n + .5) - o - l + m * c + x),
            w = Math.exp(V(p + n) - o - u + (g - 1) * c + x),
            q = Y(m, n, r),
            k = Y(g, n, r),
            I = w * r * (b - 1) / g;
        let y = M({
            p: d * i / (p + 1),
            gp: v * r * _ / (m + 1),
            ip: q - v,
            q: f * i / (p + 1.5),
            gq: I,
            iq: k - I
        }, ((t, s) => {
            const e = s + 1;
            return t.p *= i / (p + e), t.ip -= t.gp, t.gp *= r * (_ + s) / (m + e), t.q *= i / (p + e + .5), t.gq *= r * (b + s - 1) / (g + s), t.iq -= t.gq, t
        }), (t => t.p * t.ip + t.q * t.iq));
        return y += M({
            p: d,
            gp: v,
            ip: q,
            q: f,
            gq: w * r * (b - 1) / g,
            iq: k
        }, ((t, s) => {
            const e = s - 1;
            return e < p ? (t.p *= (p - e) / i, t.gp *= (m - e) / (r * (_ - s)), t.ip += t.gp, t.q *= (p - e + .5) / i, t.gq *= (g - e) / (r * (b - s)), t.iq += t.gq) : (t.p = 0, t.ip = 0, t.q = 0, t.iq = 0), t
        }), (t => t.p * t.ip + t.q * t.iq)), y = y / 2 + h, Math.min(Math.max(e >= 0 ? y : 1 - y, 0), 1)
    }
    _generator() {
        const t = St(this.r),
            s = Xt(this.r, this.p.nu);
        return (t + this.p.mu) / Math.sqrt(s / this.p.nu)
    }
    _pdf(t) {
        return Math.abs(t) < Number.EPSILON ? this.c[1] : Math.max(0, this.p.nu * (Jt.fnm(this.p.nu + 2, this.p.mu, t * this.c[0]) - Jt.fnm(this.p.nu, this.p.mu, t)) / t)
    }
    _cdf(t) {
        return Jt.fnm(this.p.nu, this.p.mu, t)
    }
}
class Yt extends Lt {
    constructor(t = 2, s = 2) {
        const e = Math.round(t),
            a = Math.round(s);
        super(e / 2, a / 2), this.p = Object.assign(this.p, {
            d1: e,
            d2: a
        }), D.validate({
            d1: e,
            d2: a
        }, ["d1 > 0", "d2 > 0"]), this.s = [{
            value: 0,
            closed: 1 !== e
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        const t = super._generator();
        return this.p.d2 * t / (this.p.d1 * (1 - t))
    }
    _pdf(t) {
        const s = this.p.d2 + this.p.d1 * t;
        return this.p.d1 * this.p.d2 * super._pdf(this.p.d1 * t / s) / Math.pow(s, 2)
    }
    _cdf(t) {
        const s = this.p.d1 * t;
        return super._cdf(1 / (1 + this.p.d2 / s))
    }
}
class $t extends Gt {
    constructor(t = 1, s = 1, e = 1) {
        super(s / e, Math.pow(t, -e)), this.p = Object.assign(this.p, {
            a: t,
            d: s,
            p: e
        }), D.validate({
            a: t,
            d: s,
            p: e
        }, ["a > 0", "d > 0", "p > 0"]), this.s = [{
            value: 0,
            closed: s >= 1 && e >= 1 && s >= e
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return Math.pow(super._generator(), 1 / this.p.p)
    }
    _pdf(t) {
        return this.p.p * Math.pow(t, this.p.p - 1) * super._pdf(Math.pow(t, this.p.p))
    }
    _cdf(t) {
        return super._cdf(Math.pow(t, this.p.p))
    }
}
class ts extends $t {
    constructor(t = 0, s = 1, e = 1) {
        super(s, 1, e), this.p = Object.assign(this.p, {
            mu: t,
            alpha2: s,
            beta2: e
        }), D.validate({
            mu: t,
            alpha: s,
            beta: e
        }, ["alpha > 0", "beta > 0"]), this.s = [{
            value: -1 / 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return (this.r.next() > .5 ? 1 : -1) * Math.abs(super._generator()) + this.p.mu
    }
    _pdf(t) {
        return super._pdf(Math.abs(t - this.p.mu)) / 2
    }
    _cdf(t) {
        return .5 * (1 + Math.sign(t - this.p.mu) * super._cdf(Math.abs(t - this.p.mu)))
    }
}
class ss extends D {
    constructor(t = 0, s = 1, e = 1) {
        super("continuous", arguments.length), this.p = {
            mu: t,
            sigma: s,
            xi: e
        }, D.validate({
            mu: t,
            sigma: s,
            xi: e
        }, ["sigma > 0"]), this.s = [{
            value: t,
            closed: !0
        }, {
            value: e < 0 ? t - s / e : 1 / 0,
            closed: e < 0
        }]
    }
    _generator() {
        return this._q(this.r.next())
    }
    _pdf(t) {
        return 0 === this.p.xi ? Math.exp(-((t - this.p.mu) / this.p.sigma)) / this.p.sigma : Math.pow(1 + this.p.xi * ((t - this.p.mu) / this.p.sigma), -1 / this.p.xi - 1) / this.p.sigma
    }
    _cdf(t) {
        return 0 === this.p.xi ? 1 - Math.exp(-((t - this.p.mu) / this.p.sigma)) : 1 - Math.pow(1 + this.p.xi * ((t - this.p.mu) / this.p.sigma), -1 / this.p.xi)
    }
    _q(t) {

        return this.p.mu + this.p.sigma * (0 === this.p.xi ? -Math.log(1 - t) : (Math.pow(1 - t, -this.p.xi) - 1) / this.p.xi)
    }
}
class es extends Ft {
    constructor(t = 0, s = 1) {
        super(t, s), this.s = [{
            value: 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return Math.exp(super._generator())
    }
    _pdf(t) {
        return super._pdf(Math.log(t)) / t
    }
    _cdf(t) {
        return super._cdf(Math.log(t))
    }
    _q(t) {
        return Math.exp(super._q(t))
    }
}
class as extends D {
    constructor(t = 1, s = 1) {
        super("continuous", arguments.length), this.p = {
            mu: t,
            lambda: s
        }, D.validate({
            mu: t,
            lambda: s
        }, ["mu > 0", "lambda > 0"]), this.s = [{
            value: 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }], this.c = [.5 * t / s, Math.exp(2 * s / t), Math.sqrt(s / (t * t))]
    }
    _generator() {
        const t = St(this.r),
            s = t * t,
            e = this.p.mu + this.c[0] * this.p.mu * s - this.c[0] * Math.sqrt(this.p.mu * s * (4 * this.p.lambda + this.p.mu * s));
        return this.r.next() > this.p.mu / (this.p.mu + e) ? this.p.mu * this.p.mu / e : e
    }
    _pdf(t) {
        return Math.sqrt(this.p.lambda / (2 * Math.PI * Math.pow(t, 3))) * Math.exp(-this.p.lambda * Math.pow(t - this.p.mu, 2) / (2 * this.p.mu * this.p.mu * t))
    }
    _cdf(t) {
        const s = Math.sqrt(this.p.lambda / t),
            e = Math.sqrt(t) * this.c[2],
            a = ht(Math.SQRT1_2 * (e - s));
        return 1 - a > Number.EPSILON ? Math.min(1, .5 * (1 + a + this.c[1] * rt(Math.SQRT1_2 * (e + s)))) : Math.min(1, .5 * (rt(Math.SQRT1_2 * (s - e)) + this.c[1] * rt(Math.SQRT1_2 * (e + s))))
    }
}
class hs extends D {
    constructor(t = 1, s = 1) {
        super("continuous", arguments.length), this.p = {
            a: t,
            b: s
        }, D.validate({
            a: t,
            b: s
        }, ["a > 0", "b > 0"]), this.s = [{
            value: 0,
            closed: !0
        }, {
            value: 1,
            closed: !0
        }]
    }
    _generator() {
        return this._q(this.r.next())
    }
    _pdf(t) {
        const s = Math.pow(t, this.p.a - 1);
        if (!Number.isFinite(s)) return 0;
        const e = Math.pow(1 - s * t, this.p.b - 1);
        return Number.isFinite(e) ? this.p.a * this.p.b * s * e : 0
    }
    _cdf(t) {
        return 1 - Math.pow(1 - Math.pow(t, this.p.a), this.p.b)
    }
    _q(t) {
        return Math.pow(1 - Math.pow(1 - t, 1 / this.p.b), 1 / this.p.a)
    }
}
class rs extends D {
    constructor(t = 0, s = 1) {
        super("continuous", arguments.length), this.p = {
            mu: t,
            b: s
        }, D.validate({
            mu: t,
            b: s
        }, ["b > 0"]), this.s = [{
            value: -1 / 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return this.p.mu + this.p.b * Math.log(this.r.next() / this.r.next())
    }
    _pdf(t) {
        return .5 * Math.exp(-Math.abs(t - this.p.mu) / this.p.b) / this.p.b
    }
    _cdf(t) {
        const s = Math.exp((t - this.p.mu) / this.p.b);
        return t < this.p.mu ? .5 * s : 1 - .5 / s
    }
    _q(t) {
        return t < .5 ? this.p.mu + this.p.b * Math.log(2 * t) : this.p.mu - this.p.b * Math.log(2 - 2 * t)
    }
}

function is(t, s, e, a) {
    for (let h = 0; h < i; h++) {
        const h = s();
        if (t.next() < e(h)) return void 0 !== a ? a(h) : h
    }
}
class ns extends D {
    constructor(t = 1, s = 1, e = 1) {
        super("continuous", arguments.length), this.p = {
            alpha: t,
            beta: s,
            lambda: e
        }, D.validate({
            alpha: t,
            beta: s,
            lambda: e
        }, ["alpha > 0", "beta > 0", "lambda >= 0"]), this.s = [{
            value: 0,
            closed: !0
        }, {
            value: 1,
            closed: !0
        }], this.c = [Math.exp(-e / 2), X(t, s)]
    }
    _generator() {
        const t = Wt(this.r, 2 * this.p.alpha, this.p.lambda),
            s = Xt(this.r, 2 * this.p.beta),
            e = t / (t + s);
        return Math.abs(1 - e) < Number.EPSILON ? 1 - s / t : e
    }
    _pdf(t) {
        const s = this.p.lambda / 2,
            e = Math.round(s);
        let a = this.p.alpha + e;
        const h = Math.exp(-s + e * Math.log(s) - V(e + 1)),
            r = Math.pow(t, a - 1),
            i = Math.pow(1 - t, this.p.beta - 1),
            n = X(a, this.p.beta);
        let p = M({
            p: h,
            xa: r,
            b: n
        }, ((t, a) => (t.p *= s / (a + e), t)), (t => t.p * t.xa * i / t.b), ((s, e) => {
            const h = a + e;
            return s.xa *= t, s.b *= h / (h + this.p.beta), s
        }));
        if (e > 0) {
            a--;
            const o = r / t,
                u = n * (a + this.p.beta) / a;
            p += M({
                p: h * e / s,
                xa: o,
                b: u
            }, ((h, r) => {
                const i = e - r - 1,
                    n = a - r;
                return i >= 0 ? (h.p /= s / (i + 1), h.xa /= t, h.b /= n / (n + this.p.beta)) : (h.p = 0, h.ib = 0), h
            }), (t => t.p * t.xa * i / t.b))
        }
        return p
    }
    _cdf(t) {
        const s = this.p.lambda / 2,
            e = Math.round(s);
        let a = this.p.alpha + e;
        const h = Math.exp(-s + e * Math.log(s) - V(e + 1)),
            r = Math.pow(t, a),
            i = Math.pow(1 - t, this.p.beta),
            n = X(a, this.p.beta),
            p = Y(a, this.p.beta, t);
        let o = M({
            p: h,
            xa: r,
            b: n,
            ib: p
        }, ((t, a) => (t.p *= s / (a + e), t)), (t => t.p * t.ib), ((s, e) => {
            const h = a + e;
            return s.ib -= s.xa * i / (h * s.b), s.xa *= t, s.b *= h / (h + this.p.beta), s
        }));
        if (e > 0) {
            a--;
            const u = r / t,
                l = n * (a + this.p.beta) / a;
            o += M({
                p: h * e / s,
                xa: u,
                b: l,
                ib: p + u * i / (a * l)
            }, ((h, r) => {
                const n = e - r - 1,
                    p = a - r;
                return n >= 0 ? (h.p /= s / (n + 1), h.xa /= t, h.b /= p / (p + this.p.beta), h.ib += h.xa * i / (p * h.b)) : (h.p = 0, h.ib = 0), h
            }), (t => t.p * t.ib))
        }
        return Math.min(1, o)
    }
}
class ps extends D {
    constructor(t = 2, s = 1) {
        super("continuous", arguments.length);
        const e = Math.round(t);
        this.p = {
            k: e,
            lambda: s
        }, D.validate({
            k: e,
            lambda: s
        }, ["k > 0", "lambda > 0"]), this.s = [{
            value: 0,
            closed: !0
        }, {
            value: 1 / 0,
            closed: !1
        }], this.c = [this.p.k % 2 == 0]
    }
    _generator() {
        return Wt(this.r, this.p.k, this.p.lambda)
    }
    _pdf(t) {
        return this.c[0] ? 2 === this.p.k && 0 === t ? .5 * Math.exp(-.5 * this.p.lambda) : .5 * Math.exp(-.5 * (t + this.p.lambda)) * Math.pow(t / this.p.lambda, this.p.k / 4 - .5) * K(Math.abs(Math.floor(this.p.k / 2) - 1), Math.sqrt(this.p.lambda * t)) : 1 === this.p.k && 0 === t ? .5 * Math.exp(-.5 * this.p.lambda) * Math.sqrt(2 / Math.PI) : .5 * Math.exp(-.5 * (t + this.p.lambda)) * Math.pow(t / this.p.lambda, this.p.k / 4 - .5) * Z(Math.floor((this.p.k - 3) / 2), Math.sqrt(this.p.lambda * t)) * Math.sqrt(2 * Math.sqrt(t * this.p.lambda) / Math.PI)
    }
    _cdf(t) {
        return 1 - gt(this.p.k / 2, this.p.lambda / 2, t / 2)
    }
}
class os extends D {
    constructor(t = 1) {
        super("continuous", arguments.length), this.p = {
            nu: t
        }, D.validate({
            nu: t
        }, ["nu > 0"]), this.s = [{
            value: -1 / 0,
            closed: !1
        }, {
            value: 1 / 0,
            closed: !1
        }]
    }
    _generator() {
        return function (t, s = .5) {
            return t.next() < s ? 1 : -1
        }(this.r) * Math.sqrt(this.p.nu * At(this.r, .5) / At(this.r, this.p.nu / 2))
    }
    _pdf(t) {
        return Math.pow(1 + t * t / this.p.nu, -.5 * (this.p.nu + 1)) / (Math.sqrt(this.p.nu) * X(.5, this.p.nu / 2))
    }
    _cdf(t) {
        return t > 0 ? 1 - .5 * Y(this.p.nu / 2, .5, this.p.nu / (t * t + this.p.nu)) : .5 * Y(this.p.nu / 2, .5, this.p.nu / (t * t + this.p.nu))
    }
}
var us = Object.freeze({
    __proto__: null,
    InvalidDiscrete: class extends D {
        constructor() {
            super("discrete", arguments.length), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
    },
    Alpha: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                alpha: t,
                beta: s
            }, D.validate({
                alpha: t,
                beta: s
            }, ["alpha > 0", "beta > 0"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [this._phi(t), this._phi(t) * Math.sqrt(2 * Math.PI)]
        }
        _phi(t) {
            return .5 * (1 + ht(t / Math.SQRT2))
        }
        _phiInv(t) {
            return Math.SQRT2 * it(2 * t - 1)
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.p.beta * Math.exp(-.5 * Math.pow(this.p.alpha - this.p.beta / t, 2)) / (t * t * this.c[1])
        }
        _cdf(t) {
            return this._phi(this.p.alpha - this.p.beta / t) / this.c[0]
        }
        _q(t) {
            return this.p.beta / (this.p.alpha - this._phiInv(t * this.c[0]))
        }
    },
    Anglit: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                beta: s
            }, D.validate({
                mu: t,
                beta: s
            }, ["beta > 0"]), this.s = [{
                value: t - Math.PI * s / 4,
                closed: !0
            }, {
                value: t + Math.PI * s / 4,
                closed: !0
            }], this.c = [2 / s, 2 * t / s, 1 / s, t / s - Math.PI / 4]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return Math.cos(this.c[0] * t - this.c[1]) / this.p.beta
        }
        _cdf(t) {
            return Math.pow(Math.sin(this.c[2] * t - this.c[3]), 2)
        }
        _q(t) {
            return this.p.mu + this.p.beta * (Math.asin(Math.sqrt(t)) - Math.PI / 4)
        }
    },
    Arcsine: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s
            }, D.validate({
                a: t,
                b: s
            }, ["a < b"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: s,
                closed: !0
            }], this.c = [1 / Math.PI, s - t, .5 * Math.PI]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.c[0] / Math.sqrt((t - this.p.a) * (this.p.b - t))
        }
        _cdf(t) {
            return 2 * this.c[0] * Math.asin(Math.sqrt((t - this.p.a) / this.c[1]))
        }
        _q(t) {
            const s = Math.sin(this.c[2] * t);
            return s * s * this.c[1] + this.p.a
        }
    },
    BaldingNichols: class extends Lt {
        constructor(t = .5, s = .5) {
            D.validate({
                F: t,
                p: s
            }, ["F > 0", "F < 1", "p > 0", "p < 1"]);
            const e = (1 - t) / t;
            super(e * s, e * (1 - s)), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1,
                closed: !1
            }]
        }
    },
    Bates: class extends Ot {
        constructor(t = 3, s = 0, e = 1) {
            const a = Math.round(t);
            super(a), this.p = Object.assign(this.p, {
                a: s,
                b: e
            }), D.validate({
                a: s,
                b: e,
                n: a
            }, ["n > 0", "a < b"]), this.s = [{
                value: s,
                closed: !0
            }, {
                value: e,
                closed: !0
            }], this.c = this.c.concat([t / (e - s), t * s / (e - s)])
        }
        _generator() {
            return super._generator() / this.c[this.p.n + 1] + this.p.a
        }
        _pdf(t) {
            return this.c[this.p.n + 1] * super._pdf(this.c[this.p.n + 1] * t - this.c[this.p.n + 2])
        }
        _cdf(t) {
            return super._cdf(this.c[this.p.n + 1] * t - this.c[this.p.n + 2])
        }
    },
    Benini: class extends D {
        constructor(t = 1, s = 1, e = 1) {
            super("continuous", arguments.length), this.p = {
                alpha: t,
                beta: s,
                sigma: e
            }, D.validate({
                alpha: t,
                beta: s,
                sigma: e
            }, ["alpha > 0", "beta > 0", "sigma > 0"]), this.s = [{
                value: e,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [t * t, 4 * s, .5 / s]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = Math.log(t / this.p.sigma),
                e = this.p.alpha + this.p.beta * s;
            return Math.exp(-s * e) * (e + this.p.beta * s) / t
        }
        _cdf(t) {
            const s = Math.log(t / this.p.sigma);
            return 1 - Math.exp(-s * (this.p.alpha + this.p.beta * s))
        }
        _q(t) {
            return this.p.sigma * Math.exp(this.c[2] * (Math.sqrt(this.c[0] - this.c[1] * Math.log(1 - t)) - this.p.alpha))
        }
    },
    BenktanderII: class extends D {
        constructor(t = 1, s = .5) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s
            }, D.validate({
                a: t,
                b: s
            }, ["a > 0", "b > 0", "b <= 1"]), this.s = [{
                value: 1,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [(1 - s) / t, Math.exp(-t / s), s / (s - 1), Math.log(t / (1 - s)) + t / (1 - s), 1 - s < Number.EPSILON]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            if (this.c[4]) return this.p.a * Math.exp(this.p.a * (1 - t));
            const s = Math.pow(t, this.p.b);
            return Math.exp(this.p.a * (1 - s) / this.p.b) * Math.pow(t, this.p.b - 2) * (this.p.a * s - this.p.b + 1)
        }
        _cdf(t) {
            return this.c[4] ? 1 - Math.exp(this.p.a * (1 - t)) : 1 - Math.pow(t, this.p.b - 1) * Math.exp(this.p.a * (1 - Math.pow(t, this.p.b)) / this.p.b)
        }
        _q(t) {
            if (this.c[4]) return 1 - Math.log(1 - t) / this.p.a;
            const s = dt(Math.pow(this.c[1] * (1 - t), this.c[2]) / this.c[0]);
            if (Number.isFinite(s)) return Math.pow(this.c[0] * s, 1 / this.p.b);
            {
                const s = this.c[3] + this.c[2] * Math.log(1 - t),
                    e = Math.log(s);
                return Math.pow(this.c[0] * (s - e + e / s), 1 / this.p.b)
            }
        }
    },
    Bernoulli: class extends Rt {
        constructor(t = .5) {
            super([1 - t, t]), D.validate({
                p: t
            }, ["p >= 0", "p <= 1"])
        }
        _q(t) {
            return t > 1 - this.p.p ? 1 : 0
        }
    },
    Beta: Lt,
    BetaBinomial: class extends Rt {
        constructor(t = 10, s = 1, e = 2) {
            const a = Math.round(t);
            super(Array.from({
                length: a + 1
            }, ((t, h) => Math.exp(ft(a, h) + Mt(h + s, a - h + e) - Mt(s, e))))), D.validate({
                n: a,
                alpha: s,
                beta: e
            }, ["n >= 0", "alpha > 0", "beta > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: a,
                closed: !0
            }]
        }
    },
    BetaPrime: class extends Lt {
        constructor(t = 2, s = 2) {
            super(t, s), this.s = [{
                value: 0,
                closed: t >= 1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return At(this.r, this.p.alpha, 1) / At(this.r, this.p.beta, 1)
        }
        _pdf(t) {
            return super._pdf(t / (1 + t)) / Math.pow(1 + t, 2)
        }
        _cdf(t) {
            return super._cdf(t / (1 + t))
        }
    },
    BetaRectangular: class extends Lt {
        constructor(t = 1, s = 1, e = .5, a = 0, h = 1) {
            super(t, s), this.p = Object.assign(this.p, {
                theta: e,
                a: a,
                b: h
            }), D.validate({
                theta: e,
                a: a,
                b: h
            }, ["theta >= 0", "theta <= 1", "a < b"]), this.s = [{
                value: a,
                closed: !0
            }, {
                value: h,
                closed: !0
            }], this.c = this.c.concat([h - a, 1 - e])
        }
        _generator() {
            return this.r.next() < this.p.theta ? super._generator() * this.c[3] + this.p.a : this.r.next() * this.c[3] + this.p.a
        }
        _pdf(t) {
            return (this.p.theta * super._pdf((t - this.p.a) / this.c[3]) + this.c[4]) / this.c[3]
        }
        _cdf(t) {
            const s = t - this.p.a;
            return this.p.theta * super._cdf(s / this.c[3]) + this.c[4] * s / this.c[3]
        }
    },
    Binomial: class extends Rt {
        constructor(t = 100, s = .5) {
            const e = Math.round(t);
            super(Array.from({
                length: e + 1
            }, ((e, a) => Math.exp(ft(t, a) + a * Math.log(s) + (t - a) * Math.log(1 - s))))), D.validate({
                n: e,
                p: s
            }, ["n >= 0", "p >= 0", "p <= 1"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: e,
                closed: !0
            }]
        }
    },
    BirnbaumSaunders: class extends Ft {
        constructor(t = 0, s = 1, e = 1) {
            super(), this.p = Object.assign(this.p, {
                mu2: t,
                beta: s,
                gamma: e
            }), D.validate({
                mu: t,
                beta: s,
                gamma: e
            }, ["beta > 0", "gamma > 0"]), this.s = [{
                value: t,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            const t = this.p.gamma * super._generator();
            return .25 * this.p.beta * Math.pow(t + Math.sqrt(4 + Math.pow(t, 2)), 2) + this.p.mu2
        }
        _pdf(t) {
            const s = Math.sqrt((t - this.p.mu2) / this.p.beta);
            return (s + 1 / s) * super._pdf((s - 1 / s) / this.p.gamma) / (2 * this.p.gamma * (t - this.p.mu2))
        }
        _cdf(t) {
            const s = Math.sqrt((t - this.p.mu2) / this.p.beta);
            return super._cdf((s - 1 / s) / this.p.gamma)
        }
        _q(t) {
            const s = this.p.gamma * super._q(t);
            return .25 * this.p.beta * Math.pow(s + Math.sqrt(4 + Math.pow(s, 2)), 2) + this.p.mu2
        }
    },
    Borel: class extends Bt {
        constructor(t = .5) {
            super(!0), this.p = {
                mu: t
            }, D.validate({
                mu: t
            }, ["mu >= 0", "mu <= 1"]), this.s = [{
                value: 1,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _pk(t) {
            return t < 1 ? -1 / 0 : this.p.mu < Number.EPSILON ? 1 === t ? 0 : -1 / 0 : (t - 1) * Math.log(this.p.mu * t) - this.p.mu * t - V(t + 1)
        }
    },
    BorelTanner: class extends Bt {
        constructor(t = .5, s = 2) {
            super();
            const e = Math.round(s);
            this.p = {
                mu: t,
                n: e
            }, D.validate({
                mu: t,
                n: e
            }, ["mu >= 0", "mu <= 1", "n > 0"]), this.s = [{
                value: e,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _pk(t) {
            if (t < this.p.n) return 0;
            if (this.p.mu < Number.EPSILON) return t === this.p.n ? 1 : 0;
            const s = t - this.p.n;
            return this.p.n / t * Math.exp(s * Math.log(this.p.mu * t) - this.p.mu * t - V(s + 1))
        }
    },
    BoundedPareto: class extends D {
        constructor(t = 1, s = 10, e = 1) {
            super("continuous", arguments.length), this.p = {
                L: t,
                H: s,
                alpha: e
            }, D.validate({
                L: t,
                H: s,
                alpha: e
            }, ["L > 0", "H > 0", "L < H", "alpha > 0"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: s,
                closed: !0
            }], this.c = [Math.pow(t, e), Math.pow(s, e), 1 - Math.pow(t / s, e)]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.p.alpha * Math.pow(this.p.L / t, this.p.alpha) / (t * this.c[2])
        }
        _cdf(t) {
            return (1 - this.c[0] * Math.pow(t, -this.p.alpha)) / this.c[2]
        }
        _q(t) {
            return Math.pow((this.c[1] + t * (this.c[0] - this.c[1])) / (this.c[0] * this.c[1]), -1 / this.p.alpha)
        }
    },
    Bradford: class extends D {
        constructor(t = 1) {
            super("continuous", arguments.length), this.p = {
                c: t
            }, D.validate({
                c: t
            }, ["c > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1,
                closed: !0
            }];
            const s = Math.log(1 + t);
            this.c = [s, t / s]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.c[1] / (1 + this.p.c * t)
        }
        _cdf(t) {
            return Math.log(1 + this.p.c * t) / this.c[0]
        }
        _q(t) {
            return (Math.exp(this.c[0] * t) - 1) / this.p.c
        }
    },
    Burr: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                c: t,
                k: s
            }, D.validate({
                c: t,
                k: s
            }, ["c > 0", "k > 0"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [t * s, -1 / s, 1 / t]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = Math.pow(t, this.p.c);
            return this.c[0] * s / (t * Math.pow(1 + s, this.p.k + 1))
        }
        _cdf(t) {
            return 1 - Math.pow(1 + Math.pow(t, this.p.c), -this.p.k)
        }
        _q(t) {
            return Math.pow(Math.pow(1 - t, this.c[1]) - 1, this.c[2])
        }
    },
    Categorical: Rt,
    Cauchy: zt,
    Chi: class extends Dt {
        constructor(t = 2) {
            super(t);
            const s = Math.round(t);
            this.p = Object.assign(this.p, {
                k: s
            }), D.validate({
                k: s
            }, ["k > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Math.sqrt(super._generator())
        }
        _pdf(t) {
            return 1 === this.p.k && 0 === t ? Math.sqrt(2 / Math.PI) : 2 * t * super._pdf(t * t)
        }
        _cdf(t) {
            return super._cdf(t * t)
        }
    },
    Chi2: Dt,
    Dagum: Qt,
    Degenerate: class extends D {
        constructor(t = 0) {
            super("continuous", arguments.length), this.p = {
                x0: t
            }, this.s = [{
                value: t,
                closed: !0
            }, {
                value: t,
                closed: !0
            }]
        }
        _generator() {
            return this.p.x0
        }
        _pdf() {
            return 1
        }
    },
    Delaporte: class extends Bt {
        constructor(t = 1, s = 1, e = 1) {
            super(!0), this.p = {
                alpha: t,
                beta: s,
                lambda: e
            }, D.validate({
                alpha: t,
                beta: s,
                lambda: e
            }, ["alpha > 0", "beta > 0", "lambda > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [s / (e * (1 + s)), -e - t * Math.log(1 + s), Math.log(e)]
        }
        _pk(t) {
            let s = t,
                e = 1,
                a = e;
            for (let h = 1; h < t; h++) e *= (this.p.alpha + h - 1) * this.c[0] * s / h, s--, a += e;
            return t > 0 && (e *= (this.p.alpha + t - 1) * this.c[0] / t, a += e), Math.log(a) + t * this.c[2] - V(t + 1) + this.c[1]
        }
        _generator() {
            const t = At(this.r, this.p.alpha, 1 / this.p.beta);
            return Ht(this.r, this.p.lambda + t)
        }
    },
    DiscreteUniform: class extends D {
        constructor(t = 0, s = 100) {
            super("discrete", arguments.length);
            const e = Math.round(t),
                a = Math.round(s);
            this.p = {
                xmin: e,
                xmax: a
            }, D.validate({
                xmin: e,
                xmax: a
            }, ["xmin <= xmax"]), this.s = [{
                value: this.p.xmin,
                closed: !0
            }, {
                value: this.p.xmax,
                closed: !0
            }], this.c = [this.p.xmax - this.p.xmin + 1]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf() {
            return 1 / this.c[0]
        }
        _cdf(t) {
            return (1 + t - this.p.xmin) / this.c[0]
        }
        _q(t) {
            return Math.floor(t * this.c[0]) + this.p.xmin
        }
    },
    DiscreteWeibull: class extends D {
        constructor(t = .5, s = 1) {
            super("discrete", arguments.length), this.p = {
                q: t,
                beta: s
            }, D.validate({
                q: t,
                beta: s
            }, ["q > 0", "q < 1", "beta > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return Math.pow(this.p.q, Math.pow(t, this.p.beta)) - Math.pow(this.p.q, Math.pow(t + 1, this.p.beta))
        }
        _cdf(t) {
            return 1 - Math.pow(this.p.q, Math.pow(t + 1, this.p.beta))
        }
        _q(t) {
            return Math.floor(Math.pow(Math.log(1 - t) / Math.log(this.p.q), 1 / this.p.beta))
        }
    },
    DoubleGamma: class extends Gt {
        constructor(t = 1, s = 1) {
            super(t, s), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return super._generator() * (this.r.next() < .5 ? -1 : 1)
        }
        _pdf(t) {
            return super._pdf(Math.abs(t)) / 2
        }
        _cdf(t) {
            const s = super._cdf(Math.abs(t));
            return (t > 0 ? 1 + s : 1 - s) / 2
        }
    },
    DoubleWeibull: class extends Kt {
        constructor(t = 1, s = 1) {
            super(t, s), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return super._generator() * (this.r.next() < .5 ? -1 : 1)
        }
        _pdf(t) {
            return super._pdf(Math.abs(t)) / 2
        }
        _cdf(t) {
            const s = super._cdf(Math.abs(t));
            return (t > 0 ? 1 + s : 1 - s) / 2
        }
        _q(t) {
            return t > .5 ? super._q(2 * t - 1) : -super._q(1 - 2 * t)
        }
    },
    DoublyNoncentralBeta: Vt,
    DoublyNoncentralF: class extends Vt {
        constructor(t = 2, s = 2, e = 1, a = 1) {
            super(t / 2, s / 2, e, a);
            const h = Math.round(t),
                r = Math.round(s);
            this.p = Object.assign(this.p, {
                d1: h,
                d2: r
            }), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            const t = super._generator();
            return this.p.d2 * t / (this.p.d1 * (1 - t))
        }
        _pdf(t) {
            const s = this.p.d1 / this.p.d2;
            return s * super._pdf(t / (1 / s + t)) / Math.pow(1 + s * t, 2)
        }
        _cdf(t) {
            return super._cdf(t / (this.p.d2 / this.p.d1 + t))
        }
    },
    DoublyNoncentralT: class extends D {
        constructor(t = 1, s = 1, e = 1) {
            super("continuous", arguments.length);
            const a = Math.round(t);
            this.p = {
                nu: a,
                mu: s,
                theta: e
            }, D.validate({
                nu: a,
                mu: s,
                theta: e
            }, ["nu > 0", "theta >= 0"]), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [-.5 * (e + s * s + Math.log(Math.PI * a)) - V(a / 2), Math.exp(-e / 2)]
        }
        _findStartIndex(t) {
            let s = 1,
                e = t(s),
                a = 2,
                h = t(a),
                r = 3,
                i = t(r);
            for (; h >= e && (r = s + a, i = t(r), i >= h);) s = a, a = r, e = h, h = i;
            for (; s !== a && (r = Math.floor((s + a) / 2), i = t(r), r !== s && r !== a);) e > h ? (h = i, a = r) : (e = i, s = r);
            return r
        }
        _f11Forward(t, s, e, a, h) {
            return ((2 * e - a + h) * t + (a - e) * s) / e
        }
        _f11Backward(t, s, e, a, h) {
            return (e * s - (2 * e - a + h) * t) / (a - e)
        }
        _logA(t, s) {
            const e = 1 + t * t / this.p.nu,
                a = (this.p.nu + s + 1) / 2;
            return s * Math.log(Math.abs(t * this.p.mu / Math.sqrt(this.p.nu / 2))) + V(a) - a * Math.log(e) - V(s + 1) + Math.log(ut(a, this.p.nu / 2, this.p.theta / (2 * e)))
        }
        _generator() {
            const t = St(this.r, this.p.mu),
                s = Wt(this.r, this.p.nu, this.p.theta);
            return t / Math.sqrt(s / this.p.nu)
        }
        _pdf(t) {
            const s = this.p.nu / 2,
                e = 1 + t * t / this.p.nu,
                a = Math.sqrt(e),
                h = Math.log(e),
                r = Math.abs(t * this.p.mu / Math.sqrt(s)),
                i = Math.log(r),
                n = this.p.theta / (2 * e),
                p = this._findStartIndex((s => this._logA(t, s)));
            let u = 0;
            if (t * this.p.mu >= 0) {
                let t = (this.p.nu + p + 1) / 2,
                    e = Math.exp(this.c[0] + p * i - V(p + 1) - t * h),
                    o = C(t),
                    l = ut(t, s, n);
                u = M({
                    gp: e,
                    gk: [o, C(t - .5)],
                    g: e * o,
                    f1: [l, ut(t - .5, s, n)],
                    f2: [ut(t - 1, s, n), ut(t - 1.5, s, n)],
                    f: l
                }, ((t, e) => {
                    const h = p + e,
                        i = e % 2,
                        o = (this.p.nu + h + 1) / 2;
                    return t.gp *= r / (h * a), t.gk[i] *= o - 1, t.g = t.gp * t.gk[i], t.f = this._f11Forward(t.f1[i], t.f2[i], o - 1, s, n), t.f2[i] = t.f1[i], t.f1[i] = t.f, t
                }), (t => t.g * t.f)), p > 0 && (t -= .5, e *= p * a / r, o = C(t), l = ut(t, s, n), u += M({
                    gp: e,
                    gk: [o, C(t + .5)],
                    g: e * o,
                    f1: [l, ut(t + .5, this.p.nu / 2, n)],
                    f2: [ut(t + 1, this.p.nu / 2, n), ut(t + 1.5, this.p.nu / 2, n)],
                    f: l
                }, ((t, e) => {
                    const h = p - e;
                    if (h > 0) {
                        const i = e % 2,
                            p = (this.p.nu + h) / 2;
                        t.gp /= r / (h * a), t.gk[i] /= p, t.g = t.gp * t.gk[i], t.f = this._f11Backward(t.f1[i], t.f2[i], p + 1, s, n), t.f2[i] = t.f1[i], t.f1[i] = t.f
                    } else t.g = 0, t.f = 0;
                    return t
                }), (t => t.g * t.f)))
            } else {
                let t = (this.p.nu + p + 1) / 2;
                const e = Math.exp(this.c[0] + (p - 1) * i - V(p) - (t - .5) * h),
                    l = C(t - 1),
                    c = C(t - .5);
                let d = [l, c],
                    M = [ut(t - 2, s, n), ut(t - 1.5, s, n)],
                    f = [ut(t - 1, s, n), ut(t - .5, s, n)],
                    m = e;
                if (u += o((t => {
                    const e = p + t,
                        h = t % 2,
                        i = (this.p.nu + e + 1) / 2;
                    m *= r / (e * a), d[h] *= i - 1;
                    const o = m * d[h],
                        u = this._f11Forward(f[h], M[h], i - 1, s, n);
                    return M[h] = f[h], f[h] = u, o * u
                })), p > 0) {
                    t -= .5;
                    let h = e * r / (p * a);
                    d = [c * t, l * (t - .5)], M = [ut(t + 2, s, n), ut(t + 1.5, s, n)], f = [ut(t + 1, s, n), ut(t + .5, s, n)], u -= o((t => {
                        const e = p - t,
                            i = t % 2,
                            o = (this.p.nu + e) / 2;
                        let u = 0;
                        if (e > 0) {
                            h /= r / (e * a), d[i] /= o;
                            const t = h * d[i],
                                p = this._f11Backward(f[i], M[i], o + 1, s, n);
                            M[i] = f[i], f[i] = p, u = t * p
                        }
                        return u
                    }))
                }
            }
            return Math.abs(u)
        }
        _cdf(t) {
            const s = Math.abs(t),
                e = t < 0 ? -this.p.mu : this.p.mu,
                a = M({
                    p: this.c[1],
                    f: Jt.fnm(this.p.nu, e, s)
                }, ((t, a) => {
                    const h = 2 * a;
                    return t.p *= this.p.theta / h, t.f = Jt.fnm(this.p.nu + h, e, s * Math.sqrt(1 + h / this.p.nu)), t
                }), (t => t.p * t.f));
            return Zt(t < 0 ? 1 - a : a)
        }
    },
    Erlang: class extends Gt {
        constructor(t = 1, s = 1) {
            const e = Math.round(t);
            super(e, s), D.validate({
                k: e,
                lambda: s
            }, ["k > 0", "lambda > 0"])
        }
    },
    Exponential: Ut,
    ExponentialLogarithmic: class extends D {
        constructor(t = .5, s = 1) {
            super("continuous", arguments.length), this.p = {
                p: t,
                beta: s
            }, D.validate({
                p: t,
                beta: s
            }, ["p > 0", "p < 1", "beta > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = (1 - this.p.p) * Math.exp(-this.p.beta * t);
            return this.p.beta * s / ((s - 1) * Math.log(this.p.p))
        }
        _cdf(t) {
            return 1 - Math.log(1 - (1 - this.p.p) * Math.exp(-this.p.beta * t)) / Math.log(this.p.p)
        }
        _q(t) {
            return (Math.log(1 - this.p.p) - Math.log(1 - Math.pow(this.p.p, 1 - t))) / this.p.beta
        }
    },
    F: Yt,
    FlorySchulz: class extends D {
        constructor(t = .5) {
            super("discrete", arguments.length), this.p = {
                a: t
            }, D.validate({
                a: t
            }, ["a > 0", "a < 1"]), this.s = [{
                value: 1,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !0
            }], this.c = [1 - t]
        }
        _generator() {
            let t = 1;
            const s = this.r.next();
            let e = 1 + this.p.a,
                a = this.c[0];
            for (; s < a * e;) e += this.p.a, a *= this.c[0], t++;
            return t
        }
        _pdf(t) {
            return this.p.a * this.p.a * t * Math.pow(this.c[0], t - 1)
        }
        _cdf(t) {
            return 1 - Math.pow(this.c[0], t) * (1 + this.p.a * t)
        }
    },
    Frechet: class extends D {
        constructor(t = 1, s = 1, e = 0) {
            super("continuous", arguments.length), this.p = {
                alpha: t,
                s: s,
                m: e
            }, D.validate({
                alpha: t,
                s: s,
                m: e
            }, ["alpha > 0", "s > 0"]), this.s = [{
                value: e,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = (t - this.p.m) / this.p.s;
            return this.p.alpha * Math.exp(-Math.log(s) * (1 + this.p.alpha) - Math.pow(s, -this.p.alpha)) / this.p.s
        }
        _cdf(t) {
            return Math.exp(-Math.pow((t - this.p.m) / this.p.s, -this.p.alpha))
        }
        _q(t) {
            return this.p.m + this.p.s * Math.pow(-Math.log(t), -1 / this.p.alpha)
        }
    },
    FisherZ: class extends Yt {
        constructor(t = 1, s = 1) {
            super(Math.round(t) / 2, Math.round(s) / 2), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return .5 * Math.log(super._generator())
        }
        _pdf(t) {
            const s = Math.exp(2 * t);
            return 2 * super._pdf(s) * s
        }
        _cdf(t) {
            return super._cdf(Math.exp(2 * t))
        }
    },
    Gamma: Gt,
    GammaGompertz: class extends D {
        constructor(t = 1, s = 1, e = 1) {
            super("continuous", arguments.length), this.p = {
                b: t,
                s: s,
                beta: e
            }, D.validate({
                b: t,
                s: s,
                beta: e
            }, ["b > 0", "s > 0", "beta > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = Math.exp(this.p.b * t),
                e = Math.pow(this.p.beta - 1 + s, this.p.s + 1);
            return Number.isFinite(s) && Number.isFinite(e) ? this.p.b * this.p.s * Math.pow(this.p.beta, this.p.s) * s / e : 0
        }
        _cdf(t) {
            return 1 - Math.pow(1 + (Math.exp(this.p.b * t) - 1) / this.p.beta, -this.p.s)
        }
        _q(t) {
            return Math.log(1 + this.p.beta * (Math.pow(1 - t, -1 / this.p.s) - 1)) / this.p.b
        }
    },
    GeneralizedExponential: class extends D {
        constructor(t = 1, s = 1, e = 1) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s,
                c: e
            }, D.validate({
                a: t,
                b: s,
                c: e
            }, ["a > 0", "b > 0", "c > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = this.p.b * (1 - Math.exp(-this.p.c * t));
            return (this.p.a + s) * Math.exp(-(this.p.a + this.p.b) * t + s / this.p.c)
        }
        _cdf(t) {
            return 1 - Math.exp(-(this.p.a + this.p.b) * t + this.p.b * (1 - Math.exp(-this.p.c * t)) / this.p.c)
        }
        _q(t) {
            const s = this.p.a + this.p.b,
                e = dt(-this.p.b * Math.exp((this.p.c * Math.log(1 - t) - this.p.b) / s) / s);
            return (this.p.b * e + this.p.a * e + this.p.b - this.p.c * Math.log(1 - t)) / (this.p.c * s)
        }
    },
    GeneralizedExtremeValue: class extends D {
        constructor(t = 2) {
            super("continuous", arguments.length), this.p = {
                c: t
            }, D.validate({
                c: t
            }, ["c != 0"]), this.s = [{
                value: t > 0 ? -1 / 0 : 1 / t,
                closed: t < 0
            }, {
                value: t > 0 ? 1 / t : 1 / 0,
                closed: t > 0
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return Math.exp(-Math.pow(1 - this.p.c * t, 1 / this.p.c)) * Math.pow(1 - this.p.c * t, 1 / this.p.c - 1)
        }
        _cdf(t) {
            return Math.exp(-Math.pow(1 - this.p.c * t, 1 / this.p.c))
        }
        _q(t) {
            return (1 - Math.pow(-Math.log(t), this.p.c)) / this.p.c
        }
    },
    GeneralizedGamma: $t,
    GeneralizedHermite: class extends Bt {
        constructor(t = 1, s = 1, e = 2) {
            super(!0);
            const a = Math.round(e);
            this.p = {
                a1: t,
                a2: s,
                m: a
            }, D.validate({
                a1: t,
                a2: s,
                m: a
            }, ["a1 > 0", "a2 > 0", "m > 1"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [Math.log(t + e * s), (t + e * e * s) / (t + e * s), -t - s]
        }
        _pk(t) {
            return 0 === t ? this.c[2] : t < this.p.m ? this.c[2] + t * this.c[0] - V(t + 1) + t * Math.log((this.p.m - this.c[1]) / (this.p.m - 1)) : this.c[0] + Math.log((this.c[1] - 1) * Math.exp(this.pdfTable[t - this.p.m]) + (this.p.m - this.c[1]) * Math.exp(this.pdfTable[t - 1])) - Math.log(t * (this.p.m - 1))
        }
        _generator() {
            return Ht(this.r, this.p.a1) + this.p.m * Ht(this.r, this.p.a2)
        }
    },
    GeneralizedLogistic: class extends D {
        constructor(t = 0, s = 1, e = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                s: s,
                c: e
            }, D.validate({
                mu: t,
                s: s,
                c: e
            }, ["s > 0", "c > 0"]), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = Math.exp(-(t - this.p.mu) / this.p.s);
            return Number.isFinite(s * s) ? this.p.c * s / (this.p.s * Math.pow(1 + s, this.p.c + 1)) : 0
        }
        _cdf(t) {
            return 1 / Math.pow(1 + Math.exp(-(t - this.p.mu) / this.p.s), this.p.c)
        }
        _q(t) {
            return this.p.mu - this.p.s * Math.log(Math.pow(t, -1 / this.p.c) - 1)
        }
    },
    GeneralizedNormal: ts,
    GeneralizedPareto: ss,
    Geometric: class extends D {
        constructor(t = .5) {
            super("discrete", arguments.length), this.p = {
                p: t
            }, D.validate({
                p: t
            }, ["p > 0", "p <= 1"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.p.p * Math.pow(1 - this.p.p, t)
        }
        _cdf(t) {
            return 1 - Math.pow(1 - this.p.p, t + 1)
        }
        _q(t) {
            return Math.floor(Math.log(1 - t) / Math.log(1 - this.p.p))
        }
    },
    Gilbrat: class extends es {
        constructor() {
            super(0, 1)
        }
    },
    Gompertz: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                eta: t,
                b: s
            }, D.validate({
                eta: t,
                b: s
            }, ["eta > 0", "b > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.p.b * this.p.eta * Math.exp(this.p.eta + this.p.b * t - this.p.eta * Math.exp(this.p.b * t))
        }
        _cdf(t) {
            return 1 - Math.exp(-this.p.eta * (Math.exp(this.p.b * t) - 1))
        }
        _q(t) {
            return Math.log(1 - Math.log(1 - t) / this.p.eta) / this.p.b
        }
    },
    Gumbel: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                beta: s
            }, D.validate({
                mu: t,
                beta: s
            }, ["beta > 0"]), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = (t - this.p.mu) / this.p.beta;
            return Math.exp(-(s + Math.exp(-s))) / this.p.beta
        }
        _cdf(t) {
            return Math.exp(-Math.exp(-(t - this.p.mu) / this.p.beta))
        }
        _q(t) {
            return this.p.mu - this.p.beta * Math.log(-Math.log(t))
        }
    },
    HalfGeneralizedNormal: class extends ts {
        constructor(t = 1, s = 1) {
            super(0, t, s), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Math.abs(super._generator())
        }
        _pdf(t) {
            return 2 * super._pdf(t)
        }
        _cdf(t) {
            return 2 * super._cdf(t) - 1
        }
    },
    HalfLogistic: class extends D {
        constructor() {
            super("continuous", arguments.length), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = Math.exp(-t);
            return 2 * s / Math.pow(1 + s, 2)
        }
        _cdf(t) {
            const s = Math.exp(-t);
            return (1 - s) / (1 + s)
        }
        _q(t) {
            return -Math.log((1 - t) / (1 + t))
        }
    },
    HalfNormal: class extends Ft {
        constructor(t = 1) {
            super(0, t), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Math.abs(super._generator())
        }
        _pdf(t) {
            return 2 * super._pdf(t)
        }
        _cdf(t) {
            return 2 * super._cdf(t) - 1
        }
        _q(t) {
            return 1.414213562373095 * this.p.sigma * it(t)
        }
    },
    HeadsMinusTails: class extends Bt {
        constructor(t = 10) {
            super(!0);
            const s = Math.round(t);
            this.p = {
                n: s
            }, D.validate({
                n: s
            }, ["n >= 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 2 * s,
                closed: !0
            }], this.c = [2 * s * Math.log(.5)]
        }
        _pk(t) {
            return 0 === t ? this.c[0] + ft(2 * this.p.n, this.p.n) : t % 2 == 0 ? Math.log(2) + this.c[0] + ft(2 * this.p.n, Math.round(t / 2) + this.p.n) : -1 / 0
        }
        _generator() {
            let t = 0;
            for (let s = 0; s < 2 * this.p.n; s++) t += this.r.next() > .5 ? 0 : 1;
            return Math.abs(2 * t - 2 * this.p.n)
        }
    },
    Hoyt: class extends D {
        constructor(t = .5, s = 1) {
            super("continuous", arguments.length), this.p = {
                q: t,
                omega: s
            }, D.validate({
                q: t,
                omega: s
            }, ["q > 0", "q <= 1", "omega > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [2 * Math.pow(this.p.q, this.p.q) / Math.pow(this.p.omega, this.p.q)]
        }
        _generator() {
            return Math.sqrt(At(this.r, this.p.q, this.p.q / this.p.omega))
        }
        _pdf(t) {
            const s = Math.pow(t, 2 * this.p.q - 1);
            return Number.isFinite(s) ? 2 * Math.exp(this.p.q * Math.log(this.p.q) - this.p.q * t * t / this.p.omega - V(this.p.q) - this.p.q * Math.log(this.p.omega)) * s : 0
        }
        _cdf(t) {
            return st(this.p.q, this.p.q * t * t / this.p.omega)
        }
    },
    HyperbolicSecant: class extends D {
        constructor() {
            super("continuous", arguments.length), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return .5 / Math.cosh(.5 * Math.PI * t)
        }
        _cdf(t) {
            return 2 * Math.atan(Math.exp(.5 * Math.PI * t)) / Math.PI
        }
        _q(t) {
            return 2 * Math.log(Math.tan(.5 * Math.PI * t)) / Math.PI
        }
    },
    Hyperexponential: class extends D {
        constructor(t = [{
            weight: 1,
            rate: 1
        }, {
            weight: 1,
            rate: 1
        }]) {
            super("continuous", t.length);
            const s = t.map((t => t.weight)),
                e = s.reduce(((t, s) => s + t), 0);
            this.p = Object.assign(this.p, {
                weights: s.map((t => t / e)),
                rates: t.map((t => t.rate)),
                n: s.length
            }), D.validate({
                lambda_i: t.reduce(((t, s) => t * s.rate), 1),
                n: s.length
            }, ["lambda_i > 0", "n > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.aliasTable = new jt(t.map((t => t.weight)))
        }
        _generator() {
            const t = this.aliasTable.sample(this.r);
            return Ct(this.r, this.p.rates[t])
        }
        _pdf(t) {
            return d(this.p.rates.map(((s, e) => this.p.weights[e] * s * Math.exp(-s * t))))
        }
        _cdf(t) {
            return Math.min(d(this.p.rates.map(((s, e) => this.p.weights[e] * (1 - Math.exp(-s * t))))), 1)
        }
    },
    Hypergeometric: class extends Rt {
        constructor(t = 10, s = 5, e = 5) {
            const a = Math.round(t),
                h = Math.round(s),
                r = Math.round(e),
                i = [],
                n = Math.max(0, r + h - a),
                p = Math.min(r, h);
            for (let t = n; t <= p; t++) i.push(Math.exp(ft(h, t) + ft(a - h, r - t) - ft(a, r)));
            super(i), D.validate({
                N: a,
                K: h,
                n: r
            }, ["N > 0", "K >= 0", "K <= N", "n >= 0", "n <= N"])
        }
    },
    InverseChi2: class extends D {
        constructor(t = 1) {
            super("continuous", arguments.length);
            const s = Math.round(t);
            this.p = {
                nu: s
            }, D.validate({
                nu: s
            }, ["nu > 0"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return 1 / Xt(this.r, this.p.nu)
        }
        _pdf(t) {
            return Math.pow(2, -this.p.nu / 2) * Math.pow(t, -this.p.nu / 2 - 1) * Math.exp(-.5 / t - V(this.p.nu / 2))
        }
        _cdf(t) {
            return 1 - st(this.p.nu / 2, .5 / t)
        }
    },
    InverseGamma: class extends Gt {
        constructor(t = 1, s = 1) {
            super(t, s), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [Math.pow(s, t)]
        }
        _generator() {
            return 1 / super._generator()
        }
        _pdf(t) {
            return super._pdf(1 / t) / (t * t)
        }
        _cdf(t) {
            return 1 - super._cdf(1 / t)
        }
    },
    InverseGaussian: as,
    InvertedWeibull: class extends D {
        constructor(t = 2) {
            super("continuous", arguments.length), this.p = {
                c: t
            }, D.validate({
                c: t
            }, ["c > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.p.c * Math.pow(t, -1 - this.p.c) * Math.exp(-1 / Math.pow(t, this.p.c))
        }
        _cdf(t) {
            return Math.exp(-1 / Math.pow(t, this.p.c))
        }
        _q(t) {
            return Math.pow(-Math.log(t), -1 / this.p.c)
        }
    },
    IrwinHall: Ot,
    JohnsonSB: class extends Ft {
        constructor(t = 0, s = 1, e = 1, a = 0) {
            super(), this.p = Object.assign(this.p, {
                gamma: t,
                delta: s,
                lambda: e,
                xi: a
            }), D.validate({
                gamma: t,
                delta: s,
                lambda: e,
                xi: a
            }, ["delta > 0", "lambda > 0"]), this.s = [{
                value: a,
                closed: !0
            }, {
                value: a + e,
                closed: !0
            }]
        }
        _generator() {
            return this.p.xi + this.p.lambda / (1 + Math.exp(-(super._generator() - this.p.gamma) / this.p.delta))
        }
        _pdf(t) {
            const s = t - this.p.xi;
            return this.p.delta * this.p.lambda * super._pdf(this.p.gamma + this.p.delta * Math.log(s / (this.p.lambda - s))) / (s * (this.p.lambda - s))
        }
        _cdf(t) {
            const s = t - this.p.xi,
                e = Math.log(s / (this.p.lambda - s));
            return Number.isFinite(e) ? super._cdf(this.p.gamma + this.p.delta * e) : 0
        }
        _q(t) {
            return this.p.xi + this.p.lambda / (1 + Math.exp(-(super._q(t) - this.p.gamma) / this.p.delta))
        }
    },
    JohnsonSU: class extends Ft {
        constructor(t = 0, s = 1, e = 1, a = 0) {
            super(), this.p = Object.assign(this.p, {
                gamma: t,
                delta: s,
                lambda: e,
                xi: a
            }), D.validate({
                gamma: t,
                delta: s,
                lambda: e,
                xi: a
            }, ["delta > 0", "lambda > 0"]), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this.p.xi + this.p.lambda * Math.sinh((super._generator() - this.p.gamma) / this.p.delta)
        }
        _pdf(t) {
            const s = (t - this.p.xi) / this.p.lambda;
            return this.p.delta * super._pdf(this.p.gamma + this.p.delta * Math.asinh(s)) / (this.p.lambda * Math.sqrt(1 + s * s))
        }
        _cdf(t) {
            return super._cdf(this.p.gamma + this.p.delta * Math.asinh((t - this.p.xi) / this.p.lambda))
        }
        _q(t) {
            return this.p.xi + this.p.lambda * Math.sinh((super._q(t) - this.p.gamma) / this.p.delta)
        }
    },
    Kumaraswamy: hs,
    Laplace: rs,
    Levy: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                c: s
            }, D.validate({
                mu: t,
                c: s
            }, ["c > 0"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            const t = St(this.r, 0, 1 / Math.sqrt(this.p.c));
            return this.p.mu + 1 / (t * t)
        }
        _pdf(t) {
            const s = t - this.p.mu;
            return Math.sqrt(.5 * this.p.c / Math.PI) * Math.exp(-.5 * this.p.c / s - 1.5 * Math.log(s))
        }
        _cdf(t) {
            return t === this.p.mu ? 0 : rt(Math.sqrt(.5 * this.p.c / (t - this.p.mu)))
        }
    },
    Lindley: class extends D {
        constructor(t = 1) {
            super("continuous", arguments.length), this.p = {
                theta: t
            }, D.validate({
                theta: t
            }, ["theta > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [1 + t, Math.exp(-t - 1) * (1 + t)]
        }
        _generator() {
            return -(ct(-this.r.next() * this.c[1]) + this.c[0]) / this.p.theta
        }
        _pdf(t) {
            return this.p.theta * this.p.theta * (1 + t) * Math.exp(-this.p.theta * t) / this.c[0]
        }
        _cdf(t) {
            return 1 - Math.exp(-this.p.theta * t) * (this.c[0] + this.p.theta * t) / this.c[0]
        }
    },
    Logarithmic: class extends D {
        constructor(t = 1, s = 2) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s
            }, D.validate({
                a: t,
                b: s
            }, ["a >= 1", "b >= 1", "a < b"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: s,
                closed: !0
            }], this.c = [t * (1 - Math.log(t)), s * (1 - Math.log(s))]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return Math.log(t) / (this.c[0] - this.c[1])
        }
        _cdf(t) {
            return (this.c[0] - t * (1 - Math.log(t))) / (this.c[0] - this.c[1])
        }
        _q(t) {
            const s = t * (this.c[0] - this.c[1]) - this.c[0];
            return s / dt(s / Math.E)
        }
    },
    LogCauchy: class extends zt {
        constructor(t = 0, s = 1) {
            super(t, s), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            const t = super._generator();
            return Math.max(Math.min(Number.MAX_VALUE, Math.exp(t)), Number.MIN_VALUE)
        }
        _pdf(t) {
            return super._pdf(Math.log(t)) / t
        }
        _cdf(t) {
            return super._cdf(Math.log(t))
        }
        _q(t) {
            return Math.exp(super._q(t))
        }
    },
    LogGamma: class extends Gt {
        constructor(t = 1, s = 1, e = 0) {
            super(t, s), this.p = Object.assign(this.p, {
                mu: e
            }), D.validate({
                mu: e
            }, ["mu >= 0"]), this.s = [{
                value: e,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Math.exp(super._generator()) + this.p.mu - 1
        }
        _pdf(t) {
            return super._pdf(Math.log(t - this.p.mu + 1)) / (t - this.p.mu + 1)
        }
        _cdf(t) {
            return super._cdf(Math.log(t - this.p.mu + 1))
        }
    },
    Logistic: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                s: s
            }, D.validate({
                mu: t,
                s: s
            }, ["s > 0"]), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this.p.mu - this.p.s * Math.log(1 / this.r.next() - 1)
        }
        _pdf(t) {
            const s = Math.exp(-(t - this.p.mu) / this.p.s);
            return Number.isFinite(s * s) ? s / (this.p.s * Math.pow(1 + s, 2)) : 0
        }
        _cdf(t) {
            return 1 / (1 + Math.exp(-(t - this.p.mu) / this.p.s))
        }
        _q(t) {
            return this.p.mu - this.p.s * Math.log(1 / t - 1)
        }
    },
    LogisticExponential: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                lambda: t,
                kappa: s
            }, D.validate({
                lambda: t,
                kappa: s
            }, ["lambda > 0", "kappa > 0"]), this.s = [{
                value: 0,
                closed: s >= 1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = Math.exp(this.p.lambda * t);
            return Number.isFinite(Math.pow(s, 2 * this.p.kappa)) ? this.p.lambda * this.p.kappa * Math.pow(s - 1, this.p.kappa - 1) * s / Math.pow(1 + Math.pow(s - 1, this.p.kappa), 2) : 0
        }
        _cdf(t) {
            return 1 - 1 / (1 + Math.pow(Math.exp(this.p.lambda * t) - 1, this.p.kappa))
        }
        _q(t) {
            const s = Math.pow(t / (1 - t), 1 / this.p.kappa);
            return 1 + s === 1 ? s / this.p.lambda : Math.log(1 + s) / this.p.lambda
        }
    },
    LogitNormal: class extends Ft {
        constructor(t = 0, s = 1) {
            super(t, s), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1,
                closed: !1
            }]
        }
        _generator() {
            return 1 / (1 + Math.exp(-super._generator()))
        }
        _pdf(t) {
            return super._pdf(Math.log(t / (1 - t))) / (t * (1 - t))
        }
        _cdf(t) {
            return super._cdf(Math.log(t / (1 - t)))
        }
        _q(t) {
            return 1 / (1 + Math.exp(-super._q(t)))
        }
    },
    LogLaplace: class extends rs {
        constructor(t = 0, s = 1) {
            super(t, s), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Math.exp(super._generator())
        }
        _pdf(t) {
            return super._pdf(Math.log(t)) / t
        }
        _cdf(t) {
            return super._cdf(Math.log(t))
        }
        _q(t) {
            return Math.exp(super._q(t))
        }
    },
    LogLogistic: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                alpha: t,
                beta: s
            }, D.validate({
                alpha: t,
                beta: s
            }, ["alpha > 0", "beta > 0"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [s / t]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = t / this.p.alpha,
                e = Math.pow(s, this.p.beta - 1);
            return this.c[0] * e / Math.pow(1 + s * e, 2)
        }
        _cdf(t) {
            return 1 / (1 + Math.pow(t / this.p.alpha, -this.p.beta))
        }
        _q(t) {
            return this.p.alpha * Math.pow(1 / t - 1, -1 / this.p.beta)
        }
    },
    LogNormal: es,
    LogSeries: class extends D {
        constructor(t = .5) {
            super("discrete", arguments.length), this.p = {
                p: t
            }, D.validate({
                p: t
            }, ["p > 0", "p < 1"]), this.s = [{
                value: 1,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Math.floor(1 + Math.log(this.r.next()) / Math.log(1 - Math.pow(1 - this.p.p, this.r.next())))
        }
        _pdf(t) {
            return -Math.pow(this.p.p, t) / (t * Math.log(1 - this.p.p))
        }
        _cdf(t) {
            return 1 + function (t, s, e) {
                const a = e <= 0 || e >= 1 ? 0 : Math.exp(t * Math.log(e) + s * Math.log(1 - e));
                return 0 !== t && (e < (t + 1) / (t + s + 2) || 0 === s) ? a * J(t, s, e) / t : 1 - a * J(s, t, 1 - e) / s
            }(t + 1, 0, this.p.p) / Math.log(1 - this.p.p)
        }
    },
    Lomax: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                lambda: t,
                alpha: s
            }, D.validate({
                lambda: t,
                alpha: s
            }, ["lambda > 0", "alpha > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.p.alpha * Math.pow(1 + t / this.p.lambda, -1 - this.p.alpha) / this.p.lambda
        }
        _cdf(t) {
            return 1 - Math.pow(1 + t / this.p.lambda, -this.p.alpha)
        }
        _q(t) {
            return this.p.lambda * (Math.pow(1 - t, -1 / this.p.alpha) - 1)
        }
    },
    Makeham: class extends D {
        constructor(t = 1, s = 1, e = 1) {
            super("continuous", arguments.length), this.p = {
                alpha: t,
                beta: s,
                lambda: e
            }, D.validate({
                alpha: t,
                beta: s,
                lambda: e
            }, ["alpha > 0", "beta > 0", "lambda > 0"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [t / (s * e), t * Math.exp(t / e) / e, -s / e]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            const s = Math.exp(this.p.beta * t);
            return Number.isFinite(Math.exp(s)) ? (this.p.alpha * s + this.p.lambda) * Math.exp(-this.p.lambda * t - this.p.alpha * (s - 1) / this.p.beta) : 0
        }
        _cdf(t) {
            return 1 - Math.exp(-this.p.lambda * t - this.p.alpha * (Math.exp(this.p.beta * t) - 1) / this.p.beta)
        }
        _q(t) {
            const s = dt(this.c[1] * Math.pow(1 - t, this.c[2]));
            if (Number.isFinite(s)) return this.c[0] - Math.log(1 - t) / this.p.lambda - s / this.p.beta;
            {
                const s = Math.log(this.c[1]) + this.c[2] * Math.log(1 - t);
                return this.c[0] - Math.log(1 - t) / this.p.lambda - (s - Math.log(s)) / this.p.beta
            }
        }
    },
    MaxwellBoltzmann: class extends Gt {
        constructor(t = 1) {
            super(1.5, 2 * t * t), D.validate({
                a: t
            }, ["a > 0"])
        }
    },
    Mielke: class extends Qt {
        constructor(t = 2, s = 1) {
            super(t / s, s, 1), D.validate({
                k: t,
                s: s
            }, ["k > 0", "s > 0"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
    },
    Moyal: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                sigma: s
            }, D.validate({
                mu: t,
                sigma: s
            }, ["sigma > 0"]), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [s * Math.sqrt(2 * Math.PI)]
        }
        _generator() {
            return is(this.r, (() => Math.PI * this.r.next() - Math.PI / 2), (t => {
                const s = Math.tan(t);
                return Math.exp(-.5 * (s + Math.exp(-s))) / (Math.sqrt(2 * Math.PI) * Math.pow(Math.cos(t), 2))
            }), (t => this.p.sigma * Math.tan(t) + this.p.mu))
        }
        _pdf(t) {
            const s = (t - this.p.mu) / this.p.sigma;
            return Math.exp(-.5 * (s + Math.exp(-s))) / this.c[0]
        }
        _cdf(t) {
            return 1 - st(.5, .5 * Math.exp((this.p.mu - t) / this.p.sigma))
        }
    },
    Muth: class extends D {
        constructor(t = .5) {
            super("continuous", arguments.length), this.p = {
                alpha: t
            }, D.validate({
                alpha: t
            }, ["alpha > 0", "alpha <= 1"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _survival(t) {
            return Math.exp(this.p.alpha * t - (Math.exp(this.p.alpha * t) - 1) / this.p.alpha)
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return (Math.exp(this.p.alpha * t) - this.p.alpha) * this._survival(t)
        }
        _cdf(t) {
            return 1 - this._survival(t)
        }
        _q(t) {
            return (Math.log(1 - t) - ct((t - 1) / (this.p.alpha * Math.exp(1 / this.p.alpha))) - 1 / this.p.alpha) / this.p.alpha
        }
    },
    Nakagami: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                m: t,
                omega: s
            }, D.validate({
                m: t,
                omega: s
            }, ["m >= 0.5", "omega > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [2 * Math.pow(this.p.m, this.p.m) / Math.pow(this.p.omega, this.p.m)]
        }
        _generator() {
            return Math.sqrt(At(this.r, this.p.m, this.p.m / this.p.omega))
        }
        _pdf(t) {
            return this.c[0] * Math.pow(t, 2 * this.p.m - 1) * Math.exp(-this.p.m * t * t / this.p.omega - V(this.p.m))
        }
        _cdf(t) {
            return st(this.p.m, this.p.m * t * t / this.p.omega)
        }
    },
    NegativeBinomial: class extends D {
        constructor(t = 10, s = .5) {
            super("discrete", arguments.length);
            const e = Math.round(t);
            this.p = {
                r: e,
                p: s
            }, D.validate({
                r: e,
                p: s
            }, ["r > 0", "p > 0", "p < 1"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Ht(this.r, At(this.r, this.p.r, 1 / this.p.p - 1))
        }
        _pdf(t) {
            return Math.exp(ft(t + this.p.r - 1, t) + this.p.r * Math.log(1 - this.p.p) + t * Math.log(this.p.p))
        }
        _cdf(t) {
            return 1 - Y(t + 1, this.p.r, this.p.p)
        }
    },
    NegativeHypergeometric: class extends Rt {
        constructor(t = 10, s = 5, e = 5) {
            const a = Math.round(t),
                h = Math.round(s),
                r = Math.round(e);
            D.validate({
                N: a,
                K: h,
                r: r,
                "N - K": a - h
            }, ["N >= 0", "K > 0", "K <= N", "r > 0", "r <= N - K"]);
            const i = [];
            for (let t = 0; t <= h; t++) i.push(Math.exp(ft(h + r - 1, t) + ft(a - r - t, h - t) - ft(a, h)));
            super(i)
        }
    },
    NeymanA: class extends Bt {
        constructor(t = 1, s = 1) {
            super(), this.p = {
                lambda: t,
                phi: s
            }, D.validate({
                lambda: t,
                phi: s
            }, ["lambda > 0", "phi > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [Math.exp(-t * (1 - Math.exp(-s))), t * s * Math.exp(-s)]
        }
        _pk(t) {
            if (0 === t) return this.c[0];
            let s = 1,
                e = this.pdfTable[t - 1];
            for (let a = 1; a < t; a++) s *= this.p.phi / a, e += s * this.pdfTable[t - a - 1];
            return this.c[1] * e / t
        }
        _generator() {
            const t = Ht(this.r, this.p.lambda);
            let s = 0;
            for (let e = 0; e < t; e++) s += Ht(this.r, this.p.phi);
            return Math.round(s)
        }
    },
    NoncentralBeta: ns,
    NoncentralChi: class extends ps {
        constructor(t = 2, s = 1) {
            const e = Math.round(t);
            super(e, s * s), D.validate({
                k: e,
                lambda: s
            }, ["lambda > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Math.sqrt(super._generator())
        }
        _pdf(t) {
            return 2 * t * super._pdf(t * t)
        }
        _cdf(t) {
            return super._cdf(t * t)
        }
    },
    NoncentralChi2: ps,
    NoncentralF: class extends ns {
        constructor(t = 2, s = 2, e = 1) {
            const a = Math.round(t),
                h = Math.round(s);
            super(a / 2, h / 2, e), this.p = Object.assign(this.p, {
                d1: a,
                d2: h,
                lambda: e
            }), D.validate({
                d1: a,
                d2: h,
                lambda: e
            }, ["d1 > 0", "d2 > 0", "lambda > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            const t = super._generator();
            return this.p.d2 * t / (this.p.d1 * (1 - t))
        }
        _pdf(t) {
            return this.p.d1 * this.p.d2 * super._pdf(this.p.d1 * t / (this.p.d2 + this.p.d1 * t)) / Math.pow(this.p.d2 + this.p.d1 * t, 2)
        }
        _cdf(t) {
            const s = this.p.d1 * t;
            return super._cdf(1 / (1 + this.p.d2 / s))
        }
    },
    NoncentralT: Jt,
    Normal: Ft,
    Pareto: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                xmin: t,
                alpha: s
            }, D.validate({
                xmin: t,
                alpha: s
            }, ["xmin > 0", "alpha > 0"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.p.alpha * Math.pow(this.p.xmin / t, this.p.alpha) / t
        }
        _cdf(t) {
            return 1 - Math.pow(this.p.xmin / t, this.p.alpha)
        }
        _q(t) {
            return this.p.xmin / Math.pow(1 - t, 1 / this.p.alpha)
        }
    },
    PERT: class extends Lt {
        constructor(t = 0, s = .5, e = 1) {
            super((4 * s + e - 5 * t) / (e - t), (5 * e - t - 4 * s) / (e - t)), this.p = Object.assign(this.p, {
                a: t,
                b: s,
                c: e
            }), D.validate({
                a: t,
                b: s,
                c: e
            }, ["a < b", "b < c"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: e,
                closed: !0
            }]
        }
        _generator() {
            return super._generator() * (this.p.c - this.p.a) + this.p.a
        }
        _pdf(t) {
            return super._pdf((t - this.p.a) / (this.p.c - this.p.a)) / (this.p.c - this.p.a)
        }
        _cdf(t) {
            return super._cdf((t - this.p.a) / (this.p.c - this.p.a))
        }
    },
    Poisson: class extends D {
        constructor(t = 1) {
            super("discrete", arguments.length), this.p = {
                lambda: t
            }, D.validate({
                lambda: t
            }, ["lambda > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return Ht(this.r, this.p.lambda)
        }
        _pdf(t) {
            return Math.exp(t * Math.log(this.p.lambda) - this.p.lambda - V(t + 1))
        }
        _cdf(t) {
            return 1 - st(t + 1, this.p.lambda)
        }
    },
    PolyaAeppli: class extends Bt {
        constructor(t = 1, s = .5) {
            super(!0), this.p = {
                lambda: t,
                theta: s
            }, D.validate({
                lambda: t,
                theta: s
            }, ["lambda > 0", "theta > 0", "theta < 1"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [Math.log(t * (1 - s)) - t]
        }
        _pk(t) {
            return 0 === t ? -this.p.lambda : 1 === t ? this.c[0] : this.pdfTable[t - 1] + Math.log((this.p.lambda * (1 - this.p.theta) + 2 * (t - 1) * this.p.theta - this.p.theta * this.p.theta * (t - 2) * Math.exp(this.pdfTable[t - 2] - this.pdfTable[t - 1])) / t)
        }
        _generator() {
            const t = Ht(this.r, this.p.lambda);
            let s = 0;
            for (let e = 0; e < t; e++) s += Math.floor(Math.log(this.r.next()) / Math.log(this.p.theta)) + 1;
            return Math.round(s)
        }
    },
    Power: class extends hs {
        constructor(t = 1) {
            super(t, 1)
        }
    },
    QExponential: class extends ss {
        constructor(t = 1.5, s = 1) {
            super(0, 1 / (s * (2 - t)), (t - 1) / (2 - t)), D.validate({
                q: t,
                lambda: s
            }, ["q < 2", "lambda > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: t < 1 ? 1 / (s * (1 - t)) : 1 / 0,
                closed: !1
            }]
        }
    },
    R: class extends Lt {
        constructor(t = 1) {
            super(.5, t / 2), this.p = Object.assign(this.p, {
                c: t
            }), D.validate({
                c: t
            }, ["c > 0"]), this.s = [{
                value: -1,
                closed: !0
            }, {
                value: 1,
                closed: !0
            }]
        }
        _generator() {
            return 2 * Math.sqrt(super._generator()) - 1
        }
        _pdf(t) {
            const s = (t + 1) / 2;
            return s * super._pdf(s * s)
        }
        _cdf(t) {
            const s = (t + 1) / 2;
            return super._cdf(s * s)
        }
    },
    Rademacher: class extends Rt {
        constructor() {
            super([.5, 0, .5], -1)
        }
        _q(t) {
            return t > .5 ? 1 : -1
        }
    },
    RaisedCosine: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                s: s
            }, D.validate({
                mu: t,
                s: s
            }, ["s > 0"]), this.s = [{
                value: t - s,
                closed: !0
            }, {
                value: t + s,
                closed: !0
            }]
        }
        _generator() {
            return is(this.r, (() => this.p.mu - this.p.s + 2 * this.p.s * this.r.next()), (t => .5 * (1 + Math.cos(Math.PI * (t - this.p.mu) / this.p.s))))
        }
        _pdf(t) {
            return .5 * (1 + Math.cos(Math.PI * (t - this.p.mu) / this.p.s)) / this.p.s
        }
        _cdf(t) {
            const s = (t - this.p.mu) / this.p.s;
            return .5 * (1 + s + Math.sin(Math.PI * s) / Math.PI)
        }
    },
    Rayleigh: class extends Kt {
        constructor(t = 1) {
            super(t * Math.SQRT2, 2)
        }
    },
    Reciprocal: class extends D {
        constructor(t = 1, s = 2) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s
            }, D.validate({
                a: t,
                b: s
            }, ["a > 0", "b > 0", "a < b"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: s,
                closed: !0
            }], this.c = [Math.log(t), Math.log(s)]
        }
        _generator() {
            return this.p.a * Math.exp((this.c[1] - this.c[0]) * this.r.next())
        }
        _pdf(t) {
            return 1 / (t * (this.c[1] - this.c[0]))
        }
        _cdf(t) {
            return (Math.log(t) - this.c[0]) / (this.c[1] - this.c[0])
        }
    },
    ReciprocalInverseGaussian: class extends as {
        constructor(t = 1, s = 1) {
            super(t, s), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return 1 / super._generator()
        }
        _pdf(t) {
            return super._pdf(1 / t) / (t * t)
        }
        _cdf(t) {
            return 1 - super._cdf(1 / t)
        }
    },
    Rice: class extends D {
        constructor(t = 1, s = 1) {
            super("continuous", arguments.length), this.p = {
                nu: t,
                sigma: s
            }, D.validate({
                nu: t,
                sigma: s
            }, ["nu > 0", "sigma > 0"]), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [.5 * Math.pow(t / s, 2), s * s, t / (s * s), t * t]
        }
        _generator() {
            const t = Ht(this.r, this.c[0]),
                s = At(this.r, t + 1, .5);
            return this.p.sigma * Math.sqrt(s)
        }
        _pdf(t) {
            const s = t * this.p.nu / this.c[1],
                e = K(0, s);
            return Number.isFinite(e) ? t * Math.exp(-.5 * (t * t + this.c[3]) / this.c[1]) * K(0, t * this.c[2]) / this.c[1] : t * Math.exp(-.5 * (t * t + this.c[3]) / this.c[1] + s - .5 * Math.log(2 * Math.PI * s)) / this.c[1]
        }
        _cdf(t) {
            return 1 - gt(1, this.c[0], Math.pow(t / this.p.sigma, 2) / 2)
        }
    },
    ShiftedLogLogistic: class extends D {
        constructor(t = 0, s = 1, e = 1) {
            super("continuous", arguments.length), this.p = {
                mu: t,
                sigma: s,
                xi: e
            }, D.validate({
                mu: t,
                sigma: s,
                xi: e
            }, ["sigma > 0"]), this.s = 0 === e ? [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }] : [{
                value: e > 0 ? t - s / e : -1 / 0,
                closed: e > 0
            }, {
                value: e < 0 ? t - s / e : 1 / 0,
                closed: e < 0
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            if (0 === this.p.xi) {
                const s = Math.exp(-(t - this.p.mu) / this.p.sigma);
                return Number.isFinite(s * s) ? s / (this.p.sigma * Math.pow(1 + s, 2)) : 0
            } {
                const s = (t - this.p.mu) / this.p.sigma;
                return Math.pow(1 + this.p.xi * s, -(1 / this.p.xi + 1)) / (this.p.sigma * Math.pow(1 + Math.pow(1 + this.p.xi * s, -1 / this.p.xi), 2))
            }
        }
        _cdf(t) {
            if (0 === this.p.xi) return 1 / (1 + Math.exp(-(t - this.p.mu) / this.p.sigma));
            {
                const s = (t - this.p.mu) / this.p.sigma,
                    e = Math.pow(1 + this.p.xi * s, -1 / this.p.xi);
                return Number.isFinite(e) ? 1 / (1 + e) : 0
            }
        }
        _q(t) {
            return 0 === this.p.xi ? this.p.mu - this.p.sigma * Math.log(1 / t - 1) : this.p.mu + this.p.sigma * (Math.pow(1 / t - 1, -this.p.xi) - 1) / this.p.xi
        }
    },
    Skellam: class extends D {
        constructor(t = 1, s = 1) {
            super("discrete", arguments.length), this.p = {
                mu1: t,
                mu2: s
            }, D.validate({
                mu1: t,
                mu2: s
            }, ["mu1 > 0", "mu2 > 0"]), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [Math.exp(-t - s), Math.sqrt(t / s), 2 * Math.sqrt(t * s), gt(1, s, t)]
        }
        _generator() {
            return Ht(this.r, this.p.mu1) - Ht(this.r, this.p.mu2)
        }
        _pdf(t) {
            return this.c[0] * Math.pow(this.c[1], t) * K(Math.abs(t), this.c[2])
        }
        _cdf(t) {
            return t <= -1 ? 1 - gt(-t, this.p.mu1, this.p.mu2) : t >= 1 ? gt(t + 1, this.p.mu2, this.p.mu1) : this.c[3]
        }
        _q(t) {
            return Math.floor(this._qEstimateRoot(t))
        }
    },
    SkewNormal: class extends Ft {
        constructor(t = 0, s = 1, e = 1) {
            super(t, s), this.p = Object.assign(this.p, {
                xi: t,
                omega: s,
                alpha: e
            }), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }];
            const a = this.p.alpha / Math.sqrt(1 + this.p.alpha * this.p.alpha);
            this.c1 = [a, Math.sqrt(1 - a * a)]
        }
        _generator() {
            const t = St(this.r),
                s = St(this.r),
                e = this.c1[0] * t + this.c1[1] * s,
                a = t >= 0 ? e : -e;
            return this.p.xi + this.p.omega * a
        }
        _pdf(t) {
            return super._pdf(t) * (1 + ht(this.p.alpha * Math.SQRT1_2 * (t - this.p.xi) / this.p.omega))
        }
        _cdf(t) {
            return Zt(super._cdf(t) - 2 * function (t, s) {
                const e = Math.abs(t),
                    a = Math.abs(s),
                    h = a * e;
                let r;
                if (a <= 1) r = Et(e, a, h);
                else if (e <= .67) r = .25 - Pt(e) * Pt(h) - Et(h, 1 / a, e);
                else {
                    const t = Tt(e),
                        s = Tt(h);
                    r = .5 * (t + s) - t * s - Et(h, 1 / a, e)
                }
                return s < 0 ? -r : r
            }((t - this.p.xi) / this.p.omega, this.p.alpha))
        }
        _q(t) {
            return this._qEstimateRoot(t)
        }
    },
    Slash: class extends Ft {
        constructor() {
            super(0, 1), this.s = [{
                value: -1 / 0,
                closed: !1
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c1 = [.5 / Math.sqrt(2 * Math.PI)]
        }
        _generator() {
            return super._generator() / this.r.next()
        }
        _pdf(t) {
            return 0 === t ? this.c1[0] : (super._pdf(0) - super._pdf(t)) / (t * t)
        }
        _cdf(t) {
            return 0 === t ? .5 : super._cdf(t) - (super._pdf(0) - super._pdf(t)) / t
        }
        _q(t) {
            return this._qEstimateRoot(t)
        }
    },
    Soliton: class extends Rt {
        constructor(t = 10) {
            const s = Math.round(t);
            super([1 / s].concat(Array.from({
                length: s - 2
            }, ((t, s) => 1 / ((s + 1) * (s + 2))))), 1), D.validate({
                N: s
            }, ["N > 0"])
        }
    },
    StudentT: os,
    StudentZ: class extends os {
        constructor(t = 2) {
            D.validate({
                n: t
            }, ["n > 1"]), super(t - 1)
        }
        _generator() {
            return super._generator() / Math.sqrt(this.p.nu)
        }
        _pdf(t) {
            return super._pdf(t * Math.sqrt(this.p.nu)) * Math.sqrt(this.p.nu)
        }
        _cdf(t) {
            return super._cdf(t * Math.sqrt(this.p.nu))
        }
    },
    Trapezoidal: class extends D {
        constructor(t = 0, s = .33, e = .67, a = 1) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s,
                c: e,
                d: a
            }, D.validate({
                a: t,
                b: s,
                c: e,
                d: a
            }, ["a < d", "a <= b", "b < c", "c <= d"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: a,
                closed: !0
            }], this.c = [a + e - t - s, s - t, a - e, t + s]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return t < this.p.b ? 2 * (t - this.p.a) / (this.c[1] * this.c[0]) : t < this.p.c ? 2 / this.c[0] : 2 * (this.p.d - t) / (this.c[2] * this.c[0])
        }
        _cdf(t) {
            return t < this.p.b ? Math.pow(t - this.p.a, 2) / (this.c[1] * this.c[0]) : t < this.p.c ? (2 * t - this.c[3]) / this.c[0] : 1 - Math.pow(this.p.d - t, 2) / (this.c[2] * this.c[0])
        }
        _q(t) {
            return t < this.c[1] / this.c[0] ? this.p.a + Math.sqrt(this.c[0] * this.c[1] * t) : t < (2 * this.p.c - this.c[3]) / this.c[0] ? (this.c[0] * t + this.c[3]) / 2 : this.p.d - Math.sqrt(this.c[0] * this.c[2] * (1 - t))
        }
    },
    Triangular: class extends D {
        constructor(t = 0, s = 1, e = .5) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s,
                c: e
            }, D.validate({
                a: t,
                b: s,
                c: e
            }, ["a < b", "a <= c", "c <= b"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: s,
                closed: !0
            }];
            const a = s - t,
                h = s - e,
                r = e - t;
            this.c = [a, h, r, a * h, a * r]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return t < this.p.c ? 2 * (t - this.p.a) / this.c[4] : 2 * (this.p.b - t) / this.c[3]
        }
        _cdf(t) {
            return t < this.p.c ? Math.pow(t - this.p.a, 2) / this.c[4] : 1 - Math.pow(this.p.b - t, 2) / this.c[3]
        }
        _q(t) {
            return t < this.c[2] / this.c[0] ? this.p.a + Math.sqrt(t * this.c[4]) : this.p.b - Math.sqrt((1 - t) * this.c[3])
        }
    },
    TukeyLambda: class extends D {
        constructor(t = 1.5) {
            super("continuous", arguments.length), this.p = {
                lambda: t
            }, this.s = [{
                value: t > 0 ? -1 / t : -1 / 0,
                closed: t > 0
            }, {
                value: t > 0 ? 1 / t : 1 / 0,
                closed: t > 0
            }]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            if (0 === this.p.lambda) {
                const s = Math.exp(-t);
                return s / Math.pow(1 + s, 2)
            }
            if (0 === t) return Math.pow(2, this.p.lambda) / 4;
            {
                const s = this._cdf(t);
                return 1 / (Math.pow(s, this.p.lambda - 1) + Math.pow(1 - s, this.p.lambda - 1))
            }
        }
        _cdf(t) {
            return 0 === this.p.lambda ? 1 / (1 + Math.exp(-t)) : l((s => (Math.pow(s, this.p.lambda) - Math.pow(1 - s, this.p.lambda)) / this.p.lambda - t), 0, 1)
        }
        _q(t) {
            return 0 === this.p.lambda ? Math.log(t / (1 - t)) : (Math.pow(t, this.p.lambda) - Math.pow(1 - t, this.p.lambda)) / this.p.lambda
        }
    },
    Uniform: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                xmin: t,
                xmax: s
            }, D.validate({
                xmin: t,
                xmax: s
            }, ["xmin < xmax"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: s,
                closed: !0
            }], this.c = [s - t]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf() {
            return 1 / this.c[0]
        }
        _cdf(t) {
            return (t - this.p.xmin) / this.c[0]
        }
        _q(t) {
            return t * this.c[0] + this.p.xmin
        }
    },
    UniformProduct: class extends D {
        constructor(t = 2) {
            super("continuous", arguments.length);
            const s = Math.round(t);
            this.p = {
                n: s
            }, D.validate({
                n: s
            }, ["n > 1"]), this.s = [{
                value: 0,
                closed: !1
            }, {
                value: 1,
                closed: !0
            }]
        }
        _generator() {
            return Math.exp(d(Array.from({
                length: this.p.n
            }, (() => Math.log(this.r.next())))))
        }
        _pdf(t) {
            return Math.pow(-Math.log(t), this.p.n - 1) / C(this.p.n)
        }
        _cdf(t) {
            return et(this.p.n, -Math.log(t))
        }
    },
    UniformRatio: class extends D {
        constructor() {
            super("continuous", arguments.length), this.s = [{
                value: 0,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }]
        }
        _generator() {
            return this.r.next() / this.r.next()
        }
        _pdf(t) {
            return t <= 1 ? .5 : .5 / (t * t)
        }
        _cdf(t) {
            return t <= 1 ? .5 * t : 1 - .5 / t
        }
        _q(t) {
            return t <= .5 ? 2 * t : .5 / (1 - t)
        }
    },
    UQuadratic: class extends D {
        constructor(t = 0, s = 1) {
            super("continuous", arguments.length), this.p = {
                a: t,
                b: s
            }, D.validate({
                a: t,
                b: s
            }, ["a < b"]), this.s = [{
                value: t,
                closed: !0
            }, {
                value: s,
                closed: !0
            }], this.c = [12 / Math.pow(s - t, 3), (t + s) / 2, Math.pow((s - t) / 2, 3)]
        }
        _generator() {
            return this._q(this.r.next())
        }
        _pdf(t) {
            return this.c[0] * Math.pow(t - this.c[1], 2)
        }
        _cdf(t) {
            return this.c[0] * (Math.pow(t - this.c[1], 3) + this.c[2]) / 3
        }
        _q(t) {
            return Math.cbrt(3 * t / this.c[0] - this.c[2]) + this.c[1]
        }
    },
    VonMises: class extends D {
        constructor(t = 1) {
            super("continuous", arguments.length), this.p = {
                kappa: t
            }, D.validate({
                kappa: t
            }, ["kappa > 0"]), this.s = [{
                value: -Math.PI,
                closed: !0
            }, {
                value: Math.PI,
                closed: !0
            }]
        }
        _generator() {
            const t = this.p.kappa > 1.3 ? 1 / Math.sqrt(this.p.kappa) : Math.PI * Math.exp(-this.p.kappa);
            for (let s = 0; s < i; s++) {
                const s = this.r.next(),
                    e = t * (2 * this.r.next() - 1) / s;
                if (!(Math.abs(e) > Math.PI)) {
                    if (this.p.kappa * e * e < 4 - 4 * s) return e;
                    if (!(this.p.kappa * Math.cos(e) < 2 * Math.log(s) + this.p.kappa)) return e
                }
            }
        }
        _pdf(t) {
            return Math.exp(this.p.kappa * Math.cos(t)) / (2 * Math.PI * K(0, this.p.kappa))
        }
        _cdf(t) {
            return .5 * (1 + t / Math.PI) + M({
                c: 0
            }, ((s, e) => (s.c = K(e, this.p.kappa) * Math.sin(e * t) / (K(0, this.p.kappa) * e), s)), (t => t.c)) / Math.PI
        }
    },
    Weibull: Kt,
    Wigner: class extends D {
        constructor(t = 1) {
            super("continuous", arguments.length), this.p = {
                R: t
            }, D.validate({
                R: t
            }, ["R > 0"]), this.s = [{
                value: -t,
                closed: !0
            }, {
                value: t,
                closed: !0
            }]
        }
        _generator() {
            const t = At(this.r, 1.5, 1),
                s = At(this.r, 1.5, 1);
            return 2 * this.p.R * t / (t + s) - this.p.R
        }
        _pdf(t) {
            const s = this.p.R * this.p.R;
            return 2 * Math.sqrt(s - t * t) / (Math.PI * s)
        }
        _cdf(t) {
            const s = this.p.R * this.p.R;
            return .5 + t * Math.sqrt(s - t * t) / (Math.PI * s) + Math.asin(t / this.p.R) / Math.PI
        }
    },
    YuleSimon: class extends D {
        constructor(t = 2) {
            super("discrete", arguments.length), this.p = {
                rho: t
            }, D.validate({
                rho: t
            }, ["rho > 0"]), this.s = [{
                value: 1,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [this.p.rho + 1]
        }
        _generator() {
            const t = -Math.log(this.r.next()),
                s = -Math.log(this.r.next()),
                e = Math.exp(-s / this.p.rho);
            return 1 - e == 1 ? Math.ceil(t / e) : Math.ceil(-t / Math.log(1 - e))
        }
        _pdf(t) {
            return this.p.rho * X(t, this.c[0])
        }
        _cdf(t) {
            return 1 - t * X(t, this.c[0])
        }
    },
    Zeta: class extends D {
        constructor(t = 3) {
            super("discrete", arguments.length), this.p = {
                s: t
            }, D.validate({
                s: t
            }, ["s > 1"]), this.s = [{
                value: 1,
                closed: !0
            }, {
                value: 1 / 0,
                closed: !1
            }], this.c = [nt(t), Math.pow(2, t - 1)]
        }
        _generator() {
            return function (t, s) {
                const e = Math.pow(2, s - 1);
                for (let a = 0; a < 100; a++) {
                    const a = Math.floor(Math.pow(t.next(), -1 / (s - 1))),
                        h = Math.pow(1 + 1 / a, s - 1);
                    if (t.next() * a * (h - 1) / (e - 1) <= h / e) return a
                }
            }(this.r, this.p.s)
        }
        _pdf(t) {
            return Math.pow(t, -this.p.s) / this.c[0]
        }
        _cdf(t) {
            return ot(t, this.p.s) / this.c[0]
        }
    },
    Zipf: class extends Rt {
        constructor(t = 1, s = 100) {
            const e = Math.round(s);
            super(Array.from({
                length: e
            }, ((s, e) => Math.pow(e + 1, -t))), 1), D.validate({
                s: t,
                N: e
            }, ["s >= 0", "N > 0"])
        }
    }
});

function ls(t, s, e = 0) {
    return t.length > 0 ? r(t.map((t => Math.pow(t - e, s)))) : void 0
}
var cs = Object.freeze({
    __proto__: null,
    kurtosis: function (t) {
        if (t.length < 3) return;
        const s = t.length,
            e = r(t),
            a = ls(t, 2, e),
            h = ls(t, 4, e);
        return 0 === a ? void 0 : (s - 1) * ((s + 1) * h / (a * a) - 3 * (s - 1)) / ((s - 2) * (s - 3))
    },
    moment: ls,
    quantile: x,
    rank: O,
    skewness: function (t) {
        if (t.length < 3) return;
        const s = t.length,
            e = r(t),
            a = ls(t, 2, e),
            h = ls(t, 3, e);
        return 0 === a ? void 0 : Math.sqrt(s * (s - 1)) * h / ((s - 2) * Math.pow(a, 1.5))
    },
    yule: function (t) {
        const s = x(t, .25),
            e = x(t, .75);
        return s === e ? void 0 : (s + e - 2 * _(t)) / (e - s)
    }
});

function ds(t, s, e) {
    if (t.length < 2) throw Error("dataSet must contain multiple data sets");
    const a = t.length,
        h = t.map((t => t.length)),
        i = h.reduce(((t, s) => t + s), 0),
        n = t.map(e),
        p = t.map(((t, s) => t.map((t => Math.abs(t - n[s]))))),
        o = p.map(r),
        u = r(p.flat()),
        l = h.reduce(((t, s, e) => t + s * (o[e] - u) ** 2), 0);
    let c = 0;
    for (let t = 0; t < a; t++)
        for (let s = 0; s < h[t]; s++) c += (p[t][s] - o[t]) ** 2;
    const d = (i - a) * l / ((a - 1) * c);
    return {
        stat: d,
        passed: d <= new Yt(a - 1, i - a)
            .q(1 - s)
    }
}

function Ms(t, s, e) {
    const a = t.dim(),
        h = s.dim(),
        r = t.f(((s, e) => s * t.i(e)));
    let i = s.f(((t, e) => t * s.i(e)));
    const n = new k(r.v()
        .map((t => Array(a)
            .fill(t)))),
        p = new k(Array(h)
            .fill(i.v()));
    return i = n.add(p)
        .sub(new k(t.outer(s))
            .scale(2)), i = i.f((t => Math.exp(-.5 * t / (e * e)))), i
}

function fs(t) {
    const s = t.dim(),
        e = t.f(((s, e) => s * t.i(e))),
        a = new k(e.v()
            .map((t => Array(s)
                .fill(t)))),
        h = new k(Array(s)
            .fill(e.v())),
        r = a.add(h)
            .sub(new k(t.outer(t))
                .scale(2));
    return Math.sqrt(.5 * _(r.f(((t, s, e) => s >= e ? t : 0))
        .m()
        .flat()
        .filter((t => t > 0))
        .sort(((t, s) => t - s))))
}

function ms(t, s) {
    return t.map((t => ({
        value: t,
        type: s
    })))
}
var gs = Object.freeze({
    __proto__: null,
    bartlett: function (t, s = .05) {
        if (t.length < 2) throw Error("dataSet must contain multiple data sets");
        for (let s = 0; s < t.length; s++)
            if (t[s].length < 2) throw Error("Data sets in dataSet must have multiple elements");
        const e = t.length,
            a = t.reduce(((t, s) => t + s.length), 0),
            h = t.reduce(((t, s) => t + 1 / (s.length - 1)), 0),
            r = t.map(E),
            i = t.reduce(((t, s, e) => t + (s.length - 1) * r[e]), 0) / (a - e),
            n = t.reduce(((t, s, e) => t + (s.length - 1) * Math.log(r[e])), 0),
            p = ((a - e) * Math.log(i) - n) / (1 + (h - 1 / (a - e)) / (3 * (e - 1)));
        return {
            stat: p,
            passed: p <= new Dt(e - 1)
                .q(1 - s)
        }
    },
    brownForsythe: function (t, s = .05) {
        return ds(t, s, _)
    },
    hsic: function (t, s = .05) {
        if (2 !== t.length) throw Error("dataSets must contain two data sets");
        if (t[0].length !== t[1].length) throw Error("Data sets must have the same length");
        for (let s = 0; s < t.length; s++)
            if (t[s].length < 6) throw Error("Data sets in dataSet must have at least 6 elements");
        const e = new q(t[0]),
            a = new q(t[1]),
            h = e.dim(),
            r = fs(e),
            i = fs(a),
            n = new k(h)
                .sub(new k(h)
                    .f((() => 1 / h)));
        let p = Ms(e, e, r),
            o = Ms(a, a, i);
        const u = n.mult(p)
            .mult(n),
            l = n.mult(o)
                .mult(n);
        let c = u.hadamard(l)
            .f((t => Math.pow(t / 6, 2)));
        c = (d(c.rowSum()) - c.trace()) / (h * (h - 1)), c = 72 * c * (h - 4) * (h - 5) / h / (h - 1) / (h - 2) / (h - 3);
        const M = new q(h)
            .f((() => 1));
        p = p.f(((t, s, e) => s === e ? 0 : t)), o = o.f(((t, s, e) => s === e ? 0 : t));
        const f = p.apply(M)
            .dot(M) / (h * (h - 1)),
            m = o.apply(M)
                .dot(M) / (h * (h - 1)),
            g = (1 + f * m - f - m) / h,
            _ = g * g / c,
            b = c * h / g,
            x = d(u.t()
                .hadamard(l)
                .rowSum()) / h;
        return {
            stat: x,
            passed: x < new Gt(_, b)
                .q(s)
        }
    },
    levene: function (t, s = .05) {
        return ds(t, s, r)
    },
    mannWhitney: function (t, s = .05) {
        if (2 !== t.length) throw Error("dataSets must contain two data sets");
        const e = ms(t[0], 1),
            a = ms(t[1], 2),
            h = function (t) {
                const s = t.sort(((t, s) => t.value - s.value))
                    .map(((t, s) => ({
                        value: t.value,
                        type: t.type,
                        rank: s + 1
                    })));
                let e = 0,
                    a = e;
                for (let t = 1; t < s.length; t++)
                    if (s[t].value === s[e].value) a = t;
                    else {
                        if (a !== e) {
                            const t = (s[a].rank + s[e].rank) / 2;
                            for (let h = e; h <= a; h++) s[h].rank = t
                        }
                        e = t, a = e
                    } return s
            }(e.concat(a)),
            r = t[0].length,
            i = t[1].length,
            n = h.filter((t => 1 === t.type))
                .reduce(((t, s) => t + s.rank), 0) - r * (r + 1) / 2,
            p = Math.min(n, r * i - n),
            o = r * i / 2,
            u = Math.sqrt(r * i * (r + i + 1) / 12);
        return {
            stat: p,
            passed: Math.abs((p - o) / u) <= (new Ft)
                .q(1 - 2 * s)
        }
    }
});

module.exports = class ranjs {
    static core = h
    static dependence = J
    static dispersion = B
    static dist = us
    static location = v
    static shape = cs
    static test = gs
}
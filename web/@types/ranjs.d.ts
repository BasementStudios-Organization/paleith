declare function s(t: any, s?: number): any;
declare function r(t: any): number;
declare function o(t: any): number;
declare function l(t: any, s: any, e: any): any;
declare function c(t: any, s: any, e: any): any;
declare function d(t: any): any;
declare function M(t: any, s: any, e: any, a: any): any;
declare function m(t: any, s: any, e: any, a: any): any;
declare function g(t: any, s: any): any;
declare function _(t: any): any;
declare function b(t: any): any;
declare function x(t: any, s: any): any;
declare function w(t: any, s: any): number;
declare function I(t: any): k;
declare function y(t: any, s: any): number;
declare function N(t: any, s: any): number;
declare function P(t: any): any;
declare function T(t: any, s: any, e: any, a: any): number;
declare function E(t: any): number;
declare function S(t: any): number;
declare function A(t: any, s: any): number;
declare function L(t: any, s: any): number;
declare function O(t: any): any;
declare function R(t: any): number;
declare function F(t: any): number;
declare function C(t: any): any;
declare function U(t: any): number;
declare function K(t: any, s: any): number;
declare function Z(t: any, s: any): any;
declare function V(t: any): any;
declare function X(t: any, s: any): number;
declare function J(t: any, s: any, e: any): number;
declare function Y(t: any, s: any, e: any): number;
declare function $(t: any, s: any): number;
declare function tt(t: any, s: any): number;
declare function st(t: any, s: any): number;
declare function et(t: any, s: any): number;
declare function ht(t: any): number;
declare function rt(t: any): number;
declare function it(t: any): any;
declare function nt(t: any): number;
declare function ot(t: any, s: any): number;
declare function ut(t: any, s: any, e: any): any;
declare function lt(t: any, s: any): any;
declare function ct(t: any): any;
declare function dt(t: any): any;
declare function Mt(t: any, s: any): number;
declare function ft(t: any, s: any): number;
declare function gt(t: any, s: any, e: any): number;
declare function Pt(t: any): number;
declare function Tt(t: any): number;
declare function Et(t: any, s: any, e: any): number;
declare function St(t: any, s?: number, e?: number): number;
declare function At(t: any, s: any, e?: number): any;
declare function Ht(t: any, s: any): number;
declare function Ct(t: any, s?: number): number;
declare function Zt(t: any, s?: number, e?: number): number;
declare function Wt(t: any, s: any, e: any): any;
declare function Xt(t: any, s: any): any;
declare function is(t: any, s: any, e: any, a: any): any;
declare function ls(t: any, s: any, e?: number): number;
declare function ds(t: any, s: any, e: any): {
    stat: number;
    passed: boolean;
};
declare function Ms(t: any, s: any, e: any): any;
declare function fs(t: any): number;
declare function ms(t: any, s: any): any;
declare class e {
    static hash(t: any): number;
    constructor(t: any);
    _state: any;
    next(): number;
    seed(t: any): void;
    load(t: any): void;
    save(): any;
}
declare const a: e;
declare var h: Readonly<{
    __proto__: any;
    seed: (t: any) => void;
    float: (t: any, e: any, h: any, ...args: any[]) => any;
    int: (t: any, e: any, h: any, ...args: any[]) => any;
    choice: (t: any, e: any) => any;
    char: (t: any, e: any) => any;
    shuffle: (t: any) => any;
    coin: (t: any, e: any, h?: number, r?: number) => any;
}>;
declare const i: 100;
declare const n: any;
declare const p: 1e-30;
declare const u: 1.618;
declare function f(t: any, s: any, e: any): void;
declare var v: Readonly<{
    __proto__: any;
    geometricMean: (t: any) => number;
    harmonicMean: (t: any) => number;
    mean: typeof r;
    median: typeof _;
    midrange: (t: any) => number;
    mode: (t: any) => any;
    trimean: (t: any) => number;
}>;
declare class q {
    constructor(t: any);
    _v: any;
    v(): any;
    dim(): any;
    i(t: any, s: any): any;
    f(t: any): q;
    scale(t: any): q;
    add(t: any): q;
    sub(t: any): q;
    dot(t: any): any;
    outer(t: any): any;
}
declare class k {
    constructor(t: any);
    _m: any;
    m(): any;
    ij(t: any, s: any, e: any): any;
    f(t: any): k;
    scale(t: any): k;
    add(t: any): k;
    sub(t: any): k;
    mult(t: any): k;
    t(): k;
    apply(t: any): q;
    ldl(): {
        D: k;
        L: k;
    };
    rowSum(): any;
    hadamard(t: any): k;
    trace(): number;
}
declare var j: Readonly<{
    __proto__: any;
    covariance: typeof w;
    dCov: (t: any, s: any) => number;
    dCor: (t: any, s: any) => number;
    kendall: (t: any, s: any) => number;
    kullbackLeibler: (t: any, s: any) => any;
    oddsRatio: typeof T;
    pearson: typeof A;
    pointBiserial: (t: any, s: any) => number;
    somersD: (t: any, s: any) => number;
    spearman: (t: any, s: any) => number;
    yuleQ: (t: any, s: any, e: any, a: any) => number;
    yuleY: (t: any, s: any, e: any, a: any) => number;
}>;
declare var B: Readonly<{
    __proto__: any;
    cv: (t: any) => number;
    dVar: (t: any) => number;
    entropy: (t: any, s: any) => number;
    gini: (t: any) => number;
    iqr: (t: any) => number;
    md: typeof R;
    midhinge: (t: any) => number;
    range: (t: any) => number;
    rmd: typeof F;
    stdev: typeof S;
    qcd: (t: any) => number;
    variance: typeof E;
    vmr: (t: any) => number;
}>;
declare const z: number[];
declare const G: number[];
declare class D {
    static validate(t: any, s: any): void;
    constructor(t: any, s: any);
    t: any;
    k: any;
    p: {};
    s: any[];
    r: e;
    c: any[];
    _toInt(t: any): any;
    _generator(): void;
    _pdf(t: any): void;
    _cdf(t: any): void;
    _qEstimateTable(t: any): number;
    _qEstimateRoot(t: any): number;
    type(): any;
    support(): any[];
    seed(t: any): this;
    save(): {
        prngState: any;
        params: {};
        constants: any[];
        support: any[];
    };
    load(t: any): this;
    sample(t?: number): any;
    pdf(t: any): void | 0;
    cdf(t: any): void | 0 | 1;
    q(t: any): any;
    survival(t: any): number;
    hazard(t: any): number;
    cHazard(t: any): number;
    lnPdf(t: any): number;
    lnL(t: any): any;
    aic(t: any): number;
    bic(t: any): number;
    test(t: any): {
        statistics: number;
        passed: boolean;
    };
}
declare const Q: number[];
declare const H: number;
declare const W: number[];
declare const at: number[];
declare const pt: number[];
declare namespace mt {
    function q(t: any, s: any, e: any): number;
    function p(t: any, s: any, e: any): number;
}
declare const _t: number;
declare const bt: number;
declare const xt: number[];
declare const vt: number[];
declare const wt: number[][];
declare const qt: number[];
declare const kt: number[];
declare const It: number[];
declare const yt: number[];
declare const Nt: number[];
declare class Lt extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        alpha: number;
        beta: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: number[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
}
declare class Ot extends D {
    constructor(t?: number, ...args: any[]);
    p: {
        n: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: any;
    _generator(): any;
    _pdf(t: any): number;
    _cdf(t: any): any;
}
declare class jt {
    constructor(t: any);
    n: any;
    prob: number[];
    alias: number[];
    weights: any;
    sample(t: any): number;
    weight(t: any): any;
}
declare class Rt extends D {
    constructor(t?: number[], s?: number, ...args: any[]);
    p: {
        n: number;
        weights: number[];
        min: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    aliasTable: jt;
    pdfTable: any[];
    cdfTable: any[];
    _generator(): number;
    _pdf(t: any): any;
    _cdf(t: any): number;
}
declare class Ft extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        mu: number;
        sigma: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: number[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
    _q(t: any): number;
}
declare class Bt extends D {
    constructor(t?: boolean, ...args: any[]);
    TABLE_SIZE: number;
    MAX_NUMBER_OF_TABLES: number;
    logP: boolean;
    aliasTables: any[];
    pdfTable: any[];
    cdfTable: any[];
    _pk(t: any): void;
    _advance(t: any): void;
    _addAliasTable(): void;
    _generator(): any;
    _pdf(t: any): any;
    _cdf(t: any): any;
}
declare class zt extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        x0: number;
        gamma: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: number[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
    _q(t: any): number;
}
declare class Gt extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        alpha: number;
        beta: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    _generator(): any;
    _pdf(t: any): number;
    _cdf(t: any): number;
}
declare class Dt extends Gt {
    constructor(t?: number);
}
declare class Qt extends D {
    constructor(t?: number, s?: number, e?: number, ...args: any[]);
    p: {
        p: number;
        a: number;
        b: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
    _q(t: any): number;
}
declare class Ut extends D {
    constructor(t?: number, ...args: any[]);
    p: {
        lambda: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: number[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
    _q(t: any): number;
}
declare class Kt extends Ut {
    constructor(t?: number, s?: number);
    p: any;
}
declare class Vt extends D {
    constructor(t?: number, s?: number, e?: number, a?: number, ...args: any[]);
    p: {
        alpha: number;
        beta: number;
        lambda1: number;
        lambda2: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
}
declare class Jt extends D {
    static fnm(t: any, s: any, e: any): number;
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        nu: number;
        mu: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: number[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
}
declare class Yt extends Lt {
    constructor(t?: number, s?: number);
    p: any;
}
declare class $t extends Gt {
    constructor(t?: number, s?: number, e?: number);
    p: any;
    _generator(): number;
}
declare class ts extends $t {
    _generator(): any;
}
declare class ss extends D {
    constructor(t?: number, s?: number, e?: number, ...args: any[]);
    p: {
        mu: number;
        sigma: number;
        xi: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
    _q(t: any): number;
}
declare class es extends Ft {
    constructor(t?: number, s?: number);
}
declare class as extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        mu: number;
        lambda: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: number[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
}
declare class hs extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        a: number;
        b: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
    _q(t: any): number;
}
declare class rs extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        mu: number;
        b: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
    _q(t: any): number;
}
declare class ns extends D {
    constructor(t?: number, s?: number, e?: number, ...args: any[]);
    p: {
        alpha: number;
        beta: number;
        lambda: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: number[];
    _generator(): number;
    _pdf(t: any): any;
    _cdf(t: any): number;
}
declare class ps extends D {
    constructor(t?: number, s?: number, ...args: any[]);
    p: {
        k: number;
        lambda: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    c: boolean[];
    _generator(): any;
    _pdf(t: any): number;
    _cdf(t: any): number;
}
declare class os extends D {
    constructor(t?: number, ...args: any[]);
    p: {
        nu: number;
    };
    s: {
        value: number;
        closed: boolean;
    }[];
    _generator(): number;
    _pdf(t: any): number;
    _cdf(t: any): number;
}
declare var us: Readonly<{
    __proto__: any;
    InvalidDiscrete: {
        new (...args: any[]): {
            s: {
                value: number;
                closed: boolean;
            }[];
            t: any;
            k: any;
            p: {};
            r: e;
            c: any[];
            _toInt(t: any): any;
            _generator(): void;
            _pdf(t: any): void;
            _cdf(t: any): void;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Alpha: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                alpha: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _phi(t: any): number;
            _phiInv(t: any): number;
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Anglit: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                mu: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Arcsine: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    BaldingNichols: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            p: {
                alpha: number;
                beta: number;
            };
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Bates: {
        new (t?: number, s?: number, e?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            c: any;
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Benini: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                alpha: number;
                beta: number;
                sigma: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    BenktanderII: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: (number | boolean)[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Bernoulli: {
        new (t?: number): {
            _q(t: any): 0 | 1;
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Beta: typeof Lt;
    BetaBinomial: {
        new (t?: number, s?: number, e?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    BetaPrime: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: {
                alpha: number;
                beta: number;
            };
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    BetaRectangular: {
        new (t?: number, s?: number, e?: number, a?: number, h?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Binomial: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    BirnbaumSaunders: {
        new (t?: number, s?: number, e?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): any;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Borel: {
        new (t?: number): {
            p: {
                mu: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _pk(t: any): number;
            TABLE_SIZE: number;
            MAX_NUMBER_OF_TABLES: number;
            logP: boolean;
            aliasTables: any[];
            pdfTable: any[];
            cdfTable: any[];
            _advance(t: any): void;
            _addAliasTable(): void;
            _generator(): any;
            _pdf(t: any): any;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    BorelTanner: {
        new (t?: number, s?: number): {
            p: {
                mu: number;
                n: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _pk(t: any): number;
            TABLE_SIZE: number;
            MAX_NUMBER_OF_TABLES: number;
            logP: boolean;
            aliasTables: any[];
            pdfTable: any[];
            cdfTable: any[];
            _advance(t: any): void;
            _addAliasTable(): void;
            _generator(): any;
            _pdf(t: any): any;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    BoundedPareto: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                L: number;
                H: number;
                alpha: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Bradford: {
        new (t?: number, ...args: any[]): {
            p: {
                c: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Burr: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                c: number;
                k: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Categorical: typeof Rt;
    Cauchy: typeof zt;
    Chi: {
        new (t?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Chi2: typeof Dt;
    Dagum: typeof Qt;
    Degenerate: {
        new (t?: number, ...args: any[]): {
            p: {
                x0: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _cdf(t: any): void;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Delaporte: {
        new (t?: number, s?: number, e?: number): {
            p: {
                alpha: number;
                beta: number;
                lambda: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _pk(t: any): number;
            _generator(): number;
            TABLE_SIZE: number;
            MAX_NUMBER_OF_TABLES: number;
            logP: boolean;
            aliasTables: any[];
            pdfTable: any[];
            cdfTable: any[];
            _advance(t: any): void;
            _addAliasTable(): void;
            _pdf(t: any): any;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    DiscreteUniform: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                xmin: number;
                xmax: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    DiscreteWeibull: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                q: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    DoubleGamma: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: {
                alpha: number;
                beta: number;
            };
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    DoubleWeibull: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            p: any;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    DoublyNoncentralBeta: typeof Vt;
    DoublyNoncentralF: {
        new (t?: number, s?: number, e?: number, a?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    DoublyNoncentralT: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                nu: number;
                mu: number;
                theta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _findStartIndex(t: any): number;
            _f11Forward(t: any, s: any, e: any, a: any, h: any): number;
            _f11Backward(t: any, s: any, e: any, a: any, h: any): number;
            _logA(t: any, s: any): number;
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Erlang: {
        new (t?: number, s?: number): {
            p: {
                alpha: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Exponential: typeof Ut;
    ExponentialLogarithmic: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                p: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    F: typeof Yt;
    FlorySchulz: {
        new (t?: number, ...args: any[]): {
            p: {
                a: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Frechet: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                alpha: number;
                s: number;
                m: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    FisherZ: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: any;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Gamma: typeof Gt;
    GammaGompertz: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                b: number;
                s: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    GeneralizedExponential: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
                c: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    GeneralizedExtremeValue: {
        new (t?: number, ...args: any[]): {
            p: {
                c: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    GeneralizedGamma: typeof $t;
    GeneralizedHermite: {
        new (t?: number, s?: number, e?: number): {
            p: {
                a1: number;
                a2: number;
                m: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _pk(t: any): number;
            _generator(): number;
            TABLE_SIZE: number;
            MAX_NUMBER_OF_TABLES: number;
            logP: boolean;
            aliasTables: any[];
            pdfTable: any[];
            cdfTable: any[];
            _advance(t: any): void;
            _addAliasTable(): void;
            _pdf(t: any): any;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    GeneralizedLogistic: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                mu: number;
                s: number;
                c: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    GeneralizedNormal: typeof ts;
    GeneralizedPareto: typeof ss;
    Geometric: {
        new (t?: number, ...args: any[]): {
            p: {
                p: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Gilbrat: {
        new (): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            p: {
                mu: number;
                sigma: number;
            };
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Gompertz: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                eta: number;
                b: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Gumbel: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                mu: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    HalfGeneralizedNormal: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: any;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    HalfLogistic: {
        new (...args: any[]): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            p: {};
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    HalfNormal: {
        new (t?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            p: {
                mu: number;
                sigma: number;
            };
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    HeadsMinusTails: {
        new (t?: number): {
            p: {
                n: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _pk(t: any): number;
            _generator(): number;
            TABLE_SIZE: number;
            MAX_NUMBER_OF_TABLES: number;
            logP: boolean;
            aliasTables: any[];
            pdfTable: any[];
            cdfTable: any[];
            _advance(t: any): void;
            _addAliasTable(): void;
            _pdf(t: any): any;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Hoyt: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                q: number;
                omega: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    HyperbolicSecant: {
        new (...args: any[]): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            p: {};
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Hyperexponential: {
        new (t?: {
            weight: number;
            rate: number;
        }[]): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            aliasTable: jt;
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Hypergeometric: {
        new (t?: number, s?: number, e?: number): {
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    InverseChi2: {
        new (t?: number, ...args: any[]): {
            p: {
                nu: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    InverseGamma: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: {
                alpha: number;
                beta: number;
            };
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    InverseGaussian: typeof as;
    InvertedWeibull: {
        new (t?: number, ...args: any[]): {
            p: {
                c: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    IrwinHall: typeof Ot;
    JohnsonSB: {
        new (t?: number, s?: number, e?: number, a?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): any;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    JohnsonSU: {
        new (t?: number, s?: number, e?: number, a?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): any;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Kumaraswamy: typeof hs;
    Laplace: typeof rs;
    Levy: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                mu: number;
                c: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Lindley: {
        new (t?: number, ...args: any[]): {
            p: {
                theta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Logarithmic: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    LogCauchy: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            p: {
                x0: number;
                gamma: number;
            };
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    LogGamma: {
        new (t?: number, s?: number, e?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Logistic: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                mu: number;
                s: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    LogisticExponential: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                lambda: number;
                kappa: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    LogitNormal: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            p: {
                mu: number;
                sigma: number;
            };
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    LogLaplace: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            p: {
                mu: number;
                b: number;
            };
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    LogLogistic: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                alpha: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    LogNormal: typeof es;
    LogSeries: {
        new (t?: number, ...args: any[]): {
            p: {
                p: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Lomax: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                lambda: number;
                alpha: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Makeham: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                alpha: number;
                beta: number;
                lambda: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    MaxwellBoltzmann: {
        new (t?: number): {
            p: {
                alpha: number;
                beta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Mielke: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            p: {
                p: number;
                a: number;
                b: number;
            };
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Moyal: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                mu: number;
                sigma: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Muth: {
        new (t?: number, ...args: any[]): {
            p: {
                alpha: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _survival(t: any): number;
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Nakagami: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                m: number;
                omega: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    NegativeBinomial: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                r: number;
                p: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    NegativeHypergeometric: {
        new (t?: number, s?: number, e?: number): {
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    NeymanA: {
        new (t?: number, s?: number): {
            p: {
                lambda: number;
                phi: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _pk(t: any): number;
            _generator(): number;
            TABLE_SIZE: number;
            MAX_NUMBER_OF_TABLES: number;
            logP: boolean;
            aliasTables: any[];
            pdfTable: any[];
            cdfTable: any[];
            _advance(t: any): void;
            _addAliasTable(): void;
            _pdf(t: any): any;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    NoncentralBeta: typeof ns;
    NoncentralChi: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: {
                k: number;
                lambda: number;
            };
            c: boolean[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    NoncentralChi2: typeof ps;
    NoncentralF: {
        new (t?: number, s?: number, e?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    NoncentralT: typeof Jt;
    Normal: typeof Ft;
    Pareto: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                xmin: number;
                alpha: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    PERT: {
        new (t?: number, s?: number, e?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Poisson: {
        new (t?: number, ...args: any[]): {
            p: {
                lambda: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    PolyaAeppli: {
        new (t?: number, s?: number): {
            p: {
                lambda: number;
                theta: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _pk(t: any): any;
            _generator(): number;
            TABLE_SIZE: number;
            MAX_NUMBER_OF_TABLES: number;
            logP: boolean;
            aliasTables: any[];
            pdfTable: any[];
            cdfTable: any[];
            _advance(t: any): void;
            _addAliasTable(): void;
            _pdf(t: any): any;
            _cdf(t: any): any;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Power: {
        new (t?: number): {
            p: {
                a: number;
                b: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    QExponential: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            p: {
                mu: number;
                sigma: number;
                xi: number;
            };
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    R: {
        new (t?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Rademacher: {
        new (): {
            _q(t: any): 1 | -1;
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    RaisedCosine: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                mu: number;
                s: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Rayleigh: {
        new (t?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Reciprocal: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    ReciprocalInverseGaussian: {
        new (t?: number, s?: number): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: {
                mu: number;
                lambda: number;
            };
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Rice: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                nu: number;
                sigma: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    ShiftedLogLogistic: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                mu: number;
                sigma: number;
                xi: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Skellam: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                mu1: number;
                mu2: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    SkewNormal: {
        new (t?: number, s?: number, e?: number): {
            p: any;
            s: {
                value: number;
                closed: boolean;
            }[];
            c1: number[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Slash: {
        new (): {
            s: {
                value: number;
                closed: boolean;
            }[];
            c1: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            p: {
                mu: number;
                sigma: number;
            };
            c: number[];
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Soliton: {
        new (t?: number): {
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    StudentT: typeof os;
    StudentZ: {
        new (t?: number): {
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            p: {
                nu: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Trapezoidal: {
        new (t?: number, s?: number, e?: number, a?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
                c: number;
                d: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Triangular: {
        new (t?: number, s?: number, e?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
                c: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    TukeyLambda: {
        new (t?: number, ...args: any[]): {
            p: {
                lambda: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): any;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Uniform: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                xmin: number;
                xmax: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    UniformProduct: {
        new (t?: number, ...args: any[]): {
            p: {
                n: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    UniformRatio: {
        new (...args: any[]): {
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): number;
            t: any;
            k: any;
            p: {};
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    UQuadratic: {
        new (t?: number, s?: number, ...args: any[]): {
            p: {
                a: number;
                b: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): any;
            _pdf(t: any): number;
            _cdf(t: any): number;
            _q(t: any): any;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    VonMises: {
        new (t?: number, ...args: any[]): {
            p: {
                kappa: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Weibull: typeof Kt;
    Wigner: {
        new (t?: number, ...args: any[]): {
            p: {
                R: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    YuleSimon: {
        new (t?: number, ...args: any[]): {
            p: {
                rho: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Zeta: {
        new (t?: number, ...args: any[]): {
            p: {
                s: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            c: number[];
            _generator(): number;
            _pdf(t: any): number;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
    Zipf: {
        new (t?: number, s?: number): {
            p: {
                n: number;
                weights: number[];
                min: number;
            };
            s: {
                value: number;
                closed: boolean;
            }[];
            aliasTable: jt;
            pdfTable: any[];
            cdfTable: any[];
            _generator(): number;
            _pdf(t: any): any;
            _cdf(t: any): number;
            t: any;
            k: any;
            r: e;
            c: any[];
            _toInt(t: any): any;
            _qEstimateTable(t: any): number;
            _qEstimateRoot(t: any): number;
            type(): any;
            support(): any[];
            seed(t: any): any;
            save(): {
                prngState: any;
                params: {};
                constants: any[];
                support: any[];
            };
            load(t: any): any;
            sample(t?: number): any;
            pdf(t: any): void | 0;
            cdf(t: any): void | 0 | 1;
            q(t: any): any;
            survival(t: any): number;
            hazard(t: any): number;
            cHazard(t: any): number;
            lnPdf(t: any): number;
            lnL(t: any): any;
            aic(t: any): number;
            bic(t: any): number;
            test(t: any): {
                statistics: number;
                passed: boolean;
            };
        };
        validate(t: any, s: any): void;
    };
}>;
declare var cs: Readonly<{
    __proto__: any;
    kurtosis: (t: any) => number;
    moment: typeof ls;
    quantile: typeof x;
    rank: typeof O;
    skewness: (t: any) => number;
    yule: (t: any) => number;
}>;
declare var gs: Readonly<{
    __proto__: any;
    bartlett: (t: any, s?: number) => {
        stat: number;
        passed: boolean;
    };
    brownForsythe: (t: any, s?: number) => {
        stat: number;
        passed: boolean;
    };
    hsic: (t: any, s?: number) => {
        stat: number;
        passed: boolean;
    };
    levene: (t: any, s?: number) => {
        stat: number;
        passed: boolean;
    };
    mannWhitney: (t: any, s?: number) => {
        stat: number;
        passed: boolean;
    };
}>;
declare class ranjs {
    static core: Readonly<{
        __proto__: any;
        seed: (t: any) => void;
        float: (t: any, e: any, h: any, ...args: any[]) => any;
        int: (t: any, e: any, h: any, ...args: any[]) => any;
        choice: (t: any, e: any) => any;
        char: (t: any, e: any) => any;
        shuffle: (t: any) => any;
        coin: (t: any, e: any, h?: number, r?: number) => any;
    }>;
    static dependence: Readonly<{
        __proto__: any;
        covariance: typeof w;
        dCov: (t: any, s: any) => number;
        dCor: (t: any, s: any) => number;
        kendall: (t: any, s: any) => number;
        kullbackLeibler: (t: any, s: any) => any;
        oddsRatio: typeof T;
        pearson: typeof A;
        pointBiserial: (t: any, s: any) => number;
        somersD: (t: any, s: any) => number;
        spearman: (t: any, s: any) => number;
        yuleQ: (t: any, s: any, e: any, a: any) => number;
        yuleY: (t: any, s: any, e: any, a: any) => number;
    }>;
    static dispersion: Readonly<{
        __proto__: any;
        cv: (t: any) => number;
        dVar: (t: any) => number;
        entropy: (t: any, s: any) => number;
        gini: (t: any) => number;
        iqr: (t: any) => number;
        md: typeof R;
        midhinge: (t: any) => number;
        range: (t: any) => number;
        rmd: typeof F;
        stdev: typeof S;
        qcd: (t: any) => number;
        variance: typeof E;
        vmr: (t: any) => number;
    }>;
    static dist: Readonly<{
        __proto__: any;
        InvalidDiscrete: {
            new (...args: any[]): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                t: any;
                k: any;
                p: {};
                r: e;
                c: any[];
                _toInt(t: any): any;
                _generator(): void;
                _pdf(t: any): void;
                _cdf(t: any): void;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Alpha: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    alpha: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _phi(t: any): number;
                _phiInv(t: any): number;
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Anglit: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    mu: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Arcsine: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        BaldingNichols: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                p: {
                    alpha: number;
                    beta: number;
                };
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Bates: {
            new (t?: number, s?: number, e?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: any;
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Benini: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    alpha: number;
                    beta: number;
                    sigma: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        BenktanderII: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: (number | boolean)[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Bernoulli: {
            new (t?: number): {
                _q(t: any): 0 | 1;
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Beta: typeof Lt;
        BetaBinomial: {
            new (t?: number, s?: number, e?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        BetaPrime: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: {
                    alpha: number;
                    beta: number;
                };
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        BetaRectangular: {
            new (t?: number, s?: number, e?: number, a?: number, h?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Binomial: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        BirnbaumSaunders: {
            new (t?: number, s?: number, e?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): any;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Borel: {
            new (t?: number): {
                p: {
                    mu: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _pk(t: any): number;
                TABLE_SIZE: number;
                MAX_NUMBER_OF_TABLES: number;
                logP: boolean;
                aliasTables: any[];
                pdfTable: any[];
                cdfTable: any[];
                _advance(t: any): void;
                _addAliasTable(): void;
                _generator(): any;
                _pdf(t: any): any;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        BorelTanner: {
            new (t?: number, s?: number): {
                p: {
                    mu: number;
                    n: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _pk(t: any): number;
                TABLE_SIZE: number;
                MAX_NUMBER_OF_TABLES: number;
                logP: boolean;
                aliasTables: any[];
                pdfTable: any[];
                cdfTable: any[];
                _advance(t: any): void;
                _addAliasTable(): void;
                _generator(): any;
                _pdf(t: any): any;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        BoundedPareto: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    L: number;
                    H: number;
                    alpha: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Bradford: {
            new (t?: number, ...args: any[]): {
                p: {
                    c: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Burr: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    c: number;
                    k: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Categorical: typeof Rt;
        Cauchy: typeof zt;
        Chi: {
            new (t?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Chi2: typeof Dt;
        Dagum: typeof Qt;
        Degenerate: {
            new (t?: number, ...args: any[]): {
                p: {
                    x0: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _cdf(t: any): void;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Delaporte: {
            new (t?: number, s?: number, e?: number): {
                p: {
                    alpha: number;
                    beta: number;
                    lambda: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _pk(t: any): number;
                _generator(): number;
                TABLE_SIZE: number;
                MAX_NUMBER_OF_TABLES: number;
                logP: boolean;
                aliasTables: any[];
                pdfTable: any[];
                cdfTable: any[];
                _advance(t: any): void;
                _addAliasTable(): void;
                _pdf(t: any): any;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        DiscreteUniform: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    xmin: number;
                    xmax: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        DiscreteWeibull: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    q: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        DoubleGamma: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: {
                    alpha: number;
                    beta: number;
                };
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        DoubleWeibull: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                p: any;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        DoublyNoncentralBeta: typeof Vt;
        DoublyNoncentralF: {
            new (t?: number, s?: number, e?: number, a?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        DoublyNoncentralT: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    nu: number;
                    mu: number;
                    theta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _findStartIndex(t: any): number;
                _f11Forward(t: any, s: any, e: any, a: any, h: any): number;
                _f11Backward(t: any, s: any, e: any, a: any, h: any): number;
                _logA(t: any, s: any): number;
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Erlang: {
            new (t?: number, s?: number): {
                p: {
                    alpha: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Exponential: typeof Ut;
        ExponentialLogarithmic: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    p: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        F: typeof Yt;
        FlorySchulz: {
            new (t?: number, ...args: any[]): {
                p: {
                    a: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Frechet: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    alpha: number;
                    s: number;
                    m: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        FisherZ: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: any;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Gamma: typeof Gt;
        GammaGompertz: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    b: number;
                    s: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        GeneralizedExponential: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                    c: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        GeneralizedExtremeValue: {
            new (t?: number, ...args: any[]): {
                p: {
                    c: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        GeneralizedGamma: typeof $t;
        GeneralizedHermite: {
            new (t?: number, s?: number, e?: number): {
                p: {
                    a1: number;
                    a2: number;
                    m: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _pk(t: any): number;
                _generator(): number;
                TABLE_SIZE: number;
                MAX_NUMBER_OF_TABLES: number;
                logP: boolean;
                aliasTables: any[];
                pdfTable: any[];
                cdfTable: any[];
                _advance(t: any): void;
                _addAliasTable(): void;
                _pdf(t: any): any;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        GeneralizedLogistic: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    mu: number;
                    s: number;
                    c: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        GeneralizedNormal: typeof ts;
        GeneralizedPareto: typeof ss;
        Geometric: {
            new (t?: number, ...args: any[]): {
                p: {
                    p: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Gilbrat: {
            new (): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                p: {
                    mu: number;
                    sigma: number;
                };
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Gompertz: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    eta: number;
                    b: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Gumbel: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    mu: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        HalfGeneralizedNormal: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: any;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        HalfLogistic: {
            new (...args: any[]): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                p: {};
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        HalfNormal: {
            new (t?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                p: {
                    mu: number;
                    sigma: number;
                };
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        HeadsMinusTails: {
            new (t?: number): {
                p: {
                    n: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _pk(t: any): number;
                _generator(): number;
                TABLE_SIZE: number;
                MAX_NUMBER_OF_TABLES: number;
                logP: boolean;
                aliasTables: any[];
                pdfTable: any[];
                cdfTable: any[];
                _advance(t: any): void;
                _addAliasTable(): void;
                _pdf(t: any): any;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Hoyt: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    q: number;
                    omega: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        HyperbolicSecant: {
            new (...args: any[]): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                p: {};
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Hyperexponential: {
            new (t?: {
                weight: number;
                rate: number;
            }[]): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                aliasTable: jt;
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Hypergeometric: {
            new (t?: number, s?: number, e?: number): {
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        InverseChi2: {
            new (t?: number, ...args: any[]): {
                p: {
                    nu: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        InverseGamma: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: {
                    alpha: number;
                    beta: number;
                };
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        InverseGaussian: typeof as;
        InvertedWeibull: {
            new (t?: number, ...args: any[]): {
                p: {
                    c: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        IrwinHall: typeof Ot;
        JohnsonSB: {
            new (t?: number, s?: number, e?: number, a?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): any;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        JohnsonSU: {
            new (t?: number, s?: number, e?: number, a?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): any;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Kumaraswamy: typeof hs;
        Laplace: typeof rs;
        Levy: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    mu: number;
                    c: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Lindley: {
            new (t?: number, ...args: any[]): {
                p: {
                    theta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Logarithmic: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        LogCauchy: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                p: {
                    x0: number;
                    gamma: number;
                };
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        LogGamma: {
            new (t?: number, s?: number, e?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Logistic: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    mu: number;
                    s: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        LogisticExponential: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    lambda: number;
                    kappa: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        LogitNormal: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                p: {
                    mu: number;
                    sigma: number;
                };
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        LogLaplace: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                p: {
                    mu: number;
                    b: number;
                };
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        LogLogistic: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    alpha: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        LogNormal: typeof es;
        LogSeries: {
            new (t?: number, ...args: any[]): {
                p: {
                    p: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Lomax: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    lambda: number;
                    alpha: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Makeham: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    alpha: number;
                    beta: number;
                    lambda: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        MaxwellBoltzmann: {
            new (t?: number): {
                p: {
                    alpha: number;
                    beta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Mielke: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                p: {
                    p: number;
                    a: number;
                    b: number;
                };
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Moyal: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    mu: number;
                    sigma: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Muth: {
            new (t?: number, ...args: any[]): {
                p: {
                    alpha: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _survival(t: any): number;
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Nakagami: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    m: number;
                    omega: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        NegativeBinomial: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    r: number;
                    p: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        NegativeHypergeometric: {
            new (t?: number, s?: number, e?: number): {
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        NeymanA: {
            new (t?: number, s?: number): {
                p: {
                    lambda: number;
                    phi: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _pk(t: any): number;
                _generator(): number;
                TABLE_SIZE: number;
                MAX_NUMBER_OF_TABLES: number;
                logP: boolean;
                aliasTables: any[];
                pdfTable: any[];
                cdfTable: any[];
                _advance(t: any): void;
                _addAliasTable(): void;
                _pdf(t: any): any;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        NoncentralBeta: typeof ns;
        NoncentralChi: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: {
                    k: number;
                    lambda: number;
                };
                c: boolean[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        NoncentralChi2: typeof ps;
        NoncentralF: {
            new (t?: number, s?: number, e?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        NoncentralT: typeof Jt;
        Normal: typeof Ft;
        Pareto: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    xmin: number;
                    alpha: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        PERT: {
            new (t?: number, s?: number, e?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Poisson: {
            new (t?: number, ...args: any[]): {
                p: {
                    lambda: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        PolyaAeppli: {
            new (t?: number, s?: number): {
                p: {
                    lambda: number;
                    theta: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _pk(t: any): any;
                _generator(): number;
                TABLE_SIZE: number;
                MAX_NUMBER_OF_TABLES: number;
                logP: boolean;
                aliasTables: any[];
                pdfTable: any[];
                cdfTable: any[];
                _advance(t: any): void;
                _addAliasTable(): void;
                _pdf(t: any): any;
                _cdf(t: any): any;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Power: {
            new (t?: number): {
                p: {
                    a: number;
                    b: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        QExponential: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                p: {
                    mu: number;
                    sigma: number;
                    xi: number;
                };
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        R: {
            new (t?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Rademacher: {
            new (): {
                _q(t: any): 1 | -1;
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        RaisedCosine: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    mu: number;
                    s: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Rayleigh: {
            new (t?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Reciprocal: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        ReciprocalInverseGaussian: {
            new (t?: number, s?: number): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: {
                    mu: number;
                    lambda: number;
                };
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Rice: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    nu: number;
                    sigma: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        ShiftedLogLogistic: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    mu: number;
                    sigma: number;
                    xi: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Skellam: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    mu1: number;
                    mu2: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        SkewNormal: {
            new (t?: number, s?: number, e?: number): {
                p: any;
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c1: number[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Slash: {
            new (): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c1: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                p: {
                    mu: number;
                    sigma: number;
                };
                c: number[];
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Soliton: {
            new (t?: number): {
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        StudentT: typeof os;
        StudentZ: {
            new (t?: number): {
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                p: {
                    nu: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Trapezoidal: {
            new (t?: number, s?: number, e?: number, a?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                    c: number;
                    d: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Triangular: {
            new (t?: number, s?: number, e?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                    c: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        TukeyLambda: {
            new (t?: number, ...args: any[]): {
                p: {
                    lambda: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): any;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Uniform: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    xmin: number;
                    xmax: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        UniformProduct: {
            new (t?: number, ...args: any[]): {
                p: {
                    n: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        UniformRatio: {
            new (...args: any[]): {
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): number;
                t: any;
                k: any;
                p: {};
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        UQuadratic: {
            new (t?: number, s?: number, ...args: any[]): {
                p: {
                    a: number;
                    b: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): any;
                _pdf(t: any): number;
                _cdf(t: any): number;
                _q(t: any): any;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        VonMises: {
            new (t?: number, ...args: any[]): {
                p: {
                    kappa: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Weibull: typeof Kt;
        Wigner: {
            new (t?: number, ...args: any[]): {
                p: {
                    R: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        YuleSimon: {
            new (t?: number, ...args: any[]): {
                p: {
                    rho: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Zeta: {
            new (t?: number, ...args: any[]): {
                p: {
                    s: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                c: number[];
                _generator(): number;
                _pdf(t: any): number;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
        Zipf: {
            new (t?: number, s?: number): {
                p: {
                    n: number;
                    weights: number[];
                    min: number;
                };
                s: {
                    value: number;
                    closed: boolean;
                }[];
                aliasTable: jt;
                pdfTable: any[];
                cdfTable: any[];
                _generator(): number;
                _pdf(t: any): any;
                _cdf(t: any): number;
                t: any;
                k: any;
                r: e;
                c: any[];
                _toInt(t: any): any;
                _qEstimateTable(t: any): number;
                _qEstimateRoot(t: any): number;
                type(): any;
                support(): any[];
                seed(t: any): any;
                save(): {
                    prngState: any;
                    params: {};
                    constants: any[];
                    support: any[];
                };
                load(t: any): any;
                sample(t?: number): any;
                pdf(t: any): void | 0;
                cdf(t: any): void | 0 | 1;
                q(t: any): any;
                survival(t: any): number;
                hazard(t: any): number;
                cHazard(t: any): number;
                lnPdf(t: any): number;
                lnL(t: any): any;
                aic(t: any): number;
                bic(t: any): number;
                test(t: any): {
                    statistics: number;
                    passed: boolean;
                };
            };
            validate(t: any, s: any): void;
        };
    }>;
    static location: Readonly<{
        __proto__: any;
        geometricMean: (t: any) => number;
        harmonicMean: (t: any) => number;
        mean: typeof r;
        median: typeof _;
        midrange: (t: any) => number;
        mode: (t: any) => any;
        trimean: (t: any) => number;
    }>;
    static shape: Readonly<{
        __proto__: any;
        kurtosis: (t: any) => number;
        moment: typeof ls;
        quantile: typeof x;
        rank: typeof O;
        skewness: (t: any) => number;
        yule: (t: any) => number;
    }>;
    static test: Readonly<{
        __proto__: any;
        bartlett: (t: any, s?: number) => {
            stat: number;
            passed: boolean;
        };
        brownForsythe: (t: any, s?: number) => {
            stat: number;
            passed: boolean;
        };
        hsic: (t: any, s?: number) => {
            stat: number;
            passed: boolean;
        };
        levene: (t: any, s?: number) => {
            stat: number;
            passed: boolean;
        };
        mannWhitney: (t: any, s?: number) => {
            stat: number;
            passed: boolean;
        };
    }>;
}

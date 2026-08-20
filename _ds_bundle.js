/* @ds-bundle: {"format":4,"namespace":"UOUDesignSystem_08270e","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"d3edb7eba065","components/display/Card.jsx":"046b956f6efe","components/forms/Button.jsx":"6deeb934e8c9","components/forms/Input.jsx":"8c2907627ca1","components/navigation/Tabs.jsx":"3e2f246b42a5","decks/admissions-officer-2027/charts.js":"603022e1656c","decks/admissions-officer-2027/deck-stage.js":"2c50f71f5203","ui_kits/uou-website/Brand.jsx":"004bc48edda6","ui_kits/uou-website/Content.jsx":"1fff7f1eac65","ui_kits/uou-website/Footer.jsx":"0be937cd1f37","ui_kits/uou-website/Header.jsx":"6c0ed994e00b","ui_kits/uou-website/Hero.jsx":"638d5aec0d1b","ui_kits/uou-website/Mascot.jsx":"36ab1e1a3c83"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UOUDesignSystem_08270e = window.UOUDesignSystem_08270e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UOU Badge — 좁은 영역의 상태/분류 표시. 칩 형태(radius-full).
 */
function Badge({
  children,
  variant = "default",
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--green-50)",
      color: "var(--green-800)"
    },
    accent: {
      background: "var(--yellow-100)",
      color: "var(--yellow-700)"
    },
    info: {
      background: "var(--gray-100)",
      color: "var(--gray-700)"
    },
    success: {
      background: "var(--green-50)",
      color: "var(--green-700)"
    },
    danger: {
      background: "#FBE9E9",
      color: "var(--color-danger)"
    }
  };
  const vr = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.4,
      borderRadius: "var(--radius-full)",
      whiteSpace: "nowrap",
      ...vr,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UOU Card — 흰 배경, 얇은 보더 또는 그림자, radius-lg. 클릭형은 hover 시 상단 그린 보더.
 */
function Card({
  children,
  title,
  interactive = false,
  elevated = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const showHover = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--gray-0)",
      border: "1px solid var(--gray-200)",
      borderTop: showHover ? "3px solid var(--green-500)" : "1px solid var(--gray-200)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      boxShadow: showHover ? "var(--shadow-md)" : elevated ? "var(--shadow-sm)" : "none",
      cursor: interactive ? "pointer" : "default",
      transition: "box-shadow 140ms ease, border-color 140ms ease",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 var(--space-2)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-h4)",
      lineHeight: "var(--leading-h4)",
      fontWeight: "var(--fw-medium)",
      color: "var(--gray-900)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-body-sm)",
      color: "var(--gray-600)"
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UOU Button — 공식 버튼 컴포넌트.
 * Primary green action by default; variants per CI/UI 매뉴얼 §5.1.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: "0 16px",
      font: "var(--text-body-sm)"
    },
    md: {
      height: 44,
      padding: "0 24px",
      font: "var(--text-body)"
    },
    lg: {
      height: 52,
      padding: "0 28px",
      font: "var(--text-body-lg)"
    }
  };
  const variants = {
    primary: {
      background: "var(--green-500)",
      color: "var(--gray-0)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--gray-0)",
      color: "var(--green-600)",
      border: "1px solid var(--green-500)"
    },
    outline: {
      background: "transparent",
      color: "var(--gray-800)",
      border: "1px solid var(--gray-200)"
    },
    text: {
      background: "transparent",
      color: "var(--green-600)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--color-danger)",
      color: "var(--gray-0)",
      border: "1px solid transparent"
    }
  };
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: "var(--green-600)",
    secondary: "var(--green-50)",
    outline: "var(--gray-50)",
    text: "transparent",
    danger: "#bd2929"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      height: sz.height,
      padding: sz.padding,
      fontFamily: "var(--font-sans)",
      fontSize: sz.font,
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      textDecoration: variant === "text" && hover && !disabled ? "underline" : "none",
      transition: "background 120ms ease, color 120ms ease, border-color 120ms ease",
      ...vr,
      ...(hover && !disabled ? {
        background: hoverBg
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UOU Input — 단일 행 텍스트 입력. 높이 44, 포커스 시 그린 보더 + 포커스 링.
 */
function Input({
  value,
  defaultValue,
  placeholder,
  type = "text",
  disabled = false,
  invalid = false,
  size = "md",
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const height = size === "sm" ? 36 : size === "lg" ? 52 : 44;
  const borderColor = invalid ? "var(--color-danger)" : focus ? "var(--green-500)" : "var(--gray-300)";
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      boxSizing: "border-box",
      width: "100%",
      height,
      padding: "0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      color: "var(--gray-900)",
      background: disabled ? "var(--gray-100)" : "var(--gray-0)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus && !invalid ? "var(--focus-ring)" : "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      cursor: disabled ? "not-allowed" : "text",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UOU Tabs — 하단 그린 인디케이터 탭. items: [{ id, label }].
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--gray-100)",
      ...style
    }
  }, rest), items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(it.id),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        padding: "0 0 12px",
        marginBottom: -1,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-body)",
        fontWeight: isActive ? "var(--fw-bold)" : "var(--fw-medium)",
        color: isActive ? "var(--green-500)" : "var(--gray-600)",
        borderBottom: isActive ? "2px solid var(--green-500)" : "2px solid transparent",
        cursor: "pointer",
        transition: "color 120ms ease"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// decks/admissions-officer-2027/charts.js
try { (() => {
/* ── UOU 2027 위촉사정관 운영 안내 · charts ──────────────────────────── */
(function () {
  const C = {
    ink: '#1C1E20',
    body: '#333333',
    muted: '#71767B',
    grid: '#EFF0F1',
    axis: '#DCDEE0',
    axisStrong: '#9A9EA3',
    green: '#009A44',
    greenDk: '#006E30',
    danger: '#D32F2F',
    yellow: '#CC9900',
    band: {
      1: '#5E35B1',
      2: '#2563EB',
      3: '#009A44',
      4: '#CC9900'
    }
  };
  const bandLabel = {
    1: '지원중위 ~2.0 (최상위)',
    2: '지원중위 2.0~3.0 (상위)',
    3: '지원중위 3.0~4.0 (중위)',
    4: '지원중위 4.0+ (하위)'
  };
  const NS = 'http://www.w3.org/2000/svg';
  const el = (t, a) => {
    const e = document.createElementNS(NS, t);
    for (const k in a) e.setAttribute(k, a[k]);
    return e;
  };

  /* ───── scatter ───── */
  function scatter(svgId, legendId, data, mean, thresh) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    const W = 1640,
      H = 560;
    const m = {
      t: 26,
      r: 150,
      b: 34,
      l: 64
    };
    const pw = W - m.l - m.r,
      ph = H - m.t - m.b;
    const gaps = data.map(d => d.gap);
    const yMax = Math.max(0.3, Math.max(...gaps) + 0.12);
    const yMin = Math.min(...gaps) - 0.14;
    const yT = v => m.t + (yMax - v) / (yMax - yMin) * ph;
    const xT = f => m.l + f * pw;

    // y gridlines / ticks (0.25 steps)
    const step = 0.25;
    const start = Math.ceil(yMin / step) * step;
    for (let v = start; v <= yMax + 1e-6; v += step) {
      const y = yT(v);
      svg.appendChild(el('line', {
        x1: m.l,
        y1: y,
        x2: m.l + pw,
        y2: y,
        stroke: C.grid,
        'stroke-width': 1
      }));
      const tk = el('text', {
        x: m.l - 12,
        y: y + 4,
        'text-anchor': 'end',
        fill: C.axisStrong,
        'font-size': 15,
        'font-family': 'var(--font-mono)'
      });
      tk.textContent = v.toFixed(2);
      svg.appendChild(tk);
    }
    // y axis line
    svg.appendChild(el('line', {
      x1: m.l,
      y1: m.t,
      x2: m.l,
      y2: m.t + ph,
      stroke: C.axis,
      'stroke-width': 1
    }));

    // reference lines
    const ref = (v, color, dash, label) => {
      const y = yT(v);
      svg.appendChild(el('line', {
        x1: m.l,
        y1: y,
        x2: m.l + pw,
        y2: y,
        stroke: color,
        'stroke-width': 1.6,
        'stroke-dasharray': dash
      }));
      const t = el('text', {
        x: m.l + pw + 10,
        y: y + 4,
        fill: color,
        'font-size': 16,
        'font-weight': 700
      });
      t.textContent = label;
      svg.appendChild(t);
    };
    ref(0, C.axisStrong, '0', '기준선 0');
    ref(mean, C.green, '8 5', `평균 ${mean.toFixed(3)}`);
    ref(thresh, C.danger, '2 5', `특징값 임계 ${thresh.toFixed(3)}`);

    // points + greedy de-cluttered name labels (guarantees no overlap)
    const pts = data.map(d => ({
      d,
      x: xT(d.xf),
      y: yT(d.gap)
    }));
    pts.forEach(p => {
      const {
        d,
        x,
        y
      } = p;
      const fill = d.feature ? C.danger : C.band[d.band];
      const r = 8;
      const mark = d.feature ? el('rect', {
        x: x - r,
        y: y - r,
        width: r * 2,
        height: r * 2,
        rx: 2,
        fill: fill,
        class: 'spt',
        style: `animation-delay:${0.1 + p.x / 1640 * 0.6}s`
      }) : el('rect', {
        x: x - r,
        y: y - r,
        width: r * 2,
        height: r * 2,
        rx: 2,
        fill: fill,
        transform: `rotate(45 ${x} ${y})`,
        class: 'spt',
        style: `animation-delay:${0.1 + p.x / 1640 * 0.6}s`
      });
      svg.appendChild(mark);
      const nn = el('text', {
        x: x,
        y: y + 22,
        'text-anchor': 'middle',
        fill: C.muted,
        'font-size': 13,
        'font-family': 'var(--font-mono)'
      });
      nn.textContent = 'n=' + d.n;
      svg.appendChild(nn);
    });
    // place names above each point, lifting into a fresh row only on collision
    const FS = 15,
      LH = 19,
      PAD = 10;
    const placed = [];
    [...pts].sort((a, b) => a.x - b.x).forEach(p => {
      const hw = p.d.name.length * FS / 2 + 4;
      let ly = p.y - 18,
        guard = 0;
      while (guard++ < 40 && placed.some(q => Math.abs(q.x - p.x) < q.hw + hw + PAD && Math.abs(q.ly - ly) < LH)) {
        ly -= LH;
      }
      placed.push({
        x: p.x,
        ly: ly,
        hw: hw
      });
      if (p.y - ly > 26) {
        svg.appendChild(el('line', {
          x1: p.x,
          y1: p.y - 12,
          x2: p.x,
          y2: ly + 4,
          stroke: C.axis,
          'stroke-width': 1
        }));
      }
      const nm = el('text', {
        x: p.x,
        y: ly,
        'text-anchor': 'middle',
        fill: C.body,
        'font-size': FS,
        'font-weight': 600
      });
      nm.textContent = p.d.name;
      svg.appendChild(nm);
    });

    // legend
    const lg = document.getElementById(legendId);
    if (lg) {
      [1, 2, 3, 4].forEach(b => {
        const it = document.createElement('span');
        it.className = 'it';
        it.innerHTML = `<span class="sw dia" style="background:${C.band[b]}"></span>${bandLabel[b]}`;
        lg.appendChild(it);
      });
      const f = document.createElement('span');
      f.className = 'it';
      f.innerHTML = `<span class="sw" style="background:${C.danger}"></span>특징값 (임계 미만)`;
      lg.appendChild(f);
    }
  }
  const D2025 = {
    mean: -0.429,
    thresh: -0.502,
    data: [{
      name: '자율전공학부',
      gap: -1.05,
      band: 4,
      feature: true,
      n: 18,
      xf: 0.06
    }, {
      name: '미래모빌리티공학부',
      gap: -0.70,
      band: 4,
      feature: true,
      n: 120,
      xf: 0.16
    }, {
      name: '에너지화학공학부',
      gap: -0.58,
      band: 4,
      feature: true,
      n: 36,
      xf: 0.25
    }, {
      name: 'ICT융합학부',
      gap: -0.50,
      band: 4,
      feature: true,
      n: 88,
      xf: 0.34
    }, {
      name: '공공인재학부',
      gap: -0.52,
      band: 4,
      feature: true,
      n: 115,
      xf: 0.44
    }, {
      name: '경영경제융합학부',
      gap: -0.38,
      band: 4,
      feature: false,
      n: 132,
      xf: 0.52
    }, {
      name: '신소재·반도체공학부',
      gap: -0.41,
      band: 4,
      feature: false,
      n: 61,
      xf: 0.60
    }, {
      name: '건축·도시환경학부',
      gap: -0.33,
      band: 4,
      feature: false,
      n: 77,
      xf: 0.68
    }, {
      name: '글로벌인문학부',
      gap: -0.31,
      band: 4,
      feature: false,
      n: 94,
      xf: 0.76
    }, {
      name: '전기전자융합학부',
      gap: -0.30,
      band: 3,
      feature: false,
      n: 69,
      xf: 0.83
    }, {
      name: '바이오메디컬헬스학부',
      gap: -0.20,
      band: 4,
      feature: false,
      n: 49,
      xf: 0.90
    }, {
      name: '간호학과',
      gap: -0.25,
      band: 2,
      feature: false,
      n: 22,
      xf: 0.955
    }, {
      name: '의예과',
      gap: -0.05,
      band: 1,
      feature: false,
      n: 11,
      xf: 0.99
    }]
  };
  const D2026 = {
    mean: -0.259,
    thresh: -0.315,
    data: [{
      name: '자율전공학부',
      gap: -0.09,
      band: 3,
      feature: false,
      n: 38,
      xf: 0.06
    }, {
      name: '미래모빌리티공학부',
      gap: -0.25,
      band: 3,
      feature: false,
      n: 123,
      xf: 0.16
    }, {
      name: '에너지화학공학부',
      gap: -0.10,
      band: 2,
      feature: false,
      n: 40,
      xf: 0.25
    }, {
      name: 'ICT융합학부',
      gap: -0.40,
      band: 4,
      feature: true,
      n: 85,
      xf: 0.32
    }, {
      name: '공공인재학부',
      gap: -0.22,
      band: 4,
      feature: false,
      n: 105,
      xf: 0.41
    }, {
      name: '경영경제융합학부',
      gap: -0.23,
      band: 4,
      feature: false,
      n: 132,
      xf: 0.50
    }, {
      name: '신소재·반도체공학부',
      gap: -0.40,
      band: 4,
      feature: true,
      n: 61,
      xf: 0.58
    }, {
      name: '건축·도시환경학부',
      gap: -0.30,
      band: 4,
      feature: false,
      n: 77,
      xf: 0.66
    }, {
      name: '전기전자융합학부',
      gap: -0.20,
      band: 3,
      feature: false,
      n: 73,
      xf: 0.74
    }, {
      name: '글로벌인문학부',
      gap: -0.60,
      band: 4,
      feature: true,
      n: 94,
      xf: 0.63
    }, {
      name: '바이오메디컬헬스학부',
      gap: -0.60,
      band: 4,
      feature: true,
      n: 49,
      xf: 0.85
    }, {
      name: '간호학과',
      gap: -0.02,
      band: 2,
      feature: false,
      n: 30,
      xf: 0.93
    }, {
      name: '의예과',
      gap: -0.01,
      band: 1,
      feature: false,
      n: 11,
      xf: 0.99
    }]
  };

  /* ───── tables ───── */
  function deltaSpan(d) {
    if (!d) return '';
    const up = d.indexOf('▲') === 0;
    return ` <span class="d ${up ? 'up' : 'dn'}">${d}</span>`;
  }
  function fillTable(id, rows) {
    const tb = document.getElementById(id);
    if (!tb) return;
    rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<th scope="row">${r[0]}</th>` + `<td><span class="v">${r[1].toFixed(2)}</span>${deltaSpan(r[2])}</td>` + `<td class="cut">${r[3].toFixed(2)}${deltaSpan(r[4])}</td>` + `<td class="col-sep cut">${r[5].toFixed(2)}</td>` + `<td class="cut">${r[6].toFixed(2)}</td>`;
      tb.appendChild(tr);
    });
  }
  const SCI = [['미래모빌리티공학부', 3.50, '▲0.30', 3.32, '▲0.18', 3.80, 3.49], ['에너지화학공학부', 3.00, '▼0.30', 2.79, '▼0.42', 2.70, 2.36], ['신소재·반도체공학부', 4.00, '▲0.40', 3.77, '▲0.34', 4.40, 4.10], ['전기전자융합학부', 3.30, '▲0.20', 3.08, '▲0.24', 3.50, 3.32], ['ICT융합학부', 4.00, '▲0.40', 3.82, '▲0.20', 4.40, 4.02], ['바이오메디컬헬스학부', 4.20, '▲0.30', 3.82, '▲0.32', 4.50, 4.14], ['건축·도시환경학부', 4.50, '▲0.30', 4.22, '▲0.21', 4.80, 4.43]];
  const HUM = [['공공인재학부', 4.32, '▲0.08', 4.00, '▲0.04', 4.40, 4.04], ['경영경제융합학부', 4.40, '▲0.13', 4.06, '▲0.09', 4.53, 4.15], ['글로벌인문학부', 5.10, '▲0.20', 4.67, '▲0.18', 5.30, 4.85]];
  const SPEC = [['아산아너스칼리지', 3.70, '▼0.75', 3.46, '▼0.71', 2.95, 2.75], ['의예과', 1.02, '▲0.02', 1.02, '▲0.02', 1.04, 1.04], ['간호학과', 2.71, '▼0.55', 2.82, '▼0.78', 2.16, 2.04]];

  /* ───── donut ───── */
  function donut() {
    const svg = document.getElementById('donut');
    if (!svg) return;
    const cx = 60,
      cy = 60,
      r = 46,
      sw = 18,
      circ = 2 * Math.PI * r;
    svg.appendChild(el('circle', {
      cx,
      cy,
      r,
      fill: 'none',
      stroke: '#DCDEE0',
      'stroke-width': sw
    }));
    const susi = el('circle', {
      cx,
      cy,
      r,
      fill: 'none',
      stroke: C.green,
      'stroke-width': sw,
      class: 'donut-arc',
      'stroke-dasharray': `${circ * 0.95} ${circ}`,
      'stroke-linecap': 'butt',
      transform: `rotate(-90 ${cx} ${cy})`
    });
    svg.appendChild(susi);
    const t1 = el('text', {
      x: cx,
      y: cy - 2,
      'text-anchor': 'middle',
      fill: C.greenDk,
      'font-size': 17,
      'font-weight': 700
    });
    t1.textContent = '95%';
    svg.appendChild(t1);
    const t2 = el('text', {
      x: cx,
      y: cy + 14,
      'text-anchor': 'middle',
      fill: C.muted,
      'font-size': 7.5,
      'font-weight': 600
    });
    t2.textContent = '수시모집';
    svg.appendChild(t2);
  }

  /* ───── grouped bars ───── */
  function groupedBars(svgId, o) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    const vb = svg.viewBox.baseVal,
      W = vb.width,
      H = vb.height;
    const m = {
        t: 44,
        r: 20,
        b: 54,
        l: 56
      },
      pw = W - m.l - m.r,
      ph = H - m.t - m.b;
    const yMax = o.yMax,
      yMin = o.yMin || 0,
      yT = v => m.t + (yMax - v) / (yMax - yMin) * ph;
    const ticks = o.ticks || 5;
    for (let i = 0; i <= ticks; i++) {
      const v = yMin + (yMax - yMin) * i / ticks,
        y = yT(v);
      svg.appendChild(el('line', {
        x1: m.l,
        y1: y,
        x2: m.l + pw,
        y2: y,
        stroke: C.grid,
        'stroke-width': 1
      }));
      const tk = el('text', {
        x: m.l - 10,
        y: y + 4,
        'text-anchor': 'end',
        fill: C.axisStrong,
        'font-size': 13,
        'font-family': 'var(--font-mono)'
      });
      tk.textContent = o.tick ? o.tick(v) : v.toFixed(0);
      svg.appendChild(tk);
    }
    const hiList = o.hiCats != null ? o.hiCats : o.hiCat != null ? [o.hiCat] : [];
    hiList.forEach(hc => {
      const gwh = pw / o.cats.length,
        gxh = m.l + gwh * hc;
      svg.appendChild(el('rect', {
        x: gxh + 5,
        y: m.t,
        width: gwh - 10,
        height: ph,
        rx: 8,
        fill: '#E6F5EC',
        class: 'hiband'
      }));
    });
    // legend
    let lx = m.l;
    o.series.forEach(se => {
      svg.appendChild(el('rect', {
        x: lx,
        y: 8,
        width: 16,
        height: 16,
        rx: 3,
        fill: se.color
      }));
      const t = el('text', {
        x: lx + 22,
        y: 21,
        fill: C.body,
        'font-size': 15,
        'font-weight': 600
      });
      t.textContent = se.name;
      svg.appendChild(t);
      lx += se.name.length * 15 + 54;
    });
    const n = o.cats.length,
      s = o.series.length,
      gw = pw / n;
    const bw = Math.min(o.maxBar || 60, gw * 0.72 / s),
      grp = bw * s + (s - 1) * 6;
    o.cats.forEach((cat, ci) => {
      const gx = m.l + gw * ci + gw / 2;
      o.series.forEach((se, si) => {
        const v = se.values[ci];
        if (v == null) return;
        const x = gx - grp / 2 + si * (bw + 6),
          y = yT(v),
          h = m.t + ph - y;
        svg.appendChild(el('rect', {
          x: x,
          y: y,
          width: bw,
          height: Math.max(0, h),
          rx: 4,
          fill: se.color,
          class: 'gbar',
          style: `animation-delay:${(ci * s + si) * 0.05}s`
        }));
        const vt = el('text', {
          x: x + bw / 2,
          y: y - 8,
          'text-anchor': 'middle',
          fill: C.ink,
          'font-size': o.valSize || 14,
          'font-weight': 700,
          class: 'gval',
          style: `animation-delay:${0.42 + (ci * s + si) * 0.04}s`
        });
        vt.textContent = o.vfmt ? o.vfmt(v) : v;
        svg.appendChild(vt);
      });
      const xl = el('text', {
        x: gx,
        y: m.t + ph + 28,
        'text-anchor': 'middle',
        fill: C.body,
        'font-size': 17,
        'font-weight': 600
      });
      xl.textContent = cat;
      svg.appendChild(xl);
    });
  }

  /* ───── line chart ───── */
  function lineChart(svgId, o) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    const vb = svg.viewBox.baseVal,
      W = vb.width,
      H = vb.height;
    const m = {
        t: 26,
        r: 28,
        b: 56,
        l: 54
      },
      pw = W - m.l - m.r,
      ph = H - m.t - m.b;
    const yMax = o.yMax,
      yMin = o.yMin || 0,
      yT = v => m.t + (yMax - v) / (yMax - yMin) * ph;
    const n = o.cats.length,
      xT = i => m.l + pw * i / (n - 1),
      ticks = o.ticks || 4;
    for (let i = 0; i <= ticks; i++) {
      const v = yMin + (yMax - yMin) * i / ticks,
        y = yT(v);
      svg.appendChild(el('line', {
        x1: m.l,
        y1: y,
        x2: m.l + pw,
        y2: y,
        stroke: C.grid,
        'stroke-width': 1
      }));
      const tk = el('text', {
        x: m.l - 10,
        y: y + 4,
        'text-anchor': 'end',
        fill: C.axisStrong,
        'font-size': 13,
        'font-family': 'var(--font-mono)'
      });
      tk.textContent = o.tick ? o.tick(v) : v.toFixed(0);
      svg.appendChild(tk);
    }
    o.cats.forEach((c, i) => {
      const t = el('text', {
        x: xT(i),
        y: m.t + ph + 26,
        'text-anchor': 'middle',
        fill: C.body,
        'font-size': 14,
        'font-weight': 600
      });
      t.textContent = c;
      svg.appendChild(t);
    });
    o.series.forEach((se, si) => {
      let d = '',
        started = false;
      se.values.forEach((v, i) => {
        if (v == null) {
          started = false;
          return;
        }
        const x = xT(i),
          y = yT(v);
        d += (started ? 'L' : 'M') + x + ' ' + y + ' ';
        started = true;
      });
      svg.appendChild(el('path', {
        d: d,
        fill: 'none',
        stroke: se.color,
        'stroke-width': 3,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
        pathLength: 1,
        class: 'lline',
        style: `animation-delay:${si * 0.18}s`
      }));
      se.values.forEach((v, i) => {
        if (v == null) return;
        svg.appendChild(el('circle', {
          cx: xT(i),
          cy: yT(v),
          r: 4.5,
          fill: '#fff',
          stroke: se.color,
          'stroke-width': 2.5,
          class: 'ldot',
          style: `animation-delay:${0.75 + si * 0.18 + i * 0.015}s`
        }));
      });
    });
    if (o.legendId) {
      const lg = document.getElementById(o.legendId);
      if (lg) o.series.forEach(se => {
        const it = document.createElement('span');
        it.className = 'it';
        it.innerHTML = `<span class="sw" style="background:${se.color}"></span>${se.name}`;
        lg.appendChild(it);
      });
    }
  }

  /* ───── 종합형 입결 tables ───── */
  function fillIpgyeol(id, rows) {
    const tb = document.getElementById(id);
    if (!tb) return;
    rows.forEach((r, ri) => {
      const up = String(r[9]).indexOf('▲') === 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `<th scope="row">${r[0]}</th>` + `<td>${r[1]}</td><td>${r[2]}</td><td>${r[3].toFixed(2)}</td><td><span class="v">${r[4].toFixed(2)}</span></td>` + `<td class="col-sep">${r[5]}</td><td>${r[6]}</td><td>${r[7].toFixed(2)}</td><td class="hl colpen" style="animation-delay:${(0.1 + ri * 0.07).toFixed(2)}s"><span class="v">${r[8].toFixed(2)}</span></td>` + `<td class="col-sep ${up ? 'up' : 'dn'}">${r[9]}</td>`;
      tb.appendChild(tr);
    });
  }
  const JIYEOK = [['의예과', 30, 263, 8.77, 1.27, 13, 167, 12.85, 1.13, '▲ 0.14'], ['간호학과', 17, 163, 9.59, 2.36, 13, 110, 8.46, 2.30, '▲ 0.06'], ['자율전공학부', 10, 81, 8.10, 2.85, 20, 76, 3.80, 3.24, '▼ 0.39'], ['에너지화학공학부', 24, 115, 4.79, 3.66, 23, 76, 3.30, 3.91, '▼ 0.25'], ['전기전자융합학부', 35, 120, 3.43, 4.41, 32, 128, 4.00, 4.28, '▲ 0.13'], ['미래모빌리티공학부', 50, 244, 4.88, 4.84, 47, 282, 6.00, 4.46, '▲ 0.38'], ['ICT융합학부', 40, 139, 3.48, 4.89, 38, 156, 4.11, 4.68, '▲ 0.21'], ['디자인융합학부', 9, 38, 4.22, 5.23, 8, 38, 4.75, 4.82, '▲ 0.41'], ['신소재·반도체융합학부', 27, 80, 2.96, 5.15, 23, 115, 5.00, 4.89, '▲ 0.26'], ['공공인재학부', 52, 198, 3.81, 5.10, 47, 192, 4.09, 5.08, '▲ 0.02'], ['바이오메디컬헬스학부', 27, 101, 3.74, 5.28, 24, 93, 3.88, 5.15, '▲ 0.13'], ['건축·도시환경학부', 42, 108, 2.57, 5.62, 37, 133, 3.59, 5.26, '▲ 0.36'], ['경영경제융합학부', 60, 146, 2.43, 5.48, 53, 180, 3.40, 5.31, '▲ 0.17'], ['글로벌인문학부', 47, 140, 2.98, 5.77, 41, 164, 4.00, 5.51, '▲ 0.26']];
  const JAMJAE = [['의예과', 34, 575, 16.91, 1.13, 10, 190, 19.00, 1.03, '▲ 0.10'], ['간호학과', 18, 207, 11.50, 2.65, 15, 132, 8.80, 2.62, '▲ 0.03'], ['자율전공학부', 15, 112, 7.47, 3.19, 30, 95, 3.17, 3.59, '▼ 0.40'], ['에너지화학공학부', 25, 97, 3.88, 4.05, 24, 81, 3.38, 4.14, '▼ 0.09'], ['전기전자융합학부', 32, 127, 3.97, 4.90, 30, 144, 4.80, 4.69, '▲ 0.21'], ['미래모빌리티공학부', 40, 192, 4.80, 5.11, 38, 258, 6.79, 4.87, '▲ 0.24'], ['신소재·반도체융합학부', 25, 69, 2.76, 5.35, 24, 87, 3.62, 5.37, '▼ 0.02'], ['ICT융합학부', 50, 118, 2.36, 5.51, 46, 152, 3.30, 5.46, '▲ 0.05'], ['바이오메디컬헬스학부', 25, 57, 2.28, 5.67, 22, 67, 3.05, 5.48, '▲ 0.19'], ['경영경제융합학부', 50, 86, 1.72, 6.02, 44, 123, 2.80, 5.63, '▲ 0.39'], ['공공인재학부', 50, 121, 2.42, 5.52, 46, 139, 3.02, 5.64, '▼ 0.12'], ['디자인융합학부', 23, 49, 2.13, 5.73, 22, 54, 2.45, 5.66, '▲ 0.07'], ['건축·도시환경학부', 40, 78, 1.95, 5.90, 35, 103, 2.94, 5.69, '▲ 0.21'], ['글로벌인문학부', 50, 93, 1.86, 6.25, 44, 111, 2.52, 6.35, '▼ 0.10']];

  /* ───── 교과형 vs 학종형 소형 멀티플 ───── */
  function miniGrade(svgId, gyo, jong) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    const vb = svg.viewBox.baseVal,
      W = vb.width,
      H = vb.height;
    const m = {
        t: 14,
        r: 16,
        b: 28,
        l: 16
      },
      pw = W - m.l - m.r,
      ph = H - m.t - m.b;
    const all = [...gyo, ...jong].filter(v => v != null);
    let vmin = Math.min(...all),
      vmax = Math.max(...all);
    const range0 = vmax - vmin || 1;
    vmin -= range0 * 0.12;
    vmax += range0 * 0.34;
    const yT = v => m.t + (v - vmin) / (vmax - vmin) * ph; // lower grade -> top (inverted)
    const xT = i => m.l + pw * i / 2;
    for (let i = 0; i <= 3; i++) {
      const y = m.t + ph * i / 3;
      svg.appendChild(el('line', {
        x1: m.l,
        y1: y,
        x2: m.l + pw,
        y2: y,
        stroke: C.grid,
        'stroke-width': 1
      }));
    }
    ['24', '25', '26'].forEach((lb, i) => {
      const t = el('text', {
        x: xT(i),
        y: m.t + ph + 19,
        'text-anchor': 'middle',
        fill: C.muted,
        'font-size': 13,
        'font-family': 'var(--font-mono)'
      });
      t.textContent = lb;
      svg.appendChild(t);
    });
    const NAVY = '#1E2F6B',
      ORANGE = '#E0871C';
    function draw(vals, other, color, marker, defAbove) {
      for (let i = 0; i < vals.length - 1; i++) {
        const a = vals[i],
          b = vals[i + 1];
        if (a == null || b == null) continue;
        const col = b > a ? C.danger : C.green;
        svg.appendChild(el('line', {
          x1: xT(i),
          y1: yT(a),
          x2: xT(i + 1),
          y2: yT(b),
          stroke: col,
          'stroke-width': 3.5,
          'stroke-linecap': 'round',
          pathLength: 1,
          class: 'mgl'
        }));
      }
      vals.forEach((v, i) => {
        if (v == null) return;
        const x = xT(i),
          y = yT(v);
        if (marker === 'sq') svg.appendChild(el('rect', {
          x: x - 5,
          y: y - 5,
          width: 10,
          height: 10,
          rx: 1.5,
          fill: color,
          class: 'mgm'
        }));else svg.appendChild(el('circle', {
          cx: x,
          cy: y,
          r: 5.5,
          fill: color,
          class: 'mgm'
        }));
        let above = defAbove;
        const o = other[i];
        if (o != null && o !== v) above = v < o;
        const anchor = i === 0 ? 'start' : i === vals.length - 1 ? 'end' : 'middle';
        const dx = i === 0 ? -2 : i === vals.length - 1 ? 2 : 0;
        const t = el('text', {
          x: x + dx,
          y: above ? y - 11 : y + 20,
          'text-anchor': anchor,
          fill: color,
          'font-size': 15,
          'font-weight': 700,
          class: 'mgv'
        });
        t.textContent = v.toFixed(1);
        svg.appendChild(t);
      });
    }
    draw(gyo, jong, NAVY, 'dot', true);
    draw(jong, gyo, ORANGE, 'sq', false);
  }
  const SM = [['sm1', [2.1, 2.2, 2.9], [2.6, 2.7, 2.6]], ['sm2', [null, 2.8, 3.6], [null, 3.1, 3.5]], ['sm3', [3.9, 3.4, 3.8], [4.2, 3.9, 4.0]], ['sm4', [4.2, 4.2, 4.0], [4.6, 4.7, 4.5]], ['sm5', [4.7, 4.4, 4.2], [5.1, 5.1, 4.7]], ['sm6', [6.6, 5.6, 4.2], [null, null, null]], ['sm7', [5.1, 5.0, 4.6], [5.9, 5.3, 5.1]], ['sm8', [5.2, 4.9, 4.6], [5.5, 5.7, 5.3]], ['sm9', [5.0, 4.8, 4.6], [5.1, 5.3, 5.2]], ['sm10', [5.1, 4.9, 4.8], [5.5, 5.4, 5.4]], ['sm11', [5.3, 5.0, 4.9], [5.5, 5.9, 5.5]], ['sm12', [5.9, 5.2, 5.0], [5.4, 5.7, 5.4]], ['sm13', [5.4, 5.2, 5.0], [5.8, 5.8, 5.5]], ['sm14', [5.7, 5.7, 5.4], [6.2, 5.9, 6.0]]];
  function render() {
    scatter('scatter2025', 'legend2025', D2025.data, D2025.mean, D2025.thresh);
    scatter('scatter2026', 'legend2026', D2026.data, D2026.mean, D2026.thresh);
    fillTable('sciTable', SCI);
    fillTable('humTable', HUM);
    fillTable('specTable', SPEC);
    donut();
    fillIpgyeol('jiyeokTbl', JIYEOK);
    fillIpgyeol('jamjaeTbl', JAMJAE);
    SM.forEach(s => miniGrade(s[0], s[1], s[2]));
    groupedBars('regChart', {
      cats: ['교과형', '종합형', '수능형'],
      hiCat: 1,
      yMax: 80,
      ticks: 4,
      maxBar: 42,
      valSize: 13,
      vfmt: v => v.toFixed(1),
      series: [{
        name: '2024',
        color: '#8FD4AC',
        values: [30.3, 56.2, 38.8]
      }, {
        name: '2025',
        color: '#00873B',
        values: [35.8, 63.1, 43.7]
      }, {
        name: '2026',
        color: '#006E30',
        values: [32.9, 69.4, 59.6]
      }]
    });
    groupedBars('gpaChart', {
      cats: ['일반교과', '지역교과', '지역인재', '잠재역량', '수능'],
      yMin: 2.5,
      yMax: 3.3,
      ticks: 4,
      maxBar: 34,
      valSize: 12,
      tick: v => v.toFixed(1),
      vfmt: v => v.toFixed(2),
      series: [{
        name: '2024학번',
        color: '#5BBF85',
        values: [2.987, null, 2.970, 2.891, 3.020]
      }, {
        name: '2025학번',
        color: '#00873B',
        values: [3.183, 2.958, 2.984, 2.895, 2.994]
      }]
    });
    lineChart('bandChart', {
      cats: ['0–10', '10–20', '20–30', '30–40', '40–50', '50–60', '60–70', '70–80', '80–90', '90–100'],
      yMax: 80,
      ticks: 4,
      legendId: 'bandLegend',
      series: [{
        name: '2024',
        color: '#9A9EA3',
        values: [53.1, 56.6, 63.6, 50.3, 61.7, 44.2, 41.2, 37.0, 21.1, 37.0]
      }, {
        name: '2025',
        color: '#CC9900',
        values: [55.7, 64.9, 63.0, 57.2, 54.2, 59.4, 58.3, 61.5, null, null]
      }, {
        name: '2026',
        color: '#009A44',
        values: [59.9, 69.2, 72.9, 64.6, 53.8, 12.5, null, null, null, null]
      }]
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);else render();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "decks/admissions-officer-2027/charts.js", error: String((e && e.message) || e) }); }

// decks/admissions-officer-2027/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "decks/admissions-officer-2027/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/uou-website/Brand.jsx
try { (() => {
/* global React */
// UOU signature — OFFICIAL UOU logomark (assets/logo/logomark-solid.png) + 로고타입 text.
// The logomark image must not be stretched/recolored/rotated (CI §9.3).
function Wordmark({
  color = "var(--gray-900)",
  sub = "var(--gray-500)",
  compact = false,
  mark = "solid"
}) {
  const src = mark === "white" ? "../../assets/logo/logomark-outline.png" : "../../assets/logo/logomark-solid.png";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "\uC6B8\uC0B0\uB300\uD559\uAD50 UOU",
    style: {
      height: 30,
      width: "auto",
      flex: "none",
      display: "block"
    }
  }), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.1,
      borderLeft: "1px solid var(--gray-200)",
      paddingLeft: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color,
      letterSpacing: "-0.01em"
    }
  }, "\uC6B8\uC0B0\uB300\uD559\uAD50"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: sub,
      letterSpacing: "0.08em"
    }
  }, "UNIVERSITY OF ULSAN")));
}

// Lucide icon helper — renders the placeholder, then swaps it to an SVG after
// every render (covers state-driven re-renders too).
function Icon({
  name,
  size = 20,
  color = "currentColor",
  style
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex",
      ...style
    }
  });
}
window.Wordmark = Wordmark;
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uou-website/Brand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/uou-website/Content.jsx
try { (() => {
/* global React, Icon */
// Notice board with tabs + list, and a program/news card grid.
function NoticeBoard() {
  const {
    Tabs,
    Badge
  } = window.UOUDesignSystem_08270e;
  const data = {
    notice: [{
      tag: "학사",
      title: "2026학년도 1학기 수강신청 일정 안내",
      date: "2026.06.12",
      isNew: true
    }, {
      tag: "장학",
      title: "2학기 국가장학금 신청 안내 (1차)",
      date: "2026.06.10",
      isNew: true
    }, {
      tag: "일반",
      title: "여름 계절학기 등록금 납부 기간 공지",
      date: "2026.06.09"
    }, {
      tag: "행정",
      title: "교내 통합 정보시스템 정기 점검 안내",
      date: "2026.06.05"
    }],
    event: [{
      tag: "행사",
      title: "제54회 대학 학술제 '진리제' 개최",
      date: "2026.06.14",
      isNew: true
    }, {
      tag: "특강",
      title: "노벨상 수상자 초청 공개 특별강연",
      date: "2026.06.11"
    }, {
      tag: "문화",
      title: "벚꽃동산 야외 음악회 — 봄밤의 선율",
      date: "2026.06.02"
    }],
    recruit: [{
      tag: "채용",
      title: "2026년 교직원 신규 임용 공고",
      date: "2026.06.13",
      isNew: true
    }, {
      tag: "산학",
      title: "산학협력단 연구원 모집 (계약직)",
      date: "2026.06.07"
    }]
  };
  const [tab, setTab] = React.useState("notice");
  const rows = data[tab];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "80px auto 0",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: "var(--gray-900)",
      margin: 0
    }
  }, "\uC18C\uC2DD \xB7 \uACF5\uC9C0"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--green-700)",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, "\uC804\uCCB4\uBCF4\uAE30 ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  }))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: "notice",
      label: "공지사항"
    }, {
      id: "event",
      label: "행사·특강"
    }, {
      id: "recruit",
      label: "채용·산학"
    }]
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "18px 4px",
      borderBottom: "1px solid var(--gray-100)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 56
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "info"
  }, r.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 16,
      color: "var(--gray-800)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, r.title, r.isNew && /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "N")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      fontSize: 14,
      color: "var(--gray-500)",
      fontFamily: "var(--font-mono)"
    }
  }, r.date)))));
}
function Highlights() {
  const {
    Card,
    Badge
  } = window.UOUDesignSystem_08270e;
  const cards = [{
    tag: "연구",
    title: "전기차 배터리 연구단, 국제 학술상 수상",
    desc: "차세대 이차전지 분야 원천기술 성과를 인정받았습니다."
  }, {
    tag: "입학",
    title: "2027학년도 수시모집 전형 안내",
    desc: "학생부종합·교과 전형 일정과 모집인원을 확인하세요."
  }, {
    tag: "국제",
    title: "글로벌 교환학생 파견 프로그램 모집",
    desc: "30개국 120개 협정 대학으로의 교환·복수학위 기회."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "72px auto 0",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: "var(--gray-900)",
      margin: "0 0 24px"
    }
  }, "\uC8FC\uC694 \uC18C\uC2DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, null, c.tag)), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 20,
      lineHeight: "28px",
      fontWeight: 700,
      color: "var(--gray-900)",
      margin: "0 0 10px"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: "22px",
      color: "var(--gray-600)",
      margin: 0
    }
  }, c.desc)))));
}
window.NoticeBoard = NoticeBoard;
window.Highlights = Highlights;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uou-website/Content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/uou-website/Footer.jsx
try { (() => {
/* global React, Wordmark, Icon */
// Footer — UOU Gray background, optional 4px green top line. §5.5.
function SiteFooter() {
  const cols = [{
    h: "바로가기",
    links: ["대학 홈페이지", "학사정보시스템", "도서관", "포털"]
  }, {
    h: "정보공개",
    links: ["대학정보공시", "규정집", "감사실", "개인정보처리방침"]
  }, {
    h: "패밀리사이트",
    links: ["부속병원", "산학협력단", "평생교육원", "박물관"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 96,
      background: "var(--gray-800)",
      color: "var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "var(--green-500)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "48px 24px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    color: "#fff",
    sub: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: "22px",
      color: "var(--gray-400)",
      margin: "20px 0 0"
    }
  }, "(44610) \uC6B8\uC0B0\uAD11\uC5ED\uC2DC \uB0A8\uAD6C \uB300\uD559\uB85C 93 (\uBB34\uAC70\uB3D9)", /*#__PURE__*/React.createElement("br", null), "\uB300\uD45C\uC804\uD654 052-259-1234", /*#__PURE__*/React.createElement("br", null), "\uB300\uC678\uD64D\uBCF4\uD300 052-259-2627")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#fff",
      marginBottom: 16
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      color: "var(--gray-400)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--gray-500)"
    }
  }, "\xA9 2026 University of Ulsan. \uD559\uAD50\uBC95\uC778 \uC6B8\uC0B0\uACF5\uC5C5\uD559\uC6D0. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "youtube",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 18
  })))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uou-website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/uou-website/Header.jsx
try { (() => {
/* global React, Wordmark, Icon */
// Top utility bar + Global navigation (GNB) — §5.4.
function TopBar() {
  const utils = ["통합검색", "구성원", "Quick Menu", "ENGLISH", "로그인"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gray-50)",
      borderBottom: "1px solid var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 18
    }
  }, utils.map((u, i) => /*#__PURE__*/React.createElement("a", {
    key: u,
    href: "#",
    style: {
      fontSize: 12,
      color: "var(--gray-600)",
      textDecoration: "none",
      fontWeight: i === 4 ? 700 : 400
    }
  }, u))));
}
function Gnb() {
  const menus = ["대학소개", "입학", "학사", "대학·대학원", "연구·산학", "캠퍼스 라이프"];
  const [active, setActive] = React.useState(1);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--gray-0)",
      borderBottom: "1px solid var(--gray-100)",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "stretch",
      height: "100%",
      gap: 4
    }
  }, menus.map((m, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: () => setActive(i),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        padding: "0 16px",
        height: "100%",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 500,
        color: on ? "var(--green-500)" : "var(--gray-800)",
        borderBottom: on ? "2px solid var(--green-500)" : "2px solid transparent",
        cursor: "pointer",
        whiteSpace: "nowrap"
      }
    }, m);
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uC804\uCCB4\uBA54\uB274",
    style: {
      appearance: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--gray-800)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 24
  }))));
}
window.TopBar = TopBar;
window.Gnb = Gnb;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uou-website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/uou-website/Hero.jsx
try { (() => {
/* global React, Icon */
// Hero — main visual headline + integrated search. §5.7 input, §5.1 button.
function Hero() {
  const {
    Button,
    Input
  } = window.UOUDesignSystem_08270e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg, var(--green-800) 0%, var(--green-700) 100%)",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -40,
      bottom: -80,
      fontSize: 420,
      fontWeight: 800,
      color: "rgba(255,255,255,0.05)",
      lineHeight: 1,
      fontFamily: "var(--font-mono)"
    }
  }, "\u03A3"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 24px 64px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "0.18em",
      color: "var(--green-200)",
      marginBottom: 16
    }
  }, "\uC9C4\uB9AC \xB7 \uC790\uC8FC \xB7 \uBD09\uC0AC \xB7 SINCE 1970"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      lineHeight: "56px",
      fontWeight: 800,
      margin: 0,
      color: "#fff",
      letterSpacing: "-0.01em",
      textWrap: "balance"
    }
  }, "\uBBF8\uB798\uB97C \uC5EC\uB294 \uB300\uD559,", /*#__PURE__*/React.createElement("br", null), "\uC6B8\uC0B0\uB300\uD559\uAD50"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: "28px",
      color: "rgba(255,255,255,0.82)",
      margin: "20px 0 32px",
      maxWidth: 520
    }
  }, "\uD0C1\uC6D4\uD55C \uC778\uC7AC \uC591\uC131\uC744 \uC704\uD55C \uAD50\uC721\uACFC \uC5F0\uAD6C. \uC2E0\uB8B0\uBC1B\uB294 \uC9C0\uC5ED \uAC70\uC810 \uB300\uD559\uC73C\uB85C\uC11C \uC138\uACC4\uC640 \uD568\uAED8 \uC131\uC7A5\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      background: "#fff",
      padding: 8,
      borderRadius: "var(--radius-md)",
      maxWidth: 520,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      color: "var(--gray-400)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "\uD1B5\uD569\uAC80\uC0C9 \u2014 \uD559\uACFC, \uACF5\uC9C0, \uD559\uC0AC\uC77C\uC815",
    style: {
      width: "100%",
      height: 44,
      border: "none",
      outline: "none",
      padding: "0 12px 0 40px",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--gray-900)",
      background: "transparent"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\uAC80\uC0C9"))));
}

// Quick menu — icon link strip overlapping the hero.
function QuickMenu() {
  const items = [{
    icon: "graduation-cap",
    label: "입학안내"
  }, {
    icon: "calendar-days",
    label: "학사일정"
  }, {
    icon: "book-open",
    label: "수강신청"
  }, {
    icon: "building-2",
    label: "캠퍼스맵"
  }, {
    icon: "briefcase",
    label: "취업·진로"
  }, {
    icon: "users",
    label: "구성원"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "-36px auto 0",
      padding: "0 24px",
      position: "relative",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      overflow: "hidden"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: "#",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      padding: "24px 8px",
      textDecoration: "none",
      color: "var(--gray-700)",
      borderLeft: i === 0 ? "none" : "1px solid var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-600)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 26,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, it.label)))));
}
window.Hero = Hero;
window.QuickMenu = QuickMenu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uou-website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/uou-website/Mascot.jsx
try { (() => {
/* global React, Icon */
// 울리니 마스코트 — 홈페이지 배치용. 마스코트는 전용 파스텔 팔레트를 유지하고,
// 섹션 배경만 코퍼레이트 그린 틴트(green-50)를 사용해 두 팔레트를 혼용하지 않음.

// 캠퍼스 라이프 배너 — 좌측 텍스트 + 퀵링크, 우측 울리니 일러스트.
function UlrineeBand() {
  const chips = [{
    icon: "calendar-days",
    label: "학사일정"
  }, {
    icon: "map-pin",
    label: "캠퍼스맵"
  }, {
    icon: "utensils",
    label: "학식메뉴"
  }, {
    icon: "bus",
    label: "셔틀버스"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "80px auto 0",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      borderRadius: "var(--radius-xl)",
      padding: "40px 44px",
      display: "flex",
      alignItems: "center",
      gap: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      fontWeight: 700,
      color: "var(--green-700)",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uB9C8\uC2A4\uCF54\uD2B8 \uC6B8\uB9AC\uB2C8"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-300)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-500)",
      fontWeight: 500
    }
  }, "Ulrinee")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      lineHeight: "36px",
      fontWeight: 800,
      color: "var(--gray-900)",
      margin: "0 0 8px"
    }
  }, "\uC6B8\uB9AC\uB2C8\uC640 \uD568\uAED8\uD558\uB294 \uCEA0\uD37C\uC2A4 \uB77C\uC774\uD504"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--gray-600)",
      margin: "0 0 20px",
      maxWidth: 460
    }
  }, "\uC9C4\uB9AC\uC758 \uBE5B, \uC790\uC8FC\uC758 \uBC14\uB78C, \uBD09\uC0AC\uC758 \uC190\uAE38. \uC6B8\uC0B0\uB300 \uC0DD\uD65C\uC5D0 \uD544\uC694\uD55C \uC815\uBCF4\uB97C \uC6B8\uB9AC\uB2C8\uAC00 \uC548\uB0B4\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.label,
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 16px",
      background: "var(--gray-0)",
      border: "1px solid var(--green-200)",
      borderRadius: "var(--radius-full)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--green-800)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-600)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 16
  })), c.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: 220,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot/poses-2d/campus-tour.png",
    alt: "\uC6B8\uB9AC\uB2C8 \uCEA0\uD37C\uC2A4 \uD0D0\uBC29",
    style: {
      height: 220,
      width: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.10))"
    }
  }))));
}

// 울리니 도우미 — 우하단 플로팅 위젯 (홈페이지 안내 챗봇 진입점).
function UlrineeHelper() {
  const [open, setOpen] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 12
    }
  }, open && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gray-0)",
      border: "1px solid var(--gray-200)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "14px 16px",
      maxWidth: 240,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "\uB2EB\uAE30",
    style: {
      position: "absolute",
      top: 8,
      right: 8,
      appearance: "none",
      background: "none",
      border: "none",
      color: "var(--gray-400)",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--gray-900)",
      marginBottom: 4
    }
  }, "\uC548\uB155\uD558\uC138\uC694, \uC6B8\uB9AC\uB2C8\uC608\uC694!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: "20px",
      color: "var(--gray-600)"
    }
  }, "\uBB34\uC5C7\uC774 \uAD81\uAE08\uD558\uC2E0\uAC00\uC694? \uD559\uC0AC\xB7\uC7A5\uD559\xB7\uCEA0\uD37C\uC2A4 \uC815\uBCF4\uB97C \uC548\uB0B4\uD574 \uB4DC\uB9B4\uAC8C\uC694.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-label": "\uC6B8\uB9AC\uB2C8 \uB3C4\uC6B0\uBBF8",
    style: {
      width: 72,
      height: 72,
      borderRadius: "var(--radius-full)",
      background: "var(--green-50)",
      border: "2px solid var(--green-500)",
      boxShadow: "var(--shadow-md)",
      cursor: "pointer",
      padding: 0,
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot/ulrinee-front.png",
    alt: "\uC6B8\uB9AC\uB2C8",
    style: {
      width: 64,
      height: "auto",
      marginBottom: -4
    }
  })));
}
window.UlrineeBand = UlrineeBand;
window.UlrineeHelper = UlrineeHelper;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uou-website/Mascot.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

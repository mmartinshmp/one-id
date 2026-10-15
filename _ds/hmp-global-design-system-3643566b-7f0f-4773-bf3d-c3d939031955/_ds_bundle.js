/* @ds-bundle: {"format":4,"namespace":"HMPGlobalDesignSystem_364356","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3451c243fe9e","components/core/Badge.jsx":"b7a3a5e579fe","components/core/Button.jsx":"40e3f9c1f763","components/core/Card.jsx":"c42f4454032f","components/feedback/Dialog.jsx":"1f19e686dcb6","components/feedback/Progress.jsx":"b335cc5085ef","components/forms/Checkbox.jsx":"40fdbe4a5fcd","components/forms/Input.jsx":"a1fff8475391","components/forms/Label.jsx":"50e9e244ab44","components/forms/RadioGroup.jsx":"e2dc6465a92f","components/forms/Select.jsx":"2c94b374feea","components/forms/Switch.jsx":"5470d798894c","components/navigation/Tabs.jsx":"2428ed498828"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HMPGlobalDesignSystem_364356 = window.HMPGlobalDesignSystem_364356 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const sizes = {
  sm: 24,
  default: 32,
  lg: 40
};
function Avatar({
  src,
  alt,
  fallback,
  size = "default",
  style,
  className
}) {
  const s = sizes[size];
  const [errored, setErrored] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: s,
      height: s,
      borderRadius: 0,
      overflow: "hidden",
      flexShrink: 0,
      background: "var(--muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontSize: s * 0.4,
      color: "var(--muted-foreground)",
      ...style
    }
  }, src && !errored ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || "",
    onError: () => setErrored(true),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : fallback);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variantStyles = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)"
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)"
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--destructive-foreground)"
  },
  outline: {
    background: "transparent",
    color: "var(--foreground)",
    border: "1px solid var(--border)"
  },
  success: {
    background: "var(--success)",
    color: "var(--success-foreground)"
  }
};
function Badge({
  variant = "default",
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      borderRadius: 0,
      padding: "2px 10px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: 600,
      whiteSpace: "nowrap",
      border: "1px solid transparent",
      ...variantStyles[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeStyles = {
  default: {
    height: 36,
    padding: "0 16px",
    fontSize: "var(--text-sm)",
    gap: 8
  },
  sm: {
    height: 32,
    padding: "0 12px",
    fontSize: "var(--text-sm)",
    gap: 6
  },
  lg: {
    height: 40,
    padding: "0 24px",
    fontSize: "var(--text-sm)",
    gap: 8
  },
  icon: {
    height: 36,
    width: 36,
    padding: 0,
    fontSize: "var(--text-sm)",
    gap: 0
  }
};
const variantStyles = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    border: "1px solid transparent"
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--destructive-foreground)",
    border: "1px solid transparent"
  },
  outline: {
    background: "var(--background)",
    color: "var(--foreground)",
    border: "1px solid var(--border)"
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
    border: "1px solid transparent"
  },
  ghost: {
    background: "transparent",
    color: "var(--foreground)",
    border: "1px solid transparent"
  },
  link: {
    background: "transparent",
    color: "var(--primary)",
    border: "1px solid transparent",
    textDecoration: "underline",
    textUnderlineOffset: "4px"
  }
};
const hoverStyles = {
  default: {
    background: "color-mix(in oklab, var(--primary) 90%, black)"
  },
  destructive: {
    background: "color-mix(in oklab, var(--destructive) 90%, black)"
  },
  outline: {
    background: "var(--accent)",
    color: "var(--accent-foreground)"
  },
  secondary: {
    background: "color-mix(in oklab, var(--secondary) 85%, black)"
  },
  ghost: {
    background: "var(--accent)",
    color: "var(--accent-foreground)"
  },
  link: {
    textDecoration: "underline"
  }
};
function Button({
  variant = "default",
  size = "default",
  disabled,
  style,
  className,
  children,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background .15s ease, color .15s ease, box-shadow .15s ease",
    outline: "none",
    boxSizing: "border-box",
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...(hover && !disabled ? hoverStyles[variant] : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    style: base,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border)",
      background: "var(--card)",
      color: "var(--card-foreground)",
      padding: 24,
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), children);
}
function CardHeader({
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, rest), children);
}
function CardTitle({
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      lineHeight: 1.2,
      ...style
    }
  }, rest), children);
}
function CardDescription({
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)",
      ...style
    }
  }, rest), children);
}
function CardContent({
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--foreground)",
      ...style
    }
  }, rest), children);
}
function CardFooter({
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgb(23 54 82 / 0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: "min(92vw, 480px)",
      background: "var(--background)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-lg)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--muted-foreground)",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      paddingRight: 24
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-lg)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)"
    }
  }, description)), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      height: 8,
      width: "100%",
      borderRadius: "var(--radius-full)",
      background: "color-mix(in oklab, var(--primary) 20%, transparent)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${Math.max(0, Math.min(100, value))}%`,
      background: "var(--primary)",
      transition: "width .3s ease"
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  onChange,
  disabled,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    className: className,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      flexShrink: 0,
      border: `1px solid ${checked ? "var(--primary)" : "var(--input)"}`,
      background: checked ? "var(--primary)" : "transparent",
      color: "var(--primary-foreground)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      outline: "none",
      padding: 0,
      transition: "background .12s ease, border-color .12s ease",
      ...style
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  style,
  className,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: className,
    style: {
      height: 36,
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${focus ? "var(--ring)" : "var(--input)"}`,
      background: "var(--background)",
      padding: "0 12px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--foreground)",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)" : "none",
      transition: "box-shadow .15s ease, border-color .15s ease",
      ...style
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Label({
  style,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--foreground)",
      lineHeight: 1,
      userSelect: "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  value,
  onChange,
  options = [],
  name,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "grid",
      gap: 12,
      ...style
    }
  }, options.map(opt => {
    const checked = value === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--foreground)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": checked,
      tabIndex: 0,
      onClick: () => onChange && onChange(opt.value),
      style: {
        width: 16,
        height: 16,
        borderRadius: "50%",
        flexShrink: 0,
        border: `1px solid ${checked ? "var(--primary)" : "var(--input)"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, checked && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--primary)"
      }
    })), opt.label);
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  value,
  onChange,
  options = [],
  placeholder = "Select…",
  style,
  className
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const current = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: {
      position: "relative",
      width: 220,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    style: {
      width: "100%",
      height: 36,
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--input)",
      background: "var(--background)",
      padding: "0 12px",
      fontSize: "var(--text-sm)",
      color: current ? "var(--foreground)" : "var(--muted-foreground)",
      cursor: "pointer",
      outline: "none"
    }
  }, current ? current.label : placeholder, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 20,
      background: "var(--popover)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding: 4,
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("div", {
    key: opt.value,
    onClick: () => {
      onChange && onChange(opt.value);
      setOpen(false);
    },
    style: {
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      fontSize: "var(--text-sm)",
      color: "var(--popover-foreground)",
      cursor: "pointer",
      background: opt.value === value ? "var(--accent)" : "transparent"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--accent)",
    onMouseLeave: e => e.currentTarget.style.background = opt.value === value ? "var(--accent)" : "transparent"
  }, opt.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  disabled,
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    className: className,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 32,
      height: 18,
      borderRadius: "var(--radius-full)",
      position: "relative",
      background: checked ? "var(--primary)" : "var(--stone-300)",
      border: "1px solid transparent",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      outline: "none",
      transition: "background .15s ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 1,
      left: checked ? 15 : 1,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "#fff",
      transition: "left .15s ease",
      boxShadow: "0 1px 2px rgb(0 0 0 / 0.2)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  value,
  onChange,
  tabs = [],
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 2,
      background: "var(--muted)",
      borderRadius: "var(--radius-md)",
      padding: 3,
      width: "fit-content"
    }
  }, tabs.map(tab => {
    const active = tab.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      type: "button",
      onClick: () => onChange && onChange(tab.value),
      style: {
        padding: "6px 14px",
        borderRadius: "var(--radius-sm)",
        border: "none",
        background: active ? "var(--background)" : "transparent",
        boxShadow: active ? "var(--shadow-xs)" : "none",
        color: active ? "var(--foreground)" : "var(--muted-foreground)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: 500,
        cursor: "pointer",
        outline: "none",
        transition: "background .15s ease"
      }
    }, tab.label);
  })));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

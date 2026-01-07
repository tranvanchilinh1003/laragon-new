/**
 * @license lucide v0.544.0 - ISC
 * Custom Build - Chỉ chứa 11 icons đã sử dụng
 * Generated: 2026-01-07T09:30:29.704Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lucide = {}));
})(this, (function (exports) { 'use strict';

  const defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  const createSVGElement = ([tag, attrs, children]) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, String(attrs[name]));
    });
    if (children?.length) {
      children.forEach((child) => {
        const childElement = createSVGElement(child);
        element.appendChild(childElement);
      });
    }
    return element;
  };

  const createElement = (iconNode, customAttrs = {}) => {
    const tag = "svg";
    const attrs = {
      ...defaultAttributes,
      ...customAttrs
    };
    return createSVGElement([tag, attrs, iconNode]);
  };

  const getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});

  const getClassNames = (attrs) => {
    if (typeof attrs === "string") return attrs;
    if (!attrs || !attrs.class) return "";
    if (attrs.class && typeof attrs.class === "string") {
      return attrs.class.split(" ");
    }
    if (attrs.class && Array.isArray(attrs.class)) {
      return attrs.class;
    }
    return "";
  };

  const combineClassNames = (arrayOfClassnames) => {
    const classNameArray = arrayOfClassnames.flatMap(getClassNames);
    return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self) => self.indexOf(value) === index).join(" ");
  };

  const toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());

  const replaceElement = (element, { nameAttr, icons, attrs }) => {
    const iconName = element.getAttribute(nameAttr);
    if (iconName == null) return;
    const ComponentName = toPascalCase(iconName);
    const iconNode = icons[ComponentName];
    if (!iconNode) {
      return console.warn(
        `${element.outerHTML} icon name was not found in the provided icons object.`
      );
    }
    const elementAttrs = getAttrs(element);
    const iconAttrs = {
      ...defaultAttributes,
      "data-lucide": iconName,
      ...attrs,
      ...elementAttrs
    };
    const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
    if (classNames) {
      Object.assign(iconAttrs, {
        class: classNames
      });
    }
    const svgElement = createElement(iconNode, iconAttrs);
    return element.parentNode?.replaceChild(svgElement, element);
  };

  const ShieldCheck = [
  [
    "path",
    {
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  [
    "path",
    {
      "d": "m9 12 2 2 4-4"
    }
  ]
];
  const Truck = [
  [
    "path",
    {
      "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
    }
  ],
  [
    "path",
    {
      "d": "M15 18H9"
    }
  ],
  [
    "path",
    {
      "d": "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
    }
  ],
  [
    "circle",
    {
      "cx": "17",
      "cy": "18",
      "r": "2"
    }
  ],
  [
    "circle",
    {
      "cx": "7",
      "cy": "18",
      "r": "2"
    }
  ]
];
  const Headphones = [
  [
    "path",
    {
      "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
    }
  ]
];
  const Flame = [
  [
    "path",
    {
      "d": "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
    }
  ]
];
  const X = [
  [
    "path",
    {
      "d": "M18 6 6 18"
    }
  ],
  [
    "path",
    {
      "d": "m6 6 12 12"
    }
  ]
];
  const User = [
  [
    "path",
    {
      "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
    }
  ],
  [
    "circle",
    {
      "cx": "12",
      "cy": "7",
      "r": "4"
    }
  ]
];
  const Lock = [
  [
    "rect",
    {
      "width": "18",
      "height": "11",
      "x": "3",
      "y": "11",
      "rx": "2",
      "ry": "2"
    }
  ],
  [
    "path",
    {
      "d": "M7 11V7a5 5 0 0 1 10 0v4"
    }
  ]
];
  const AlertCircle = [
  [
    "circle",
    {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  ],
  [
    "line",
    {
      "x1": "12",
      "x2": "12",
      "y1": "8",
      "y2": "12"
    }
  ],
  [
    "line",
    {
      "x1": "12",
      "x2": "12.01",
      "y1": "16",
      "y2": "16"
    }
  ]
];
  const UserCheck = [
  [
    "path",
    {
      "d": "m16 11 2 2 4-4"
    }
  ],
  [
    "path",
    {
      "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }
  ],
  [
    "circle",
    {
      "cx": "9",
      "cy": "7",
      "r": "4"
    }
  ]
];
  const Mail = [
  [
    "path",
    {
      "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
    }
  ],
  [
    "rect",
    {
      "x": "2",
      "y": "4",
      "width": "20",
      "height": "16",
      "rx": "2"
    }
  ]
];
  const Phone = [
  [
    "path",
    {
      "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];

  var iconAndAliases = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ShieldCheck: ShieldCheck,
    Truck: Truck,
    Headphones: Headphones,
    Flame: Flame,
    X: X,
    User: User,
    Lock: Lock,
    AlertCircle: AlertCircle,
    UserCheck: UserCheck,
    Mail: Mail,
    Phone: Phone,
  });

  const createIcons = ({
    icons = iconAndAliases,
    nameAttr = "data-lucide",
    attrs = {},
    root = document
  } = {}) => {
    if (!Object.values(icons).length) {
      throw new Error(
        "Please provide an icons object.If you want to use all the icons you can import it like: import { createIcons, icons } from 'lucide'; lucide.createIcons({icons});"
      );
    }
    if (typeof root === "undefined") {
      throw new Error("`createIcons()` only works in a browser environment.");
    }
    const elementsToReplace = root.querySelectorAll(`[${nameAttr}]`);
    Array.from(elementsToReplace).forEach(
      (element) => replaceElement(element, { nameAttr, icons, attrs })
    );
    if (nameAttr === "data-lucide") {
      const deprecatedElements = root.querySelectorAll("[icon-name]");
      if (deprecatedElements.length > 0) {
        console.warn(
          "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
        );
        Array.from(deprecatedElements).forEach(
          (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
        );
      }
    }
  };

  exports.ShieldCheck = ShieldCheck;
  exports.Truck = Truck;
  exports.Headphones = Headphones;
  exports.Flame = Flame;
  exports.X = X;
  exports.User = User;
  exports.Lock = Lock;
  exports.AlertCircle = AlertCircle;
  exports.UserCheck = UserCheck;
  exports.Mail = Mail;
  exports.Phone = Phone;
  exports.icons = iconAndAliases;
  exports.createIcons = createIcons;

}));
// Auto Run lucide.createIcons() khi DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lucide.createIcons);
} else {
    lucide.createIcons();
}
//# sourceMappingURL=lucide-custom.js.map
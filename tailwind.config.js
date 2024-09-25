const { filterTokensByType } = require("./fns");
const tokens = require("./output/resolved_map.json");

const colors = filterTokensByType("color", tokens);

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    // spacing: {
    //   'xxs': 'var(--space-padding-padding-xxs)',
    //   'xs': 'var(--space-padding-padding-xs)',
    //   'sm': 'var(--space-padding-padding-sm)',
    //   'md': 'var(--space-padding-padding-md)',
    // },
    // borderRadius: {
    //   'xxs': 'var(--border-radius-border-radius-xxs)',
    //   'xs': 'var(--border-radius-border-radius-xs)',
    // },
  },
  variants: {},
  plugins: [],
};

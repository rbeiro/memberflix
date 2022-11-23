import { globalCss } from "@rbeiro-ui/stitches-config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    background: "$gray750",
    color: "$hiContrast",
  },

  "body, input, textarea, button": {
    fontFamily: "$default",
    fontWeight: "$regular",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "$heading",
  },
});

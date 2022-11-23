import { styled } from "@rbeiro-ui/stitches-config";

export const ImageContainer = styled("section", {
  // Local scope variables
  // TODO: add to tokens later
  $$basic: "cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
  // ------------------------------------------

  borderRadius: "$sm",
  overflow: "hidden",
  height: "$$height",
  width: "100%",
  minWidth: "$$width",
  background: "linear-gradient(75deg,$gray800, $gray900)",
  backgroundSize: "200%",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  transform: "scale(1)",
  transition: "all .1s $$basic",

  "&::after": {},

  variants: {
    withLink: {
      true: {
        "&:hover": {
          cursor: "pointer",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          transform: "scale(1.02)",
        },
      },
    },
  },
});

import { styled } from "@rbeiro-ui/stitches-config";
import Slider from "react-slick";

export const CarouselContainer = styled(Slider, {
  // Local scope variables
  // TODO: add to tokens later
  $$basic: "cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
  // ------------------------------------------

  padding: "0 $$containerPadding",
  margin: "$7 0",

  // Slick track
  "& .slick-track": {
    display: "block",
    left: 0,
    position: "relative",
    top: 0,

    "&::before": {
      content: "",
      display: "table",
    },

    "&::after": {
      content: "",
      display: "table",
    },
  },

  // Slick list
  "& .slick-list": {
    position: "relative",
    // margin: "0 -12px",
    padding: 0,
    overflow: "visible",
  },

  // Slick slider
  "& .slick-slider": {
    zIndex: 6,

    "& .slick-track": {
      transform: "translate3d(0px, 0px, 0px)",
    },

    "& .slick-list": {
      transform: "translate3d(0px, 0px, 0px)",
    },
  },
  // Slick Slide
  "& .slick-slide": {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: "10px",
    transition: "filter .3s $$basic, transform .3s $$basic",

    "& img": {
      width: "100% !important",
    },

    "&:not(.slick-current)": {
      filter: "brightness(0.6)",
      transform: "scale(.98)",
    },
  },

  // Slick dots
  "& .slick-dots": {
    marginTop: "$4",

    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    position: "unset",

    "& li button:before": {
      content: "",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "$hiContrast",
      borderRadius: "$full",
      width: 7.5,
      height: 7.5,
      transition: "all .2s $$basic",
    },

    "& li.slick-active button:before": {
      width: 22.5,
    },
  },

  // Slick cloned

  // Media Queries
  "@media (min-width: 480px)": {
    "& .slick-slider": {
      marginTop: "18px",
    },
  },
});

import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const normal = defineStyle({
  h: "40px",
  fontSize: "14px",
  lineHeight: "20px",
});

const Button = defineStyleConfig({
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "6px",
    py: "10px",
    px: "16px",
    fontWeight: "medium",
    color: "white",
    //add this, not specification on figma
    animationTimingFunction: "ease-in-out",
    animationDuration: "200ms",
  },
  variants: {
    primary: {
      bgColor: "primary.300",
      _active: {
        color: "primary.200",
      },
      _hover: {
        bgColor: "primary.200",
      },
      _disabled: {
        color: "neutral.400",
        bgColor: "neutral.500",
      },
      //dark mode ????
      _dark: {},
    },
    outline: {
      color: "primary.300",
      bgColor: "transparent",
      border: "1px solid",
      borderColor: "primary.300",
      _hover: {
        bgColor: "transparent",
        color: "primary.200",
      },
      _disabled: {
        color: "neutral.400",
        bgColor: "neutral.500",
      },
    },
  },
  sizes: { normal },
  defaultProps: {
    size: "normal",
    variant: "primary",
  },
});

export default Button;

import getBreakpointStrings from "../utils/getBreakpointStrings";

export const breakpointValues = {
  breakpointMd: 600,
  breakpointLg: 1000,
  breakpointXl: 1400,
  breakpointXxl: 1800,
};

const breakpointStrings = getBreakpointStrings(breakpointValues);

const theme = {
  textColor: "white",
  primaryColor: "#5831BC",
  primaryBackgroundColor: "#2c2c2c",
  maxWidth: "1440px",
  ...breakpointStrings,
};

export default theme;

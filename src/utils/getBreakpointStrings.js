export default function getBreakpointStrings(breakpointValues) {
  let breakpointStrings = {}
  Object.entries(breakpointValues).forEach(
    ([key, value]) => (breakpointStrings[key] = `${value}px`)
  )
  return breakpointStrings
}

const is = platform => process.env.GAME_PLATFORM == platform

export default {
  isBrowser: () => is("browser"),
  isMobile: () => is("android") || is("ios"),
  isAndroid: () => is("android"),
  isIos: () => is("ios"),

  isDebugging: () => !!process.env.DEBUG
}

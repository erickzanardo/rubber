const is = platform => process.env.GAME_PLATFORM == platform

const Platforms = {
  isBrowser: () => is("browser"),
  isMobile: () => is("android") || is("ios"),
  isAndroid: () => is("android"),
  isIos: () => is("ios"),

  isDebugging: () => !!process.env.DEBUG,
  log: message => {
    if (Platforms.isDebugging()) {
      console.log(message)
    }
  }
}

export default Platforms

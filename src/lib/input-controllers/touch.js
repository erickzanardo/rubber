let onTouchStart = []
let onTouchEnd = []
let touchList = []

let currentTouch = null

const getTouches = values => Object.values(values).map(touch => ({ x: touch.clientX, y: touch.clientY}))

const attach = () => {
  document.addEventListener("touchstart", evt => {
    const touches = getTouches(evt.changedTouches)
    onTouchStart.forEach(callback => callback(touches))

    currentTouch = touches[touches.length - 1]
  })

  document.addEventListener("touchmove", evt => {
    const touches = getTouches(evt.changedTouches)
    currentTouch = touches[touches.length - 1]
  })

  document.addEventListener("touchend", evt => {
    const touches = getTouches(evt.changedTouches)
    onTouchEnd.forEach(callback => callback(touches))

    currentTouch = null
  })
}

export default {
  attach,
  currentTouch: () => currentTouch,
  onTouchStart: callback => {
    onTouchStart.push(callback)
  },
  onTouchEnd: callback => {
    onTouchEnd.push(callback)
  },
  reset: () => {
    currentTouch = null
    onTouchStart = []
    onTouchEnd = []
  }
}

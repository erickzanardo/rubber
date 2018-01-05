let onKeyPress = []
const keyMap = {}

const getKey = ({ code }) => code.toLowerCase()

const attach = () => {
  document.addEventListener("keydown", evt => {
    keyMap[getKey(evt)] = true
  })

  document.addEventListener("keyup", evt => {
    keyMap[getKey(evt)] = false
  })

  document.addEventListener("keypress", evt => {
    onKeyPress.forEach(callback => callback(getKey(evt)))
  })
}

export default {
  attach,
  isKeyPressed: key => keyMap[key] === true,
  onKeyPress: callback => {
    onKeyPress.push(callback)
  },
  reset: () => {
    onKeyPress = []
  }
}

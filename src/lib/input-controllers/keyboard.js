const keyMap = {}

const getKey = ({ code }) => code.toLowerCase()

const attach = () => {
  document.addEventListener("keydown", evt => {
    keyMap[getKey(evt)] = true
  })

  document.addEventListener("keyup", evt => {
    keyMap[getKey(evt)] = false
  })
}

export default {
  attach,
  isKeyPressed: key => keyMap[key] === true
}

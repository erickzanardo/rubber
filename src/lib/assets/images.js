const Images = {
  load: imageName => new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.src = `./assets/images/${imageName}`
  }),
  create: (width, height, render) => {
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height

    const graphics = canvas.getContext("2d")

    render(graphics)

    return canvas
  }
}

export default Images

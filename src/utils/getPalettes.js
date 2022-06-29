const getPalettes = () => {
  let paletteList
  window.localStorage.getItem('palettes') !== null
    ? paletteList = JSON.parse(window.localStorage.getItem('palettes'))
    : paletteList = []

  return paletteList
}

export default getPalettes

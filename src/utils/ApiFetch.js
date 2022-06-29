
const getPalettes = (callback) => {
  const config = {
    method: 'GET',
    mode: 'cors'
  }

  fetch('http://localhost:3001/api/palettes', config)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(e => console.error(e))
}

const postPalette = (palette, callback = () => { }) => {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(palette)
  }

  fetch('http://localhost:3001/api/palettes', config)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(e => console.error(e))
}

const deletePalette = (id) => {
  const config = {
    method: 'DELETE',
    mode: 'cors'
  }

  fetch(`http://localhost:3001/api/palettes/${id}`, config)
    .then(response => response.ok)
    .catch(e => console.error(e))
}

export { getPalettes, postPalette, deletePalette }

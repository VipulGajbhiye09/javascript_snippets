// Possible Fetch Error
// Only throws an error if cannot resolve.
// Error Response still a response (400-500)

const url = 'enter url here'

const get_data = async () => {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      const msg = `There was an error "${resp.status} ${resp.statusText}"`
      throw new Error(msg)
    }

    const data = await resp.json()
    console.log(data);
  } 
  catch (error) {
    console.log(error)
  }
}

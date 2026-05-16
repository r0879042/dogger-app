export async function fetchBreeds() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
  
    if (!response.ok) {
      throw new Error('Failed to fetch breeds')
    }
  
    const data = await response.json()
  
    return Object.keys(data.message)
  }
  
  export async function fetchBreedImage(breed) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    )
  
    if (!response.ok) {
      throw new Error('Failed to fetch dog image')
    }
  
    const data = await response.json()
  
    return data.message
  }
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
  
  export async function fetchBreedsWithImages() {
    const breeds = await fetchBreeds()
  
    const cuteBreeds = [
        'pomeranian',
        'samoyed',
        'maltese',
        'chow',
        'husky',
        'shiba',
        'corgi',
        'papillon',
        'poodle',
        'eskimo',
        'pekinese',
        'akita',
      ]
      
      const limitedBreeds = breeds.filter((breed) =>
        cuteBreeds.includes(breed)
      )
  
    const breedsWithImages = await Promise.all(
      limitedBreeds.map(async (breed) => {
        try {
          const image = await fetchBreedImage(breed)
  
          return {
            breed,
            image,
          }
        } catch {
          return {
            breed,
            image: null,
          }
        }
      })
    )
  
    return breedsWithImages
  }
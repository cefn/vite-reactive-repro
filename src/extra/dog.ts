const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

export async function getRandomImageUrl() : Promise<string>{
    const response = await fetch(dogApiUrl);
    const {status} = response;
    if (status === 200) {
      const data = (await response.json()) as { message: string };
      return data.message;
    }
    throw new Error(`Endpoint returned status ${status}`)
}
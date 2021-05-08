export const api_url = "https://6076feac1ed0ae0017d6a3e8.mockapi.io/usib/Orcamentos"

export async function getQuotes() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}


import { DATAFROMDB } from '../entity/index';
export const api_url = "https://6076feac1ed0ae0017d6a3e8.mockapi.io/usib/Orcamentos"


//CRUD Functions
//GET Request for all data
export async function readData() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}

//POST Request
export async function postData(data: DATAFROMDB) {
    await fetch(api_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Product: data.Product,
            CompanyName: data.CompanyName,
            QuoteDate: data.QuoteDate,
            Adress: data.Adress,
            Quantity: data.Quantity,
            Email: data.Email,
        })
    })
}

//PUT Request
export async function editData(data: DATAFROMDB, id: string) {
    await fetch(`${api_url}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Product: data.Product,
            CompanyName: data.CompanyName,
            QuoteDate: data.QuoteDate,
            Adress: data.Adress,
            Quantity: data.Quantity,
            Email: data.Email,
        })
    })
}

//DELETE Request
export async function deleteData(id: string) {
    console.log(id)
    await fetch(`${api_url}/${id}`, {
        method: "DELETE"
    })
    
}


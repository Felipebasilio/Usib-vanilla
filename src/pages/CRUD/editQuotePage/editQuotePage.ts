import { api_url } from "./../../../API_Connection/API_Connection";
import { DATAFROMDB } from "./../../../entity/index"


export const editQuoteUrl = "./editQuotePage.html";

const formToFill = document.getElementById("edit-quote-form");
if(formToFill !== null) {
    fillForm();
    window.addEventListener("DOMContentLoaded", (e) => {    
    
      const ElementId = new URL(window.location.href).searchParams.get("id");
      formToFill.addEventListener("submit", (e) => {
          e.preventDefault();
          
          fetch(`${api_url}/${ElementId}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  Product: (<HTMLInputElement>document.getElementById("product"))?.value,
                  CompanyName: (<HTMLInputElement>document.getElementById("company-name"))?.value,
                  QuoteDate: (<HTMLInputElement>document.getElementById("quote-date"))?.value,
                  Adress: (<HTMLInputElement>document.getElementById("adress"))?.value,
                  Quantity: (<HTMLInputElement>document.getElementById("quantity"))?.value,
                  Email: (<HTMLInputElement>document.getElementById("email"))?.value,
              })
          }).then(() => {
              window.location.replace("quote.html");
          })
  
      });
      }); 
}



export async function fetchData<TResponse>(): Promise<TResponse> {
  const ElementId = new URL(window.location.href).searchParams.get("id");
    
    return await fetch(`${api_url}/${ElementId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        return data;
      });
  }
  
  export async function fillForm() {
      const dataFromDb = await fetchData<DATAFROMDB>();
      const name = document.querySelector("#company-name")?.setAttribute("value", dataFromDb.CompanyName);

      const email = document.querySelector("#email")?.setAttribute("value",dataFromDb.Email);
      const adress = document.querySelector("#adress")?.setAttribute("value",dataFromDb.Adress);
      (document.querySelector("#product > option") as HTMLOptionElement)?.setAttribute("innerHTML",dataFromDb.Product);
      (document.querySelector("#product > option") as HTMLOptionElement).innerHTML = dataFromDb.Product
      const quoteDate = document.querySelector("#quote-date")?.setAttribute("value", dataFromDb.QuoteDate);
      const quantity = document.querySelector("#quantity")?.setAttribute("value", String(dataFromDb.Quantity));
  }
  
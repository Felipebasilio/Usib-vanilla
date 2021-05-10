export const editQuoteUrl = "./editQuotePage.html";

import { api_url } from "./../../../API_Connection/API_Connection";

export function editQuote(buttonId: string) {
    //TODO: chamar button de link
  const editQuoteButtonId = buttonId;
  const editQuoteButton = document.getElementById(editQuoteButtonId) as HTMLAnchorElement;

  const elementIdToEdit = editQuoteButtonId.replace("edit", "");

  const editPage = new URL("http://localhost:8080/editQuotePage.html");
  editPage.searchParams.set("id", elementIdToEdit);
    console.log(editPage.toString());

  console.log(editPage.searchParams.get("id"))

  editQuoteButton!.href = editPage.toString();
}

export async function fetchData() {
    const pageURL = new URL(window.location.href);
  await fetch(`${api_url}`, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => {
      return data;
    });
}

export async function fillForm() {
  const dataFromDB: any = fetchData();
  console.log(dataFromDB);
  const name = dataFromDB.CompanyName;
  const email = dataFromDB.Email;
  const adress = dataFromDB.Adress;
  const product = dataFromDB.Product;
  const quoteDate = dataFromDB.QuoteDate;
  const quantity = dataFromDB.Quantity;

console.log(dataFromDB)
  document.getElementById("companyName")!.setAttribute("innerHTML", name);
}


if(window.location.href === "http://localhost:8080/editQuotePage.html") {
    const editPage = new URL("http://localhost:8080/editQuotePage.html");
    const id = String(editPage.searchParams.get("id"));
    fillForm();
}
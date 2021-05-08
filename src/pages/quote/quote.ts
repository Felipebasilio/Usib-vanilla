import { createQuoteUrl, deleteQuote } from './../CRUD/index';
import { getQuotes } from "../../API_Connection/API_Connection";

const iconCommonClasses = ["d-flex", "fas"];

function createAddIcon(fatherId: string) {
  const link = document.createElement("a");
  link.classList.add("btn");
  link.setAttribute("href", createQuoteUrl)

  const icon = document.createElement("i");
  icon.classList.add(...iconCommonClasses, "fa-plus");

  link.appendChild(icon);

  const father = document.getElementById(fatherId);
  if (father) father.appendChild(link);
}

createAddIcon("addQuote");

function createDeleteIcon(fatherId: string): HTMLElement {
    const link = document.createElement("a");
    link.classList.add("btn");
    
    const icon = document.createElement("i");
    icon.classList.add(...iconCommonClasses, "fa-trash-alt");

    link.appendChild(icon);
    return link;
}

function createEditIcon(linkToEditQuotePage: string): HTMLElement {
  const link = document.createElement("button");
  link.classList.add("btn");
  //link.setAttribute("src", linkToEditPage);

  const icon = document.createElement("i");

  icon.classList.add(...iconCommonClasses, "fa-edit");
  link.appendChild(icon);

  return link;
}


export async function fillTable(tableId: string) {
  const table = document
    .getElementById(tableId)
    ?.getElementsByTagName("tbody")[0];
  const data = await getQuotes();
  data.forEach((e: any) => {
    if (table) {
      let row = table.insertRow();
      row.setAttribute("id", `Quote${e.id}`);
      row.insertCell(0).innerHTML = e.id;
      row.insertCell(1).innerHTML = e.CompanyName;
      row.insertCell(2).innerHTML = e.QuoteDate;
      row.insertCell(3).innerHTML = e.Adress;
      row.insertCell(4).innerHTML = e.Email;
      row.insertCell(5).innerHTML = e.Product;
      row.insertCell(6).innerHTML = e.Quantity;
      
      const row7 = row.insertCell(7);
      row7.appendChild(createEditIcon("./quote.html"));
      row7.setAttribute("id", `edit${e.id}`)

      const row8 = row.insertCell(8);
      row8.appendChild(createDeleteIcon(e.id));
      row8.setAttribute("id", `delete${e.id}`);
      deleteQuote(row8.id)

    }
  });
}

fillTable("quotesTable");
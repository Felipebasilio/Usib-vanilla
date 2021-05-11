import { DATAFROMDB } from './../../../entity/index';
import { api_url } from './../../../API_Connection/API_Connection';


export const createQuoteUrl = "./createQuotePage.html";
const quoteDate = document.getElementById("quote-date");


//Set date field to today's date
function suggestTodayDateValue(){
    window.addEventListener("DOMContentLoaded", (e) => {    
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        
        const todayDate = `${yyyy}-${mm}-${dd}`;
        if(quoteDate)
        quoteDate.setAttribute("value", todayDate);
    });
}

suggestTodayDateValue();

const formId = "create-quote-form";
const form = document.getElementById(formId)
if(form){
    window.addEventListener("DOMContentLoaded", (e) => {    
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        

        fetch(api_url, {
            method: "POST",
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



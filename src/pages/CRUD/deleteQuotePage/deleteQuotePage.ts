import { api_url } from './../../../API_Connection/API_Connection';


export function deleteQuote(buttonId: string) {
    const deleteQuoteButtonId = buttonId;
    const deleteQuoteButton = document.getElementById(deleteQuoteButtonId);

    const elementIdToDelete = deleteQuoteButtonId.replace("delete", "");
    
    if(deleteQuoteButton){
            console.log(`${api_url}/:${elementIdToDelete}`);
        
            deleteQuoteButton.addEventListener("click", (e) => {
                fetch(`${api_url}/${elementIdToDelete}`, {
                    method: "DELETE",
                }).then(() => {
                    window.location.replace("quote.html");
                })
            });
    }   

}
import { deleteData } from './../../../API_Connection/API_Connection';


export function deleteQuote(anchorId: string) {
    const deleteQuoteAnchorId = anchorId;
    const deleteQuoteAnchor = document.getElementById(deleteQuoteAnchorId);

    
    if(deleteQuoteAnchor){        
        deleteQuoteAnchor.addEventListener("click", (e) => {
            deleteData(anchorId).then(() => {
                window.location.replace("quote.html");
            })
        });
    }   

}
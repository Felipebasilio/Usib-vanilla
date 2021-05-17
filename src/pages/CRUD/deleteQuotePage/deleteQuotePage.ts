import { deleteData } from './../../../API_Connection/API_Connection';


export function deleteQuote(anchorIdWithOperation: string) {
    const deleteQuoteAnchorId = anchorIdWithOperation;
    const deleteQuoteAnchor = document.getElementById(deleteQuoteAnchorId);
    const id = anchorIdWithOperation.replace("delete", "");

        if(deleteQuoteAnchor){        
            deleteQuoteAnchor.addEventListener("click", (e) => {

                    deleteData(id).then(() => {
                        window.location.replace("quote.html");
                    });
                
            });
        }   

        }
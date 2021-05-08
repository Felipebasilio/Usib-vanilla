import { NavBarClasses, firstDivClasses, firstAAttributes, buttonAttrsNav, spanClasses, secondDivClasses, liClasses, ulClasses, secondAAttributes } from './navbarCssValues';
import { createButton } from '../button/button';


export function createNavBar(fatherID: string) {
    //Creating <nav> element
    const navBar = document.createElement("nav");
    NavBarClasses.forEach((e) => {
        navBar.classList.add(e);
    });
    
    //Creating <div> element, the first one and inside <nav>
    const firstDiv = document.createElement("div");
    firstDivClasses.forEach((e) => {
        firstDiv.classList.add(e);
    })
    navBar.appendChild(firstDiv);
    
    //Creating <a> element, the first and inside the first <div>
    const firstA = document.createElement("a");
    firstAAttributes.classes.forEach((e) => {
        firstA.classList.add(e);
    });
    firstA.setAttribute("href", "./index.html");
    firstA.innerText = "USIB";
    firstDiv.appendChild(firstA);
    
    //Creating <button> element
    const button = createButton(buttonAttrsNav, firstDiv);
    firstDiv.appendChild(button);
    
    //Creating <span> element
    const span = document.createElement("span");
    spanClasses.forEach((e) => {
        span.classList.add(e);
    });
    button.appendChild(span);
    
    //Creating <div> element, the second one
    const secondDiv = document.createElement("div");
    secondDivClasses.forEach((e) => {
        secondDiv.classList.add(e);
    });
    secondDiv.setAttribute("id", "navbarCollapse");
    firstDiv.appendChild(secondDiv);
    
    //Creating <ul> element inside <div>, the second one
    const ul = document.createElement("ul");
    ulClasses.forEach((e) => {
        ul.classList.add(e);
    });
    secondDiv.appendChild(ul);
    
    //Creating <li> element inside <ul>
    const li = document.createElement("li");
    liClasses.forEach((e) => {
        li.classList.add(e);
    })
    ul.appendChild(li);

    //Creating second <a> inside <li>
    const secondA = document.createElement("a");
    secondAAttributes.classes.forEach((e) => {
        secondA.classList.add(e);
    });
    secondAAttributes.ariaCurrent.forEach((e) => {
        secondA.setAttribute("aria-current", e);
    });
    secondA.setAttribute("href", "./quote.html");
    
    if(window.location.pathname.split("/").pop() === "quote.html"){
        secondA.classList.add("active");
    } else {
        secondA.classList.remove("active");
    }

    secondA.innerText = "Orcamentos";

    li.appendChild(secondA);
    
    const fatherElement = document.getElementById(fatherID);
    if (fatherElement)
        fatherElement.prepend(navBar);
}
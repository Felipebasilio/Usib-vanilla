export var footerClasses: string[] = ["footer", "py-3", "bg-light"];

function linkToReferences(father: HTMLElement){
    const linkWebpack = document.createElement("a");
    linkWebpack.setAttribute("href", "https://webpack.js.org/");
    linkWebpack.innerHTML = " Webpack, ";

    const linkSass = document.createElement("a");
    linkSass.setAttribute("href", "https://sass-lang.com/");
    linkSass.innerHTML = " Sass, ";

    const linkBootstrap = document.createElement("a");
    linkBootstrap.setAttribute("href", "https://getbootstrap.com/");
    linkBootstrap.innerHTML = " Bootstrap, ";

    const linkmockAPI = document.createElement("a");
    linkmockAPI.setAttribute("href", "https://mockapi.io/docs");
    linkmockAPI.innerHTML = " mockAPI, ";

    const linkTypescript = document.createElement("a");
    linkTypescript.setAttribute("href", "https://www.typescriptlang.org/");
    linkTypescript.innerHTML = " Typescript ";
    
    father.appendChild(linkWebpack);
    father.appendChild(linkSass);
    father.appendChild(linkBootstrap);
    father.appendChild(linkmockAPI);
    father.appendChild(linkTypescript);
    return linkSass
}

export function createFooter(father: string) {
    const footer = document.createElement("footer");

    footerClasses.forEach((e) => {
        footer.classList.add(e);
    })

    const footerInnerDiv = document.createElement("div");
    footerInnerDiv.classList.add("container");
    
    const footerSpan = document.createElement("span");
    footerSpan.classList.add("text-muted");
    footerSpan.innerText = "Website created with: "
    linkToReferences(footerSpan);

    footerInnerDiv.appendChild(footerSpan);

    footer.appendChild(footerInnerDiv);

    const fatherElement = document.getElementById("appMainContainer");

    fatherElement!.appendChild(footer);
}
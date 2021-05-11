import { ButtonType } from './../button/buttonInterface';


export var NavBarClasses: string[] = ["navbar", "navbar-expand", "navbar-dark", "bg-dark"];
export var firstDivClasses: string[] = ["container-fluid"];
export var firstAAttributes = {
    classes: ["navbar-brand"],
    href: "./index.html"
};
export var buttonAttrsNav: ButtonType = {
    classes: ["navbar-toggler"],
    type: ["button"],
    dataBsToggle: ["collapse"],
    dataBsTarget: ["#navbarCollapse"],
    ariaControls: ["navbarCollapse"],
    ariaExpanded: ["false"],
    ariaLabel: ["Toggle navigation"]  
};
export var spanClasses: string[] = ["navbar-toggler-icon"];
export var secondDivClasses: string[] = ["collapse", "navbar-collapse"];
export var secondDivID: string[] = ["navbarCollapse"];
export var ulClasses: string[] = ["navbar-nav", "me-auto", "mb-md-0", "px-4"];
export var liClasses: string[] = ["navbarCollapse"];
export var secondAAttributes = {
    classes: ["nav-link"],
    ariaCurrent: ["page"],
    href:"/orcamentos.html"
};
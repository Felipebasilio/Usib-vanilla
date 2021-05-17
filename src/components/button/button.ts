import { ButtonType } from './buttonInterface';

export function createButton(buttonValues: ButtonType, fatherElement: HTMLElement) {
    const button = document.createElement("button");

    //Setting button's attributes
    if (buttonValues.classes){
        buttonValues.classes.forEach((e) => {
            button.classList.add(e);
        });
    }
    if (buttonValues.type){
        buttonValues.type.forEach((e) => {
            button.setAttribute("type", e);
        });
    }
    if (buttonValues.dataBsToggle){
        buttonValues.dataBsToggle.forEach((e) => {
            button.setAttribute("data-bs-toggle", e);
        });
    }
    if (buttonValues.dataBsTarget){
        buttonValues.dataBsTarget.forEach((e) => {
            button.setAttribute("data-bs-target", e);
        });
    }
    if (buttonValues.ariaControls){
        buttonValues.ariaControls.forEach((e) => {
            button.setAttribute("aria-controls", e);
        });
    }
    if (buttonValues.ariaExpanded){
        buttonValues.ariaExpanded.forEach((e) => {
            button.setAttribute("aria-expanded", e);
        });
    }
    if (buttonValues.ariaLabel){
        buttonValues.ariaLabel.forEach((e) => {
            button.setAttribute("aria-label", e);
        });
    }

    return button;
}
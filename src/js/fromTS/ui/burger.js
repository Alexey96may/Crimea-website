export class Burger {
    #burgerButton = document.getElementById("burger");
    #header = document.querySelector("header");
    #headerNav = document.getElementById("headerNav");
    #body = document.querySelector("body");
    #bgWrapper = document.getElementById("bg-wrapper");
    #bodyWrapper = document.querySelector(".wrapper");
    #isMenuOpen = false;
    constructor() {
        this.#burgerButton?.addEventListener("click", (event) => {
            event.stopPropagation();
            this.classesToggle();
            this.toggleMenu();
        });
        this.#body?.addEventListener("click", (event) => {
            event.stopPropagation();
            if (event.target.closest("header") &&
                this.#isMenuOpen &&
                event.target.tagName?.toLowerCase() === "a") {
                //this.changeOverflow(this.BODY, "auto");
                this.toggleMenu();
                this.classesToggle();
            }
        });
        this.#bodyWrapper?.addEventListener("click", (event) => {
            event.stopPropagation();
            this.toggleMenu();
            this.classesToggle();
        });
    }
    classesToggle() {
        this.#burgerButton?.classList.toggle("burger__img--cancel");
        this.#headerNav?.classList.toggle("appear");
        this.#body?.classList.toggle("body__fixed");
        this.#bgWrapper?.classList.toggle("bg-wrapper--active");
        this.#bodyWrapper?.classList.toggle("wrapper--active");
    }
    toggleMenu() {
        if (this.#isMenuOpen) {
            this.#isMenuOpen = false;
        }
        else {
            this.#isMenuOpen = true;
        }
    }
}

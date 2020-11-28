class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        return this._element.innerHTML = this.template(model);
    }
}

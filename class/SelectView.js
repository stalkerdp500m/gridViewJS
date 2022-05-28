class SelectView {
    /**
     * properies
     * @param [array] inputs - Перечень полей для ввода
     * @param [array] optionsList - Списки выбора
     * @param {string} _element - управляем куда выводим
     */

    constructor() {
        this.inputs = {};
        this.optionsList = [];
        this._element = false;
    }

    set element (element) {

        if (document.querySelector(element)) {
            this._element = document.querySelector(element);
            return true;
        }
        console.error('root elem for Table not defined');
        this._element = false;
        return false;
    }


    /**
 * Method render
 *
 */
    render () {
        //  let div = this._element;
        // console.log(this._element);
        // let div = document.createElement('div');

        if (this.label) {
            const label = document.createElement('h5');
            label.innerHTML = this.label;
            this._element.appendChild(label);
        }

        const select = document.createElement('select');
        select.name = this.name;
        for (const option in this.optionsList) {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.text = this.optionsList[option];
            if (this.default && this.default == option) {
                optionElement.selected = true;
            }
            select.append(optionElement);
        }
        if (this.class) {
            select.classList.add(...this.class);
        }
        if (this.divClass) {
            this._element.classList.add(...this.divClass);
        }
        select.addEventListener('change', this.func);
        // div.appendChild(select);
        this._element.appendChild(select);
    }
    update () {
        this._element.innerHTML = "";
        this.render();
    }
}

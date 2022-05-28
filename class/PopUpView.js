class PopUpView {
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

        let div = document.createElement('div');

        if (this.label) {
            const label = document.createElement('h5');
            label.innerHTML = this.label;
            div.appendChild(label);
        }
        if (this.message) {
            const masage = document.createElement('p');
            masage.textContent = this.message;
            div.appendChild(masage);
        }

        const select = document.createElement('select');


        if (this.class) {
            select.classList.add(...this.class);
        }
        if (this.divClass) {
            div.classList.add(...this.divClass);
        }
        select.addEventListener('change', this.func);
        // div.appendChild(select);
        this._element.appendChild(div);
        setTimeout(() => {
            div.classList.add('invisible')
            this._element.innerHTML = "";
        }, 2000);
    }
    update () {
        this._element.innerHTML = "";
        this.render();
    }
}

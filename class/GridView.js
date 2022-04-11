class GridView {
    /**
     * properies
     * @param {string} label - заголовок колонки
     * @param [array] _tableClass - список калссов таблицы
     * @param [array] data - входные данные
     * @param [array] atribute - управляем что выводим
     * @param [array] cellClass - массив классов для ячеек
     * @param {string} _element - управляем куда выводим
     * @param {string} _header - заголовок
     * @param [array] _headerClass - классы стилей заголовка
     * @param [array] _tableClass - классы стилей таблицы
     * @param [function] convertFunc- функция преобразования данных для вывода ячейки
     * @param [function] acton (type -тип действия,func - сама функция )- функция действия при клике на ячейку
     */

    constructor() {
        this._tableClass = [];
        this.data = [];
        this.atribute = {};
        this._element = document.querySelector('body');
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
    }

    /**
     * Method set header
     * @param {string} header
     */
    set header (header) {
        if (typeof (header) === 'string' && header.trim() !== '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
     * Method set headerClass
     * @param {array} headerClass
     */
    set headerClass (headerClass) {
        if (typeof (headerClass) === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
     * Method set headerClass
     * @param {array} tableClass
     */
    set tableClass (tableClass) {
        if (typeof (tableClass) === 'object') {
            this._tableClass = tableClass;
            return true;
        }
        return false;
    }

    /**
     * Method set element
     * @param {string} element
     */
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
        if (this._header != '') {
            let head = document.createElement('h1');
            head.textContent = this._header;
            this._headerClass.map(clas => {
                head.classList.add(clas);
            })
            this._element.append(head);
        }

        if (this.data.length > 0 && this.atribute != {}) {
            const table = document.createElement('table');
            this._tableClass.map(clas => {
                table.classList.add(clas);
            })
            const tableHead = document.createElement('thead');
            const trTabHead = document.createElement('tr');
            for (const key in this.atribute) {
                const th = document.createElement('th');
                th.textContent = this.atribute[key].label;
                if (this.atribute[key].headClass) {
                    this.atribute[key].headClass.map(clas => {
                        th.classList.add(clas);
                    })
                }
                trTabHead.append(th);
            }
            tableHead.append(trTabHead)
            table.append(tableHead);
            const tableBody = document.createElement('tbody');
            for (let i = 0; i < this.data.length; i++) {
                const dataArr = this.data[i];
                const tr = document.createElement('tr');
                for (const key in this.atribute) {
                    if (dataArr.hasOwnProperty(key)) {
                        const td = document.createElement('td');
                        if (this.atribute[key].convertFunc) {
                            if (this.atribute[key].returnHTMLobj) {
                                td.append(this.atribute[key].convertFunc(dataArr));
                            }
                            else {
                                td.innerHTML = this.atribute[key].convertFunc(dataArr[key]);
                            }
                        } else {
                            td.textContent = dataArr[key];
                        }
                        if (this.atribute[key].acton) {
                            td.addEventListener(this.atribute[key].acton.type, this.atribute[key].acton.func);
                        }

                        if (this.atribute[key].cellClass) {
                            this.atribute[key].cellClass.map(clas => {
                                td.classList.add(clas);
                            })
                        }
                        if (this.atribute[key].cellFuncClass) {
                            this.atribute[key].cellFuncClass(dataArr).map(clas => {
                                td.classList.add(clas);
                            })
                        }
                        tr.append(td);
                    }
                }
                tableBody.append(tr);
            }
            table.append(tableBody);
            this._element.append(table);
        }
    }

    update () {
        this._element.innerHTML = '';
        this.render();
    }


}
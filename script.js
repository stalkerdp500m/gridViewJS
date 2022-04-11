const table = new GridView;
const data = [
    {
        "column-1": "Petrov Vitalii",
        "column-2": "XXX-XXX-XX",
        "column-3": "300",
        "column-4": "VIP",
        "column-5": "2021-10-01",
        "column-6": "Inga",
        "column-7": "140"
    },
    {
        "column-1": "Ivanova Inha",
        "column-2": "XXX-XXX-XX",
        "column-3": "300",
        "column-4": "VIP",
        "column-5": "2021-10-01",
        "column-6": "Inga",
        "column-7": "140"
    },
    {
        "column-1": "Shevchenko Yurii",
        "column-2": "XXX-XXX-XX",
        "column-3": "300",
        "column-4": "VIP",
        "column-5": "2021-10-01",
        "column-6": "Inga",
        "column-7": "106"
    },
    {
        "column-1": "Testova Maryna",
        "column-2": "XXX-XXX-XX",
        "column-3": "300",
        "column-4": "VIP",
        "column-5": "2021-10-01",
        "column-6": "Inga",
        "column-7": "116"
    }
]

table.header = 'Пример таблицы';
table.headerClass = ['h1', 'text-center', 'm-4'];
table.tableClass = ['table', 'table-hover', 'mx-auto', 'small', 'table-bordered', 'table-dark', 'mb-5'];
table.element = '.tabl';
table.atribute = {
    'column-1': {
        'label': "Клиент",
        'headClass': ['bg-danger'],
        'cellClass': ['bg-danger'],
        'convertFunc': (data) => { return `convert-${data}` },
        'acton': {
            type: 'click',
            func: (e) => {
                e.target.classList.contains('h2') ? e.target.classList.remove('h2') : e.target.classList.add('h2');
            }
        },
    },
    'column-2': {
        'label': "паспорт"
    },
    'column-3': {
        'label': "фактура"
    },
    'column-4': {
        'label': "часы"
    },
    'column-5': {
        'label': "рекрутер в системе"
    },
    'column-6': {
        'label': "премия"
    },
    'column-7': {
        'label': "категория"
    },
}

table.data = data
table.render();
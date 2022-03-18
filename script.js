const table = new GridView;
table.header = 'Приветики';
table.headerClass = ['h1', 'text-center', 'm-4'];
table.tableClass = ['table', 'table-hover', 'mx-auto', 'small', 'table-bordered', 'table-dark', 'mb-5'];
table.element = '.tabl';
table.atribute = {
    'ClentName': {
        'label': "Клиент",
        'headClass': ['bg-danger'],
        'cellClass': ['bg-danger']
    },
    'ClentPasport': {
        'label': "паспорт"
    },
    'DataFakturi': {
        'label': "фактура"
    },
    'Godziny': {
        'label': "часы"
    },
    'RekruterSystem': {
        'label': "рекрутер в системе"
    },
    'PremRek': {
        'label': "премия"
    },
    'ProjectCategory': {
        'label': "категория"
    },
}

// ClentName: "Yemelianova Olena"
// ClentPasport: "FB782219"
// DataFakturi: "2021-10-01"
// Godziny: "144"
// PremRek: "400"
// ProjectCategory: "VIP +"
// RekruterSystem: "Pavlik Olena"

fetch('/api/getData')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        table.data = data;
        table.render();
    });
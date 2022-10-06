import { Item } from '../types/Item'

export const items: Item[] = [
    {
        date: new Date(2022, 9, 15),
        category: 'food',
        title: 'McDonalds',
        value: 32.12
    },

    {   
        date: new Date(2022, 10, 15),
        category: 'food',
        title: 'Burguer King',
        value: 28
    },

    {
        date: new Date(2022, 10, 16),
        category: 'salary',
        title: 'Salário',
        value: 4500
    },

    {
        date: new Date(2022, 10, 16),
        category: 'rent',
        title: 'Aluguel Apt',
        value: 2300
    },

    {
        date: new Date(2022, 11, 15),
        category: 'rent',
        title: 'Aluguel Apt',
        value: 2300
    },
];
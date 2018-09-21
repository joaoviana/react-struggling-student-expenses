import moment from 'moment';
// import selectExpensesTotal from '../../selectors/expenses-total.js';
export default [{
    id: '1',
    description: 'gum',
    note:'',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'rent',
    note:'',
    amount: 13200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'credit card',
    note:'',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

// const total = getExpenseTotal(expenses);
// console.log(total); //17 895
import moment from 'moment';

const filters = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    startDateId:"startDateId",
    endDateId:"endDateId"
};

const altFilters = {
    text:'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3,'days'),
    startDateId:"startDateId",
    endDateId:"endDateId"
};

export{filters,altFilters};
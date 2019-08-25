import {domData} from './base';


//get input query
export const getQuery = () =>domData.searchQuery.value;


//clearing input
export const clearInput = () => {
    domData.searchQuery.value = '';
}

//validate query
export const queryValidator = (query) => {
    let newQuery = query.toString();
    newQuery = newQuery.toLowerCase();
    
    return newQuery;
}


//render icon html
const renderIcon = (obj) => {
     const iconHtml = `
        <img src="${obj.icon}" width="100">
    `
    domData.iconHolder.insertAdjacentHTML('beforeend', iconHtml);
}

export const renderWeather = (weatherObj) => {
    domData.cityName.innerHTML = weatherObj.city;

    //render icon
   renderIcon(weatherObj);

    domData.tempratureHolder.innerHTML = `Temprature: ${weatherObj.temprature}`;
    domData.degreeHolder.innerHTML = `Weather is: ${weatherObj.iconName} `;
    domData.weatherWordsHolder.innerHTML = `Humidity: ${weatherObj.humidity}`;
}


//clearing weather before show into view
export const clearWeather = () => {
    domData.iconHolder.innerHTML = domData.degreeHolder.innerHTML = domData.weatherWordsHolder.innerHTML = domData.tempratureHolder.innerHTML = '';
}
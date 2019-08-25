import axios from 'axios';
import {proxy, locationApiKey, weatherAppId, weatherAppCode} from './../config';

export default class Weather{
    constructor(place){
        this.place = place
    }


    async getWeather() {
        try {

            //get data
            const placeData = await axios(`${proxy}https://api.opencagedata.com/geocode/v1/json?q=${this.place}&key=${locationApiKey}`);
            const commonPlace = placeData.data.results[0].geometry;
    
            const weatherResponse = await axios(`${proxy}https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=${commonPlace.lat}&longitude=${commonPlace.lng}&oneobservation=true&app_id=${weatherAppId}&app_code=${weatherAppCode}`)
    
            const weatherData = weatherResponse.data.observations.location[0].observation[0];
            console.log(weatherData)

            //setting weather data to object
            this.city = weatherData.city;
            this.icon = weatherData.iconLink;
            this.humidity = weatherData.humidity;
            this.iconName = weatherData.iconName;
            this.description = weatherData.description;
            this.temprature = weatherData.temperature;
            

        } catch (err) {
            alert(err)
        }
    }
    

}



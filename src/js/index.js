import {domData, renderLoader, clearLoader} from './view/base';

import Weather from './model/Weather';

import * as weatherView from './view/weatherView'



/**
 * app state
 */

 const state = {}




 /**
  * weather controller
  */

  domData.searchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      weatherController()
  })


  const weatherController = async () => {
      //get input query
        let query = weatherView.getQuery();

        query = weatherView.queryValidator(query)

        if(query){
            //create weather object and push it into state
            state.weather = new Weather(query);

            //prepare ui for result
            weatherView.clearInput();
            try{
                renderLoader(domData.mainContainer);

                //making ajax request and get data
                await state.weather.getWeather();


                //update ui
                console.log(state.weather)
                clearLoader();
                weatherView.clearWeather();
                weatherView.renderWeather(state.weather);
            }catch(err){
                console.log(err)
            }
        }
  }


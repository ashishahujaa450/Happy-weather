export const domData = {
    searchForm: document.querySelector('form.form'),
    searchQuery: document.querySelector('input[type="text"]'),
    iconHolder: document.querySelector('.icon-holder'),
    tempratureHolder: document.querySelector('.tempratrue'),
    weatherWordsHolder: document.querySelector('.weather-words'),
    degreeHolder: document.querySelector('.degree-controller'),
    cityName: document.querySelector('span.city_name'),
    mainContainer: document.querySelector('.container')

}

export const renderLoader = (parent) => {
    const markup = `
    <div class="loader">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;

    document.body.classList.add('loading')
    parent.insertAdjacentHTML('afterbegin', markup)
};

export const clearLoader = () => {
    const loader = document.querySelector('.loader');

    document.body.classList.remove('loading')
    loader.parentElement.removeChild(loader);
}
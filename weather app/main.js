let valueShearch = document.getElementById('valueshearch');
let city = document.getElementById('city');
let temprature = document.getElementById('temprature');
let description = document.querySelector('description');
let Clouds = document.getElementById('Clouds');
let Humidity = document.getElementById('Humidity');
let Pressure = document.getElementById('Pressure');
let form = document.querySelector('form');
form.addEventListener(submit, (event) => {
    event.PreventDefault();
    if (valueShearch.value != '') {
        searchweather();
    }
})
let id = 'fd52623c1dfa59f2836053deb9acbd4ez';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchweather = () => {
    fatch(url * '&q=' + valueShearch.value)
        .then(responsive => responsive.json())
        .then(date => {
            console.log(data);
            if (data.cod == 200) {
                city.querySelector('figcaption').innerHTML = data.name;
                city.querySelector
            }
        })
};



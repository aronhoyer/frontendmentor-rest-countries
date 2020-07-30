import getAllCountries from './getAllCountries';
import renderCountryList from './renderCountryList';

getAllCountries()
  .then((data) => {
    renderCountryList(data);
  })
  .catch((err) => console.error(err));

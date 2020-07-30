function createCountryCard({
  flag,
  name,
  population,
  region,
  capital,
} = {}) {
  const card = document.createElement('article');
  card.className = 'country-card';

  const flagWrapper = document.createElement('div');
  flagWrapper.className = 'country-card__flag';
  card.appendChild(flagWrapper);

  const flagImage = new Image();
  flagImage.src = flag;
  flagWrapper.appendChild(flagImage);

  const countryInner = document.createElement('div');
  countryInner.className = 'country-card__info';
  card.appendChild(countryInner);

  const countryName = document.createElement('h1');
  countryName.className = 'country-card__name';
  countryName.textContent = name;
  countryInner.appendChild(countryName);

  const countryDescription = document.createElement('dl');
  countryDescription.className = 'country-card__description';
  countryInner.appendChild(countryDescription);

  [
    {
      label: 'Population',
      value: population,
    },
    {
      label: 'Region',
      value: region,
    },
    {
      label: 'Capital',
      value: capital,
    },
  ].forEach(({ label, value }) => {
    const dt = document.createElement('dt');
    dt.textContent = label;
    countryDescription.appendChild(dt);

    const dd = document.createElement('dd');
    dd.textContent = value;
    countryDescription.appendChild(dd);
  });

  return card;
}

export default function renderCountryList(countries) {
  const list = document.createElement('ul');
  list.className = 'countries';

  countries.forEach((country) => {
    const listItem = document.createElement('li');
    listItem.className = 'countries__item';

    const card = createCountryCard(country);
    listItem.appendChild(card);

    list.appendChild(listItem);
  });

  const listContainer = document.querySelector('#js-countries-container');
  listContainer.appendChild(list);
}

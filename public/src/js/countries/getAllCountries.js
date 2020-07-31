import config from '../config';

export default function getAllCountries() {
  const fields = ['flag', 'name', 'population', 'region', 'capital'];
  const uri = `${config.get('countriesApiBaseUrl')}/all?fields=${fields.join(';')}`;
  return fetch(uri).then((res) => {
    if (!res.ok) {
      throw Object.assign(new Error(`Failed to GET ${res.url}`), {
        statusCode: res.status,
      });
    }
    return res.json();
  });
}

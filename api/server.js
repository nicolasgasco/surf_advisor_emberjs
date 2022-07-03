const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const SPOTS_DATA = [
  {
    type: 'spots',
    id: 1,
    attributes: {
      country: 'es',
      region: 'bizkaia',
      name: 'La Arena',
      webcams: [
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara1_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara2_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara3_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara4_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara5_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara1_timex.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara2_timex.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara3_timex.jpeg',
      ],
    },
    relationships: {},
  },
  {
    type: 'spots',
    id: 2,
    attributes: {
      country: 'es',
      region: 'bizkaia',
      name: 'Sopela',
      webcams: [
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara1_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara2_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara4_snap.jpeg',
      ],
    },
    relationships: {},
  },
  {
    type: 'spots',
    id: 3,
    attributes: {
      country: 'es',
      region: 'cantabria',
      name: 'Somo',
      webcams: [
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara1_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara2_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara4_snap.jpeg',
      ],
    },
    relationships: {},
  },
  {
    type: 'spots',
    id: 4,
    attributes: {
      country: 'pt',
      region: 'centro',
      name: 'Nazaré',
      webcams: [
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara1_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara2_snap.jpeg',
        'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara4_snap.jpeg',
      ],
    },
    relationships: {},
  },
];

app.get('/api/v1/spots', (request, response) => {
  response.json({
    data: SPOTS_DATA,
  });
});

app.get('/api/v1/spots/:id', (request, response) => {
  const filteredSpotsData = SPOTS_DATA.filter(
    (spot) => spot.id === parseInt(request.params.id)
  )[0];

  response.json({
    data: filteredSpotsData,
  });
});

app.get('/api/v1/countries', (request, response) => {
  const countries = SPOTS_DATA.map((spot) => {
    return spot.attributes.country;
  });

  const singleOccurrenceCountries = countries.filter((item, pos) => {
    return countries.indexOf(item) == pos;
  });

  response.json({
    data: singleOccurrenceCountries.map((countryCode, index) => {
      return {
        type: 'countries',
        id: index + 1,
        attributes: {
          code: countryCode,
        },
        relationships: {},
      };
    }),
  });
});

app.get('/api/v1/regions', (request, response) => {
  const regions = SPOTS_DATA.filter((spot) => {
    return spot.attributes.country === request.query.country;
  }).map((spot) => {
    return spot.attributes.region;
  });

  const singleOccurrenceRegions = regions
    .filter((item, pos) => {
      return regions.indexOf(item) == pos;
    })
    .sort();

  response.json({
    data: singleOccurrenceRegions.map((region, index) => {
      return {
        type: 'regions',
        id: index + 1,
        attributes: {
          name: region,
        },
        relationships: {},
      };
    }),
  });
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});

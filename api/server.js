const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/v1/spots', (request, response) => {
  response.json({
    data: [
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
            'https://www.kostasystem.com/wp-content/uploads/irudiak/muskiz/camara4_snap.jpeg',
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
    ],
  });
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});

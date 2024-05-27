const path = require('path')
const BASE_URL = 'http://localhost:5000/api/';
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        GET_Properties_URL: `${BASE_URL}properties`,
        BASE_URL:  BASE_URL,
    },
}
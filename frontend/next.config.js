const path = require('path')
const BASE_URL = 'https://my-rentify-0zyb.onrender.com';
// const BASE_URL = 'http://localhost:5000/api/';
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        GET_Properties_URL: `${BASE_URL}/api/properties/`,
        BASE_URL:  BASE_URL,
    },
    output: 'export',
}
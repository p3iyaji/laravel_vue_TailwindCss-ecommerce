// module.exports = {
//     devServer: {
//         proxy: 'http://localhost:3000'
//     }
// }

module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
        proxy: 'https://localhost:3000/',
    },
}

const {Pool} = require('pg')

const connection = new Pool({
    connectionString: "postgresql://postgres:exDoOVqPmCWFlcmFszFDNBSjELsRlqyN@nozomi.proxy.rlwy.net:35141/railway",
})

console.log('String de conexão:', connection.connectionString);

module.exports = connection
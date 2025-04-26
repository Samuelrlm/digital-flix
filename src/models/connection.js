const {Pool} = require('pg')

const connection = new Pool({
    connectionString: "postgresql://postgres:exDoOVqPmCWFlcmFszFDNBSjELsRlqyN@nozomi.proxy.rlwy.net:35141/railway"
})

module.exports = connection
const {Pool} = require('pg')

const connection = new Pool({
    connectionString: ""
})

module.exports = connection

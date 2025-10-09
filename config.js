// Configuration file
module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
    },
};

module.exports = async () => {
    const { Sequelize } = require('sequelize');

    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.HOST,
        dialect: 'mysql',
        logging: false
    });

    // Load Model
    require('../model/Lecturer')(sequelize);

    try
    {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        
        console.log('[DB] Connection to database established');
    }
    catch(err)
    {
        console.error('[DB]', err.message);
    }

    return sequelize;
}
const seedCategories = require('./categorySeeds');
const seedProducts = require('./productSeeds');
const customerData = require('./customerData.json');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    process.exit(0);
};

seedAll();
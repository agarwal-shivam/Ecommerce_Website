var sequelize = new Sequelize('database', 'username', {
    host: 'localhost',
    dialect: 'postgres',
});

// Or you can simply use a connection uri
var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
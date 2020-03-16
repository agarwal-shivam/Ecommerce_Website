// const { Sequelize, DataTypes, Model } = require('sequelize');

//my code
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecom_database', 'postgres', '98378283As', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false  // I don't want timestamp fields by default
    }
});
function q() {
    sequelize.authenticate().then(() => { console.log('Connection has been established successfully.'); }).catch((error) => {
        console.error('Unable to connect to the database:', error);

    }).then(() => {
        var User1 = sequelize.define('User1', {
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            }
        })
        User1.sync({ force: false }).then(() => { console.log("The table for the User model was just created!"); });
    })
}
async function l() {
    q.then();
    console.log("lp");
}
l();
//         // Model attributes are defined here
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         lastName: {
//             type: DataTypes.STRING
//             // allowNull defaults to true
//         }
//     }, {
//         freezeTableName: true
//     });
//     User1.sync({ force: true }).then(() => { console.log("The table for the User model was just created!"); });
//     res.send(User1);
//})

//Home 
//User1.findALL()

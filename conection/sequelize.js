const { Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    'node',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306'
    }
);
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const Material = sequelize.define("material", {
    nome: {
        type: DataTypes.STRING,
    },
    setor: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    imagem: {
        type: DataTypes.STRING,
    }
});

sequelize.sync().then(() => {
   console.log(' tables created successfully!');
}).catch((error) => {
   console.error('Unable to create tables : ', error);
});

module.exports = {
    sequelize: sequelize,
    Material: Material
}
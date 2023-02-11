const sequelize = require('sequelize');

const Material = sequelize.define("material", {
    nome: {
        type: sequelize.STRING,
    },
    setor: {
        type: sequelize.STRING,
    },
    descricao: {
        type: sequelize.STRING,
    },
    imagem: {
        type: sequelize.STRING,
    }
});

sequelize.sync().then(() => {
    console.log('tables created successfully!');
}).catch((error) => {
    console.error('Unable to create tables : ', error);
});

module.exports = Material;
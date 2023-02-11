sequelize.sync().then(() => {
    console.log('created successfully!');
 
    Material.create({
        nome: "test",
        setor: "test",
        descricao: "test",
        imagem: "test"
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

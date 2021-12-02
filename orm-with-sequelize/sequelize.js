const { Sequelize , DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });


// Option 3: Passing parameters separately (other dialects)

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

// Define models
const Genre = sequelize.define('Genre', {
    name: { type: DataTypes.STRING, allowNull: false },
    url: {
        type: DataTypes.VIRTUAL,
        get() {
            return '/catalog/genre' + this.id;
        }
    }
});
// Erzeugen der Tabelle und der Einträge
/*
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await Genre.sync();
        console.log("Model Genre has benn synchronized");
        // Create genres
        await Genre.create({ name: 'Fantasy'});
        await Genre.create({ name: 'Science Fiction'});
        await Genre.create({ name: 'French Poetry'});
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      sequelize.close();
})();
*/

// Zugriff auf die Einträge in der Datenbank
(async () => {
    const genre = await Genre.findOne({ where: { name: 'Fantasy' } });
if (genre === null) {
  console.log('Not found!');
} else {
  console.log(genre instanceof Genre); // true
  console.log(genre.name); // 'My Title'
}
const genres = await Genre.findAll();
console.log(genres.map(item => item.datavalues.name));
})();
const { Sequelize , DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });


// Option 3: Passing parameters separately (other dialects)
/*
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    //dialect:  one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' 
});
*/

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

const Author = sequelize.define('Author', {
  first_name: { type: DataTypes.STRING, allowNull: false},
  family_name: { type: DataTypes.STRING, allowNull: false},
  date_of_birth: { type: DataTypes.DATEONLY, allowNull: false},
  date_of_death: { type: DataTypes.DATEONLY, allowNull: true},
});

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false},
  summary: { type: DataTypes.STRING, allowNull:false},
  isbn: { type: DataTypes.STRING, allowNull: false},
});

Author.hasMany(Book); // Book bekommt Fremdschlüssel von Author
Book.belongsTo(Author); // Book:Source Author: target

/* Fragen ob stimmt
{ type: Sequelize.INTEGER,
  references: 'Genre',
  referencesKey: 'id'}
Book.hasMany(Author); 
*/

// Erzeugen der Tabelle und der Einträge

(async () => {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await Author.sync();
      await Book.sync();
      console.log("Model Author, Book has been synchronized");
      // Create Authors
      await Author.create({ first_name: 'Patrick',family_name: 'Rothfuss',date_of_birth: '1973-06-06',});
      await Author.create({ first_name: 'Ben',family_name: 'Bova',date_of_birth: '1932-11-8',});
      await Author.create({ first_name: 'Isaac',family_name: 'Asimov',date_of_birth: '1920-01-02',  date_of_death: '1992-04-06'});
      // Create Books
      await Book.create({title: 'The Wise Man\'s Fear (The Kingkiller Chronicle, #2)', author_id: '1',summary: 'Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.',isbn: '123123', genre: 'Fantasy'});
      await Book.create({title: 'The Slow Regard of Silent Things (Kingkiller Chronicle)', author_id: '2',summary: 'Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.' ,isbn: '345345', genre: 'Science-fiction'});
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    sequelize.close();
})();


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
/*
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
*/
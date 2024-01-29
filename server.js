import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp('postgres://postgres:postgres@localhost:5432/NODE13');

async function setupDb() {
    try {
        await db.none('INSERT INTO planets (name) VALUES ($1), ($2)', ['Earth', 'Mars']);
        console.log('Database setup completed.');
    } catch (error) {
      console.error('Error setting up database:', error);
    }
  }

  setupDb();

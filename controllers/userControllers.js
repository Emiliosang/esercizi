const db = require('./database');

const create = async (req, res) => {

    try {
        const { username, password } = req.body;
        const newUser = db.one(`INSERT INTO users(username, password) VALUES ($1, $2) RETURNIG *`, [username, password])
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const readAll = async (req, res) => {
    try {
        const users = await db.any('SELECT * FROM users')
        res.status(200).json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
};

const readOne = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await db.one(`SELECT * FROM users WHERE id=$1`, userId);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
};

const update = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, password } = req.params;
        const updateUser = await db.one(`UPDATE users SET username=$1, password=$2 WHERE id=$3 RETURNING *`, [username, password, userId])
        res.status(200).json(updateUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const del = async (req, res) => {
    try {
        const userId = req.params.id;
        await db.none(`DELETE FROM users WHERE id=$1`, [userId]);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export default { create, readAll, readOne, update, del };

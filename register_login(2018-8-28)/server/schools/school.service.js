const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers_schools/db');
const School = db.School;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

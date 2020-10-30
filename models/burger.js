const connection = require("../config/connection");

class Burger {
    constructor(connection) {
        this.connection = connection;
    }
    query(query, args = []) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, args, function (err, data) {
                if (err) { return reject(err); }
                else {
                    return resolve(data);
                }
            })
        });
    }

    findAll() {
        return this.query("SELECT * FROM burgers", []);
    }
    create(burgerData) {
        return this.query("INSERT INTO burgers SET ?", [burgerData]);
    }
    update(values, conditions) {
        return this.query("UPDATE burgers SET ? WHERE ?", [values, conditions]);
    }
}
module.exports = {
    Burger: new Burger(connection)
}
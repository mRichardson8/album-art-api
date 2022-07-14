const db = require('../db-config')

class Album {
    constructor(data){
        this.id = data.id || undefined;
        this.name = data.name;
        this.src = data.src;
        this.songs = data.songs;
    }

    static get All() {
        return new Promise(async (resolve, reject) => {
            try{
                const data = await db.query(`SELECT * FROM art;`)
                let albums = data.rows.map(album => new Album(album));
                resolve(albums)
            }catch(err){
                reject("There has been an error with the db")
            }
            
        })
    }
}

module.exports = Album

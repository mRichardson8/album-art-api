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

    static findBySongs(number){
        return new Promise(async(resolve, reject) => {
            try{
                const data = await db.query('SELECT * FROM art WHERE songs > $1;', [number])
                let albums = data.rows.map(album => new Album(album))
                resolve(albums)
            }catch(err){
                reject(`Failed to search by song number of ${number}`)
            }
        });
    }

    static createAlbum(data){
        return new Promise(async (resolve, reject) => {
            try{
                const result = await db.query('INSERT INTO art (name, src, songs) VALUES ($1, $2, $3)', [data.name, data.src, data.songs])
                resolve(result)
            }catch(err){
                reject('Failed to add new album')
            }
        });
    }
}

module.exports = Album

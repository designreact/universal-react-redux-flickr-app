import Flickr from 'node-flickr'
import express from 'express'
import * as secrets from '../../secret.json'

var keys = {"api_key": secrets.apiKey}
var flickr = new Flickr(keys)

var app = express();
var port = process.env.PORT || 1337;

function getPhotos (string, page = 0) {
    return new Promise(
        function (resolve, reject) {
            flickr.get("photos.search", {"text": string, "page": page}, function(err, result){
                if (err){
                    console.log(err)
                    reject(err)
                }
                console.log(result.photos)
                resolve(result.photos)
            })
        }
    )
}

//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes
app.get('/api/v1/search', function(req, res, next) {
    getPhotos(req.query.string, req.query.page).then(
        (photos) => res.send(photos)
    )
});

//start server
app.listen(port);
console.log('Server started! At http://localhost:' + port);



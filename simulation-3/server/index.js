require('dotenv').config()
const express = require('express')
    , bodyParser = require('cors')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('massive-auth0')
    , massive = require('massive')

const app = express()
app.use(cors())
app.use(bodyParser.json())

//invoke massive with db connection
app.use(session({
    secret: process.env.SESSION_SECRET ,
    saveUnitialized: true,
    resave: false
})) 

//app.use(express.static(__dirname+ '/../build'))

app.use(passport.initialize())
app.use(passport.session())

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSECRET: process.env.AUTH_CLIENT_SECRET,
    callbackurl: process.env.AUTH_CALLBACK,

}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db')
    let userData = profile._json,
        auth_id = userData.user_id.split('|')[1]
    db.find_user([auth_id]).then( user =>{
        if (user[0]){
            return done( null, user[0].id)
        } else{
            db.create_user([userData.picture, auth_id]).then( user =>{
                return done (null, user[0].id)
            })
        }
    })

}))

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/auth/setUser',
    failureRedirect: 'http://localhost:3000/login'
}))

passport.serializeUser(function(ID, done){
    done(null, ID)
})

passport.deserializeUser(function(ID, done){
    const db = app.get('db')
    db.find_user_by_session([ID]).then(user =>{
        done(null,user[0])
    })
})

// endpoints start here


app.get('auth/setUser', function (req, res, next){
    
})

app.get('/auth/authenticated', function (req, res, next){
    //checks for the user object on session
    if (!req.user){
        res.status(403).send('LOGIN REQUIRED')
    } else {
        res.status(200).send(req.user)
    }
})

app.get('/auth/logout', function(req, res, next){
    req.logout()
    res.redirect('http://localhost:3000/#/')
})



app.listen(process.env.SERVER_PORT), () => {console.log('listening very very closely on port 3005')}
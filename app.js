/**
 * Created by chenwen on 2014/6/17.
 */
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var indexRoute = require('./routes/index');
var app = express();
app.set('port',3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.multipart());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.engine('.html', ejs.__express);
app.set('view engine','html');
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
indexRoute(app);
app.listen(app.get('port'),function(){
    console.log('Express server listening on port ' + app.get('port'));
});
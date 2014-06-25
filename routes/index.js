/**
 * 登录登出操作
 * Created by chenwen on 2014/6/17.
 */
module.exports = function(app){
    app.get('/' , function(req, res){
        res.render('index');
    });
    app.post('/', function(req, res){
        res.render('index');
    });
    app.get('/filcal', function(req, res){
        res.render('filcal.html');
    });
    app.get('/home', function(req, res){
        res.render('home')
    });
    app.get('/filcal',function(req, res){
        res.render('filcal');
    });
    app.get('/chatRoom', function(req, res){
        res.render('chatRoom');
    });
    app.get('/test', function(req, res){
        res.render('test');
    });
    app.get('/wuziqi', function(req, res){
        res.render('wuziqi');
    });
}

var koa = require('koa');
var views = require('co-views');
var controller = require('koa-route');
var app = koa();
var render      = views('./view',{
    map : {html : 'ejs'}
});
var koa_static  = require('koa-static-server');
app.use(koa_static({
    rootDir : './static/',
    rootPath: '/static/',
    maxage : 0
}))
//测试用的文档
app.use(controller.get('/router_test',function *() {
        this.set('Cache-Control','no-cache');
        this.body = 'hello world';
    }));
app.use(controller.get('/ejs_test',function *() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('test',{title:'sssssss'})
}));

//正式使用的
app.use(controller.get('/',function *() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('index',{title:'肥宅新闻首页'})
}));
app.use(controller.get('/login',function *() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('login',{title:'登陆'})
}));
app.use(controller.get('/signup',function *() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('signup',{title:'注册'})
}));
app.use(controller.get('/shopping',function *() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('shopping',{title:'商城'})
}));
app.use(controller.get('/channel',function *() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('channel',{title:'频道'})
}));
app.use(controller.get('/news',function *() {
    this.set('Cache-Control','no-cache');
    this.body = yield render('news',{title:'新闻内容'})
}));
app.listen(3001);
console.log('Koa is started!')
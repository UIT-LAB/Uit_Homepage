var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var informationRouter = require('./routes/info');
var membersRouter = require('./routes/members');
var loginRouter = require('./routes/login');
var freeRouter = require('./routes/board/free_board');
var qnaRouter = require('./routes/board/qna_board');
var emailRouter = require('./routes/board/email_board');
var noticeRouter = require('./routes/board/notice_board');

var app = express();

//Session
app.use(session({
  secret: '!#!#Conative#!#!',
  resave: false,
  saveUninitialized: true
 }));
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/information', informationRouter);
app.use('/members', membersRouter);
app.use('/login', loginRouter);
app.use('/free', freeRouter);
app.use('/qna', qnaRouter);
app.use('/email', emailRouter);
app.use('/notice', noticeRouter);
//HELMET
app.use(helmet());
app.disable('x-powered-by')




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

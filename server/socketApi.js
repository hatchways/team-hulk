const jwt = require("jsonwebtoken")
const cookie = require('cookie')
const socket = require('socket.io');
const io = socket({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.use(async (socket, next) => {
  try {
      const token = cookie.parse(socket.handshake.headers.cookie).token
      const payload = await jwt.verify(token, process.env.JWT_SECRET)
      socket.userEmail = payload.user
      next()
  } catch(error) {}
})

var socketApi = {};

socketApi.io = io;

const users = {};
let currentUsers = 0

io.on('connection', (socket) => {
    console.log('username:', socket.userEmail)
    console.log('A user connected with socket id: ', socket.id);
    ++currentUsers

    socket.on('joinInterviewRoom', ({ interviewId }) => {
      socket.join(interviewId)
      console.log(`user with socket id of ${socket.id} joined interview room: ${interviewId}`)
    })

    socket.on('leaveInterviewRoom', ({ interviewId }) => {
      socket.leave(interviewId)
      console.log(`A user with socket id of ${socket.id} left interview room: ${interviewId}`)
    })
    socket.on('username', user => {
        users[socket.id] = user;
        io.emit('connected', user);
        io.emit('users', Object.values(users));
      });

    io.emit('user count', currentUsers)

    socket.on('disconnect', (reason) => {
        --currentUsers
        console.log('users on disconnect before delete:',users)
        delete users[socket.id];
        io.emit("disconnected", socket.id);
        io.emit('user count', currentUsers)
        console.log(`user with id of ${socket.id} disconnected.`)
    })
});



module.exports = socketApi;
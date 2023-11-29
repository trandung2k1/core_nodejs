let rs = 0;
for (i = 0; i < 50; i++) {
  rs += i;
}

process.on('message', function (message) {
  console.log('Child process received:', message);
  process.send({ id: message.id, data: rs });
});

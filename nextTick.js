fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((rs) => rs.json())
  .then((data) => {
    console.log(data);
  });

process.nextTick(function () {
  console.log('Next tick');
});

//Result
// Next tick
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

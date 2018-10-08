const http = new easyHTTP();

//get posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err)  {
//     console.log(response);
//   }
//     else {
//       console.log(posts);
//     }
// });


// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) {
//     console.log(response);
//   }
//   else {
//     console.log(post);
//   }
// });


const data = {
  title: 'new Custom post',
  body: 'This is a new post'
}


// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(error);
//   }

//   if(post) {
//     console.log(post);
//   }

// });

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
  if (err) {
    console.log(error);
  }

  if (post) {
    console.log(post);
  }
});

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, resp) {
  if (err) {
    console.log('error');
  }
  else {
    console.log(resp);
  }
});

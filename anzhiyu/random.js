var posts=["2025/04/15/hello-world/","2025/04/15/hr/","2025/04/15/test/","2025/04/15/你好/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
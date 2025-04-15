var posts=["2025/04/15/give-cmd/","2025/04/15/hello-world/","2025/04/15/pojav/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
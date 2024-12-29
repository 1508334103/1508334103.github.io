var posts=["2024/12/29/前端/AI/1、AIGC与生成式AI/","2024/12/29/前端/AI/2、LLM的演进之路/","2024/12/29/前端/AI/3、生成式大语言模型技术原理/","2024/12/29/前端/HTML/1、基本标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
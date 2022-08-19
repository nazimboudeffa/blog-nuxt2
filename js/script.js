const posts = [
    
]
Vue.createApp({
    data() {
      return {
        name: "Nazim Boudeffa",
        links: [
            {
                name : "blog",
                url : "blog.html"
            }, 
            {
                name : "courses",
                url : "courses.html"
            }, 
            {
                name : "about",
                url : "about.html"
            }
        ]
      };
    },
  }).mount("header");

  Vue.createApp({
    data() {
      return {
        posts : posts
      };
    },
  }).mount("#blog");
<template>
  <div class="blog-page">
	  <h2 class="latest">Latest Posts</h2>
	  <div class="articles">
		  <div class="article" v-for="article of articles" :key="article">
			  <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
				  <div class="article-inner">
						<img :src="require(`~/assets/resources/${article.img}`)" alt="" />
						<div class="detail">
							<h3 class="title">{{ article.title }}</h3>
							<p class="desc">{{ article.description }}</p>
						</div>
				  </div>
			  </nuxt-link>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'number'])
			.sortBy('number', 'desc')
			.fetch();

		return {
			articles
		}
	}
}
</script>

<style>

.blog-page {
  padding: 50px 30px;
}

.latest {
  margin-bottom: 30px;
  text-align: center;
}

.articles {
  margin: 0 auto;
  max-width: 800px;
}

.article {
  margin-bottom: 15px;
}

.article-inner {
  padding: 15px;
  background: #FFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
}

.article-inner img {
  display: block;
  width: 100%;
  max-width: 300px;
}
.article-inner .detail {
  padding-left: 15px;
  padding-right: 15px;
}

.title {
  color: #212121;
  font-size: 24px;
  text-decoration: none;
}

.desc {
  color: #888;
  font-size: 18px;
  text-decoration: none;
}
</style>

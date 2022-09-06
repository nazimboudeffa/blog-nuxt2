<template>
  <section>
    <article>
	    <nuxt-content :document="article" />
    </article>
  </section>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('blog', params.slug).fetch();

		return { article }
	}
}
</script>

<style>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

article {
  /*
  display: block;
  margin: 0 auto;
  */
  padding: 50px 30px;
  max-width: 800px;
}

h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
}

h2 {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 30px;
}

</style>
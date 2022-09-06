<template>
  <section id="hero">
    <div class="hero-text">
      <h1>Hello World !</h1>
      <p>Welcome to my blog</p>
    </div>
  </section>
</template>

<script>

</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  font-family: Helvetica;
  font-size: 18px;
}

#hero{
  background-image: url('../assets/resources/markus-spiske-iar-afB0QQw-unsplash.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#hero:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  z-index: -1;
}

.hero-text{
  text-align: center;
}

.hero-text h1{
  font-size: 3rem;
  color: White;
}

.hero-text p{
  font-size: 2rem;
  color: White;
  text-transform: uppercase;
}

@media only screen and (max-width: 600px) {
  *{
    font-size: 13px;
  } 
}

</style>

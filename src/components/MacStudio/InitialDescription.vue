<template>
  <div class="container text-center">
    <div class="title-container">
      <h1 class="mt-5">Mac Studio</h1>
      <h2>Empower station.</h2>
    </div>
    <div class="front-image-container mt-4">
      <img
        src="@/assets/images/static_front.jpg"
        alt="static-front"
        class="w-75 mt-4"
      />
    </div>
    <div class="general-info-container">
      <ul class="general-info">
        <li><span>From $1999</span></li>
        <li><span>|</span></li>
        <li><span>Watch the event</span></li>
        <li><span>Watch the film</span></li>
      </ul>
    </div>
    <div class="description-container">
      <ul class="descriptions">
        <li><h2>Stunningly compact.</h2></li>
        <li><h2>Extensive connectivity.</h2></li>
        <li><h2>Outrageous performance.</h2></li>
        <li><h2>Ready to dive in?</h2></li>
      </ul>
    </div>
    <div class="back-image-container mt-4">
      <img
        src="@/assets/images/static_back.jpg"
        alt="static-back"
        class="w-75"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InitialDescription",
};
</script>

<style scoped>
* {
  color: var(--black);
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 80px;
  font-weight: bold;
}
li {
  list-style: none;
  margin: 40px auto;
}
span {
  font-size: 20px;
}
.description-container {
  margin: 100px auto;
}
</style>
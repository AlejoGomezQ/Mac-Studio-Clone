<template>
  <section>
    <div class="row container-fluid text-center">
      <div class="col-12 mb-5">
        <h2>Choose your superpower.</h2>
      </div>
      <div class="row specifications-container mt-5">
        <div class="col-6 m1-max-container">
          <img src="@/assets/images/m1_max.jpg" alt="m1-max" />
          <ul>
            <li>10-core CPU</li>
            <li>Up to 32-core GPU</li>
            <li>Up to 64GB unified memory</li>
            <li>400GB/s memory bandwidth</li>
          </ul>
        </div>
        <div class="col-6 m1-ultra-container">
          <img src="@/assets/images/m1_ultra.jpg" alt="m1-ultra" />
          <ul>
            <li>20-core CPU</li>
            <li>Up to 64-core GPU</li>
            <li>Up to 128GB unified memory</li>
            <li>800GB/s memory bandwidth</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Superpower",
};
</script>

<style scoped>
section {
  background: #000000;
}
.container-fluid {
  padding: 200px;
}
h2 {
  font-size: 6rem;
  font-weight: bold;
  color: var(--white);
}
img {
  position: relative;
  width: 300px;
  height: auto;
  margin-bottom: 100px;
}
li {
  list-style: none;
  font-family: "Helvetica";
  font-size: 1.8rem;
  font-weight: bold;
}
.m1-max-container li {
  background: -webkit-linear-gradient(var(--pink), var(--purple));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--purple);
}
.m1-ultra-container li {
  background: -webkit-linear-gradient(var(--soft-orange), var(--soft-blue));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--soft-orange);
}
</style>
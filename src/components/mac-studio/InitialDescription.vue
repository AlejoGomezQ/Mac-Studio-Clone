<template>
  <section class="container-fluid text-center">
    <div class="title-container">
      <h1 class="mt-5">Mac Studio</h1>
      <h2>Empower station.</h2>
    </div>
    <div class="front-image-container mt-4">
      <img
        src="@/assets/images/static_front.jpg"
        alt="static-front"
        class="w-50 mt-4"
      />
    </div>
    <div class="general-info-container">
      <ul class="general-info">
        <li><span>From $1999</span></li>
        <li><span>|</span></li>
        <li>
          <span
            ><a href="#">Watch the event</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              /></svg
          ></span>
        </li>
        <li>
          <span
            ><a href="#">Watch the film</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-skip-end-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M6.271 5.055a.5.5 0 0 1 .52.038L9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
              />
            </svg>
          </span>
        </li>
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
        class="w-50"
      />
    </div>
  </section>
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
.container-fluid {
  margin-bottom: 200px;
}
h1 {
  font-size: 1.5rem;
}
h2 {
  font-size: 5rem;
  font-weight: bold;
}
.general-info {
  display: inline-flex;
}

.general-info > li {
  margin-right: 15px;
  font-weight: bold;
}
li {
  list-style: none;
  margin: 40px auto;
}
span {
  font-size: 1.2rem;
}
.description-container {
  margin: 100px auto;
}
a {
  text-decoration: none;
}
a:hover {
  color: var(--black);
  border-bottom: 2px solid var(--black);
}
svg {
  margin-left: 10px;
}
</style>
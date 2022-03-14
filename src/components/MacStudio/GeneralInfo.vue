<template>
  <div class="container-fluid">
    <div class="info-container">
      <p>
        Mac Studio is an entirely new Mac desktop. It packs outrageous
        performance, extensive connectivity, and new capabilities into an
        unbelievably compact form, putting everything you need within easy reach
        and transforming any space into a studio. And it all starts with your
        choice of the ferociously fast M1 Max or the all-new M1 Ultra — the most
        powerful chip ever in a personal computer.
      </p>
      <button type="button" class="btn mt-5" @click.prevent="toggleModal">
        Learn the secret that unites these superpowers
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </button>
    </div>

    <general-info-modal v-if="isVisible" @closeModal="isVisible">
      <div class="chip-info-container">
        <h2>Speed runs in the family.</h2>
        <img src="@/assets/images/chip_family.jpg" alt="chip-family" />
        <p>
          Apple silicon has transformed our Mac lineup, bringing unbelievable
          performance and power efficiency with its breakthrough system on a
          chip (SoC) architecture. Combining the CPU, GPU, I/O, Neural Engine,
          and more into a single SoC with unified memory, this architecture
          means all Mac computers are way faster, cooler, and more power
          efficient. To complete the M1 family, we took another giant leap with
          Apple Silicon to bring even more extreme levels of performance for the
          desktop. The challenge is that there are physical limits to creating a
          larger die than M1 Max. Enter UltraFusion.
        </p>
      </div>
    </general-info-modal>
  </div>
</template>

<script>
import GeneralInfoModal from "../modals/GeneralInfoModal";
export default {
  name: "GeneralInfo",

  components: {
    GeneralInfoModal,
  },

  data() {
    return {
      isVisible: false,
    };
  },

  methods: {
    toggleModal() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.info-container {
  padding: 170px 250px 170px;
}
p {
  font-size: 2.5rem;
  font-weight: 500;
}
button {
  width: auto;
  padding: 10px 15px 10px;
  font-size: 1.4rem;
  font-weight: 500;
  background: var(--white);
  border: 2px solid var(--black);
  border-radius: 30px;
}
button:hover {
  background: var(--black);
  color: var(--white);
}
.chip-info-container {
  padding: 100px 250px;
}
.chip-info-container > h2 {
  font-size: 4rem;
  font-weight: 500;
  color: var(--white);
}
.chip-info-container > img {
  width: 200px;
  height: 100px;
}
.chip-info-container > p {
  font-size: 1.5rem;
  color: var(--gray);
}
</style>
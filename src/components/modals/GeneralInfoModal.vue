<template>
  <div>
    <div class="overlay">
      <div class="modal">
        <div>
          <button @closeModal="closeModal" class="bg-ligth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
              />
            </svg>
          </button>
        </div>
        <div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GeneralInfoModal',

    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style scoped>
.overlay {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    z-index: 200;
}
.modal {
    width: 100%;
    height: 100%;
    
}
</style>
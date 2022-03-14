<template>
  <div>
    <div class="overlay">
      <div class="modal">
        <div>
          <button @closeModal="closeModal" class="close-modal">
            &times;
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
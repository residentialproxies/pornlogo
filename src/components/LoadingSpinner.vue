<template>
  <div class="loading-container" :class="{ 'overlay': overlay }">
    <div class="spinner"></div>
    <p v-if="message" class="loading-message">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  },
  overlay: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.loading-container.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 144, 0, 0.2);
  border-top-color: #ff9000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-message {
  margin-top: 1rem;
  color: #ff9000;
  font-weight: 600;
  text-align: center;
}

.overlay .loading-message {
  color: white;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

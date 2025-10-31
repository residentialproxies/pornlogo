<template>
  <footer class="mt-12 pt-8 border-t border-gray-200">
    <!-- 友情链接 -->
    <div class="mb-6">
      <h3 class="text-center text-lg font-semibold text-gray-700 mb-4">Friendly Links</h3>
      <div class="flex flex-wrap justify-center gap-4 md:gap-8">
        <a
          v-for="link in friendlyLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline"
        >
          {{ link.name }}
        </a>
      </div>
    </div>

    <!-- 版权信息 -->
    <p class="text-center text-gray-600 text-sm">
      © {{ currentYear }} porn-logo.com | All rights reserved
    </p>

    <!-- 附加信息 -->
    <p class="text-center text-gray-500 text-xs mt-2">
      Made with ❤️ by the community
    </p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const friendlyLinks = [
  {
    name: 'Favicon Generator',
    url: 'https://www.favicongenerator.io'
  },
  {
    name: 'Favicon Extractor',
    url: 'https://www.faviconextractor.com'
  },
  {
    name: 'Schema Validator',
    url: 'https://www.schemavalidator.com'
  },
  {
    name: 'Advertising Platform',
    url: 'https://www.publisherlens.com/platforms'
  },
  {
    name: 'whatsmyname',
    url: 'https://whatsmynameapp.org/'
  },
  {
    name: 'redirectchecker',
    url: 'https://www.redirectchecker.org/'
  }
];

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
footer {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

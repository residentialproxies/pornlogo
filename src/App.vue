<template>
  <div id="app" class="container mx-auto py-12 px-6 max-w-[893px]">
    <Ribbon class="z-50"></Ribbon>
    <div class="text-4xl font-black p-5 my-6 text-center">
      <logo></logo>
    </div>
    <div class="text-2xl mb-6 text-center font-extrabold">
      <Description></Description>
    </div>
    <div id="nav">
      <div
        class="flex flex-wrap gap-3 md:gap-6 text-base md:text-lg font-semibold items-center mb-12 justify-center px-4"
      >
        <router-link to="/about" class="nav-link">About</router-link>

        <router-link to="/" class="pb nav-link">
          <span class="prefix">Porn</span>
          <span class="postfix">hub</span>
        </router-link>

        <router-link to="/vertical-ph" class="vph nav-link">
          <p class="prefix">Porn</p>
          <p class="postfix">hub</p>
        </router-link>

        <router-link to="/onlyfans" class="nav-link">
          <span class="text-white">Only</span>
          <span class="text-[#00AFF0]">Fans</span>
        </router-link>

        <router-link to="/netflix" class="nav-link netflix-link">
          <span class="text-white bg-[#E50914] px-3 py-1 rounded">NETFLIX</span>
        </router-link>

        <router-link to="/twitch" class="nav-link twitch-link">
          <span class="text-white bg-[#9146FF] px-3 py-1 rounded">TWITCH</span>
        </router-link>

        <router-link to="/discord" class="nav-link discord-link">
          <span class="text-white bg-[#5865F2] px-3 py-1 rounded">DISCORD</span>
        </router-link>

        <router-link to="/spotify" class="nav-link spotify-link">
          <span class="text-white bg-[#1DB954] px-3 py-1 rounded-full">SPOTIFY</span>
        </router-link>

        <router-link to="/tiktok" class="nav-link tiktok-link">
          <span class="text-white px-3 py-1" style="text-shadow: 2px 2px 0 #FE2C55, -2px -2px 0 #00F2EA;">TIKTOK</span>
        </router-link>

        <router-link to="/instagram" class="nav-link instagram-link">
          <span class="text-white px-3 py-1 rounded-xl" style="background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);">INSTAGRAM</span>
        </router-link>

        <router-link to="/youtube" class="nav-link youtube-link">
          <span class="text-white bg-[#FF0000] px-3 py-1 rounded">YOUTUBE</span>
        </router-link>

        <router-link to="/twitter" class="nav-link twitter-link">
          <span class="text-white bg-[#1DA1F2] px-3 py-1 rounded-full">TWITTER</span>
        </router-link>

        <router-link to="/whatsapp" class="nav-link whatsapp-link">
          <span class="text-white bg-[#25D366] px-3 py-1 rounded-xl">WHATSAPP</span>
        </router-link>

        <router-link to="/snapchat" class="nav-link snapchat-link">
          <span class="text-black bg-[#FFFC00] px-3 py-1 rounded-full font-black">SNAPCHAT</span>
        </router-link>
      </div>
    </div>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Slogan />
    <Faq />
    <Author />
    <Footer class="pb-4" />
  </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
import Description from '@/components/Description.vue';
import Slogan from '@/components/Slogan.vue';
import Faq from '@/components/Faq.vue';
import Author from '@/components/Author.vue';
import Ribbon from '@/components/Ribbon.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
/* Page transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Improve navigation hover effects */
#nav a {
  position: relative;
  transition: all 0.3s ease;
}

#nav a:hover {
  transform: translateY(-2px);
}

#nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff9000, #ff6600);
  transition: width 0.3s ease;
}

#nav a:hover::after {
  width: 100%;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>

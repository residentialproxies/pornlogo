<template>
  <div class="whatsapp">
    <v-tooltip text="Edit the text to create your own WhatsApp-style logo" location="top" model-value>
      <template v-slot:activator="{ props }">
        <div v-bind="props" class="box">
          <div
            class="editarea"
            id="logo"
            :style="{
              'font-size': fontSize + 'px',
              'background-color': transparentBgColor,
              'font-family': store.font
            }"
          >
            <span
              @input="updateText"
              class="logo-text"
              :style="{ color: textColor, 'background-color': backgroundColor }"
              :contenteditable="store.editable"
              spellcheck="false"
            >
              {{ store.prefix }}{{ store.suffix }}
            </span>
          </div>
        </div>
      </template>
    </v-tooltip>

    <div class="customize mt-3">
      <v-tooltip text="Customize your WhatsApp-style logo" location="top" model-value>
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="customize-color">
            <div>
              Text Color:
              <v-menu :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                  <button
                    v-bind="props"
                    class="w-12 h-6 rounded ml-1 border-2 border-solid border-white"
                    :style="{ 'background-color': textColor }"
                  ></button>
                </template>
                <v-color-picker mode="hex" hide-inputs v-model="textColor"></v-color-picker>
              </v-menu>
            </div>
            <div>
              Background Color:
              <v-menu :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                  <button
                    v-bind="props"
                    class="w-12 h-6 rounded ml-1 border-2 border-solid border-white"
                    :style="{ 'background-color': backgroundColor }"
                  ></button>
                </template>
                <v-color-picker mode="hex" hide-inputs v-model="backgroundColor"></v-color-picker>
              </v-menu>
            </div>
            <div class="flex items-center">
              Transparent Background: <v-checkbox-btn v-model="transparentBg"></v-checkbox-btn>
            </div>
          </div>
        </template>
      </v-tooltip>

      <div class="customize-misc">
        <div class="flex flex-col">
          Font Size: {{ fontSize }}px
          <div class="-ml-1">
            <v-slider
              hide-details
              min="30"
              max="200"
              step="1"
              color="#25D366"
              v-model="fontSize"
            ></v-slider>
          </div>
        </div>
        <FontSelector />
      </div>
    </div>

    <div class="download-share">
      <ExportBtn />
      <v-btn @click="twitter" color="#1da1f2">
        <v-icon icon="mdi-twitter" class="mr-0.5"></v-icon> Tweet
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import FontSelector from '@/components/FontSelector.vue';
import { computed, ref } from 'vue';
import { useStore } from '@/stores/store';
import ExportBtn from '@/components/ExportBtn.vue';

const textColor = ref('#FFFFFF');
const backgroundColor = ref('#25D366');
const fontSize = ref(70);
const transparentBg = ref(false);

const store = useStore();

if (!store.prefix) {
  store.updatePrefix('WHATSAPP');
  store.updateSuffix('');
}

const updateText = (e) => {
  if (!navigator.userAgent.toLowerCase().includes('firefox')) {
    const fullText = e.target.childNodes[0]?.nodeValue || '';
    store.updatePrefix(fullText);
    store.updateSuffix('');
  }
};

const twitter = () => {
  let url = 'https://porn-logo.com';
  let text = encodeURIComponent(`Created my WhatsApp-style logo with Porn-Logo.com! ${url}`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`);
};

const transparentBgColor = computed(() => {
  return transparentBg.value ? 'transparent' : '#000000';
});
</script>

<style lang="stylus" scoped>
.whatsapp {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 40px;
  margin: 40px 10px;
  max-width: 100%;

  .editarea {
    padding: 20px;
    text-align: center;
    font-size: 70px;
    font-weight: 700;

    .logo-text {
      color: #FFFFFF;
      background-color: #25D366;
      padding: 15px 35px;
      border-radius: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}

.customize {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;

  .customize-color > div,
  .customize-misc > div {
    padding: 8px 0;
  }
}

.download-share {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
</style>

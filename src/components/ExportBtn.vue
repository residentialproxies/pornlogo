<template>
  <div>
    <v-tooltip text="Export your own logo" location="top" model-value>
      <template v-slot:activator="{ props }">
        <v-btn color="#f90" v-bind="props" :loading="isExporting" :disabled="isExporting">
          <v-icon icon="mdi-download"></v-icon>
          {{ isExporting ? 'Exporting...' : 'Export' }}
          <v-menu activator="parent" :disabled="isExporting">
            <v-list>
              <v-list-item key="png" value="png" @click="download('png')">
                <template v-slot:prepend>
                  <v-icon icon="mdi-file-image"></v-icon>
                </template>
                <v-list-item-title>PNG</v-list-item-title>
                <v-list-item-subtitle>High quality bitmap</v-list-item-subtitle>
              </v-list-item>
              <v-list-item key="svg" value="svg" @click="download('svg')">
                <template v-slot:prepend>
                  <v-icon icon="mdi-vector-square"></v-icon>
                </template>
                <v-list-item-title>SVG</v-list-item-title>
                <v-list-item-subtitle>Scalable vector</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-tooltip>

    <!-- Success/Error Snackbar -->
    <v-snackbar v-model="showSnackbar" :color="snackbarColor" :timeout="3000">
      {{ snackbarMessage }}
      <template v-slot:actions>
        <v-btn variant="text" @click="showSnackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store';
import domtoimage from 'dom-to-image';
import { ref } from 'vue';
import { event } from 'vue-gtag';
import { onClickOutside } from '@vueuse/core';

const store = useStore();
const showMenu = ref(false);
const btnRef = ref(null);
const isExporting = ref(false);
const showSnackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

onClickOutside(btnRef, () => (showMenu.value = false));

const showNotification = (message, color = 'success') => {
  snackbarMessage.value = message;
  snackbarColor.value = color;
  showSnackbar.value = true;
};

const downloadImage = (imgsrc, name) => {
  return new Promise((resolve, reject) => {
    let image = new Image();
    // 解决跨域 Canvas 污染问题
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = function () {
      try {
        let canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL('image/png');
        let a = document.createElement('a');
        let clickEvent = new MouseEvent('click');
        a.download = name || 'photo';
        a.href = url;
        a.dispatchEvent(clickEvent);
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    image.onerror = () => reject(new Error('Failed to load image'));
    image.src = imgsrc;
  });
};

const download = async (type) => {
  showMenu.value = false;
  isExporting.value = true;
  store.editable = false;

  try {
    event('download', { format: type });
    const node = document.getElementById('logo');

    if (!node) {
      throw new Error('Logo element not found');
    }

    const fileName = `${store.prefix}-${store.suffix}.${type}`;

    if (type === 'png') {
      const dataUrl = await domtoimage.toPng(node, {
        quality: 1.0,
        bgcolor: '#ffffff'
      });
      await downloadImage(dataUrl, fileName);
      showNotification(`✅ PNG exported successfully: ${fileName}`, 'success');
    } else if (type === 'svg') {
      const dataUrl = await domtoimage.toSvg(node);
      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataUrl;
      link.click();
      showNotification(`✅ SVG exported successfully: ${fileName}`, 'success');
    }
  } catch (error) {
    console.error('Export error:', error);
    showNotification(`❌ Export failed: ${error.message}`, 'error');
  } finally {
    isExporting.value = false;
    store.editable = true;
  }
};
</script>

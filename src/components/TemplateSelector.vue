<template>
  <div class="template-selector">
    <v-menu :close-on-content-click="false" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="#FF9000" class="mb-4">
          <v-icon icon="mdi-palette"></v-icon>
          Quick Templates
        </v-btn>
      </template>

      <v-card class="template-card" max-width="600">
        <v-card-title class="text-center bg-[#FF9000] text-white">
          Choose a Template
        </v-card-title>
        <v-card-text>
          <div class="templates-grid">
            <div
              v-for="template in templates"
              :key="template.id"
              @click="applyTemplate(template)"
              class="template-item"
              :class="{ active: selectedTemplate === template.id }"
            >
              <div class="template-preview">
                <span
                  :style="{
                    color: template.prefixColor,
                    backgroundColor: template.prefixBg
                  }"
                  >{{ template.prefix }}</span
                >
                <span
                  :style="{
                    color: template.suffixColor,
                    backgroundColor: template.suffixBg
                  }"
                  >{{ template.suffix }}</span
                >
              </div>
              <div class="template-name">{{ template.name }}</div>
              <div class="template-category">{{ template.category }}</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '@/stores/store';

const store = useStore();
const selectedTemplate = ref(null);
const emit = defineEmits(['template-applied']);

const templates = [
  // Tech & Gaming
  {
    id: 1,
    name: 'Code Hub',
    category: 'Tech',
    prefix: 'Code',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#00FF00'
  },
  {
    id: 2,
    name: 'Game Zone',
    category: 'Gaming',
    prefix: 'Game',
    suffix: 'Zone',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#9146FF'
  },
  {
    id: 3,
    name: 'Dev Hub',
    category: 'Tech',
    prefix: 'Dev',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#61DAFB'
  },

  // Food & Lifestyle
  {
    id: 4,
    name: 'Food Hub',
    category: 'Food',
    prefix: 'Food',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#E50914'
  },
  {
    id: 5,
    name: 'Recipe Box',
    category: 'Food',
    prefix: 'Recipe',
    suffix: 'Box',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#FFD700'
  },

  // Music & Entertainment
  {
    id: 6,
    name: 'Music Box',
    category: 'Music',
    prefix: 'Music',
    suffix: 'Box',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#1DB954'
  },
  {
    id: 7,
    name: 'Beat Hub',
    category: 'Music',
    prefix: 'Beat',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#FF9900'
  },

  // Education
  {
    id: 8,
    name: 'Study Time',
    category: 'Education',
    prefix: 'Study',
    suffix: 'Time',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#5865F2'
  },
  {
    id: 9,
    name: 'Learn Hub',
    category: 'Education',
    prefix: 'Learn',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#00C853'
  },

  // Business & Professional
  {
    id: 10,
    name: 'Biz Hub',
    category: 'Business',
    prefix: 'Biz',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#2196F3'
  },
  {
    id: 11,
    name: 'Pro Zone',
    category: 'Business',
    prefix: 'Pro',
    suffix: 'Zone',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#607D8B'
  },

  // Fitness & Health
  {
    id: 12,
    name: 'Fit Hub',
    category: 'Fitness',
    prefix: 'Fit',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#FF5722'
  },

  // Social & Community
  {
    id: 13,
    name: 'Chat Hub',
    category: 'Social',
    prefix: 'Chat',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#00AFF0'
  },
  {
    id: 14,
    name: 'Team Zone',
    category: 'Social',
    prefix: 'Team',
    suffix: 'Zone',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#9C27B0'
  },

  // Creative
  {
    id: 15,
    name: 'Art Hub',
    category: 'Creative',
    prefix: 'Art',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#E91E63'
  },

  // Tech Brands
  {
    id: 16,
    name: 'Stream Pro',
    category: 'Streaming',
    prefix: 'Stream',
    suffix: 'Pro',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#FE2C55'
  },
  {
    id: 17,
    name: 'Pixel Hub',
    category: 'Design',
    prefix: 'Pixel',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#FF6B6B'
  },
  {
    id: 18,
    name: 'Crypto Zone',
    category: 'Tech',
    prefix: 'Crypto',
    suffix: 'Zone',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#F7931A'
  },
  {
    id: 19,
    name: 'AI Hub',
    category: 'Tech',
    prefix: 'AI',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#000000',
    prefixBg: 'transparent',
    suffixBg: '#00D4FF'
  },
  {
    id: 20,
    name: 'Podcast Hub',
    category: 'Media',
    prefix: 'Podcast',
    suffix: 'Hub',
    prefixColor: '#FFFFFF',
    suffixColor: '#FFFFFF',
    prefixBg: 'transparent',
    suffixBg: '#8B5CF6'
  }
];

const applyTemplate = (template) => {
  selectedTemplate.value = template.id;
  store.updatePrefix(template.prefix);
  store.updateSuffix(template.suffix);

  emit('template-applied', {
    prefixColor: template.prefixColor,
    suffixColor: template.suffixColor,
    postfixBgColor: template.suffixBg
  });
};
</script>

<style scoped>
.template-selector {
  margin-bottom: 20px;
  text-align: center;
}

.template-card {
  max-height: 500px;
  overflow-y: auto;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  padding: 20px 10px;
}

.template-item {
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fff;
}

.template-item:hover {
  border-color: #ff9000;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(255, 144, 0, 0.2);
}

.template-item.active {
  border-color: #ff9000;
  background: #fff3e0;
}

.template-preview {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
}

.template-preview span {
  padding: 4px 8px;
  border-radius: 4px;
}

.template-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  font-size: 14px;
}

.template-category {
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>

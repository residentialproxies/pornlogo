import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pornhub',
      component: () =>
        import(/* webpackChunkName: "pornhub" */ '@/components/generator/Pornhub.vue'),
      meta: {
        title: 'Pornhub Logo Generator - Create Custom Pornhub Style Logos Free',
        description: 'Create custom Pornhub-style logos for free. Design and download high-quality logos in PNG & SVG formats instantly.',
        keywords: 'pornhub logo, pornhub logo generator, pornhub logo maker, logo creator',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Pornhub Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/vertical-ph',
      name: 'vertical-pornhub',
      component: () =>
        import(
          /* webpackChunkName: "vertical-pornhub" */ '@/components/generator/VerticalPornHub.vue'
        ),
      meta: {
        title: 'Vertical Pornhub Logo Generator - Free Vertical Logo Maker',
        description: 'Create vertical Pornhub-style logos online. Perfect for social media profiles and mobile apps.',
        keywords: 'vertical pornhub logo, vertical logo generator, mobile logo maker',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'VerticalPornHub Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/onlyfans',
      name: 'onlyfans',
      component: () =>
        import(/* webpackChunkName: "onlyfans" */ '@/components/generator/Onlyfans.vue'),
      meta: {
        title: 'OnlyFans Logo Generator - Create OnlyFans Style Logos Free',
        description: 'Design OnlyFans-style logos instantly. Free online logo maker with PNG & SVG export.',
        keywords: 'onlyfans logo, onlyfans logo generator, onlyfans logo maker',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'OnlyFans Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/netflix',
      name: 'netflix',
      component: () =>
        import(/* webpackChunkName: "netflix" */ '@/components/generator/Netflix.vue'),
      meta: {
        title: 'Netflix Logo Generator - Create Netflix Style Logos Free Online',
        description: 'Create stunning Netflix-style logos for free. Design your custom logo with the iconic Netflix red background and bold typography.',
        keywords: 'netflix logo, netflix logo generator, netflix logo maker, netflix style logo, create netflix logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Netflix Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/twitch',
      name: 'twitch',
      component: () =>
        import(/* webpackChunkName: "twitch" */ '@/components/generator/Twitch.vue'),
      meta: {
        title: 'Twitch Logo Generator - Create Twitch Style Logos Free Online',
        description: 'Design custom Twitch-style logos with the signature purple theme. Perfect for streamers and gaming brands.',
        keywords: 'twitch logo, twitch logo generator, twitch logo maker, gaming logo, streamer logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Twitch Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/discord',
      name: 'discord',
      component: () =>
        import(/* webpackChunkName: "discord" */ '@/components/generator/Discord.vue'),
      meta: {
        title: 'Discord Logo Generator - Create Discord Style Logos Free',
        description: 'Create Discord-style logos with the iconic blurple color. Perfect for gaming communities and servers.',
        keywords: 'discord logo, discord logo generator, discord logo maker, gaming community logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Discord Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/spotify',
      name: 'spotify',
      component: () =>
        import(/* webpackChunkName: "spotify" */ '@/components/generator/Spotify.vue'),
      meta: {
        title: 'Spotify Logo Generator - Create Spotify Style Logos Free',
        description: 'Design Spotify-style logos with the signature green color. Perfect for music brands and playlists.',
        keywords: 'spotify logo, spotify logo generator, spotify logo maker, music logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Spotify Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/tiktok',
      name: 'tiktok',
      component: () =>
        import(/* webpackChunkName: "tiktok" */ '@/components/generator/TikTok.vue'),
      meta: {
        title: 'TikTok Logo Generator - Create TikTok Style Logos Free',
        description: 'Create TikTok-style logos with the iconic glitch effect. Perfect for content creators and viral brands.',
        keywords: 'tiktok logo, tiktok logo generator, tiktok logo maker, social media logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'TikTok Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/instagram',
      name: 'instagram',
      component: () =>
        import(/* webpackChunkName: "instagram" */ '@/components/generator/Instagram.vue'),
      meta: {
        title: 'Instagram Logo Generator - Create Instagram Style Logos Free',
        description: 'Design stunning Instagram-style logos with the iconic gradient effect. Perfect for social media influencers and brands.',
        keywords: 'instagram logo, instagram logo generator, instagram logo maker, social media logo, influencer logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Instagram Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: () =>
        import(/* webpackChunkName: "youtube" */ '@/components/generator/YouTube.vue'),
      meta: {
        title: 'YouTube Logo Generator - Create YouTube Style Logos Free',
        description: 'Create YouTube-style logos with the signature red background. Perfect for video creators and channel branding.',
        keywords: 'youtube logo, youtube logo generator, youtube logo maker, video creator logo, channel logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'YouTube Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/twitter',
      name: 'twitter',
      component: () =>
        import(/* webpackChunkName: "twitter" */ '@/components/generator/TwitterX.vue'),
      meta: {
        title: 'Twitter/X Logo Generator - Create Twitter & X Style Logos Free',
        description: 'Design Twitter or X style logos with both classic blue and new dark themes. Perfect for social media presence.',
        keywords: 'twitter logo, x logo, twitter logo generator, x logo maker, social media logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Twitter/X Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/whatsapp',
      name: 'whatsapp',
      component: () =>
        import(/* webpackChunkName: "whatsapp" */ '@/components/generator/WhatsApp.vue'),
      meta: {
        title: 'WhatsApp Logo Generator - Create WhatsApp Style Logos Free',
        description: 'Create WhatsApp-style logos with the signature green color. Perfect for messaging apps and communication brands.',
        keywords: 'whatsapp logo, whatsapp logo generator, whatsapp logo maker, messaging logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'WhatsApp Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/snapchat',
      name: 'snapchat',
      component: () =>
        import(/* webpackChunkName: "snapchat" */ '@/components/generator/Snapchat.vue'),
      meta: {
        title: 'Snapchat Logo Generator - Create Snapchat Style Logos Free',
        description: 'Design Snapchat-style logos with the iconic yellow background and bold typography. Perfect for social media and youth brands.',
        keywords: 'snapchat logo, snapchat logo generator, snapchat logo maker, social media logo',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Snapchat Generator',
              page: route.path
            };
          }
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
      meta: {
        title: 'About - Porn-Logo.com Free Logo Generator',
        description: 'Learn more about Porn-Logo.com, the free online logo generator for creating custom brand-style logos.',
        keywords: 'about, logo generator, free logo maker',
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'About',
              page: route.path
            };
          }
        }
      }
    }
  ]
});

// Update document title and meta tags on route change
router.beforeEach((to, from, next) => {
  // Update title
  document.title = to.meta.title || 'Porn-Logo.com - Free Logo Generator';

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Create custom logos for free');
  }

  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', to.meta.keywords || 'logo generator, logo maker');
  }

  next();
});

export default router;

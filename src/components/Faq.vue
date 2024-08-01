<template>
  <div class="text-white mt-12">
    <h3 class="text-2xl font-semibold text-custom-primary mb-1">FAQ</h3>
    <v-expansion-panels variant="accordion" mandatory="force">
      <v-expansion-panel title="Can I use my generated logo for personal and commercial use? ">
        <template v-slot:text>
          Absolutely! Your logo is yours to use as you wish, though credit is always appreciated.
        </template>
      </v-expansion-panel>
      <v-expansion-panel
        title="Can I use my generated logo for personal and commercial use?"
        text="Yes! The basic tool is completely free. We may offer premium features in the future."
      ></v-expansion-panel>
      <v-expansion-panel
        title="What file formats can I export? "
        text="You can download your logo in PNG and SVG formats, perfect for web and print."
      ></v-expansion-panel>
      <v-expansion-panel
        title="What if I need a more complex logo? "
        text="If you have advanced design needs, we recommend consulting a professional graphic designer for a fully customized logo."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Can I upload my own images or graphics? "
        text="No, Sorry, Currently, our logo maker focuses on text-based logos in the Pornhub style. We may add image upload functionality in the future."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Will my logo be unique? "
        text="While our tool offers a variety of customization options, there's a chance others might create similar logos. For a truly one-of-a-kind logo, consider working with a designer."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Can I edit my logo after I've downloaded it? "
        text="Once downloaded, you can use image editing software to make further changes. However, you can always revisit our tool to create a new version from scratch."
      ></v-expansion-panel>
      <v-expansion-panel title="How can I suggest features or report problems?">
        <template v-slot:text>
          We value your feedback! Contact our support team or use the feedback form on our <a target="_blank" href="https://github.com/expertbeacon/pornlogo">GitHub repository.</a>
          <br> https://twitter.com/private_proxy
          <br> hello@porn-logo.com
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

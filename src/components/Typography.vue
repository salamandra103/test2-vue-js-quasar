<template>
  <render />
</template>

<script setup lang="ts">
import { h, defineProps } from "vue";
import type { PropType } from "vue";

enum FontTypeEnum {
  "24 Hero",
  "20 Page Title",
  "18 Headline",
  "16 Subhead Semibold",
  "16 Subhead Regular",
  "14 Body Text Semibold",
  "14 Body Text Regular",
  "12 Body Text Semibold",
  "12 Body Text Regular",
  "12 Caption",
  "10 Caption CAPS",
  "10 Text Small",

  "Button Large",
  "Button Medium",
  "Button Small",

  "Link Large",
  "Link Medium",
  "Link Small",

  "Modals help text 14",
  "Forms help text 12",
}

enum TagTypeEnum {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "a",
}

const props = defineProps({
  fontType: {
    type: String as PropType<keyof typeof FontTypeEnum>,
    required: true,
  },
  class: String,
  text: {
    type: String,
    required: true,
  },
});

const tagName: { [key in keyof typeof FontTypeEnum]: keyof typeof TagTypeEnum } = {
  "24 Hero": "h2",
  "20 Page Title": "h3",
  "18 Headline": "h4",
  "16 Subhead Semibold": "h5",
  "16 Subhead Regular": "h5",
  "14 Body Text Semibold": "span",
  "14 Body Text Regular": "span",
  "12 Body Text Semibold": "span",
  "12 Body Text Regular": "span",
  "12 Caption": "p",
  "10 Caption CAPS": "p",
  "10 Text Small": "span",

  "Button Large": "span",
  "Button Medium": "span",
  "Button Small": "span",

  "Link Large": "span",
  "Link Medium": "span",
  "Link Small": "span",

  "Modals help text 14": "span",
  "Forms help text 12": "span",
};

const classNames: { [key in keyof typeof FontTypeEnum]: string } = {
  "24 Hero": "hero-24 ",
  "20 Page Title": "page-title-20 ",
  "18 Headline": "headline-18 ",
  "16 Subhead Semibold": "subhead-semibold-16 ",
  "16 Subhead Regular": "subhead-regular-16 ",
  "14 Body Text Semibold": "body-text-semibold-14 ",
  "14 Body Text Regular": "body-text-regular-14 ",
  "12 Body Text Semibold": "body-text-semibold-12 ",
  "12 Body Text Regular": "body-text-regular-12 ",
  "12 Caption": "caption-12 ",
  "10 Caption CAPS": "caption-caps-10 ",
  "10 Text Small": "text-small-10 ",

  "Button Large": "button-large ",
  "Button Medium": "button-medium ",
  "Button Small": "button-small ",

  "Link Large": "link-large ",
  "Link Medium": "link-medium ",
  "Link Small": "link-small ",

  "Modals help text 14": "modals-help-text ",
  "Forms help text 12": "forms-help-text ",
};

const render = () =>
  h(
    tagName[props.fontType],
    {
      class: [classNames[props.fontType], [props.class]],
    },
    props.text
  );
</script>

<style lang="scss" scoped>
span[class*="link-"] {
  cursor: pointer;
}

.hero-24 {
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  // color: $emphasize;
}

.page-title-20 {
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  // color: $emphasize;
}

.headline-18 {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  // color: $emphasize;
}

.subhead-semibold-16 {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  // color: $emphasize;
}

.subhead-regular-16 {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  // color: $emphasize;
}

.body-text-semibold-14 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  // color: $emphasize;
}

.body-text-regular-14 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  // color: $emphasize;
}

.body-text-semibold-12 {
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  // color: $emphasize;
}

.body-text-regular-12 {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  // color: $emphasize;
}

.caption-12 {
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  // color: $distinct;
}

.caption-caps-10 {
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  // color: $distinct;
}

.text-small-10 {
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  // color: $emphasize;
}

.button-large {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  // color: $neutral;
}

.button-medium {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  // color: $neutral;
}

.button-small {
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  // color: $neutral;
}

.link-large {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  // color: $action;
}

.link-medium {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  // color: $action;
}

.link-small {
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  // color: $action;
}

.modals-help-text {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  // color: $distinct;
}

.forms-help-text {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  // color: $distinct;
}
</style>

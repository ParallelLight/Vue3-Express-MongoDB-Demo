<!-- Before After Comparison Slider -->
<template>
    <p>There is a sliding axis in the middle of the two pictures, you can slide left and right to view the changes of
        the pictures before and after</p>
    <p>npm install --save @img-comparison-slider/vue</p>
    <ImgComparisonSlider style="width: 100%;">
        <img slot="first" style="width: 100%;" :src="beforeImage" />
        <img slot="second" style="width: 100%;" :src="afterImage" />
    </ImgComparisonSlider>
    <p>
        <el-link href="https://github.com/sneas/img-comparison-slider"
            target="_blank">https://github.com/sneas/img-comparison-slider</el-link>
    </p>
</template>
  
<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
const beforeImage = "https://img-comparison-slider.sneas.io/demo/images/before.webp";
const afterImage = "https://img-comparison-slider.sneas.io/demo/images/after.webp";
</script>

<style></style>
<template>
  <div class="flex justify-between text-xs md:text-sm font-medium">
    <div v-if="prev" class="flex-1 mr-0.5">
      <div class="font-semibold text-gray-500 mb-0.5">
        <span class="align-middle">이전 글</span>
      </div>
      <n-link :to="`/${prev.slug}`" class="hover:underline">
        {{ prev.title }}
      </n-link>
    </div>
    <div v-if="next" class="flex-1 ml-0.5 text-right">
      <div class="font-semibold text-gray-500 mb-0.5">
        <span class="align-middle">다음 글</span>
      </div>
      <n-link :to="`/${next.slug}`" class="hover:underline">
        {{ next.title }}
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
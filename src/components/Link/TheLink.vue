<script lang="ts" setup>
import { Primitive } from 'radix-vue'
import { type LinkProps } from '.'

const props = withDefaults(defineProps<LinkProps>(), {
	asChild: false
})
</script>

<template>
	<Primitive
		class="text-base font-medium leading-7 text-royal-blue-600 transition-all hover:underline dark:text-royal-blue-500"
		v-bind="props"
		as="a"
		><slot
	/></Primitive>
</template>

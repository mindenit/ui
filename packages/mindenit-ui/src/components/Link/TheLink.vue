<script lang="ts" setup>
import type { LinkProps } from './index'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<LinkProps>(), {
	asChild: false,
})
</script>

<template>
	<Primitive
		class="selection:bg-royal-blue-200 dark:selection:bg-royal-blue-900 text-base font-medium leading-7 text-royal-blue-600 transition-all hover:underline dark:text-royal-blue-400"
		v-bind="props"
		as="a"
	>
		<slot />
	</Primitive>
</template>

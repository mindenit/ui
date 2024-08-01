<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
	ProgressIndicator,
	ProgressRoot,
	ProgressRootEmits,
	ProgressRootProps,
	useForwardPropsEmits
} from 'radix-vue'

const props = defineProps<ProgressRootProps>()
const emits = defineEmits<ProgressRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<ProgressRoot
		v-bind="forwarded"
		class="relative h-[6px] w-full overflow-hidden rounded-full bg-fiord-200 dark:bg-fiord-900 sm:w-[300px]"
		style="transform: translateZ(0)"
	>
		<ProgressIndicator
			class="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full rounded-full bg-royal-blue-500 transition-transform duration-[660ms]"
			:style="`transform: translateX(-${100 - props.modelValue}%)`"
		/>
	</ProgressRoot>
</template>

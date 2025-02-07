<script setup lang="ts">
import type {
	SwitchRootEmits,
	SwitchRootProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import {
	SwitchRoot,
	SwitchThumb,
	useForwardPropsEmits,
} from 'reka-ui'

export interface SwitchProps extends SwitchRootProps {
	class?: HTMLAttributes['class']
}

const props = defineProps<SwitchProps>()
const emits = defineEmits<SwitchRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<SwitchRoot
		v-bind="forwarded"
		class="relative flex h-5 w-9 cursor-pointer items-center rounded-full border data-[state=checked]:border-royal-blue-700 data-[state=unchecked]:border-fiord-300 data-[state=checked]:bg-royal-blue-500 data-[state=unchecked]:bg-fiord-200 data-[state=unchecked]:shadow-fiord-950/15 dark:data-[state=checked]:border-royal-blue-400 dark:data-[state=unchecked]:border-fiord-700 dark:data-[state=checked]:bg-royal-blue-500 dark:data-[state=unchecked]:bg-fiord-800 dark:data-[state=unchecked]:shadow-fiord-500/15"
	>
		<SwitchThumb
			class="block size-4 translate-x-0.5 rounded-full bg-white transition-transform duration-100 data-[state=checked]:translate-x-4"
		/>
	</SwitchRoot>
</template>

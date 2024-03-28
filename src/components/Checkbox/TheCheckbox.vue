<script lang="ts" setup>
import { HTMLAttributes } from 'vue'
import {
	CheckboxIndicator,
	CheckboxRoot,
	type CheckboxRootEmits,
	useForwardPropsEmits,
	CheckboxRootProps
} from 'radix-vue'
import { Icon } from '@iconify/vue'

export interface CheckboxProps extends CheckboxRootProps {
	class?: HTMLAttributes['class']
}

const props = defineProps<CheckboxProps>()
const emits = defineEmits<CheckboxRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<CheckboxRoot
		v-bind="forwarded"
		class="flex size-5 cursor-pointer items-center justify-center rounded-md border text-white data-[state=checked]:border-royal-blue-700 data-[state=checked]:bg-royal-blue-500 data-[state=unchecked]:bg-white data-[state=unchecked]:shadow-md data-[state=unchecked]:shadow-fiord-950/15 dark:data-[state=checked]:border-royal-blue-400 dark:data-[state=unchecked]:border-fiord-700 dark:data-[state=unchecked]:bg-fiord-950 dark:data-[state=unchecked]:shadow-fiord-500/15"
	>
		<CheckboxIndicator>
			<Icon icon="ph:check" />
		</CheckboxIndicator>
	</CheckboxRoot>
</template>

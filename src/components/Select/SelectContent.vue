<script lang="ts" setup>
import {
	SelectContent,
	SelectPortal,
	useForwardPropsEmits,
	type SelectContentEmits,
	type SelectContentProps
} from 'radix-vue'

interface Props extends Omit<SelectContentProps, 'align' | 'side' | 'sideOffset' | 'position'> {}

const props = defineProps<Props>()
const emits = defineEmits<SelectContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<SelectPortal>
		<SelectContent
			v-bind="forwarded"
			class="z-50 box-border w-full min-w-[--radix-select-trigger-width] rounded-xl border border-fiord-300 bg-white p-2 dark:border-fiord-700 dark:bg-fiord-950"
			align="start"
			side="bottom"
			:side-offset="4"
			position="popper"
		>
			<slot></slot>
		</SelectContent>
	</SelectPortal>
</template>

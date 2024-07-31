<script lang="ts" setup>
import {
	SelectPortal,
	SelectContent,
	useForwardPropsEmits,
	type SelectContentEmits,
	type SelectContentProps
} from 'radix-vue'
const props = defineProps<SelectContentProps>()
const emits = defineEmits<SelectContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
	<SelectPortal>
		<SelectContent
			v-bind="forwarded"
			position="item-aligned"
			class="flex min-w-32 flex-col rounded-xl border border-fiord-400 p-1 text-sm font-medium leading-[14px] shadow-md shadow-fiord-950/15 transition-all data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn dark:border-fiord-700"
			side="bottom"
			:side-offset="4"
			align="start"
		>
			<slot></slot>
		</SelectContent>
	</SelectPortal>
</template>

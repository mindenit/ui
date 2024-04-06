<script lang="ts" setup>
import {
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
			:side-offset="16"
			align="start"
			class="mt-2 flex min-w-32 flex-col gap-2 rounded-lg border border-fiord-400 px-3 py-5 text-sm font-medium leading-[14px] shadow-[0px_4px_7px_0px_#00000066] dark:border-fiord-700"
		>
			<slot />
		</SelectContent>
	</SelectPortal>
</template>

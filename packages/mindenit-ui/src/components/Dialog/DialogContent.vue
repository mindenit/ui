<script lang="ts" setup>
import {
	DialogContent,
	type DialogContentEmits,
	type DialogContentProps,
	DialogOverlay,
	DialogPortal,
	useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<DialogPortal>
		<DialogOverlay
			class="fixed inset-0 z-30 bg-fiord-950/20 data-[state=open]:animate-overlayShow dark:bg-fiord-50/20"
		/>
		<DialogContent
			v-bind="forwarded"
			class="fixed left-[50%] top-[50%] z-40 h-auto w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white shadow-lg shadow-fiord-950/10 focus:outline-none data-[state=open]:animate-contentShow dark:bg-fiord-950 dark:shadow-fiord-50/10"
		>
			<slot />
		</DialogContent>
	</DialogPortal>
</template>

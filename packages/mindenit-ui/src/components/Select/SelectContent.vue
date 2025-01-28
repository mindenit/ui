<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import {
	SelectContent,
	type SelectContentEmits,
	type SelectContentProps,
	SelectPortal,
	useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../utils'

interface Props extends Omit<SelectContentProps, 'align' | 'side' | 'sideOffset' | 'position'> {
	class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<SelectContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<SelectPortal>
		<SelectContent
			v-bind="forwarded"
			:class="
				cn(
					'z-50 box-border w-full min-w-[--radix-select-trigger-width] rounded-xl border border-fiord-300 bg-white p-2 dark:border-fiord-700 dark:bg-fiord-950',
					props.class,
				)
			"
			align="start"
			side="bottom"
			:side-offset="4"
			position="popper"
		>
			<slot />
		</SelectContent>
	</SelectPortal>
</template>

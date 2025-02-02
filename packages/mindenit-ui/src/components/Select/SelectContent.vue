<script lang="ts" setup>
import {
	SelectContent,
	type SelectContentEmits,
	type SelectContentProps,
	SelectPortal,
	useForwardPropsEmits,
} from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { cn } from '../../utils';

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
					'z-50 box-border w-full rounded-xl border border-fiord-300 shadow-md shadow-fiord-500/50 bg-white p-2 dark:border-fiord-700 dark:bg-fiord-950',
					'data-[state=open]:animate-slide-down-and-fade',
					'data-[state=closed]:animate-slide-up-and-fade',
					props.class,
				)
			"
			align="start"
			side="bottom"
			:side-offset="4"
			position="popper"
			:style="{ 'min-width': 'var(--reka-select-trigger-width)' }"
		>
			<slot />
		</SelectContent>
	</SelectPortal>
</template>

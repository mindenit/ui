<script lang="ts" setup>
import {
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
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
					'z-50 max-h-52 overflow-hidden box-border w-full rounded-xl border border-fiord-300 shadow-md shadow-fiord-500/50 dark:shadow-fiord-50/5 bg-fiord-50 dark:border-fiord-700 dark:bg-fiord-950',
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
			<ScrollAreaRoot class="w-full max-h-52" type="auto">
				<ScrollAreaViewport class="w-full max-h-52 p-2">
					<div class="flex flex-col">
						<slot />
					</div>
				</ScrollAreaViewport>
				<ScrollAreaScrollbar
					class="my-2 flex select-none p-0.5 z-20 transition-colors duration-150 ease-out w-2.5 "
					orientation="vertical"
				>
					<ScrollAreaThumb
						class="flex-1 bg-fiord-300 dark:bg-fiord-700 rounded-lg "
					/>
				</ScrollAreaScrollbar>
			</ScrollAreaRoot>
		</SelectContent>
	</SelectPortal>
</template>

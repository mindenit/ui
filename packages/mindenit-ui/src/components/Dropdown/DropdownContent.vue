<script lang="ts" setup>
import { DropdownMenuContent, type DropdownMenuContentEmits, type DropdownMenuContentProps, DropdownMenuPortal, useForwardPropsEmits } from 'reka-ui';

const props = withDefaults(
	defineProps<DropdownMenuContentProps>(),
	{
		sideOffset: 4,
		position: 'popper',
	},
)
const emits = defineEmits<DropdownMenuContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<DropdownMenuPortal>
		<DropdownMenuContent
			v-bind="forwarded" class="z-50 w-56 p-2 box-border rounded-xl border border-fiord-300 shadow-md shadow-fiord-500/50 dark:shadow-fiord-50/5 bg-white dark:border-fiord-700 dark:bg-fiord-950 data-[side=bottom]:animate-slide-down-and-fade data-[state=closed]:data-[side=bottom]:animate-slide-down-and-fade-reverse data-[side=top]:animate-slide-up-and-fade data-[state=closed]:data-[side=top]:animate-slide-up-and-fade-reverse"
		>
			<slot />
		</DropdownMenuContent>
	</DropdownMenuPortal>
</template>

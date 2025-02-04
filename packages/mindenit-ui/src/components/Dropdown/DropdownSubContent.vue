<script setup lang="ts">
import {
	DropdownMenuPortal,
	DropdownMenuSubContent,
	type DropdownMenuSubContentEmits,
	type DropdownMenuSubContentProps,
	useForwardPropsEmits,
} from 'reka-ui';

const props = defineProps<DropdownMenuSubContentProps>()
const emits = defineEmits<DropdownMenuSubContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<DropdownMenuPortal>
		<DropdownMenuSubContent
			v-bind="forwarded"
			class="z-50 w-56 p-2 box-border rounded-xl border border-fiord-300 shadow-md shadow-fiord-500/50 dark:shadow-fiord-50/5 bg-white dark:border-fiord-700 dark:bg-fiord-950 transition data-[side=right]:animate-slide-right-and-fade data-[state=closed]:data-[side=right]:animate-slide-right-and-fade-reverse data-[side=left]:animate-slide-left-and-fade data-[state=closed]:data-[side=left]:animate-slide-left-and-fade-reverse"
		>
			<slot />
		</DropdownMenuSubContent>
	</DropdownMenuPortal>
</template>

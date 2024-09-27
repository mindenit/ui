<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupItemProps, useForwardPropsEmits } from 'radix-vue'

interface Props extends ToggleGroupItemProps {
	withIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), { withIcon: false })
const forwerded = useForwardPropsEmits(props)
</script>

<template>
	<ToggleGroupItem
		v-bind="forwerded"
		class="flex items-center justify-center rounded-md p-1 text-sm text-fiord-400 transition-all data-[state=on]:bg-white data-[state=on]:text-black data-[state=on]:shadow-md dark:data-[state=on]:bg-fiord-800 dark:data-[state=on]:text-white [&_svg]:size-4"
		:class="{ 'h-8 min-w-[100px]': !withIcon, 'size-8': withIcon }"
	>
		<slot />
	</ToggleGroupItem>
</template>

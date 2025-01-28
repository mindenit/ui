<script setup lang="ts">
import type { ToggleGroupItemProps } from 'reka-ui'
import { ToggleGroupItem, useForwardPropsEmits } from 'reka-ui'
import { computed, inject } from 'vue'

const props = defineProps<ToggleGroupItemProps>()
const forwerded = useForwardPropsEmits(props)

const context = inject<{ appearance: 'default' | 'icon' }>('trigger-root-context')

const withIcon = computed(() => context?.appearance === 'icon')
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

<script setup lang="ts">
import type {
	ToggleGroupRootEmits,
	ToggleGroupRootProps,
} from 'reka-ui'
import {
	ToggleGroupRoot,
	useForwardPropsEmits,
} from 'reka-ui'
import { provide } from 'vue'

interface Props extends ToggleGroupRootProps {
	appearance?: 'default' | 'icon'
}

const props = withDefaults(defineProps<Props>(), { appearance: 'default' })
const emits = defineEmits<ToggleGroupRootEmits>()
const forwerded = useForwardPropsEmits(props, emits)

provide('trigger-root-context', { appearance: props.appearance })
</script>

<template>
	<ToggleGroupRoot
		v-bind="forwerded"
		class="flex w-min items-center gap-1 rounded-xl bg-fiord-100 p-1 dark:bg-fiord-900"
	>
		<slot />
	</ToggleGroupRoot>
</template>

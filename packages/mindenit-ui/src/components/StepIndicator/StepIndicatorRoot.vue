<script lang="ts" setup>
import type { StepperRootEmits, StepperRootProps } from 'reka-ui'
import { StepperRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<StepperRootProps>()
const emits = defineEmits<StepperRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<StepperRoot
		v-bind="forwarded"
		class="flex gap-4 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col"
	>
		<slot />
	</StepperRoot>
</template>

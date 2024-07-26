<script lang="ts" setup>
import { StepperRoot, StepperRootEmits, StepperRootProps, useForwardPropsEmits } from 'radix-vue'

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

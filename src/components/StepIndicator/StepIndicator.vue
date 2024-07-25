<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { StepperIndicator, StepperItem, StepperItemProps, useForwardProps } from 'radix-vue'

const props = defineProps<StepperItemProps>()
const forwarded = useForwardProps(props)
</script>
<template>
	<StepperItem
		v-bind="forwarded"
		class="flex w-[230px] items-center rounded-lg bg-fiord-200 text-fiord-500 transition-all data-[state='active']:justify-between data-[state='active']:bg-transparent data-[orientation='horizontal']:p-2 data-[state='active']:text-black dark:bg-fiord-800 data-[state='active']:dark:text-white"
	>
		<div class="flex items-center gap-[10px]">
			<StepperIndicator
				class="flex size-5 items-center justify-center rounded-full bg-white text-sm text-fiord-500 data-[state='active']:bg-royal-blue-500 data-[state='completed']:bg-christi-500 data-[state='active']:text-white data-[state='completed']:text-white dark:bg-fiord-900"
			>
				<template v-if="props.completed">
					<Icon icon="ph:check-bold" />
				</template>
				<template v-else>
					{{ props.step }}
				</template>
			</StepperIndicator>
			<!-- <slot :state="props.state" /> -->
		</div>
		<Icon icon="hidden data-[state='active']:block" />
	</StepperItem>
</template>

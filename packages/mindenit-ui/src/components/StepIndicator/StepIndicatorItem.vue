<script lang="ts" setup>
import type {
	StepperItemProps,
} from 'reka-ui'
import { Icon } from '@iconify/vue'
import {
	StepperIndicator,
	StepperItem,
	StepperTitle,
	StepperTrigger,
	useForwardProps,
} from 'reka-ui'

const props = defineProps<StepperItemProps & { steps?: number }>()
const forwarded = useForwardProps(props)
</script>

<template>
	<StepperItem
		v-bind="forwarded"
		class="group inline-flex items-center gap-2 rounded-lg text-fiord-600 data-[orientation=horizontal]:w-fit data-[orientation=vertical]:w-full data-[orientation=vertical]:bg-fiord-100 data-[orientation=vertical]:data-[state=active]:bg-white data-[orientation=vertical]:p-2 data-[orientation=vertical]:hover:bg-fiord-200 dark:text-fiord-400 dark:data-[orientation=vertical]:bg-fiord-800 dark:data-[orientation=vertical]:data-[state=active]:bg-fiord-950 dark:data-[orientation=vertical]:hover:bg-fiord-700"
	>
		<StepperTrigger
			class="inline-flex size-5 items-center justify-center rounded-full border border-fiord-200 bg-white text-xs font-medium group-data-[state=completed]:border-0 group-data-[state=active]:border-royal-blue-600 group-data-[state=active]:bg-royal-blue-500 group-data-[state=completed]:bg-christi-500 group-data-[state=active]:text-white group-data-[state=completed]:text-white group-data-[state=inactive]:text-fiord-600 dark:border-fiord-700 dark:bg-fiord-950 dark:group-data-[state=active]:border-royal-blue-400 dark:group-data-[state=inactive]:text-fiord-400"
		>
			<StepperIndicator class="select-none" as="span">
				<Icon v-if="completed" icon="lucide:check" />
				<template v-else>
					{{ step }}
				</template>
			</StepperIndicator>
		</StepperTrigger>
		<StepperTitle
			class="select-none text-sm group-hover:text-black group-data-[orientation=horizontal]:group-data-[state=completed]:text-black group-data-[state=active]:text-black dark:group-hover:text-white dark:group-data-[orientation=horizontal]:group-data-[state=completed]:text-white dark:group-data-[state=active]:text-white"
		>
			<slot />
		</StepperTitle>
		<Icon
			v-if="step !== steps"
			class="ml-3 hidden text-fiord-600 group-data-[orientation=horizontal]:block dark:text-fiord-400"
			icon="lucide:chevron-right"
		/>
	</StepperItem>
</template>

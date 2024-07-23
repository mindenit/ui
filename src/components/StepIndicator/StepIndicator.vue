<script lang="ts" setup>
import { cn } from '@/utils'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { StepIndicatorProps, stepIndicatorVariants } from '.'

const props = defineProps<StepIndicatorProps>()

const stepClass = computed(() => {
	switch (props.state) {
		case 'default':
			return 'bg-white text-fiord-500 dark:bg-fiord-900'
		case 'active':
			return 'bg-royal-blue-500 text-white'
		case 'completed':
			return 'bg-christi-500 text-white'
		default:
			return 'bg-white text-fiord-500'
	}
})
</script>
<template>
	<div :class="cn(stepIndicatorVariants({ state: props.state }))">
		<div class="flex items-center gap-[10px]">
			<div :class="['flex size-5 items-center justify-center rounded-full text-sm', stepClass]">
				<template v-if="props.state === 'completed'">
					<Icon icon="ph:check-bold" />
				</template>
				<template v-else>
					{{ props.step }}
				</template>
			</div>
			<slot />
		</div>
		<Icon icon="ph:caret-right" v-if="props.state === 'active'" />
	</div>
</template>

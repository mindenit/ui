<script lang="ts" setup>
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
import { cn } from '@/utils'
import { Icon } from '@iconify/vue'

import { checkboxVariants, type CheckboxProps } from './index'

const props = withDefaults(defineProps<CheckboxProps>(), { checked: false })
</script>

<template>
	<CheckboxRoot v-bind="$props" :class="cn(checkboxVariants({ checked }), props.class)">
		<CheckboxIndicator>
			<Icon icon="ph:check" />
		</CheckboxIndicator>
	</CheckboxRoot>
</template>

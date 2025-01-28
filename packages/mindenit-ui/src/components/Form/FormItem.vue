<script lang="ts">
import type { HTMLAttributes, InjectionKey } from 'vue'

// eslint-disable-next-line symbol-description
export const FORM_ITEM_INJECTION_KEY = Symbol() as InjectionKey<string>
</script>

<script lang="ts" setup>
// eslint-disable-next-line import/first
import { provide } from 'vue'
// eslint-disable-next-line import/first
import { useId } from 'reka-ui'
// eslint-disable-next-line import/first
import { cn } from '../../utils'

const props = defineProps<{
	class?: HTMLAttributes['class']
}>()

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
	<div :class="cn('space-y-2', props.class)">
		<slot />
	</div>
</template>

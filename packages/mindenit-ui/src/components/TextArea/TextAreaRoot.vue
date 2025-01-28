<script lang="ts" setup>
import type { TextAreaProps, TextAreaVariant } from '.'
import { computed } from 'vue'
import { textAreaVariants } from '.'
import { cn } from '../../utils'

const props = withDefaults(defineProps<TextAreaProps>(), { class: '', error: false })

const variant = computed((): TextAreaVariant['variant'] => {
	return props.error ? 'error' : 'default'
})
</script>

<template>
	<div :class="cn(textAreaVariants({ variant }), props.class)" :data-variant="variant">
		<slot />
	</div>
</template>

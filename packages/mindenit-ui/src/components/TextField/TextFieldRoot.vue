<script lang="ts" setup>
import type { TextFieldProps, TextFieldVariant } from '.'
import { computed } from 'vue'
import { textFieldVariants } from '.'
import { cn } from '../../utils'

const props = withDefaults(defineProps<TextFieldProps>(), { class: '', error: false })

const variant = computed((): TextFieldVariant['variant'] => {
	return props.error ? 'error' : 'default'
})
</script>

<template>
	<div :class="cn(textFieldVariants({ variant }), props.class)" :data-variant="variant">
		<slot />
	</div>
</template>

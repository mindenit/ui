<script lang="ts" setup>
import { computed } from 'vue'
import { TextFieldProps, TextFieldVariant, textFieldVariants } from '.'
import { cn } from '@/utils'

const props = withDefaults(defineProps<TextFieldProps>(), { class: '', error: false })

console.log(props.error)

const variant = computed((): TextFieldVariant['variant'] => {
	return props.error ? 'error' : 'default'
})
</script>

<template>
	<div :class="cn(textFieldVariants({ variant: variant }), props.class)" :data-variant="variant">
		<slot></slot>
	</div>
</template>

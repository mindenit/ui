<script lang="ts" setup>
import { type TextProps, textVariants } from '.'
import { cn } from '../../utils'

const props = defineProps<TextProps>()
</script>

<template>
	<p :class="cn(textVariants({ size }), props.class)"><slot /></p>
</template>

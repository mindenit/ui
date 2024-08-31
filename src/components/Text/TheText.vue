<script lang="ts" setup>
import { cn } from '@/utils'
import { textVariants, type TextProps } from '.'

const props = defineProps<TextProps>()
</script>

<template>
	<p :class="cn(textVariants({ size }), props.class)"><slot /></p>
</template>

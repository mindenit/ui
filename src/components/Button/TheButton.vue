<script lang="ts" setup>
import { Primitive } from 'radix-vue'
import { cn } from '../../utils'
import { buttonVariants, type ButtonProps } from './index'

const props = withDefaults(defineProps<ButtonProps>(), { asChild: false })
</script>

<template>
	<Primitive
		v-bind="$attrs"
		as="button"
		:as-child="asChild"
		:class="cn(buttonVariants({ variant, appearance, size }), props.class)"
	>
		<slot></slot>
	</Primitive>
</template>

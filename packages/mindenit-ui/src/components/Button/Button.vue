<script lang="ts" setup>
import { Primitive } from 'reka-ui'
import { type ButtonProps, buttonVariants } from '.'

const props = withDefaults(defineProps<ButtonProps>(), { asChild: false })
</script>

<template>
	<Primitive
		v-bind="$attrs"
		as="button"
		:class="buttonVariants({ variant, size, class: props.class })"
		:as-child
	>
		<slot />
	</Primitive>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
	<div class="text-gray-500">
		<slot>
			<Icon icon="lucide:dot" />
		</slot>
	</div>
</template>

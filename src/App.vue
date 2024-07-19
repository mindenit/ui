<script setup lang="ts">
import { SelectRoot, SelectTrigger, SelectContent, SelectItem } from './components/Select'
</script>

<template>
	<SelectRoot>
		<SelectTrigger placeholder="Select option" />
		<SelectContent>
			<SelectItem value="option-1">Option 1</SelectItem>
			<SelectItem value="option-2">Option 2</SelectItem>
			<SelectItem value="option-3" disabled>Option 3</SelectItem>
		</SelectContent>
	</SelectRoot>
</template>

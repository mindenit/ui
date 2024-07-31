<script lang="ts" setup>
import { DateFormatter } from '@internationalized/date'
import { DatePicker, type DatePickerPreset } from './components/DatePicker'
import { ref } from 'vue'
import { DateValue } from '@internationalized/date'

const value = ref<DateValue>()

const df = new DateFormatter('en-EN', {
	dateStyle: 'long'
})

const presets: DatePickerPreset[] = [
	{ value: 0, label: 'Today' },
	{ value: 1, label: 'Tomorrow' },
	{ value: 3, label: 'In 3 days' },
	{ value: 7, label: 'In a week' }
]
</script>

<template>
	<div class="p-8">
		<DatePicker v-model="value" :formatFn="(value) => df.format(value)" :presets />
	</div>
</template>

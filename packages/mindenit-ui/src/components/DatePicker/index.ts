import type { CalendarRootProps } from 'reka-ui'

export interface DatePickerPreset {
	label: string
	value: number
}

export interface DatePickerProps extends Omit<CalendarRootProps, 'placeholder' | 'fixedWeeks'> {
	placeholder?: string
	formatFn: (value: Date) => string
	presets?: DatePickerPreset[]
	presetsPlaceholder?: string
}

export { default as DatePicker } from './DatePicker.vue'

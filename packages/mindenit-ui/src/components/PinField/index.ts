import { PinInputRootProps } from 'reka-ui'

export interface PinFieldProps
	extends Omit<PinInputRootProps, 'type' | 'placeholder' | 'otp' | 'asChild'> {
	length?: number
	mode?: 'otp' | 'numeric'
}

export { default as PinField } from './PinField.vue'

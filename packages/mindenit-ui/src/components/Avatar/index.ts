import { tv, type VariantProps } from 'tailwind-variants'

export const avatarVariants = tv({
	variants: {
		size: {
			'80px': 'text-2xl',
			'72px': 'text-2xl',
			'64px': 'text-2xl',
			'56px': 'text-lg leading-6 tracking-[-1.5%]',
			'48px': 'text-lg leading-6 tracking-[-1.5%]',
			'40px': 'text-lg leading-6 tracking-[-1.5%]',
			'32px': 'text-sm tracking-[-0.5%]',
			'24px': 'text-xs',
			'20px': 'text-xs'
		}
	},
	defaultVariants: {
		size: '32px'
	}
})

type AvatarVariants = VariantProps<typeof avatarVariants>

export interface AvatarProps {
	size: AvatarVariants['size']
	fallback: string
	url: string
}

export { default as Avatar } from './TheAvatar.vue'

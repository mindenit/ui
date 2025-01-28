export interface LinkProps {
	asChild: boolean
}

export interface LinkPropsWithHref {
	default: string
	asChild: boolean
	href: string
}

export { default as Link } from './TheLink.vue'

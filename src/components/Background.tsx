interface BackgroundProps{
	children: any
	className?: string
}

export default function Background(props: BackgroundProps) {
    return(
		<div className={`w-full bg-[#0F0F17] ${props.className}`}>
			{props.children}
		</div>
    )
}
const Img = (src, parent=null) => {
	const name = src.split('/')[src.split('/').length - 1].split('.')[0]
	const element = create(
		'img',
		parent,
		[],
		name,
		{
			backgroundColor: '#fff',
			maxWidth: '700px',
			width: '90%',
			minWidth: 'calc(350px - 10%)',
			borderRadius: '15px',
			boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
			padding: '10px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		[],
		{ src: src, alt: name }
	)

	parent && parent.appendChild(element)
	return element
}
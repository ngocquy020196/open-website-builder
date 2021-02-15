const SlideIcon = ({
	width = '44',
	height = '50',
	fill = 'black',
	...props
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 44 50'
			fill={fill}
			{...props}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M13.9847 5.70534H6.96087L11.0595 1.60448L9.45497 0L2.61719 6.84005L9.46405 13.6892L11.0685 12.0847L6.96087 7.97476H13.9847V5.70534Z'
				fill={fill}
			/>
			<path
				d='M36.7515 0L35.1471 1.60448L39.2479 5.70534H32.165V7.97476H39.2479L35.138 12.0847L36.7425 13.6892L43.5916 6.84005L36.7515 0Z'
				fill={fill}
			/>
			<path
				d='M40.7745 28.0706C40.6837 27.9798 40.5861 27.9004 40.4817 27.8391C39.0111 26.9132 37.334 26.4457 35.6569 26.4457C33.3353 26.4457 31.016 27.3307 29.2458 29.1009L27.6413 30.7076V9.11405C27.6413 6.61768 25.5988 4.5752 23.1025 4.5752C20.6061 4.5752 18.5636 6.61768 18.5636 9.11405V19.0995C17.7353 18.0828 16.4871 17.4201 15.0732 17.4201C14.0906 17.4201 13.1851 17.7424 12.443 18.2757L2.66855 23.9334C1.31824 24.7186 0.408203 26.1733 0.408203 27.8436V35.3078C0.408203 43.4232 6.985 50 15.1005 50C19.0311 50 22.5918 48.4477 25.2266 45.9332L25.2289 45.9536L25.4808 45.7017C25.4854 45.6972 25.4899 45.6927 25.4922 45.6904L40.7745 30.4058C41.4213 29.7613 41.4213 28.7151 40.7745 28.0706ZM23.6607 44.2902C21.3346 46.5074 18.2936 47.7283 15.1005 47.7283C8.24907 47.7283 2.67763 42.1569 2.67763 35.3055V27.8414C2.67763 27.0425 3.10201 26.3186 3.81461 25.9033L13.7638 20.1185C14.0361 19.9233 14.4855 19.6873 15.071 19.6873C15.9787 19.6873 16.5461 20.2161 16.8048 20.5315L18.8201 23.0007C19.1242 23.3729 19.628 23.5136 20.0796 23.3524C20.5312 23.1913 20.833 22.7646 20.833 22.2835V9.11405C20.833 7.86359 21.852 6.84462 23.1025 6.84462C24.3529 6.84462 25.3719 7.86359 25.3719 9.11405V31.8015C25.3719 32.766 25.9778 33.5762 26.8289 33.9007C27.1942 34.0392 27.6073 33.9507 27.8841 33.6738L30.8503 30.7076C32.1348 29.4231 33.8414 28.7174 35.6569 28.7174C36.6804 28.7174 37.6813 28.9443 38.5936 29.38L23.6607 44.2902Z'
				fill={fill}
			/>
		</svg>
	)
}
export default SlideIcon
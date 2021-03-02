import { useEffect, useState } from 'react'
import { generatePageCode } from './helpers'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { ROW_HEIGHT } from '../web-builder/constants'
import { normalizeLayout, normalizeBlockStructure } from '../builder'

const WebPreview = ({ layout, blocksConfig }) => {
	const [pageDesign, setPageDesign] = useState(null)

	useEffect(() => {
		setPageDesign(generatePageCode(layout, blocksConfig))
	}, [layout, blocksConfig])

	return (
		<Box
			p='10px'
			d='grid'
			gridTemplateColumns='repeat(10, 1fr)'
			gridTemplateRows={`repeat( auto-fit, ${ROW_HEIGHT}px )`}
			gridGap={'10px'}
			w='500px'
			h='1500px'
			border='1px solid black'>
			{pageDesign}
		</Box>
	)
}

WebPreview.propTypes = {
	layout: PropTypes.any,
	blocksConfig: PropTypes.any
}

export const ResumeWebsite = ({ userBlocksData }) => {
	return (
		<Box
			p='10px'
			d='grid'
			gridTemplateColumns='repeat(10, 1fr)'
			gridTemplateRows={`repeat( auto-fit,  0.75vw )`}
			gridGap={'10px'}
			w='100vw'
			height='1500px'>
			{generatePageCode(
				normalizeLayout(userBlocksData),
				normalizeBlockStructure(userBlocksData)
			)}
		</Box>
	)
}

export default WebPreview

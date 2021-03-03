import { useEffect, useState } from 'react'
import { generatePageCode } from './helpers'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { GRID_COLUMNS, ROW_HEIGHT } from '../web-builder/constants'
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
	const [rowHeight, setRowHeight] = useState(ROW_HEIGHT)

	function handleWindowResize() {
		setRowHeight(window?.innerWidth / GRID_COLUMNS)
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return (
		<Box
			p='10px'
			d='grid'
			gridTemplateColumns={`repeat(${GRID_COLUMNS}, 1fr)`}
			gridTemplateRows={`repeat( auto-fit,  ${rowHeight}px )`}
			// gridGap={'10px'}
			w='100vw'
			height='1500px'>
			{generatePageCode(
				normalizeLayout(userBlocksData),
				normalizeBlockStructure(userBlocksData)
			)}
		</Box>
	)
}

ResumeWebsite.propTypes = {
	userBlocksData: PropTypes.any
}

export default WebPreview

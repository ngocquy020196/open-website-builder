import React, { useEffect, useRef, useState } from 'react'
import RGL, { WidthProvider } from '../../components/react-grid-layout'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'

import {
  saveOnLocal,
  getUpdatedHierarchy,
  getParentBlock,
  highlightFutureParentBlock,
} from './helpers'
import { GRID_COLUMNS } from './constants'
import { batch, useDispatch, useSelector } from 'react-redux'
import {
  getBuilderData,
  getGridRowHeight,
  getNewBlock,
  getSelectedBlockId,
  setResizingBlockId,
  setGridRowHeight,
  setBlockEditable,
  addNewBlock,
  setLayouts,
  setHierarchy,
  getHierarchy,
} from '../../features/builderSlice'
import { BuilderBlock } from '../blocks'
import { v4 } from 'uuid'

const reactGridLayoutProps = {
  cols: GRID_COLUMNS,
  autoSize: true,
  margin: [0, 0],
  style: { width: '100%', minHeight: '100vh', height: '100%' },
  className: 'layout',
  verticalCompact: false,
}

const ReactGridLayout = WidthProvider(RGL)

const GridLayoutWrapper = ({ children }) => {
  const dispatch = useDispatch()
  return (
    <Box
      d="flex"
      w="100%"
      flexDir="row"
      onClick={() => dispatch(setBlockEditable(null))}
      id="main-builder"
    >
      {children}
    </Box>
  )
}
GridLayoutWrapper.propTypes = {
  children: PropTypes.any,
}

const blocksZIndex = {
  inception: 0,
  image: 1,
  text: 2,
}

const WebBuilder = () => {
  const dispatch = useDispatch()
  const { blocks, layouts, hierarchy } = useSelector(getBuilderData)
  const { type: newBlockType, id: newBlockId } = useSelector(getNewBlock)
  const selectedBlockId = useSelector(getSelectedBlockId)
  const gridRowHeight = useSelector(getGridRowHeight)
  const lastHoveredEl = useRef()

  useEffect(() => {
    saveOnLocal({ blocks, layouts, hierarchy })
  }, [blocks, layouts, hierarchy])

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  function onDrop(newLayout, droppedBlockLayout) {
    dispatch(addNewBlock(newLayout, droppedBlockLayout))
  }

  function handleWindowResize() {
    dispatch(setGridRowHeight(window?.innerWidth / GRID_COLUMNS))
  }

  function handleLayoutChange(newLayout, __, newItem) {
    const updatedHierarchy = getUpdatedHierarchy(newLayout, newItem, hierarchy)
    batch(() => {
      dispatch(setLayouts(newLayout))
      dispatch(setHierarchy(updatedHierarchy))
      setTimeout(() => {
        dispatch(setResizingBlockId(null))
      }, 1000)
    })
    if (lastHoveredEl.current?.style) {
      lastHoveredEl.current.style.backgroundColor = null
    }
  }

  function handleDrag(layout, _, newItem) {
    const newParent = getParentBlock(layout, newItem, hierarchy)
    highlightFutureParentBlock(newParent?.i, lastHoveredEl)
  }

  function handleKeyPress(e) {
    if (e.key === 'Escape') {
      dispatch(setBlockEditable(null))
    }
  }

  function handleAddSize(_, __, resizingBlock) {
    dispatch(setResizingBlockId(resizingBlock))
  }

  return (
    <GridLayoutWrapper>
      <ReactGridLayout
        {...reactGridLayoutProps}
        rowHeight={gridRowHeight}
        onDrop={onDrop}
        preventCollision={!!newBlockType}
        isDroppable={true}
        onResize={handleAddSize}
        onDrag={handleDrag}
        onResizeStop={handleLayoutChange}
        onDragStop={handleLayoutChange}
        useCSSTransforms={true}
        droppingItem={{
          i: newBlockType ? `${newBlockType}-${newBlockId}` : '',
          w: 15,
          h: 10,
        }}
        layout={layouts}
        hierarchy={hierarchy}
      >
        {layouts.map(({ i }) => {
          const { type } = blocks[i]
          return (
            <Box key={i} zIndex={blocksZIndex[type]}>
              <BuilderBlock blockId={i} />
            </Box>
          )
        })}
      </ReactGridLayout>
    </GridLayoutWrapper>
  )
}

WebBuilder.propTypes = {
  userBlocksData: PropTypes.any,
  newBlockType: PropTypes.any,
  setIsSaved: PropTypes.any,
  setNewDropBlockType: PropTypes.any,
}

export default WebBuilder

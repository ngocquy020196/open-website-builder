import { useState, useEffect } from 'react'
import localforage from 'localforage'

import { FallbackData } from '../builder/initial-data'
import { Builder } from '../builder'

function BuilderPage() {
	const [data, setUserBlocksData] = useState()

	useEffect(() => {
		getUserData().then((userData) => {
			const parsedData = JSON.parse(userData)
			setUserBlocksData(parsedData || FallbackData)
		})
	}, [])

	if (!data) return <div>loading</div>
	return <Builder userBlocksData={data} />
}

async function getUserData() {
	let value = null
	try {
		value = await localforage.getItem('userData')
		return value
	} catch (err) {
		console.error(err)
	}
}

export default BuilderPage

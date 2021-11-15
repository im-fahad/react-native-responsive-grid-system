import React from "react"
import { View } from "react-native"
import useGridStyles from "./styles"

interface IProps {
	children: React.ReactNode
	rowStyles?: any
}

const Row = ({ children, rowStyles }: IProps) => {
	const gridStyles = useGridStyles()

	return <View style={[gridStyles.row, rowStyles]}>{children}</View>
}

export default Row

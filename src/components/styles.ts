import { useEffect, useState } from "react"
import { StyleSheet, useWindowDimensions } from "react-native"

const generateStyles = (width: number) => {
	const colWidth = 100 / 12

	const xs = width > 0 && width < 418
	const sm = width > 417 && width < 768
	const md = width > 767 && width < 1024
	const lg = width > 1023

	return StyleSheet.create(
		xs
			? {
					row: {
						flexDirection: "row",
						flexWrap: "wrap",
						marginRight: -5
					},
					col_1: {
						width: colWidth * 1 + "%",
						paddingRight: 5
					},
					col_2: {
						width: colWidth * 2 + "%",
						paddingRight: 5
					},
					col_3: {
						width: colWidth * 3 + "%",
						paddingRight: 5
					},
					col_4: {
						width: colWidth * 4 + "%",
						paddingRight: 5
					},
					col_5: {
						width: colWidth * 5 + "%",
						paddingRight: 5
					},
					col_6: {
						width: colWidth * 6 + "%",
						paddingRight: 5
					},
					col_7: {
						width: colWidth * 7 + "%",
						paddingRight: 5
					},
					col_8: {
						width: colWidth * 8 + "%",
						paddingRight: 5
					},
					col_9: {
						width: colWidth * 9 + "%",
						paddingRight: 5
					},
					col_10: {
						width: colWidth * 10 + "%",
						paddingRight: 5
					},
					col_11: {
						width: colWidth * 11 + "%",
						paddingRight: 5
					},
					col_12: {
						width: colWidth * 12 + "%",
						paddingRight: 5
					}
			  }
			: sm
			? {
					row: {
						flexDirection: "row",
						flexWrap: "wrap",
						marginRight: -6
					},
					col_sm_1: {
						width: colWidth * 1 + "%",
						paddingRight: 6
					},
					col_sm_2: {
						width: colWidth * 2 + "%",
						paddingRight: 6
					},
					col_sm_3: {
						width: colWidth * 3 + "%",
						paddingRight: 6
					},
					col_sm_4: {
						width: colWidth * 4 + "%",
						paddingRight: 6
					},
					col_sm_5: {
						width: colWidth * 5 + "%",
						paddingRight: 6
					},
					col_sm_6: {
						width: colWidth * 6 + "%",
						paddingRight: 6
					},
					col_sm_7: {
						width: colWidth * 7 + "%",
						paddingRight: 6
					},
					col_sm_8: {
						width: colWidth * 8 + "%",
						paddingRight: 6
					},
					col_sm_9: {
						width: colWidth * 9 + "%",
						paddingRight: 6
					},
					col_sm_10: {
						width: colWidth * 10 + "%",
						paddingRight: 6
					},
					col_sm_11: {
						width: colWidth * 11 + "%",
						paddingRight: 6
					},
					col_sm_12: {
						width: colWidth * 12 + "%",
						paddingRight: 6
					}
			  }
			: md
			? {
					row: {
						flexDirection: "row",
						flexWrap: "wrap",
						marginRight: -7
					},
					col_md_1: {
						width: colWidth * 1 + "%",
						paddingRight: 7
					},
					col_md_2: {
						width: colWidth * 2 + "%",
						paddingRight: 7
					},
					col_md_3: {
						width: colWidth * 3 + "%",
						paddingRight: 7
					},
					col_md_4: {
						width: colWidth * 4 + "%",
						paddingRight: 7
					},
					col_md_5: {
						width: colWidth * 5 + "%",
						paddingRight: 7
					},
					col_md_6: {
						width: colWidth * 6 + "%",
						paddingRight: 7
					},
					col_md_7: {
						width: colWidth * 7 + "%",
						paddingRight: 7
					},
					col_md_8: {
						width: colWidth * 8 + "%",
						paddingRight: 7
					},
					col_md_9: {
						width: colWidth * 9 + "%",
						paddingRight: 7
					},
					col_md_10: {
						width: colWidth * 10 + "%",
						paddingRight: 7
					},
					col_md_11: {
						width: colWidth * 11 + "%",
						paddingRight: 7
					},
					col_md_12: {
						width: colWidth * 12 + "%",
						paddingRight: 7
					}
			  }
			: {
					row: {
						flexDirection: "row",
						flexWrap: "wrap",
						marginRight: -8
					},
					col_lg_1: {
						width: colWidth * 1 + "%",
						paddingRight: 8
					},
					col_lg_2: {
						width: colWidth * 2 + "%",
						paddingRight: 8
					},
					col_lg_3: {
						width: colWidth * 3 + "%",
						paddingRight: 8
					},
					col_lg_4: {
						width: colWidth * 4 + "%",
						paddingRight: 8
					},
					col_lg_5: {
						width: colWidth * 5 + "%",
						paddingRight: 8
					},
					col_lg_6: {
						width: colWidth * 6 + "%",
						paddingRight: 8
					},
					col_lg_7: {
						width: colWidth * 7 + "%",
						paddingRight: 8
					},
					col_lg_8: {
						width: colWidth * 8 + "%",
						paddingRight: 8
					},
					col_lg_9: {
						width: colWidth * 9 + "%",
						paddingRight: 8
					},
					col_lg_10: {
						width: colWidth * 10 + "%",
						paddingRight: 8
					},
					col_lg_11: {
						width: colWidth * 11 + "%",
						paddingRight: 8
					},
					col_lg_12: {
						width: colWidth * 12 + "%",
						paddingRight: 8
					}
			  }
	)
}

const useGridStyles = () => {
	const windowDimensions = useWindowDimensions()

	const [gridStyles, setGridStyles] = useState<
		ReturnType<typeof generateStyles>
	>(generateStyles(windowDimensions.width))

	useEffect(() => {
		setGridStyles(generateStyles(windowDimensions.width))
	}, [windowDimensions])

	return gridStyles
}

export default useGridStyles

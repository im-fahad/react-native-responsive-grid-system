import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Col, Row } from "../src"

const styles = StyleSheet.create({
	colBody: {
		width: "100%",
		height: 100,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fe9938",
		marginBottom: 5
	},
	colTitle: {
		fontSize: 14,
		color: "#fff"
	}
})

const Example = () => {
	return (
		<View style={{ flex: 1, padding: 5, backgroundColor: "#fff" }}>
			<ScrollView>
				<Row>
					<Col xs={6} sm={4} md={3} lg={3}>
						<View style={[styles.colBody]}>
							<Text style={[styles.colTitle]}>Column 1</Text>
						</View>
					</Col>

					<Col xs={6} sm={4} md={3} lg={3}>
						<View style={[styles.colBody]}>
							<Text style={[styles.colTitle]}>Column 2</Text>
						</View>
					</Col>

					<Col xs={6} sm={4} md={3} lg={3}>
						<View style={[styles.colBody]}>
							<Text style={[styles.colTitle]}>Column 3</Text>
						</View>
					</Col>

					<Col xs={6} sm={4} md={3} lg={3}>
						<View style={[styles.colBody]}>
							<Text style={[styles.colTitle]}>Column 4</Text>
						</View>
					</Col>
				</Row>
			</ScrollView>
		</View>
	)
}

export default Example

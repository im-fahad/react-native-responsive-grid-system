import React, { Component } from 'react';
import { View } from 'react-native';
import styles from 'react-native-responsive-grid-styles'

class Row extends Component {
    
    constructor(props) {
        super(props);
        this.state= {}
      }

    render() {
        const {children, rowStyles} = this.props;

        return (
            <View style={[styles.row, rowStyles]}>
                { children }
            </View>
        )
    }
}

export default Row;
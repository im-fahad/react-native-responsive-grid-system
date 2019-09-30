import React, { Component } from 'react';
import { View } from 'react-native';
import styles from 'react-native-responsive-grid-styles'

class Col extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            styles: styles
        }
      }

    render() {
        const {children, xs, sm, md, lg, colStyles} = this.props;
        const {styles} = this.state;
        var columns_xs = 'col_' + xs;
        var columns_sm = 'col_sm_' + sm;
        var columns_md = 'col_md_' + md;
        var columns_lg = 'col_lg_' + lg;

        return (
            <View style={[styles[columns_xs],styles[columns_sm],styles[columns_md],styles[columns_lg],colStyles]}>
                { children }
            </View>
        )
    }
}

export default Col;
import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import {Row, Col} from '../index'

export default class Example extends Component {
   
   constructor(props) {
       super(props);
        this.state = {
         
      };  
   }

    col_1() {
        const fields = [];
        for (let i=0; i < 12; i++) {
            fields.push(    
                <Col key={i} xs={1} sm={1} md={1} lg={1}>
                    <View style={[styles.colBody]}>
                        <Text style={[styles.colTitle]}>
                            1
                        </Text>  
                    </View>
                </Col>
            );
        }
        return fields;
    }

    col_2() {
        const fields = [];
        for (let i=0; i < 6; i++) {
            fields.push(    
                <Col key={i} xs={2} sm={2} md={2} lg={2}>
                    <View style={[styles.colBody]}>
                        <Text style={[styles.colTitle]}>
                            2
                        </Text>  
                    </View>
                </Col>
            );
        }
        return fields;
    }

    col_3() {
        const fields = [];
        for (let i=0; i < 4; i++) {
            fields.push(    
                <Col key={i} xs={3} sm={3} md={3} lg={3}>
                    <View style={[styles.colBody]}>
                        <Text style={[styles.colTitle]}>
                            3
                        </Text>  
                    </View>
                </Col>
            );
        }
        return fields;
    }

    col_4() {
        const fields = [];
        for (let i=0; i < 3; i++) {
            fields.push(    
                <Col key={i} xs={4} sm={4} md={4} lg={4}>
                    <View style={[styles.colBody]}>
                        <Text style={[styles.colTitle]}>
                            4
                        </Text>  
                    </View>
                </Col>
            );
        }
        return fields;
    }

    col_6() {
        const fields = [];
        for (let i=0; i < 2; i++) {
            fields.push(    
                <Col key={i} xs={6} sm={6} md={6} lg={6}>
                    <View style={[styles.colBody]}>
                        <Text style={[styles.colTitle]}>
                            6
                        </Text>  
                    </View>
                </Col>
            );
        }
        return fields;
    }

   render() {
      return (
          <View style={{flex:1,padding:5,backgroundColor:'#fff'}}>
              <ScrollView>

                <Row>

                    <Col xs={6} sm={4} md={3} lg={3}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                Column 1
                            </Text>  
                        </View>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                Column 2
                            </Text>  
                        </View>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                Column 3
                            </Text>  
                        </View>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={3}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                Column 4
                            </Text>  
                        </View>
                    </Col>

                </Row>

                {/* <Row>

                    {this.col_1()}

                    {this.col_2()}

                    {this.col_3()}

                    {this.col_4()}

                    <Col xs={5} sm={5} md={5} lg={5}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                5
                            </Text>  
                        </View>
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={7}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                7
                            </Text>     
                        </View>
                    </Col>

                    {this.col_6()}

                    <Col xs={7} sm={7} md={7} lg={7}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                7
                            </Text>  
                        </View>
                    </Col>
                    <Col xs={5} sm={5} md={5} lg={5}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                3
                            </Text>     
                        </View>
                    </Col>


                    <Col xs={8} sm={8} md={8} lg={8}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                8
                            </Text>      
                        </View>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                               4
                            </Text> 
                        </View>
                    </Col>


                    <Col xs={9} sm={9} md={9} lg={9}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                9
                            </Text>     
                        </View>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                3
                            </Text>     
                        </View>
                    </Col>


                    <Col xs={10} sm={10} md={10} lg={10}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                10
                            </Text>      
                        </View>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                2
                            </Text>      
                        </View>
                    </Col>

                    <Col xs={11} sm={11} md={11} lg={11}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                11
                            </Text>      
                        </View>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                1
                            </Text>     
                        </View>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12}>
                        <View style={[styles.colBody]}>
                            <Text style={[styles.colTitle]}>
                                12
                            </Text>      
                        </View>
                    </Col>
                </Row> */}

              </ScrollView>
          </View>
        )
   }    
}

let styles = StyleSheet.create({
    
    colBody:{
        width: '100%',
        height:100,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#fe9938',
        marginBottom:5,
    },
    colTitle:{
        fontSize:14,
        color:'#fff'
    },
})

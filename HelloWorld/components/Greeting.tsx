import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            value: 3.5,
        }
    }
    _onPressButton = (e) => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    getApple() {
        const apple = '🍎'
        const apples = Array((this.state.value / 0.5)+ 1).join(apple)
        return apples
    }
    render() {
        const isShow = this.state.isShow
        return (
            <Container style={styles.body}>
                <Text style={isShow ? styles.blueText : styles.hideText}>Hello {this.props.name}</Text>
                <Text onPress={this._onPressButton}>clicked</Text>

                <Text>{ this.getApple() }</Text>
                <Text>Value: {this.state.value} hours</Text>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  body: {
      height: '100%',
      width: '100%',
      color: 'blue',
  },
  contents: {
      padding: 10,
  },
  blueText: {
      color: 'blue',
  },
  hideText: {
      color: 'white',
  },
});

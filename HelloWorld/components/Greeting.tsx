import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    _onPressButton = (e) => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const isShow = this.state.isShow
        return (
            <View>
                <Text style={isShow ? styles.blueText : styles.hideText}>Hello {this.props.name}</Text>
                <Text onPress={this._onPressButton}>clicked</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  blueText: {
      color: 'blue',
  },
  hideText: {
      color: 'white',
  },
});

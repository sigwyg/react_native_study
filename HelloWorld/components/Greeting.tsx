import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Button,
    Header,
    Slider,
} from 'react-native-elements'

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
            <View style={styles.body}>
                <StatusBar barStyle="light-content" hidden={ false } />
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                <View style={styles.contents}>
                    <Text style={isShow ? styles.blueText : styles.hideText}>Hello {this.props.name}</Text>
                    <Text onPress={this._onPressButton}>clicked</Text>
                </View>

                <View style={styles.contents}>
                    <Text>{ this.getApple() }</Text>
                    <Slider
                        value={this.state.value}
                        step={0.5}
                        minimumValue={0}
                        maximumValue={20}
                        onValueChange={value => this.setState({value})}
                    />
                    <Text>Value: {this.state.value} hours</Text>
                    <Button title="touch me!" />
                </View>
            </View>
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

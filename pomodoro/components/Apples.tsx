import React from 'react';
import { AppLoading } from 'expo';
import {
    Container,
    Text,
    Button,
    DatePicker
} from 'native-base';

export default class extends React.Component {
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
            <Container>
                <DatePicker
                />
                <Text>{ this.getApple() }</Text>
                <Text>Value: {this.state.value} hours</Text>

                <Button block dark onPress={this._onPressButton}>
                    <Text>clicked</Text>
                </Button>
            </Container>
        );
    }
}

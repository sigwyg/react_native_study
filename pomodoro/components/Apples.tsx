import React from 'react'
import { AppLoading } from 'expo'
import { Container, Text, Button, Grid, Col } from 'native-base'

interface Props {}
interface State {
  value: number
}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: 1.5,
    }
    this.increaseApple = this.increaseApple.bind(this)
    this.decreaseApple = this.decreaseApple.bind(this)
  }
  getApple() {
    const apple = '🍎'
    const apples = Array(this.state.value / 0.5 + 1).join(apple)
    return apples
  }
  increaseApple() {
    const nowValue = this.state.value + 0.5
    this.setState({ value: nowValue })
  }
  decreaseApple() {
    const nowValue = this.state.value > 0 ? this.state.value - 0.5 : 0
    this.setState({ value: nowValue })
  }
  render() {
    return (
      <Grid>
        <Col style={{ width: 40, marginRight: 5 }}>
          <Button
            small
            bordered
            style={{ alignSelf: 'flex-start' }}
            onPress={this.decreaseApple}
          >
            <Text>-</Text>
          </Button>
        </Col>
        <Col style={{ width: 40, marginRight: 10 }}>
          <Button
            small
            bordered
            style={{ alignSelf: 'flex-start' }}
            onPress={this.increaseApple}
          >
            <Text>+</Text>
          </Button>
        </Col>
        <Col>
          <Text>
            {this.getApple()} {this.state.value}h
          </Text>
        </Col>
      </Grid>
    )
  }
}

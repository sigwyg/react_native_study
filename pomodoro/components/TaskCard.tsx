import React from 'react'
import { Body, Text, Card, CardItem } from 'native-base'
import Apples from './Apples'

interface Props {
  title: string
  type?: 'regular' | 'irregular'
}
interface State {}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <CardItem bordered>
          <Text>{this.props.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Apples type={this.props.type} />
          </Body>
        </CardItem>
      </Card>
    )
  }
}

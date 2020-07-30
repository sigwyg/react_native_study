import React from 'react'
import { AppLoading } from 'expo'
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Left,
  Right,
  Text,
  Grid,
  Row,
  Col,
  Form,
  Item,
  Input,
  Label,
  Card,
  CardItem,
} from 'native-base'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import TaskCard from './components/TaskCard'

type taskType = 'regular' | 'irregular'

interface Props {}

interface State {
  isReady: boolean
  title: string
  tasks: Array<{
    title: string
    type: taskType
  }>
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isReady: false,
      title: '',
      tasks: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true })
  }

  handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    let title = e.nativeEvent.text

    this.setState({ title: title })
  }

  addTask(type: taskType) {
    const newTask = {
      title: this.state.title,
      type,
    }
    this.setState({ tasks: [...this.state.tasks, newTask] })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <Container>
        <Header>
          <Left>
            <Text>🍎</Text>
          </Left>
          <Body>
            <Text>Pomodoro</Text>
          </Body>
          <Right>
            <Text>🍏</Text>
          </Right>
        </Header>
        <Content padder>
          <Grid>
            <Row style={{ paddingBottom: 10, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>
                タスクを追加してください
              </Text>
            </Row>
            <Row style={{ paddingBottom: 10 }}>
              <Col>
                <Item inlineLabel>
                  <Input
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="タスク名を入力"
                  />
                  <Button
                    onPress={() => this.addTask('irregular')}
                    style={{ marginRight: 5 }}
                  >
                    <Text>🍏+</Text>
                  </Button>
                  <Button onPress={() => this.addTask('regular')}>
                    <Text>🍎+</Text>
                  </Button>
                </Item>
              </Col>
            </Row>
          </Grid>
          {this.state.tasks.map((data, idx) => {
            return <TaskCard title={data.title} type={data.type} />
          })}
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Home</Text>
            </Button>
            <Button>
              <Text>Projects</Text>
            </Button>
            <Button>
              <Text>Lists</Text>
            </Button>
            <Button>
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

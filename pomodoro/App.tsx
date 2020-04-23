import React from 'react';
import { AppLoading } from 'expo';
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
    Label
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Apples from './components/Apples.tsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      taskList: ['title']
    };
    this.addTask = this.addTask.bind(this)
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  addTask() {
      const newTask = 'title'
      this.setState({ taskList: [...this.state.taskList, newTask]})
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
            <Left>
                <Text>🍎</Text>
            </Left>
            <Body>
                <Text>Header</Text>
            </Body>
            <Right>
                <Text>🍏</Text>
            </Right>
        </Header>
        <Content padder>
            <Grid>
                <Row style={{ paddingBottom: 10, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center'}}>タスクを追加してください</Text>
                </Row>
                <Row style={{ paddingBottom: 10 }}>
                    <Col>
                        <Item inlineLabel>
                            <Label>Task</Label>
                            <Input />
                        </Item>
                    </Col>
                    <Col style={{ width: 60}}>
                        <Button onPress={ this.addTask }><Text>Add</Text></Button>
                    </Col>
                </Row>
                <Row>
                    {
                        this.state.taskList.map( (data) => {
                            return <Apples />
                        })
                    }
                </Row>
            </Grid>
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
    );
  }
}

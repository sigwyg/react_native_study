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
    Label,
    Card,
    CardItem
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Apples from './components/Apples.tsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      title: '',
      tasks: []
    };
    this.addTask = this.addTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  handleChange(e) {
    //this.setState({ [e.target.name]: e.target.value });
    this.setState({ title: e.target.value });
  }

  addTask() {
      const newTask = this.state.title
      this.setState({ tasks: [...this.state.tasks, newTask]})
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
                            <Input name="title" value={this.state.title} onChange={this.handleChange} placeholder="タスク名を入力" />
                            <Button onPress={ this.addTask }><Text>Add</Text></Button>
                        </Item>
                    </Col>
                </Row>
            </Grid>
            {
                this.state.tasks.map( (data, idx) => {
                    return (
                        <Card key={idx}>
                            <CardItem bordered>
                                <Text>{data}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Apples />
                                </Body>
                            </CardItem>
                        </Card>
                    )
                })
            }
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

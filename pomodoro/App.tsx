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
    Text
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Apples from './components/Apples.tsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
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
          <Text>Open up App.js to start working on your app!</Text>
          <Apples />
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

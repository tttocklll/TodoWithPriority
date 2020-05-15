import React from 'react';
import { Header, Left, Right, Body, Title, Container, Text, Content, Button, Icon } from 'native-base';
import CommonFooter from './Footer'

interface HomeProps { navigation: any }

export default class HomeScreen extends React.Component<HomeProps, {}> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("Add")}>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>
            Hello!
        </Text>
          <Button>
            <Text>Click me!</Text>
          </Button>
        </Content>
        <CommonFooter />
      </Container>
    );
  }
}
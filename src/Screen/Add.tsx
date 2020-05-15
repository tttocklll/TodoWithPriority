import React from 'react';
import { Header, Left, Right, Body, Title, Container, Text, Content, Button, Icon } from 'native-base';
import CommonFooter from './Footer'

interface HomeProps { navigation: any }

export default class HomeScreen extends React.Component<HomeProps> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Add</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <Text>
            What's happen?
        </Text>
        </Content>
        <CommonFooter />
      </Container>
    );
  }
}
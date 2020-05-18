import React from 'react';
import { Slider } from 'react-native';
import { Header, Left, Right, Body, Title, Text, Content, Button, Icon, Form, Input, Label, Item } from 'native-base';

interface AddProps { nav: any }

interface AddState {
  name: string,
  importance: number,
  urgency: number,
}

export default class HomeScreen extends React.Component<AddProps, AddState> {
  constructor(props: AddProps) {
    super(props);
    this.state = {
      name: "",
      importance: 50,
      urgency: 50,
    }
  }

  changeName(name: string) {
    this.setState({ name: name })
  }
  changeImportance(val: number) {
    this.setState({ importance: val })
  }
  changeUrgency(val: number) {
    this.setState({ urgency: val })
  }

  render() {
    return (
      <Content style={{ backgroundColor: '#FFF' }} scrollEnabled={false}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.nav.toggleModal}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content scrollEnabled={false} style={{ width: "100%" }}>
          <Form style={{ width: "100%" }}>
            <Item floatingLabel>
              <Label>Add a Task:</Label>
              <Input value={this.state.name} onChangeText={(text) => this.changeName(text)} />
            </Item>
          </Form>
          <Text style={{ alignSelf: 'flex-start' }}>Urgency</Text>
          <Slider
            step={1}
            maximumValue={100}
            value={50}
            onValueChange={(value) => this.changeUrgency(value)}
          />
          <Text style={{ alignSelf: 'flex-start' }}>Importance</Text>
          <Slider
            step={1}
            maximumValue={100}
            value={50}
            onValueChange={(value) => this.changeImportance(value)}
          />
          <Button
            onPress={() => this.props.nav.addItem(this.state.name, this.state.urgency, this.state.importance)}
            onPressOut={this.props.nav.toggleModal}
            block
          >
            <Text>OK</Text>
          </Button>
        </Content>
      </Content>
    );
  }
}
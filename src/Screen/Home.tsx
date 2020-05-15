import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Header, Left, Right, Body, Title, Container, Text, Content, Button, Icon, List, ListItem, CheckBox } from 'native-base';
import CommonFooter from './Footer'

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

interface ToDoItems {
  name: string,
  urgency: number,
  importance: number,
  priority: number,
  isDone: boolean,
}

interface HomeState {
  todos: ToDoItems[],
  done: ToDoItems[],
}

interface HomeProps { navigation: any }

export default class HomeScreen extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      todos: [{ name: "test", urgency: 5, importance: 2, priority: 10, isDone: false }],
      done: [{ name: "comp", urgency: 5, importance: 8, priority: 40, isDone: true }]
    }
  }
  sortToDos() {
    const compare = (a: ToDoItems, b: ToDoItems) => b.priority - a.priority;
    let newToDos = this.state.todos;
    newToDos.sort(compare);
    this.setState({ todos: newToDos });
  }
  removeItem(i: number) {
    let newToDos = this.state.todos
    newToDos.splice(i, 1);
    this.setState({ todos: newToDos });
  }
  actvateCheck(i: number) {
    let newToDos = this.state.todos;
    newToDos[i].isDone = true;
    this.setState({ todos: newToDos })
  }
  async moveToDone(i: number) {
    await sleep(1000);
    let newDone = this.state.done;
    newDone.push(this.state.todos[i]);
    this.setState({ done: newDone });
    this.removeItem(i);
  }


  render() {
    let renderCardItem = this.state.todos.map((item: ToDoItems, i: number) =>
      <ListItem key={i}>
        <CheckBox
          checked={item.isDone}
          onPressIn={() => this.actvateCheck(i)}
          onPressOut={() => this.moveToDone(i)}
        />
        <Body style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
        </Body>
        <Right>
          <Button transparent onPress={() => this.removeItem(i)}>
            <Icon name="trash" />
          </Button>
        </Right>
      </ListItem>
    );
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
          <List>
            {renderCardItem}
          </List>
        </Content>
        <CommonFooter />
      </Container>

    );
  }
}
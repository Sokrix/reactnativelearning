import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './components/header';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';

const taskList = [
  {
    id: 0,
    content: 'Aller voir Sébastien',
    status: 'En cours'
  },
  {
    id: 1,
    content: 'Se brosser les dents',
    status: 'En cours',
  },
  {
    id: 2,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList };
  }

  displayMenuTask = () => {
    console.log('onPress');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content='Liste de tâches' />
        <ScrollView>
        <TaskList 
          onPressCallBack={this.displayMenuTask}
          taskList={this.state.taskList} 
        />
        </ScrollView>
        <ButtonAddTask />
      </View>
    );
  }
}

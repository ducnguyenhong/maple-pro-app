import loadable from '@loadable/component';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const NoteNormal = loadable(() => import('./note-normal'));

const SecondRoute = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const renderScene = SceneMap({
  normal: NoteNormal,
  spending: SecondRoute,
  account: SecondRoute,
});

const NoteScreen: React.FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'normal', title: 'Chung'},
    {key: 'spending', title: 'Chi tiêu'},
    {key: 'account', title: 'Tài khoản'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default NoteScreen;

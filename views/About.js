import React from 'react';
import {Button, ThemeProvider} from 'react-native-elements';

const AboutPage = () => {
  // return (
  //   <View style={[globalStyles.container, globalStyles.center]}>
  //     <Text>About Page</Text>
  //   </View>
  // );

  return (
    <ThemeProvider>
      <Button raised title="Hello" />
    </ThemeProvider>
  );
};

export default AboutPage;

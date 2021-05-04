import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold 
} from '@expo-google-fonts/jost'
import { Welcome } from './src/pages/Welcome';
import { Useridentification } from './src/pages/UserIdentification';
import { Confirmation } from './src/pages/Confirmation';

export default function App(){
const [isFontloaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
})  
  if(!isFontloaded)
    return <AppLoading />
 
  return(
    <Confirmation/>
  )
}

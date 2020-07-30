import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

export default function App() {
  const [displayValue, setDisplayValue] = useState(0)

  const addDigit = n => {
    setDisplayValue(n)
  }

  const clearMemory = () => {
    setDisplayValue(0)
  }

  const setOperation = operation => {

  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={clearMemory} />
        <Button label='/' operator onClick={setOperation} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operator onClick={setOperation} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operator onClick={setOperation} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operator onClick={setOperation} />
        <Button label='0' double onClick={addDigit} />
        <Button label='.' onClick={addDigit} />
        <Button label='=' operator onClick={setOperation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

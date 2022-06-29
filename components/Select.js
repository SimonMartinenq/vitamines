import React, { useState } from 'react'
import {View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'


// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: "Lose weight",
  },
  {
    item: "Eat better",
  },
  {
    item:  "Eat cheap",
  },
]

const SelectObj = () =>  {
  const [objectif, setObjectif] = useState({})
  return (
    <View style={{ margin:10 }}>
      <SelectBox
        label=""
        options={K_OPTIONS}
        value={objectif}
        onChange={onChange()}
        hideInputFilter={true}
        inputPlaceholder="Choose your goal"
        arrowIconColor="black"
      />
    </View>
  );

  function onChange() {
    return (val) => setObjectif(val)
  }
};

export default SelectObj;
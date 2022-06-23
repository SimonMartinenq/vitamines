import React, { useState } from 'react'
import {View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'


// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: "Perdre du poid",
  },
  {
    item: "Mieux manger",
  },
  {
    item:  "Manger pas cher",
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
        inputPlaceholder="Choisir son objectif"
        arrowIconColor="black"
      />
    </View>
  );

  function onChange() {
    return (val) => setObjectif(val)
  }
};

export default SelectObj;
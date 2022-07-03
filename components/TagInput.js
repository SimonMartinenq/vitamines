import { useState } from 'react'
import Tags from 'react-native-tags-input'

const TagInput = () => {
    const [state,setState] = useState(null)
    return (
        <TagInput 
        tags= {{
            tag: '',
            tagsArray: []
        }}
        updateTagState = {() => {
            setState(state)
        }}
        />
    )
}

export default TagInput;
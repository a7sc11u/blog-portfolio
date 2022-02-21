// @ts-ignore
import { Highlighter } from 'highlight-updates/preact'
import { useRef, useState } from 'preact/hooks'
import { Stack } from '../../../components/Text'
import { RerenderTracker } from './common'

const Issue = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>()

  const onInput = (e) => {
    if (e.currentTarget.value.length <= 3) {
      setValue(e.currentTarget.value)
    } else {
      const start = inputRef.current.selectionStart
      const end = inputRef.current.selectionEnd
      const diffLength = Math.abs(e.currentTarget.value.length - value.length)
      inputRef.current.value = value
      // Restore selection
      inputRef.current.setSelectionRange(start - diffLength, end - diffLength)
    }
  }

  return (
    <Highlighter>
      <Stack>
        <RerenderTracker name="input" />
        <input ref={inputRef} value={value} onInput={onInput} />
      </Stack>
    </Highlighter>
  )
}

export default Issue

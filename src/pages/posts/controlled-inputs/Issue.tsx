// @ts-ignore
import { Highlighter } from 'highlight-updates/preact'
import { useRef, useState } from 'preact/hooks'
import { Inline, Stack } from '../../../components/Text'
import { RerenderTracker } from './common'

const Issue = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>()

  const onInput = (e) => {
    if (e.currentTarget.value.length > 3) return
    setValue(e.currentTarget.value)
  }

  const printValue = () => {
    if (inputRef.current) {
      console.log('the <input> value is', inputRef.current.value)
      console.log('the state value is', value)
    }
  }

  return (
    <Highlighter>
      <Stack>
        <RerenderTracker name="input" />
        <Inline>
          <input ref={inputRef} value={value} onInput={onInput} />
          <button onClick={printValue}>Console log value of input</button>
        </Inline>
      </Stack>
    </Highlighter>
  )
}

export default Issue

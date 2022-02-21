import { useRef } from 'preact/hooks'
import { DisplayMono } from '../../../components/Text'

export const RerenderTracker = (props) => {
  const rerenders = useRef(-1)
  rerenders.current++
  return (
    <DisplayMono>
      {props.name} rerenders: {rerenders.current}
    </DisplayMono>
  )
}

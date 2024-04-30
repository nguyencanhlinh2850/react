import {EyeIcon, TriangleDownIcon, HeartIcon} from '@primer/octicons-react'
import React, {useState, useRef} from 'react'
import {Button} from '.'
import {announce} from '@primer/live-region-element'
import VisuallyHidden from '../_VisuallyHidden'

export default {
  title: 'Components/Button/Features',
}

export const Primary = () => <Button variant="primary">Primary</Button>

export const Danger = () => <Button variant="danger">Danger</Button>

export const Invisible = () => <Button variant="invisible">Invisible</Button>

export const LeadingVisual = () => <Button leadingVisual={HeartIcon}>Leading visual</Button>

export const TrailingVisual = () => <Button trailingVisual={EyeIcon}>Trailing visual</Button>

export const TrailingButtonNothing = () => {
  const [count, setCount] = useState(0)
  return (
    <Button onClick={() => setCount(count + 1)} count={count}>
      Watch
    </Button>
  )
}

export const TrailingCounterWithAriaLabel = () => {
  const [count, setCount] = useState(0)
  return (
    <Button aria-label={`Watch (${count})`} onClick={() => setCount(count + 1)} count={count}>
      Watch
    </Button>
  )
}

export const TrailingCounterWithFocusBouncing = () => {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
    // i think the proper react way is to pass a ref??
    const button = document.querySelector('#test-1') as HTMLElement
    // eslint-disable-next-line github/no-blur
    button.blur()
    setTimeout(() => {
      button.focus()
    }, 250)
  }
  return (
    <div>
      <Button id="test-1" onClick={onClick} count={count}>
        Watch
      </Button>
    </div>
  )
}

export const TrailingCounterWithPoliteLiveRegion = () => {
  const [count, setCount] = useState(0)
  return (
    <Button aria-live="polite" aria-atomic="true" onClick={() => setCount(count + 1)} count={count}>
      Watch
    </Button>
  )
}

export const TrailingCounterWithAdjacentLiveRegion = () => {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1)
    announce(`Watch (${count + 1})`)
  }
  return (
    <div>
      <Button onClick={onClick}>Watch</Button>
    </div>
  )
}

export const TrailingCounterWithNestedLiveRegion = () => {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Button dynamicallyUpdated={true} onClick={onClick} count={count}>
        Watch
      </Button>
    </div>
  )
}

export const TrailingCounterAllVariants = () => {
  const [count, setCount] = useState(0)
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
      <Button onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
      <Button disabled onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
      <Button variant="primary" onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
      <Button variant="primary" disabled onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
      <Button variant="danger" onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
      <Button variant="danger" disabled onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
      <Button variant="invisible" onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
      <Button variant="invisible" disabled onClick={() => setCount(count + 1)} count={count}>
        Watch
      </Button>
    </div>
  )
}

export const TrailingAction = () => <Button trailingAction={TriangleDownIcon}>Trailing action</Button>

export const Block = () => <Button block>Default</Button>

export const Disabled = () => (
  <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
    <Button disabled>Default</Button>
    <Button variant="primary" disabled>
      Primary
    </Button>
    <Button variant="danger" disabled>
      Danger
    </Button>
    <Button variant="invisible" disabled>
      Invisible
    </Button>
  </div>
)

export const Inactive = () => (
  <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
    <Button inactive>Default</Button>
    <Button variant="primary" inactive>
      Primary
    </Button>
    <Button variant="danger" inactive>
      Danger
    </Button>
    <Button variant="invisible" inactive>
      Invisible
    </Button>
  </div>
)

export const Small = () => <Button size="small">Default</Button>

export const Medium = () => <Button size="medium">Default</Button>

export const Large = () => <Button size="large">Default</Button>

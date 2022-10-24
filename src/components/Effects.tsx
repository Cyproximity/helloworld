import { forwardRef, ReactNode, ComponentPropsWithoutRef } from 'react'
import { useThree } from '@react-three/fiber'
import { EffectComposer, DepthOfField, Vignette } from '@react-three/postprocessing'

interface Props {
  children?: ReactNode
}

export type Ref = any

const Effects = forwardRef<Ref, Props>((props, ref) => {
  const { viewport: { width, height } } = useThree()

  const dofAttr = {
    bokehScale:6,
    focalLength:0.1,
    resolutionX:width * 3,
    resolutionY:height * 3

  }
  return (
    <EffectComposer multisampling={0}>
      <DepthOfField ref={ref} {...dofAttr} />
      <Vignette />
    </EffectComposer>
  )
})

export default Effects

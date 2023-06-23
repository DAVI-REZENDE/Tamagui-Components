import { Sheet } from '@tamagui/sheet'
import { ReactNode, useState } from 'react'

interface SheetModalProps {
  open: boolean
  setOpen: (arg: boolean) => void
  children: ReactNode
}

export const SheetModal = ({ open, setOpen, children }: SheetModalProps) => {
  const [position, setPosition] = useState(0)

  return (
    <>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="bouncy"
      >
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame flex={1} padding="$4">
          {children}
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

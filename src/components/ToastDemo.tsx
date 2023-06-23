import { Button } from 'tamagui'
import { Toast } from './Toast'
import { useToastController } from '@tamagui/toast'

export function ToastDemo() {
  const toast = useToastController()

  return (
    <>
      <Button
        w="100%"
        onPress={() => {
          toast.show('Successfully saved!', {
            message: "Don't worry, we've got your data.",
            native: false,
          })
        }}
      >
        Show toast
      </Button>
      <Toast />
    </>
  )
}

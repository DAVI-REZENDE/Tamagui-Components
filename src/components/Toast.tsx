import { Toast as ToastTamagui, useToastState } from '@tamagui/toast'
import { YStack } from 'tamagui'

export function Toast() {
  const currentToast = useToastState()

  if (!currentToast || currentToast.isHandledNatively) return null
  return (
    <ToastTamagui
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      viewportName={currentToast.viewportName}
    >
      <YStack>
        <ToastTamagui.Title>{currentToast.title}</ToastTamagui.Title>
        {!!currentToast.message && (
          <ToastTamagui.Description>
            {currentToast.message}
          </ToastTamagui.Description>
        )}
      </YStack>
    </ToastTamagui>
  )
}

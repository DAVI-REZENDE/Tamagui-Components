import { useFonts } from 'expo-font'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { StatusBar } from 'expo-status-bar'

import { Button, Heading, TamaguiProvider, Theme, YStack } from 'tamagui'
import config from './tamagui.config'
import { Select } from './src/components/Select'
import { Alert } from 'react-native'
import { SheetModal } from './src/components/SheetModal'
import { useState } from 'react'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { ToastDemo } from './src/components/ToastDemo'

const fruitSchema = z.object({
  fruit: z.string().nonempty({ message: 'Fruit is required!' }),
})

type FruitData = z.infer<typeof fruitSchema>

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),

    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const [open, setOpen] = useState(false)
  const fruitForm = useForm<FruitData>({
    resolver: zodResolver(fruitSchema),
  })

  const { handleSubmit } = fruitForm

  function handleChooseFruit(data: FruitData) {
    Alert.alert(JSON.stringify(data))
  }

  if (!loaded) {
    return null
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <ToastProvider>
          <StatusBar style="light" />

          <FormProvider {...fruitForm}>
            <YStack
              f={1}
              jc="center"
              gap="$4"
              p="$4"
              ai="center"
              backgroundColor={'$background'}
            >
              <Select name="fruit" />

              <Button w="100%" onPress={handleSubmit(handleChooseFruit)}>
                Submit
              </Button>
              <Button w="100%" onPress={() => setOpen(true)}>
                Open modal
              </Button>

              <ToastDemo />
            </YStack>
            <SheetModal open={open} setOpen={setOpen}>
              <Heading>Title Modal</Heading>
            </SheetModal>
          </FormProvider>
          <ToastViewport />
        </ToastProvider>
      </Theme>
    </TamaguiProvider>
  )
}

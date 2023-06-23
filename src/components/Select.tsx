import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import {
  Adapt,
  Select as SelectTamagui,
  SelectProps as SelectPropsTamagui,
  Sheet,
  XStack,
  YStack,
  getFontSize,
} from 'tamagui'
import { useController, useFormContext } from 'react-hook-form'

interface SelectProps extends SelectPropsTamagui {
  name: string
}

export function Select({ name, ...props }: SelectProps) {
  const { control } = useFormContext()
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  })

  return (
    <SelectTamagui
      id="food"
      value={field.value}
      onValueChange={field.onChange}
      {...props}
    >
      <SelectTamagui.Trigger iconAfter={ChevronDown}>
        <SelectTamagui.Value placeholder="Something" />
      </SelectTamagui.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <SelectTamagui.Content zIndex={200000}>
        <SelectTamagui.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </SelectTamagui.ScrollUpButton>

        <SelectTamagui.Viewport minWidth={200}>
          <XStack>
            <SelectTamagui.Group space="$0">
              <SelectTamagui.Label>Fruits</SelectTamagui.Label>
              {items.map((item, i) => {
                return (
                  <SelectTamagui.Item
                    index={i}
                    key={item.name}
                    value={item.name.toLowerCase()}
                  >
                    <SelectTamagui.ItemText>{item.name}</SelectTamagui.ItemText>
                    <SelectTamagui.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </SelectTamagui.ItemIndicator>
                  </SelectTamagui.Item>
                )
              })}
            </SelectTamagui.Group>
            {/* special icon treatment for native */}
            {props.native && (
              <YStack
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                alignItems="center"
                justifyContent="center"
                width={'$4'}
                pointerEvents="none"
              >
                <ChevronDown
                  size={getFontSize((props.size ?? '$true') as any)}
                />
              </YStack>
            )}
          </XStack>
        </SelectTamagui.Viewport>

        <SelectTamagui.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </SelectTamagui.ScrollDownButton>
      </SelectTamagui.Content>
    </SelectTamagui>
  )
}

const items = [
  { name: 'Apple' },
  { name: 'Pear' },
  { name: 'Blackberry' },
  { name: 'Peach' },
  { name: 'Apricot' },
  { name: 'Melon' },
  { name: 'Honeydew' },
  { name: 'Starfruit' },
  { name: 'Blueberry' },
  { name: 'Raspberry' },
  { name: 'Strawberry' },
  { name: 'Mango' },
  { name: 'Pineapple' },
  { name: 'Lime' },
  { name: 'Lemon' },
  { name: 'Coconut' },
  { name: 'Guava' },
  { name: 'Papaya' },
  { name: 'Orange' },
  { name: 'Grape' },
  { name: 'Jackfruit' },
  { name: 'Durian' },
]

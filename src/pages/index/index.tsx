import { View,Text  } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View>
      <View className='flex flex-col'>
        <Text className='bg-gradient-to-r from-green-400 to-sky-400 bg-clip-text text-xl font-extrabold text-transparent underline'> weapp-vite & weapp-tailwindcss</Text>
        <Text>abc</Text>
        <View className='text-[#438821] dark:text-[#ec4f4f] before:content-["11111"]'>333Hello world!</View>
        <View className='text-[#3d31a4] before:content-["222"]'>Hello world!</View>
      </View>
      <View className='bg-[#89ab8d] flex divide-x-8 divide-solid divide-[#60d256]'>
        <View className='text-[#438821] dark:text-[#ec4f4f] before:content-["11111"]'>Hello world!</View>
        <View className='text-[#3d31a4] before:content-["222"]'>Hello world!</View>
      </View>
    </View>
  )
}

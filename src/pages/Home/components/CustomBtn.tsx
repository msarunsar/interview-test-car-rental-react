import { Button, Flex } from 'antd'
import React from 'react'

interface Props {
    text: string
    htmlType?: "button" | "submit" | "reset" | undefined
    onClick?: ()=>void
}

const CustomBtn: React.FC<Props> = (props: Props) => {
  return (
    <Flex vertical gap="small" style={{ width: '100%' }}>
        <Button style={{height:56}} type="primary" htmlType={props.htmlType} onClick={props.onClick}>{props.text}</Button>
    </Flex>
  )
}

export default CustomBtn
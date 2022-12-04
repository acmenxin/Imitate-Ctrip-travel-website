import React from 'react'
import { Image,Typography } from 'antd';

interface PropsType{
    id:string|number;
    size:"large"|"small";
    imageSrc:string;
    price:number|string;
    title:string
}
//每一个小模块
export const ProductImage:React.FC<PropsType> = ({id,size,imageSrc,price,title})=>{
    return(
        <>
        {
            size==="large"?(
                <Image src={imageSrc} height={285} width={490} />
            ):(  <Image src={imageSrc} height={12} width={240} />)
        }
        <div>
            <Typography.Text type='secondary' >
                {title.slice(0,25)}
            </Typography.Text>
            <Typography.Text type='danger'  strong>
                ${price}起
            </Typography.Text>
        </div>
        </>
    )
}
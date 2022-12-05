import React from "react";
import styles from "./BeforeFooter.module.css";
import { Image ,Divider} from 'antd';

import facebook from "../../assets/images/facebook-807588_640.png"
import follow from "../../assets/images/follow-826033_640.png"
import icon from "../../assets/images/icon-720944_640.png"
import microsoft from "../../assets/images/microsoft-80658_640.png"
export const BeforeFooter: React.FC = () => {
    return (
        <div className={styles["content"]}>
            <Divider orientation="left" >❤</Divider>
        <div  className={styles["beforeFooter-image"]}>
            <Image src={facebook}width={200} height={100} />
            <Image src={follow} width={200} height={100}/>
            <Image src={icon} width={200} height={100}/>
            <Image src={microsoft} width={200} height={100}/>
        </div>
        </div>
    );
}
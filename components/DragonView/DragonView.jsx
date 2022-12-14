import React, {useEffect, useRef, useState} from "react";
import classnames from "classnames";
import s from "../DragonTabs/DragobTabs.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
import {motion, useInView} from "framer-motion";

const DragonView = ({id, title, text, img, text2, text3}) => {
  return (
      <motion.li
          initial={{
            opacity: 0,
          }}
          viewport={{once: false, amount: 0.7}}
          whileInView={{
            opacity: 1,
          }}
          transition={{delay: 0.1}}
          className={
            /*entered ? classnames(s.dragonItem, s.tabsActive) : */ s.dragonItem
          }
      >
        <div className={s.itemTop}>
          <div className={s.itemContent}>
            <h3 className={s.itemTitle}>{title}</h3>
            <div className={s.itemDetails}>
              <p className={s.text}>{text}</p>
              <p className={s.text}>{text2}</p>
              <p className={s.text}>{text3}</p>
              {/*<Button text="Participate" />*/}
            </div>
          </div>
          <div className={s.itemImage}>
            <Image alt="Dragon" src={img} width={530} height={568} priority/>
          </div>
        </div>
      </motion.li>
  );
};

export default DragonView;


import {FaGraduationCap,FaShoppingCart} from 'react-icons/fa'
import{GiHealthNormal} from 'react-icons/gi'
import {MdFastfood} from 'react-icons/md'
import{SiDcentertainment} from 'react-icons/si'


export const categories = [
    {
        id: 1,
        title: "Education",
        icon: <FaGraduationCap />,
        color: "#A95EC2",
        iconTitle:'FaGraduationCap' 
      },
      {
        id: 2,
        title: "Healthcare",
        icon: <GiHealthNormal />,
        color: "#FF768A",
        iconTitle:'GiHealthNormal'
      },
      {
        id: 3,
        title: "Shopping",
        icon: <FaShoppingCart/>,
        color: "#EC60AB",
        iconTitle:'FaShoppingCart'

      },
      {
        id: 4,
        title: "Food",
        icon:<MdFastfood/>,
        color: "#FF9E6D",
        iconTitle:'MdFastfood'

      },
      {
        id: 5,
        title: "Other",
        icon: <SiDcentertainment/>,
        color: "#FFCB5E",
        iconTitle:'SiDcentertainment'

      },
]
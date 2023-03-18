import React, { useEffect, useState } from 'react'
import dev1 from '../../images/devs/Picsart_23-03-14_00-46-53-011.png'
import dev2 from '../../images/devs/Picsart_23-03-14_00-48-13-280.png'
import dev3 from '../../images/devs/Picsart_23-03-14_00-49-38-935.png'
import dev4 from '../../images/devs/Picsart_23-03-14_00-50-29-093.png'
import dev5 from '../../images/devs/Picsart_23-03-14_00-51-20-581.png'
import dev6 from '../../images/devs/Picsart_23-03-14_00-52-06-109.png'
import dev7 from '../../images/devs/Picsart_23-03-14_00-53-16-396.png'
import dev8 from '../../images/devs/Picsart_23-03-14_00-53-56-555.png'
import dev9 from '../../images/devs/Picsart_23-03-14_00-55-58-955.png'
import dev10 from '../../images/devs/Picsart_23-03-14_00-56-48-562.png'
import dev11 from '../../images/devs/Picsart_23-03-14_00-57-41-149.png'
import dev12 from '../../images/devs/Picsart_23-03-14_00-58-11-508.png'
import dev13 from '../../images/devs/Picsart_23-03-14_00-58-54-401.png'
import dev14 from '../../images/devs/Picsart_23-03-14_00-59-58-786.png'
import dev15 from '../../images/devs/Picsart_23-03-14_01-01-38-813.png'
import dev16 from '../../images/devs/Picsart_23-03-14_01-04-10-413.png'
import dev17 from '../../images/devs/Picsart_23-03-14_01-04-42-701.png'
import dev18 from '../../images/devs/Picsart_23-03-14_01-05-46-568.png'
import dev19 from '../../images/devs/Picsart_23-03-14_01-07-41-155.png'
import dev20 from '../../images/devs/Picsart_23-03-14_01-08-23-055.png'
import dev21 from '../../images/devs/Picsart_23-03-14_01-09-02-287.png'
import dev22 from '../../images/devs/Picsart_23-03-14_01-09-55-360.png'
import dev23 from '../../images/devs/Picsart_23-03-14_01-10-40-685.png'




const RondomImg = () => {
    
    const all_images = [dev1,dev2,dev3,dev4,dev5,dev6,dev7,dev8,dev9,dev10,dev11,dev12,dev13,dev14,dev15,dev16,dev17,dev18,dev19,dev20,dev21,dev22,dev23]
    const [randomImg,setrandomImg] = useState(dev1)    

    const get = () =>{
        return all_images[Math.floor(Math.random() * 22)]
    }

    return (
      <img src={get()} className='w-36 mx-auto my-2 border-4 border-main shadow-lg shadow-main rounded-full'/>
  )
}

export default RondomImg
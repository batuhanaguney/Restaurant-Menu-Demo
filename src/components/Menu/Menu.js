import React, { useEffect,useState } from 'react';
import './Menu.css';
import Card from '../../components/Card/Card';
import data from '../../menu.json'
function Menu() {
   const [isActive, setisActive] = useState(false)
   const [isSubMenu, setisSubMenu] = useState(false)
   const [anaMenu, setanaMenu] = useState([])
   const [subMenu, setSubMenu] = useState([])
   const [subKeys, setSubKeys] = useState([])
   function setSbMenu(vals){
      console.log("click")
   setSubMenu(vals)
   setisActive(true)
   }
   function getSubMenu(submenus){
      let subMens =[]
      if(typeof submenus === "undefined") {
         return
      }
      if(submenus.length >0){
         submenus.forEach(val=>{
            data.menus.forEach(item =>{
               if(item.key=== val){
                  subMens.push(item)
               }
            })
         })
         setSubKeys(subMens)
         setisSubMenu(true)
      }

   }
   useEffect(async () => {
      // let res = await fetch("../../menu.json")
      // let ress = await res.json()
   
      data.menus.forEach(val=>{
         if (val.key == "main") setanaMenu(val.items)
      })
   },[])
    return (
        <div className="home">
                    <div className='home__section'>
                       <>
                       {
                          anaMenu.map((val,i)=>{
                             return  (<Card
                             key={i}
                             src={val.image}
                             title={val.name}
                             description=""
                             price={val.price}
                             setSb={()=>setSbMenu(val.items)}
                          />)
                          })
                       }
                        </>
                        
                    </div>
                    <div className="sectionTwo">
                       {
                         isActive ? subMenu.map((val,i)=>{
                             return  <Card
                             
                             key={i}
                             src={val.image}
                             title={val.name}
                             description={val.price + "TL"}
                             setSb={()=>getSubMenu(val.subMenus)}
                          />
                          }) : ""
                       }
                        </div> 
                        {

                 isSubMenu ? <div className="sub" >
                       <div className="subMenu" >

                      {
                      subKeys.map((val,i)=>{
                             return  <Card
                             key={i}
                             description={val.description}
                          />
                          }) 
                          }
                       </div>
                  </div> :""
               }
        </div>
    )
}

export default Menu

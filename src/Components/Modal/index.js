import { useState } from 'react';
import {  Modal,Input } from 'antd';
import { useApplicationContext } from '../../Context';
import { CityBox } from './style';


export const CityModal=(props)=>{
    const {isModalOpen, setIsModalOpen} = props;
    const [query,setQuery] = useState("");
    const { unselectedCities,setUnSelectedCities,selectedCities,setSelectedCities,} = useApplicationContext();

    const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addCityHandler =(cityId)=>{
      console.log(cityId);
      const usc = [...unselectedCities];
      const selectedIndex = usc.findIndex(
        (city) => city.id === cityId
      );
      const [cityData] = usc.splice(selectedIndex, 1);
      cityData.isFav=false;
      console.log(cityData);
      const sc =  [...selectedCities];
      sc.push(cityData);
      setUnSelectedCities(usc);
      setSelectedCities(sc);
  }
  const queryHandler = (e) => {
    const q = e.target.value.trim().toLowerCase();
    // const temp =unselectedCities.filter(city=>city.name.includes(query));
  //  console.log(temp);
  setQuery(q);

  }
  const searchResult=unselectedCities.filter(city=>city.name.toLowerCase().includes(query));
    return (

  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
  <Input size="large" placeholder="search" onChange={queryHandler} />
  <p></p>
  {searchResult.map((city)=>{
    return <CityBox>{city.name}<div className='Plus' onClick={()=>addCityHandler(city.id)} > + </div></CityBox>})}
</Modal>
    )
}

import { CitiesStyle } from "../../Components/Cities/style";
import { useState } from "react";
import { CityModal } from "../../Components/Modal";
import { useApplicationContext } from "../../Context";
export const City  = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {selectedCities} = useApplicationContext();
    const showModal = () => {
        setIsModalOpen(true);
      };
    return(

        <CitiesStyle>
             <div style={{display:"flex",justifyContent:"space-between"}}>
                <div className="title">Cities</div>
                <div className="Plus" onClick={showModal}> + </div>
                <CityModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></CityModal>
            </div>
            <hr></hr>
            <div>no city selected</div>
            {selectedCities.map((city)=> <div className="city-cell">{city.name}</div>)}
        </CitiesStyle>


    )
}
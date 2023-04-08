import { Button } from "../Button"
import { HeaderStyle } from "./style"
import { useState } from "react";
import { CityModal } from "../Modal";
import { useApplicationContext } from "../../Context"; 
export const Header=()=>{
    const {theme}= useApplicationContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
    return(
        <HeaderStyle theme={theme} >
            <div className="logo">temparature</div>
                <Button name={"ADD CITY"} handleClick={showModal}/>
                <CityModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></CityModal>

        </HeaderStyle>
    )
}
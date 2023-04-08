import { SidebarStyle } from "./style";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useApplicationContext } from "../../Context";


export const Sidebar=(props)=>{

    const location = useLocation();
    const {SidebarTabs}=props;

    const {theme, setTheme} = useApplicationContext();

    console.log(theme);


    const Navigate = useNavigate();
    // const [themeValue, setThemeValue] = useRecoilState(themeAtom);

    const [SelectedTab, setSelectedTab] = useState("HOME");

    useEffect (()=> {
        if(location.pathname==="/"){
            setSelectedTab("HOME");
        }else if(location.pathname==="/city"){
            setSelectedTab("CITY");
        }else if(location.pathname==="/city2"){
            setSelectedTab("CITY2");
        }
    },[SelectedTab]);

    const handleSelectTab=(tab)=>{
        setSelectedTab(tab);

        if(tab==="HOME"){
            Navigate("/")
            return;
        }

        let routes = "/"+ tab.toLowerCase();
        Navigate(routes);

    }
    const handleTheme =()=>{
        if (theme === "light") {
            setTheme("dark");
            // setThemeValue("dark");
          } else {
            setTheme("light");
            // setThemeValue("light");
          }
    }

    return(
        <SidebarStyle theme={theme}>
            {SidebarTabs.map((tab)=>{
                return <div className={SelectedTab===tab.tab ?
                    "tab-container selected-tab-container"
                :"tab-container"}
                 onClick={()=>handleSelectTab(tab.tab)}>
                    {tab.tab}
                    </div>
            })}
           <div className="darkTheme" onClick={handleTheme}>theme</div>
        </SidebarStyle>
    );
}
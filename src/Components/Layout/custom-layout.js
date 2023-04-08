import { SidebarTabs } from "../Constant";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const CustomLayout = (props) => {
    return(
        <>
        <Header/>
        <Sidebar SidebarTabs={SidebarTabs}/>
        {props.children}
        </>

    );
}

import react from "react";
import { BrowserRouter,Routes,Route } from "react-router";
import Cust_home from "./Cust_home";
import Cust_nav from "./Cust_nav";
import Cust_log from "./Cust_log";
import Cust_reg from "./Cust_reg";
import Liked_properties from "./Liked_properties";
import Property_details from "./Property_details";
import V_log from "../Vendor/V_log";
import V_reg from "../Vendor/V_reg";
import Add_property from "../Vendor/Add_property";
import View_property from "../Vendor/View_property";

const Cust_index=()=>{
    return (
        <>
        <BrowserRouter>
            <Cust_nav />
            <Routes>
                <Route path='/Home' element={<Cust_home />} />
                <Route path='/' element={<Cust_log />} />
                <Route path='/reg' element={<Cust_reg />} />
                <Route path='/liked_properties' element={<Liked_properties />} />
                <Route path='/property_details/:propertyid' element={<Property_details />} />
                 <Route path='/v_log' element={<V_log />} />
                 <Route path='/v_reg' element={<V_reg />} />
                  <Route path='/Add_property' element={<Add_property />} />
                  <Route path='/View_property' element={<View_property />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Cust_index

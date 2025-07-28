import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // optional styling
import useMenu from "../../../Hooks/useMenu";
import BoxMap from "./BoxMap";
import { useParams } from "react-router-dom";

const ShopTabs = () => {
    const categories = ['offered', 'salad', 'pizza', 'drinks', 'dessert'];
    const {category} = useParams()
    // const initialIndex = categories.indexOf(category)
    const initialIndex = categories.indexOf(category) === -1 ? 2 : categories.indexOf(category);  // pizza as default

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu({})
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    
    console.log(category);                                                                                                                                                                                                                                                                                                                                        
    return (
        <div className="w-5/6 mx-auto my-10">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={`text-center items-center`}>
                    <Tab>Offerd</Tab>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>drinks</Tab>
                    <Tab>dessert</Tab>
                </TabList>

                <TabPanel>
                    <BoxMap item={offered}/>
                </TabPanel>
                <TabPanel>
                    <BoxMap item={salad}/>
                </TabPanel>
                <TabPanel>
                    <BoxMap item={pizza}/>
                </TabPanel>
                <TabPanel>
                    <BoxMap item={drinks}/>
                </TabPanel>
                <TabPanel>
                    <BoxMap item={dessert}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopTabs;

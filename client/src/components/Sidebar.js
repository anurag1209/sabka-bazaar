import React, { useRef } from 'react';
import { Link } from "@material-ui/core";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { SidebarStyle, AccordionWrapper, SidebarItemStyle, ArrowStyle } from "../styles/SidebarStyles";



function Sidebar({ categories, productId, clicked }) {

    const ref = useRef(null);

    const getCurrentCategory = () => {
        if(!productId || !categories.length) {
            return "Select Category";
        } else {
            for( let category of categories) {
                if(category.id === productId) {
                    return category.name;
                }
            }
            return "Select Category"; // Fallback
        }
    }

    const handleCategoryChange = (id) => {
        clicked(id);
        ref?.current?.click();

    }

    return (
            <SidebarStyle>
                {categories.map(cat => {
                    return <SidebarItemStyle 
                        key={cat.id} 
                        className={cat.id === productId ? "active" : ""}
                        onClick={() => clicked(cat.id)}
                        >
                        <Link to={"/products/" + cat.id}>{cat.name}</Link>
                    </SidebarItemStyle>
                })}

                <AccordionWrapper>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography ref={ref}>{getCurrentCategory()}</Typography>
                        </AccordionSummary>
                        {categories.map(cat => {
                            return <AccordionDetails key={cat.id}>
                                <Typography onClick={() => handleCategoryChange(cat.id)}>
                                    <Link to={"/products/" + cat.id}>{cat.name}</Link>
                                </Typography>
                            </AccordionDetails>
                        })}
                    </Accordion>
                    <ArrowStyle>{`>`}</ArrowStyle>
                </AccordionWrapper>
            </SidebarStyle>
    );
}

export default Sidebar;
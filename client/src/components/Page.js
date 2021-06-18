import React from 'react';
import Footer from './Footer';
import Header from './Header';


function Page(props) {
    return (
        <>
            <Header />
            { props.children }
            <Footer />
        </>
    )
}

export default Page;
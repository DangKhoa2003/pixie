import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
function DefaultLayout({children}) {
    return (
        <>
            <Header />
            <div style={{ backgroundImage: `linear-gradient(180deg, #111, #232323)`}}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
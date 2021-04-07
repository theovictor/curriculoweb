import React from "react";
import DashNavbar from "components/Navbars/DashNavbar.js";
//import DashFooter from "components/Footers/DashFooter.js";

function Dashboard(){
    React.useEffect(() => {
        document.body.classList.add("dashboard-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup(){
            document.body.classList.remove("dashboard-page");
        };
    });
    return(
        <>
            <div className="wrapper">
                <DashNavbar />
                <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-teal">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </section>
                {/* <DashFooter /> */}
            </div>
        </>
    );
}
export default Dashboard;
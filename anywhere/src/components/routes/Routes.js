import React from "react";
import { Route } from "react-router-dom";
import UserSignup from "../../clients/clientSignup";
import cClasses from "../../clients/clientClasses";
import iClasses from "../../instructors/instructClasses";
import Login from "../Login";
import Homepage from "../homepage";
import PrivateRoute from "./PrivateRoute";
import iSignup from "../../instructors/instructSignup";


const FitnessRoutes = () => {
    return (
        <div>
            <PrivateRoute exact path="/cClasses" component={cClasses} />
            <PrivateRoute exact path="/iClasses" component={iClasses} />
            <Route exact path="/" component={Homepage} />
            {/* <Route path="/userSignup" component={UserSignup} /> */}
            <Route path="/iSignup" component={iSignup} />
            <Route path="/login" component={Login} />
            <Route path="/homePage" component={Homepage} />
           


        </div>
    )
}

export default FitnessRoutes; 
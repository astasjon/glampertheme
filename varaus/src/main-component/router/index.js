import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import RoomPage from '../RoomPage'
import RoomSinglePage from '../RoomSinglePage'
import DestinationPage from '../DestinationPage'
import AboutPage from '../AboutPage'
import ShopPage from '../ShopPage'
import ShopSinglePage from '../ShopSinglePage'
import ServicePage from '../ServicePage'
import ServiceSinglePage from '../ServiceSinglePage'
import FaqPage from '../FaqPage'
import BlogPage from '../BlogPage' 
import BlogPageLeft from '../BlogPageLeft' 
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails' 
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide' 
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'  
import ContactPage from '../ContactPage' 
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage' 
import ForgotPassword from '../ForgotPassword' 
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/home' component={Homepage} />
            <Route path='/home2' component={Homepage2} />
            <Route path='/home3' component={Homepage3} />
            <Route path='/room' component={RoomPage} />
            <Route path='/room-single' component={RoomSinglePage} />
            <Route path='/destination' component={DestinationPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/shop-single' component={ShopSinglePage} />
            <Route path='/service' component={ServicePage} />
            <Route path='/service-single' component={ServiceSinglePage}/>
            <Route path='/faq' component={FaqPage}/>
            <Route path='/404' component={ErrorPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/blog' component={BlogPage}/> 
            <Route path='/blog-left' component={BlogPageLeft}/>
            <Route path='/blog-fullwidth' component={BlogPageFullwidth}/> 
            <Route path='/blog-details' component={BlogDetails}/>
            <Route path='/blog-details-left' component={BlogDetailsLeftSiide}/>
            <Route path='/blog-details-fullwidth' component={BlogDetailsFull}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;

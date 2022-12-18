import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import PagesSkill from '../pages/PagesSkill';
import  PagesHome  from '../pages/PagesHome';
import  PagesProyecto  from '../pages/PagesProyecto';
import  PagesContacto  from '../pages/PagesContacto';
import  PagesAbout  from '../pages/PagesAbout';


const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path='/' element={<PagesHome/>}>
            <Route path='/proyecto' element={<PagesProyecto/>}/>
            <Route path='/skill' element={<PagesSkill/>}/>
            <Route path='/contacto' element={<PagesContacto/>}/>
            <Route path='/about' element={<PagesAbout/>}/>
            
        </Route>
    )
)

function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}


export default AppRouter
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import PhotoUpload from '../components/PhotoUpload';
import Gallery from '../components/Gallery';
import GalleryList from '../components/GalleryList';
import Photo from '../components/Photo';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={GalleryList} path="/" exact={true} />
          <Route component={PhotoUpload} path="/photo-upload" />
          <Route component={Gallery} path="/gallery/:galleryId" />
          <Route component={Photo} path="/photo/:photoId" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;

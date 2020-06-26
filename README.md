# Photo Gallery Manager Project

Submitted by Juan Lema as part of the requirements for the Honor Certificate for graduation from the Full Stack Development bootcamp at Nucamp in June 2020.

## Project Overview

The inspiration for the Photo Gallery Manager App project was a request from my partner to build a simple way to create galleries and upload photos for her photography and videography portfolio.

During the Bootstrap course I built a copy of her current portfolio site (live at [https://jlema.github.io/storytellingPortfolio/](https://jlema.github.io/storytellingPortfolio/)) so this could be seen as an extension of that project, but using the MERN stack instead of simply Bootstrap.

The current live version of the project can be viewed at: [https://photo-gallery-manager.herokuapp.com/](https://photo-gallery-manager.herokuapp.com/)

The repository to the project is available at: [https://github.com/jlema/photo-gallery-manager/](https://github.com/jlema/photo-gallery-manager/)

This project was based on the [Create a Photo Gallery App Using the MERN stack tutorial](https://levelup.gitconnected.com/create-a-photo-gallery-app-using-mern-stack-826d7d926232) by Yogesh Chavan.

## Project Goals

The Photo Gallery Manager App project had the following goals:

1. Develop a full-fledged REST API for managing galleries and photos.

- Add authentication and restrict different endpoints like delete to only admins.

2. Implement a simple user interface to demonstrate some of the main features of the REST API:

- User authentication.
- Photo upload.
- Gallery visualization.
- Individual photo visualization.

3. Include the following features:

- Support for multiple galleries, and multiple photos per gallery.
- Rich database schema for photos and galleries.

4. Modularization of server code using the Express Model -\&gt; Router -\&gt; Controller code structure.
5. Deployment to a live &#39;production&#39; environment in the cloud so other people can test the app.

## Learning Expectations

As part of the project, I decided I wanted to learn about and apply the following technologies or techniques:

- Axios (for HTTP requests.)
- Functional components and React hooks (together with Redux.)
- React-Bootstrap (as an alternative to reactstrap.)
- Storing and retrieving images from and to MongoDB (as an alternative to cloud storage.)
- Deploying the backend and frontend apps to Heroku as a single dyno.

## Technologies Used

The following technologies were used during this project. Some of these were learned during the Bootcamp and some others were learned specifically for this project. Please note this is not an all-inclusive list:

| Axios | CORS |
| --- | --- |
| SASS | React |
| React-Bootstrap | Redux |
| Express | Node JS |
| MongoDB | Mongoose |
| Yarn | Heroku |
| mLab | Pug |
| Postman | Visual Studio Code |

## Next Steps

There are a lot of things that could be added to this project. Here&#39;s a laundry list of some possible improvements:

1. Additions to the user interface:

- Allow users to sign up for an account.
- Allow users to create / edit / delete their own galleries.
- Allow users to edit / delete photos (maybe favorite.)
- Allow users to transfer photos from one gallery to another.
- Overall UX beautification.

2. Updates to the REST API:

- Allow users to browse to galleries or photos by name instead of ID.
  - The schema was designed for this, as names are required to be unique.
- Utilize AWS S3 or Cloudinary as a cloud storage solution instead of storing images to mongoDB.
- Remove unused endpoint /galleries/:galleryId/photos/:photoId/meta

## List of REST API endpoints

These can be tested live at [https://photo-gallery-manager.herokuapp.com/](https://photo-gallery-manager.herokuapp.com/)

In case the database is empty or corrupted, it can be restored from the folder inside the repo /server/db/dump.

### Gallery endpoints

/users/

- **GET: returns all users details**
- POST: Unsupported
- PUT: Unsupported
- DELETE: Unsupported

/users/signup

- GET: Unsupported
- **POST: registers a new user account**
- PUT: Unsupported
- DELETE: Unsupported

/users/login

- GET: Unsupported
- **POST: logs in (authenticates) user via credentials**
- PUT: Unsupported
- DELETE: Unsupported

/users/logout

- **GET: logs out a user**
- POST: Unsupported
- PUT: Unsupported
- DELETE: Unsupported

/galleries/

- **GET: returns all galleries metadata**
- **POST: creates a new gallery with no photos**
- PUT: Unsupported
- **DELETE: deletes all galleries**

/galleries/:galleryId

- **GET: returns a single gallery metadata**
- POST: Unsupported
- **PUT: updates name, title, or description for a gallery**
- DELETE: deletes a gallery

/galleries/:galleryId/photos

- **GET: returns metadata for all photos belonging to a gallery**
- **POST: uploads a single photo to the gallery**
- PUT: Unsupported
- **DELETE: deletes all photos belonging to a gallery**

/galleries/:galleryId/photos/:photoId

- **GET: returns photo, including image data**
- POST: Unsupported
- **PUT: updates name, caption, (data) or gallery for a photo.**
- DELETE: deletes photo

/galleries/:galleryId/photos/:photoId/meta

- **GET: returns only photo metadata (no image data.)**
- POST: Unsupported
- PUT: Unsupported
- DELETE: Unsupported

### Photo endpoints

/photos/

- **GET: returns all photos metadata (no image data.)**
- POST: Unsupported
- PUT: Unsupported
- **DELETE: deletes all photos**

/ photos /:photoId

- Same as /galleries/:galleryId/photos/:photoId

/photos/:photoId/meta

- Same as /galleries/:galleryId/photos/:photoId/meta

## Gratitude

Great appreciation goes to Yogesh Chavan for providing the tutorial I used as a baseline for this project.

## References

React-Bootstrap documentation: [https://react-bootstrap.github.io/components/](https://react-bootstrap.github.io/components/)

Using the Effect Hook: [https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html)

Model-Routers-Controllers-Services code structure : [https://riptutorial.com/node-js/example/32332/model-routes-controllers-services-code-structure](https://riptutorial.com/node-js/example/32332/model-routes-controllers-services-code-structure)

Consume a JSON REST API with React and Axios: [https://www.techiediaries.com/react-axios/](https://www.techiediaries.com/react-axios/)

Using Async/await in Express: [https://zellwk.com/blog/async-await-express/](https://zellwk.com/blog/async-await-express/)

Heroku Node.js Support: [https://devcenter.heroku.com/articles/nodejs-support](https://devcenter.heroku.com/articles/nodejs-support)

create-react-app with a Node server on Heroku: [https://github.com/mars/heroku-cra-node](https://github.com/mars/heroku-cra-node)

react-hooks-cheatsheet: [https://react-hooks-cheatsheet.com/examples/fetching-data](https://react-hooks-cheatsheet.com/examples/fetching-data)

Create a Photo Gallery App Using the MERN stack: [https://levelup.gitconnected.com/create-a-photo-gallery-app-using-mern-stack-826d7d926232](https://levelup.gitconnected.com/create-a-photo-gallery-app-using-mern-stack-826d7d926232)

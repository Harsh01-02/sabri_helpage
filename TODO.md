# Backend ES Module Conversion TODO

- [x] Update package.json to add "type": "module"
- [ ] Convert config/db.js to ES modules
- [x] Convert all models to ES modules (Award.js, Blog.js, Cause.js, Contact.js, CSR.js, Donation.js, Event.js, Faq.js, GlobalConfig.js, Page.js, Publication.js, Story.js, Subscription.js, Teacher.js, User.js, Video.js)
- [x] Convert middleware files to ES modules (auth.js, authMiddleware.js, errorMiddleware.js, roleMiddleware.js)
- [x] Convert controllers to ES modules (pageController.js, servicesController.js, uploadController.js, and missing controllers: awardController.js, blogController.js, causeController.js, contactController.js, csrController.js, donorController.js, eventController.js, faqController.js, internshipController.js, publicationController.js, storyController.js, teacherController.js, videoController.js, volunteerController.js, clubController.js)
- [x] Convert routes to ES modules (all route files)
- [ ] Convert scripts to ES modules (createAdmin.js, createAdminUser.js, createSuperAdmin.js, seedPages.js)
- [ ] Convert server.js to ES modules
- [ ] Test server startup and functionality

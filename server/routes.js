import { check, validationResult } from 'express-validator/check';
import * as services from './hsControllers';
import { getAllFaq, getFaq, createFaq, updateFaq, removeFaq } from './faqControllers';

const routes = (app) => {
  app.get('/api/service/categories/:category', services.getServicesByCategory);
  app.get('/api/service/tags/:tag', services.getServicesByTags);
  app.get('/api/service/categories/:category/tags/:tag', services.getServicesByBoth);
  app.get('/api/service/search/:search', services.getFullText);
  app.get('/api/service', (req, res) => console.log('All services called', req.params.category));
  app.post('/api/service', [
    check('name', 'Please enter a name for the service').isLength({ min: 1 }),
    check('description', 'Please enter a description').isLength({ min: 1 }),
    check('address', 'Please enter an address').isLength({ min: 1 }),
    check('email').isEmail().withMessage('Must be a valid email address').trim()
      .normalizeEmail(),
    check('telephone').matches(/^\+?(?:\d\s?){10,12}$/).withMessage('Please provide a valid telephone number'),
    check('postcode').matches(/^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/).withMessage('Please provide a postcode'),
    check('weblink', 'Use correct URL').isURL(),
    check('image', 'Use correct URL').isURL(),
    check('tags', 'Please select at least one tag').exists(),
  ], (req, res, next) => {
    try {
    validationResult(req).throw();

    next();
  } catch (err) {
    // To make validationErrors in correct format for redux form validation.
    const validationErrors = {};
    Object.keys(err.mapped()).map( (key) => {
      validationErrors[key] = err.mapped()[key].msg;
      return validationErrors;
    }
  );
    console.log('validation errors', validationErrors);
    res.status(422).json({ validationErrors: validationErrors });
  }
  }, services.createService);
  app.put('/api/service/:id', services.updateService);
  app.delete('/api/service/:name', services.removeService);

  app.get('/api/faq', getAllFaq);
  app.get('/api/faq/:id', getFaq);
  app.post('/api/faq', [
    check('question', 'Please enter a question').isLength({ min: 1 }),
    check('answer', 'Please enter an answer').isLength({ min: 1 }),
  ], (req, res, next) => {
    try {
    validationResult(req).throw();

    next();
  } catch (err) {
    // To make validationErrors in correct format for redux form validation.
    const validationErrors = {};
    Object.keys(err.mapped()).map( (key) => {
      validationErrors[key] = err.mapped()[key].msg;
      return validationErrors;
    }
  );
    console.log('validation errors', validationErrors);
    res.status(422).json({ validationErrors: validationErrors });
  }
}, createFaq);
  app.put('/api/faq/:id', updateFaq);
  app.delete('/api/faq/:id', removeFaq);
};

export default routes;

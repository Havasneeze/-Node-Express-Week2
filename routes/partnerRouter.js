const express = require('express');
const bodyParser = require('body-parser');
const Partner = require('../models/partner');

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter.route('/')
// .get((req, res) => {
//     res.end('Will send all the partners to you');
// })

.get((req, res, next) => {
    Partner.find()
    .then(partners => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partners);
    })
    .catch(err => next(err));
})


.post((req, res, next) => {
    Partner.create(req.body)
    .then(partner => {
        console.log('Partner Created ', partner);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partner);
    })
    .catch(err => next(err));


})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res, next) => {
    Partner.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});



partnerRouter.route('/:partnerId')
.get((req, res, next) => {
    Partner.findById(req.params.partnerId)
    .then(partner => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partner);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Partner.create(req.body)
    .then(partner => {
        console.log('partner Created ', partner);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partner);
    })
    .catch(err => next(err));
})
.put((req, res, next) => {
    Partner.findByIdAndUpdate(req.params.partnerId, {
        $set: req.body
    }, { new: true })
    .then(partner => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partner);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Partner.findByIdAndDelete(req.params.partnerId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /partners');
// })
// .delete((req, res) => {
//     res.end('Deleting all partners');
// });


// partnerRouter.route('/:partnerId')
// .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// })
// .get((req, res) => {
//     // res.end('Will send all the partners to you');
//     res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
// })
// .post((req, res) => {
//     res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
// })
// .put((req, res) => {
//     // res.statusCode = 403;
//     // res.end('PUT operation not supported on /partners');
//     // res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
//     res.write(`Updating the partner: ${req.params.campsiteId}\n`);
//     res.end(`Will update the partner: ${req.body.name}
//         with description: ${req.body.description}`);
// })
// .delete((req, res) => {
//     res.end('Deleting all partners');
// });

module.exports = partnerRouter;









// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /campsites');
// })
// .delete((req, res, next) => {
//     Campsite.deleteMany()
//     .then(response => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(response);
//     })
//     .catch(err => next(err));
// });

// campsiteRouter.route('/:campsiteId')
// .get((req, res, next) => {
//     Campsite.findById(req.params.campsiteId)
//     .then(campsite => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(campsite);
//     })
//     .catch(err => next(err));
// })
// .post((req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
// })
// .put((req, res, next) => {
//     Campsite.findByIdAndUpdate(req.params.campsiteId, {
//         $set: req.body
//     }, { new: true })
//     .then(campsite => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(campsite);
//     })
//     .catch(err => next(err));
// })
// .delete((req, res, next) => {
//     Campsite.findByIdAndDelete(req.params.campsiteId)
//     .then(response => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(response);
//     })
//     .catch(err => next(err));
// });



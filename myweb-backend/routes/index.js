const express = require('express');
const router = express.Router();

const heroRoutes = require('./heroRoutes');
const skillsRoutes = require('./skillsRoutes');
const galleryRoutes = require('./galleryRoutes');
const projectsRoutes = require('./projectsRoutes');
const timelineRoutes = require('./timelineRoutes');

router.use('/hero', heroRoutes);
router.use('/skills', skillsRoutes);
router.use('/gallery', galleryRoutes);
router.use('/projects', projectsRoutes);
router.use('/timeline', timelineRoutes);

module.exports = router;

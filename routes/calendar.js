const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const router = express.Router();

const User = require("../models/User");
const Calendar = require("../models/Calendar");
const Event = require("../models/Event");

// @route   GET api/calendar
// @desc    Get the users calendars
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const calendars = await Calendar.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(calendars);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route   GET api/calendar
// @desc    Get the events for the calender
// @access  Public
router.get("/:id", auth, async (req, res) => {
  try {
    let calendar = await Calendar.findById(req.params.id);
    if (!calendar) return res.status(400).json({ msg: "Calendar not found" });

    if (calendar.user.toString() !== req.user.id && calendar.private)
      return res.status(401).json({ msg: "Authorization denied" });

    let events = await Event.find({ calendar: calendar.id }).sort({
      date: -1,
    });

    res.json(events);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route   POST api/calendar
// @desc    Creates a new calender for the user
// @access  Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, private } = req.body;

    try {
      const newCalendar = new Calendar({
        name,
        private,
        user: req.user.id,
      });

      const calendar = await newCalendar.save();

      return res.json(calendar);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

// @route   PUT api/calendar/:id
// @desc    Updates the calendar
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { name, private } = req.body;

  const fields = {};
  if (name) fields.name = name;
  if (private) fields.private = private;

  try {
    let calendar = await Calendar.findById(req.params.id);
    if (!calendar) return res.status(400).json({ msg: "Calendar not found" });

    if (calendar.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Authorization denied" });

    calendar = await Calendar.findByIdAndUpdate(
      req.params.id,
      { $set: fields },
      { new: true }
    );

    res.json(calendar);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route   DELETE api/calendar/:id
// @desc    Delete calendar
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let calendar = await Calendar.findById(req.params.id);
    if (!calendar) return res.status(400).json({ msg: "Calendar not found" });

    if (calendar.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Authorization denied" });

    await Calendar.findByIdAndRemove(req.params.id);

    res.json({ msg: "Calendar removed" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

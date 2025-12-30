import Contact from '../models/Contact.js';
import Subscription from '../models/Subscription.js';
import Donation from '../models/Donation.js';

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true, message: 'Contact message received.', data: contact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const createSubscription = async (req, res) => {
  try {
    const subscription = new Subscription(req.body);
    await subscription.save();
    res.status(201).json({ success: true, message: 'Successfully subscribed.', data: subscription });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const createDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ success: true, message: 'Donation received. Thank you!', data: donation });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ES module exports above

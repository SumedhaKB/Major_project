import express from "express";
import Company from "../models/Company.js";
import { scrapePrepInsta } from "../scrapers/prepInstaScraper.js";

const router = express.Router();

// GET all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET one company by slug
router.get("/:slug", async (req, res) => {
  try {
    const company = await Company.findOne({ slug: req.params.slug });
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST trigger scraper for a company
router.post("/:slug/scrape", async (req, res) => {
  try {
    const slug = req.params.slug.toLowerCase();
    let data = null;

    // Add more scrapers for other companies later
    if (slug === "wipro") {
      data = await scrapePrepInsta("wipro");
    } else {
      return res.status(400).json({ error: "Scraper not implemented for this company" });
    }

    if (!data) return res.status(404).json({ error: "Scraping failed" });

    const company = await Company.findOneAndUpdate(
      { slug },
      { $set: data },
      { upsert: true, new: true }
    );

    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

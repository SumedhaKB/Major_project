import axios from "axios";
import { load } from "cheerio";

export async function scrapePrepInsta(companyName) {
  try {
    // Correct PrepInsta URL format
    const url = `https://prepinsta.com/prepare/interview-exp/${companyName}`;
    console.log("Scraping URL:", url);

    const res = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    console.log("Status:", res.status);
    console.log("HTML length:", res.data.length);

    const $ = load(res.data);

    // Get short description from meta tag or first paragraph
    const shortDescription =
      $("meta[name='description']").attr("content") ||
      $("p").first().text().trim();

    // Example interview rounds — change according to actual scraped data
    const rounds = [
      { name: "Online Assessment", description: "Aptitude and coding test" },
      { name: "Technical Interview", description: "Coding + CS fundamentals" },
      { name: "HR Interview", description: "Behavioral questions" }
    ];

    return {
      name: companyName.charAt(0).toUpperCase() + companyName.slice(1),
      slug: companyName.toLowerCase(),
      shortDescription,
      roles: ["Software Engineer"],
      rounds,
      updatedAt: new Date()
    };

  } catch (error) {
    console.error("❌ Error scraping PrepInsta:", error.message);
    return null;
  }
}

import React from "react";
import "../css/blogs.css";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
    <NavBar />
    
    <div className="blog-container">
      <h1 className="blog-header">Blog</h1>
      <h2 className="blog-header1">
      New trending products
      </h2>
      <ul className="blog-grid">
        {blogPosts.map((post, index) => (
          <li key={index} className="blog-grid-item">
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title}  />
            <h3>{post.description}</h3>
            <div class="content">{post.content}</div>
            <button>
              <a className="a" href={post.url}>Read More</a>
            </button>
          </li>
        ))}
      </ul>
    </div>

    <Footer />
    </>
  );
};

const blogPosts = [
  {
    title: "BRIGGS & RILEY",
    image:
      "https://www.briggs-riley.com/cdn/shop/files/Baseline_10bfea26-6194-40bc-a491-825155ffc6a3.jpg?v=1693498312",
    description:
      "Explore the Best Soft-Sided Luggage",
    url: "https://www.briggs-riley.com",
    content:
      "The Baseline collection covers a full range of luggage sizes, from totes and laptop-secured backpacks to large weeknight bags—each great on its own or doubles as an active daypack. Each model is crafted with Briggs & Riley’s high-performance materials and attention to detail, including ballistic nylon and premium leather accents.S",
  },
  {
    title: "Bellagio 3.0",
    image:
      "https://i.pinimg.com/originals/58/64/e9/5864e94ed834d2ccf371623538bc7f62.png",
    content:
      "Blending authentic Italian artisanship, innovative enhancements, and the same classic elegance of our most iconic Bellagio Collection, this travel gear is designed to establish a new standard in luxury traveling. Bellagio 3.0 was crafted with convenience in mind to provide sophisticated travelers with more protection, space, and a lifetime warranty that will allow them to enjoy their journeys across the globe with peace of mind.",
    url: "https://bricstore.com/",
  },
  {
    title: "Travelpro Luggage Performance",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gh-travelpro-luggage-662141be98ffd.png?crop=0.5xw:1xh;center,top&resize=1200:*",
    description:"Durability",
    content:"Travelpro is best known for its softside suitcases. The Platinum Elite carry-on and checked bags use a heavyweight nylon fabric that performed well in our abrasion assessments, resisting wear and tear after being rubbed back and forth 15,000 times by our Wyzenbeek abrasion tester, which simulates extended use. Plus, the material is covered in DuraGuard, a water and stain-resistant coating that helps keep your luggage in tip-top shape even with lots of use. We gave the zippers perfect scores for water resistance during our tests",
    url: "https://www.goodhousekeeping.com/travel-products/luggage-reviews/a60480370/travelpro-luggage-reviews/#travelpro-luggage-overview",
  },
  {
    title: "SAMSONITE ",
    image:
      "https://file.hstatic.net/200000321545/file/banner_web_1920x700px.jpg",
    description:"VIETNAMMESE BRAND",
    content:"We are continuously striving to minimize the environmental impact of our business operations. To achieve our goal of reducing carbon emissions by 15% by 2025, we have been rigorously measuring and managing greenhouse gas emissions at all stages of production, increasing the use of renewable energy, and implementing energy-saving measures, as well as researching and applying environmentally friendly production technologies.",
    url: "https://samsonite-vietnam.com/",
  },
  {
    title: "D L S E Y PARIS 1946",
    image:
      "https://us.delsey.com/cdn/shop/files/40167682115-Chatelet-Air-20-Large-Checked-Angora_7_900x.webp?v=1723833808",
    description:"Chatelet Air 2.0 Luggage Collection",
    content:"DELSEY’s most iconic collection boasts an array of exciting new features, including corner protectors for extra durability, a deluxe interior with an antimicrobial lining fabric, as well as a variety of new styles, sizes, and colors, providing travelers with stylish and matching options for daily use or longer journeys. The newly launched collection is also much lighter, ensuring travelers can pack even more for their getaways.",
    url: "https://us.delsey.com/",
  },
  {
    title: "G U C C I",
    image: "https://media.gucci.com/content/DiaryArticleDouble_Standard_2800x1788/1593435607/DiaryArticleDouble_OTG-Acc-01_001_Default.jpg",
    description:"Gucci Off the Grid",
    content:"Gucci Off the Grid is more than just a fashion collection; it's a testament to the brand's commitment to sustainability. By using innovative materials like ECONYL® regenerated nylon and chrome-free tanned leather, Gucci has created a line of products that minimizes environmental impact. The meticulous production process, from sourcing recycled materials to implementing circular economy principles, ensures that every piece is made with the planet in mind. When compared to traditional fashion, Gucci Off the Grid stands out as a pioneer in sustainable luxury, inspiring consumers to make more conscious choices.",
    url: "https://www.gucci.com/us/en/st/stories/article/off-the-grid-collection-shoppable",
  },
];

export default Blog;

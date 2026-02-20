import './style.css'

const app = document.querySelector('#app')

const routes = {
  '/': homePage,
  '/about': aboutPage,
  '/ministries': ministriesPage,
  '/sermons': sermonsPage,
  '/events': eventsPage,
  '/contact': contactPage,
  '/giving': givingPage,
}

function closeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu')
  if (mobileMenu) {
    mobileMenu.classList.remove('active')
  }
}

function setupMobileMenuListener() {
  const toggle = document.getElementById('mobile-menu-toggle')
  const mobileMenu = document.querySelector('.mobile-menu')
  const mobileLinks = document.querySelectorAll('.mobile-menu a')

  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation()
      mobileMenu.classList.toggle('active')
    })
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu()
    })
  })

  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      if (!e.target.closest('.header')) {
        closeMobileMenu()
      }
    }
  })
}

function router() {
  const path = window.location.hash.slice(1) || '/'
  const page = routes[path] || homePage
  app.innerHTML = page()
  updateActiveNav()
  setupMobileMenuListener()
  closeMobileMenu()
  window.scrollTo(0, 0)
}

function updateActiveNav() {
  const path = window.location.hash.slice(1) || '/'
  setTimeout(() => {
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${path}`) {
        link.classList.add('active')
      }
    })
  }, 0)
}

function header() {
  return `
    <header class="header">
      <div class="header-container">
        <div class="logo-section">
          <img src="/greensboro logo.jpg" alt="Deeper Life Bible Church Logo" class="logo-img">
          <div class="logo-text">
            <h1>Deeper Life Bible Church</h1>
            <p>Achieving Heaven's Goal</p>
          </div>
        </div>
        <nav>
          <a href="#/">Home</a>
          <a href="#/about">About</a>
          <a href="#/ministries">Ministries</a>
          <a href="#/sermons">Sermons</a>
          <a href="#/events">Events</a>
          <a href="#/contact">Contact</a>
          <a href="#/giving" style="color: var(--rich-red);">Give</a>
        </nav>
        <button class="mobile-menu-btn" id="mobile-menu-toggle">☰</button>
      </div>
      <nav class="mobile-menu">
        <a href="#/">Home</a>
        <a href="#/about">About</a>
        <a href="#/ministries">Ministries</a>
        <a href="#/sermons">Sermons</a>
        <a href="#/events">Events</a>
        <a href="#/contact">Contact</a>
        <a href="#/giving" style="color: var(--rich-red);">Give</a>
      </nav>
    </header>
  `
}


function footer() {
  return `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Deeper Life Bible Church</h3>
          <p>Achieving Heaven's Goal</p>
          <p style="margin-top: 16px;">Join us every Sunday at 9:00 AM for worship and fellowship.</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="#/about">About Us</a>
          <a href="#/ministries">Ministries</a>
          <a href="#/sermons">Sermons</a>
          <a href="#/events">Events</a>
          <a href="#/giving">Give Online</a>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>4925 W. Market Street<br>Suite 1131<br>Greensboro, NC 27407</p>
          <p style="margin-top: 12px;">Phone: 919-412-3237</p>
        </div>
        <div class="footer-section">
          <h3>Service Times</h3>
          <p><strong>Sunday Worship</strong><br>9:00 AM</p>
          <p style="margin-top: 12px;"><strong>Bible Study</strong><br>6:30 PM EST Every Thursday </p>
          <p style="margin-top: 12px;"><strong>Prayer Meeting</strong><br>7:30 PM EST Every Sunday Evening</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Deeper Life Bible Church, Greensboro. All rights reserved.</p>
      </div>
    </footer>
  `
}

// COMPLETE FIXED VERSION - Replace your homePage function with this

function homePage() {
  const html = `
    ${header()}
    <section class="hero-slideshow">
      <div class="slides-container">
        <div class="slide active" style="background-image: url('/WhatsApp%20Image%202025-11-28%20at%2014.42.28_89664449.jpg'); background-position: center;">
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <div class="service-banner">Join Us for Sunday Service – 9 A.M </div>
            <h2>Welcome to Deeper Life Bible Church</h2>
            <p>Experience authentic worship, powerful teaching, and genuine fellowship as we journey together toward achieving heaven's goal.</p>
            <a href="#/contact" class="cta-button">Plan Your Visit</a>
          </div>
        </div>
        <div class="slide" style="background-image: url('/church 1.jpg'); background-position: center;">
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <div class="service-banner">Spirit-Filled Worship & Testimonies</div>
            <h2>Experience Dynamic Sunday Services</h2>
            <p>Join us as we worship in spirit and share testimonies of God's faithfulness and transformative power in our lives.</p>
            <a href="#/about" class="cta-button">Learn About Our Programs</a>
          </div>
        </div>
        <div class="slide" style="background-image: url('/CAMPUS PROGRAM 1.jpg'); background-position: center;">
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <div class="service-banner">Powerful Worship Experience</div>
            <h2>Encounter God's Presence</h2>
            <p>Through heartfelt worship and intercession, experience the transformative power of God's presence and grow in your faith journey.</p>
            <a href="#/contact" class="cta-button">Visit Us Today</a>
          </div>
        </div>
      </div>
      <div class="slide-dots">
        
      </div>
      <button class="slide-nav prev">❮</button>
      <button class="slide-nav next">❯</button>
    </section>

    <section class="section">
      <div class="container">
        <div class="church-showcase">
          <div class="showcase-image">
            <img src="/church 8.jpg" alt="Deeper Life Bible Church service" />
          </div>
          <div class="showcase-text">
            <h2>Our Vibrant Community</h2>
            <p>At Deeper Life Bible Church, we are more than just a congregation—we are a family dedicated to spiritual growth, biblical teaching, and genuine fellowship. Our warm and welcoming community opens its doors to all who seek God's Word and desire to grow in faith.</p>
            <p>With regular Sunday services, Bible study sessions, prayer meetings, and various ministry programs, we provide multiple opportunities for you to connect, learn, and serve. Whether you're a longtime believer or exploring faith for the first time, you'll find a place of belonging here.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>Why Visit Us?</h2>
          <p>Discover a community committed to faith, fellowship, and spiritual growth</p>
        </div>
        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">📖</div>
            <h3>Bible-Based Teaching</h3>
            <p>Experience powerful, life-changing messages rooted in Scripture that equip you for daily living and spiritual growth.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">🙏</div>
            <h3>Spirit-Filled Worship</h3>
            <p>Join us in heartfelt worship and prayer as we encounter God's presence together in a transformative atmosphere.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">❤️</div>
            <h3>Loving Community</h3>
            <p>Connect with a warm, welcoming family of believers who support, encourage, and journey with you in faith.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Carousel Section -->
    <section style="padding: 80px 20px; background: linear-gradient(to bottom, #FFFFFF 0%, #F5F7FA 100%);">
        <div style="max-width: 1400px; margin: 0 auto;">
            
            <!-- Section Header -->
            <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-family: 'Playfair Display', serif; font-weight: 700; color: #031E79; font-size: 2.5em; margin: 0 0 20px 0;">Our Church Gallery</h2>
                <p style="color: #6B7280; font-size: 1.1em; max-width: 700px; margin: 0 auto;">Moments of worship, fellowship, and community in action</p>
            </div>

            <!-- Carousel Container -->
            <div style="position: relative; overflow: hidden; padding: 0 60px;">
                
                <!-- Carousel Track -->
                <div id="carouselTrack" style="display: flex; gap: 20px; transition: transform 0.5s ease-in-out;">
                    
                    <!-- Gallery Item 1 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/church 1.jpg" alt="Sunday Worship" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Sunday Worship</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">Celebrating God's presence together</p>
                        </div>
                    </div>

                    <!-- Gallery Item 2 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/CAMPUS PROGRAM 1.jpg" alt="Youth Ministry" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Youth Ministry</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">Growing the next generation</p>
                        </div>
                    </div>

                    <!-- Gallery Item 3 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/church 3.jpg" alt="Prayer Meeting" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Prayer Meeting</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">United in prayer</p>
                        </div>
                    </div>

                    <!-- Gallery Item 4 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/church 4.jpg" alt="Fellowship" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Fellowship</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">Building community</p>
                        </div>
                    </div>

                    <!-- Gallery Item 5 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/church 5.jpg" alt="Community Outreach" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Community Outreach</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">Serving with love</p>
                        </div>
                    </div>

                    <!-- Gallery Item 6 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/greens picture 3.jpg" alt="Special Event" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Special Event</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">Celebrating together</p>
                        </div>
                    </div>

                    <!-- Gallery Item 7 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/CAMPUS PROGRAM 2.jpg" alt="Baptism Service" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Campus Program</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">New life in Christ</p>
                        </div>
                    </div>

                    <!-- Gallery Item 8 -->
                    <div class="gallery-slide" style="min-width: calc(33.333% - 14px); flex-shrink: 0; position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); aspect-ratio: 4/3; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);">
                        <img src="/church 8.jpg" alt="Choir Performance" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.95), transparent); padding: 20px; color: #FFFFFF;">
                            <h4 style="font-family: 'Playfair Display', serif; margin: 0 0 5px 0; font-size: 1.3em;">Choir Performance</h4>
                            <p style="margin: 0; font-size: 0.9em; opacity: 0.9;">Worship in song</p>
                        </div>
                    </div>

                </div>

                <!-- Navigation Buttons -->
                <button id="prevBtn" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); background: rgba(162, 24, 35, 0.9); color: #FFFFFF; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); z-index: 10; display: flex; align-items: center; justify-content: center;">
                    ‹
                </button>
                <button id="nextBtn" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); background: rgba(162, 24, 35, 0.9); color: #FFFFFF; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); z-index: 10; display: flex; align-items: center; justify-content: center;">
                    ›
                </button>

            </div>

            <!-- Dots Indicator -->
            <div id="dotsContainer" style="display: flex; justify-content: center; gap: 10px; margin-top: 30px;">
                <!-- Dots will be generated by JavaScript -->
            </div>

            <!-- View All Button -->
            <div style="text-align: center; margin-top: 40px;">
                <a href="#/gallery" style="display: inline-block; background: #A21823; color: #FFFFFF; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-size: 1.1em; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(162, 24, 35, 0.4);">
                    View Full Gallery
                </a>
            </div>

        </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Service Information</h2>
          <p>Everything you need to know about worshipping with us</p>
        </div>
        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">🕐</div>
            <h3>Sunday Worship Service</h3>
            <p><strong>Time:</strong> 9:00 AM - 12:00 PM<br><strong>Duration:</strong> Approximately 3 hours<br>Our main worship service featuring praise, worship, prayer, and biblical teaching for the entire family.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">📖</div>
            <h3>Bible Study</h3>
            <p><strong>6:30 PM EST Every Thursday </strong><br>In-depth study of Scripture designed to deepen your understanding of God's Word and strengthen your faith foundation.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">🙏</div>
            <h3>Prayer Meeting</h3>
            <p><strong>7:30 PM EST Every Sunday Evening</strong><br>Corporate prayer gathering for intercession, thanksgiving, and seeking God's face together as a body.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>What to Expect on Your First Visit</h2>
          <p>Making your visit comfortable and welcoming</p>
        </div>
        <div class="expectations-grid">
          <div class="expectation-item">
            <div class="exp-number">1</div>
            <h3>Arrive Early</h3>
            <p>Service begins promptly at 9:00 AM. We recommend arriving 15-20 minutes early to find parking and get settled comfortably.</p>
          </div>
          <div class="expectation-item">
            <div class="exp-number">2</div>
            <h3>Come As You Are</h3>
            <p>Wear whatever makes you comfortable. Our congregation includes people in casual and formal attire—just be yourself.</p>
          </div>
          <div class="expectation-item">
            <div class="exp-number">3</div>
            <h3>Warm Welcome</h3>
            <p>Our greeters will welcome you at the entrance and help you find your way. Don't hesitate to ask any questions!</p>
          </div>
          <div class="expectation-item">
            <div class="exp-number">4</div>
            <h3>Family-Friendly Service</h3>
            <p>We welcome families with children. Our children's church program provides age-appropriate teaching during the service.</p>
          </div>
          <div class="expectation-item">
            <div class="exp-number">5</div>
            <h3>Interactive Worship</h3>
            <p>Expect engaging worship with music, prayer, and direct biblical teaching. Our services are interactive and participatory.</p>
          </div>
          <div class="expectation-item">
            <div class="exp-number">6</div>
            <h3>Fellowship & Refreshments</h3>
            <p>After service, join us for fellowship, coffee, and refreshments where you can meet other members and ask questions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Our Mission & Vision</h2>
          <p>What drives us as a faith community</p>
        </div>
        <div class="mission-vision-grid">
          <div class="mission-card">
            <div class="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To spread the gospel of our Lord Jesus Christ all over the world and to build believers into maturity in Christ through biblical teaching, spiritual discipline, and active service.</p>
          </div>
          <div class="mission-card">
            <div class="mv-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>Achieving Heaven's Goal—helping every believer fulfill God's ultimate purpose through fervent prayer, holy living, dedicated service, and unwavering commitment to God's Word.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>Our Core Values</h2>
          <p>The principles that guide our church community</p>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">✝️</div>
            <h3>Biblical Truth</h3>
            <p>We uphold the Bible as God's inspired, authoritative Word and the foundation of all our teachings and beliefs.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">❤️</div>
            <h3>Loving Community</h3>
            <p>We foster a welcoming environment where every person is valued, respected, and encouraged to grow in faith.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🙏</div>
            <h3>Prayer & Intercession</h3>
            <p>We believe in the power of prayer and commit to interceding for our church, community, and the world.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">✨</div>
            <h3>Spiritual Growth</h3>
            <p>We are dedicated to helping believers mature in their faith through teaching, discipleship, and personal development.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🌍</div>
            <h3>Evangelism & Outreach</h3>
            <p>We actively share the gospel message and serve our community through various outreach and benevolence programs.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Service & Discipleship</h3>
            <p>We believe in equipping believers to serve God and others with excellence, integrity, and spiritual maturity.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Join Us</h2>
          <p>Ready to connect with our church family?</p>
        </div>
        <div class="join-section">
          <div class="join-content">
            <h3>Take the Next Step</h3>
            <p>Whether you're looking for a church home, seeking spiritual growth, or simply curious about our faith community, we invite you to join us. Our doors are open to everyone, and we promise you'll experience genuine fellowship, powerful teaching, and the love of Christ.</p>
            <div class="join-buttons">
              <a href="#/contact" class="cta-button">Plan Your Visit</a>
              <a href="#/about" class="secondary-button">Learn More About Us</a>
            </div>
          </div>
          <div class="location-info">
            <h3>Location & Contact</h3>
            <p><strong>Address:</strong><br>4925 W. Market Street, Suite 1131<br>Greensboro, NC 27407</p>
            <p style="margin-top: 16px;"><strong>Phone:</strong><br>919-412-3237</p>
            <p style="margin-top: 16px;"><strong>Service Time:</strong><br>Sunday 9:00 AM</p>
          </div>
        </div>
      </div>
    </section>

    ${footer()}
  `;

  // Initialize ALL features
  setTimeout(() => {
  initAllFeatures(); // This calls all 4 init functions
  }, 0);

  return html;
} 

// ========================================
// HERO SLIDER INITIALIZATION
// ========================================
function initHeroSlider() {
  const slideshowSection = document.querySelector('.hero-slideshow');
  if (!slideshowSection) {
    console.log('Hero slider not found - skipping initialization');
    return;
  }

  let currentSlide = 0;
  let slideInterval;
  const totalSlides = 3;
  const SLIDE_DURATION = 4000; // 8 seconds per slide (increased from 6)
  let isTransitioning = false; // Prevent rapid clicking

  const updateSlide = function() {
    if (isTransitioning) return; // Prevent overlap during transition
    
    isTransitioning = true;
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dots .dot');
    
    if (slides.length === 0) return;
    
    // Remove active from all slides
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
    });
    
    // Small delay to ensure previous slide fades out before next appears
    setTimeout(() => {
      // Add active to current slide
      slides[currentSlide].classList.add('active');
      
      // Update dots
      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
      
      // Allow transitions again after animation completes
      setTimeout(() => {
        isTransitioning = false;
      }, 200); // Match the CSS transition duration
      
    }, 100); // Small delay between transitions
  };

  const goToSlide = function(n) {
    if (isTransitioning) return;
    currentSlide = n;
    updateSlide();
    resetInterval();
  };

  const nextSlide = function() {
    if (isTransitioning) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  };

  const prevSlide = function() {
    if (isTransitioning) return;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  };

  const resetInterval = function() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
  };

  // Event listeners
  const nextBtn = document.querySelector('.slide-nav.next');
  const prevBtn = document.querySelector('.slide-nav.prev');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
      resetInterval();
    });
  }

  document.querySelectorAll('.slide-dots .dot').forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide'));
      goToSlide(slideIndex);
    });
  });

  // Initialize
  updateSlide();
  slideInterval = setInterval(nextSlide, SLIDE_DURATION);

  // Pause on hover
  slideshowSection.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
  });

  slideshowSection.addEventListener('mouseleave', function() {
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
  });

  console.log('✅ Hero slider initialized successfully! (8s per slide)');
}

// ========================================
// GALLERY CAROUSEL INITIALIZATION
// ========================================
function initGalleryCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dotsContainer');

  if (!track || !prevBtn || !nextBtn || !dotsContainer) {
    console.log('Gallery carousel elements not found - skipping initialization');
    return;
  }

  const slides = document.querySelectorAll('.gallery-slide');
  const totalSlides = slides.length;
  const slidesToShow = 3;
  const maxIndex = totalSlides - slidesToShow;
  let currentIndex = 0;
  let autoplayInterval;
  const AUTOPLAY_DURATION = 5000; // Auto-advance every 5 seconds

  // Create dots
  dotsContainer.innerHTML = ''; // Clear existing dots
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = 'width: 12px; height: 12px; border-radius: 50%; background: #D1D5DB; cursor: pointer; transition: all 0.3s ease;';
    if (i === 0) {
      dot.style.background = '#A21823';
      dot.style.width = '32px';
      dot.style.borderRadius = '6px';
    }
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoplay(); // Reset autoplay when user clicks
    });
    dotsContainer.appendChild(dot);
  }

  const updateCarousel = () => {
    const slideWidth = track.offsetWidth / slidesToShow;
    const offset = -(currentIndex * (slideWidth + 20));
    track.style.transform = `translateX(${offset}px)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll('div');
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.style.background = '#A21823';
        dot.style.width = '32px';
        dot.style.borderRadius = '6px';
      } else {
        dot.style.background = '#D1D5DB';
        dot.style.width = '12px';
        dot.style.borderRadius = '50%';
      }
    });

    // Update button states
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
    nextBtn.style.cursor = currentIndex === maxIndex ? 'not-allowed' : 'pointer';
  };

  const goToSlide = (index) => {
    if (index < 0 || index > maxIndex) return;
    currentIndex = index;
    updateCarousel();
  };

  const nextSlideCarousel = () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to start
    }
    updateCarousel();
  };

  const prevSlideCarousel = () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  };

  // AUTO-PLAY function
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      nextSlideCarousel();
    }, AUTOPLAY_DURATION);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  // Button event listeners
  nextBtn.addEventListener('click', () => {
    nextSlideCarousel();
    resetAutoplay(); // Reset timer when user clicks
  });

  prevBtn.addEventListener('click', () => {
    prevSlideCarousel();
    resetAutoplay(); // Reset timer when user clicks
  });

  // Hover effects
  [prevBtn, nextBtn].forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      if (this.style.opacity !== '0.5') {
        this.style.background = 'rgba(162, 24, 35, 1)';
        this.style.transform = 'translateY(-50%) scale(1.1)';
      }
    });
    btn.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(162, 24, 35, 0.9)';
      this.style.transform = 'translateY(-50%) scale(1)';
    });
  });

  // Pause autoplay on hover (desktop only)
  const carouselSection = track.closest('section');
  if (carouselSection) {
    carouselSection.addEventListener('mouseenter', () => {
      stopAutoplay();
    });
    
    carouselSection.addEventListener('mouseleave', () => {
      startAutoplay();
    });
  }

  // Initialize
  updateCarousel();
  startAutoplay(); // Start auto-playing immediately

  console.log('✅ Gallery carousel initialized successfully! (Auto-play every 5s)');
}

function initScrollAnimations() {
  // Detect if mobile for optimized animations
  const isMobile = window.innerWidth <= 768;
  
  const observerOptions = {
    threshold: isMobile ? 0.1 : 0.15, // Trigger earlier on mobile
    rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        
        // On mobile, unobserve after animation to improve performance
        if (isMobile) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observe section headers
  document.querySelectorAll('.section-header').forEach(header => {
    observer.observe(header);
  });

  // Observe cards
  document.querySelectorAll('.info-card').forEach(card => {
    observer.observe(card);
  });

  document.querySelectorAll('.value-card').forEach(card => {
    observer.observe(card);
  });

  document.querySelectorAll('.expectation-item').forEach(item => {
    observer.observe(item);
  });

  document.querySelectorAll('.mission-card').forEach(card => {
    observer.observe(card);
  });

  // Observe showcase sections
  document.querySelectorAll('.church-showcase .showcase-image').forEach(img => {
    img.classList.add('animate-fade-left');
    observer.observe(img);
  });

  document.querySelectorAll('.church-showcase .showcase-text').forEach(text => {
    text.classList.add('animate-fade-right');
    observer.observe(text);
  });

  // Observe join section
  document.querySelectorAll('.join-content').forEach(content => {
    content.classList.add('animate-fade-left');
    observer.observe(content);
  });

  document.querySelectorAll('.location-info').forEach(info => {
    info.classList.add('animate-fade-right');
    observer.observe(info);
  });

  console.log(`✅ Scroll animations initialized successfully! (${isMobile ? 'Mobile' : 'Desktop'} mode)`);
}

// ========================================
// RESPONSIVE HANDLER - Optimize on resize
// ========================================
function initResponsiveHandler() {
  let resizeTimer;
  
  window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const isMobile = window.innerWidth <= 768;
      console.log(`Screen size changed - ${isMobile ? 'Mobile' : 'Desktop'} mode`);
      
      // Re-initialize carousel to adjust layout
      if (document.getElementById('carouselTrack')) {
        const carousel = document.querySelector('#carouselTrack').closest('section');
        if (carousel) {
          // Trigger carousel update
          const event = new Event('resize');
          window.dispatchEvent(event);
        }
      }
    }, 250);
  });
}

// ========================================
// INITIALIZE EVERYTHING
// Call this in your homePage function
// ========================================
function initAllFeatures() {
  initHeroSlider();
  initGalleryCarousel();
  initScrollAnimations();
  initResponsiveHandler();
}


// SLIDER INITIALIZATION FUNCTION
// Add this function OUTSIDE and AFTER your homePage function in main.js



function aboutPage() {
  return `
    ${header()}
    <section class="hero" style="padding: 60px 24px;">
      <div class="hero-container">
        <h2>About Us</h2>
        <p>Committed to spreading the gospel and building believers</p>
      </div>
    </section>

   <!-- Mission & Vision Section -->
    <section style="padding: 80px 20px; background: linear-gradient(to bottom, #F5F7FA 0%, #FFFFFF 100%);">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px;">
                <div style="background: #FFFFFF; padding: 40px 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; border-top: 4px solid #A21823; animation: fadeInUp 0.8s ease;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #A21823 0%, #C14147 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 28px;">🎯</div>
                    <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 1.8em; margin: 0 0 15px 0;">Our Mission</h3>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0;">Deeper Life Bible Church exists to spread the gospel of Jesus Christ through sound biblical teaching, holy living, and the power of the Holy Spirit. We are committed to making disciples, nurturing spiritual growth, and preparing believers for effective Christian service and eternal life with God.</p>
                </div>
                <div style="background: #FFFFFF; padding: 40px 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; border-top: 4px solid #A21823; animation: fadeInUp 0.8s ease;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #A21823 0%, #C14147 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 28px;">👁️</div>
                    <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 1.8em; margin: 0 0 15px 0;">Our Vision</h3>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0;">To raise a people who are deeply rooted in God's Word, transformed in character, and committed to living a Christ-centered life. We seek to impact individuals, families, and communities by promoting righteousness, spiritual discipline, and faithful obedience to God.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Beliefs Section -->
    <section style="padding: 80px 20px; background: linear-gradient(135deg, #031E79 0%, #021D78 100%); color: #FFFFFF;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <h2 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; text-align: center; font-size: 2.5em; margin: 0 0 20px 0; animation: fadeInDown 0.8s ease;">What We Believe</h2>
            <p style="text-align: center; font-size: 1.1em; margin: 0 auto 50px auto; opacity: 0.9; max-width: 700px;">Deeper Life Bible Church holds firmly to biblical, evangelical Christian doctrines that emphasize personal holiness, spiritual growth, and a life fully surrendered to God.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 40px;">
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>The divine inspiration and authority of the Holy Bible</div>
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>Salvation through repentance and faith in Jesus Christ</div>
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>Sanctification as a definite, second work of grace</div>
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>The baptism of the Holy Spirit</div>
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>Holy living and separation from sin</div>
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>The second coming of Jesus Christ</div>
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>Resurrection of the dead and final judgment</div>
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; border-left: 4px solid #A21823; transition: all 0.3s ease; animation: fadeInUp 0.8s ease;"><span style="margin-right: 10px; color: #A21823; font-weight: bold; font-size: 1.2em;">✓</span>Eternal life for the redeemed and eternal punishment for the unrepentant</div>
            </div>
        </div>
    </section>

    <!-- History Section -->
    <section style="padding: 80px 20px; background: #FFFFFF;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <h2 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; text-align: center; font-size: 2.5em; margin: 0 0 40px 0; animation: fadeInDown 0.8s ease;">Our Story</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; margin-top: 40px;">
                <div style="animation: fadeInLeft 0.8s ease;">
                    <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 2em; margin: 0 0 20px 0;">A Brief History</h3>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0 0 15px 0;">Deeper Life Bible Church, Greensboro, is part of the global Deeper Christian Life Ministry founded by Pastor W. F. Kumuyi. The Greensboro church was established to serve believers in the local community by providing sound biblical teaching, prayer, and fellowship.</p>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0;">Over the years, the church has grown into a welcoming spiritual home for people of different backgrounds who desire a deeper walk with God.</p>
                </div>
                <div style="background: linear-gradient(135deg, #F5F7FA 0%, #e9ecef 100%); padding: 30px; border-radius: 12px; border-left: 5px solid #A21823; margin-top: 30px; animation: fadeInRight 0.8s ease;">
                    <h4 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 1.5em; margin: 0 0 15px 0;">What Makes Us Unique</h4>
                    <ul style="list-style: none; padding-left: 0; margin: 0;">
                        <li style="padding: 10px 0; padding-left: 30px; position: relative; color: #6B7280;"><span style="position: absolute; left: 0; color: #A21823; font-weight: bold;">→</span>In-depth Bible teaching and practical application of Scripture</li>
                        <li style="padding: 10px 0; padding-left: 30px; position: relative; color: #6B7280;"><span style="position: absolute; left: 0; color: #A21823; font-weight: bold;">→</span>Prayer, holiness, and personal spiritual discipline</li>
                        <li style="padding: 10px 0; padding-left: 30px; position: relative; color: #6B7280;"><span style="position: absolute; left: 0; color: #A21823; font-weight: bold;">→</span>Strong youth, campus, and young adult ministries</li>
                        <li style="padding: 10px 0; padding-left: 30px; position: relative; color: #6B7280;"><span style="position: absolute; left: 0; color: #A21823; font-weight: bold;">→</span>Community outreach and evangelism</li>
                        <li style="padding: 10px 0; padding-left: 30px; position: relative; color: #6B7280;"><span style="position: absolute; left: 0; color: #A21823; font-weight: bold;">→</span>A warm, multicultural fellowship that reflects unity in Christ</li>
                    </ul>
                    <p style="margin-top: 20px; font-style: italic; color: #6B7280;">The Greensboro location uniquely serves students, families, and professionals in the area, creating a supportive environment for spiritual development while encouraging members to live out their faith in everyday life.</p>
                </div>
            </div>
        </div>
    </section>

    <!--Pastor Section -->
       <section style="padding: 80px 20px; background: linear-gradient(to bottom, #F5F7FA 0%, #FFFFFF 100%);">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <h2 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; text-align: center; font-size: 2.5em; margin: 0 0 40px 0;">Meet Our General Supritendent</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 50px; margin-top: 40px; margin-bottom: 60px; align-items: start;">
    <div style="width: 100%; aspect-ratio: 3/4; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); animation: fadeInLeft 0.8s ease;">
        <img src="/btm1-1.jpg" alt="Pastor Samuel Olaoye" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
    </div>
    <div style="animation: fadeInRight 0.8s ease;">
        <div style="color: #A21823; font-size: 1.1em; font-weight: 600; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">A Math Professor Is Called to Preach!</div>
        <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 2.2em; margin: 0 0 20px 0;">Pastor W. F. Kumuyi</h3>
        <p style="color: #6B7280; line-height: 1.8; margin: 0 0 15px 0;">In 1973, while serving as a Math Lecturer at The University of Lagos, W.F. Kumuyi started a Bible study group with 15 university students who had come to him requesting training in the Scriptures. By the early 1980s that small group had grown to several thousand, at which time Deeper Life Bible Church was formally established.</p>
        <p style="color: #6B7280; line-height: 1.8; margin: 0 0 15px 0;">Pastor W.F. Kumuyi is the founder and General Superintendent of Deeper Life Bible Church worldwide, not in Raleigh, North Carolina. He started the Deeper Christian Life Ministry in 1973 while teaching mathematics at the University of Lagos. The church became the Deeper Life Bible Church in 1982. Kumuyi is known for his clear, simple, and profound Bible-based sermons. He’s also written several Christian books and devotionals. Kumuyi’s ministry has reached millions of people in Africa and around the world. His followers call him “the man of God.”</p>
        
    </div>
</div>

    </section>
    
        <!--Pastor Section -->

         <section style="padding: 80px 20px; background: linear-gradient(to bottom, #F5F7FA 0%, #FFFFFF 100%);">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <h2 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; text-align: center; font-size: 2.5em; margin: 0 0 40px 0;">Meet Our Resident Pastor</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 50px; margin-top: 40px; margin-bottom: 60px; align-items: start;">
    <div style="width: 100%; aspect-ratio: 3/4; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); animation: fadeInLeft 0.8s ease;">
        <img src="/church 7.jpg" alt="Pastor Samuel Olaoye" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
    </div>
    <div style="animation: fadeInRight 0.8s ease;">
        <div style="color: #A21823; font-size: 1.1em; font-weight: 600; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Resident Pastor</div>
        <h3 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 2.2em; margin: 0 0 20px 0;">Pastor Samuel Olaoye</h3>
        <p style="color: #6B7280; line-height: 1.8; margin: 0 0 15px 0;">Pastor Samuel Olaoye is a minister of the gospel committed to the faithful teaching of the Word of God and the promotion of biblical holiness. He serves with reverence for the Holy Scriptures and a sincere desire to live and teach the truth of God's Word.</p>
        <p style="color: #6B7280; line-height: 1.8; margin: 0 0 15px 0;">Pastor Olaoye's call to the ministry is rooted in a conviction that the Word of God must govern belief, conduct, and service. He believes that Christian ministry should be carried out in humility, prayer, obedience, and submission to church leadership.</p>
        <p style="color: #6B7280; line-height: 1.8; margin: 0;">As a Resident Pastor, he serves in preaching, teaching, pastoral care, discipleship, and the spiritual nurture of the congregation.</p>
    </div>
</div>



            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px;">
                <div style="background: #FFFFFF; padding: 35px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); border-left: 4px solid #A21823; animation: fadeInUp 0.8s ease; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                    <h4 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 1.6em; margin: 0 0 20px 0;">Doctrinal Stand</h4>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0 0 12px 0;">Pastor Olaoye believes the Bible to be the inspired and authoritative Word of God and the final rule for faith and Christian living. He upholds the fundamental doctrines of the Christian faith as taught in the Holy Scriptures.</p>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0 0 12px 0;"><strong>He believes and teaches:</strong></p>
                    <ul style="list-style: none; padding-left: 0; margin: 15px 0 0 0;">
                        <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #6B7280; line-height: 1.7;"><span style="position: absolute; left: 8px; color: #A21823; font-weight: bold; font-size: 1.3em;">•</span>One God - Father, Son, and Holy Spirit</li>
                        <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #6B7280; line-height: 1.7;"><span style="position: absolute; left: 8px; color: #A21823; font-weight: bold; font-size: 1.3em;">•</span>The deity and humanity of Jesus Christ, His virgin birth, atoning death, resurrection, ascension, and second coming</li>
                        <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #6B7280; line-height: 1.7;"><span style="position: absolute; left: 8px; color: #A21823; font-weight: bold; font-size: 1.3em;">•</span>Salvation by grace through faith, evidenced by repentance and a changed life</li>
                        <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #6B7280; line-height: 1.7;"><span style="position: absolute; left: 8px; color: #A21823; font-weight: bold; font-size: 1.3em;">•</span>Entire sanctification as a definite work of grace</li>
                        <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #6B7280; line-height: 1.7;"><span style="position: absolute; left: 8px; color: #A21823; font-weight: bold; font-size: 1.3em;">•</span>Holiness of heart and life</li>
                        <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #6B7280; line-height: 1.7;"><span style="position: absolute; left: 8px; color: #A21823; font-weight: bold; font-size: 1.3em;">•</span>Victorious Christian living through the fullness of the Holy Spirit</li>
                        <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #6B7280; line-height: 1.7;"><span style="position: absolute; left: 8px; color: #A21823; font-weight: bold; font-size: 1.3em;">•</span>Heaven and hell, eternal judgment, and readiness for Christ's return</li>
                    </ul>
                </div>

                <div style="background: #FFFFFF; padding: 35px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); border-left: 4px solid #A21823; animation: fadeInUp 0.8s ease; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                    <h4 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 1.6em; margin: 0 0 20px 0;">Education & Preparation</h4>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0 0 12px 0;">Pastor Olaoye holds an Associate Degree in Theology from The Sure Foundation Theological Institute, Florida and a Bachelor of Science degree in Agriculture.</p>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0 0 12px 0;">He also received a Bachelor Degree in Theology through correspondence Bible studies.</p>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0;">His preparation for ministry includes biblical instruction, disciplined personal devotion, and practical church service.</p>
                </div>

                <div style="background: #FFFFFF; padding: 35px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); border-left: 4px solid #A21823; animation: fadeInUp 0.8s ease; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                    <h4 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 1.6em; margin: 0 0 20px 0;">Christian Testimony</h4>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0 0 12px 0;">Pastor Olaoye experienced a genuine inward conversion in his teenage years nearly five decades ago that brought a clear break with the former life and produced a desire for righteousness, obedience, and fellowship with God.</p>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0;">His Christian walk continues in prayer, study of the Scriptures, and faithfulness to the truth.</p>
                </div>

                <div style="background: #FFFFFF; padding: 35px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); border-left: 4px solid #A21823; animation: fadeInUp 0.8s ease; transition: transform 0.3s ease, box-shadow 0.3s ease;">
                    <h4 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 1.6em; margin: 0 0 20px 0;">Family</h4>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0 0 12px 0;">Pastor Samuel Olaoye is married to Grace Olaoye, and they are blessed with children.</p>
                    <p style="color: #6B7280; line-height: 1.8; margin: 0;">He believes the family is ordained by God and that faithfulness in the home is essential to faithful Christian service.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>What We Believe at DLBC</h2>
        </div>
        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">✝️</div>
            <h3>The Bible</h3>
            <p>We believe the Bible is the inspired and infallible Word of God, our final authority for faith and practice.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">🙌</div>
            <h3>Salvation</h3>
            <p>We believe salvation is by grace through faith in Jesus Christ alone, available to all who believe.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">✨</div>
            <h3>The Holy Spirit</h3>
            <p>We believe in the baptism of the Holy Spirit and the manifestation of spiritual gifts in believers' lives.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">⛪</div>
            <h3>The Church</h3>
            <p>We believe in the church as the body of Christ, called to worship, fellowship, and reach the lost.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">🌟</div>
            <h3>Holiness</h3>
            <p>We believe in living a holy life, separated from sin and dedicated to righteousness and godliness.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">👑</div>
            <h3>Second Coming</h3>
            <p>We believe in the personal, imminent return of Jesus Christ to establish His eternal kingdom.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>The Deeper Life Bible Church journey in Greensboro</h2>
          <p></p>
        </div>
        <div style="max-width: 900px; margin: 0 auto;">
          <p style="font-size: 18px; line-height: 1.8; color: var(--text-gray); text-align: center; margin-bottom: 24px;">
            Deeper Life Bible Church Greensboro is part of the worldwide Deeper Christian Life Ministry,
            founded with a vision to impact North Carolina with the transformative power of the Gospel.
            Since our establishment, we have been committed to raising a generation of believers who are
            passionate about God, grounded in His Word, and dedicated to holy living.
          </p>
          <p style="font-size: 18px; line-height: 1.8; color: var(--text-gray); text-align: center;">
            Our church family continues to grow as we reach out to the Greensboro community and beyond,
            offering hope, healing, and spiritual nourishment through Jesus Christ.
          </p>
        </div>
      </div>
    </section>
    ${footer()}
  `
}

function ministriesPage() {
  return `
    ${header()}
    <section class="hero" style="padding: 60px 24px;">
      <div class="hero-container">
        <h2>Our Ministries</h2>
        <p>Serving God and building His kingdom together</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Get Involved</h2>
          <p>Find your place to serve and grow in faith</p>
        </div>
        <div class="ministries-grid">
          <div class="ministry-card">
            <div class="ministry-icon">🎵</div>
            <h3>Choir Ministry</h3>
            <p>Lead the congregation in worship through song and music. Join us in lifting voices in praise to God.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">🌟</div>
            <h3>Youth Ministry</h3>
            <p>Empowering the next generation with biblical truth, mentorship, and activities that build strong faith.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">👶</div>
            <h3>Children's Church</h3>
            <p>Creating a safe, fun environment where children learn about Jesus through age-appropriate lessons and activities.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">👩</div>
            <h3>Women of Faith</h3>
            <p>Building godly women through fellowship, prayer, Bible study, and mutual encouragement in faith.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">👨</div>
            <h3>Men Fellowship</h3>
            <p>Strengthening men to be spiritual leaders in their homes, church, and community through discipleship.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">📢</div>
            <h3>Evangelism Team</h3>
            <p>Reaching the lost with the gospel message through outreach programs, soul-winning, and community service.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">🙏</div>
            <h3>Prayer Ministry</h3>
            <p>Interceding for the church, community, and world through organized prayer meetings and prayer chains.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">🎓</div>
            <h3>Bible Study</h3>
            <p>Deepening understanding of God's Word through structured teaching and group discussions.</p>
          </div>
          <div class="ministry-card">
            <div class="ministry-icon">🎤</div>
            <h3>Media Ministry</h3>
            <p>Supporting worship services through audio, video, livestreaming, and technical production excellence.</p>
          </div>
        </div>
      </div>
    </section>
    ${footer()}
  `
}

function sermonsPage() {
  return `
    ${header()}
    <section class="hero" style="padding: 60px 24px;">
      <div class="hero-container">
        <h2>Sermons & Teachings</h2>
        <p>Grow in faith through powerful biblical messages</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Recent Messages</h2>
          <p>Watch or listen to our latest sermons</p>
        </div>
        <div class="content-grid">
          <div class="content-card">
            <div class="content-thumbnail">🎥</div>
            <div class="content-body">
              <h3>Walking in Divine Purpose</h3>
              <div class="content-meta">Sunday Service • Nov 10, 2024</div>
              <p>Discover God's unique calling for your life and learn to walk in alignment with His divine purpose.</p>
              <a href="#" class="content-link">Watch Now →</a>
            </div>
          </div>
          <div class="content-card">
            <div class="content-thumbnail">🎥</div>
            <div class="content-body">
              <h3>The Power of Faith</h3>
              <div class="content-meta">Sunday Service • Nov 3, 2024</div>
              <p>Understanding how faith moves mountains and transforms impossible situations into testimonies.</p>
              <a href="#" class="content-link">Watch Now →</a>
            </div>
          </div>
          <div class="content-card">
            <div class="content-thumbnail">🎥</div>
            <div class="content-body">
              <h3>Living a Holy Life</h3>
              <div class="content-meta">Sunday Service • Oct 27, 2024</div>
              <p>Practical steps to maintaining holiness in an unholy world and pleasing God in all we do.</p>
              <a href="#" class="content-link">Watch Now →</a>
            </div>
          </div>
          <div class="content-card">
            <div class="content-thumbnail">🎵</div>
            <div class="content-body">
              <h3>Prayer That Moves God</h3>
              <div class="content-meta">Audio • Oct 20, 2024</div>
              <p>Learn the principles of effective prayer and how to develop a vibrant prayer life.</p>
              <a href="#" class="content-link">Listen Now →</a>
            </div>
          </div>
          <div class="content-card">
            <div class="content-thumbnail">🎵</div>
            <div class="content-body">
              <h3>Overcoming Temptation</h3>
              <div class="content-meta">Audio • Oct 13, 2024</div>
              <p>Biblical strategies for resisting temptation and walking in victory over sin.</p>
              <a href="#" class="content-link">Listen Now →</a>
            </div>
          </div>
          <div class="content-card">
            <div class="content-thumbnail">🎥</div>
            <div class="content-body">
              <h3>The Blessing of Obedience</h3>
              <div class="content-meta">Sunday Service • Oct 6, 2024</div>
              <p>Exploring the rewards and blessings that come from obedience to God's Word and His commands.</p>
              <a href="#" class="content-link">Watch Now →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>Sermon Series</h2>
          <p>Explore our teaching series</p>
        </div>
        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">📚</div>
            <h3>Faith That Works</h3>
            <p>A comprehensive study on living out authentic faith in daily life and circumstances.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">✨</div>
            <h3>Kingdom Living</h3>
            <p>Understanding and embracing the principles of God's kingdom in our everyday walk.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">💪</div>
            <h3>Spiritual Warfare</h3>
            <p>Equipping believers with knowledge and tools for victorious spiritual battles.</p>
          </div>
        </div>
      </div>
    </section>
    ${footer()}
  `
}

function eventsPage() {
  return `
    ${header()}
    <section class="hero" style="padding: 60px 24px;">
      <div class="hero-container">
        <h2>Church Events</h2>
        <p>Join us for upcoming programs and special services</p>
      </div>
    </section>

    <
    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>Regular Programs</h2>
          <p>Weekly gatherings for spiritual growth</p>
        </div>
        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">☀️</div>
            <h3>Sunday Worship Services </h3>
            <p><strong>Every Sunday at 9:00 AM EST </strong><br>Our main service featuring worship, prayer, and biblical teaching for the whole family.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">📖</div>
            <h3>Thursday Bible Study</h3>
            <p><strong>6:30 PM EST</strong><br>In-depth study of Scripture to strengthen your biblical knowledge and understanding.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">🙏</div>
            <h3>Friday Revival & Evangelism Training Service</h3>
            <p><strong>7:00 PM EST (Except Fridays)</strong><br>Corporate prayer gathering for intercession, thanksgiving, and seeking God's face together.</p>
          </div>
        </div>
      </div>
    </section>
        <!-- GALLERY SECTION -->
<section class="section section-light" style="padding: 80px 20px; background: linear-gradient(to bottom, #F5F7FA 0%, #FFFFFF 100%);">
  <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <div class="section-header" style="text-align: center; margin-bottom: 50px;">
      <h2 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 2.5em; margin: 0 0 20px 0;">Church Gallery</h2>
      <p style="color: #6B7280; font-size: 1.1em; max-width: 700px; margin: 0 auto 10px auto; line-height: 1.6;">Glimpses of faith in action - witness the joy, worship, and fellowship that define our church family</p>
      <p style="color: #A21823; font-weight: 600; font-size: 1em;">Capturing moments of worship, fellowship, and community service</p>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 40px;">
      
      <!-- Gallery Item 1 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/church 1.jpg" alt="Sunday Worship Service" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Sunday Worship Service</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Celebrating God's presence together</p>
        </div>
      </div>

      <!-- Gallery Item 2 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/church 7.jpg" alt="Youth Bible Study" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Youth Bible Study</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Growing the next generation of believers</p>
        </div>
      </div>

      <!-- Gallery Item 3 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/church 3.jpg" alt="Prayer Meeting" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Prayer Meeting</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">United in prayer and intercession</p>
        </div>
      </div>

      <!-- Gallery Item 4 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/church 4.jpg" alt="Fellowship Gathering" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Fellowship Gathering</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Building community through fellowship</p>
        </div>
      </div>

      <!-- Gallery Item 5 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/greens picture 1.jpg" alt="Community Outreach" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Community Outreach</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Serving our community with love</p>
        </div>
      </div>

      <!-- Gallery Item 6 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/greens picture 2.jpg" alt="Special Event" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Special Event</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Celebrating milestones together</p>
        </div>
      </div>

      <!-- Gallery Item 4 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/church 7.jpg" alt="Fellowship Gathering" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Fellowship Gathering</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Building community through fellowship</p>
        </div>
      </div>

      <!-- Gallery Item 5 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/greens picture 4.jpg" alt="Community Outreach" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Community Outreach</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Serving our community with love</p>
        </div>
      </div>

      <!-- Gallery Item 6 -->
      <div class="gallery-item" style="position: relative; height: 300px; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <img src="/CAMPUS PROGRAM 2.jpg" alt="Special Event" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
        <div class="gallery-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(1, 18, 74, 0.9), transparent); padding: 20px; transform: translateY(100%); transition: transform 0.3s ease;">
          <h4 style="font-family: 'Playfair Display', serif; color: #FFFFFF; margin: 0 0 5px 0; font-size: 1.3em;">Special Event</h4>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 0.95em;">Celebrating milestones together</p>
        </div>
      </div>

    </div>

    <!-- View More Button -->
    <div style="text-align: center; margin-top: 30px;">
      <a href="#/" class="secondary-button" style="display: inline-block; background: transparent; color: #031E79; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-size: 1.1em; font-weight: 600; border: 2px solid #031E79; transition: all 0.3s ease;">
        View Full Gallery
      </a>
    </div>
  </div>
</section>


<!-- VIDEO SECTION -->
<section class="section" style="padding: 80px 20px; background: #FFFFFF;">
  <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <div class="section-header" style="text-align: center; margin-bottom: 50px;">
      <h2 style="font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; color: #031E79; font-size: 2.5em; margin: 0 0 20px 0;">Watch Our Services & Events</h2>
      <p style="color: #6B7280; font-size: 1.1em; max-width: 700px; margin: 0 auto 10px auto; line-height: 1.6;">Experience powerful worship and inspiring messages from our recent services</p>
      <p style="color: #A21823; font-weight: 600; font-size: 1em;">Relive precious moments of worship, testimony, and spiritual growth</p>
    </div>

    <!-- Video Grid -->
    <div class="video-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px; margin-bottom: 40px;">
      
      <!-- Video Item 1 -->
      <div class="video-item" style="background: #FFFFFF; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div class="video-thumbnail" style="position: relative; width: 100%; padding-top: 56.25%; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); overflow: hidden;">
          <!-- Replace this with your actual video embed or thumbnail -->
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%;">
            <div style="width: 80px; height: 80px; background: rgba(162, 24, 35, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; cursor: pointer; transition: transform 0.3s ease;">
              <span style="color: #FFFFFF; font-size: 30px; margin-left: 5px;">▶</span>
            </div>
            <p style="color: #6B7280; margin: 0; font-size: 0.9em;">Click to watch</p>
          </div>
          <!-- For actual YouTube video, use iframe:
          <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
          -->
        </div>
        <div class="video-info" style="padding: 20px;">
          <h4 style="font-family: 'Playfair Display', serif; color: #031E79; margin: 0 0 10px 0; font-size: 1.3em; line-height: 1.3;">Sunday Worship Service</h4>
          <p style="color: #6B7280; margin: 0 0 10px 0; font-size: 0.95em; line-height: 1.5;">Experience powerful worship and life-changing messages from our recent Sunday service.</p>
          <div style="display: flex; align-items: center; gap: 15px; color: #A21823; font-size: 0.9em;">
            <span>📅 Jan 1, 2026</span>
            <span>⏱️ 2:30:00</span>
          </div>
        </div>
      </div>

      <!-- Video Item 2 -->
      <div class="video-item" style="background: #FFFFFF; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div class="video-thumbnail" style="position: relative; width: 100%; padding-top: 56.25%; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); overflow: hidden;">
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%;">
            <div style="width: 80px; height: 80px; background: rgba(162, 24, 35, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; cursor: pointer; transition: transform 0.3s ease;">
              <span style="color: #FFFFFF; font-size: 30px; margin-left: 5px;">▶</span>
            </div>
            <p style="color: #6B7280; margin: 0; font-size: 0.9em;">Click to watch</p>
          </div>
        </div>
        <div class="video-info" style="padding: 20px;">
          <h4 style="font-family: 'Playfair Display', serif; color: #031E79; margin: 0 0 10px 0; font-size: 1.3em; line-height: 1.3;">Youth Ministry Event</h4>
          <p style="color: #6B7280; margin: 0 0 10px 0; font-size: 0.95em; line-height: 1.5;">Highlights from our youth ministry gathering filled with worship, teaching, and fellowship.</p>
          <div style="display: flex; align-items: center; gap: 15px; color: #A21823; font-size: 0.9em;">
            <span>📅 Dec 25, 2025</span>
            <span>⏱️ 1:45:00</span>
          </div>
        </div>
      </div>

      <!-- Video Item 3 -->
      <div class="video-item" style="background: #FFFFFF; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div class="video-thumbnail" style="position: relative; width: 100%; padding-top: 56.25%; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); overflow: hidden;">
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%;">
            <div style="width: 80px; height: 80px; background: rgba(162, 24, 35, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; cursor: pointer; transition: transform 0.3s ease;">
              <span style="color: #FFFFFF; font-size: 30px; margin-left: 5px;">▶</span>
            </div>
            <p style="color: #6B7280; margin: 0; font-size: 0.9em;">Click to watch</p>
          </div>
        </div>
        <div class="video-info" style="padding: 20px;">
          <h4 style="font-family: 'Playfair Display', serif; color: #031E79; margin: 0 0 10px 0; font-size: 1.3em; line-height: 1.3;">Special Prayer Meeting</h4>
          <p style="color: #6B7280; margin: 0 0 10px 0; font-size: 0.95em; line-height: 1.5;">Join us in corporate prayer and intercession as we seek God's face together.</p>
          <div style="display: flex; align-items: center; gap: 15px; color: #A21823; font-size: 0.9em;">
            <span>📅 Dec 20, 2025</span>
            <span>⏱️ 1:15:00</span>
          </div>
        </div>
      </div>

      <!-- Video Item 4 -->
      <div class="video-item" style="background: #FFFFFF; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div class="video-thumbnail" style="position: relative; width: 100%; padding-top: 56.25%; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); overflow: hidden;">
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%;">
            <div style="width: 80px; height: 80px; background: rgba(162, 24, 35, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; cursor: pointer; transition: transform 0.3s ease;">
              <span style="color: #FFFFFF; font-size: 30px; margin-left: 5px;">▶</span>
            </div>
            <p style="color: #6B7280; margin: 0; font-size: 0.9em;">Click to watch</p>
          </div>
        </div>
        <div class="video-info" style="padding: 20px;">
          <h4 style="font-family: 'Playfair Display', serif; color: #031E79; margin: 0 0 10px 0; font-size: 1.3em; line-height: 1.3;">Christmas Celebration</h4>
          <p style="color: #6B7280; margin: 0 0 10px 0; font-size: 0.95em; line-height: 1.5;">Celebrating the birth of our Savior with joyful worship and testimonies of God's goodness.</p>
          <div style="display: flex; align-items: center; gap: 15px; color: #A21823; font-size: 0.9em;">
            <span>📅 Dec 15, 2025</span>
            <span>⏱️ 2:00:00</span>
          </div>
        </div>
      </div>

      <!-- Video Item 5 -->
      <div class="video-item" style="background: #FFFFFF; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div class="video-thumbnail" style="position: relative; width: 100%; padding-top: 56.25%; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); overflow: hidden;">
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%;">
            <div style="width: 80px; height: 80px; background: rgba(162, 24, 35, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; cursor: pointer; transition: transform 0.3s ease;">
              <span style="color: #FFFFFF; font-size: 30px; margin-left: 5px;">▶</span>
            </div>
            <p style="color: #6B7280; margin: 0; font-size: 0.9em;">Click to watch</p>
          </div>
        </div>
        <div class="video-info" style="padding: 20px;">
          <h4 style="font-family: 'Playfair Display', serif; color: #031E79; margin: 0 0 10px 0; font-size: 1.3em; line-height: 1.3;">Community Outreach</h4>
          <p style="color: #6B7280; margin: 0 0 10px 0; font-size: 0.95em; line-height: 1.5;">Watch how our church serves the community through love and compassion in action.</p>
          <div style="display: flex; align-items: center; gap: 15px; color: #A21823; font-size: 0.9em;">
            <span>📅 Dec 10, 2025</span>
            <span>⏱️ 45:00</span>
          </div>
        </div>
      </div>

      <!-- Video Item 6 -->
      <div class="video-item" style="background: #FFFFFF; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div class="video-thumbnail" style="position: relative; width: 100%; padding-top: 56.25%; background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%); overflow: hidden;">
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%;">
            <div style="width: 80px; height: 80px; background: rgba(162, 24, 35, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; cursor: pointer; transition: transform 0.3s ease;">
              <span style="color: #FFFFFF; font-size: 30px; margin-left: 5px;">▶</span>
            </div>
            <p style="color: #6B7280; margin: 0; font-size: 0.9em;">Click to watch</p>
          </div>
        </div>
        <div class="video-info" style="padding: 20px;">
          <h4 style="font-family: 'Playfair Display', serif; color: #031E79; margin: 0 0 10px 0; font-size: 1.3em; line-height: 1.3;">Testimony Night</h4>
          <p style="color: #6B7280; margin: 0 0 10px 0; font-size: 0.95em; line-height: 1.5;">Hear powerful testimonies of God's faithfulness and transformative power in believers' lives.</p>
          <div style="display: flex; align-items: center; gap: 15px; color: #A21823; font-size: 0.9em;">
            <span>📅 Dec 5, 2025</span>
            <span>⏱️ 1:30:00</span>
          </div>
        </div>
      </div>

    </div>

    <!-- View More Button -->
    <div style="text-align: center; margin-top: 30px;">
      <a href="#/sermons" class="cta-button" style="display: inline-block; background: #A21823; color: #FFFFFF; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-size: 1.1em; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(162, 24, 35, 0.4);">
        Watch More Videos
      </a>
    </div>
  </div>
</section>



<section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Upcoming Events</h2>
          <p>Mark your calendar and be part of these special gatherings</p>
        </div>
        <div class="events-list">
          <div class="event-card">
            <div class="event-date">
              <div class="day">24</div>
              <div class="month">NOV</div>
            </div>
            <div class="event-info">
              <h3>Sunday Worship Service</h3>
              <p><strong>Time:</strong> 9:00 AM - 12:00 PM<br>
              <strong>Location:</strong> 4925 W. Market Street, Suite 1131, Greensboro, NC<br>
              Join us for powerful worship, prayer, and life-changing messages from God's Word.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <div class="day">01</div>
              <div class="month">DEC</div>
            </div>
            <div class="event-info">
              <h3>Sunday Worship Service</h3>
              <p><strong>Time:</strong> 9:00 AM - 12:00 PM<br>
              <strong>Location:</strong> 4925 W. Market Street, Suite 1131, Greensboro, NC<br>
              Start the month with thanksgiving and praise as we gather in God's presence.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <div class="day">08</div>
              <div class="month">DEC</div>
            </div>
            <div class="event-info">
              <h3>Sunday Worship Service</h3>
              <p><strong>Time:</strong> 9:00 AM - 12:00 PM<br>
              <strong>Location:</strong> 4925 W. Market Street, Suite 1131, Greensboro, NC<br>
              Experience authentic worship and fellowship with the body of Christ.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <div class="day">15</div>
              <div class="month">DEC</div>
            </div>
            <div class="event-info">
              <h3>Sunday Worship Service</h3>
              <p><strong>Time:</strong> 9:00 AM - 12:00 PM<br>
              <strong>Location:</strong> 4925 W. Market Street, Suite 1131, Greensboro, NC<br>
              Come and be refreshed in the presence of the Lord through worship and the Word.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <div class="day">25</div>
              <div class="month">DEC</div>
            </div>
            <div class="event-info">
              <h3>Christmas Celebration Service</h3>
              <p><strong>Time:</strong> 9:00 AM - 12:00 PM<br>
              <strong>Location:</strong> 4925 W. Market Street, Suite 1131, Greensboro, NC<br>
              Join us for a special Christmas service celebrating the birth of our Savior, Jesus Christ.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


<style>
  /* Gallery Hover Effects */
  .gallery-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .gallery-item:hover img {
    transform: scale(1.1);
  }

  .gallery-item:hover .gallery-overlay {
    transform: translateY(0);
  }

  /* Video Hover Effects */
  .video-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .video-thumbnail:hover > div > div {
    transform: scale(1.1);
    background: rgba(193, 65, 71, 0.9);
  }

  /* Button Hover Effects */
  .secondary-button:hover {
    background: #031E79;
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(3, 30, 121, 0.3);
  }

  .cta-button:hover {
    background: #C14147;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(162, 24, 35, 0.6);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
      gap: 15px !important;
    }

    .gallery-item {
      height: 250px !important;
    }

    .video-grid {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }

    .section-header h2 {
      font-size: 2em !important;
    }

    .section-header p {
      font-size: 1em !important;
    }
  }

  @media (max-width: 480px) {
    .gallery-grid {
      grid-template-columns: 1fr !important;
    }

    .gallery-item {
      height: 250px !important;
    }

    .gallery-overlay h4 {
      font-size: 1.1em !important;
    }

    .video-info h4 {
      font-size: 1.1em !important;
    }

    .section-header h2 {
      font-size: 1.8em !important;
    }
  }
</style>

<script>
  // Optional: Add lightbox functionality for gallery images
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      // Add your lightbox/modal code here
      console.log('Gallery item clicked');
      // You can integrate a lightbox library or create a custom modal
    });
  });

  // Optional: Video play tracking
  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', function() {
      console.log('Video clicked');
      // Add video play functionality here
    });
  });
</script>

    ${footer()}
  `
}

function contactPage() {
  return `
    ${header()}
    <section class="hero" style="padding: 60px 24px;">
      <div class="hero-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-section">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h3>Visit Us</h3>
                <p>4925 W. Market Street<br>Suite 1131<br>Greensboro, NC 27407</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-details">
                <h3>Call Us</h3>
                <p>919-412-3237</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-details">
                <h3>Email Us</h3>
                <p>info@dlbcgreensboro.org</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕐</div>
              <div class="contact-details">
                <h3>Service Times</h3>
                <p><strong>Sunday Worship:</strong> 9:00 AM<br>
                <strong>Bible Study:</strong> 6:30 PM Every Thursday <br>
                <strong>Prayer Meeting:</strong> Coming Soon</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <h3 style="margin-bottom: 24px; color: var(--dark-navy);">Send Us a Message</h3>
            <form onsubmit="handleSubmit(event)">
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" required placeholder="Enter your full name">
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="Enter your email">
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number">
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea required placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.567890!2d-79.8550!3d36.0726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA0JzIxLjQiTiA3OcKwNTEnMTguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
    ${footer()}
  `
}

function givingPage() {
  return `
    ${header()}
    <section class="hero" style="padding: 60px 24px;">
      <div class="hero-container">
        <h2>Give Online</h2>
        <p>Support the ministry through your generous giving</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Ways to Give</h2>
          <p>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7</p>
        </div>
        <div class="giving-options">
          <div class="giving-card">
            <div class="giving-icon">💰</div>
            <h3>Tithes</h3>
            <p>Honor God with the firstfruits of your income. Tithing is a biblical principle of giving 10% of your earnings to support God's work.</p>
            <a href="#" class="giving-btn">Give Tithe</a>
          </div>
          <div class="giving-card">
            <div class="giving-icon">🎁</div>
            <h3>Offerings</h3>
            <p>Give above and beyond your tithe to support special projects, missions, and ministry initiatives that advance the Kingdom.</p>
            <a href="#" class="giving-btn">Give Offering</a>
          </div>
          <div class="giving-card">
            <div class="giving-icon">❤️</div>
            <h3>Welfare</h3>
            <p>Support those in need within our church family and community through benevolence and welfare assistance programs.</p>
            <a href="#" class="giving-btn">Give to Welfare</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2>Other Ways to Give</h2>
        </div>
        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">🏦</div>
            <h3>Bank Transfer</h3>
            <p>You can send your tithes and offerings directly to the church account. Contact us for banking details.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">💵</div>
            <h3>In-Person Giving</h3>
            <p>Give during Sunday service or visit the church office during business hours to make your contribution.</p>
          </div>
          <div class="info-card">
            <div class="card-icon">📱</div>
            <h3>Mobile Payment</h3>
            <p>Use popular mobile payment platforms to send your giving. Contact the church for payment details.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 32px; color: var(--dark-navy); margin-bottom: 16px;">Why We Give</h2>
          <p style="font-size: 18px; line-height: 1.8; color: var(--text-gray); margin-bottom: 24px;">
            Your generous contributions enable us to spread the Gospel, support our community,
            maintain our facilities, and carry out the mission God has entrusted to us. Every gift,
            regardless of size, makes a significant impact in advancing God's Kingdom.
          </p>
          <p style="font-size: 18px; line-height: 1.8; color: var(--text-gray);">
            Thank you for your faithful stewardship and partnership in ministry. Your giving is an
            act of worship and obedience that God sees and rewards. May the Lord bless you abundantly
            as you give cheerfully unto Him.
          </p>
        </div>
      </div>
    </section>
    ${footer()}
  `
}

window.handleSubmit = function(event) {
  event.preventDefault()
  alert('Thank you for your message! We will get back to you soon.')
  event.target.reset()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 
    - primary meta tags
  -->
  <title><%= name %></title>
  <meta name="title" content="<%= description %>">
  <meta name="description" content="Github: Claso">

  <!-- 
    - favicon
  -->
  <link rel="shortcut icon" href="<%= pfp %>" type="image/svg+xml">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="/css/style.css">

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
    rel="stylesheet">

  <!-- 
    - preload images
  -->
  <link rel="preload" as="image" href="/images/hero-banner.png">

</head>

<body>

  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo"><h1 style="color:#FFFFFF;" ><%= name %></h1>
      
      </a>

      <nav class="navbar" data-navbar>

        <div class="navbar-top">

          <a href="#" class="logo"><h2><%= name %></h2>
        
          </a>

          <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

        </div>

        <ul class="navbar-list">

          <li>
            <a href="#" class="navbar-link">Home</a>
          </li>

          <li>
            <a href="#service" class="navbar-link">Services</a>
          </li>

          <li>
            <a href="#stat" class="navbar-link">Stats</a>
          </li>

          <li>
            <a href="#feature" class="navbar-link">Features</a>
          </li>

          <li>
            <a href="/server" class="navbar-link">Server</a>
          </li>

        </ul>

      </nav>

      <div class="btn-group">
      

        <a href="<%= invite %>" class="btn btn-primary">Invite Bot</a>
      </div>

      <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

      <div class="overlay" data-overlay data-nav-toggler></div>

    </div>
  </header>





  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="hero" aria-label="home">
        <div class="container">

 <div class="hero-banner">
            <figure class="hero-banner">
              <img src="<%= pfp %>" width="799" height="823" alt="hero banner" class="w-100">
            </figure>
          </div>
          <div class="hero-content">

            <h1 class="h1 hero-title">Perfect Discord Bot</h1>

            <p class="hero-text">
              <%= description %>
            </p>

            <div class="btn-group">
              <a href="/invite" class="btn btn-primary">Invite Bot</a>

              <a href="#" class="play-btn">
                <div class="icon">
                  <ion-icon name="logo-discord" aria-hidden="true"></ion-icon>
                </div>

                <span class="span"><a href="/server">Support Server</a></span>
              </a>
            </div>

          </div>

         

        </div>
      </section>





      <!-- 
        - #PROMO
      -->

      <section class="section promo" aria-label="promo">
        <div class="container" id="service">

          <h2 class="h2 section-title text-center">What Bot Offers?</h2>

          <p class="section-text text-center">
          It was made under Discord TOS & this bot follows all the policies of Discord
          </p>

          <ul class="grid-list">

            <li>
              <div class="promo-card bg-gray">

                <div class="card-icon">
                  <ion-icon name="code-slash-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h3 card-title">Slash Command</h3>

                <p class="card-text">
                 Recently we have moved to slash command. / is used in very command of this bot
                </p>

                <a href="https://discord.com/blog/slash-commands-are-here" class="btn-link">
                  <span class="span">Explore More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="promo-card bg-gray">

                <div class="card-icon">
                  <ion-icon name="cog-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h3 card-title">Discord Buttons</h3>

                <p class="card-text">
                 To make bot more reliable we have add buttons in this bot which makes you work easier
                </p>

                <a href="https://discordjs.guide/interactions/buttons.html#building-and-sending-buttons" class="btn-link">
                  <span class="span">Explore More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="promo-card bg-gray">

                <div class="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h3 card-title">Trusted Security</h3>

                <p class="card-text">
                  All the data of the user are kept in safe place. In case to remove the data you can contact as any time
                </p>

                <a href="https://www.mongodb.com/" class="btn-link">
                  <span class="span">Explore More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #STATS
      -->

      <section class="stats" aria-label="statistics">
        <div class="container" id="stat">

          <div class="stats-content">

            <h2 class="h2 section-title">Our Bot is in all over the Worldwide Coverage</h2>

            <p class="section-text">
             Our developers worked very hard on this bot & we archive many things. Thanks to all the servers and users for using this bot
            </p>

            <p class="section-text">
             This bot was choosed by many servers they like the features of this bot. We have got many positive reviews on our bot
            </p>

            <ul class="stats-list">

              <li>
                <div class="stats-card bg-gray">

                  <h3 class="h3 card-title">150k+</h3>

                  <p class="card-text">
                    Total Users
                  </p>

                </div>
              </li>

              <li>
                <div class="stats-card bg-gray">

                  <h3 class="h3 card-title">45k</h3>

                  <p class="card-text">
                  Total Servers
                  </p>

                </div>
              </li>

              <li>
                <div class="stats-card bg-gray">

                  <h3 class="h3 card-title">16k+</h3>

                  <p class="card-text">
                    Total Votes
                  </p>

                </div>
              </li>

            </ul>

          </div>

          <figure class="stats-banner">
            <img src="/images/stats-banner.png" width="797" height="454" alt="map" class="w-100">
          </figure>

        </div>
      </section>







      <!-- 
        - #INSTRUCTION
      -->

      <section class="section instruction" aria-label="instruction">
        <div class="container" id="feature">

          <h2 class="h2 section-title text-center">Features of Bot</h2>

          <p class="section-text text-center">
           <%= name %> has many features but here are some main features of this bot.
          </p>

          <ul class="grid-list">

            <li>
              <div class="instruction-card bg-gray">

                <div class="card-icon">
                  <ion-icon name="musical-notes-sharp"></ion-icon>
                </div>

                <p class="card-text">
                <%= f1 %>
                </p>

              </div>
            </li>

            <li>
              <div class="instruction-card bg-gray">

                <div class="card-icon">
                  <ion-icon name="hammer-sharp"></ion-icon>
                </div>

                <p class="card-text">
                 <%= f2 %>
                </p>

              </div>
            </li>

            <li>
              <div class="instruction-card bg-gray">

                <div class="card-icon">
                  <ion-icon name="happy-outline"></ion-icon>
                </div>

                <p class="card-text">
                 <%= f3 %>
                </p>

              </div>
            </li>

            <li>
              <div class="instruction-card bg-gray">

                <div class="card-icon">
                  <ion-icon name="ticket-sharp"></ion-icon>
                </div>

                <p class="card-text">
                  <%= f4 %>
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>








  <!-- 
    - #FOOTER
  -->

  <footer class="footer">

  

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          Copyright Claso 2024. All rights reserved.
        </p>

        <ul class="footer-bottom-list">

          <li>
            <a href="#" class="footer-bottom-link">Support</a>
          </li>

          <li>
            <a href="#" class="footer-bottom-link">Privacy Policy</a>
          </li>

        </ul>

      </div>
    </div>

  </footer>


<!-- Github: diwasatreya -->


  <!-- 
    - custom js link
  -->
  <script src="/js/script.js" defer></script>

  <!-- 
    - ionicon-link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>



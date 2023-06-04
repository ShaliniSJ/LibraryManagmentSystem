<template>
  <head>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <header>
    <nav class="fixed-top scrolling-navbar top-nav-collapse">
      <ul>

        <li><a href="#about-us" >About</a></li>
        <li><a href="#subs">Subscriptions</a></li>
        <li><a href="#contact">Contact us</a></li>
        <li><router-link :to="{ name: 'Search' }">Search</router-link></li>
        <li><router-link :to="{ name: 'Signin' }">Signin</router-link></li>
        <!-- <li><a href="/Signin">Login</a></li> -->
      </ul>
    </nav>
  </header>
  <div>
    <div class="content">
      <h2>WORDSMITH</h2>
      <h2>WORDSMITH</h2>
    </div>
    <br><br><br><br><br>
    <div class="content">
      <h2>LIBRARY</h2>
      <h2>LIBRARY</h2>
    </div>
    <p class="line-1 anim-typewriter text-break">A Book is a gift you can open again and again. - <i>Garrison Keillor</i>
    </p>
  </div>
  <div class="wave" id="about-us">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
      class="">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"></path>
    </svg>
  </div>
  <section class="aboutus">
    <div class="aboutus-content hiddens">
      <h2><u>About Us</u></h2>
      <div class="container">
        <div class="row">
          <p>
            Inaugurated in 2005 by the visionary Dr. Abdul Kalam, Wordsmith library stands as a cherished institution
            dedicated to the pursuit of knowledge and enlightenment. Our library is a haven of inspiration, nurturing
            intellectual growth and fostering a love for learning.
            With an extensive collection of books spanning various genres, disciplines, and perspectives, we invite you
            to
            embark on a literary journey that knows no bounds. From timeless classics to contemporary masterpieces, our
            shelves hold a treasure trove of literary wonders waiting to be discovered. In addition, our digital
            resources
            provide seamless access to a world of knowledge, opening new horizons for exploration.
            <br><br>
            Beyond our vast collection, Wordsmith library is a vibrant community space that brings people together. We
            host
            an array of captivating events, thought-provoking discussions, and educational workshops, providing
            opportunities for intellectual engagement and lively exchange of ideas.
            As we honor the enduring legacy of Dr. Abdul Kalam, we invite you to join us in celebrating his vision of
            education, innovation, and lifelong learning. Step into Wordsmith library and unlock the door to a world of
            intellectual growth, discovery, and transformation. Welcome to a place where minds flourish, dreams take
            flight, and the power of knowledge shapes a brighter future.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="wave2" style="border:none; background-color: transparent;" id="subs">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
      style="border:none;">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill2"></path>
    </svg>
  </div>
  <div>
    <section class="subs hiddens">
      <div class="subs-content">
        <h2><u>Subscriptions</u></h2>
      </div>
      <div class="container" style="max-width: 85%;">
        <div class="rows">
          <div class="cards">
            <div class="contents">
              <p class="heading">&#x20B9;400 Per Year:
              </p>
              <p class="para">
                This is a premium subscription. In this subscription you can rent 10 books at a time upto 30 days. Can be
                renewed for ten days upto three times.
              </p>
              <button class="btns">Subscribe</button>
            </div>
          </div>
          <div class="cards" style="margin-left:10% ;">
            <div class="contents">
              <p class="heading">&#x20B9;70 Per Month:
              </p>
              <p class="para">
                Everyone can enjoy this subscription. In this subscriptions you can rent 5 books at a time upto 20 days.
                Can
                be renewed for ten days upto three times.
              </p>
              <button class="btns">Subscribe</button>
            </div>
          </div>
          <div class="cards" style="margin-left:10%;">
            <div class="contents">

              <p class="heading" align:center>&#x20B9;50 Per Month:
              </p>
              <p class="para">
                This is a student special subscription. This subscription is only for collage and school students. This is
                provided to students to help in their studies. Can rent 5 books at a time upto 20 days.
              </p>
              <button class="btns">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"></path>
    </svg>
  </div>
  <!-- Site footer -->
  <footer class="site-footer" id="contact">
    <div class="containers">
      <div class="rows color">
        <div class="heading" style="margin-left:70px">
          <h3>Quick Access</h3>
          <ul>
            <li><a href="#about-us">About</a></li>
            <li><a href="#subs">Subsriptions</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>
        <div class="heading" style="margin-left:250px;">
          <h3>Contact Us :</h3>
          <ul>
            <li><i class="fa-solid fa-envelope"></i><a href="mailto:"> wordsmithlibrary@gmail.com</a></li>
            <li><i class="fa-brands fa-facebook"></i><a href="https://www.facebook.com/wordsmithlibrary"> Facebook</a>
            </li>
            <li><i class="fa-brands fa-square-instagram"></i><a href="https://www.instagram.com/wordsmithlibrary/">
                Instagram</a>
            </li>
            <li><i class="fa-solid fa-phone"></i><a> +91 9561234789</a>
            </li>
            <li><i class="fa-brands fa-twitter"></i><a href="https://twitter.com/wordsmithlib">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <h4 style="background-color: #66fcf1; color:#1f2833; padding-bottom: 10px; margin-bottom: 0;">Copyrights &copy; 2023
    Wordsmith Library private limited</h4>
</template>


<style scoped src="@/assets/css/home.css"></style>
<script>
import { onMounted, ref } from 'vue';
import { RouterLink} from 'vue-router';
export default {
  setup() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shows");
        }
        else {
          entry.target.classList.remove("shows");
        }
      });
    });
    const hiddenElements = ref(null);

    onMounted(() => {
      hiddenElements.value = document.querySelectorAll(".hiddens");
      hiddenElements.value.forEach((element) => {
        observer.observe(element);
      });
    });

    return {
      hiddenElements
    };
  },
  components: { RouterLink}
};
</script>

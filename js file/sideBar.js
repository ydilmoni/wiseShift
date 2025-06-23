    // הדגשת העמוד הנוכחי
    (function highlightCurrentPage() {
      const path = location.pathname.split('/').pop();
      if (path === "" || path === "index.html") {
        document.getElementById("nav-home")?.classList.add("active");
      } else if (path === "about.html") {
        document.getElementById("nav-about")?.classList.add("active");
      } else if (path === "contact.html") {
        document.getElementById("nav-contact")?.classList.add("active");
      }
    })();

    function loadSidebar() {
      fetch('../pages/sidebar.html')
        .then(response => response.text())
        .then(html => {
          document.body.insertAdjacentHTML('afterbegin', html);
          // הגדר את הפונקציות כ־window כדי שיהיו זמינות ל־onclick
          window.openSidebar = function() {
            document.getElementById("mySidebar").classList.add("open");
            document.querySelector('.openbtn').style.display = 'none';
          };
          window.closeSidebar = function() {
            document.getElementById("mySidebar").classList.remove("open");
            document.querySelector('.openbtn').style.display = '';
          };
        });
    }
    
    // לקרוא לפונקציה כשהעמוד נטען
    window.addEventListener('DOMContentLoaded', loadSidebar);
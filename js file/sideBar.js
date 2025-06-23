  
    function openSidebar() {
      document.getElementById("mySidebar").classList.add("open");
    }
    function closeSidebar() {
      document.getElementById("mySidebar").classList.remove("open");
    }
    // הדגשת העמוד הנוכחי
    (function highlightCurrentPage() {
      const path = location.pathname.split('/').pop();
      if (path === "" || path === "index.html") {
        document.getElementById("nav-home").classList.add("active");
      } else if (path === "about.html") {
        document.getElementById("nav-about").classList.add("active");
      } else if (path === "contact.html") {
        document.getElementById("nav-contact").classList.add("active");
      }
    })();
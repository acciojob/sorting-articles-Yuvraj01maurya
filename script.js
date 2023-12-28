//your JS code here. If required.
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    function stripPrefix(article) {
      const prefixes = ['the ', 'a ', 'an '];
      let result = article;
      prefixes.forEach(prefix => {
        if (article.toLowerCase().startsWith(prefix)) {
          result = article.slice(prefix.length);
        }
      });
      return result;
    }

    function displaySortedArticles() {
      const bandList = document.getElementById('band');
      const sortedBands = bands.slice().sort((a, b) => {
        const stripA = stripPrefix(a);
        const stripB = stripPrefix(b);
        return stripA.localeCompare(stripB);
      });

      sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
      });
    }

    displaySortedArticles();
if (Meteor.isClient) {
  Template.articles.helpers({
    articles: function() {
      return [{
        title: "Google",
        url: "http://www.google.com",
        author: {
          name: "Ali Gardezi",
          age: "18",
          location: "Larkana"
        }
      }, {
        title: "Yahoo",
        url: "http://www.yahoo.com",
        author: {
          name: "Mubeen Ali",
          age: "28",
          location: "Raiwind"
        }
      }, {
        title: "DuckDuckGo",
        url: "http://www.duckduckgo.com",
        author: {
          name: "Ibrahim Zahoor",
          age: "20",
          location: "Bani Gala"
        }
      }];
    }
  });

  Template.articles.events({
  });

  Template.articleItem.events({
    'click': function(event, template) {
    }
  });

  Template.authorItem.events({
    'click': function(event, template) {
    }
  });
}

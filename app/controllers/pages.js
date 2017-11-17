exports.page1 = function (req, res) {
    res.render('pages/pageTemplate', {
      title: 'Page 1',
      text: 'Page 1 Text'
    });
  };
exports.page2 = function (req, res) {
    res.render('pages/pageTemplate', {
        title: 'Page 2',
        text: 'Page 2 Text'
    });
};
exports.page3 = function (req, res) {
    res.render('pages/pageTemplate', {
        title: 'Page 3',
        text: 'Page 3 Text'
    });
};
exports.page4 = function (req, res) {
    res.render('pages/pageTemplate', {
        title: 'Page 4',
        text: 'Page 4 Text'
    });
};
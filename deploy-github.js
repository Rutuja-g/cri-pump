const { createCommand } = require('gh-pages');

const cmd = createCommand();

cmd.args = ['-d', 'build'];

cmd.execute();
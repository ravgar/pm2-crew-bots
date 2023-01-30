const set = require("./settings")
const name = `${set.name}`

module.exports = {
    apps: [
  
      {
        name: `${name} - Moderasyon`,
        script: 'index.js',
        watch: true,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Moderation"
      },
      {
        name: `${name} - Yönetim`,
        script: 'index.js',
        watch: true,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Yönetim"
      },
  
         ]
  };
  
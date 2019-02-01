const execSync = require('child_process').execSync

const exec = (cmd, env) =>
  execSync(cmd, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, env)
  })

if (process.env.CI) {
  exec('lerna bootstrap')
} else {
  exec('lerna bootstrap')
}
